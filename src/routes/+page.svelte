<script>
	import video from '$lib/assets/video.webm';
</script>

<section class="content">
	<header>
		<h1>No account needed – start monitoring your wallets instantly.</h1>
		<a class="cta-button" href="/app">Get Started</a>
	</header>

	<ul class="text-cards">
		<li>
			<strong>🔒 Privacy First</strong>
			<p>No account required, and your public keys are stored locally in your browser.</p>
		</li>
		<li>
			<strong>👁️ Watch-Only</strong>
			<p>
				Monitor your Bitcoin and Ethereum wallets without compromising your private keys and
				security.
			</p>
		</li>
		<li>
			<strong>🚀 Easy to Use</strong>
			<p>Simple and intuitive interface for quick wallet monitoring.</p>
		</li>
		<li>
			<strong>💼 Comprehensive</strong>
			<p>Supports multiple Bitcoin and Ethereum wallets.</p>
		</li>
	</ul>

	<div class="info">
		<div class="info-item">
			<h1>How It Works</h1>
			<ol>
				<li>Enter your public key for Bitcoin or Ethereum.</li>
				<li>View your wallet balance and current value.</li>
				<li>Enjoy secure and private wallet monitoring.</li>
			</ol>
		</div>
		<div class="video">
			<video src={video} type="video/webm" autoplay loop>
				<track kind="captions" />
			</video>
		</div>
	</div>
</section>

<style>
	.info {
		margin-top: var(--size-4);
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns by default */
		gap: var(--size-4);

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr; /* One column on small screens */
		}
	}
	video {
		border-radius: 5px;
	}
	header {
		text-align: center;
		margin-bottom: var(--size-4);
	}
	h1 {
		font-size: 1.5rem;
		font-weight: bold;
		margin: var(--size-4);
	}
	li {
		font: var(--text-lg);
	}
	.cta-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		font-size: 1.25rem;
		color: var(--color-primary);
		background-color: var(--color-bg-1);
		border: 1px solid var(--color-white);
		border-radius: 5px;
		text-decoration: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	.cta-button:hover {
		color: #000;
		background-color: var(--color-primary);
		border: 1px solid var(--color-primary);
	}
	.text-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns by default */
		gap: var(--size-4);
		margin: 0;
		padding: 0;
		list-style: none;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr; /* One column on small screens */
		}
	}
	.text-cards li {
		border: 1px solid #ddd; /* Example border */
		padding: var(--size-4);
		border-radius: var(--size-2);
		font: var(--text-lg);
	}
	.text-cards li strong {
		font-size: var(--text-xl);
		display: block;
		font-size: 1.2em; /* Larger font size for the title */
		margin-bottom: var(--size-2); /* Space below the title */
		color: var(--color-primary); /* Title color */
	}
</style>
