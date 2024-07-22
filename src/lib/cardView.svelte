<script lang="ts">
	import { Card } from './card';
	import { CardType, testCard } from './carddata';
	export let card: Card = new Card(testCard);
	export let disabled: boolean = false;

	const colors = {
		[CardType.combat]: 'lightpink',
		[CardType.effect]: 'skyblue',
		[CardType.resource]: 'lightyellow'
	};

	const gradiant: string = card.cardData.type.map((c) => colors[c]).join(',');

	let transform: string;
	let height: number;
	function mouseHandler(e: MouseEvent) {
		const halfHeight = height / 2;

		transform =
			'rotateX(' +
			-(e.offsetY - halfHeight) / 5 +
			'deg) rotateY(' +
			(e.offsetX - halfHeight) / 3 +
			'deg)';
	}
	function reset(e: MouseEvent) {
		transform = 'rotateX(0deg) rotateY(0deg)';
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div>
	<button
		on:mousemove={mouseHandler}
		on:mouseleave={reset}
		type="button"
		{disabled}
		style="--type:linear-gradient(0.25turn, {gradiant});"
		style:transform
		bind:offsetHeight={height}
	>
		<span>{card.cardData.name}</span>
		<img src="./images/{card.cardData.sprite}.png" alt={card.cardData.name} draggable="false" />
	</button>
</div>

<style>
	div {
		perspective: 1000px;
	}
	button {
		position: relative;
		width: 6rem;
		height: 8rem;
		border: none;
		border-radius: 0.5rem;
		background-image: linear-gradient(#f5f5f5, #fff), var(--type, lightgray);
		background-origin: border-box;
		background-clip: content-box, border-box;

		box-shadow: 1px 8px 5px gray;
		translate: 0 -8px;
		transition:
			translate ease-in 0.2s,
			box-shadow ease-in 0.2s,
			transform 0.4s;

		padding: 0.3rem;
	}

	button:hover {
		transition:
			translate ease-in 0.2s,
			box-shadow ease-in 0.2s,
			transform 0.4s;
	}

	button:active {
		translate: 0 -2px;
		box-shadow: 0 2px 2px gray;
	}

	button:disabled {
		translate: 0 -2px;
		box-shadow: 0 2px 2px gray;
		background: lightgray;
	}

	span {
		position: absolute;
		font-size: 1rem;
		top: 0.5rem;
		left: 0;
		width: 100%;
	}

	img {
		position: absolute;
		top: 1rem;
		left: 0;
		width: 100px;
		height: 100px;
		transform-origin: top left;
		transform: scale(0.96);
		object-position: 0 0;
		object-fit: none;
	}

	button:disabled img {
		filter: grayscale(100%);
	}
</style>
