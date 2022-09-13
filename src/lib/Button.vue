<template>
    <button class="gulu-button"
    :class="`theme-${theme}`"> 
       <slot></slot></button>
</template>
<script lang="ts">
 export default {
 props:{
  theme:{
    type:String,
    default:'Button',

  },
 }

  }
 
 
</script>
<style lang="scss" scoped>

</style>