<script>
	import { goto } from '$app/navigation';
	import ChipSelect from '$lib/components/ChipSelect.svelte';
	import Dinput from '$lib/components/Dinput.svelte';
	import Fab from '$lib/components/Fab.svelte';

	export const cryptoOptions = [
		{ label: 'bitcoin', value: 'btc' },
		{ label: 'ethereum', value: 'eth' }
	];

	let selectedCrypto = cryptoOptions[0].value;
	let publicKeyError = '';

	const validatePublicKey = (key, cryptoType) => {
		// Simple validation for demonstration purposes
		if (!key) {
			return 'Public key cannot be empty.';
		}
		if (
			cryptoType === 'btc' &&
			!/^(1[a-km-zA-HJ-NP-Z1-9]{25,34}|3[a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[q0-9ac-hj-np-z]{39,59})$/.test(
				key
			)
		) {
			return 'Invalid Bitcoin public key.';
		}
		if (cryptoType === 'eth' && !/^0x[a-fA-F0-9]{40}$/.test(key)) {
			return 'Invalid Ethereum public key.';
		}
		return '';
	};

	const add = (event) => {
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		// Validate public key
		publicKeyError = validatePublicKey(formProps.addr, selectedCrypto);
		if (publicKeyError) {
			return; // Stop form submission if there is an error
		}

		// Log form data in JSON format
		console.log(JSON.stringify(formProps));

		// Retrieve existing entries from localStorage, if any
		const existingEntries = JSON.parse(localStorage.getItem('wallets') || '[]');

		// Add new entry to existing entries
		existingEntries.push(formProps);

		// Save updated entries back to localStorage
		localStorage.setItem('wallets', JSON.stringify(existingEntries));

		goto('/app');
	};
</script>

<section class="content">
	<h1>Add wallet to watch</h1>
	<form on:submit|preventDefault={add}>
		<ChipSelect
			options={cryptoOptions}
			on:change={(e) => (selectedCrypto = e.detail)}
			selectedValue={selectedCrypto}
			title="crypto"
		/>
		<input type="hidden" bind:value={selectedCrypto} name="type" />
		<Dinput type="text" name="addr" placeholder="public key" />
		{#if publicKeyError}
			<p style="color: red;">{publicKeyError}</p>
		{/if}
		<Fab label="add" icon="💾" isSubmit={true} />
	</form>
</section>

<style>
	h1 {
		text-align: center;
	}
</style>
