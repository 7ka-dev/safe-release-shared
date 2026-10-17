import { Schema, type } from "@colyseus/schema";

export type CardType = 'code' | 'data' | 'bugfix' | 'design' | 'special';

export class ComponentCard extends Schema {
  @type("string")
  id: string;

  @type("string")
  name: string;

  @type("number")
  cost: number;

  @type("string")
  type: CardType;

  constructor(id: string, name: string, cost: number, type: CardType) {
    super();
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.type = type;
  }
}