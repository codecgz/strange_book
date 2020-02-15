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
	#topTab{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		width: 500px;
	}
</style>
