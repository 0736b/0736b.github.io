<script>
	// import { format } from 'date-fns';
	// import Fa from 'svelte-fa/src/fa.svelte';
	// import { faCalendar } from '@fortawesome/free-regular-svg-icons';
	export let data;
	const { title, date, tags, Content } = data;
</script>

<article>
	<h1>{title}</h1>
	<p class="publish-date">
		<!-- <Fa icon={faCalendar} />
		{format(new Date(date), 'EEEE, LLLL d, yyyy')} -->
	</p>
	<Content />
</article>