const { it, expect } = require('@jest/globals')

function generateCards(count) {
    let images = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ]
    const pairs = []
    for (let i = 0; i < count; i++) {
        const cardIndex = Math.floor(Math.random() * images.length)
        const card = images[cardIndex]

        pairs.push(card)
        pairs.push(card)
        images.splice(cardIndex, 1)
    }
    return pairs
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

it('Should generate 6 cards', () => {
    const arr = generateCards(3)
    const result = arr.length

    expect(result).toBe(6)
})

it('Should generate 12 cards', () => {
    const arr = generateCards(6)
    const result = arr.length

    expect(result).toBe(12)
})

it('Should generate 18 cards', () => {
    const arr = generateCards(9)
    const result = arr.length

    expect(result).toBe(18)
})

it('Should shuffle array', () => {
    const arr = [3, 6, 8, 9, 12, 1, 0]

    const shuffArr = shuffleArray(arr)

    let isDifferent = false
    for (let i = 0; i < shuffArr.length; i++) {
        for (let j = i + 1; j < shuffArr.length; j++) {
            if (shuffArr[i] !== shuffArr[j]) {
                isDifferent = true
                break
            }
        }
        if (isDifferent) {
            break
        }
    }

    expect(isDifferent).toBe(true)
})
