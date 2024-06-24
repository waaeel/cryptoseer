<script lang="ts">
	export let text: string;
</script>

<div class="chip">
	<div class="chip__content">{text}</div>
</div>

<style>
	.chip {
		/* Center the content */
		align-items: center;
		display: inline-flex;
		justify-content: center;

		/* Background color */
		background-color: rgba(0, 0, 0, 0.1);

		/* Rounded border */
		border-radius: 9999px;

		/* Spacing */
		padding: 4px 8px;
	}

	.chip__content {
		margin-right: var(--size-1);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font: var(--text-xs);
		font-weight: bold;
	}
</style>
