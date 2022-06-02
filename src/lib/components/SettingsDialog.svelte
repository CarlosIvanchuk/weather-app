<script lang="ts">
	import { DialogTitle } from '@rgossiaux/svelte-headlessui';
	import Dialog from '$lib/components/Dialog.svelte';
	import { settings } from '$lib/stores/index';

	export let isOpen = false;

	let settingOptions = [
		{
			name: 'Unidades de temperatura',
			settingId: 'tempUnit',
			options: [
				{ id: 'temp_c', text: '°C' },
				{ id: 'temp_f', text: '°F' }
			]
		},
		{
			name: 'Unidades de velocidad de viento',
			settingId: 'windVelUnit',
			options: [
				{ id: 'wind_kph', text: 'km/h' },
				{ id: 'wind_mph', text: 'mph' }
			]
		}
	];
</script>

<Dialog bind:isOpen>
	<svelte:fragment let:closeModal>
		<DialogTitle as="h3" class="text-lg text-gray-900 dark:text-white">Settings</DialogTitle>

		<ul class="mt-4 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700">
			{#each settingOptions as { name, settingId, options } (settingId)}
				<li class="flex items-center justify-between">
					<label for={settingId} class="font-medium leading-5">{name}</label>
					<select
						bind:value={$settings[settingId]}
						id={settingId}
						class="block rounded-md border-0 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-slate-700 dark:focus-visible:ring-offset-slate-700"
					>
						{#each options as option (option.id)}
							<option value={option.id}>{option.text}</option>
						{/each}
					</select>
				</li>
			{/each}
		</ul>

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
