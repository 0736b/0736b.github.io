<script>
	import projects from '$lib/project/projects.json';
</script>

    <div class="project-grid pt-2 mb-32">
        {#each projects as project}
		<!-- F0E75F -->
		<div class="proj-card bg-[#202020] text-[#D4D4D4] p-4 mb-4 mx-4">
			<div class="flex gap-5 justify-around flex-wrap">
				<div class="mt-4">
					<img class="h-48 w-48 object-cover mx-auto border border-4 border-[#AA0000]" src={project.img_thumbnail} alt="" />
					<br/>
					<a href={project.link} alt="project-link" target="noreferrer">
						<h1 class="uppercase font-rubik font-black text-3xl lg:text-5xl mb-2">{project.title} <span><img src="/blog_imgs/icons8-link-24.png" class="inline" alt="" /></span></h1>
						
					</a>
					<span class="font-rubik px-2 text-sm bg-[#AA0000] text-[#D4D4D4]">{project.tech}</span>
                    <hr class="my-4 mx-auto h-0.5 border-0 bg-[#AA0000]">
					<p class="font-robotomono text-lg font-light">
						{project.description}
					</p>
					<br />
				</div>
			</div>
		</div>
	{/each}
    </div>
