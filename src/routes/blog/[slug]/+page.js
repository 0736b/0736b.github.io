export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, tags } = post.metadata;
		const Content = post.default;

		return {
			Content,
			title,
			date,
			tags
		};
	} catch (error) {
		console.error(error);
	}
}