<template>
  <div>
    button 示例
   <h1> 示例</h1>
   <div>
    <Button  @click="onClick"
             @focus="onClick"
             @mouseover="onClick"
             size="small"
     >你好</Button>
   </div>
 
  </div>
</template>
<script lang="ts">
 import Button from '../lib/Button.vue'
export default {
  components:{Button},
  setup(){
    const onClick=()=>{
      console.log('hello')
    }
    return {onClick}
  }
}
</script>