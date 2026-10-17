import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";
import { ComponentCard } from "./cards";
import { RoleCard } from "./roles";
import { Player } from "./Player";
import { PlayerScore } from "./PlayerScore";
import { NO_FROZEN_ROLE } from "../logic/constants";

export type GamePhase = 'waiting' | 'roleSelection' | 'roleTurns' | 'endRound' | 'gameOver';

export class GameState extends Schema {
  @type({ map: Player })
  players = new MapSchema<Player>();

  @type([ComponentCard])
  deck = new ArraySchema<ComponentCard>();

  @type([ComponentCard])
  discardPile = new ArraySchema<ComponentCard>();

  @type([RoleCard])
  roleDeck = new ArraySchema<RoleCard>();

  @type([RoleCard])
  availableRoles = new ArraySchema<RoleCard>();

  @type([RoleCard])
  unavailableRoles = new ArraySchema<RoleCard>();

  @type("number")
  discardedRoleCount: number = 0;

  @type("string")
  phase: GamePhase = 'waiting';

  @type("number")
  currentRoleNumber: number = 0;

  @type("boolean")
  currentResourceTaken: boolean = false;

  @type("boolean")
  currentAbilityUsed: boolean = false;

  @type("boolean")
  rollbackUsedThisTurn: boolean = false;

  @type("string")
  crownBearer: string | null = null;

  @type("string")
  currentPlayer: string | null = null;

  @type(["string"])
  playerOrder = new ArraySchema<string>();

  @type("number")
  round: number = 0;

  /**
   * Партия играется без фиолетовых (special) карт.
   *
   * Поле синхронизируемое: колода у всех одна, и каждый игрок в лобби должен
   * видеть, во что он играет. Значение выбирается до старта и дальше не
   * меняется (SR-113).
   */
  @type("boolean")
  withoutSpecialCards: boolean = false;

  @type("boolean")
  allPlayersReady: boolean = false;

  /**
   * Номер замороженной роли или `NO_FROZEN_ROLE`.
   *
   * Именно число, а не `null`. Примитив, записанный как `null`, кодируется как
   * удаление поля, и клиент его НЕ снимает: заморозка оставалась бы висеть на
   * пипке роли до конца партии (SR-034). Ноль кодируется обычным дельтом, и
   * клиент честно получает «заморозки нет». Номера ролей идут с 1, так что 0
   * свободен и в `TurnBar` ничего менять не пришлось.
   */
  @type("number")
  frozenRoleNumber: number = NO_FROZEN_ROLE;

  /** Итоговые очки, заполняются при переходе в фазу gameOver */
  @type([PlayerScore])
  scores = new ArraySchema<PlayerScore>();
}