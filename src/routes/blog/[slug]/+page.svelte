<script>
	export let data;
	import { format } from 'date-fns';
	const { title, date, tags, Content } = data;
</script>

	<div class="container mx-auto max-w-3xl prose prose-neutral prose-pre:rounded-none font-rubik mb-20 mt-10 bg-[#D4D4D4] p-12">
		<h1 class="font-bold mb-5 text-5xl">{title}</h1>
		<div class="published-date">
			<span class="bg-[#161616] text-[#D4D4D4] px-2">{format(new Date(date), 'EEEE, LLLL d, yyyy')}</span>
		</div>
		<div class="tag">
			<span class="bg-[#161616] text-[#D4D4D4] px-2">{tags}</span>
		</div>
		<Content/>
		<!-- {Content} -->
	</div>
