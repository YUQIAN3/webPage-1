<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav"></Topnav>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">开始</router-link>
          </li>
        </ol>
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
import { inject, Ref } from "vue";

import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
.router-link-active {
  color: #7d6bb4;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 70px;
    padding-left: 175px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: linear-gradient(
    145deg,
    rgba(233, 235, 250, 1) 0%,
    rgba(243, 233, 241, 1) 99%
  );
  width: 180px;
  padding: 16px 0;
  position: fixed;
  padding-top: 70px;
  top: 0px;
  left: 0;
  height: 100%;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    margin-left: -35px;

    > li {
      padding: 4px 20px;
    }
  }
}
main {
  overflow: auto;
}
</style>
