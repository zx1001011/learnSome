<template>
    <div class="content scroll">
        <div class="items" v-for="item in 100" :key="item">
            {{item}}
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.content {
    background-color: azure;
    overflow: auto;

    .items {
        border: 1px solid #eeeeee;
        height: 30px;
    }



}
</style>