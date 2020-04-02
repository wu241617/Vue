<template>
	<div id="myapp">
		<h2>My Notebook</h2>
		<input type="text" v-model="mytext" placeholder="请输入内容:">
		<button @click="handleClick">add</button>
		<transition-group tag="ol" name="bounce">
			<li v-for="(data,index) in datalist" :key="data">
				{{data}}
				<button @click="deleteClick(index)" :style="btn">del</button>
			</li>
		</transition-group>
		<mychild></mychild>
	</div>
</template>

<script>
	import mychild from "./myappchild.vue"
	export default {
		name:"myapp",
		data(){
			return {
				datalist:["HTML","CSS","Jquery"],
				mytext:"",
				btn:{
					width:"50px",
					height:"30px",
					float:"right",
					margin:"0px"
				}
			}
		},
		methods:{
			handleClick:function(){
				this.datalist.push(this.mytext);
				this.mytext="";
			},
			deleteClick:function(index){
				this.datalist.splice(index,1);
			}
		},
		components:{
			mychild:mychild
		}
		
	}
</script>

<style lang="css" scoped>
	*{
		margin:0;
		padding:0;
	}
	html,body{
		height:100%;
		width:100%;
	}
	#myapp{
		width:600px;
		min-height:300px;
		margin:50px auto;
		padding:40px;
		border:2px solid black;
		background:linear-gradient(red,yellow);
	}
	div h2{
		width:100%;
		height:50px;
		line-height:50px;
		text-align:center;
		background-color:black;
		color:white;
	}
	div input{
		width:80%;
		height:30px;
		margin:20px 0;
		padding-left:5%;
	}
	div button{
		width:13.5%;
		height:30px;
		cursor:pointer;
		background-color:black;
		color:white;
		margin:20px 0;
		border:none;
	}
	div ol{
		list-style:none;
	}
	div ol li{
		width:100%;
		height:40px;
		margin:10px 0;
		line-height:40px;
		border-bottom:1px solid black;
	}
	.bounce-enter-active{
		animation:bounce-in .8s;
	}
	.bounce-leave-active{
		animation:bounce-in .8s reverse;
	}
	@keyframes bounce-in{
		0%{
			transform:translateX(30px);
		}
		50%{
			transform:translateX(0px);
		}
		100%{
			transform:translateX(-30px);
		}
	}
</style>