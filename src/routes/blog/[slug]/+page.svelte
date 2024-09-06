<script>
	export let data;
	import { format } from 'date-fns';
	const { title, date, tags, Content } = data;
</script>

	<div class="container mx-auto max-w-4xl prose prose-invert prose-pre:rounded-none font-robotomono mb-20 pb-20 mt-16 border border-[#444444] text-[#D4D4D4] p-12">
		<h1 class="banner-active uppercase font-rubik font-black text-3xl lg:text-5xl text-white">{title}</h1>
		<div class="tag">
			<span class="font-rubik px-2 text-sm bg-[#D4D4D4] text-black">{tags}</span>
		</div>
		<span class="font-robotomono text-xl text-[#D4D4D4]">{format(new Date(date), 'LLLL d, yyyy')}</span>
		<div class="font-sans font-light">
			<Content/>
		</div>
	</div>
