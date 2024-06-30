<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
</script>

<template>
	<div class="flex flex-col h-dvh">
		<Navbar></Navbar>
		<section class="grow mt-[45px]">
			<router-view></router-view>
		</section>
		<Footer></Footer>
	</div>
</template>
