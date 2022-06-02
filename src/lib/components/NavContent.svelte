<script>
	import { page } from '$app/stores';
	import { overlay } from '$lib/stores';
	import Logo from './Logo.svelte';
	import SettingsDialog from '$lib/components/SettingsDialog.svelte';
	import ThemeMenu from './ThemeMenu.svelte';
	import AlertDialog from './AlertDialog.svelte';
	import { shortcut } from '$lib/actions';

	let isOpen = false;

	function openModal() {
		isOpen = true;
	}

	let isAlertOpen = false;

	function openAlertModal() {
		isAlertOpen = true;
	}
</script>

<nav id="nav" class="relative lg:text-sm lg:leading-6">
	<div class="pointer-events-none sticky -ml-0.5 mt-4 mb-10 pl-2.5">
		<Logo />
	</div>
	<ul class="space-y-4">
		<li>
			<a
				on:click={overlay.close}
				href="/"
				class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 flex-shrink-0 {$page.url.pathname === '/'
						? 'text-sky-700 dark:text-sky-500'
						: 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'} transition duration-75"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg
				>
				<span
					class="lg:leading-6 {$page.url.pathname === '/'
						? 'font-medium text-sky-500 dark:text-sky-400'
						: ''} ml-3 flex-1 whitespace-nowrap">Dashboard</span
				>
			</a>
		</li>
		<li>
			<a
				on:click={overlay.close}
				href="/map"
				class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 flex-shrink-0 {$page.url.pathname === '/map'
						? 'text-sky-700 dark:text-sky-500'
						: 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'} transition duration-75"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line
						x1="8"
						y1="2"
						x2="8"
						y2="18"
					/><line x1="16" y1="6" x2="16" y2="22" /></svg
				>
				<span
					class="lg:leading-6 {$page.url.pathname === '/map'
						? 'font-medium text-sky-500 dark:text-sky-400'
						: ''} ml-3 flex-1 whitespace-nowrap">Map</span
				>
			</a>
		</li>
		<li>
			<button
				on:click={openAlertModal}
				class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 flex-shrink-0 {$page.url.pathname === '/saved'
						? 'text-sky-700 dark:text-sky-500'
						: 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'} transition duration-75"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					/></svg
				>
				<span
					class="lg:leading-6 {$page.url.pathname === '/saved'
						? 'font-medium text-sky-500 dark:text-sky-400'
						: ''} ml-3 flex-1 whitespace-nowrap">Saved Locations</span
				>
				<div class="relative inline-flex w-full flex-1" />
				<span
					class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-100"
					>3</span
				>
			</button>
		</li>
	</ul>
	<ul class="mt-6 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700">
		<li>
			<button
				on:click={openModal}
				use:shortcut={{ control: true, shift: true, code: 'KeyP' }}
				class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><circle cx="12" cy="12" r="3" /><path
						d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
					/></svg
				>
				<span class="ml-3 flex-1 whitespace-nowrap text-left lg:leading-6">Settings</span>
			</button>
		</li>
		<li>
			<a
				on:click={overlay.close}
				href="https://github.com/CarlosIvanchuk/weather-app#rapidapi-weather"
				target="_blank"
				class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="dark:group-hover:text-white'} h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line
						x1="12"
						y1="8"
						x2="12.01"
						y2="8"
					/></svg
				>
				<span class="ml-3 flex-1 whitespace-nowrap lg:leading-6">About</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="hidden text-slate-500 hover:text-slate-900 group-hover:block dark:text-slate-400 dark:hover:text-white"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
				</svg>
			</a>
		</li>
	</ul>
	<ul class="mt-6 block space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700 lg:hidden">
		<label
			class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
		>
			<span
				class="lg:leading-6 {$page.url.pathname === '/saved'
					? 'font-medium text-sky-500 dark:text-sky-400'
					: ''} mr-3 flex-1 whitespace-nowrap">Switch Theme</span
			>

			<ThemeMenu />
		</label>
	</ul>
</nav>

<SettingsDialog bind:isOpen />

<AlertDialog bind:isOpen={isAlertOpen} />
