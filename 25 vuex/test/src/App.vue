<template>
	<div id="app">
		<input type="text" placeholder="what are you planning to do:" @keyup.enter="handleKeyup">
		<ul>
			<router-link to="/all" tag="li">所有</router-link><!-- 路由链接 -->
			<router-link to="/active" tag="li">未完成</router-link>
			<router-link to="/computed" tag="li">已完成</router-link>
		</ul>
		<router-view /><!-- 路由 -->
		<hr>
		<p>代办事项{{activenumber}}项</p>
	</div>
</template>

<script>
	import {mapGetters} from "vuex";//导入mapGetters
	export default {
		name: 'App',
		data() {
			return {
				
			}
		},
		methods: {
			handleKeyup: function(ev) {
				//提交mutations-->this.$store.commit("type","payload");
				this.$store.commit("add", {text:ev.target.value,isChecked:false});
			}
		},
		computed:{//计算属性：
			...mapGetters(["activenumber"])
		}

	}
</script>

<style lang="css" scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		height: 100%;
		width: 100%;
	}

	#app {
		width: 400px;
		min-height: 500px;
		margin: 50px auto;
		padding: 40px;
		border: 2px solid black;
		background:linear-gradient(orange,blue);
	}

	input {
		width: 395px;
		height: 60px;
		line-height: 60px;
		background-color: gainsboro;
		text-align: center;
		font-size: 22px;
	}

	ul {
		list-style: none;
		display: flex;
		margin-top: 30px;
	}

	ul li {
		height: 40px;
		text-align: center;
		line-height: 40px;
		flex: 1;
		cursor:pointer;
	}

	ul li:hover {
		border-bottom: 3px solid red;
	}
	p{
		text-align:center;
		margin:20px 0;
	}
</style>
