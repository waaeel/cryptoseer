<script>
	import PostPreview from '$lib/components/PostPreview.svelte';
	import PostDate from '$lib/components/PostDate.svelte';

	export let posts;
</script>

<div class="container">
	{#each posts as post}
		<article class="post-grid">
			<div class="content-span">
				<PostPreview {post}>
					<slot slot="eyebrow">
						<PostDate {post} />
					</slot>
				</PostPreview>
			</div>
		</article>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 4rem; /* gap-16 */
		padding-left: 0;

		@media (min-width: 768px) {
			/* md: */
			border-left: 1px solid #e2e8f0; /* border-zinc-100, adjust the hex value to your preference */
			padding-left: 1.5rem; /* pl-6 */
		}
	}

	.post-grid {
		display: grid;
		align-items: start;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem; /* gap-8 */
	}

	.date-md {
		display: none;
		flex-direction: column;

		@media (min-width: 768px) {
			/* md: */
			display: flex;
			font-size: 0.875rem; /* text-sm */
		}
	}

	.content-span {
		grid-column: span 4;

		@media (min-width: 768px) {
			/* md: */
			grid-column: span 3;
		}
	}

	.date-mobile {
		display: block;

		@media (min-width: 768px) {
			/* md: */
			display: none;
		}
	}
</style>
