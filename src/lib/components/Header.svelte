<script lang="ts">
	import SearchButton from '$lib/components/SearchButton.svelte';
	import { overlay } from '$lib/stores';
	import SearchDialog from './SearchDialog.svelte';
	import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@rgossiaux/svelte-headlessui';
	import themeStore, { setTheme } from 'svelte-themes';

	export let title: string;

	let isOpen = false;

	function openModal() {
		isOpen = true;
	}
</script>

<header
	class="relative mx-4 mt-4 mb-4 flex flex-1 items-center justify-between dark:bg-slate-800 sm:px-2 md:mt-8 lg:mt-6 lg:px-4"
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
		<div class="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
			<!-- Theme Dropdown (Desktop) -->
			<Menu as="div" class="relative inline-flex items-center justify-center">
				<MenuButton class="inline-flex w-full justify-center rounded-md">
						<span class="dark:hidden"
							><svg
								viewBox="0 0 24 24"
								fill="none"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-6 w-6"
								><path
									d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									class="stroke-slate-400 dark:stroke-slate-500"
								/><path
									d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
									class="stroke-slate-400 dark:stroke-slate-500"
								/></svg
							></span
						>

						<span class="hidden dark:inline"
							><svg viewBox="0 0 24 24" fill="none" class="h-6 w-6"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
									class="fill-transparent"
								/><path
									d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
									class="fill-slate-400 dark:fill-slate-500"
								/><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
									class="fill-slate-400 dark:fill-slate-500"
								/></svg
							></span
						>
				</MenuButton>
				<Transition
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<MenuItems
						class="dark:highlight-white/5 absolute top-full right-0 z-50 mt-8 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0"
					>
						<div class="px-1 py-1">
							<MenuItem let:active>
								<button
									on:click={() => setTheme('light')}
									class:text-sky-500={$themeStore.theme == 'light'}
									class="flex w-full cursor-pointer items-center {active
										? 'bg-slate-50 dark:bg-slate-600/30'
										: ''} py-1 px-2 font-semibold"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="mr-2 h-6 w-6"
										><path
											d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
											class={$themeStore.theme == 'light'
												? 'fill-sky-400/20 stroke-sky-500'
												: 'stroke-slate-400 dark:stroke-slate-500'}
										/><path
											d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
											class={$themeStore.theme == 'light'
												? 'stroke-sky-500'
												: 'stroke-slate-400 dark:stroke-slate-500'}
										/></svg
									>Light
								</button>
							</MenuItem>

							<MenuItem let:active>
								<button
									on:click={() => setTheme('dark')}
									class:text-sky-500={$themeStore.theme == 'dark'}
									class="flex w-full cursor-pointer items-center {active
										? 'bg-slate-50 dark:bg-slate-600/30'
										: ''} py-1 px-2 font-semibold"
								>
									<svg viewBox="0 0 24 24" fill="none" class="mr-2 h-6 w-6"
										><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
											class={$themeStore.theme == 'dark' ? 'fill-sky-400/20' : 'fill-transparent'}
										/><path
											d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
											class={$themeStore.theme == 'dark'
												? 'fill-sky-500'
												: 'fill-slate-400 dark:fill-slate-500'}
										/><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
											class={$themeStore.theme == 'dark'
												? 'fill-sky-500'
												: 'fill-slate-400 dark:fill-slate-500'}
										/></svg
									>Dark
								</button>
							</MenuItem>

							<MenuItem let:active>
								<button
									on:click={() => setTheme('system')}
									class:text-sky-500={$themeStore.theme == 'system'}
									class="flex w-full cursor-pointer items-center {active
										? 'bg-slate-50 dark:bg-slate-600/30'
										: ''} py-1 px-2 font-semibold"
								>
									<svg viewBox="0 0 24 24" fill="none" class="mr-2 h-6 w-6"
										><path
											d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
											stroke-width="2"
											stroke-linejoin="round"
											class={$themeStore.theme == 'system'
												? 'fill-sky-400/20 stroke-sky-500'
												: 'stroke-slate-400 dark:stroke-slate-500'}
										/><path
											d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class={$themeStore.theme == 'system'
												? 'stroke-sky-500'
												: 'stroke-slate-400 dark:stroke-slate-500'}
										/></svg
									>System
								</button>
							</MenuItem>
						</div>
					</MenuItems>
				</Transition>
			</Menu>

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
