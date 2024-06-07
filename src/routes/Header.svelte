<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<header>
	<div class="external-apps">
		<a class="btn" href="/app">Go to Wallet</a>
	</div>
	<Hero />
</header>

<style lang="postcss">
	.external-apps {
		padding: var(--size-2) var(--size-content-px);
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: var(--size-8);
		background: var(--color-primary);
		& p,
		& a {
			color: var(--color-black);
			font-weight: bold;
			text-decoration: none;
		}
	}
</style>
