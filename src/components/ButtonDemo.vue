<template>
  <div>
    button 示例
    <hr>
   <h1> 示例1</h1>
   <div>
    <Button >你好</Button>
    <Button  theme="button" >按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text" >文本</Button>
   </div>
   <hr>
   <h1> 示例2</h1>
   <div>
   <Button >正常</Button>
   <Button size="big">大</Button>
   <Button size="small">小</Button>
  </div>
  <hr>
  <h1> 示例3</h1>
  <div>
  <Button theme="link" size="normal">哈哈哈</Button>
   <Button size="big">大大大</Button>
   <Button theme="text"   size="small">小小小</Button>
  </div>
   <hr>
  <h1> 示例4</h1>
  <div>
    <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
  </div>
  <hr>
  <h1> 示例5</h1>
  <Button theme="link" level="main">主要按钮</Button>
  <Button  level="danger"  size="big">主要按钮</Button>
  <div>
 <hr> 
    <h1>示例6 禁用按钮</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled size="small">禁用文本按钮</Button>
  </div>
  <hr>
  <h1>示例7 加载按钮</h1>
  <div>
    <Button size="big" loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
  </div>

</div>
</template>
<script lang="ts">
 import Button from '../lib/Button.vue'
export default {
  components:{Button},
  
}
</script>