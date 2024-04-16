<script>
	import { goto } from '$app/navigation';
	import Select from '$lib/components/Select.svelte';
	import ChipSelect from '$lib/components/ChipSelect.svelte';
	import Dinput from '$lib/components/Dinput.svelte';
	import Fab from '$lib/components/Fab.svelte';

	export const cryptoOptions = [
		{ label: 'bitcoin', value: 'btc' },
		{ label: 'ethereum', value: 'eth' }
	];

	let selectedCrypto = cryptoOptions[0].value;

	const add = (event) => {
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(JSON.stringify(formProps)); // Log form data in JSON format
		// Implement save to localStorage here if needed
		// Retrieve existing entries from localStorage, if any
		const existingEntries = JSON.parse(localStorage.getItem('wallets') || '[]');

		// Add new entry to existing entries
		existingEntries.push(formProps);

		// Save updated entries back to localStorage
		localStorage.setItem('wallets', JSON.stringify(existingEntries));

		goto('/');
	};
</script>

<section class="content">
	<h1>Add Wallet Adress (public key)</h1>
	<form on:submit|preventDefault={add}>
		<ChipSelect
			options={cryptoOptions}
			on:change={(e) => (selectedCrypto = e.detail)}
			selectedValue={selectedCrypto}
			title="crypto"
		/>
		<input type="hidden" bind:value={selectedCrypto} name="type" />
		<Dinput type="text" name="addr" placeholder="public key" />
		<Fab label="add" icon="💾" isSubmit={true} />
	</form>
</section>
