import { Schema, ArraySchema } from "@colyseus/schema";
export type RoleType = 'Empty' | 'Unknown' | 'Security Auditor' | 'Incident Manager' | 'DevOps Engineer' | 'Product Manager' | 'Analytic' | 'Tech Lead' | 'Team Lead' | 'QA Lead';
export type AbilityType = 'active' | 'passive';
export declare class RoleAbility extends Schema {
    name: string;
    description: string;
    type: AbilityType;
    constructor(name: string, description: string, type: AbilityType);
}
export declare class RoleCard extends Schema {
    number: number;
    name: RoleType;
    abilities: ArraySchema<RoleAbility>;
    constructor(number: number, name: RoleType, abilities?: RoleAbility[]);
}
