<template>
  <div>
      <h1>
          购物车
      </h1>
        <table>
            <thead>
                <th>
                    <tr>
                        <td>name</td>
                        <td>num</td>
                        <td>price</td>
                        <td>actions</td>
                    </tr>
                </th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td>{{item.name}}</td>
                    <td><button @click="addAndSub(item, false)">-</button>
                    {{item.num}}
                    <button @click="addAndSub(item, true)">+</button></td>
                    <td>{{item.price}}</td>
                    <td><button @click="del(index)">删除</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td col="4">总价: {{$total}}</td>
                </tr>
            </tfoot>
        </table>

  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
type Shop = {
    name: String,
    num: number,
    price: number
}
let $total = ref(0) // 设置响应的 总价
const data = reactive<Shop[]>([  // 响应式
    {
        name: '裤子',
        num: 1,
        price: 10
    },
    {
        name: '袜子',
        num: 3,
        price: 50
    },
    {
        name: '鞋子',
        num: 1,
        price: 20
    }
])

const addAndSub = (item: Shop, type: boolean): void => {
    if (item.num > 1 && !type) {
        item.num--
    }
    if (item.num < 99 && type) {  // type 控制加减
        item.num++
    }
}
const del = (index:number) => {
    data.splice(index, 1)
}

$total = computed<number>(() => {
    return data.reduce((prev, next) => {
        return prev + next.num * next.price
    }, 0)  // 起始值 0, 
})

</script>