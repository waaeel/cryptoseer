<script>
	import { goto } from '$app/navigation';

	import Select from '$lib/components/Select.svelte';

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
	<form on:submit|preventDefault={add}>
		<Select options={['btc', 'eth']} />
		<input type="text" name="addr" />
		<button type="submit">add</button>
	</form>
</section>
