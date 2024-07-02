<!-- src/views/Home.vue -->
<script setup lang="ts">
import { onMounted, ref } from "vue"
// status:singing 演唱中, booking: 預約中, scheduled: 已排唱
const totalSong = ref([
	{
		id: "1000",
		song: "誠實地想你",
		singer: "郭采潔",
		status: "singing",
		tags: "#華文流行",
	},
	{
		id: "1000",
		song: "Knock",
		singer: "#FroggyWu",
		status: "singing",
		tags: "",
	},
])
const song = ref(null)
const querySting = ref("")

onMounted(() => {
	song.value = totalSong.value
})

function query() {
	if (querySting.value === "") {
		song.value = totalSong.value
		return
	}
	const fuzzyQueryString = querySting.value.toLowerCase()
	const filterSong = totalSong.value.filter(
		(data) =>
			data.song.toLowerCase().includes(fuzzyQueryString) ||
			data.singer.toLowerCase().includes(fuzzyQueryString) ||
			data.tags.toLowerCase().includes(fuzzyQueryString)
	)
	song.value = filterSong
}

function clear() {
	querySting.value = ""
	query()
}
</script>
<template>
	<div class="px-6 py-4 md:mx-6 relative">
		<div id="now" class="my-6 block">
			<h3 class="text-center text-sm mb-2">現正演唱</h3>
			<h4 class="text-center text-lg">誠實地想你</h4>
		</div>
		<div id="list" class="my-6 block">
			<h3 class="text-center text-sm mb-2">點唱清單</h3>
			<InputGroup class="my-4 input-query relative">
				<InputText
					v-model.lazy="querySting"
					@change="query()"
					placeholder="搜尋歌名、歌手、風格">
				</InputText>
				<span
					v-show="querySting != ''"
					class="search-clear"
					@click="clear()"></span>
				<Button icon="pi pi-search" class="text-slate-400" @click="query()" />
			</InputGroup>
			<div class="w-full overflow-auto table-song pt-[20px]">
				<DataTable
					:value="song"
					paginator
					:rows="5"
					:rowsPerPageOptions="[5, 10, 20, 50]"
					paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
					currentPageReportTemplate="共{totalPages}頁(全{totalRecords}筆)"
					:pageLinkSize="3">
					<Column field="song" header="歌名(原唱)">
						<template #body="slotProps">
							<span>{{ slotProps.data.song }}</span>
							<Tag
								v-if="slotProps.data.singer === '#FroggyWu'"
								class="bg-sky-500 text-white ml-2"
								>青蛙原創</Tag
							>
							<span v-else>({{ slotProps.data.singer }})</span>
						</template>
					</Column>
					<Column field="id" header="功能">
						<template #body="slotProps">
							<Button class="bg-sky-100 text-sky-600">點唱</Button>
						</template>
					</Column>
				</DataTable>
			</div>
		</div>
		<div id="about" class="block my-6">
			<h3 class="text-center text-sm mb-2">關於青蛙</h3>
			<h4 class="text-sm flex items-center mb-1">
				<i class="pi pi-info-circle pr-2"></i>
				簡介
			</h4>
			<article>
				<p class="mb-1">職業是前端工程師，喜歡唱歌。</p>
				<p class="mb-1">
					組樂團名叫「隕方」，除了人聲，偶爾有簡單的木吉他(我)。主要樂器配置是經典的鼓、電吉他、貝斯、鋼琴。
				</p>
				<p class="mb-1">主要目標是宣傳個人和樂團的音樂！正在努力中！</p>
				<p class="mb-1">祝您享受蛙鳴 ε٩(๑> ₃ <)۶з</p>
			</article>
			<h4 class="text-sm flex items-center mt-5 mb-1">
				<i class="pi pi-link pr-2"></i>
				連結
			</h4>
			<div>
				<a
					href="https://www.instagram.com/hemaynotbeafrog/"
					class="flex text-sky-400 items-center"
					target="_blank">
					<i class="pi pi-instagram pr-2"></i>
					<span class="underline">instagram - 他可能不是青蛙</span></a
				>
			</div>
			<div>
				<a
					href="https://www.instagram.com/meteoritesquare/"
					class="flex text-sky-400 items-center"
					target="_blank">
					<i class="pi pi-instagram pr-2"></i>
					<span class="underline">instagram - 隕方(樂團)</span></a
				>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.table-song {
	[data-pc-group-section="pagebutton"] {
		min-width: 1rem !important;
	}
	[data-pc-section="pagebutton"] {
		min-width: 1.5rem !important;
		height: 1.5rem !important;
		&[data-p-highlight="true"] {
			@apply bg-sky-200;
		}
	}
	[data-pc-section="current"] {
		position: absolute;
		top: -20px;
	}
}

.search-clear {
	&::after {
		content: "\e90b";
		font-size: 0.8rem;
		font-family: primeicons;
		@apply text-slate-500;
		position: absolute;
		height: calc(100% - 2px);
		top: 50%;
		right: 40px;
		padding: 0 8px;
		display: flex;
		align-items: center;
		transform: translateY(-50%);
		background: #ffffff;
	}
}
</style>
