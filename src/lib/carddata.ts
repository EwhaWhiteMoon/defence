import type { Game } from './game';
import { Sprite } from './sprite';

export enum CardType {
	resource = '자원',
	combat = '전투',
	effect = '효과'
}

export type CardData = {
	readonly name: string;
	readonly type: Set<CardType>;
	readonly cost: number;
	readonly gain: [number, number];
	readonly effect: (e: Game) => void;
	readonly text: string;
	readonly flavor: string;
	readonly sprite: Sprite;
};
