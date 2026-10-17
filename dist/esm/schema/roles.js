var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Schema, type, ArraySchema } from "@colyseus/schema";
export class RoleAbility extends Schema {
    constructor(name, description, type) {
        super();
        this.name = name;
        this.description = description;
        this.type = type;
    }
}
__decorate([
    type("string"),
    __metadata("design:type", String)
], RoleAbility.prototype, "name", void 0);
__decorate([
    type("string"),
    __metadata("design:type", String)
], RoleAbility.prototype, "description", void 0);
__decorate([
    type("string"),
    __metadata("design:type", String)
], RoleAbility.prototype, "type", void 0);
export class RoleCard extends Schema {
    constructor(number, name, abilities = []) {
        super();
        this.abilities = new ArraySchema();
        this.number = number;
        this.name = name;
        this.abilities = new ArraySchema();
        if (abilities.length > 0) {
            abilities.forEach((item) => this.abilities.push(item));
        }
    }
}
__decorate([
    type("number"),
    __metadata("design:type", Number)
], RoleCard.prototype, "number", void 0);
__decorate([
    type("string"),
    __metadata("design:type", String)
], RoleCard.prototype, "name", void 0);
__decorate([
    type([RoleAbility]),
    __metadata("design:type", Object)
], RoleCard.prototype, "abilities", void 0);
