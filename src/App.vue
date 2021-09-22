<template>
	<router-link to="./">
		Homepage
	</router-link>
	<router-link to="./fundamentals">
		<h1>About Page</h1>
	</router-link>
</template>

<script setup>
	import VueRouter from 'vue-router'
	import Fundamentals from './components/Fundamentals.vue'

	Vue.use(VueRouter)
</script>

<style>
</style>