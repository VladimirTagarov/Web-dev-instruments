import './style.css'
import image0 from './img/Cards/0.png'
import image1 from './img/Cards/1.png'
import image2 from './img/Cards/2.png'
import image3 from './img/Cards/3.png'
import image4 from './img/Cards/4.png'
import image5 from './img/Cards/5.png'
import image6 from './img/Cards/6.png'
import image7 from './img/Cards/7.png'
import image8 from './img/Cards/8.png'
import image9 from './img/Cards/9.png'
import image10 from './img/Cards/10.png'
import image11 from './img/Cards/11.png'
import image12 from './img/Cards/12.png'
import image13 from './img/Cards/13.png'
import image14 from './img/Cards/14.png'
import image15 from './img/Cards/15.png'
import image16 from './img/Cards/16.png'
import image17 from './img/Cards/17.png'
import image18 from './img/Cards/18.png'
import image19 from './img/Cards/19.png'
import image20 from './img/Cards/20.png'
import image21 from './img/Cards/21.png'
import image22 from './img/Cards/22.png'
import image23 from './img/Cards/23.png'
import image24 from './img/Cards/24.png'
import image25 from './img/Cards/25.png'
import image26 from './img/Cards/26.png'
import image27 from './img/Cards/27.png'
import image28 from './img/Cards/28.png'
import image29 from './img/Cards/29.png'
import image30 from './img/Cards/30.png'
import image31 from './img/Cards/31.png'
import image32 from './img/Cards/32.png'
import image33 from './img/Cards/33.png'
import image34 from './img/Cards/34.png'
import image35 from './img/Cards/35.png'
import celebrat from './img/celebrat.png'
import dead from './img/dead.png'

let difficultyOfGames: number = 0

let images: object[] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
]

function generateCards(count: number) {
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

let imagesEasy = generateCards(3)
let imagesMedium = generateCards(6)
let imagesDifficult = generateCards(9)
console.log(imagesEasy)

// let imagesForEasyLevel: [object, object, object, object, object, object] = [
//     image0,
//     image11,
//     image22,
//     image0,
//     image11,
//     image22,
// ]

// let imagesForMediumLevel: object[] = [
//     image2,
//     image7,
//     image17,
//     image21,
//     image29,
//     image31,
//     image2,
//     image7,
//     image17,
//     image21,
//     image29,
//     image31,
// ]

// let imagesForDifficultLevel: object[] = [
//     image12,
//     image13,
//     image28,
//     image29,
//     image33,
//     image34,
//     image4,
//     image9,
//     image0,
//     image12,
//     image13,
//     image28,
//     image29,
//     image33,
//     image34,
//     image4,
//     image9,
//     image0,
// ]

function shuffleArray(array: object[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

let arrayForEasy: object[] = shuffleArray(imagesEasy)

let arrayForMedium: object[] = shuffleArray(imagesMedium)

let arrayForDifficult: object[] = shuffleArray(imagesDifficult)

let loseEl: HTMLElement = document.getElementById('lose')

let winEl: HTMLElement = document.getElementById('win')

let appEl: HTMLElement = document.getElementById('app')

let minutes: string | number = 0
let seconds: string | number = 0
let timer: ReturnType<typeof setTimeout> | any
let timerContent

function startTimer() {
    timer = setInterval(function () {
        seconds = Number(seconds) + 1
        const timerGame = document.getElementById('timer') as HTMLElement
        timerGame.textContent =
            Number(seconds) < 10 && Number(minutes) < 10
                ? '0' + minutes + ':0' + seconds
                : seconds < 10 && Number(minutes) >= 10
                ? minutes + ':0' + seconds
                : seconds >= 10 && Number(minutes) < 10
                ? '0' + minutes + ':' + seconds
                : minutes + ':' + seconds

        timerContent = timerGame.textContent
    }, 1000)
    setInterval(function () {
        seconds = '0' + (Number(seconds) - 60)
        minutes = Number(minutes) + 1
        const timerGame = document.getElementById('timer') as HTMLElement
        timerGame.textContent = minutes + ':' + seconds
    }, 60000)
}

function stopTimer() {
    clearInterval(timer)
}

const appHtml = `<div id="page" class="page">
<div class="choose-level">
    <h1 class="page__text">Выбери <br>сложность</h1>
    <div class="levels">
        <div id="easy-level" class="level">1</div>
        <div id="medium-level" class="level">2</div>
        <div id="difficult-level" class="level">3</div>
    </div>
    <button id="button" class="button">Старт</button>
</div>`

appEl.innerHTML = appHtml

const winHtml = `<div id="win-page" class="page">
<div class="win choose-level">
<img src=${celebrat}>
<h1 class="page__text">Вы выиграли!</h1>
<p class="win__text">Затраченное время</p>
<p class="win__time">${timer ? timer.textContent : undefined}</p>
<button id="play-again-button" class="button">Играть снова</button>
</div>
</div>
`

winEl.innerHTML = winHtml

const playAgainElement = document.getElementById('play-again-button')
playAgainElement.addEventListener('click', () => {
    location.reload()
})

const loseHtml = `<div id="win-page" class="page">
<div class="win choose-level">
<img src=${dead}>
<h1 class="page__text">Вы проиграли!</h1>
<p class="win__text">Затраченное время</p>
<p class="win__time">${timer ? timer.textContent : timer}</p>
<button id="play-lose-again-button" class="button">Играть снова</button>
</div>
</div>
`

loseEl.innerHTML = loseHtml

const playLoseAgainElement = document.getElementById('play-lose-again-button')
playLoseAgainElement.addEventListener('click', () => {
    location.reload()
})

loseEl.classList.add('hidden-screen')

console.log(timerContent)
console.log(winEl)

winEl.classList.add('hidden-screen')

// let winPageElement = document.getElementById('')

let gameHtml: HTMLElement | string

const nodeListOfImages = document.getElementsByClassName('img')
let imgElements: HTMLImageElement[] | Element[] = Array.from(nodeListOfImages)

for (const imgElement of imgElements) {
    imgElement.addEventListener('click', () => {
        imgElement.classList.add('flip')
    })
}

let easyLevelElement = document.getElementById('easy-level')
console.log(easyLevelElement)

easyLevelElement.addEventListener('click', () => {
    difficultyOfGames = 1
    easyLevelElement.classList.add('active')
    mediumLevelElement.classList.remove('active')
    difficultLevelElement.classList.remove('active')
    console.log(difficultyOfGames)
})

let mediumLevelElement = document.getElementById('medium-level')
console.log(mediumLevelElement)

mediumLevelElement.addEventListener('click', () => {
    difficultyOfGames = 2
    easyLevelElement.classList.remove('active')
    mediumLevelElement.classList.add('active')
    difficultLevelElement.classList.remove('active')
    console.log(difficultyOfGames)
})

let difficultLevelElement = document.getElementById('difficult-level')
console.log(difficultLevelElement)

difficultLevelElement.addEventListener('click', () => {
    difficultyOfGames = 3
    easyLevelElement.classList.remove('active')
    mediumLevelElement.classList.remove('active')
    difficultLevelElement.classList.add('active')
    console.log(difficultyOfGames)
})

console.log(difficultyOfGames)

// let random1 = Math.floor(Math.random() * 36)
// let random2 = Math.floor(Math.random() * 36)
// let random3 = Math.floor(Math.random() * 36)
// let random4 = Math.floor(Math.random() * 36)
// let random5 = Math.floor(Math.random() * 36)
// let random6 = Math.floor(Math.random() * 36)
// let random7 = Math.floor(Math.random() * 36)
// let random8 = Math.floor(Math.random() * 36)
// let random9 = Math.floor(Math.random() * 36)
// let random10 = Math.floor(Math.random() * 36)
// let random11 = Math.floor(Math.random() * 36)
// let random12 = Math.floor(Math.random() * 36)
// let random13 = Math.floor(Math.random() * 36)
// let random14 = Math.floor(Math.random() * 36)
// let random15 = Math.floor(Math.random() * 36)
// let random16 = Math.floor(Math.random() * 36)
// let random17 = Math.floor(Math.random() * 36)
// let random18 = Math.floor(Math.random() * 36)

const buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', () => {
    if (difficultyOfGames === 0) {
        alert('Вы не выбрали сложность игры')
    } else if (difficultyOfGames === 1) {
        console.log('1 level')
        console.log(image0)
        console.log(images)
        // console.log(startTimer())
        startTimer()
        gameHtml = `
        <div class="game-page">
            <div class="game-page__header">
                <div class="game-page__time">
                    <div class="game-page__text">
                        <p class="game-page__text">min</p>
                        <p class="game-page__text">sec</p>
                    </div>
                    <p id="timer" class="game-page__timer">00:00</p>
                </div>
                <div id="play-again-button" class="button game-page__button">Начать заново</div>
            </div>
            <div class="game-page__cards game-page__cards-easy">
                <img class="img" src=${arrayForEasy[0]} alt="рубашка карты" />
                <img class="img" src=${arrayForEasy[1]} alt="рубашка карты" />
                <img class="img" src=${arrayForEasy[2]}
                } alt="рубашка карты" />
                <img class="img" src=${arrayForEasy[3]} alt="рубашка карты" />
                <img class="img" src=${arrayForEasy[4]} alt="рубашка карты" />
                <img class="img" src=${arrayForEasy[5]} alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml
        const timerGame = document.getElementById('timer') as HTMLElement
        console.log(timerGame.textContent)
        // timerContent = timer.textContent
        // console.log(timerContent)
        const playAgainElement = document.getElementById('play-again-button')
        playAgainElement.addEventListener('click', () => {
            location.reload()
        })

        const nodeListOfImages = document.getElementsByClassName('img')
        let imgElements: HTMLImageElement[] | Element[] =
            Array.from(nodeListOfImages)
        let clickCount: number = 0
        let clickedElements: HTMLImageElement[] = []

        setTimeout(() => {
            for (const imgElement of imgElements) {
                imgElement.addEventListener('click', (event) => {
                    let clickedElement = event.target as HTMLImageElement
                    clickedElements.push(clickedElement)
                    console.log(clickedElements[0])
                    console.log(clickedElements[1])
                    clickCount++
                    imgElement.classList.remove('flip')
                    console.log(clickCount)
                    if (clickCount === 2) {
                        if (clickedElements[0].src !== clickedElements[1].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 4) {
                        if (clickedElements[2].src !== clickedElements[3].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 6) {
                        if (clickedElements[4].src !== clickedElements[5].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        } else {
                            winEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    }
                })
            }
        }, 5000)
        setTimeout(() => {
            const nodeListOfImages = document.getElementsByClassName('img')
            let imgElements: HTMLImageElement[] | Element[] =
                Array.from(nodeListOfImages)
            for (const imgElement of imgElements) {
                imgElement.classList.add('flip')
            }
        }, 5000)
    } else if (difficultyOfGames === 2) {
        console.log('2 level')
        startTimer()
        gameHtml = `
        <div class="game-page">
            <div class="game-page__header">
                <div class="game-page__time">
                    <div class="game-page__text">
                        <p class="game-page__text">min</p>
                        <p class="game-page__text">sec</p>
                    </div>
                    <p id="timer" class="game-page__timer">00:00</p>
                </div>
                <div id="play-again-button" class="button game-page__button">Начать заново</div>
            </div>
            <div class="game-page__cards game-page__cards-medium">
            <img class="img" src=${arrayForMedium[0]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[1]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[2]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[3]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[4]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[5]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[6]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[7]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[8]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[9]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[10]} alt="рубашка карты" />
            <img class="img" src=${arrayForMedium[11]} alt="рубашка карты" />
            </div>
        `

        appEl.innerHTML = gameHtml

        const playAgainElement = document.getElementById('play-again-button')
        playAgainElement.addEventListener('click', () => {
            location.reload()
        })

        const nodeListOfImages = document.getElementsByClassName('img')
        let imgElements: Element[] = Array.from(nodeListOfImages)
        let clickCount: number = 0
        let clickedElements: HTMLImageElement[] = []

        setTimeout(() => {
            for (const imgElement of imgElements) {
                imgElement.addEventListener('click', (event) => {
                    let clickedElement = event.target as HTMLImageElement
                    clickedElements.push(clickedElement)
                    console.log(clickedElements[0])
                    console.log(clickedElements[1])
                    clickCount++
                    imgElement.classList.remove('flip')
                    console.log(clickCount)

                    if (clickCount === 2) {
                        if (clickedElements[0].src !== clickedElements[1].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 4) {
                        if (clickedElements[2].src !== clickedElements[3].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 6) {
                        if (clickedElements[4].src !== clickedElements[5].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 8) {
                        if (clickedElements[6].src !== clickedElements[7].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 10) {
                        if (clickedElements[8].src !== clickedElements[9].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 12) {
                        if (
                            clickedElements[10].src !== clickedElements[11].src
                        ) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        } else {
                            // alert('вы выиграли, поздравляю')
                            // location.reload()
                            winEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    }
                })
            }
        }, 5000)
        setTimeout(() => {
            const nodeListOfImages = document.getElementsByClassName('img')
            let imgElements: HTMLImageElement[] | Element[] =
                Array.from(nodeListOfImages)
            for (const imgElement of imgElements) {
                imgElement.classList.add('flip')
            }
        }, 5000)
    } else if (difficultyOfGames === 3) {
        console.log('3 level')
        startTimer()
        gameHtml = `
        <div class="game-page">
        <div class="game-page__header">
            <div class="game-page__time">
                <div class="game-page__text">
                    <p class="game-page__text">min</p>
                    <p class="game-page__text">sec</p>
                </div>
                <p id="timer" class="game-page__timer">00:00</p>
            </div>
            <div id="play-again-button" class="button game-page__button">Начать заново</div>
        </div>
        <div class="game-page__cards game-page__cards-difficult">
        <img class="img" src=${arrayForDifficult[0]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[1]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[2]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[3]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[4]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[5]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[6]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[7]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[8]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[9]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[10]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[11]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[12]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[13]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[14]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[15]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[16]} alt="рубашка карты" />
        <img class="img" src=${arrayForDifficult[17]} alt="рубашка карты" />
        </div>
        `
        appEl.innerHTML = gameHtml

        const playAgainElement = document.getElementById('play-again-button')
        playAgainElement.addEventListener('click', () => {
            location.reload()
        })

        const nodeListOfImages = document.getElementsByClassName('img')
        let imgElements: HTMLImageElement[] | Element[] =
            Array.from(nodeListOfImages)
        let clickCount = 0
        let clickedElements: HTMLImageElement[] = []

        setTimeout(() => {
            for (const imgElement of imgElements) {
                imgElement.addEventListener('click', (event) => {
                    let clickedElement = event.target as HTMLImageElement
                    clickedElements.push(clickedElement)
                    console.log(clickedElements[0])
                    console.log(clickedElements[1])
                    clickCount++
                    imgElement.classList.remove('flip')
                    console.log(clickCount)
                    if (clickCount === 2) {
                        if (clickedElements[0].src !== clickedElements[1].src) {
                            // alert('вы проиграли, попробуйте снова')
                            // location.reload()
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 4) {
                        if (clickedElements[2].src !== clickedElements[3].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 6) {
                        if (clickedElements[4].src !== clickedElements[5].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 8) {
                        if (clickedElements[6].src !== clickedElements[7].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 10) {
                        if (clickedElements[8].src !== clickedElements[9].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 12) {
                        if (
                            clickedElements[10].src !== clickedElements[11].src
                        ) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 14) {
                        if (clickedElements[8].src !== clickedElements[9].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 16) {
                        if (clickedElements[8].src !== clickedElements[9].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    } else if (clickCount === 18) {
                        if (clickedElements[8].src !== clickedElements[9].src) {
                            loseEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        } else {
                            winEl.classList.remove('hidden-screen')
                            appEl.classList.add('blur-screen')
                            stopTimer()
                        }
                    }
                })
            }
        }, 5000)
        setTimeout(() => {
            const nodeListOfImages = document.getElementsByClassName('img')
            let imgElements: HTMLImageElement[] | Element[] =
                Array.from(nodeListOfImages)
            for (const imgElement of imgElements) {
                imgElement.classList.add('flip')
            }
        }, 5000)
    }
})
