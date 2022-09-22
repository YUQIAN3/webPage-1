<demo> 支持禁用</demo>
<template>
  <div>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled size="small">禁用文本按钮</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
