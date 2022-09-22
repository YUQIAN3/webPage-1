<demo>一键打开 Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
    <div
      style="
        position: relative;
        z-index: 2;
        width: 300px;
        height: 300px;
        background: #f0ecff;
      "
    ></div>
  </div>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好啊",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
