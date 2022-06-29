<template>
<!-- id="app" 不能有，会把 vue 子应用直接挂到这上面 -->
  <div >  
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/vue">vue 子应用</el-menu-item>
      <el-menu-item index="/react">react 子应用</el-menu-item>
    </el-menu>

    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<style>
</style>
