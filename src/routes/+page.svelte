<script>
	import video from '$lib/assets/video.webm';
</script>

<section class="content">
	<div class="head">
		<div class="headline">
			<h1>No account needed – start monitoring your wallets instantly.</h1>
			<a class="cta-button" href="/app">Get Started</a>
		</div>
		<div class="video-wrapper">
			<video src={video} type="video/webm" height="350px" autoplay loop muted>
				<track kind="captions" />
			</video>
		</div>
	</div>

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
		<li>
			<strong>💾 Backup & Restore</strong>
			<p>Export and import your wallet lists easily to keep your monitoring setup safe and portable.</p>
		</li>
		<li class="coming-soon">
			<strong>🧾 Transaction History</strong>
			<p>Access detailed transaction history and get real-time notifications. Coming soon!</p>
		</li>
		<li class="coming-soon">
			<strong>🌐 Multi-Currency Support</strong>
			<p>Switch between multiple fiat currencies like EUR and USD easily. Coming soon!</p>
		</li>
	</ul>

	<div class="info center">
		<div class="info-item">
			<h1>How It Works</h1>
			<ol>
				<li>Enter your public adress for Bitcoin or Ethereum.</li>
				<li>View your wallet balance and current value.</li>
				<li>Enjoy secure and private wallet monitoring.</li>
			</ol>
		</div>
	</div>
</section>

<style>
	.video-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.head {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-4);
		margin-bottom: var(--size-4);
	}

	video {
		border-radius: var(--size-2);
	}

	@media screen and (max-width: 768px) {
		.head {
			grid-template-columns: 1fr;
		}
		video {
			height: auto;
			border-radius: var(--size-2);
		}
	}

	.cta-button {
		margin-inline: var(--size-4);
		display: inline-block;
		padding: 0.75rem 1.5rem;
		font-size: 1.25rem;
		font-weight: bold;
		color: var(--color-primary);
		background-color: var(--color-bg-1);
		border: 1px solid var(--color-white);
		border-radius: var(--size-1);
		text-decoration: none;
		cursor: pointer;
		transition: background-color 0.3s ease;

		@media screen and (max-width: 768px) {
			display: flex;
			justify-content: center;
			align-self: center;
		}
	}

	.cta-button:hover {
		color: #000;
		background-color: var(--color-primary);
		border: 1px solid var(--color-primary);
	}

	.info {
		margin-top: var(--size-4);
		padding: var(--size-4);
	}
	.info-item {
		text-align: center;
	}

	.info-item h1 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: var(--size-2);
	}

	.info-item ol {
		list-style: decimal;
		padding-left: var(--size-4);
		text-align: left;
	}

	.info-item li {
		margin-bottom: var(--size-2);
		font-size: 1.125rem;
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

	.coming-soon {
		opacity: 0.6;
		font-style: italic;
	}
</style>
