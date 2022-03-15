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
	<div class=" max-w-7xl">
		<PageTitle title="Our services" />
		<h2 class="text-6xl  max-w-screen-sm font-syne text-dark-900">
			Some real cool f*cking text here about services.
		</h2>
		<div class="flex flex-wrap mt-24 justify-end">
			<h4 class="text-2xl font-semibold font-syne text-dark-700 max-w-sm">
				We are involved with custom software development. Oh yes we are. We do other things too.
			</h4>
			<Box
				number="01"
				title="Frontend development"
				description="We build websites and web applications"
			/>
			<Box
				number="02"
				title="Backend development"
				description="We build websites and web applications"
			/>
			<Box
				number="03"
				title="Devops infrastructure"
				description="We build websites and web applications"
			/>
			<Box
				number="04"
				title="Testing &
	Automation"
				description="We build websites and web applications"
			/>
			<Box number="05" title="Design" description="We build websites and web applications" />
		</div>
	</div>
</div>
<div class="flex justify-center">
	<img src={Frame} alt="process frame" />
</div>

<style>
	.content {
		background-color: #f8fbfc;
		padding: 150px 0;
	}
</style>
