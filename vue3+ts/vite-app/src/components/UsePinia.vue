<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTestStore } from '../store'
const Test = useTestStore()
// 修改 state 中值
// Test.current++
// Test.$patch({ current: 1111 })
// Test.$patch((state)=> {
//     state.current = 22222
// })
// Test.$state = {
//     current: 3333,
//     name: 'hahha'
// }
// Test.setCurrent(567)

// store 值解构之后如何保持同时改变, 利用  storeToRefs ， 原理与 ToRefs 相同，在上面包裹了一层
const { current,name } = storeToRefs(Test)
// current.value++
// Test.name = 'hahha'

// actions 同步和异步， getters： 有缓存

// Test.$subscribe((args, state)=> {  // 每次修改 state 里面的值都会触发
//     console.log('====>', args)
//     console.log('====>', state)
// })


// Test.$onAction((args)=> {  // 每次调用 actions 函数，都会触发
    // args.after(()=> console.log('aafter'))
    // args.onError(()=> console.log('onError'))
// }, true)

const change = () => {
    // Test.setUser()
    Test.setMyUser()
}

const reset = () => {
    Test.$reset()
}
</script>

<template>
<div>
    origin: {{current}} --- {{name}} <br>
    usepinia: {{Test.current}} --- {{Test.name}} <br>
    {{Test.user}} <br>
    {{Test.newName}} <br>
    <button @click="change">change</button>
    <button @click="reset">reset</button>


</div>
</template>

<style scoped>
</style>
