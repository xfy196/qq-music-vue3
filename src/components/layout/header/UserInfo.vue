<template>
  <div class="flex items-center cursor-pointer hover-text">
    <ElAvatar
      :src="profile && profile.avatarUrl"
      size="small"
      round
      class="bg-gray-200"
    ></ElAvatar>
    <span v-if="!isLogin" class="text-xs ml-1.5" @click="showLogin = true"
      >点击登录</span
    >
    <el-dropdown v-else trigger="hover">
      <span class="el-dropdown-link">
        <span class="text-xs ml-1.5">{{ profile.nickname }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <span @click.stop="handleLogout" class="text-xs dark:text-emerald-600 ">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <el-dialog v-model="showLogin" title="登录" width="330px" append-to-body>
    <div>
      <el-input
        size="large"
        placeholder="手机号码"
        :prefix-icon="Phone"
        v-model="phone"
      />
      <el-input
        size="large"
        class="mt-5"
        type="password"
        placeholder="登录密码"
        :prefix-icon="Lock"
        v-model="password"
      />
      <button
        @click="loginSubmit"
        class="w-full py-5 mt-5 button"
        style="border-radius: 5px"
      >
        登录
      </button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { Lock, Phone } from "@icon-park/vue-next";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
const router = useRouter();
const phone = ref("");
const password = ref("");

const { login, logout } = useUserStore();
const { showLogin, profile, isLogin } = storeToRefs(useUserStore());

const loginSubmit = async () => {
  const loadingService = ElLoading.service({
    fullscreen: true,
    text: "登录中...",
  });
  login(phone.value, password.value);
  loadingService.close();
};
// 退出登录
const handleLogout = () => {
  logout();
};
</script>

<style lang="scss"></style>
