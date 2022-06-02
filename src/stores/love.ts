import type { Song } from "@/models/song";
import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import { useDetail, useLikeList } from "../utils/api";
import { useUserStore } from "./user";
export const useLoveStore = defineStore("love", {
  state: (): {
      songs: Song[],
      ids: number[]
  } => ({
    songs: [],
    ids: []
  }),
  actions: {
    async getLoveList() {
      let userStore = useUserStore();
      let { code, ids } = await useLikeList(userStore.profile.userId);
      if (code === 200) {
        try {
            this.ids = ids
            let details = await useDetail(ids.join(','))
            if(details.code === 200){
                this.songs = details.songs
            }
        } catch (error) {
        }
        return;
      }
      ElMessage({
        type: "error",
        message: "获取喜欢列表失败",
      });
    },
  },
  getters: {},
});
