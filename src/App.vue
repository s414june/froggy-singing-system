<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
	<div class="flex flex-col h-dvh">
		<Navbar></Navbar>
		<section class="grow">
			<router-view></router-view>
		</section>
		<Footer></Footer>
	</div>
</template>
