<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { router } from './router'
import { ref } from 'vue'
import { provide } from 'vue'
export default {
  name: 'App',
  setup(){
    const width=document.documentElement.clientWidth
    
    const asideVisible=ref(width<=500?false:true)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      if(width<=500){
        asideVisible.value=false
      }
      
    })
  }
}
</script>
