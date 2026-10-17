"use strict";
// Публичный API пакета. Клиент и сервер импортируют всё отсюда:
//   import { GameState, RELEASE_COMPONENTS_REQUIRED } from 'safe-release-shared';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Colyseus Schema — синхронизируемое состояние (единственный экземпляр классов
// обязан быть общим для клиента и сервера, дублировать нельзя)
__exportStar(require("./schema/cards"), exports);
__exportStar(require("./schema/roles"), exports);
__exportStar(require("./schema/Player"), exports);
__exportStar(require("./schema/PlayerScore"), exports);
__exportStar(require("./schema/GameState"), exports);
// DTO сообщений клиент ↔ сервер
__exportStar(require("./schema/dto/dto"), exports);
// Константы правил, общие для сервера и клиента
__exportStar(require("./logic/constants"), exports);
// Общие утилиты
__exportStar(require("./utils/utils"), exports);
