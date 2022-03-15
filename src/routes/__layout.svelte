<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Footer from './footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
