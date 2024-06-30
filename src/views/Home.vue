<!-- src/views/Home.vue -->
<template>
	<div class="outside">
		<div class="p-4 container">
			<div id="now" class="mb-6 block">
				<h3 class="text-center text-sm mb-2">現正演唱</h3>
				<h4 class="text-center text-lg">誠實地想你</h4>
			</div>
			<div id="list" class="mb-6 block">
				<h3 class="text-center text-sm mb-2">點唱清單</h3>
				<h4 class="text-center text-lg">誠實地想你</h4>
			</div>
			<div id="about" class="block">
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
	</div>
</template>
<style scoped lang="scss">
.outside {
	display: flex;
	justify-content: center;
}
.container {
	max-width: 350px;
}
</style>
