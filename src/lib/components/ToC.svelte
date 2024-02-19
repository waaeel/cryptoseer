<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	export let post;

	let elements = [];
	let headings = post.headings;

	onMount(() => {
		updateHeadings();
		setActiveHeading();
	});

	let activeHeading = headings[0];
	let scrollY;

	function updateHeadings() {
		headings = post.headings;

		if (browser) {
			elements = headings.map((heading) => {
				return document.getElementById(heading.id);
			});
		}
	}
	function setActiveHeading() {
		scrollY = window.scrollY;

		const visibleIndex =
			elements.findIndex((element) => element.offsetTop + element.clientHeight > scrollY) - 1;

		activeHeading = headings[visibleIndex];

		const pageHeight = document.body.scrollHeight;
		const scrollProgress = (scrollY + window.innerHeight) / pageHeight;

		if (!activeHeading) {
			if (scrollProgress > 0.5) {
				activeHeading = headings[headings.length - 1];
			} else {
				activeHeading = headings[0];
			}
		}
	}
</script>

<svelte:window on:scroll={setActiveHeading} />

<Card>
	<slot slot="description">
		<ul class="list-container">
			{#each headings as heading}
				<li
					class="list-item"
					class:active={activeHeading === heading}
					style={`--depth: ${
						// consider h1 and h2 at the same depth, as h1 will only be used for page title
						Math.max(0, heading.depth - 1)
					}`}
				>
					<a href={`#${heading.id}`}>{heading.value}</a>
				</li>
			{/each}
		</ul>
	</slot>
</Card>

<style lang="postcss">
	.list-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem; /* gap-2 */
	}

	.list-item {
		padding-left: 0.5rem; /* pl-2 */
		border-color: #f472b6; /* border-pink-500 */
		transition: colors 150ms;

		&:hover {
			color: #111827; /* hover:text-zinc-900 */
		}

		/* Depth Indentation */
		padding-left: calc(var(--depth, 0) * 0.35rem);
	}

	.active {
		font-weight: 500; /* font-medium */
		border-left: 2px solid;
		margin-left: -2px; /* -ml-[2px] */
	}
</style>
