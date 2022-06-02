<script lang="ts">
	import type { Location, Current } from '$lib/types';
	import 'leaflet/dist/leaflet.css';
	import { onMount } from 'svelte';

	export let current: Current, location: Location;

	let myMap: HTMLElement;

	let createMap = (container, location) => {};

	const colors = [
		{ color: '#2600FF', temp: '<9°C' },
		{ color: '#00FFB3', temp: '9-16°C' },
		{ color: '#00FF08', temp: '17-24°C' },
		{ color: '#FF8A05', temp: '25-30°C' },
		{ color: '#FF0505', temp: '>30°C' }
	];

	function getColor(current: Current) {
		let color;
		if (current.temp_c < 9) {
			color = '#2600FF'; // blue
		} else if (current.temp_c < 17) {
			color = '#00FFB3'; // turquoise
		} else if (current.temp_c < 25) {
			color = '#00FF08'; // green
		} else if (current.temp_c < 31) {
			color = '#FF8A05'; // orange
		} else {
			color = '#FF0505'; // red
		}
		return color;
	}

	onMount(async () => {
		const { map, tileLayer, circle } = await import('leaflet');

		createMap = (container: HTMLElement, location) => {
			let m = map(container).setView([location.lat, location.lon], 12);
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(m);

			// tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
			// 	maxZoom: 20,
			// 	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			// }).addTo(m)

			// tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
			// 	attribution:
			// 		'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			// 	subdomains: 'abcd',
			// 	minZoom: 1,
			// 	maxZoom: 16
			// }).addTo(m);

			circle([location.lat, location.lon], 5000, {
				color: '#fff',
				fillColor: getColor(current),
				fillOpacity: 0.4
			}).addTo(m);

			return m;
		};

		createMap(myMap, location);
	});
</script>

<div class="relative">
	<!-- Mobile -->
	<div
		class="absolute top-2 right-2 z-[1000] flex flex-col items-center gap-1 rounded-md border border-white bg-white bg-opacity-80 py-2 px-4 shadow-lg dark:border-slate-700 dark:bg-slate-900/80 lg:hidden"
	>
		<span class="whitespace-nowrap text-sm font-semibold dark:text-white">Today</span>
		<img class="-my-1 h-12 w-12" src={current.condition.icon} alt="" />
		<span class="font-medium dark:text-white">{current.temp_c}°</span>
	</div>
	<!-- Desktop -->
	<div
		class="absolute top-2 right-2 z-[1000] hidden w-64 flex-col rounded-md border border-white bg-white bg-opacity-80 py-2 px-3 shadow-lg dark:border-slate-700 dark:bg-slate-900/80 lg:flex"
	>
		<h1 class="hidden font-semibold leading-5 text-slate-600 dark:text-slate-200 md:inline-block">
			{location.name}, {location.country}
		</h1>
		<div class="relative mt-2 flex items-center justify-between rounded-lg">
			<div class="flex flex-col">
				<span class="dark:text-white">Today</span>
			</div>

			<div class="absolute inset-0 flex items-center justify-center">
				<span class="text-lg font-medium dark:text-white">{current.temp_c}°C</span>
			</div>
			<img class="-my-3 h-14 w-14" src={current.condition.icon} alt="" />
		</div>
	</div>

	<div
		class="absolute top-32 right-2 z-[1000] w-28 rounded-md border border-white bg-white bg-opacity-80 py-2 px-2 shadow-lg dark:border-slate-700 dark:bg-slate-900/80 lg:top-28"
	>
		{#each colors as { color, temp }, id}
			<div class="flex items-center justify-between">
				<div
					style="background-color: {color}bb;"
					class="block h-5 w-5 border border-white bg-opacity-40 dark:border-slate-500"
				/>
				<span>{temp}</span>
			</div>
		{/each}
	</div>
</div>
<div class="flex h-screen w-full" bind:this={myMap} />
