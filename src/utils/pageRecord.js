export const startRow = (current, size) => {
    return (current - 1) * size + 1
}

export const endRow = (current, size, length) => {
    if(current * size <= length) {
        return current * size
    } else {
        return length - ((current - 1) * size)
    }
}

