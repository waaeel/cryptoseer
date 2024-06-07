<script>
	import CryptoCard from '$lib/components/CryptoCard.svelte';
	import Placeholder from '$lib/components/Placeholder.svelte'; // Import the Placeholder component
	import { btc, eth, formatter } from '$lib/api/crypto';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
</script>

<section class="content">
	<header>
		<h1>Welcome to pulus.xyz</h1>
		<p>
			Your privacy-friendly watch-only crypto wallet for Bitcoin and Ethereum. No account needed –
			start monitoring your wallets instantly.
		</p>
	</header>

	<section class="features">
		<h2>Key Features</h2>
		<ul>
			<li>
				🔒 Privacy First: No account required, and your public keys are stored locally in your
				browser.
			</li>
			<li>
				👁️ Watch-Only: Monitor your Bitcoin and Ethereum wallets without compromising your security.
			</li>
			<li>🚀 Easy to Use: Simple and intuitive interface for quick wallet monitoring.</li>
			<li>💼 Comprehensive: Supports multiple Bitcoin and Ethereum wallets.</li>
		</ul>
	</section>
</section>

<style>
	header {
		text-align: center;
		margin-bottom: var(--size-6);
	}

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: var(--size-4);
	}

	p {
		font-size: 1.25rem;
		margin-bottom: var(--size-6);
	}

	.features {
		margin-bottom: var(--size-6);
	}

	.features h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: var(--size-4);
	}

	.features ul {
		list-style: none;
		padding: 0;
	}

	.features li {
		font-size: 1.25rem;
		margin-bottom: var(--size-2);
	}
</style>
