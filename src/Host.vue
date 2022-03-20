<template>
  <div class="container mx-auto flex flex-col items-center  h-screen">
    <div class="h-1/4"></div>
    <div>
		<img :src="HostSvg" alt="">
    </div>
    <div class="text-2xl mt-5">欢迎体验 VUE3-MUSIC</div>
    <div class="mt-5 w-1/2 xl:w-1/3">
      <div class="mb-5" v-if="pageData.error">
        <el-alert center type="error">
          地址请求失败，请检查后重试！
        </el-alert>
      </div>
      <el-input size="large" placeholder="http://127.0.0.1:3000" v-model="pageData.host">
        <template #prepend>API 地址</template>
        <template #append>
          <el-button :disabled="!pageData.host" @click="sub" :loading="pageData.loading">确定</el-button>
        </template>
      </el-input>
      <div class="text-sm mt-5 flex justify-center">
        <span>如何搭建？</span>
        <a class="hover-text text-emerald-400" href="https://binaryify.github.io/NeteaseCloudMusicApi" target="_blank">网易云音乐-API
          文档</a>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {computed, reactive, ref, toRefs} from "vue";
import axios from "axios";
import {useHostStore} from "@/stores/host";
import HostSvg from "@/assets/img/host.svg"

const pageData = reactive({
  host: '',
  loading: false,
  error: false
})

const {setHost} = useHostStore()

const baseUrl = computed(() => {
  return pageData.host.trimEnd('/')
})

const sub = async () => {
  pageData.loading = true
  try {
    await axios.get(baseUrl.value + '/banner')
    setHost(baseUrl.value)
  } catch (e) {
    pageData.error = true
    setTimeout(() => {
      pageData.error = false
    }, 5000)
  }
  pageData.loading = false
}

</script>
