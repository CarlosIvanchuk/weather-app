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
<div class="hidden md:flex h-screen">
	<aside
		class="hidden lg:block py-4 px-3 dark:bg-gray-800 w-72 overflow-y-auto h-screen border-r border-gray-200 dark:border-gray-700"
	>
		<NavContent/>
	</aside>

	<slot />
</div>

<Overlay />
