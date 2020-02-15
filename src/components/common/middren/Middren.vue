<template>
	<div id="content">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Middren'
	}
</script>

<style>
	#content{
		width: 1200px;
		border: #42B983 1px solid;
		margin: 10px auto;
	}
</style>
