var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Schema, type } from "@colyseus/schema";
/** Итоговый результат игрока. Заполняется в момент завершения партии. */
export class PlayerScore extends Schema {
    constructor(playerId, seat, componentCount, base, fullTechStack, techStackBonus, releaseReady, releaseReadyBonus, total) {
        super();
        this.playerId = '';
        this.seat = 0;
        this.componentCount = 0;
        /** Сумма стоимостей всех построенных компонентов */
        this.base = 0;
        /** Есть компоненты всех пяти типов */
        this.fullTechStack = false;
        this.techStackBonus = 0;
        /** Достигнут порог релиза */
        this.releaseReady = false;
        this.releaseReadyBonus = 0;
        this.total = 0;
        this.isWinner = false;
        this.playerId = playerId;
        this.seat = seat;
        this.componentCount = componentCount;
        this.base = base;
        this.fullTechStack = fullTechStack;
        this.techStackBonus = techStackBonus;
        this.releaseReady = releaseReady;
        this.releaseReadyBonus = releaseReadyBonus;
        this.total = total;
    }
}
__decorate([
    type("string"),
    __metadata("design:type", String)
], PlayerScore.prototype, "playerId", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], PlayerScore.prototype, "seat", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], PlayerScore.prototype, "componentCount", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], PlayerScore.prototype, "base", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], PlayerScore.prototype, "fullTechStack", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], PlayerScore.prototype, "techStackBonus", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], PlayerScore.prototype, "releaseReady", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], PlayerScore.prototype, "releaseReadyBonus", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], PlayerScore.prototype, "total", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], PlayerScore.prototype, "isWinner", void 0);
