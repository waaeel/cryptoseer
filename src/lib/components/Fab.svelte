<script>
	export let label = '';
	export let icon = '';
	export let action = () => {};
	export let isSubmit = false;
</script>

{#if isSubmit}
	<button type="submit" class="fab" aria-label={label}>
		{#if icon}
			{icon}
		{/if}
		{label}
	</button>
{:else}
	<button class="fab" on:click={action} aria-label={label}>
		{#if icon}
			{icon}
		{/if}
		<slot />
	</button>
{/if}

<style>
	.fab {
		position: fixed;
		left: 50%;
		bottom: 20px;
		transform: translateX(-50%); /* Center it horizontally */
		background-color: var(--color-primary);
		color: black;
		border: none;
		padding: 12px 24px;
		border-radius: 28px; /* Adjust based on your design preference */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: background-color 0.3s;
		font: var(--text-lg); /* Adjust based on your design preference */
		z-index: 1000;
		width: 60%;
	}
	.fab:hover {
		background-color: var(--color-primary);
	}
	.fab:focus {
		outline: none;
	}

	.fab img {
		margin-right: 8px; /* Space between icon and label */
		height: 24px; /* Adjust based on your design preference */
		width: 24px; /* Adjust based on your design preference */
	}
</style>
