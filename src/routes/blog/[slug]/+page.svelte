<script>
	export let data;
	const { title, date, tags, Content } = data;
</script>

<div class="font-rubik mb-20 mt-10">
	<h1 class="font-bold mb-5 text-5xl">{title}</h1>
	<article class="prose prose-neutral"><Content/></article>
</div>