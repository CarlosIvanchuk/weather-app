<script lang="ts">
	import type { Location, Current } from '$lib/types';

	import { VIDEOS_BY_PLACE } from '$lib/data/videos';

	export let location: Location, current: Current;

	const CDN_URL = 'https://media.publit.io/file/';
</script>

<svelte:head>
	<title>RapidAPI Weather</title>
	<meta
		name="description"
		content="Get the weather forecast in a beautiful and performant app. View current and forecasted weather; and also precipitation, air quality, and temperature maps to see different conditions near you."
	/>
</svelte:head>

<div class="flex min-w-0 flex-1 flex-shrink flex-col dark:bg-slate-900">
	<div class="no-scrollbar flex-1 space-y-4 overflow-y-auto px-8 pt-8 dark:text-white">
		<div class="relative h-60">
			<div class="absolute inset-0 top-4 left-4 z-10 text-slate-700">
				<h1 class="text-lg">{location.name}</h1>
				<div class="text-7xl font-bold">{current.temp_c}°</div>
				<p>{current.condition.text}</p>
			</div>
			<video
				class="absolute h-full w-full rounded-xl object-cover"
				src="{CDN_URL}{VIDEOS_BY_PLACE.japanMtFuji.day}"
				muted
				autoplay
				loop
			/>
		</div>
	</div>
</div>

<aside
	class="hidden h-screen w-80 overflow-y-auto border-l border-gray-200 py-4 px-3 dark:border-slate-700 dark:bg-slate-900 md:block"
>
	<!-- Forecast! -->
</aside>
