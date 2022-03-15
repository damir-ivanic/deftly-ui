<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header class="bg-blue py-7 px-10 flex justify-between">
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="flex">
		<ul class="flex text-white text-lg font-semibold justify-center items-centers">
			<li
				class="ml-14 hover:text-lightGreen active:text-lightGreen"
				class:active={$page.url.pathname === '/'}
			>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li
				class="ml-14 hover:text-lightGreen active:text-lightGreen"
				class:active={$page.url.pathname === '/about'}
			>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li
				class="ml-14 hover:text-lightGreen active:text-lightGreen"
				class:active={$page.url.pathname === '/todos'}
			>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
			<li
				class="ml-14 hover:text-lightGreen active:text-lightGreen"
				class:active={$page.url.pathname === '/careers'}
			>
				<a sveltekit:prefetch href="/careers">Careers</a>
			</li>
			<li
				class="ml-14 hover:text-lightGreen active:text-lightGreen"
				class:active={$page.url.pathname === '/Blog'}
			>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>
