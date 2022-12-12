<script>
    import { format } from 'date-fns';
    export let data;
</script>

<div class="blog container mx-auto max-w-3xl mt-10 bg-[#D4D4D4] text-[#1f1f1f] px-14 py-16">
    <h1 class="uppercase font-rubik text-xl mb-8 tracking-widest font-medium">Blog  ></h1>
    <!-- <h1 class="uppercase font-rubik font-black text-7xl">I'm Thanawat</h1>
    <h2 class="font-robotomono text-2xl py-4">Computer engineering student. <br>programmer by day, game-hacker by night.</h2>
    <hr class="my-4 mx-auto h-0.5 border-0 bg-[#1f1f1f]">
    <p class="font-robotomono pt-4 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil impedit reiciendis tenetur ex veritatis animi alias voluptatibus dolorum accusantium repellat corporis, recusandae sequi optio fugit, repudiandae explicabo necessitatibus cum.</p> -->
	<ul>
		{#each data.posts as post}
		<div class="blog-card container mx-auto bg-blue-700 my-8">
			<li>
				<h2 class="post-title">
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<div class="published-date">
					{format(new Date(post.meta.date), 'EEEE, LLLL d, yyyy')}
				</div>
				<h1>{post.meta.tags}</h1>
			</li>
		</div>
		{/each}
	</ul>
</div>

<ul>
	{#each data.posts as post}
		<li>
			<h2 class="post-title">
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<div class="published-date">
				<!-- <Fa icon={faCalendar} />
				{format(new Date(post.meta.date), 'EEEE, LLLL d, yyyy')} -->
			</div>
			<h1>{post.meta.tags}</h1>
			<!-- <TagBar tags={post.meta.tags} /> -->
		</li>
	{/each}
</ul>