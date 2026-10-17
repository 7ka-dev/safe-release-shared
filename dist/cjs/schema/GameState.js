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
exports.GameState = void 0;
const schema_1 = require("@colyseus/schema");
const cards_1 = require("./cards");
const roles_1 = require("./roles");
const Player_1 = require("./Player");
const PlayerScore_1 = require("./PlayerScore");
const constants_1 = require("../logic/constants");
class GameState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.players = new schema_1.MapSchema();
        this.deck = new schema_1.ArraySchema();
        this.discardPile = new schema_1.ArraySchema();
        this.roleDeck = new schema_1.ArraySchema();
        this.availableRoles = new schema_1.ArraySchema();
        this.unavailableRoles = new schema_1.ArraySchema();
        this.discardedRoleCount = 0;
        this.phase = 'waiting';
        this.currentRoleNumber = 0;
        this.currentResourceTaken = false;
        this.currentAbilityUsed = false;
        this.rollbackUsedThisTurn = false;
        this.crownBearer = null;
        this.currentPlayer = null;
        this.playerOrder = new schema_1.ArraySchema();
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
        this.frozenRoleNumber = constants_1.NO_FROZEN_ROLE;
        /** Итоговые очки, заполняются при переходе в фазу gameOver */
        this.scores = new schema_1.ArraySchema();
    }
}
exports.GameState = GameState;
__decorate([
    (0, schema_1.type)({ map: Player_1.Player }),
    __metadata("design:type", Object)
], GameState.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)([cards_1.ComponentCard]),
    __metadata("design:type", Object)
], GameState.prototype, "deck", void 0);
__decorate([
    (0, schema_1.type)([cards_1.ComponentCard]),
    __metadata("design:type", Object)
], GameState.prototype, "discardPile", void 0);
__decorate([
    (0, schema_1.type)([roles_1.RoleCard]),
    __metadata("design:type", Object)
], GameState.prototype, "roleDeck", void 0);
__decorate([
    (0, schema_1.type)([roles_1.RoleCard]),
    __metadata("design:type", Object)
], GameState.prototype, "availableRoles", void 0);
__decorate([
    (0, schema_1.type)([roles_1.RoleCard]),
    __metadata("design:type", Object)
], GameState.prototype, "unavailableRoles", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], GameState.prototype, "discardedRoleCount", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], GameState.prototype, "phase", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], GameState.prototype, "currentRoleNumber", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "currentResourceTaken", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "currentAbilityUsed", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "rollbackUsedThisTurn", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", Object)
], GameState.prototype, "crownBearer", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", Object)
], GameState.prototype, "currentPlayer", void 0);
__decorate([
    (0, schema_1.type)(["string"]),
    __metadata("design:type", Object)
], GameState.prototype, "playerOrder", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], GameState.prototype, "round", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "withoutSpecialCards", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], GameState.prototype, "allPlayersReady", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], GameState.prototype, "frozenRoleNumber", void 0);
__decorate([
    (0, schema_1.type)([PlayerScore_1.PlayerScore]),
    __metadata("design:type", Object)
], GameState.prototype, "scores", void 0);
