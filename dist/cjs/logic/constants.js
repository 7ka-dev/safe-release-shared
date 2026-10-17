"use strict";
/**
 * Константы правил, которые считает и сервер, и клиент. Держатся здесь, а не в
 * игровой логике на сервере: правило должно быть одно, иначе клиент и сервер
 * разойдутся в подсчёте (SR-043, SR-111).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOTAL_ROLE_COUNT = exports.ANALYTIC_ROLE_NUMBER = exports.TEAM_LEAD_ROLE_NUMBER = exports.PRODUCT_MANAGER_ROLE_NUMBER = exports.NO_FROZEN_ROLE = exports.TECH_LEAD_ROLE_NUMBER = exports.QA_LEAD_ROLE_NUMBER = exports.DOUBLE_RELEASE_COMPONENTS = exports.RELEASE_COMPONENTS_REQUIRED = void 0;
/**
 * Трек готовности к релизу: 8 шагов по 12.5% (MECHANICS.md, Release Progress).
 * Порог всегда равен 8 — он не снижается. Kubernetes Cluster и Canary Deployment
 * закрывают по два шага, поэтому набрать 8 можно меньшим числом карт.
 */
exports.RELEASE_COMPONENTS_REQUIRED = 8;
/** Карты, закрывающие по два шага трека релиза. */
exports.DOUBLE_RELEASE_COMPONENTS = new Set(['Kubernetes Cluster', 'Canary Deployment']);
/** Номер роли QA Lead — единственной, у которой есть откат (SR-013). */
exports.QA_LEAD_ROLE_NUMBER = 8;
/** Номер роли Tech Lead — единственной, кто получает +1 CPU/RAM в начале хода (SR-017). */
exports.TECH_LEAD_ROLE_NUMBER = 6;
/**
 * Значение `frozenRoleNumber`, означающее «никто не заморожен».
 *
 * Отдельная константа, а не просто `0`, чтобы смысл читался в местах сброса и
 * никто не вернул туда `null` (см. `GameState.frozenRoleNumber`).
 */
exports.NO_FROZEN_ROLE = 0;
/** Номер роли Product Manager: её смена передаёт корону (MECHANICS.md). */
exports.PRODUCT_MANAGER_ROLE_NUMBER = 4;
/** Номер роли Team Lead — единственной, кто строит 3 компонента за ход. */
exports.TEAM_LEAD_ROLE_NUMBER = 7;
/** Номер роли Analytic, компоненты которого нельзя откатить (passive). */
exports.ANALYTIC_ROLE_NUMBER = 5;
/** Всего ролей в колоде ролей. */
exports.TOTAL_ROLE_COUNT = 8;
