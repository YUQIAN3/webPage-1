<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的轱辘UI框架</h2>
      <p class="action">
        <a href="http://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from '@vue/runtime-core';
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
  .topnavAndBanner{
    background: linear-gradient(145deg, rgba(233,235,250,1) 0%, rgba(243,233,241,1) 99%);
  }
  .banner{
    padding: 100px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    > .action{
      padding:8px 0;
      a {
        margin:0  8px;;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>
