<template>
  <div class="p-5" v-show="mvUrl">
    <div class="flex gap-x-5">
      <div class="flex-1">
        <video ref="playerRef" class="aspect-video w-full" />
      </div>
      <div class="hidden w-80 flex-shrink-0 xl:block">
        <div>大家都在看</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMvUrl } from "@/utils/api";
import { useRoute } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";
import type { MvUrl } from "@/models/mv";
import { usePlayerStore } from "@/stores/player";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const route = useRoute();

const id = Number(route.query.id);

const { setPlay, setPause } = usePlayerStore();

const playerRef = ref<HTMLElement>();
const mvUrl = ref<MvUrl>();

onMounted(async () => {
  mvUrl.value = await useMvUrl(id);

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
        src: mvUrl.value.url,
      },
    ],
  };
});

onUnmounted(() => {
  setTimeout(() => {
    setPlay();
  }, 1000);
});
</script>
<style lang="scss"></style>
