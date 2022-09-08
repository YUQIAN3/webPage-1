<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref } from 'vue'
import { provide } from 'vue'
export default {
  name: 'App',
  setup(){
    const asideVisible=ref(false)
    provide('asideVisible',asideVisible)
  }
}
</script>
