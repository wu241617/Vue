<template>
	<div>
		我是nowplaying组件
		<!-- 编程式导航 -->
		<ul>
			<li v-for="(data,index) in datalist" @click="handleClick(index)">
				{{data}}
			</li>
		</ul>
		
		
	</div>
</template>

<script>
	import router from "../router/index.js"
	export default {
		name:"nowplaying",
		data(){
			return {
				datalist:["film1","film2","film3","film4"]
			}
		},
		methods:{
			handleClick:function(index){
				router.push(`/detail/${index}`);
			}
		}
	}
</script>

<style lang="css" scoped="scoped">
	
</style>