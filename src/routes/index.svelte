<script context="module" lang="ts">
	import dotsBackground from '../../static/dots.svg';
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section
	style="background-image: url(../../static/dots.svg);"
	class="w-full h-full bg-no-repeat bg-cover bg-green flex justify-center"
>
	<div class="py-28  max-w-screen-xl flex justify-between flex-1">
		<div>
			<h1 class="text-6xl text-white max-w-screen-sm">
				Experienced group of people in digital product development
			</h1>
			<h2 class="text-white py-8 text-xl max-w-lg">
				We get partnered with companies in need for expert software services.
			</h2>
			<button class="py-4 px-7 bg-lightBlue text-blueText rounded-lg">Get to meet us</button>
		</div>
		<div>svg</div>
	</div>
</section>
