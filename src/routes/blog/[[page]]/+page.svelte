<script>
	import PostsList from '$lib/components/PostsList.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;
</script>

<section class="content">
	<header class="header">
		<h1 class="title">Blog Posts</h1>
	</header>

	<div class="posts-section">
		<PostsList posts={data.posts} />
	</div>

	<!-- pagination -->
	<div class="pagination">
		{#if !isFirstPage}
			<a href={`/posts/${data.page - 1}`} data-sveltekit-prefetch class="link">Previous</a>
		{:else}
			<div />
		{/if}

		{#if hasNextPage}
			<a href={`/posts/${data.page + 1}`} data-sveltekit-prefetch class="link">Next</a>
		{/if}
	</div>
</section>

<style>
	.header {
		padding-top: 1rem;
	}

	.title {
		font-size: 2.25rem; /* text-4xl */
		font-weight: bold; /* font-bold */
		letter-spacing: -0.025em; /* tracking-tight */
	}

	@media (min-width: 640px) {
		.title {
			font-size: 3rem; /* sm:text-5xl */
		}
	}

	.posts-section {
		margin-top: 1rem; /* mt-16 */
	}

	@media (min-width: 640px) {
		.posts-section {
			margin-top: 2rem; /* sm:mt-20 */
		}
	}

	.pagination {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 4rem; /* pt-16 */
		padding-bottom: 2rem; /* pb-8 */
	}

	.link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
		color: #3b82f6;
	}
</style>
