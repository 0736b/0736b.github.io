<script>
    import { fade } from 'svelte/transition';
	import "../app.css";
	export let data;
</script>

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<div class="container mx-auto max-w-3xl font-rubik mb-10 mt-10 items-center">
			<a href="/">Home</a>
			<a href="/blog">Blog</a>
			<a href="/">About</a>
		<slot />
	</div>
	</main>
{/key}