<template>
  <div> Dialog 展示</div>  
 <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
 <!-- <Dialog :visible="x" @update:visible="x=$event"></Dialog> 两种写法都可以，下面的是语法糖-->
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>记得写标题哦</strong>
    </template>
    
    <template v-slot:content>
      <strong>你好</strong>
   <div>hi</div>
    </template>
  
   </Dialog>
   <hr>
   <h1>示例2</h1>
   <Button @click="showDialog">show</Button>
 <div style="position:relative;z-index:2;width:300px;height:300px;background:grey;"></div>
   
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
import {openDialog} from '../lib/openDialog'
export default {
  components:{
    Dialog,
    Button,
  },
  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
    }
    const f1=()=>{
      return false
    }
    const f2=()=>{
    }
    const showDialog=()=>{
      openDialog({
        title:'标题',
        content:'你好啊',
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        },
      })
    }
    return {x,toggle,f1,f2,showDialog}
  }
}
</script>