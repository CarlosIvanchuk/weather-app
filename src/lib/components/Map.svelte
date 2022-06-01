<script lang="ts">
	import type { Location, Current } from '$lib/types';
	import 'leaflet/dist/leaflet.css';
	import { onMount } from 'svelte';

	export let current: Current, location: Location;

	let myMap: HTMLElement;

	let createMap = (container, location) => {};

	onMount(async () => {
		const { map, tileLayer } = await import('leaflet');

		createMap = (container: HTMLElement, location) => {
			let m = map(container).setView([location.lat, location.lon], 5);
			// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			// 	attribution:
			// 		'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			// }).addTo(m);

			tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
				attribution:
					'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				subdomains: 'abcd',
				minZoom: 1,
				maxZoom: 16
			}).addTo(m);

			return m;
		};

		createMap(myMap, location);
	});
</script>

<div class="flex h-screen w-full" bind:this={myMap} />
