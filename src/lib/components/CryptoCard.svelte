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
		} else {
			// do nothing
		}
	};
</script>

<div class="card">
	<div class="card-content">
		<div class="balance">
			<h1><strong>{crypto.type}</strong>{crypto.balance}</h1>
			<h2>{crypto.eur}</h2>
			<button class="remove-icon" on:click={remove}>remove</button>
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
	}
	.remove-icon {
		inherits: none;
		cursor: pointer;
		background-color: var(--color-primary);
		font: var(--text-md);
		width: 50%;
		border-radius: var(--size-2);
	}
	.card-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		cursor: pointer;
	}
	.balance {
		text-transform: uppercase;
		display: grid;
		grid-template-columns: 1fr;
		align-self: flex-start;
		& h1 {
			font-weight: normal;
		}
	}
	.info {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		& h2 {
			font-weight: normal;
		}
	}
</style>
