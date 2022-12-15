<script>
	import projects from '$lib/project/projects.json';
</script>

    <div class="project-grid pt-2">
        {#each projects as project}
		<div class="proj-card bg-[#D4D4D4] text-[#FF441D] p-4 mb-4 mx-4">
			<div class="flex gap-5 justify-around flex-wrap">
				<div class="mt-4">
					<img class="h-48 w-48 object-cover mx-auto rounded-full" src={project.img_thumbnail} alt="" />
					<br/>
					<h1 class="uppercase font-rubik font-black text-5xl mb-2">{project.title}</h1>
					<span class="font-rubik px-2 text-sm bg-[#FF441D] text-[#D4D4D4]">{project.tech}</span>
                    <hr class="my-4 mx-auto h-0.5 border-0 bg-[#FF441D]">
					<p class="font-robotomono text-lg font-light">
						{project.description}
					</p>
					<br />
				</div>
			</div>
		</div>
	{/each}
    </div>
