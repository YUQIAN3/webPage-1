<template>
  <div class="gulu-tabs">
  <div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="container">
  <div class=" gulu-tabs-nav-item" @click="select(t)"   
    :class="{choose:t===choose}"
     v-for="(t,index) in titles" :key="index"
     :ref="el=>{if(el) navItems[index]=el}" >{{t}}</div>
     <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    
  <div class="gulu-tabs-content">
   <!-- <component class="gulu-tabs-content-item"
    :is="current" />  -->
    <component class="gulu-tabs-content-item"
    :class="{choose:c.props.title===choose}"
    v-for="(c,index) in defaults" :is="c" :key="index" />
</div>
</div>
</div>

</template>

<script lang="ts">
  import Tab from './Tab.vue'
  import {computed,onMounted,onUpdated,ref} from 'vue'
import { updateExpression } from '@babel/types'
export default {
  props:{
    choose:{
      type:String,
    }
  },
  setup(props,context){
       const navItems=ref<HTMLDivElement[]>([])
       const indicator=ref<HTMLDivElement>()
        const container=ref<HTMLDivElement>()
       const  x=()=>{
       const divs=navItems.value
     const result=divs.filter(div=>div.classList.contains('choose'))[0]
     const {width,left:left2}=result.getBoundingClientRect() 
     if(indicator.value==undefined){  return}
    indicator.value.style.width= width + 'px'
    if(container.value==undefined){return }
    const {left:left1}= container.value.getBoundingClientRect()
    const left=left2-left1;
    indicator.value.style.left= left + 'px'
          }
    onMounted(x ),
    onUpdated(x)
  const defaults=context.slots.default()
  defaults.forEach((tag)=>{
    if(tag.type!=Tab){
      throw new Error('Tabs 的子标签必须是Tab')
    }
  })
  const current=computed(()=>{
  
   return defaults.filter((tag)=>{

    return tag.props.title===props.choose
  })[0]
  })
  
  const titles=defaults.map((tag)=>{
    return tag.props.title
  })
  const select=(title:string)=>{
    console.log(title)
    context.emit('update:choose',title)
  }
  return {defaults,titles,current,select,navItems,indicator,container}
}
  }
</script>

<style lang="scss" >
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
 .gulu-tabs {
  
  & &-nav {
    display: flex;
    color: $color;
    border-bottom:1px solid $border-color;
    position:relative;
    
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.choose {
        color: $blue;
      }
    }
    &-indicator{
      position: absolute;
      height:3px;
      background: $blue;
      left:0;
      bottom: -1px;
      transition:250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
      color:red;
      display: none;
    }
   & .choose{
    color:red;
      display: block; 
    }

}
}

</style>