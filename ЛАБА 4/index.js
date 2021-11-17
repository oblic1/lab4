module.exports = (points) => {
    if (points.length < 3) {
        throw new Error("Фигура должна иметь хотя бы 3 точки")
    }
    let p = 0
    for (let i = 0; i < points.length; i++) {
        // Берем точки отрезка: начало и конец (конец это следующая точка в массиве, то есть i+1)
        const startPoint = points[i]
        let nextPoint;

        // Проверяем последняя ли точка в массиве, если да, то след точка (nextPoint) - Это начальная точка
        if (i === points.length - 1) {
            nextPoint = points[0]
        } else {
            nextPoint = points[i + 1]
        }
        // Проверяем на правильность введенных данных
        if (startPoint.x === undefined ||
            startPoint.y === undefined ||
            nextPoint.x === undefined ||
            nextPoint.y === undefined ||
            isNaN(startPoint.x) ||
            isNaN(startPoint.y) ||
            isNaN(nextPoint.x) ||
            isNaN(nextPoint.y)) {
            throw new Error("Не правильный формат точек, точки должны иметь вид {x: Number, y: Number}")
        }
        // Считаем длину отрезка
        const length = Math.sqrt(
            Math.abs(startPoint.x - nextPoint.x) ** 2 + Math.abs(startPoint.y - nextPoint.y) ** 2
        )
        p += length
    }
    return p
}