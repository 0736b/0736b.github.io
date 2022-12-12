<script>
	export let data;
	const { title, date, tags, Content } = data;
</script>

	<div class="container mx-auto max-w-6xl prose prose-neutral font-rubik mb-20 mt-10 bg-[#D4D4D4] p-24">
		<h1 class="font-bold mb-5 text-5xl">{title}</h1>
		<Content/>
	</div>
