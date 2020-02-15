<template>
	<div id="proTop">
		<topTab>
			<topTabItems path='/homepage'>
				<a href="javascript:;">
					<p>首页</p>
				</a>
			</topTabItems>
			<topTabItems path='/domestic'>
				<a href="javascript:;">
					<p>国内短篇</p>
				</a>
			</topTabItems>
			<topTabItems path='/foreign'>
				<a href="javascript:;">
					<p>国外短篇</p>
				</a>
			</topTabItems>
			<topTabItems path='/mystore'>
				<a href="javascript:;">
					<p>我的书库</p>
				</a>
			</topTabItems>
			<topTabItems path='/about'>
				<a href="javascript:;">
					<p>关于</p>
				</a>
			</topTabItems>
		</topTab>
	</div>
</template>

<script>
	import topTab from 'components/common/tabbar/topTab'
	import topTabItems from 'components/common/tabbar/topTabItems'
	
	export default {
		name: 'proTopTab',
		components: {
			topTab,
			topTabItems
		}
	}
</script>

<style>
	#proTop{
		width: 100%;
		background: white;
	}
	.topTabItems:hover{
		background: rgba(66,185,131,.8);
	}
	.topTabItems:hover a{
		color: #F6F6F6;
	}
	.topTabItems a{
		text-decoration: none;
		color: #2C3E50;
	}
	.topTabItems p{
		font-size: 16px;
	}
</style>
