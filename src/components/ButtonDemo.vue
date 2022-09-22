<template>
  <div>
    <h1>button 示例</h1>
    <hr />
    <Demo :component="Button1Demo"></Demo>
    <Demo :component="Button2Demo"></Demo>
    <Demo :component="Button3Demo"></Demo>
    <Demo :component="Button4Demo"></Demo>
    <Demo :component="Button5Demo"></Demo>
    <h1>综合应用</h1>
    <h3>不同类型和不同大小结合</h3>
    <div>
      <Button theme="link" size="normal">哈哈哈</Button>
      <Button size="big">大大大</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
    <hr />
    <h3>不同类型和不同大小和不同程度结合</h3>
    <Button theme="link" level="main">主要按钮</Button>
    <Button level="danger" size="big">主要按钮</Button>
    <div>
      <hr />
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: { Button, Demo },
  setup() {
    return { Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo };
  },
};
</script>
