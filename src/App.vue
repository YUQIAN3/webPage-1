<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref } from 'vue'
import { provide } from 'vue'
export default {
  name: 'App',
  setup(){
    const width=document.documentElement.clientWidth
    
    const asideVisible=ref(width<=500?false:true)
    provide('asideVisible',asideVisible)
  }
}
</script>
