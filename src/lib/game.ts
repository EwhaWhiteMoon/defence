import { Card, CardPosition } from '$lib/card';

export class Game {
	cards: Array<Card> = [];
	constructor() {}

	suffle(): void {
		const newDeck = this.cards.filter((c) => c.position != CardPosition.used);
	}

	drawCard(): Card | undefined {
		if (this.cards.every((c) => c.position != CardPosition.deck)) this.suffle();
		for (const i in this.cards) {
			if (this.cards[i].position == CardPosition.deck) {
				this.cards[i].position = CardPosition.hand;
				return this.cards[i];
			}
		}
	}
}
