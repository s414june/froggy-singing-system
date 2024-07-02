<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
</script>

<template>
	<div class="flex h-dvh justify-center">
		<div
			class="w-[500px] max-w-full relative shadow-lg min-h-dvh h-max flex flex-col">
			<Navbar></Navbar>
			<section class="grow mt-[45px] w-full">
				<router-view></router-view>
			</section>
			<Footer></Footer>
		</div>
	</div>
</template>
