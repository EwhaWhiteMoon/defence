<script lang="ts">
	import { Game } from './game';

	export let game: Game;
</script>

<div class="main">
	<div class="inner">
		{#each [0, 1, 2, 3, 4, 5] as y}
			<div class="wide">
				{#each [0, 1, 2, 3, 4, 5] as x}
					<div class="cell" class:disabled={(x == 0 || x == 5) && (y == 0 || y == 5)}></div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.main {
		height: 32rem;
		width: 32rem;
		background-color: blanchedalmond;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 4em;
	}
	.inner {
		height: 24rem;
		width: 24rem;
		background-color: lemonchiffon;
		box-shadow: 1px 2px 5px gray;
		border-radius: 3em;
	}
	.wide {
		width: 100%;
		height: 4rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.cell {
		display: flex;
		justify-content: center;
		width: 3.5rem;
		height: 3.5rem;
		box-shadow: inset 1px 2px 5px gray;
		transition: ease-in-out 0.5s;
	}
	.cell * {
		transform: translate(1px, 2px);
		transition: ease-in-out 0.5s;
	}

	.cell:hover {
		box-shadow: inset 0.25px 0.2px 2px gray;
	}

	.cell:hover * {
		transform: translate(0px, 0px);
	}

	.disabled {
		box-shadow: none !important;
	}
</style>
