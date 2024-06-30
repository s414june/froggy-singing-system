<script setup lang="ts">
import { ref } from "vue"
import Menu from "./Menu.vue"

const openMenu = ref(false)
</script>
<template>
	<nav
		class="flex justify-between items-center py-2 px-4 fixed w-full bg-white">
		<div class="flex font-bold text-sky-600 text-lg">
			<h1>他可能不是青蛙</h1>
			<span class="mx-1">-</span>
			<h2>街頭點歌</h2>
		</div>
		<Menu></Menu>
	</nav>
</template>
