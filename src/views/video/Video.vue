<template>
  <div v-loading="loading" class="p-5 video-page">
    <div class="flex items-center justify-between">
      <el-popover
        width="60%"
        placement="bottom-start"
        popper-style="padding:0;"
      >
        <template #reference>
          <button class="button-outline px-5">
            <span class="mr-2">全部视频</span>
            <IconPark :icon="Right" />
          </button>
        </template>
        <div>
          <div class="text-xl pt-5 pl-5">全部视频</div>
          <div class="h-96 py-5 pl-5">
            <ElScrollbar>
              <div class="text-xs gap-5 grid grid-flow-row grid-cols-5">
                <div
                  class="hover-text"
                  v-for="item in videoGroup"
                  :key="item.id"
                >
                  {{ item.name }}
                </div>
              </div>
            </ElScrollbar>
          </div>
        </div>
      </el-popover>

      <div class="text-xs flex gap-x-4">
        <div
          class="hover-text"
          v-for="item in videoGroup.slice(0, 8)"
          :key="item.id"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div v-if="isLogin" class="grid grid-flow-row grid-cols-3 gap-5 mt-5">
      <div v-for="{ data } in videoList" :key="data.vid">
        <CoverPlay :onPlay="onPlay" :pic-url="data.coverUrl" video />
      </div>
    </div>
    <div class="mt-4 w-full" v-if="!isLogin">
      <iframe
        class="w-full"
        height="500"
        src="//player.bilibili.com/player.html?aid=926106212&bvid=BV1qT4y1J74A&cid=203303939&page=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
      <div class="mt-4 text-center">
        疫情无情，人间有情，我们一起加油。想要看到音乐视频需要登录哦😯
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Right } from "@icon-park/vue-next";
import { useVideoStore } from "@/stores/video";
import { onMounted, ref, toRefs } from "vue";
import IconPark from "@/components/common/IconPark.vue";
import type { Video } from "@/models/video";
import { useVideoGroup } from "@/utils/api";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { useUserStore } from "@/stores/user";

const { videoGroup } = toRefs(useVideoStore());
const { getVideoGroup } = useVideoStore();
const userStore = useUserStore();
const { isLogin } = storeToRefs(userStore);
const loading = ref<boolean>(false);
const videoList = ref<Video[]>([]);
const getData = async () => {
  try {
    loading.value = true;
    videoList.value = await useVideoGroup();
  } catch (error) {
    //
  } finally {
    loading.value = false;
  }
};

// 播放视频
const onPlay = () => {
  console.log("播放");
};

onMounted(() => {
  getVideoGroup();
  getData();
});
</script>
<style lang="scss"></style>
