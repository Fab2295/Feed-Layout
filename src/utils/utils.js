export function getNextIdInArrayObject(array) {
    return (Math.max(...array.map(value => value.id)) + 1)
}