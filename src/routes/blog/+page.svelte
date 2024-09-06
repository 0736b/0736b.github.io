<script>
    import { format } from 'date-fns';
    export let data;
</script>

<div class="blog container mx-auto max-w-3xl mt-10 mb-32 text-[#D4D4D4] px-14 py-16 banner-active">
	{#each data.posts as post}
    <a href={post.path}>
	<div class="p-4 border border-[#444444] hover:border-[#AAAAAA] transition-all">
            <h1 class="uppercase font-bold text-xl lg:text-xl banner-active text-white">{post.meta.title}</h1>
            <span class="font-rubik px-2 text-sm bg-[#D4D4D4] text-black">{post.meta.tags}</span>
            <p class="pt-4 text-sm md:text-md font-roboto">{post.meta.intro}</p>
            <h2 class="font-robotomono text-md pt-2">{format(new Date(post.meta.date), 'EEEE LLLL d, yyyy')}</h2>
    </div>
    </a>
	{/each}
</div>