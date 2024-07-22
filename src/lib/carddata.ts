import { Card } from './card';
import type { Game } from './game';

export enum CardType {
	resource = '자원',
	combat = '전투',
	effect = '효과'
}

export type effectHandler = (game: Game, self: Card) => void;
export type checkHandler = (game: Game, self: Card) => boolean;

export type CardData = {
	readonly name: string;
	readonly type: Array<CardType>;
	readonly cost: number;
	readonly gain: [number, number];
	readonly onUse?: effectHandler;
	readonly canUse?: checkHandler;
	readonly text: string;
	readonly flavor?: string;
	readonly sprite: string;
};

export const testCard: CardData = {
	name: '테스트!',
	type: [CardType.combat, CardType.resource],
	cost: 2,
	gain: [12, 3],
	text: '테스트용 카드입니다. 별 쓸모 없습니다...',
	flavor: '테스트 너무좋아 헤헤',
	sprite: 'Orc'
};
