export function _getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Добавляем ведущий ноль, если часы меньше 10
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Добавляем ведущий ноль, если минуты меньше 10
    return `${hours}:${minutes}`;
}