<template>
	<div id="topTab">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'topTab'
	}
</script>

<style>
	.topTab{
		position: fixed;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
</style>
