<template>
  <div>
    <h1>Dialog 展示</h1>
  </div>
  <Demo :component="Dialog1Demo"></Demo>
  <hr />
  <Demo :component="Dialog2Demo"></Demo>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import Dialog1Demo from "./Diaglog1.demo.vue";
import Dialog2Demo from "./Diaglog2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Dialog,
    Button,
    Demo,
  },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
  },
};
</script>
