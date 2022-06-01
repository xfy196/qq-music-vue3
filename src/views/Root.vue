<template>
  <div class="flex items-stretch w-screen h-screen overflow-hidden">
    <div class="flex-shrink-0 w-56 h-screen">
      <Menu />
    </div>
    <div class="flex flex-col flex-1">
      <div class="h-14">
        <Header />
      </div>
      <div class="flex-1 overflow-hidden">
        <ElScrollbar>
          <div class="container mx-auto">
            <RouterView />
          </div>
        </ElScrollbar>
      </div>
      <div class="h-20">
        <Footer />
      </div>
    </div>

    <PlayList />
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/layout/menu/Menu.vue";
import Header from "@/components/layout/header/Header.vue";
import Footer from "@/components/layout/footer/Footer.vue";
import PlayList from "@/components/layout/playList/PlayList.vue";
</script>

<style lang="scss"></style>
