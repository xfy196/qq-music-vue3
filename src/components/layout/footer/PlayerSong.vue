<template>
  <div class="flex player-song">
    <img
      alt=""
      class="rounded w-11 h-11"
      :src="song.al?.picUrl || OpticalDisk"
    />
    <div class="flex flex-col justify-between ml-2 text-xs">
      <div class="truncate cursor-pointer w-52 2xl:w-96">
        <div class="flex">
          <div
            v-if="songUrl.freeTrialInfo?.end > 0"
            class="bg-red-500 text-xs text-white rounded px-0.5 scale-75"
          >
            试听
          </div>
          <span>{{ song.name || "开源云音乐" }}</span>
          <span class="ml-2 text-dc"
            >- {{ song.ar?.first().name || `SmallRuralDog` }}</span
          >
        </div>
      </div>
      <div class="flex gap-x-3 text-main">
        <IconPark
          :icon="Like"
          :theme="hasLike ? 'filled' : 'outline'"
          :fill="hasLike ? '#10b981' : '#6b7280'"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        />
        <IconPark
          :icon="DownTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        />
        <IconPark
          :icon="MoreTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
        />
        <el-badge :value="1000" :max="999" class="badge">
          <IconPark
            :icon="Comment"
            size="18"
            :stroke-width="3"
            class="text-slate-400 hover-text"
          />
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Like, DownTwo, MoreTwo, Comment } from "@icon-park/vue-next";
import { usePlayerStore } from "@/stores/player";
import { useLoveStore } from "@/stores/love";
import { OpticalDisk } from "@/assets/img";
import IconPark from "@/components/common/IconPark.vue";
import { storeToRefs } from "pinia";
import { computed } from "@vue/runtime-core";

const { song, songUrl } = storeToRefs(usePlayerStore());

const loveStore = useLoveStore();
const { ids } = storeToRefs(loveStore);

const hasLike = computed(() => {
  return ids.value.includes(song.value.id);
});
</script>

<style lang="scss">
.player-song {
  .badge {
    .el-badge__content {
      @apply scale-75 left-1 bg-stone-100 text-slate-500 bg-opacity-80 right-auto;
      @apply dark:bg-stone-900;
    }
  }
}
</style>
