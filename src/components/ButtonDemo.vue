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
   <hr>
   <Button >正常</Button>
   <Button size="big">大</Button>
   <Button size="small">小</Button>
 
  </div>
</template>
<script lang="ts">
 import Button from '../lib/Button.vue'
export default {
  components:{Button},
  
}
</script>