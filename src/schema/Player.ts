import { Schema, type, ArraySchema } from "@colyseus/schema";
import { ComponentCard } from "./cards";
import { RoleCard } from "./roles";

export class Player extends Schema {
  @type("string")
  id: string;

  /**
   * Имя игрока. Заполняется в `GameLogic.addPlayer` из лобби; дефолт оставлен пустым,
   * а не «Player», иначе заглушка выглядела бы как настоящее имя (SR-046).
   */
  @type("string")
  name: string = '';

  @type("number")
  seat: number;

  /**
   * Только количество карт в руке. Сами карты — скрытая информация, поэтому
   * они не живут в синхронизируемой схеме и отправляются владельцу отдельно
   * (см. `GameLogic.getHandFor`).
   */
  @type("number")
  handCount: number = 0;

  @type([ComponentCard])
  builtComponents = new ArraySchema<ComponentCard>();

  /**
   * Заполнено шагов трека готовности к релизу. Kubernetes Cluster и Canary
   * Deployment закрывают по два, остальные — по одному, поэтому значение не равно
   * `builtComponents.length`. Считается на сервере, чтобы
   * клиент не повторял правило и не расходился с ним.
   */
  @type("number")
  releaseProgress: number = 0;

  /**
   * Сколько компонентов игрок ещё может построить в текущем ходу. Значение
   * осмысленно только у активного игрока: у остальных остаётся 0. Публикуется,
   * чтобы клиент не предлагал заведомо отклонённую стройку (SR-111) — раньше
   * остаток жил в приватном currentTurnState и был клиенту недоступен.
   */
  @type("number")
  buildsLeft: number = 0;

  @type("number")
  cpuRam: number;

  @type(RoleCard)
  role: RoleCard | null;

  @type("boolean")
  isReady: boolean;

  constructor(id: string, seat: number) {
    super();
    this.id = id;
    this.seat = seat;
    this.cpuRam = 2;
    this.role = null;
    this.isReady = false;
    this.releaseProgress = 0;
    this.buildsLeft = 0;
  }
}