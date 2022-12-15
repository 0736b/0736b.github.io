export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, tags, intro } = post.metadata;
		const Content = post.default;

		return {
			Content,
			title,
			date,
			tags,
			intro
		};
	} catch (error) {
		console.error(error);
	}
}