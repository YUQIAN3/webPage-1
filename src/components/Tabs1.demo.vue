<demo>常规使用</demo>
<template>
  <div>
    <div>
      <Tabs v-model:choose="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2222">内容2</Tab>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航1");
    return { x };
  },
};
</script>
