<template>
  <!-- <div>// <itch v-model:value="bool"></Switch></div> -->
  <div>
    <h1>Switch 组件示例</h1>

    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Switch2Demo from "./Switch2.Demo.vue";
import Switch1Demo from "./Switch1.Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>
