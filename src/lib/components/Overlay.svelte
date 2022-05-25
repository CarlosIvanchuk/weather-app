<script>
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';

	let open = true;

	function toggleOverlay() {
		open = !open;
	}
</script>

{#if open}
	<div class="fixed z-50 inset-0 overflow-y-auto lg:hidden">
		<div
			on:click={toggleOverlay}
			class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
			aria-hidden="true"
		/>
		<div
			class="relative h-full bg-white w-72 sm:w-80 p-6 dark:bg-slate-800"
		>
			<button
				on:click={toggleOverlay}
				type="button"
				class="absolute z-10 top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
				tabindex="0"
				><span class="sr-only">Close navigation</span><svg
					viewBox="0 0 10 10"
					class="w-2.5 h-2.5 overflow-visible"
					><path
						d="M0 0L10 10M10 0L0 10"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/></svg
				></button
			>
			<nav id="nav" class="lg:text-sm lg:leading-6 relative">
				<div class="sticky pl-2.5 -ml-0.5 mt-4 mb-10 pointer-events-none">
					<Logo />
				</div>
				<ul class="space-y-4">
					<li>
						<a
							href="/"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg group dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="flex-shrink-0 w-6 h-6 {$page.url.pathname === '/'
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
								><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path
									d="M22 12A10 10 0 0 0 12 2v10z"
								/></svg
							>
							<span
								class="lg:leading-6 {$page.url.pathname === '/'
									? 'font-medium text-sky-500 dark:text-sky-400'
									: ''} flex-1 ml-3 whitespace-nowrap">Dashboard</span
							>
						</a>
					</li>
					<li>
						<a
							href="/map"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg group dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="flex-shrink-0 w-6 h-6 {$page.url.pathname === '/map'
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
									: ''} flex-1 ml-3 whitespace-nowrap">Map</span
							>
						</a>
					</li>
					<li>
						<a
							href="/saved"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg group dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="flex-shrink-0 w-6 h-6 {$page.url.pathname === '/saved'
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
									: ''} flex-1 ml-3 whitespace-nowrap">Saved Locations</span
							>
							<span
								class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
								>3</span
							>
						</a>
					</li>
				</ul>
				<ul class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
					<li>
						<a
							href="/settings"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg group dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="flex-shrink-0 w-6 h-6 {$page.url.pathname === '/settings'
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
								><circle cx="12" cy="12" r="3" /><path
									d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
								/></svg
							>
							<span
								class="lg:leading-6 {$page.url.pathname === '/settings'
									? 'font-medium text-sky-500 dark:text-sky-400'
									: ''} flex-1 ml-3 whitespace-nowrap">Settings</span
							>
						</a>
					</li>
					<li>
						<a
							href="/about"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="flex-shrink-0 w-6 h-6 {$page.url.pathname === '/about'
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
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line
									x1="12"
									y1="8"
									x2="12.01"
									y2="8"
								/></svg
							>
							<span
								class="lg:leading-6 {$page.url.pathname === '/about'
									? 'font-medium text-sky-500 dark:text-sky-400'
									: ''} flex-1 ml-3 whitespace-nowrap">About</span
							>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
{/if}
