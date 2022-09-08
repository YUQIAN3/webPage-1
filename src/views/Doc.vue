<template>
  <div>
    <Topnav />
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';

import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible=inject<Ref<boolean>>('asideVisible')
   return{asideVisible}
}
}
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width:500px) {
    position: fixed;
    padding-top: 70px;
    top: 10px;
    left: 10px;
  }
}
</style>
