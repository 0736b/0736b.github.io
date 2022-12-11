<script>
    import { fade } from 'svelte/transition';
	import "../app.css";
	export let data;
</script>

<!-- <div class="font-rubik">
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
	<a href="/">About</a>
</div> -->


<div class="container mx-auto max-w-3xl font-rubik text-xl text-center my-8 text-[#D4D4D4]">
	<a href="/" class="font-semibold uppercase px-4">Home</a>
	<a href="/blog" class="font-semibold uppercase px-4">Blog</a>
	<a href="/" class="font-semibold uppercase px-4">Project</a>
</div>
  

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<div class="container mx-auto max-w-3xl font-rubik">
			<slot />
		</div>
	</main>
{/key}