<script>
	export let crypto;

	const remove = () => {
		console.log(crypto);
		localStorage.setItem(
			'wallets',
			JSON.stringify(
				JSON.parse(localStorage.getItem('wallets')).filter((v) => v.addr !== crypto.addr)
			)
		);
		// TODO refactor this
		window.location.reload();
	};
</script>

<div class="card">
	<div class="card-content">
		<div class="balance">
			<h1><strong>{crypto.type}</strong>{crypto.balance}</h1>
			<h2>{crypto.usd}</h2>
		</div>
		<div class="info">
			<h2>{crypto.addr}</h2>
		</div>
	</div>
	<div class="footer">
		<button on:click={remove}>delete</button>
	</div>
</div>

<style>
	.card {
		border: 1px solid var(--color-primary);
		padding: var(--size-4);
		border-radius: var(--size-2);
	}
	.footer {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: var(--size-4);
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
		gap: var(--size-3);

		& h1 {
			font-weight: normal;
			align-self: start; /* Aligns this item to the top of the container */
		}

		& h2 {
			align-self: end; /* Aligns this item to the bottom of the container */
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
