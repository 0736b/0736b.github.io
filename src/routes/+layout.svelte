<script>
	import { browser } from '$app/environment';
  	import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import "../app.css";
	export let data;

	// onMount(() => {
	// 	if (browser && 'serviceWorker' in navigator) {
	// 	navigator.serviceWorker.register('/service-worker.js')
	// 		.then((registration) => {
	// 		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	// 		})
	// 		.catch((error) => {
	// 		console.error('ServiceWorker registration failed: ', error);
	// 		});
	// 	}
	// });
</script>

<div class="container mx-auto max-w-3xl font-rubik text-xl text-center my-8 text-[#D4D4D4]">
	<a href="/" class="font-thin italic lowercase px-4 tracking-tighter text-glow hover:text-white transition-all"><span class:font-bold={$page.url.pathname==='/'}><span class:underline={$page.url.pathname==='/'}>Home</span></span></a>
	<a href="/blog" class="font-thin italic lowercase px-4 text-glow tracking-tighter hover:text-white transition-all"><span class:font-bold={$page.url.pathname.includes('/blog')}><span class:underline={$page.url.pathname.includes('/blog')}>Blog</span></span></a>
	<a href="/project" class="font-thin italic lowercase px-4 text-glow tracking-tighter hover:text-white transition-all"><span class:font-bold={$page.url.pathname.includes('/project')}><span class:underline={$page.url.pathname.includes('/project')}>Project</span></span></a>
</div>
  

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<div class="container mx-auto max-w-6xl font-rubik">
			<slot />
		</div>
	</main>
{/key}