<template>
  <div id="app">
	app
	<!-- 路由容器 -->
	<router-link to="/home">home</router-link><!-- 默认会被渲染为一个a标签 -->
	<router-link to="/film">film</router-link>
	<router-link to="/card">card</router-link>
    <router-view/><!-- 路由子组件加载位置 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
