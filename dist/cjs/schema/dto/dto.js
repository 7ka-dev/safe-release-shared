"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAFE_RELEASE_ROOM_NAME = void 0;
/**
 * Идентификатор комнаты в реестре Colyseus-сервера. Живёт здесь, а не в
 * `src/index.ts` сервера и не в клиенте: обе стороны должны спрашивать одно
 * и то же имя комнаты, иначе клиент создаёт комнату, которой нет на сервере.
 */
exports.SAFE_RELEASE_ROOM_NAME = 'safe_release_room';
