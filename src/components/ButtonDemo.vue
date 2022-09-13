<template>
  <div>
    button 示例
   <h1> 示例</h1>
   <div>
    <Button >你好</Button>
    <Button  theme="button" >按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text" >文本</Button>
   </div>
 
  </div>
</template>
<script lang="ts">
 import Button from '../lib/Button.vue'
export default {
  components:{Button},
  
}
</script>