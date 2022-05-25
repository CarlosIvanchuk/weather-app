<script>
	import '../app.css';
	import Overlay from '$lib/components/Overlay.svelte';
	import NavContent from '$lib/components/NavContent.svelte';
</script>

<!-- Mobile -->
<div class="flex md:hidden">
	<slot />
</div>

<!-- Desktop -->
<div class="hidden h-screen md:flex">
	<aside
		class="hidden h-screen w-72 overflow-y-auto border-r border-gray-200 py-4 px-3 dark:border-gray-700 dark:bg-gray-800 lg:block"
	>
		<NavContent />
	</aside>

	<slot />
</div>

<Overlay />
