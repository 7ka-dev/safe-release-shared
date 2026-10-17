import { Schema, MapSchema, ArraySchema } from "@colyseus/schema";
import { ComponentCard } from "./cards";
import { RoleCard } from "./roles";
import { Player } from "./Player";
import { PlayerScore } from "./PlayerScore";
export type GamePhase = 'waiting' | 'roleSelection' | 'roleTurns' | 'endRound' | 'gameOver';
export declare class GameState extends Schema {
    players: MapSchema<Player, string>;
    deck: ArraySchema<ComponentCard>;
    discardPile: ArraySchema<ComponentCard>;
    roleDeck: ArraySchema<RoleCard>;
    availableRoles: ArraySchema<RoleCard>;
    unavailableRoles: ArraySchema<RoleCard>;
    discardedRoleCount: number;
    phase: GamePhase;
    currentRoleNumber: number;
    currentResourceTaken: boolean;
    currentAbilityUsed: boolean;
    rollbackUsedThisTurn: boolean;
    crownBearer: string | null;
    currentPlayer: string | null;
    playerOrder: ArraySchema<string>;
    round: number;
    /**
     * Партия играется без фиолетовых (special) карт.
     *
     * Поле синхронизируемое: колода у всех одна, и каждый игрок в лобби должен
     * видеть, во что он играет. Значение выбирается до старта и дальше не
     * меняется (SR-113).
     */
    withoutSpecialCards: boolean;
    allPlayersReady: boolean;
    /**
     * Номер замороженной роли или `NO_FROZEN_ROLE`.
     *
     * Именно число, а не `null`. Примитив, записанный как `null`, кодируется как
     * удаление поля, и клиент его НЕ снимает: заморозка оставалась бы висеть на
     * пипке роли до конца партии (SR-034). Ноль кодируется обычным дельтом, и
     * клиент честно получает «заморозки нет». Номера ролей идут с 1, так что 0
     * свободен и в `TurnBar` ничего менять не пришлось.
     */
    frozenRoleNumber: number;
    /** Итоговые очки, заполняются при переходе в фазу gameOver */
    scores: ArraySchema<PlayerScore>;
}
