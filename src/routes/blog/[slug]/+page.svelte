<script>
	export let data;
	const { title, date, tags, Content } = data;
</script>

<div class="container mx-auto max-w-3xl font-rubik my-20">
	<h1 class="font-bold mb-5 text-5xl">{title}</h1>
	<article class="prose prose-neutral lg:prose-xl"><Content/></article>
</div>