<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		Transition,
		TransitionChild
	} from '@rgossiaux/svelte-headlessui';
	let isOpen = true;
	function closeModal() {
		isOpen = false;
	}
	function openModal() {
		isOpen = true;
	}
</script>

<div class="fixed inset-0 flex items-center justify-center">
	<button
		type="button"
		on:click={openModal}
		class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
	>
		Open dialog
	</button>
</div>

<Transition appear show={isOpen}>
	<Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
		<div class="min-h-screen px-4 text-center">
			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<DialogOverlay class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
			</TransitionChild>

			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0 sm:scale-95"
				enterTo="opacity-100 sm:scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 sm:scale-100"
				leaveTo="opacity-0 sm:scale-95"
			>
				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
				<div
					class="absolute inset-0 inline-block w-full transform overflow-hidden bg-white p-6 text-left align-middle transition-all sm:relative sm:my-8 sm:max-w-md sm:rounded-2xl sm:shadow-xl"
				>
					<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
						Payment successful
					</DialogTitle>
					<div class="mt-2">
						<p class="text-sm text-gray-500">
							Your payment has been successfully submitted. We’ve sent you an email with all of the
							details of your order.
						</p>
					</div>

					<div class="mt-4">
						<button
							type="button"
							class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							on:click={closeModal}
						>
							Got it, thanks!
						</button>
					</div>
				</div>
			</TransitionChild>
		</div>
	</Dialog>
</Transition>
