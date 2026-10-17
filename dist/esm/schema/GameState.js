var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";
import { ComponentCard } from "./cards";
import { RoleCard } from "./roles";
import { Player } from "./Player";
import { PlayerScore } from "./PlayerScore";
import { NO_FROZEN_ROLE } from "../logic/constants";
export class GameState extends Schema {
    constructor() {
        super(...arguments);
        this.players = new MapSchema();
        this.deck = new ArraySchema();
        this.discardPile = new ArraySchema();
        this.roleDeck = new ArraySchema();
        this.availableRoles = new ArraySchema();
        this.unavailableRoles = new ArraySchema();
        this.discardedRoleCount = 0;
        this.phase = 'waiting';
        this.currentRoleNumber = 0;
        this.currentResourceTaken = false;
        this.currentAbilityUsed = false;
        this.rollbackUsedThisTurn = false;
        this.crownBearer = null;
        this.currentPlayer = null;
        this.playerOrder = new ArraySchema();
        this.round = 0;
        /**
         * Партия играется без фиолетовых (special) карт.
         *
         * Поле синхронизируемое: колода у всех одна, и каждый игрок в лобби должен
         * видеть, во что он играет. Значение выбирается до старта и дальше не
         * меняется (SR-113).
         */
        this.withoutSpecialCards = false;
        this.allPlayersReady = false;
        /**
         * Номер замороженной роли или `NO_FROZEN_ROLE`.
         *
         * Именно число, а не `null`. Примитив, записанный как `null`, кодируется как
         * удаление поля, и клиент его НЕ снимает: заморозка оставалась бы висеть на
         * пипке роли до конца партии (SR-034). Ноль кодируется обычным дельтом, и
         * клиент честно получает «заморозки нет». Номера ролей идут с 1, так что 0
         * свободен и в `TurnBar` ничего менять не пришлось.
         */
        this.frozenRoleNumber = NO_FROZEN_ROLE;
        /** Итоговые очки, заполняются при переходе в фазу gameOver */
        this.scores = new ArraySchema();
    }
}
__decorate([
    type({ map: Player }),
    __metadata("design:type", Object)
], GameState.prototype, "players", void 0);
__decorate([
    type([ComponentCard]),
    __metadata("design:type", Object)
], GameState.prototype, "deck", void 0);
__decorate([
    type([ComponentCard]),
    __metadata("design:type", Object)
], GameState.prototype, "discardPile", void 0);
__decorate([
    type([RoleCard]),
    __metadata("design:type", Object)
], GameState.prototype, "roleDeck", void 0);
__decorate([
    type([RoleCard]),
    __metadata("design:type", Object)
], GameState.prototype, "availableRoles", void 0);
__decorate([
    type([RoleCard]),
    __metadata("design:type", Object)
], GameState.prototype, "unavailableRoles", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], GameState.prototype, "discardedRoleCount", void 0);
__decorate([
    type("string"),
    __metadata("design:type", String)
], GameState.prototype, "phase", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], GameState.prototype, "currentRoleNumber", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "currentResourceTaken", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "currentAbilityUsed", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "rollbackUsedThisTurn", void 0);
__decorate([
    type("string"),
    __metadata("design:type", Object)
], GameState.prototype, "crownBearer", void 0);
__decorate([
    type("string"),
    __metadata("design:type", Object)
], GameState.prototype, "currentPlayer", void 0);
__decorate([
    type(["string"]),
    __metadata("design:type", Object)
], GameState.prototype, "playerOrder", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], GameState.prototype, "round", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "withoutSpecialCards", void 0);
__decorate([
    type("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "allPlayersReady", void 0);
__decorate([
    type("number"),
    __metadata("design:type", Number)
], GameState.prototype, "frozenRoleNumber", void 0);
__decorate([
    type([PlayerScore]),
    __metadata("design:type", Object)
], GameState.prototype, "scores", void 0);
