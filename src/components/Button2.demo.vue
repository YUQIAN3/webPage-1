<demo> 支持 size</demo>
<template>
  <div>
    <div>
      <Button>正常</Button>
      <Button size="big">大</Button>
      <Button size="small">小</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
