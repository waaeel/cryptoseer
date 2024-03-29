<script>
	import Fab from '$lib/components/Fab.svelte';
	import CryptoCard from '$lib/components/CryptoCard.svelte';
	import { btc, eth, formatter } from '$lib/api/crypto';
	import { goto } from '$app/navigation';

	const userAddrList = [
		{
			type: 'btc',
			addr: 'bc1qrajyl477r4newfe3f2526h3wjp2a0xeduk66nq'
		},
		{
			type: 'eth',
			addr: '0xd626920fb8ebb6B7A501f0FF9a382825887dfD39'
		}
	];

	const cryptos = Promise.all([
		...userAddrList.filter((v) => v.type === 'btc').map((s) => btc(s.addr)),
		...userAddrList.filter((v) => v.type === 'eth').map((s) => eth(s.addr))
	]);

	const addAddrs = async () => {
		goto('/addWallet');
	};
</script>

<section class="content">
	<Fab icon="+" action={async () => addAddrs()}>
		<p>add <strong>public</strong> key</p>
	</Fab>
	{#await cryptos}
		<p>Fetching data...</p>
	{:then data}
		<p class="totalValue">
			{formatter.format(
				data
					.map((e) => {
						return e.value;
					})
					.reduce((a, v) => a + v)
			)}
		</p>
		<div class="cards">
			{#each data as crypto}
				<CryptoCard {crypto} />
			{/each}
		</div>
	{:catch error}
		<p>Unable to fetch - {{ error }}</p>
	{/await}
</section>

<style>
	.totalValue {
		text-align: center;
		font-size: 48px;
		font-weight: bold;
		margin-bottom: var(--size-6);
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

	.cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns by default */
		gap: var(--size-4);
		margin: 0;
		padding: 0;
		list-style: none;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr; /* One column on small screens */
		}
	}
</style>
