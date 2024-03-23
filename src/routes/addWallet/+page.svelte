<script>
	import { goto } from '$app/navigation';

	const add = () => {
		// TODO implement save to localStorage
		goto('/');
	};
</script>

<section class="content">
	<form on:submit|preventDefault={add}>
		TODO add select for coin
		<input type="text" name="walletAddr" />
		<button type="submit">add</button>
	</form>
</section>
