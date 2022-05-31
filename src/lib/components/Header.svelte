<script lang="ts">
	import SearchButton from '$lib/components/SearchButton.svelte';
	import ThemeMenu from '$lib/components/ThemeMenu.svelte';
	import { overlay } from '$lib/stores';
	import SearchDialog from '$lib/components/SearchDialog.svelte';

	export let title: string;

	let isOpen = false;

	function openModal() {
		isOpen = true;
	}
</script>

<header
	class="relative mx-4 mt-4 mb-4 flex flex-1 items-center justify-between dark:bg-slate-900 sm:px-2 md:mt-8 lg:mt-6 lg:px-4"
>
	<!-- Menu Button (Mobile) -->
	<button
		on:click={overlay.open}
		type="button"
		class="-my-1 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
		><span class="sr-only">Navigation</span>
		<svg width="24" height="24"
			><path
				d="M5 6h14M5 12h14M5 18h14"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/></svg
		></button
	>
	<div class="">
		<SearchButton on:click={openModal} />
	</div>
	<!-- City Title -->
	<div class="flex flex-1 items-center justify-center lg:hidden">
		<div class="flex flex-shrink-0 items-center">{title}</div>
	</div>
	<!-- Search Button (Mobile) -->
	<button
		on:click={openModal}
		type="button"
		class="-my-1 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
		><span class="sr-only">Search</span><svg
			width="24"
			height="24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"><path d="m19 19-3.5-3.5" /><circle cx="11" cy="11" r="6" /></svg
		></button
	>
	<!-- Theme & Github Buttons (Desktop) -->
	<div class="relative ml-auto hidden items-center lg:flex">
		<div class="ml-6 flex items-center border-l border-slate-900/10 pl-6 dark:border-slate-600">
			<!-- Theme Dropdown (Desktop) -->
			<ThemeMenu />

			<!-- Github Button (Desktop) -->
			<a
				href="https://github.com/carlosivanchuk/weather-app"
				rel="noopener"
				target="_blank"
				class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
				><span class="sr-only">RapidAPI Weather on GitHub</span><svg
					viewBox="0 0 16 16"
					class="h-5 w-5"
					fill="currentColor"
					aria-hidden="true"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				></a
			>
		</div>
	</div>
</header>

<SearchDialog bind:isOpen />
