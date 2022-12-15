<script>
    import { format } from 'date-fns';
    export let data;
</script>

<div class="blog container mx-auto max-w-3xl mt-10 bg-[#662C92] text-[#D4D4D4] px-14 py-16">
	{#each data.posts as post}
	<a href={post.path}>
    <h1 class="uppercase font-rubik text-xl mb-8 tracking-widest font-medium">Blogs  ➡</h1>
    <h1 class="uppercase font-rubik font-black text-7xl">{post.meta.title}</h1>
    <h2 class="font-robotomono text-xl py-4">{format(new Date(post.meta.date), 'EEEE LLLL d, yyyy')}</h2>
	<span class="font-rubik px-2 text-sm bg-[#D4D4D4] text-[#662C92]">{post.meta.tags}</span>
    <hr class="my-4 mx-auto h-0.5 border-0 bg-[#D4D4D4]">
    <p class="font-robotomono pt-4 text-lg font-light">{post.meta.intro}</p>
	</a>
	{/each}
</div>