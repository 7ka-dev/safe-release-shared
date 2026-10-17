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
exports.Player = void 0;
const schema_1 = require("@colyseus/schema");
const cards_1 = require("./cards");
const roles_1 = require("./roles");
class Player extends schema_1.Schema {
    constructor(id, seat) {
        super();
        /**
         * Имя игрока. Заполняется в `GameLogic.addPlayer` из лобби; дефолт оставлен пустым,
         * а не «Player», иначе заглушка выглядела бы как настоящее имя (SR-046).
         */
        this.name = '';
        /**
         * Только количество карт в руке. Сами карты — скрытая информация, поэтому
         * они не живут в синхронизируемой схеме и отправляются владельцу отдельно
         * (см. `GameLogic.getHandFor`).
         */
        this.handCount = 0;
        this.builtComponents = new schema_1.ArraySchema();
        /**
         * Заполнено шагов трека готовности к релизу. Kubernetes Cluster и Canary
         * Deployment закрывают по два, остальные — по одному, поэтому значение не равно
         * `builtComponents.length`. Считается на сервере, чтобы
         * клиент не повторял правило и не расходился с ним.
         */
        this.releaseProgress = 0;
        /**
         * Сколько компонентов игрок ещё может построить в текущем ходу. Значение
         * осмысленно только у активного игрока: у остальных остаётся 0. Публикуется,
         * чтобы клиент не предлагал заведомо отклонённую стройку (SR-111) — раньше
         * остаток жил в приватном currentTurnState и был клиенту недоступен.
         */
        this.buildsLeft = 0;
        this.id = id;
        this.seat = seat;
        this.cpuRam = 2;
        this.role = null;
        this.isReady = false;
        this.releaseProgress = 0;
        this.buildsLeft = 0;
    }
}
exports.Player = Player;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "seat", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "handCount", void 0);
__decorate([
    (0, schema_1.type)([cards_1.ComponentCard]),
    __metadata("design:type", Object)
], Player.prototype, "builtComponents", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "releaseProgress", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "buildsLeft", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "cpuRam", void 0);
__decorate([
    (0, schema_1.type)(roles_1.RoleCard),
    __metadata("design:type", Object)
], Player.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Player.prototype, "isReady", void 0);
