"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
exports.shuffle = shuffle;
/** Короткий случайный идентификатор карты. */
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
/**
 * Перемешивание Фишера–Йетса. Возвращает новый массив: порядок исходного не
 * трогаем, иначе перемешанной окажется сама колода в синхронизируемой схеме.
 */
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
