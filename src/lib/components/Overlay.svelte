<script>
	import NavContent from './NavContent.svelte';
	import { overlay } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

{#if $overlay}
	<div class="fixed inset-0 z-50 overflow-y-auto lg:hidden">
		<div
			transition:fade={{ duration: 300 }}
			on:click={overlay.close}
			class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
			aria-hidden="true"
		/>
		<div
			in:fly={{ x: -300, duration: 300, easing: cubicInOut, opacity: 1 }}
			out:fly={{ x: -300, duration: 300, easing: cubicInOut, opacity: 1 }}
			class="relative h-full w-72 bg-white p-6 dark:bg-slate-800 sm:w-80"
		>
			<button
				transition:fade
				on:click={overlay.close}
				type="button"
				class="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
				tabindex="0"
				><span class="sr-only">Close navigation</span><svg
					viewBox="0 0 10 10"
					class="h-2.5 w-2.5 overflow-visible"
					><path
						d="M0 0L10 10M10 0L0 10"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/></svg
				></button
			>
			<NavContent />
		</div>
	</div>
{/if}
