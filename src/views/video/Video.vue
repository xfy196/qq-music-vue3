<template>
  <div class="relative p-5 video-page">
  <div v-loading="loading" class="absolute w-full h-60"></div>
    <div class="flex items-center justify-between">
      <el-button
        round
        v-popover="popoverRef"
        v-click-outside="onClickOutside"
        @click="categoryVisible = true"
        class="px-5 button-outline"
      >
        <span class="mr-2">全部视频</span>
        <IconPark :icon="Right" />
      </el-button>
      <el-popover
        width="60%"
        placement="bottom-start"
        popper-style="padding:0;"
        ref="popoverRef"
        trigger="click"
        virtual-triggering
        persistent
        v-model:visible="categoryVisible"
      >
        <template #reference> </template>
        <div>
          <div class="pt-5 pl-5 text-xl">全部视频</div>
          <div class="py-5 pl-5 h-96">
            <ElScrollbar>
              <div class="grid grid-flow-row grid-cols-5 gap-5 text-xs">
                <div
                  class="hover-text"
                  v-for="item in videoGroup"
                  :key="item.id"
                  @click.stop="handleSelectGroup(item)"
                >
                  {{ item.name }}
                </div>
              </div>
            </ElScrollbar>
          </div>
        </div>
      </el-popover>

      <div class="flex text-xs gap-x-4">
        <div
          class="hover-text"
          @click.stop="handleSelectGroup(item)"
          v-for="item in videoGroup.slice(0, 8)"
          :key="item.id"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div v-if="isLogin" class="grid grid-flow-row grid-cols-3 gap-5 mt-5">
      <div v-for="{ data } in videoList" :key="data.vid">
        <CoverPlay
          :onPlay="onPlay.bind(null, data)"
          :pic-url="data.coverUrl"
          video
        />
      </div>
    </div>
    <div class="w-full mt-4" v-if="!isLogin">
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
import { onMounted, ref, toRefs, unref } from "vue";
import IconPark from "@/components/common/IconPark.vue";
import type { Video, VideoData, VideoGroup } from "@/models/video";
import { useVideoGroup } from "@/utils/api";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { ClickOutside as vClickOutside } from "element-plus";

const categoryVisible = ref<boolean>(false);
const { videoGroup } = toRefs(useVideoStore());
const { getVideoGroup } = useVideoStore();
const userStore = useUserStore();
const { isLogin } = storeToRefs(userStore);
const loading = ref<boolean>(false);
const videoList = ref<Video[]>([]);
const popoverRef = ref();
const router = useRouter();
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

// 选择不同分类请求不同的数据
const handleSelectGroup = async (videoGroup: VideoGroup) => {
  try {
    categoryVisible.value = false;
    loading.value = true;
    videoList.value = await useVideoGroup(videoGroup.id);
  } catch (error) {
    //
  } finally {
    loading.value = false;
  }
};

const onClickOutside = () => {
  categoryVisible.value = false;
};

// 播放视频
const onPlay = (video: VideoData) => {
  router.push({
    path: `/video/detail`,
    query: {
      id: video.vid,
    },
  });
};

onMounted(() => {
  getVideoGroup();
  getData();
});
</script>
<style lang="scss"></style>
