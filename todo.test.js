const { it } = require('@jest/globals')

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

it('Should shuffle array', () => {
    const arr = [3, 6, 8, 9, 10, 1, 0]

    const shuffArr = shuffleArray(arr)

    if (shuffArr === [3, 6, 8, 9, 10, 1, 0]) {
        throw Error('new Array equal old Array')
    }
})
