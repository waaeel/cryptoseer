<script>
	import Card from './Card.svelte';

	export let post;
</script>

<Card href={`/post/${post.slug}`} data-sveltekit-prefetch>
	<slot slot="eyebrow" name="eyebrow" />
	<slot slot="title">{post.title}</slot>
	<div slot="description">
		{@html post.preview.html}
	</div>
</Card>

<style>
</style>
