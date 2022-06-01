<script lang="ts">
	import type { Location, Current } from '$lib/types';
	import 'leaflet/dist/leaflet.css';
	import { onMount } from 'svelte';

	export let current: Current, location: Location;

	let myMap: HTMLElement;

	let createMap = (container, location) => {};
	
	const colors = [
		{color: '#2600FF', temp: "<9°C"},
		{color: '#00FFB3', temp: "9-16°C"},
		{color: '#00FF08', temp: "17-24°C"},
		{color: '#FF8A05', temp: "25-30°C"},
		{color: '#FF0505', temp: ">30°C"},
	] 

	function getColor(current: Current) {
		let color
		if (current.temp_c < 9) {
			color = "#2600FF" // blue
		} else if (current.temp_c < 17) {
			color = "#00FFB3" // turquoise
		} else if (current.temp_c < 25) {
			color = "#00FF08" // green
		} else if (current.temp_c < 31) {
			color = "#FF8A05" // orange
		} else {
			color = "#FF0505" // red
		}
		return color
	}

	onMount(async () => {
		const { map, tileLayer, circle } = await import('leaflet');

		createMap = (container: HTMLElement, location) => {
			let m = map(container).setView([location.lat, location.lon], 12);
			// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			// 	attribution:
			// 		'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			// }).addTo(m);
			
			
			// tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
			// 	maxZoom: 20,
			// 	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			// }).addTo(m)

			tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
				attribution:
					'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				subdomains: 'abcd',
				minZoom: 1,
				maxZoom: 16
			}).addTo(m);

			circle([location.lat, location.lon], 5000, {
				color: "#fff",
				fillColor: getColor(current),
				fillOpacity: 0.4
			}).addTo(m)

			return m;
		};

		createMap(myMap, location);
	});
</script>
<div class="relative">
	<!-- Mobile -->
	<div
		class="flex absolute lg:hidden top-2 rounded-md bg-white shadow-lg bg-opacity-80 z-[1000] right-2 flex-col items-center gap-1 py-2 px-4 border border-white dark:bg-slate-900/80 dark:border-slate-700"
	>
		<span class="whitespace-nowrap text-sm dark:text-white font-semibold">Today</span>
		<img class="w-12 h-12 -my-1" src="{current.condition.icon}" alt="">
		<span class="font-medium dark:text-white">{current.temp_c}°</span>
	</div>
	<!-- Desktop -->
	<div class="flex-col hidden lg:flex absolute top-2 right-2 z-[1000] rounded-md bg-white shadow-lg bg-opacity-80 border border-white w-64 py-2 px-3 dark:bg-slate-900/80 dark:border-slate-700">
		<h1 class="hidden md:inline-block text-slate-600 leading-5 font-semibold dark:text-slate-200">{location.name}, {location.country}</h1>
		<div class="relative flex items-center justify-between rounded-lg mt-2">
			<div class="flex flex-col">
				<span class="dark:text-white">Today</span>
			</div>

			<div class="absolute inset-0 flex items-center justify-center">
				<span class="text-lg font-medium dark:text-white">{current.temp_c}°C</span>
			</div>
			<img class="w-14 h-14 -my-3" src="{current.condition.icon}" alt="">
		</div>
	</div>

	<div class="absolute top-32 lg:top-28 right-2 z-[1000] rounded-md bg-white shadow-lg bg-opacity-80 border border-white w-28 py-2 px-2 dark:bg-slate-900/80 dark:border-slate-700">
		{#each colors as {color, temp}, id}
			<div class="flex items-center justify-between">
				<div style="background-color: {color}bb;" class="bg-opacity-40 block border border-white dark:border-slate-500 h-5 w-5"></div>
				<span>{temp}</span>
			</div>
		{/each}
	</div>
</div>
<div class="flex h-screen w-full" bind:this={myMap} />
	