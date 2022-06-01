<script lang="ts">
	import type { Location, Current } from '$lib/types';

	import Header from '$lib/components/Header.svelte';

	import { VIDEOS_BY_PLACE } from '$lib/data/videos';

	export let location: Location, current: Current;
</script>

<svelte:head>
	<title>RapidAPI Weather</title>
	<meta
		name="description"
		content="Get the weather forecast in a beautiful and performant app. View current and forecasted weather; and also precipitation, air quality, and temperature maps to see different conditions near you."
	/>
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col dark:bg-slate-900">
	<div class="flex items-center border-b border-slate-900/10 dark:border-slate-600 md:border-0">
		<Header title={`${location.name}, ${location.country}`} />
	</div>

	<div class="no-scrollbar flex-1 space-y-4 overflow-y-auto px-8 pt-8 dark:text-white">
		<div class="relative h-60">
			<div class="absolute inset-0 top-4 left-4 z-10 text-slate-700">
				<h1 class="text-lg">{location.name}</h1>
				<div class="text-7xl font-bold">{current.temp_c}°</div>
				<p>{current.condition.text}</p>
			</div>
			<video
				class="absolute h-full w-full rounded-xl object-cover"
				src="/{VIDEOS_BY_PLACE.japanMtFuji.day}"
				muted
				autoplay
				loop
			/>
		</div>
	</div>
</div>

<aside
	class="hidden h-screen w-80 overflow-y-auto border-l border-gray-200 py-4 px-3 dark:border-slate-700 dark:bg-slate-900 md:block"
>
	<div>
		<header class="mt-4 mb-10 flex items-center justify-between">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
				>
					<path d="m15 18-6-6 6-6" />
				</svg>
			</button>
			<span class="dark:text-white">This Week</span>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>
		</header>
		<div class="space-y-4">
			<div>
				<h2 class="dark:text-white">Today</h2>
				<div class="mt-4 flex space-x-4 overflow-y-auto">
					{#each [{ title: 'Now', temp: 20 }, { title: '1 PM', temp: 24 }, { title: '2 PM', temp: 23 }, { title: '3 PM', temp: 21 }] as { title, temp }, index}
						<div
							class:bg-sky-100={index == 0}
							class:dark:bg-sky-800={index == 0}
							class="flex flex-col items-center gap-1 rounded-lg py-2 px-4"
						>
							<span class="whitespace-nowrap text-sm dark:text-white">{title}</span>
							<svg
								class:hidden={index % 2 != 0}
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								class="h-8 w-8 text-yellow-400"
								fill="currentColor"
								><g id="sun"
									><circle cx="16" cy="16" r="7" /><path
										class="text-orange-400"
										d="M16 7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM8.22 9.64a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L7.51 6.1A1 1 0 0 0 6.1 7.51ZM7 16a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1ZM8.22 22.36 6.1 24.49a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l2.13-2.12a1 1 0 0 0-1.42-1.42ZM16 25a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1ZM23.78 22.36a1 1 0 0 0-1.42 1.42l2.13 2.12a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41ZM29 15h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2ZM23.07 9.93a1 1 0 0 0 .71-.29l2.12-2.13a1 1 0 1 0-1.41-1.41l-2.13 2.12a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29ZM16 9a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"
									/></g
								></svg
							>
							<svg
								class:hidden={index % 2 == 0}
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								class="h-8 w-8"
								fill="currentColor"
							>
								<g data-name="cloud sun" id="cloud_sun">
									<path
										class="text-yellow-400"
										d="M17.51 12.61A6 6 0 1 0 8 19.49a1 1 0 0 0 .66.25 1 1 0 0 0 .58-.19 2.88 2.88 0 0 1 1.51-.55 1 1 0 0 0 .89-.77 5.53 5.53 0 0 1 5-4.24 1 1 0 0 0 .86-1.4Z"
									/>
									<path
										class="text-sky-200"
										d="M29.89 19.86A6 6 0 0 0 24 15a9.22 9.22 0 0 0-.94.07A7.52 7.52 0 0 0 17 12h-.47a7.56 7.56 0 0 0-6.65 5.12 4.75 4.75 0 0 0-1.76.79 5 5 0 0 0-2 5.12 5.09 5.09 0 0 0 5.06 4H24a6 6 0 0 0 5.89-7.14Z"
									/>
									<path
										class="text-orange-400"
										d="M4 16H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm13.66-5.66a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.29ZM12 8a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-5.66 2.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29Z"
									/>
									<!-- <path class="text-sky-900" d="M29.89 19.86A6 6 0 0 0 24 15a9.2 9.2 0 0 0-.95.07A7.51 7.51 0 0 0 17.19 12a6 6 0 1 0-9.91 6.67A5 5 0 0 0 11.17 27H24a6 6 0 0 0 5.89-7.14ZM12 11a4 4 0 0 1 2.94 1.29c-.13 0-.25.09-.38.13l-.33.12a6.13 6.13 0 0 0-.73.35 1.11 1.11 0 0 0-.19.09 9.59 9.59 0 0 0-.85.56l-.19.16a7 7 0 0 0-.57.52l-.24.25c-.15.17-.3.34-.43.52l-.22.3c-.13.19-.25.4-.37.6s-.11.19-.15.28a8.15 8.15 0 0 0-.41 1 5.28 5.28 0 0 0-1 .33A4 4 0 0 1 12 11Zm15.08 12.55A4 4 0 0 1 24 25H11.17a3.09 3.09 0 0 1-3.1-2.36 3 3 0 0 1 1.21-3.09 2.82 2.82 0 0 1 1.47-.55 1 1 0 0 0 .9-.77 5.52 5.52 0 0 1 5-4.24h.26a5.51 5.51 0 0 1 4.81 2.71 1 1 0 0 0 1.14.45A3.74 3.74 0 0 1 24 17a4 4 0 0 1 3.11 6.55Z"/> -->
								</g>
							</svg>

							<span class="font-medium dark:text-white">{temp}°</span>
						</div>
					{/each}
				</div>
			</div>

			{#each [{ title: 'Tomorrow', date: '28 May', temp: 20 }, { title: 'Sunday', date: '29 May', temp: 24 }, { title: 'Monday', date: '30 May', temp: 23 }, { title: 'Thursday', date: '31 May', temp: 21 }] as { title, date, temp }, index}
				<div class="relative flex items-center justify-between rounded-lg py-2">
					<div class="flex flex-col">
						<span class="dark:text-white">{title}</span>
						<span class="mt-1 text-sm text-slate-500 dark:text-slate-400">{date}</span>
					</div>

					<div class="absolute inset-0 flex items-center justify-center">
						<span class="text-lg font-medium dark:text-white">{temp}°</span>
					</div>
					<svg
						class:hidden={index % 2 != 0}
						class="h-12 w-12 text-yellow-400"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						><g id="sun"
							><circle cx="16" cy="16" r="7" /><path
								class="text-orange-400"
								d="M16 7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM8.22 9.64a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L7.51 6.1A1 1 0 0 0 6.1 7.51ZM7 16a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1ZM8.22 22.36 6.1 24.49a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l2.13-2.12a1 1 0 0 0-1.42-1.42ZM16 25a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1ZM23.78 22.36a1 1 0 0 0-1.42 1.42l2.13 2.12a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41ZM29 15h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2ZM23.07 9.93a1 1 0 0 0 .71-.29l2.12-2.13a1 1 0 1 0-1.41-1.41l-2.13 2.12a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29ZM16 9a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"
							/></g
						></svg
					>
					<svg
						class:hidden={index % 2 == 0}
						class="h-12 w-12"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
					>
						<g data-name="cloud sun" id="cloud_sun">
							<path
								class="text-yellow-400"
								d="M17.51 12.61A6 6 0 1 0 8 19.49a1 1 0 0 0 .66.25 1 1 0 0 0 .58-.19 2.88 2.88 0 0 1 1.51-.55 1 1 0 0 0 .89-.77 5.53 5.53 0 0 1 5-4.24 1 1 0 0 0 .86-1.4Z"
							/>
							<path
								class="text-sky-200"
								d="M29.89 19.86A6 6 0 0 0 24 15a9.22 9.22 0 0 0-.94.07A7.52 7.52 0 0 0 17 12h-.47a7.56 7.56 0 0 0-6.65 5.12 4.75 4.75 0 0 0-1.76.79 5 5 0 0 0-2 5.12 5.09 5.09 0 0 0 5.06 4H24a6 6 0 0 0 5.89-7.14Z"
							/>
							<path
								class="text-orange-400"
								d="M4 16H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm13.66-5.66a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.29ZM12 8a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-5.66 2.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29Z"
							/>
							<!-- <path class="text-sky-900" d="M29.89 19.86A6 6 0 0 0 24 15a9.2 9.2 0 0 0-.95.07A7.51 7.51 0 0 0 17.19 12a6 6 0 1 0-9.91 6.67A5 5 0 0 0 11.17 27H24a6 6 0 0 0 5.89-7.14ZM12 11a4 4 0 0 1 2.94 1.29c-.13 0-.25.09-.38.13l-.33.12a6.13 6.13 0 0 0-.73.35 1.11 1.11 0 0 0-.19.09 9.59 9.59 0 0 0-.85.56l-.19.16a7 7 0 0 0-.57.52l-.24.25c-.15.17-.3.34-.43.52l-.22.3c-.13.19-.25.4-.37.6s-.11.19-.15.28a8.15 8.15 0 0 0-.41 1 5.28 5.28 0 0 0-1 .33A4 4 0 0 1 12 11Zm15.08 12.55A4 4 0 0 1 24 25H11.17a3.09 3.09 0 0 1-3.1-2.36 3 3 0 0 1 1.21-3.09 2.82 2.82 0 0 1 1.47-.55 1 1 0 0 0 .9-.77 5.52 5.52 0 0 1 5-4.24h.26a5.51 5.51 0 0 1 4.81 2.71 1 1 0 0 0 1.14.45A3.74 3.74 0 0 1 24 17a4 4 0 0 1 3.11 6.55Z"/> -->
						</g>
					</svg>
				</div>
			{/each}
		</div>
	</div>
</aside>
