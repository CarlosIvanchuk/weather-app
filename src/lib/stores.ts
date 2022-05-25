import { writable } from 'svelte/store';

function createToggle() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		open: () => set(true),
		close: () => set(false)
	};
}

export const overlay = createToggle();
