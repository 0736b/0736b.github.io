<script>
    import { format } from 'date-fns';
    export let data;
</script>

<div class="blog container mx-auto max-w-3xl mt-10 mb-32 bg-[#202020] text-[#D4D4D4] px-14 py-16">
    <h1 class="uppercase font-rubik text-xl mb-8 tracking-widest font-medium text-[#8080FF]">Blog  ➡</h1>
	{#each data.posts as post}
	<a href={post.path}>
    <h1 class="uppercase font-rubik font-black text-5xl lg:text-7xl">{post.meta.title}</h1>
    <h2 class="font-robotomono text-xl py-4">{format(new Date(post.meta.date), 'EEEE LLLL d, yyyy')}</h2>
	<span class="font-rubik px-2 text-sm bg-[#8080FF] text-[#202020]">{post.meta.tags}</span>
    <hr class="my-4 mx-auto h-0.5 border-0 bg-[#8080FF]">
    <p class="font-robotomono pt-4 text-lg font-light">{post.meta.intro}</p>
	</a>
	{/each}
</div>