<script>
	import projects from '$lib/project/projects.json';
</script>

    <div class="project-grid pt-16 mb-32">
        {#each projects as project}
		<!-- F0E75F -->
		<div class="proj-card text-[#D4D4D4] border border-[#444444] hover:border-[#D4D4D4] transition-all p-4 mb-4 mx-4">
			<div class="flex gap-5 justify-around flex-wrap">
				<div class="mt-4">
					<img class="h-48 w-48 object-cover mx-auto" src={project.img_thumbnail} alt="" />
					<br/>
					<a href={project.link} alt="project-link" target="noreferrer">
						<h1 class="uppercase font-bold text-white text-xl lg:text-xl mb-2">{project.title} <span><img src="/blog_imgs/icons8-link-24.png" class="inline" alt="" /></span></h1>
						
					</a>
					<span class="font-rubik px-2 text-sm bg-[#D4D4D422] text-[#D4D4D488]">{project.tech}</span>
					<p class="font-roboto text-sm lg:text-md font-light pt-4">
						{project.description}
					</p>
					<br />
				</div>
			</div>
		</div>
	{/each}
    </div>
