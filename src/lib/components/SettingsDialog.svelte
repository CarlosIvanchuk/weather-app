<script lang="ts">
	import { DialogTitle } from '@rgossiaux/svelte-headlessui';
	import Dialog from '$lib/components/Dialog.svelte';

	export let isOpen = false;
</script>

<Dialog bind:isOpen>
	<svelte:fragment let:closeModal>
		<DialogTitle as="h3" class="text-lg text-gray-900">Settings</DialogTitle>

		<ul class="mt-4 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700">
			<li class="flex items-center justify-between">
				<span class="font-medium leading-5">Unidad de temperatura</span>
				<select
					class="block rounded-md border-0 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
				>
					<option>°C</option>
					<option>°F</option>
				</select>
			</li>
			<li class="flex items-center justify-between">
				<span class="font-medium leading-5">Unidad de velocidad de viento</span>
				<select
					class="block rounded-md border-0 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
				>
					<option>km/h</option>
					<option>mph</option>
				</select>
			</li>
		</ul>

		<div class="mt-6">
			<button
				type="button"
				class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
				on:click={closeModal}
			>
				Close
			</button>
		</div>
	</svelte:fragment>
</Dialog>
