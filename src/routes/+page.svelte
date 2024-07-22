<script>
	import BoardView from '$lib/boardView.svelte';
	import CardView from '$lib/cardView.svelte';
	import { Game } from '$lib/game';
	let t = false;

	let game = new Game();
</script>

<div>
	<BoardView {game}></BoardView>
</div>
<br />
<div class="hand">
	<input type="checkbox" bind:checked={t} />
	<CardView disabled={t}></CardView>
</div>

<style>
	div {
		display: flex;
		justify-content: space-evenly;
		padding: 1em;
		width: 100%;
	}
</style>
