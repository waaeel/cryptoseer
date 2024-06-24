<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import Hero from '$lib/components/Hero.svelte';
	export let prices;
</script>

<header>
	<div class="external-apps">
		<a class="wallet" href="/app">Your Wallet</a>
	</div>
	<Hero />

	{#if prices}
		<nav>
			<ul>
				<Chip text={`Ξ/${prices.eth_price.eur}`} />
				<Chip text={`₿/${prices.btc_price.eur}`} />
			</ul>
		</nav>
	{/if}
</header>

<style lang="postcss">
	.wallet {
		padding: var(--size-2) var(--size-4);
		border-radius: var(--size-1);
		border: 1px solid var(--color-black);
	}
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
	nav {
		padding: var(--size-4) var(--size-content-px);

		& ul {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--size-8);
			& a {
				font-size: var(--scale-1);
				color: var(--color-primary-500);
				font-weight: var(--weight-bold);
				text-decoration: none;
			}
		}
		& > :nth-child(2) {
			/* Specifically target the Hero component for custom styling if needed */
			margin: 0 var(--size-8); /* Adds horizontal margin around the Hero component */
		}
		@media screen and (max-width: 768px) {
			flex-direction: column;
			& ul {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: var(--size-2);
				justify-items: center;
			}
		}
	}
</style>
