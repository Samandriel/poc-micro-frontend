<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';

	let token: any = null;
	onMount(() => {
		localStorage.setItem('auth_token_from_svelte', 'zyxwvutsrqponmlkjihgfedcba0987654321');
		const fromNext = localStorage.getItem('auth_token_from_next');
		console.log('auth_token_from_next', fromNext);
		if (fromNext) {
			token = fromNext;
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Token from Next: {token}</h1>
	<a href="/">Go to Next Page</a>

	<span class="welcome">
		<picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" />
		</picture>
	</span>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
