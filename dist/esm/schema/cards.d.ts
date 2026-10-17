import { Schema } from "@colyseus/schema";
export type CardType = 'code' | 'data' | 'bugfix' | 'design' | 'special';
export declare class ComponentCard extends Schema {
    id: string;
    name: string;
    cost: number;
    type: CardType;
    constructor(id: string, name: string, cost: number, type: CardType);
}
