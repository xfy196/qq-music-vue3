<template>
  <div
    class="flex items-center w-full song-item hover-bg-main"
    :class="{ playing: id === song.id }"
    @dblclick="play(song.id)"
  >
    <div class="flex items-center justify-between flex-1 flex-shrink-0 pr-5">
      <div class="flex items-center flex-1 flex-shrink-0 w-10">
        <IconPark
          @click.stop="setLike(song.id, !isLike, trackSong)"
          :icon="Like"
          :theme="isLike ? 'filled' : 'outline'"
          :fill="isLike ? '#10b981' : '#6b7280'"
          size="16"
          class="mr-1 text-gray-500 cursor-pointer hover:text-emerald-500"
        />
        <div class="truncate" style="max-width: 75%">
          <small>{{ song.name }}</small>
        </div>
        <IconPark
          v-if="song.mv > 0"
          class="ml-2 text-orange-400 cursor-pointer"
          size="16"
          :icon="PlayTwo"
          @click="router.push({ name: Pages.mvDetail, query: { id: song.mv } })"
        />
      </div>
      <div class="flex-shrink-0 hidden icon-action">
        <div class="flex items-center gap-x-1.5 text-gray-400 ml-2">
          <IconPark
            title="播放"
            :icon="PlayOne"
            size="20"
            class="hover-text"
            @click="play(song.id)"
          />
          <IconPark title="添加到" :icon="Add" size="16" class="hover-text" />
          <IconPark title="下载" :icon="DownTwo" size="16" class="hover-text" />
          <IconPark
            title="更多操作"
            :icon="MoreTwo"
            size="16"
            class="hover-text"
          />
        </div>
      </div>
    </div>
    <div
      class="flex-shrink-0"
      :class="{ 'w-1/4': showAlName, 'w-1/3': !showAlName }"
      v-if="showArName"
    >
      <div class="w-9/12 truncate">
        <small
          class="max-w-full truncate hover-text"
          @click="
            router.push({
              name: 'artistDetail',
              query: { id: song.ar.first().id },
            })
          "
          >{{ song.ar.first().name }}</small
        >
      </div>
    </div>
    <div
      class="flex-shrink-0"
      :class="{ 'w-1/4': showArName, 'w-1/3': !showArName }"
      v-if="showAlName"
    >
      <div class="w-9/12 truncate">
        <small
          class="truncate hover-text"
          @click="router.push({ name: 'album', query: { id: song.al.id } })"
          >{{ song.al.name }}</small
        >
      </div>
    </div>
    <div class="flex-shrink-0 w-20">
      <div class="w-20 truncate">
        <small>{{ useFormatDuring(song.dt / 1000) }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Add,
  DownTwo,
  Like,
  MoreTwo,
  PlayOne,
  PlayTwo,
} from "@icon-park/vue-next";
import { useFormatDuring } from "@/utils/number";
import { usePlayerStore } from "@/stores/player";
import IconPark from "@/components/common/IconPark.vue";
import type { Song } from "@/models/song";
import { useRouter } from "vue-router";
import { Pages } from "@/router/pages";
import { storeToRefs } from "pinia";
import { useLoveStore } from "@/stores/love";
import { computed } from "vue";

const router = useRouter();

const props = defineProps<{
  song: Song;
  showArName?: boolean;
  showAlName?: boolean;
  trackSong?: boolean;
}>();
const { play } = usePlayerStore();
const { setLike } = useLoveStore();
const { ids } = storeToRefs(useLoveStore());
const { id } = storeToRefs(usePlayerStore());
const isLike = computed(() => ids.value.includes(props.song.id));
</script>

<style lang="scss" scoped>
.song-item {
  @apply py-2.5 pl-0.5;
  &:hover {
    .icon-action {
      @apply inline-block;
    }
  }
}

.playing {
  @apply bg-emerald-50 dark:bg-stone-800;
}
</style>
