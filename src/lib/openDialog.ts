import Dialog from './Dialog.vue'
import {createApp,h}from 'vue'
export const openDialog=(options)=>{
const {title,content,ok,cancel,closeOnClickOverlay}=options
const div=document.createElement('div')
document.body.appendChild(div)
const closed=()=>{
 app.unmount() ;
 div.remove()
}
  const app=createApp({
  render(){
    return h(Dialog,
      {
        visible: true,
        "onUpdate:visible": (newVisible) => {
         if(newVisible===false){
          closed()
         }
          },ok,cancel,closeOnClickOverlay:false
        
      },
     
      {title,content})
  }
})
app.mount(div)


}