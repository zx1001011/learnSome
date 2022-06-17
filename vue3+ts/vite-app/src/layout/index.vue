<template>
    <div class="layout">
        <div class="left">
            <Menu></Menu>
        </div>
        <div class="right">
            <Header></Header>    
            <Content class="content"></Content>
        </div>
    </div>
</template>

<script  setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
</script>

<style scoped lang="less">
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;

    .left {
        width: 200px;
        background-color: aquamarine;
    }

    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;  
        // flex 不知道怎么设置滚动条样式， 这样设置高度不是也很好的吗, 也不知道啥原因好了
        // height: calc(100% - 50px);  
    }
}
</style>