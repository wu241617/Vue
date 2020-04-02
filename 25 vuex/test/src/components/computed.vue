<template>
	<div>
		<h3>已 完 成 事 项</h3>
		<ul>
			<li v-for="data in computedlist">
				<input type="checkbox" v-model="data.isChecked">
				<span :class="{delActive:data.isChecked}">{{data.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	export default {
		name:"computed",
		data(){
			return {
				
			}
		},
		computed:{
			...mapGetters(["computedlist"])
		}
	}
</script>

<style lang="css" scoped="scoped">
	.delActive{
		text-decoration: line-through;
	}
	h3{
		background-color:black;
		color:white;
		text-align:center;
		font-size:14px;
		height:30px;
		line-height:30px;
	}
</style>