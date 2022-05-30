<script lang="ts">
	import { DialogDescription, DialogTitle } from '@rgossiaux/svelte-headlessui';
	import Dialog from '$lib/components/Dialog.svelte';
</script>

<Dialog>
	<svelte:fragment let:closeModal>
		<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
			Settings
		</DialogTitle>

		<DialogDescription>
			<div class="mt-2">
				<p class="text-sm text-gray-500">
					These are the settings that you can change
				</p>
			</div>
		</DialogDescription>

		<div class="mt-4">
			<button
				type="button"
				class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
				on:click={closeModal}
			>
				Close
			</button>
		</div>
	</svelte:fragment>
</Dialog>
