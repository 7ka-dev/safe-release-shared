/**
 * Идентификатор комнаты в реестре Colyseus-сервера. Живёт здесь, а не в
 * `src/index.ts` сервера и не в клиенте: обе стороны должны спрашивать одно
 * и то же имя комнаты, иначе клиент создаёт комнату, которой нет на сервере.
 */
export const SAFE_RELEASE_ROOM_NAME = 'safe_release_room';

/**
 * Причина, по которой сервер отклонил действие. Коды намеренно машинные: клиент
 * переводит их в текст сам, поэтому правила проверки не дублируются на клиенте.
 */
export type ActionFailure =
  | 'game_not_started'
  | 'wrong_phase'
  | 'not_your_turn'
  | 'not_enough_cpu'
  | 'duplicate_component'
  | 'build_limit_reached'
  | 'card_not_in_hand'
  | 'resources_already_taken'
  | 'resources_not_taken'
  | 'ability_already_used'
  | 'pending_card_choice'
  | 'role_unavailable'
  | 'role_allowance_spent'
  | 'role_frozen_last_round'
  | 'target_unavailable'
  | 'target_protected'
  | 'target_release_ready'
  | 'not_qa_lead'
  | 'rollback_already_used'
  | 'nothing_to_bonus'
  | 'invalid_target'
  | 'unknown_action';

/** Ответ сервера на действие игрока: получилось или нет и почему. */
export interface ActionResult {
  action: string;
  ok: boolean;
  reason: ActionFailure | null;
}

/** Полезная нагрузка способности роли — цели выбирает вызывающий игрок. */
export interface UseAbilityPayload {
  ability: string;
  targetRoleNumber?: number;
  targetPlayerId?: string;
  targetCardId?: string;
  cardIds?: string[];
}

/** Полезная нагрузка отката компонента QA Lead. */
export interface RollbackPayload {
  targetPlayerId: string;
  cardId: string;
}