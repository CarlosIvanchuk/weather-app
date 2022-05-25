<script>
	import NavContent from './NavContent.svelte';
	import { overlay } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

{#if $overlay}
	<div class="fixed z-50 inset-0 overflow-y-auto lg:hidden">
		<div
			transition:fade={{ duration: 300 }}
			on:click={overlay.close}
			class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
			aria-hidden="true"
		/>
		<div
			in:fly={{ x: -300, duration: 300, easing: cubicInOut, opacity: 1 }}
			out:fly={{ x: -300, duration: 300, easing: cubicInOut, opacity: 1 }}
			class="relative h-full bg-white w-72 sm:w-80 p-6 dark:bg-slate-800"
		>
			<button
				transition:fade
				on:click={overlay.close}
				type="button"
				class="absolute z-10 top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
				tabindex="0"
				><span class="sr-only">Close navigation</span><svg
					viewBox="0 0 10 10"
					class="w-2.5 h-2.5 overflow-visible"
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
