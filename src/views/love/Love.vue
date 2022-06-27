<template>
  <div class="container relative">
    <div class="flex pb-3 pl-3 border-b-2 border-solid border-emerald-500">
      <div>
        <span class="text-xl">我喜欢的歌曲列表</span>
        <span class="ml-4 text-sm text-gray-400">
          {{ songs.length }}
          <span class="text-white">首</span>
        </span>
      </div>
    </div>
    <div v-loading="loading" v-if="loading" class="absolute w-full h-60"></div>
    <div class="px-3">
      <template v-for="song in songs" :key="song.id">
        <song-list-item
          :trackSong="true"
          :show-ar-name="false"
          show-al-name
          :song="song"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLoveStore } from "@/stores/love";
import SongListItem from "@/components/common/SongListItem.vue";
import { ref } from "vue";

const loveStore = useLoveStore();
const loading = ref<boolean>(true);
const { songs } = storeToRefs(loveStore);
loveStore
  .getLoveIds()
  .then(() => {
    loveStore.getLoveList().finally(() => {
      loading.value = false;
    });
  }).catch(() => {
    loading.value = false;
  });
</script>
