<script>
	import * as L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	export let lat = 51.505;
	export let lon = -0.09;

	let map;

	function createMap(container) {
		let m = L.map(container).setView([lat, lon], 5);
		// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		// 	attribution:
		// 		'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		// }).addTo(m);

		L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
			attribution:
				'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			subdomains: 'abcd',
			minZoom: 1,
			maxZoom: 16,
			ext: 'jpg'
		}).addTo(m);

		return m;
	}

	function insertMap(container) {
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
	<div class="flex h-screen w-full" use:insertMap />
</div>
