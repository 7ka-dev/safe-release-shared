# safe-release-shared

Общий код клиента и сервера Safe Release (отдельный репозиторий).

Клиент лежит в [7ka-dev/safe-release](https://github.com/7ka-dev/safe-release),
сервер — в [7ka-dev/time2join.me-colyseus](https://github.com/7ka-dev/time2join.me-colyseus)
(`src/games/safe-release/`).

## Что здесь

| Каталог | Содержимое |
|---|---|
| `src/schema/` | Colyseus Schema-классы: `GameState`, `Player`, `PlayerScore`, `ComponentCard`, `RoleCard`, `RoleAbility` |
| `src/schema/dto/` | Типы сообщений клиент ↔ сервер (`ActionResult`, `ActionFailure`, `UseAbilityPayload`, `SAFE_RELEASE_ROOM_NAME`, …) |
| `src/logic/constants.ts` | Константы правил, которые обязан считать и клиент, и сервер (порог релиза, номера ролей) |
| `src/utils/utils.ts` | Общие утилиты (`shuffle`, `generateId`) |

Клиент и сервер импортируют всё из корня пакета:

```ts
import { GameState, RELEASE_COMPONENTS_REQUIRED, SAFE_RELEASE_ROOM_NAME } from 'safe-release-shared';
```

## Правила

- **Schema-классы нельзя копировать** в клиент или сервер — только этот пакет.
  Несовпадение классов (или вторая копия `@colyseus/schema`) приводит к молчаливому
  рассинхрону состояния: у клиента остаются пустые поля, и определения схемы
  не совпадают.
- Собирается в два формата: ESM (`dist/esm`) + CJS (`dist/cjs`) + типы (`.d.ts`),
  потому что сервер собирается в CommonJS, а клиент — в ESM (Vite).
- `typescript` и `@colyseus/schema` указаны в `dependencies` намеренно: без них
  в процессе сервера не будет **ровно одной копии** `@colyseus/schema`.
- Версии `@colyseus/schema` и `typescript` держите синхронными с
  `time2join.me-colyseus/package.json` и `safe-release/package.json`.

## Сборка

```bash
npm install
npm run build      # dist/esm + dist/cjs + .d.ts
npm run watch      # авто-сборка ESM при правках
npm run typecheck  # tsc --noEmit
```

## Цикл разработки

Оба потребителя подключают пакет по git-URL:

    github:7ka-dev/safe-release-shared

npm ставит **упакованную копию** репозитория на коммите из `package-lock.json`.
Подключать пакет через `file:`-каталог (симлинк) нельзя: у него появляется своя
копия `@colyseus/schema`, и состояние перестаёт синхронизироваться.

1. меняете код здесь → `npm run build`
2. коммитите и пушите `dist/` вместе с исходниками — git-зависимость ставит
   содержимое репозитория, собранный `dist/` обязателен
3. в `time2join.me-colyseus` и в `safe-release` → `npm install`
4. перезапускаете сервер / клиент

Правки без коммита/пуша здесь потребителям не видны.

### Локальная сборка без пуша

Пока репозиторий не опубликован, зависимость можно поставить из упакованного
tar-файла — npm распаковывает его как обычную копию, копия `@colyseus/schema`
остаётся одна:

```bash
npm pack                                    # здесь -> safe-release-shared-0.1.0.tgz
# в потребителе:
npm install --no-save ../safe-release-shared/safe-release-shared-0.1.0.tgz
```

`--no-save` оставляет в `package.json` git-ссылку: после пуша репозитория и
`npm install` в потребителях вернётся установка с GitHub.