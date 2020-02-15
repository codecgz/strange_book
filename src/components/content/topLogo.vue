<template>
	<div id="toplogo">
		<img src="~assets/img/logo/logo.png" alt="">
		<p>欢迎登入！亲爱的<a href="javascript:;">陈国柱</a>用户</p>
	</div>
</template>

<script>
	export default {
		name: 'toplogo'
	}
</script>

<style>
	#toplogo{
		width: 100%;
		height: 150px;
		background: rgba(66,185,131,.8);
		position: relative;
		min-width: 720px;
	}
	#toplogo p{
		position: absolute;
		top: 101px;
		right: 17px;
	}
</style>
