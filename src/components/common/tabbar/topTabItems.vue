<template>
	<div class="topTabItems" @click="itemClick">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'topTabItems',
		props: {
			// 要求路径不是写死的,即使用该组件时,把path值传进来
			path: String
		},
		methods: {
			itemClick: function(){
				// 实现不同的item时传入的path不一样了
				this.$router.replace(this.path);
			}
		}
	}
</script>

<style>
	.topTabItems{
		flex: 1;
		text-align: center;
		background: white;
		height: 40px;
		line-height: 40px;
	}
</style>
