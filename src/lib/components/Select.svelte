<script>
	export let options = [];
	export let multi = false;
	let selected = [];

	function selectOption(option) {
		if (selected.includes(option)) {
			selected = selected.filter((item) => item !== option);
		} else {
			selected = multi ? [...selected, option] : [option];
		}
	}
</script>

<input type="hidden" name="type" bind:value={selected} />

{#if multi}
	<div>
		{#each options as option}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={selected.includes(option) ? 'chip selected' : 'chip'}
				on:click={() => selectOption(option)}
			>
				<div class="chip__content">
					{option}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div>
		{#each options as option}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={selected.includes(option) ? 'chip selected' : 'chip'}
				on:click={() => selectOption(option)}
			>
				<div class="chip__content">
					{option}
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 1px solid var(--color-primary);
		padding: 4px 8px;
		margin-right: 8px;
		cursor: pointer;
	}
	.chip.selected {
		background-color: var(--color-primary);
		color: black;
	}
	.chip__content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
		margin-left: 8px; /* Add some space between the text and the button */
	}
</style>
