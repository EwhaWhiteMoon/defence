import { Card } from './card';
import type { Game } from './game';

export enum CardType {
	resource = '자원',
	combat = '전투',
	effect = '효과'
}

export type effectHandler = (game: Game, self: Card) => boolean; // false면 기본 효과를 진행 x
export type checkHandler = (game: Game, self: Card) => boolean; // 사용가능 여부 판단

export type CardData = {
	readonly name: string;
	readonly type: Array<CardType>;
	readonly value: number;
	readonly manaCost: number;
	readonly gain: [number, number];
	readonly onUse: effectHandler;
	readonly canUse: checkHandler;
	readonly onDistroy?: effectHandler;
	readonly onDiscard?: effectHandler;
	readonly text: string;
	readonly flavor?: string;
	readonly sprite: string;
	readonly atk: number;
};

export const testCard: CardData = {
	name: '카드명',
	type: [CardType.combat, CardType.resource],
	manaCost: 0,
	value: 1,
	gain: [1, 0],
	onUse: (g) => {
		g.res[0] += 1;
		return true;
	},
	canUse: () => true,
	text: '테스트용 카드입니다. 별 쓸모 없습니다...',
	flavor: '테스트 너무좋아 헤헤',
	sprite: 'Orc',
	atk: 1
};
