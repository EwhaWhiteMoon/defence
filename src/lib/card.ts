import { type CardData } from '$lib/carddata';

export enum CardPosition {
	hand,
	used,
	deck,
	exile
}

export class Card {
	readonly cardData: CardData;
	position: CardPosition;

	constructor(cardData: CardData, position: CardPosition = CardPosition.deck) {
		this.cardData = cardData;
		this.position = position;
	}
}
