<script lang="ts">
	import type { Location, Current } from '$lib/types';
	
	export let location: Location, current: Current;
</script>

<svelte:head>
	<title>RapidAPI Weather</title>
	<meta
		name="description"
		content="Get the weather forecast in a beautiful and performant app. View current and forecasted weather; and also precipitation, air quality, and temperature maps to see different conditions near you."
	/>
</svelte:head>

<div class="flex min-w-0 dark:bg-slate-900 flex-1 flex-shrink flex-col">
	<div class="no-scrollbar flex-1 space-y-4 overflow-y-auto mt-8 px-8 dark:text-white">
		<h1 class="text-lg">{location.name}</h1>
		<div class="text-7xl font-bold">{current.temp_c}°</div>
		<p>{current.condition.text}</p>
	</div>
</div>

<aside
	class="hidden h-screen w-80 overflow-y-auto border-l border-gray-200 py-4 px-3 dark:border-slate-700 dark:bg-slate-900 md:block"
>
	<!-- Forecast! -->
</aside>
