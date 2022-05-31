<script lang="ts">
	import { DialogTitle } from '@rgossiaux/svelte-headlessui';
	import Dialog from '$lib/components/Dialog.svelte';
	import Autocomplete from '$lib/components/Autocomplete.svelte';

	export let isOpen = false;
</script>

<Dialog bind:isOpen>
	<svelte:fragment let:closeModal>
		<DialogTitle as="h3" class="text-lg text-gray-900 dark:text-white">
			<label for="country">Search</label>
		</DialogTitle>

		<Autocomplete on:close={closeModal} />

		<div class="mt-6">
			<button
				type="button"
				class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-600 dark:text-sky-100 dark:focus-visible:ring-offset-slate-800"
				on:click={closeModal}
			>
				Close
			</button>
		</div>
	</svelte:fragment>
</Dialog>
