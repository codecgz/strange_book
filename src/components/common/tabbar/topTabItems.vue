<template>
	<div class="topTabItems">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'topTabItems'
	}
</script>

<style>
	.topTabItems{
		flex: 1;
		text-align: center;
	}
</style>
