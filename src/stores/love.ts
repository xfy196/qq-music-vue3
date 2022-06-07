import type { Song } from "@/models/song";
import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import { useDetail, useLikeList, useLikeSong } from "../utils/api";
import { useUserStore } from "./user";
export const useLoveStore = defineStore("love", {
  state: (): {
    songs: Song[];
    ids: number[];
  } => ({
    songs: [],
    ids: [],
  }),
  actions: {
    async getLoveIds() {
      let userStore = useUserStore();
      let { code, ids } = await useLikeList(userStore.profile.userId);
      if (code === 200) {
        this.ids = ids;
      }
    },
    async getLoveList() {
      try {
        let details = await useDetail(this.ids.join(","));
        if (details.code === 200) {
          this.songs = details.songs;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: "获取喜欢列表失败",
        });
        return;
      }
    },
    // 设置是否喜欢此音乐
    async setLike(
      id: string | number,
      like: boolean,
      trackSong: boolean = false
    ) {
      try {
        let res = await useLikeSong(id, like);
        if (res.code === 200) {
          await this.getLoveIds();
          trackSong && (await this.getLoveList());
          ElMessage({
            type: "success",
            message: !like ? "取消喜欢成功" : "喜欢成功",
          });
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: "设置失败",
        });
      }
    },
  },
  getters: {},
});
