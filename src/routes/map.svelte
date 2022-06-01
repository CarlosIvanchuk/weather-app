<script context="module">
	/** @type {import('./__types/[slug]').Load} */
	export async function load({ fetch, url }) {
		const { searchParams } = url;
		const query = searchParams.get('q');

		const res = await fetch(`/api/current?${query == null ? '' : 'q=' + query}`);

		const { data, ok, error } = await res.json();

		if (!ok) {
			console.log(error)
			return {
				status: 400,
				error: error.message
			}
		}
		
		const { current, location } = data;

		return {
			status: 200,
			props: { current, location }
		};
	}
</script>

<script lang="ts">
	import type { Location, Current } from '$lib/types';
	import 'leaflet/dist/leaflet.css';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';

	export let current: Current, location: Location;

	let myMap: HTMLElement;

	let createMap = (container, location) => {}
 
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
		}

		createMap(myMap, location)
	});	
</script>

<svelte:head>
	<title>Map - RapidAPI Weather</title>
	<meta name="description" content="" />
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col dark:bg-slate-900">
	<div class="flex items-center border-b border-slate-900/10 dark:border-slate-600 md:border-0">
		<Header title={`${location.name}, ${location.country}`} />
	</div>
	
	<div class="flex h-screen w-full" bind:this={myMap} />
</div>
