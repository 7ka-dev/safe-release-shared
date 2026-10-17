import { Schema, type, ArraySchema } from "@colyseus/schema";

export type RoleType = 'Empty' | 'Unknown' | 'Security Auditor' | 'Incident Manager' | 'DevOps Engineer' | 'Product Manager'
  | 'Analytic' | 'Tech Lead' | 'Team Lead' | 'QA Lead';

export type AbilityType = 'active' | 'passive';

export class RoleAbility extends Schema {
  @type("string")
  name: string;

  @type("string")
  description: string;

  @type("string")
  type: AbilityType;

  constructor(name: string, description: string, type: AbilityType) {
    super();
    this.name = name;
    this.description = description;
    this.type = type;
  }
}

export class RoleCard extends Schema {
  @type("number")
  number: number;

  @type("string")
  name: RoleType;

  @type([RoleAbility])
  abilities = new ArraySchema<RoleAbility>();

  constructor(number: number, name: RoleType, abilities: RoleAbility[] = []) {
    super();
    this.number = number;
    this.name = name;
    this.abilities = new ArraySchema<RoleAbility>();
    if (abilities.length > 0) {
      abilities.forEach((item) => this.abilities.push(item));
    }
  }
}