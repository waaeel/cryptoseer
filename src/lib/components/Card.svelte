<script>
	export let as = 'div';
	export let href = undefined;

	let _class = undefined;
	export { _class as class };
</script>

<svelte:element this={as} class={['relative flex flex-col items-start group', _class].join(' ')}>
	<slot name="eyebrow" />

	{#if $$slots.title}
		<div class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
			{#if href}
				<div
					class="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
				/>
				<a {href} data-sveltekit-prefetch>
					<span class="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
					<span class="relative z-10">
						<slot name="title" />
					</span>
				</a>
			{:else}
				<slot name="title" />
			{/if}
		</div>
	{/if}

	{#if $$slots.description}
		<div class="relative z-10 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
			<slot name="description" />
		</div>
	{/if}
</svelte:element>

<style>
	.relative {
		position: relative;
	}
	.flex {
		display: flex;
	}
	.flex-col {
		flex-direction: column;
	}
	.items-start {
		align-items: flex-start;
	}
	.group:hover .group-hover\:scale-100 {
		transform: scale(1);
	}
	.group:hover .group-hover\:opacity-100 {
		opacity: 1;
	}
	.text-base {
		font-size: 1rem; /* Adjust size as needed */
	}
	.font-semibold {
		font-weight: 600;
	}
	.tracking-tight {
		letter-spacing: -0.02em;
	}
	.text-zinc-800 {
		color: var(--color-primary); /* Adjust color as needed */
	}
	.dark .text-zinc-100 {
		color: #f4f4f5; /* Adjust color for dark mode as needed */
	}
	.text-sm {
		font-size: 0.875rem; /* Adjust size as needed */
	}
	.text-zinc-600 {
		color: var(--color-primary); /* Adjust color as needed */
	}
	.dark .text-zinc-400 {
		color: #9ca3af; /* Adjust color for dark mode as needed */
	}
	.mt-4 {
		margin-top: 1rem; /* Adjust margin as needed */
	}
	/* Add more styles as needed */
</style>
