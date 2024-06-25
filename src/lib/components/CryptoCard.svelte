<script>
	export let crypto;

	const remove = () => {
		if (confirm('Are you sure you want to remove this address?')) {
			console.log(crypto);
			localStorage.setItem(
				'wallets',
				JSON.stringify(
					JSON.parse(localStorage.getItem('wallets')).filter((v) => v.addr !== crypto.addr)
				)
			);
			// TODO refactor this
			window.location.reload();
		}
	};

	const open = (addr) => () => {
		window.location.href =
			crypto.type === 'eth' ? `/app/details/eth/${addr}` : `/app/details/btc/${addr}`;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card">
	<div class="card-content">
		<div class="balance">
			<h1><strong>{crypto.type}</strong>{crypto.balance}</h1>
			<h2>{crypto.eur}</h2>
		</div>
		<div class="info">
			<a
				href={crypto.type === 'eth'
					? `https://etherscan.io/address/${crypto.addr}`
					: `https://blockchair.com/bitcoin/address/${crypto.addr}`}
				target="_blank"
			>
				<h2>{crypto.addr}</h2>
			</a>
		</div>
	</div>
	<div class="card-footer">
		<button class="remove" on:click={remove}>remove</button>
		<!-- <button class="open" on:click={open(crypto.addr)}>details</button> -->
	</div>
</div>

<style>
	strong {
		margin-right: var(--size-2);
	}
	.card {
		position: relative;
		border: 1px solid var(--color-primary);
		padding: var(--size-4);
		border-radius: var(--size-2);
		display: grid;
		grid-template-rows: auto auto;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.card-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	.balance {
		text-transform: uppercase;
		display: grid;
		grid-template-columns: 1fr;
		align-self: flex-start;
	}
	.info {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.card-footer {
		display: flex;
		justify-content: space-between;
	}
	button {
		padding: var(--size-1) var(--size-2);
		border-radius: var(--size-1);
		border: 1px solid var(--color-white);
		cursor: pointer;
		font-weight: bold;
		transition: background-color 0.3s ease;
	}
	.remove {
		background-color: var(--color-error-300);
		color: white;
	}
	.open {
		background-color: var(--color-primary);
		color: black;
	}
</style>
