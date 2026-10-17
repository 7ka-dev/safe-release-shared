import { Schema, ArraySchema } from "@colyseus/schema";
import { ComponentCard } from "./cards";
import { RoleCard } from "./roles";
export declare class Player extends Schema {
    id: string;
    /**
     * Имя игрока. Заполняется в `GameLogic.addPlayer` из лобби; дефолт оставлен пустым,
     * а не «Player», иначе заглушка выглядела бы как настоящее имя (SR-046).
     */
    name: string;
    seat: number;
    /**
     * Только количество карт в руке. Сами карты — скрытая информация, поэтому
     * они не живут в синхронизируемой схеме и отправляются владельцу отдельно
     * (см. `GameLogic.getHandFor`).
     */
    handCount: number;
    builtComponents: ArraySchema<ComponentCard>;
    /**
     * Заполнено шагов трека готовности к релизу. Kubernetes Cluster и Canary
     * Deployment закрывают по два, остальные — по одному, поэтому значение не равно
     * `builtComponents.length`. Считается на сервере, чтобы
     * клиент не повторял правило и не расходился с ним.
     */
    releaseProgress: number;
    /**
     * Сколько компонентов игрок ещё может построить в текущем ходу. Значение
     * осмысленно только у активного игрока: у остальных остаётся 0. Публикуется,
     * чтобы клиент не предлагал заведомо отклонённую стройку (SR-111) — раньше
     * остаток жил в приватном currentTurnState и был клиенту недоступен.
     */
    buildsLeft: number;
    cpuRam: number;
    role: RoleCard | null;
    isReady: boolean;
    constructor(id: string, seat: number);
}
