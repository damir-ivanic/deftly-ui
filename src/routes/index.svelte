<script context="module" lang="ts">
	import About from './about.svelte';
	import Services from './services.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="w-full h-full bg-no-repeat bg-cover bg-green flex justify-center bg-darkBlue-900">
	<div class="py-28  max-w-screen-xl flex justify-between flex-1">
		<div>
			<h1 class="text-6xl text-white max-w-screen-sm font-syne">
				Experienced group of people in digital product development
			</h1>
			<h2 class="text-white py-8 text-xl max-w-lg">
				We get partnered with companies in need for expert software services.
			</h2>
			<button class="py-4 px-7 bg-blue-500 text-blue-900 rounded-lg">Get to meet us</button>
		</div>
	</div>
</section>
<Services />
<About />
