<script lang="ts">
	export let productInfo = {
		name: 'pulus',
		description: 'watch your crypto'
	};
	import logo from '$lib/assets/logo.png';
</script>

<section class="center">
	<header class="header">
		<div class="logo-wrapper">
			<a href="/"><img class="logo" src={logo} alt=" Icon" /></a>
		</div>
		<div class="app__infos">
			<a href="/"><h1 class="name supertitle">{productInfo.name}</h1></a>
			<a href="/"><p class="description">{productInfo.description}</p></a>
		</div>
	</header>
</section>

<style lang="postcss">
	section {
		padding: var(--size-4);
	}
	.header {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-align: center;
		align-items: center;
		font: var(--text-sm);

		& h1 {
			color: var(--color-primary);
		}

		@media (max-width: 768px) {
			margin-top: var(--size-2);
		}
	}

	.logo-wrapper {
		display: inline-block;
		/* background-image: url('/assets/images/ios-mask-border-128.svg'); */
		background-size: contain;
		max-width: 64px;
		max-height: 64px;
		margin-right: var(--size-4);
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
	}

	.logo {
		border-radius: 10.5%;
		/* 		-webkit-mask-image: url('/static/ios-mask.svg');
		mask-image: url('/assets/images/ios-mask.svg'); */
		-webkit-mask-size: cover;
		mask-size: cover;
		width: 100%;
		height: auto;
	}

	.name {
		margin: 0;
		@media (max-width: 768px) {
			font-size: var(--text-sm);
		}
	}

	a {
		text-decoration: none;
	}

	.description {
		font: var(--text-lg);
		color: var(--color-primary-0);
		font-weight: bold;
	}
</style>
