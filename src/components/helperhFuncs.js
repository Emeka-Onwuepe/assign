//Capitalise first word
export const sentenceCase = (data) => {
    let firstWord = data.slice(0, 1).toUpperCase()
    let rest = data.slice(1).toLowerCase()
    return `${firstWord}${rest}`
}