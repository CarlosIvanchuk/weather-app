<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	type SearchResults = SearchObject[];

	type SearchObject = {
		id: number;
		name: string;
		region: string;
		country: string;
		lat: number;
		lon: number;
		url: string;
	};

	const FETCH_OPTIONS = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5'
		}
	};

	let value: string = '';
	let city: string = '';
	let items: SearchResults = [];
	let selectedIndex = -1;
	let controller = new AbortController();
	let loading = false;

	async function fetchCities(query: string) {
		if (browser && query.length >= 3 && query != city) {
			loading = true;
			controller.abort();
			controller = new AbortController();
			let signal = controller.signal;
			try {
				let response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`, {
					...FETCH_OPTIONS,
					signal
				});
				items = await response.json();
				loading = false;
			} catch (error) {
				console.error(error);
			}
		}
	}

	function keyboardSelect(e: KeyboardEvent) {
		let key = e.key;

		if (key == 'ArrowDown' || key == 'Tab') {
			if (selectedIndex + 1 < items.length) {
				selectedIndex++;
			}
			e.preventDefault();
		} else if (key == 'ArrowUp') {
			if (selectedIndex - 1 >= 0) {
				selectedIndex--;
			}
			e.preventDefault();
		} else if (key == 'Enter') {
			if (selectedIndex != -1 && items.length > 0) {
				setValue(items[selectedIndex].name);
			}
			selectedIndex = -1;
			e.preventDefault();
		} else if (key == 'Escape') {
			e.preventDefault();
			items = [];
		}
	}

	function setValue(text: string) {
		value = text;
		city = text;
		items = [];
	}

	const dispatch = createEventDispatcher();

	$: {
		selectedIndex = -1;
		items = [];
		fetchCities(value);
	}

	$: if (city.length > 0) {
		goto(`/?q=${city}`);
		dispatch('close');
	}
</script>

<div class="relative mt-4">
	<div class="relative">
		<input
			class="w-full rounded-md border-slate-400"
			bind:value
			on:keydown={keyboardSelect}
			type="text"
			placeholder="Type at least 3 characters"
		/>
		<svg
			class:hidden={!loading}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute top-2 right-2 animate-spin text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
		>
			<path
				d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"
			/>
		</svg>
	</div>

	{#if items.length > 0}
		<div transition:fade class="mt-2">
			<ul class="">
				{#each items as { name, country }, index}
					<li
						on:click={() => setValue(name)}
						class:ring-2={selectedIndex == index}
						class="cursor-pointer select-none rounded p-3 ring-blue-500 hover:bg-slate-100"
					>
						{name}, {country}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
