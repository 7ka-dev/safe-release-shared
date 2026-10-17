/** Короткий случайный идентификатор карты. */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Перемешивание Фишера–Йетса. Возвращает новый массив: порядок исходного не
 * трогаем, иначе перемешанной окажется сама колода в синхронизируемой схеме.
 */
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}