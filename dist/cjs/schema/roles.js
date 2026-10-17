"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCard = exports.RoleAbility = void 0;
const schema_1 = require("@colyseus/schema");
class RoleAbility extends schema_1.Schema {
    constructor(name, description, type) {
        super();
        this.name = name;
        this.description = description;
        this.type = type;
    }
}
exports.RoleAbility = RoleAbility;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], RoleAbility.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], RoleAbility.prototype, "description", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], RoleAbility.prototype, "type", void 0);
class RoleCard extends schema_1.Schema {
    constructor(number, name, abilities = []) {
        super();
        this.abilities = new schema_1.ArraySchema();
        this.number = number;
        this.name = name;
        this.abilities = new schema_1.ArraySchema();
        if (abilities.length > 0) {
            abilities.forEach((item) => this.abilities.push(item));
        }
    }
}
exports.RoleCard = RoleCard;
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], RoleCard.prototype, "number", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], RoleCard.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)([RoleAbility]),
    __metadata("design:type", Object)
], RoleCard.prototype, "abilities", void 0);
