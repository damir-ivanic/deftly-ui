<script context="module">
	// import { browser, dev } from '$app/env';

	import Box from '$lib/Box.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import Frame from '../../static/frame.svg';

	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// // ...but if the client-side router is already loaded
	// // (i.e. we came here from elsewhere in the app), use it
	// export const router = browser;

	// // since there's no dynamic data here, we can prerender
	// // it so that it gets served as a static asset in prod
	// export const prerender = true;
</script>

<!-- <svelte:head>
	<title>About</title>
</svelte:head> -->

<div class="content flex flex-col items-center">
	<div class=" max-w-7xl mt-24">
		<PageTitle title="Our services" />
		<h2 class="text-6xl  max-w-screen-sm font-syne text-white">
			Some real cool f*cking text here about services.
		</h2>
		<div class="flex flex-wrap mt-24 justify-end">
			<h4 class="text-2xl font-semibold font-syne text-white max-w-sm">
				We collaborate with business’ in finding their needs and creating solutions. Doing that with
				great knowledge and persistence.
			</h4>
			<div class="flex flex-end">
				<p>
					We collaborate with busniess’ in finding their needs and creating solutions. Doing that
					with great knowledge and persistence.
				</p>
			</div>
		</div>
		<div class="py-24 border-t border-darkBlue-700 mt-32">
			<h4>Partnered with the best</h4>
			<div />
		</div>
	</div>
</div>

<style>
	.content {
		background-color: #162b61;
		color: white;
	}
</style>
