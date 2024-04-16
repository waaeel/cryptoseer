<!-- FUCK DROPDOWNS -->
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let options = [];
	export let selectedValue = null;
	export let title = '';

	function handleSelect(value) {
		selectedValue = value;
		dispatch('change', selectedValue);
	}
</script>

<h3>{title}</h3>
<div class="chip-container">
	{#each options as option}
		<div
			class="chip {selectedValue === option.value ? 'chip--selected' : ''}"
			on:click={() => handleSelect(option.value)}
		>
			<div class="chip__content">
				<strong>{option.value}</strong>
				<p>{option.label}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	a {
		cursor: pointer;
		text-decoration: none;
	}

	h3 {
		margin: var(--size-3);
		text-align: center;
	}
	.chip {
		align-items: center;
		display: inline-flex;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.1);
		padding: var(--size-3);
		width: 100%;
		border: 1px solid var(--color-gray-500);
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
	}
	.chip__content {
		margin-right: 4px;
		text-align: center;

		& p {
			font-size: 0.8rem;
			color: var(--color-gray-500);
		}
	}
	.chip--selected {
		background-color: rgba(0, 0, 0, 0.3);
		border: 1px solid var(--color-primary);
	}
	.chip-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
		margin-inline: var(--size-3);
	}
</style>
