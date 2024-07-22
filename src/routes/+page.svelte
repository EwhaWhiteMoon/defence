<script>
	import CardView from '$lib/cardView.svelte';
	let t = false;
</script>

<input type="checkbox" bind:checked={t} />

<br />
<div class="hand">
	<CardView disabled={t}></CardView>
</div>

<style>
	div.hand {
		display: flex;
		justify-content: space-evenly;
		padding: 1em;
		width: 100%;
	}
</style>
