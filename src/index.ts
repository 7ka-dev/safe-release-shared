// Публичный API пакета. Клиент и сервер импортируют всё отсюда:
//   import { GameState, RELEASE_COMPONENTS_REQUIRED } from 'safe-release-shared';

// Colyseus Schema — синхронизируемое состояние (единственный экземпляр классов
// обязан быть общим для клиента и сервера, дублировать нельзя)
export * from './schema/cards';
export * from './schema/roles';
export * from './schema/Player';
export * from './schema/PlayerScore';
export * from './schema/GameState';

// DTO сообщений клиент ↔ сервер
export * from './schema/dto/dto';

// Константы правил, общие для сервера и клиента
export * from './logic/constants';

// Общие утилиты
export * from './utils/utils';