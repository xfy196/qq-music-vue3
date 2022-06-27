export type lineType = {
  time: number;
  txt: string;
};
type tagRegMapKey = {
  [key: string]: string
}
const tagRegMap = {
  title: "ti",
  artist: "ar",
  album: "al",
  offset: "offset",
  by: "by",
};

const STATE_PAUSE = 0;
const STATE_PLAYING = 1;

function noop() {}

// 符合歌词的时间正则表达式
const timeExp = /\[(\d{2,}):(\d{2})(?:[\.\:](\d{2,3}))?]/g;

export default class Lyric {
  lrc: string;
  lines: Array<lineType>;
  handler: void | Function;
  state: number;
  curLineIndex: number;
  speed: number;
  offset: number;
  tags: object = {};
  startStamp!: number;
  timer!: NodeJS.Timeout;
  constructor(lrc: string, handler: Function | void = noop, speed: number = 1) {
    this.lrc = lrc;
    this.lines = [];
    this.handler = (handler as unknown as boolean) === false ? noop() : handler;
    this.state = STATE_PAUSE;
    this.curLineIndex = 0;
    this.speed = speed;
    this.offset = 0;

    this._init();
  }
  // 初始化的函数
  _init() {
    this._initTag();
    this._initLines();
  }
  // 初始化标签
  _initTag() {
    let tag: keyof typeof tagRegMap;
    for (tag in tagRegMap) {
      const matches = this.lrc.match(
        new RegExp(`\\[${tagRegMap[tag]}:([^\\]]*)]`, "i")
      );
      this.tags[tag] = matches && (matches[1] || "");
    }
  }
  // 初始化的文字线标
  _initLines() {
    const lines = this.lrc.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let result: any = timeExp.exec(line);
      if (result) {
        const txt = line.replace(timeExp, "").trim();
        if (txt) {
          if (result[3].length === 3) {
            result[3] = result[3] / 10;
          }
          this.lines.push({
            time:
              result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10,
            txt,
          });
        }
      }
    }

    this.lines.sort((a: lineType, b: lineType) => {
      return a.time - b.time;
    });
  }
  _findcurLineIndex(time: number) {
    for (let i = 0; i < this.lines.length; i++) {
      if (time <= this.lines[i].time) {
        return i;
      }
    }
    return this.lines.length - 1;
  }

  _callHandler(i: number) {
    if (i < 0) {
      return;
    }
    this.handler &&
      this.handler({
        txt: this.lines[i].txt,
        lineNum: i,
      });
  }

  _playRest(isSeek = false) {
    let line = this.lines[this.curLineIndex];
    clearTimeout(this.timer);
    let delay;
    if (isSeek) {
      delay = line.time - (Date.now() - this.startStamp);
    } else {
      //拿到上一行的歌词开始时间，算间隔
      let preTime = this.lines[this.curLineIndex - 1]
        ? this.lines[this.curLineIndex - 1].time
        : 0;
      delay = line.time - preTime;

    }
    this.timer = setTimeout(() => {
      this._callHandler(++this.curLineIndex);
      if (
        this.curLineIndex < this.lines.length &&
        this.state === STATE_PLAYING
      ) {
        this._playRest();
      }
    }, delay / this.speed);
  }

  changeSpeed(speed: number) {
    this.speed = speed;
  }

  play(offset = 0, isSeek = false) {
    if (!this.lines.length) {
      return;
    }
    this.state = STATE_PLAYING;

    this.curLineIndex = this._findcurLineIndex(offset);
    //现在正处于第this.curLineIndex-1行
    this._callHandler(this.curLineIndex - 1);
    this.offset = offset;
    this.startStamp = Date.now() - offset;

    if (this.curLineIndex < this.lines.length) {
      this.reset();
      this._playRest(isSeek);
    }
  }

  togglePlay(offset: number) {
    if (this.state === STATE_PLAYING) {
      this.stop();
      this.offset = offset;
    } else {
      this.state = STATE_PLAYING;
      this.play(offset, true);
    }
  }

  stop() {
    this.state = STATE_PAUSE;
    this.offset = 0;
    this.lrc = "";
    this.reset();
  }

  seek(offset: number) {
    this.play(offset, true);
  }
  /**
   * 清空之前的歌词定时器
   */
  reset() {
    clearTimeout(this.timer);
  }
}
