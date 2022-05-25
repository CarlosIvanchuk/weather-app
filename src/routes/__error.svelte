<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	import { dev } from '$app/env';
	export let error, status;
</script>

<svelte:head>
	<title>{status} - RapidAPI Weather</title>
	<meta name="description" content="" />
</svelte:head>

<section
	class="absolute inset-0 flex flex-col items-center justify-center bg-white px-4 dark:bg-slate-900 dark:text-white sm:px-10"
>
	<div class="mx-4 max-w-full overflow-auto sm:mx-10">
		<h1 class="text-center text-3xl font-bold">{status}</h1>
		<p class="mt-4 text-center text-xl font-normal">{error.message}</p>
		{#if dev}
			<pre
				class="mt-4 overflow-x-auto rounded-lg border border-slate-300 bg-slate-100 p-4 dark:border-slate-600 dark:bg-slate-800">{error.stack}</pre>
		{/if}
	</div>
</section>
