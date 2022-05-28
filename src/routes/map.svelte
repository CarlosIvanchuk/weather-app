<script>
	import * as L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	let map;

	function createMap(container) {
		let m = L.map(container).setView([51.505, -0.09], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(m);

		return m;
	}

	function mapAction(container) {
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
	<div class="flex h-screen w-full" use:mapAction />
</div>
