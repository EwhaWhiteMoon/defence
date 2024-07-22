import { Card, CardPosition } from '$lib/card';

export class Game {
	cards: Array<Card> = [];
	res: [number, number] = [0, 0];

	constructor() {}

	suffle(): void {
		const newDeck = this.cards.filter((c) => c.position === CardPosition.used);

		for (let i = newDeck.length; i > 0; i -= 1) {
			const r = Math.floor(Math.random() * i);
			[newDeck[i], newDeck[r]] = [newDeck[r], newDeck[i]];
		}
		newDeck.forEach((c) => (c.position = CardPosition.deck));

		this.cards = this.cards.filter((c) => c.position !== CardPosition.used).concat(newDeck);
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

	discardCard(card: Card): void {
		card.position = CardPosition.used;
	}

	discardHand(): void {
		this.cards.filter((c) => c.position == CardPosition.hand).forEach((c) => this.discardCard(c));
	}

	removeCard(card: Card): void {
		this.cards = this.cards.filter((c) => c !== card);
	}
}
