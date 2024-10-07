<template>
  <van-tabbar v-model="active" route active-color="#f7e087" inactive-color="#a5a29eF">
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/found" icon="location-o">目的地</van-tabbar-item>
    <van-tabbar-item to="/publish" icon="guide-o">写游记</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref, reactive } from "vue";
const active = ref(0);
</script>
<style lang="less" scope></style>
