<script setup lang="ts">
import { ref, nextTick } from "vue"
const visible = ref(false)
const menuStyle = ref({
	header: {
		class: "!p-2 !px-4",
	},
})
const position = ref("center")

const selectedMenuList = ref({ label: "現正演唱", value: "now" })
const menuList = ref([
	{ label: "現正演唱", value: "now" },
	{ label: "點唱清單", value: "list" },
	{ label: "關於青蛙", value: "about" },
])

const openPosition = (pos) => {
	position.value = pos
	visible.value = true
}

const gotoListItem = () => {
	nextTick(() => {
		const element = document.getElementById(selectedMenuList.value.value)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
			visible.value = false
		}
	})
}
</script>
<template>
	<div class="card flex justify-center">
		<div @click="openPosition('topright')">
			<i class="pi pi-bars !text-xl"></i>
		</div>
		<Dialog
			v-model:visible="visible"
			modal
			:closable="false"
			:dismissableMask="true"
			:draggable="false"
			:style="{ width: '300px', maxWitdh: '80%', margin: '8px' }"
			position="topright"
			class="menu"
			:pt="menuStyle">
			<template v-slot:header>
				<div
					class="flex justify-between items-center w-full"
					@click.prevent.stop>
					<h2 class="text-lg">Menu</h2>
					<div @click="visible = false">
						<i class="pi pi-times"></i>
					</div>
				</div>
			</template>
			<div>
				<Listbox
					v-model="selectedMenuList"
					:options="menuList"
					optionLabel="label"
					@click="gotoListItem()"
					class="w-full md:w-56 !border-none !shadow-none menu-list" />
			</div>
		</Dialog>
	</div>
</template>
<style scoped lang="scss"></style>
