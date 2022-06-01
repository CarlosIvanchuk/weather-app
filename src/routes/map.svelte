<script lang="ts">
	import * as L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import Header from '$lib/components/Header.svelte';

	export let location = { name: 'Tokyo', country: 'Japan', lat: 35.652832, lon: 139.839478 };

	let map;

	function createMap(container: HTMLElement) {
		let m = L.map(container).setView([location.lat, location.lon], 5);
		// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		// 	attribution:
		// 		'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		// }).addTo(m);

		L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
			attribution:
				'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			subdomains: 'abcd',
			minZoom: 1,
			maxZoom: 16
		}).addTo(m);

		return m;
	}

	function insertMap(container: HTMLElement) {
		map = createMap(container);
		return {
			destroy: () => {
				map.remove();
			}
		};
	}
</script>

<svelte:head>
	<title>Map - RapidAPI Weather</title>
	<meta name="description" content="" />
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col dark:bg-slate-900">
	<div class="flex items-center border-b border-slate-900/10 dark:border-slate-600 md:border-0">
		<Header title={`${location.name}, ${location.country}`} />
	</div>
	<div class="flex h-screen w-full" use:insertMap />
</div>
