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
		<span class="mana">{card.cardData.manaCost}</span>
		<span class="value">{card.cardData.value}</span>
		<span class="name">{card.cardData.name}</span>
		<img src="./images/{card.cardData.sprite}.png" alt={card.cardData.name} draggable="false" />
		<span class="text">{card.cardData.text}</span>
		<span class="atk">{card.cardData.atk}</span>
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
		background-image: linear-gradient(#f5f5f5, #fff), linear-gradient(#0f0f0f, #1f1f1f);
		background-origin: border-box;
		background-clip: content-box, border-box;

		animation: revert-border 0.5s normal forwards;

		box-shadow: 1px 8px 5px gray;
		translate: 0 -8px;
		transition:
			translate ease-in 0.2s,
			box-shadow ease-in 0.2s,
			transform 0.4s;

		padding: 0.3rem;
	}
	button * {
		pointer-events: none;
	}

	button:hover {
		animation: change-border 0.5s normal forwards;
		transition:
			translate ease-in 0.2s,
			box-shadow ease-in 0.2s,
			transform 0.1s;
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
	}

	span.name {
		text-align: right;
		top: 0.5rem;
		right: 0.3rem;
		width: 5.4rem;
		border-bottom: #8f8f8f solid 0.1rem;
	}

	span.mana {
		font-size: 0.8rem;
		top: 0.4rem;
		left: 0.3rem;
		padding: 0.2rem;
		width: 0.8rem;
		background-color: aqua;
		border-radius: 0.2rem 0.5rem;
	}

	span.value {
		font-size: 0.8rem;
		top: 0.4rem;
		left: 1.4rem;
		padding: 0.2rem;
		width: 0.8rem;
		background-color: violet;
		border-radius: 0.2rem 0.5rem;
	}

	span.text {
		font-family: 'Ownglyph_UNZ-Rg';
		text-align: left;
		width: 5rem;
		font-size: 0.8rem;
		top: 5rem;
		left: 0.5rem;
	}

	img {
		position: absolute;
		top: 1rem;
		left: 0;
		width: 100px;
		height: 100px;
		top: -40px;
		left: -60px;
		transform-origin: top left;
		transform: scale(200%);
		object-position: 0 0;
		object-fit: none;
		image-rendering: pixelated;
	}

	span.atk {
		font-size: 0.8rem;
		bottom: 0.4rem;
		right: 0.4rem;
		padding: 0.1rem;
		width: 0.8rem;
		background-color: lightcoral;
		border-radius: 1rem 1rem 0.5rem 0.5rem;
	}

	button:disabled img {
		filter: grayscale(100%);
	}

	@keyframes change-border {
		from {
			padding: 0.3rem;
			background-image: linear-gradient(#f5f5f5, #fff), linear-gradient(#0f0f0f, #1f1f1f);
		}

		50% {
			padding: 0;
			background-image: linear-gradient(#f5f5f5, #fff),
				var(--type, linear-gradient(#0f0f0f, #1f1f1f));
		}

		to {
			padding: 0.3rem;
			background-image: linear-gradient(#f5f5f5, #fff),
				var(--type, linear-gradient(#0f0f0f, #1f1f1f));
		}
	}
	@keyframes revert-border {
		to {
			padding: 0.3rem;
			background-image: linear-gradient(#f5f5f5, #fff), linear-gradient(#0f0f0f, #1f1f1f);
		}

		50% {
			padding: 0;
			background-image: linear-gradient(#f5f5f5, #fff),
				var(--type, linear-gradient(#0f0f0f, #1f1f1f));
		}

		from {
			padding: 0.3rem;
			background-image: linear-gradient(#f5f5f5, #fff),
				var(--type, linear-gradient(#0f0f0f, #1f1f1f));
		}
	}
</style>
