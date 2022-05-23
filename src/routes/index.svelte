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

<h1 class="text-lg">{location.name}</h1>
<div class="text-7xl font-bold">{current.temp_c}°</div>
<p>{current.condition.text}</p>
