<script>
	import '../app.css';
	import Overlay from '$lib/components/Overlay.svelte';
</script>

<!-- Mobile -->
<div class="flex md:hidden">
	<slot />
</div>

<!-- Desktop -->
<div class="hidden md:flex h-screen">
	<div class="overflow-y-auto dark:bg-gray-800">
		<!-- Sidebar -->
	</div>

	<slot />
</div>

<Overlay />
