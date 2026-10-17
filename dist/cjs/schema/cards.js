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
exports.ComponentCard = void 0;
const schema_1 = require("@colyseus/schema");
class ComponentCard extends schema_1.Schema {
    constructor(id, name, cost, type) {
        super();
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.type = type;
    }
}
exports.ComponentCard = ComponentCard;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], ComponentCard.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], ComponentCard.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], ComponentCard.prototype, "cost", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], ComponentCard.prototype, "type", void 0);
