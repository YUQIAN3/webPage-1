<demo> 支持 加载中</demo>
<template>
  <div>
    <div>
      <Button size="big" loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
