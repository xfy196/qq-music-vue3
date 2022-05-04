<template>
  <div class="container">
    <div class="wrapper items-center justify-center flex">
      <div class="mb-5">
        {{ videoDetail?.title }}
      </div>
      <!-- 播放器容器 -->
      <div class="play-container px-4 w-full">
        <video ref="playerRef"></video>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useVideoDetail, useVideoUrl } from "@/utils/api";
import { onMounted, onUnmounted, ref } from "vue";
import type { VideoDetail, VideoUrl } from "@/models/video";
import { usePlayerStore } from "@/stores/player";

import Plyr from "plyr";
import "plyr/dist/plyr.css";
const route = useRoute();
const id = route.query.id as string;
const videoDetail = ref<VideoDetail>();
const videoUrls = ref<VideoUrl[]>([]);
const playerRef = ref<HTMLElement>();
const { setPlay, setPause } = usePlayerStore();

onMounted(async () => {
  videoDetail.value = await useVideoDetail(id);
  videoUrls.value = await useVideoUrl(id);
  document.title = videoDetail.value.title;
  setPause();
  const player = new Plyr(playerRef.value as unknown as HTMLElement, {
    autoplay: true,
    fullscreen: {
      iosNative: true,
    },
    tooltips: {
      controls: true,
    },
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      "fullscreen",
    ],
  });
  player.source = {
    type: "video",
    sources: [
      {
        src: videoUrls.value[0].url,
      },
    ],
  };
  player.poster = videoDetail.value.coverUrl;
});
onUnmounted(() => {
  setTimeout(() => {
    setPlay();
  }, 1000);
});
</script>
<style lang="scss" scoped>
.container {
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    .play-container {
    }
  }
}
</style>
