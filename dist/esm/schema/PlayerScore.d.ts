import { Schema } from "@colyseus/schema";
/** Итоговый результат игрока. Заполняется в момент завершения партии. */
export declare class PlayerScore extends Schema {
    playerId: string;
    seat: number;
    componentCount: number;
    /** Сумма стоимостей всех построенных компонентов */
    base: number;
    /** Есть компоненты всех пяти типов */
    fullTechStack: boolean;
    techStackBonus: number;
    /** Достигнут порог релиза */
    releaseReady: boolean;
    releaseReadyBonus: number;
    total: number;
    isWinner: boolean;
    constructor(playerId: string, seat: number, componentCount: number, base: number, fullTechStack: boolean, techStackBonus: number, releaseReady: boolean, releaseReadyBonus: number, total: number);
}
