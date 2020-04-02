<template>
	<div id="myapp">
		<input type="text" v-model="mytext">
		<button @click="handleClick">add</button>
		<transition-group tag="ul" name="bounce">
			<li v-for="(data,index) in datalist" :key="data">
				{{data}}
				<button @click="deleteClick(index)" :style="obj">del</button>
				<hr>
			</li>
		</transition-group>	
		<mychild></mychild>
	</div>
</template>


<script>
	import mychild from "./myappchild.vue"
	
	export default{//ES6-->export default导出对象
	    name:'app',
		
		data(){//组件化开发，data函数形式
			return {
				datalist:["111","222","333"],
				mytext:"",
				obj:{
					background:"red",
					color:"white",
					float:"right",
					width:"50px",
					marginTop:"10px",
					cursor:"pointer"
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


<style lang="css">
	*{
		margin:0;
		padding:0;
	}
	html,body{
		height:100%;
		width:100%;
	}
	#myapp{
		width:500px;
		min-height:300px;
		margin: 50px auto;
		padding:40px;
		border:2px solid black;
	}
	input{
		width:413px;
		height:30px;
		line-height:30px;
	}
	button{
		width:80px;
		height:30px;
		text-align:center;
		line-height:30px;
		border:none;
		background-color:black;
		color:white;
		cursor:pointer;
	}
	ul{
		list-style:none;
	}
	ul li{
		width:100%;
		height:50px;
		margin:5px 0;
		line-height:50px;
		border-bottom:1px solid black;
	}
	.bounce-enter-active{
		animation:bounce-in .5s;
	}
	.bounce-leave-active{
		animation:bounce-in .5s reverse;
	}
	@keyframes bounce-in{
		0%{
			transform: translateX(20px);
		}
		50%{
			transform: translateX(0px);
		}
		100%{
			transform: translateX(-20px);
		}
	}
</style>