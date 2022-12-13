<script>
    import { format } from 'date-fns';
    export let data;
</script>

<div class="blog container mx-auto max-w-3xl mt-10 bg-[#D4D4D4] text-[#1f1f1f] px-14 py-16">
    <h1 class="uppercase font-rubik text-xl mb-8 tracking-widest font-medium">Blog  ➡</h1>
	<ul>
		{#each data.posts as post}
		<div class="blog-card container mx-auto bg-[#D4D4D4] my-8 italic hover:text-[#2637DE] text-glow">
			<a href={post.path}>
			<li>
				<h2 class="post-title text-4xl font-bold font-rubik">
						{post.meta.title}	
				</h2>
				<div class="published-date font-robotomono text-sm tracking-tighter py-2">
					→ {format(new Date(post.meta.date), 'LLLL d, yyyy')}
				</div>
				<h1 class="tag font-robotomono text-sm">→ {post.meta.tags}</h1>
			</li>
			</a>
			<hr class="my-4 mx-auto h-0.5 border-0 bg-[#1f1f1f]">
		</div>
		{/each}
	</ul>
</div>