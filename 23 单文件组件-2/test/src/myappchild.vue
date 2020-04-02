<template>
	<div id="myappchild">
		我是一个子组件
		<ul>
			<li>111</li>
			<li>222</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'myappchild',
		
		data (){
			return {
				
			}
		}
	};
</script>

<style lang="scss" scoped>/*  scoped-->限定在当前作用域，不会与其他组件的样式发生冲突 */
	*{
		margin:0;
		padding:0;
	}
	html,body{
		height:100%;
		width:100%;
	} 
	div{
		height:40px;
		width:500px;
		margin:50px auto;
		margin-bottom:0;
		line-height:40px;
		text-align:center;
		background-color:black; 
		color:white;
	} 
</style>