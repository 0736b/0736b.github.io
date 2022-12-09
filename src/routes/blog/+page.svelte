<script>
    // import Fa from 'svelte-fa/src/fa.svelte';
    // import { format } from 'date-fns';
    // import { faCalendar } from '@fortawesome/free-regular-svg-icons';
    export let data;
</script>

<h1>Blog</h1>

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
			<!-- <TagBar tags={post.meta.tags} /> -->
		</li>
	{/each}
</ul>