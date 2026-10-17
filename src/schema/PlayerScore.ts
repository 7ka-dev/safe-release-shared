import { Schema, type } from "@colyseus/schema";

/** Итоговый результат игрока. Заполняется в момент завершения партии. */
export class PlayerScore extends Schema {
  @type("string")
  playerId: string = '';

  @type("number")
  seat: number = 0;

  @type("number")
  componentCount: number = 0;

  /** Сумма стоимостей всех построенных компонентов */
  @type("number")
  base: number = 0;

  /** Есть компоненты всех пяти типов */
  @type("boolean")
  fullTechStack: boolean = false;

  @type("number")
  techStackBonus: number = 0;

  /** Достигнут порог релиза */
  @type("boolean")
  releaseReady: boolean = false;

  @type("number")
  releaseReadyBonus: number = 0;

  @type("number")
  total: number = 0;

  @type("boolean")
  isWinner: boolean = false;

  constructor(
    playerId: string, seat: number, componentCount: number, base: number,
    fullTechStack: boolean, techStackBonus: number,
    releaseReady: boolean, releaseReadyBonus: number, total: number
  ) {
    super();
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