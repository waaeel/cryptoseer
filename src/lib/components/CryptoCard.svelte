<script>
	export let crypto;
</script>

<div class="card">
	<h1>{crypto.balance} {crypto.type}</h1>
	<h2>{crypto.usd}</h2>
</div>

<style>
	.card {
		border: 1px solid var(--color-primary); /* Example border */
		padding: var(--size-4);
		border-radius: var(--size-2);
	}
</style>
