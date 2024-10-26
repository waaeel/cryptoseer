<script>
	import Fab from '$lib/components/Fab.svelte';
	import CryptoCard from '$lib/components/CryptoCard.svelte';
	import Placeholder from '$lib/components/Placeholder.svelte'; // Import the Placeholder component
	import { btc, eth, formatter } from '$lib/api/crypto';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let userAddrList = [];
	if (browser) {
		userAddrList = localStorage.getItem('wallets')
			? JSON.parse(localStorage.getItem('wallets'))
			: [];
	}

	const addAddrs = async () => {
		goto('/app/addWallet');
	};

	const exportWallets = () => {
		const data = localStorage.getItem('wallets');
		const blob = new Blob([data], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'pulus-wallets_export_' + new Date().toISOString() + '.json';
		a.click();
		URL.revokeObjectURL(url);
	};

	const importWallets = () => {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'application/json';
		input.onchange = (e) => {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onload = (event) => {
				try {
					const importedWallets = JSON.parse(event.target.result);
					const currentWallets = localStorage.getItem('wallets') 
						? JSON.parse(localStorage.getItem('wallets')) 
						: [];
					
					// Merge existing and imported wallets, avoiding duplicates
					const mergedWallets = [...currentWallets];
					importedWallets.forEach(wallet => {
						if (!mergedWallets.some(w => w.addr === wallet.addr && w.type === wallet.type)) {
							mergedWallets.push(wallet);
						}
					});

					localStorage.setItem('wallets', JSON.stringify(mergedWallets));
					userAddrList = mergedWallets;
				} catch (error) {
					console.error('Invalid file format');
				}
			};
			reader.readAsText(file);
		};
		input.click();
	};
</script>

<section class="content">
	<Fab icon="+" action={async () => addAddrs()}>
		<p>add <strong>adress</strong></p>
	</Fab>
	{#if userAddrList.length > 0}
		{#await Promise.all([...userAddrList
				.filter((v) => v.type === 'btc')
				.map((s) => btc(s.addr)), ...userAddrList
				.filter((v) => v.type === 'eth')
				.map((s) => eth(s.addr))])}
			<p>Fetching data...</p>
		{:then data}
			<h1>Total value:</h1>
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
			<p>Unable to fetch - {error}</p>
		{/await}
	{/if}
	{#if userAddrList.length === 0}
		<Placeholder /> <!-- Use the Placeholder component -->
	{/if}
	<div class="backup-buttons">
		<button on:click={exportWallets}>⬇ export wallets</button>
		<button on:click={importWallets}>⬆ import wallets</button>
	</div>
</section>

<style>
	h1 {
		text-align: center;
	}
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

	.backup-buttons {
		display: flex;
		justify-content: center;
		gap: var(--size-4);
		margin-top: var(--size-4);
	}
</style>
