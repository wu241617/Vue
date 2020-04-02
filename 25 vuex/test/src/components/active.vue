<template>
	<div>
		<h3>未 完 成 事 项</h3>
		<ul>
			<li v-for="data in activelist">
				<input type="checkbox" v-model="data.isChecked">
			    {{data.text}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	export default {
		name:"active",
		data(){
			return {
				
			}
		},
		computed:{
			...mapGetters(["activelist"])
		}
	}
</script>

<style lang="css" scoped="scoped">
	h3{
		background-color:black;
		color:white;
		text-align:center;
		font-size:14px;
		height:30px;
		line-height:30px;
	}
</style>