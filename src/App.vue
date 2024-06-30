<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
</script>

<template>
	<div class="flex h-dvh justify-center">
		<div class="max-w-[500px] relative shadow-lg min-h-full flex flex-col">
			<Navbar></Navbar>
			<section class="grow mt-[45px]">
				<router-view></router-view>
			</section>
			<Footer></Footer>
		</div>
	</div>
</template>
