<template>
  <div id="app">
	  <topLogo></topLogo>
	  <proTopTab></proTopTab>
	  <router-view></router-view>
  </div>
</template>

<script>
	import topLogo from 'components/content/topLogo.vue'
	import proTopTab from 'components/content/proTopTab.vue'
	
	export default {
	  name: 'App',
	  components: {
		  topLogo,
		  proTopTab
	  }
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>
 