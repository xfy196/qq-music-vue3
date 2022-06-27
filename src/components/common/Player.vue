<template>
  <div
    v-show="visible"
    class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-white player__container"
  >
    <div
      class="absolute top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen bg-center bg-no-repeat bg-cover bg__player blur-3xl opacity-60"
    ></div>
    <el-drawer
      v-model="visible"
      custom-class="player__drawer-lyric"
      size="100%"
      direction="btt"
      :title="`${song.name}-${song.ar[0].name}`"
      :before-close="handleClose"
    >
      <div class="w-24 h-24">
        <img :src="song.al.picUrl" class="w-full h-full" alt="" />
      </div>
      <div
        ref="lyricWrapper"
        class="z-40 w-full mt-5 overflow-auto text-white h-96 lyric-wrapper"
      >
        <ul class="flex flex-col items-center content">
          <li :ref="setLyricRefs" v-for="(lrc, index) in lyric" :class="{'text-emerald-400': index === currentLineNum}" :key="lrc.time">
            {{ lrc.txt }}
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";
import Lyric from "@/utils/lyric-parser";
import type { lineType } from "@/utils/lyric-parser";
import {
  watch,
  ref,
  nextTick,
  onMounted,
  watchEffect,
} from "@vue/runtime-core";
import BScroll from "@better-scroll/core";
import { storeToRefs } from "pinia";
import type { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(MouseWheel);
const props = defineProps(["visible"]);
const emits = defineEmits(["update:visible"]);
const playerStore = usePlayerStore();

const { song, lrc } = storeToRefs(playerStore);
const bscroll = ref<BScrollConstructor>();
const lyric = ref<Array<lineType>>([]);

const lyricWrapper = ref();
const currentPlayingLyric = ref<string>("");
const currentLineNum = ref<number>(-1);
const speed = ref<number>(1);
const isScroll = ref<boolean>(false)
const backgroundVar = ref<any>({
  background: `url(${song.value.al.picUrl})`,
});
const lyricRefs = ref<HTMLElement[]>([])
watch(song, () => {
  backgroundVar.value = {
    "background-image": `url(${song.value.al.picUrl})`,
  };
});
const handleClose = () => {
  emits("update:visible", false);
};
const handleLyric = ({ lineNum, txt }: { lineNum: number; txt: string }) => {
  console.log(lineNum, txt)
  if (lyric.value.length === 0) {
    return;
  }
  currentPlayingLyric.value = txt;
  currentLineNum.value = lineNum;
};
const setLyricRefs = (el: HTMLElement) => {
  lyricRefs.value.push(el)
}
watchEffect(() => {
  if (props.visible && lyric.value.length > 0 && !bscroll.value) {
    nextTick(() => {
      bscroll.value = new BScroll(lyricWrapper.value, {
        probeType: 1,
        click: true,
        mouseWheel: true,
        scrollY: true,
        momentum: false,
        bounce: false,
      });
      bscroll.value.on("mousewheelMove", () => {
        isScroll.value = true
      });
      bscroll.value.on("mousewheelEnd", () => {
        isScroll.value = false
      });
    });
  }
});
watch(currentLineNum, (val) => {
  if(!bscroll.value) return
  if(isScroll.value) return;
  if(val > 7){
    let lineEl: HTMLElement = lyricRefs.value[val - 7]
    bscroll.value?.scrollToElement(lineEl, 100, 0, 0)
  }else {
    bscroll.value?.scrollTo(0, 0, 1000)
  }
})
watch(lrc, (val) => {
  let l = new Lyric(val.lyric, handleLyric, speed.value);
  l.play()
  l.seek(0)
  lyric.value = l.lines;
});
</script>
<style lang="scss" scoped>
.player__container {
  :deep(.bg__player) {
    background-image: v-bind("backgroundVar.background");
    transform: translateZ(0);
  }
  :deep(.el-overlay) {
    @apply bg-transparent;
    .player__drawer-lyric {
      @apply bg-transparent;
      .el-drawer__header {
        @apply text-white z-50;
      }
      .el-drawer__body {
        @apply flex items-center flex-col;
      }
    }
  }
}
</style>
