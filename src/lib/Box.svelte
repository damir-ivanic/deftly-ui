<script lang="ts">
	export let number;
	export let title;
	export let description;
</script>

<div class="flex flex-col p-9 border border-dark-100 w-96 rounded-xl bg-white prose m-2">
	<h4 class="font-light text-dark-500">{number}</h4>
	<h3 class="font-bold font-syne">{title}</h3>
	<p class="text-dark-600">{description}</p>
</div>
