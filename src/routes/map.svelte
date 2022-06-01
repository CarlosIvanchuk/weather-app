<script context="module">
	/** @type {import('./__types/[slug]').Load} */
	export async function load({ fetch, url }) {
		const { searchParams } = url;
		const query = searchParams.get('q');

		const res = await fetch(`/api/current?${query == null ? '' : 'q=' + query}`);

		const { data, ok, error } = await res.json();

		if (!ok) {
			console.log(error);
			return {
				status: 400,
				error: error.message
			};
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
	import Map from '$lib/components/Map.svelte';

	export let current: Current, location: Location;
</script>

<svelte:head>
	<title>Map - RapidAPI Weather</title>
	<meta name="description" content="" />
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col dark:bg-slate-900">
	<div class="flex items-center border-b border-slate-900/10 dark:border-slate-600 md:border-0">
		<Header title={`${location.name}, ${location.country}`} />
	</div>
	
	{#key location}
		<Map {location} {current} />
	{/key}
</div>
