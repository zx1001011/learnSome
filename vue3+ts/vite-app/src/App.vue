<script setup lang="ts">
// import {ref, Ref, reactive} from 'vue';
// // const message:string = 'hahha'
// let message: Ref<string> = ref("小曼")
// const changeMsg = () => {
//   message.value = '我改了吗'
//   console.log(message)
// }
// type Style = {
//   color: string,
//   height: string
// }
// type Cls = {
//   normal: boolean,
//   border: boolean
// }
// const a: Style = {  // ts 确定类型
//   color: 'blue',
//   height: '200px'
// }
// const cls: Cls = {
//   normal: true,
//   border: true
// }

// const flag:boolean = true

// const Arr: Array<number> = [1,2,3,4,5]

// let msg = reactive([])
// let obj = reactive({ name: '小曼' })
// obj.name = '大大'

import mylayout from './layout/index.vue'


let a;
let b = "不知名前端"
let c = null;
let d = 0;
let e;
// e ??= a?.b ?? c ?? d?.a ?? b;
// console.log(e)
</script>

<template>
  <div>
    <!-- <h1>{{message}}</h1> <button @click="changeMsg">change</button>
    
    <div v-bind:style="a">mmmmmm</div>
    <div :class="[flag ? 'normal' : 'abnormal']">你看我正常不正常？</div>
    <div :class="cls">你看我正常不正常？</div>
    <div v-for="item in Arr" :key="item">
      <span class="item">{{item}}</span>
    </div>

    <div>
      <div>reactive</div>
      <div>{{msg}}</div>
      <div>{{obj}}</div>
    </div> -->
    <router-link to="/home">shopping cart</router-link> | 
    <router-link to="/layout">layout</router-link> | 
    <router-link to="/pinia">pinia</router-link>
    <router-view></router-view>
    <!-- <mylayout></mylayout> -->
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
/* .normal {
  color: green;
}
.border {
  border: 1px solid #090909;
}
.abnormal {
  color: red;
} */
</style>
