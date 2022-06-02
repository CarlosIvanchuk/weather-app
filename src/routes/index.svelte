<script context="module">
	/** @type {import('./__types/[slug]').Load} */
	export async function load({ fetch, url }) {
		const { searchParams } = url;
		const query = searchParams.get('q');

		const res = await fetch(`/api/forecast?${query == null ? '' : 'q=' + query}`);

		const { data, ok, error } = await res.json();

		if (!ok) {
			return {
				status: 400,
				error: error.message
			};
		}

		const {
			current,
			location,
			forecast: { forecastday }
		} = data;

		return {
			status: 200,
			props: { current, location, forecastday }
		};
	}
</script>

<script lang="ts">
	import type { Location, Current, ForecastDay } from '$lib/types';

	import Header from '$lib/components/Header.svelte';
	import AlertDialog from '$lib/components/AlertDialog.svelte';

	import { VIDEOS_BY_PLACE } from '$lib/data/videos';
	import { settings } from '$lib/stores';

	export let location: Location, current: Current, forecastday: ForecastDay;

	let isOpen = false;

	function openModal() {
		isOpen = true;
	}

	$: cards = [
		{
			title: 'Wind',
			description: 'Today wind speed',
			value: `${
				$settings.windVelUnit == 'wind_kph' ? current.wind_kph + 'km/h' : current.wind_mph + 'mph'
			}`
		},
		{ title: 'Pressure', description: 'Today Pressure', value: `${current.pressure_mb}mb` },
		{
			title: 'Rain Chance',
			description: 'Today rain chance',
			value: `${forecastday[0].hour[8].chance_of_rain}%`
		},
		{
			title: 'Snow Chance',
			description: 'Today snow chance',
			value: `${forecastday[0].hour[8].chance_of_snow}%`
		}
	];
</script>

<svelte:head>
	<title>RapidAPI Weather</title>
	<meta
		name="description"
		content="Get the weather forecast in a beautiful and performant app. View current and forecasted weather; and also precipitation, air quality, and temperature maps to see different conditions near you."
	/>
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col pb-6 dark:bg-slate-900">
	<div class="flex items-center border-b border-slate-900/10 dark:border-slate-600 md:border-0">
		<Header title={`${location.name}, ${location.country}`} />
	</div>

	<div class="no-scrollbar flex-1 space-y-4 overflow-y-auto dark:text-white sm:px-8 sm:pt-8">
		<div class="relative mb-8 h-96">
			<div class="z-10 flex h-full flex-col items-center justify-center text-slate-700">
				<h1 class="hidden text-xl lg:inline-block">{location.name}</h1>
				<div class="text-8xl font-bold">
					{$settings.tempUnit == 'temp_c' ? current.temp_c : current.temp_f}<span
						class="align-super text-6xl">°</span
					>
				</div>
				<p class="text-xl ">{current.condition.text}</p>
			</div>
			<video
				class="absolute inset-0 -z-10 h-full w-full object-cover sm:rounded-xl"
				src="/videos/{VIDEOS_BY_PLACE.japanMtFuji.day}"
				muted
				autoplay
				loop
			/>
		</div>

		<section
			class="mx-4 grid grid-cols-2 gap-6 sm:mx-0 sm:grid-cols-2 md:grid-cols-2 md:gap-8 xl:grid-cols-4"
		>
			{#each cards as { title, description, value }, id}
				<div
					class="flex items-center justify-center rounded-xl p-4 dark:border-slate-700 dark:bg-slate-900"
				>
					<div class="flex flex-col justify-between space-y-1 text-center">
						<h2 class="font-semibold">{title}</h2>
						<div class="flex items-center justify-center">
							{#if title == 'Wind'}
								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 30 30"
									style="enable-background:new 0 0 30 30; transform: rotate({current.wind_degree}deg)"
									class="h-10 w-10 fill-current text-slate-600 dark:text-sky-400"
									xml:space="preserve"
								>
									<path
										d="M3.74,14.5c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
										s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
										s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16.03,3.74,14.5z M6.22,14.5
										c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
										s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.75,7.4,10.1S6.22,12.92,6.22,14.5z
										M11.11,20.35l3.75-13.11c0.01-0.1,0.06-0.15,0.15-0.15s0.14,0.05,0.15,0.15l3.74,13.11c0.04,0.11,0.03,0.19-0.02,0.25
										s-0.13,0.06-0.24,0l-3.47-1.3c-0.1-0.04-0.2-0.04-0.29,0l-3.5,1.3c-0.1,0.06-0.17,0.06-0.21,0S11.09,20.45,11.11,20.35z"
									/>
								</svg>
							{:else if title == 'Pressure'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="-my-1 h-12 w-12 fill-current text-slate-600 dark:text-sky-400"
									viewBox="0 0 30 30"
									xml:space="preserve"
								>
									<path
										d="M7.69 13.2c0-.99.19-1.94.58-2.85.39-.91.91-1.68 1.57-2.33s1.44-1.17 2.34-1.56c.9-.39 1.85-.58 2.84-.58.99 0 1.94.19 2.85.58.9.39 1.68.91 2.33 1.56.65.65 1.17 1.43 1.56 2.33s.58 1.85.58 2.85c0 1.62-.48 3.06-1.44 4.34a7.247 7.247 0 0 1-3.71 2.61v3.29h-4.24v-3.25c-1.54-.45-2.81-1.32-3.79-2.61s-1.47-2.75-1.47-4.38zm1.61 0c0 1.55.56 2.88 1.69 3.99 1.11 1.12 2.45 1.68 4.02 1.68 1.03 0 1.99-.25 2.86-.76a5.76 5.76 0 0 0 2.09-2.07c.51-.87.77-1.82.77-2.85 0-.77-.15-1.5-.45-2.21s-.71-1.31-1.22-1.82-1.12-.92-1.83-1.22a5.6 5.6 0 0 0-2.21-.45c-.77 0-1.5.15-2.21.45a5.651 5.651 0 0 0-3.04 3.04c-.32.72-.47 1.45-.47 2.22zm.58.36v-.72h2.17v.72H9.88zm1.09-3.54.52-.52 1.52 1.52-.52.53-1.52-1.53zm2.53 4.93c0-.42.15-.78.44-1.09.29-.31.65-.47 1.06-.48l2.73-4.49.66.35-2.02 4.83c.18.25.26.54.26.88 0 .44-.15.81-.46 1.11-.31.3-.68.45-1.12.45-.43 0-.8-.15-1.1-.45-.3-.3-.45-.67-.45-1.11zm1.31-4.67V8.12h.69v2.17h-.69zm2.94 3.27v-.74h2.17v.74h-2.17z"
									/>
								</svg>
							{:else if title == 'Rain Chance'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-10 w-10 fill-current text-slate-600 dark:text-sky-400"
									viewBox="0 0 30 30"
									xml:space="preserve"
								>
									<path
										d="M4.64 16.91c0-1.15.36-2.17 1.08-3.07a4.82 4.82 0 0 1 2.73-1.73c.31-1.36 1.02-2.48 2.11-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28 1.08.85 1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.65s1.37 1.03 1.81 1.78c.44.75.67 1.58.67 2.47 0 .88-.21 1.69-.63 2.44-.42.75-1 1.35-1.73 1.8-.73.45-1.53.69-2.4.71-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18.85-.04 1.58-.38 2.18-1.02s.9-1.39.9-2.26-.33-1.62-.98-2.26-1.42-.96-2.31-.96h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58a4.076 4.076 0 0 0-1.39-2.71c-.82-.73-1.76-1.09-2.85-1.09s-2.05.36-2.85 1.09a4.02 4.02 0 0 0-1.36 2.71l-.07.53c0 .12-.07.19-.2.19l-.53.03c-.83.1-1.53.46-2.1 1.07s-.85 1.33-.85 2.16c0 .87.3 1.62.9 2.26s1.33.98 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17-1.34-.06-2.47-.57-3.4-1.53s-1.37-2.1-1.37-3.43zm5.35 6.69c0-.04.01-.11.04-.2l1.63-5.77a.837.837 0 0 1 1.02-.56c.24.04.42.17.54.37.12.2.15.42.08.67l-1.63 5.73c-.12.43-.4.64-.82.64-.04 0-.07-.01-.11-.02-.06-.02-.09-.03-.1-.03a.831.831 0 0 1-.49-.33.895.895 0 0 1-.16-.5zm2.62 2.81 2.44-8.77c.04-.19.14-.34.3-.44.16-.1.32-.15.49-.15.09 0 .18.01.27.03.22.06.38.19.49.39.11.2.13.41.07.64l-2.43 8.78c-.04.17-.13.31-.29.43-.16.12-.32.18-.51.18-.09 0-.18-.02-.25-.05-.2-.05-.37-.18-.52-.39-.11-.18-.13-.39-.06-.65zm4.13-2.79c0-.04.01-.11.04-.23l1.63-5.77a.83.83 0 0 1 .3-.44c.15-.1.3-.15.46-.15.08 0 .17.01.26.03.21.06.36.16.46.31.1.15.15.31.15.47 0 .03-.01.08-.02.14s-.02.1-.02.12l-1.63 5.73c-.04.19-.13.35-.28.46s-.32.17-.51.17l-.24-.05a.809.809 0 0 1-.46-.32.916.916 0 0 1-.14-.47z"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-10 w-10 fill-current text-slate-600 dark:text-sky-400"
									viewBox="0 0 30 30"
									xml:space="preserve"
								>
									<path
										d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76c.31-1.36 1.01-2.48 2.1-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28 1.08.85 1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66.76.44 1.37 1.04 1.81 1.8.44.76.67 1.59.67 2.48 0 1.32-.46 2.47-1.39 3.42-.92.96-2.05 1.46-3.38 1.5-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72-.82-.73-1.76-1.1-2.85-1.1-1.1 0-2.05.37-2.86 1.11-.81.74-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17-1.34-.04-2.47-.54-3.4-1.5-.87-.96-1.33-2.11-1.33-3.43zM11 21.02c0-.22.08-.42.24-.58.16-.16.35-.24.59-.24.23 0 .43.08.59.24.16.16.24.36.24.58 0 .24-.08.44-.24.6-.16.17-.35.25-.59.25-.23 0-.43-.08-.59-.25a.814.814 0 0 1-.24-.6zm0 3.63c0-.24.08-.44.24-.6.16-.15.35-.23.58-.23.23 0 .43.08.59.23.16.16.24.35.24.59s-.08.43-.24.59c-.16.16-.35.23-.59.23a.84.84 0 0 1-.59-.23.8.8 0 0 1-.23-.58zm3.19-1.7c0-.23.08-.44.25-.62.16-.16.35-.24.57-.24.23 0 .43.09.6.26.17.17.26.37.26.6 0 .23-.08.43-.25.6-.17.17-.37.25-.61.25-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6zm0-3.62c0-.23.08-.43.25-.6.18-.16.37-.24.57-.24.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59-.17.16-.37.24-.61.24-.23 0-.42-.08-.58-.24a.847.847 0 0 1-.24-.6zm0 7.28c0-.23.08-.43.25-.61.16-.16.35-.24.57-.24.24 0 .44.08.61.25.17.17.25.37.25.6s-.08.43-.25.59c-.17.16-.37.24-.61.24a.824.824 0 0 1-.82-.83zm3.22-5.59c0-.22.08-.41.25-.58.17-.17.37-.25.6-.25.23 0 .43.08.59.24.16.16.24.36.24.58 0 .24-.08.44-.24.6-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.816.816 0 0 1-.25-.59zm0 3.63c0-.22.08-.42.25-.6.16-.15.36-.23.6-.23s.43.08.59.23.23.35.23.59-.08.43-.23.59c-.16.16-.35.23-.59.23s-.44-.08-.6-.24a.756.756 0 0 1-.25-.57z"
									/>
								</svg>
							{/if}
						</div>
						<p class="pt-2 text-sm text-slate-700 dark:text-slate-300">{description}</p>
						<span class="text-lg font-semibold">{value}</span>
					</div>
				</div>
			{/each}
		</section>
	</div>
</div>

<aside
	class="block h-screen w-full overflow-y-auto border-t border-gray-200 py-4 px-6 dark:border-slate-700 dark:bg-slate-900 sm:w-72 sm:border-l md:w-80"
>
	<div>
		<header class="mt-4 mb-10 flex items-center justify-between">
			<button on:click={openModal}>
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
			<button disabled>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-slate-300 dark:text-slate-600"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>
		</header>
		<div class="space-y-4">
			<div>
				<h2 class="dark:text-white">Today</h2>
				<div class="mt-4 flex space-x-4 overflow-y-auto">
					{#each forecastday[0].hour as { time, temp_c, temp_f }, index}
						<div
							class:bg-sky-100={index == 0}
							class:dark:bg-sky-800={index == 0}
							class="flex flex-col items-center gap-1 rounded-lg py-2 px-4"
						>
							<span class="whitespace-nowrap text-sm dark:text-white"
								>{new Date(time).toLocaleTimeString('en-US', { hour: '2-digit' })}</span
							>
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

							<span class="font-medium dark:text-white"
								>{$settings.tempUnit == 'temp_c' ? temp_c : temp_f}°</span
							>
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

<AlertDialog bind:isOpen />
