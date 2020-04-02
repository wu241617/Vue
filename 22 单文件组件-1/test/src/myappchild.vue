<template>
	<div id="myappchild">
		<h3>Front End Software Engineer</h3>
		<ul>
			<li v-for="data in datalist">
				{{data}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"myappchild",
		
		data(){
			return {
				datalist:["HTML","CSS","Javascript","Jquery","Bootstrap","Vue","Webpack"]
			}
		}
	}
</script>

<!-- <style lang="scss" scoped>
	div{
		width:500px;
		height:400px;
		border:2px solid red;
		ul{
			list-style:none;
			li{
				width:100%;
				height:30px;
				margin:10px 0;
				line-height:30px;
			}
		}
	}
</style> -->
<style  lang="css" scoped>
	#myappchild{
		width:600px;
		min-height:80px;
		margin:50px 0;
		text-align:center;
		border-top:1px solid black;
		border-radius:20px;
		background:linear-gradient(pink,white);
	}
	ul{
		list-style:none;
		padding:0;
	}
	li{
		width:100%;
		height:30px;
		margin:10px 0;
		line-height:30px;
		border-top:1px solid black;
		border-radius:20px;
		cursor:pointer;
	}
	li:hover{
		background-color:black;
		color:white;
	}
	li:nth-child(7){
		border-bottom:1px solid black;
		border-radius:20px;
	}
</style>