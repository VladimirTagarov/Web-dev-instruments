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

let difficultyOfGames = 0

let images = [
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

let appEl = document.getElementById('app')
console.log(appEl)

let minutes = 0
let seconds = 0
let timer

function startTimer() {
    timer = setInterval(function () {
        seconds++
        document.getElementById('timer').textContent =
            seconds < 10 && minutes < 10
                ? '0' + minutes + ':0' + seconds
                : seconds < 10 && minutes >= 10
                ? minutes + ':0' + seconds
                : seconds >= 10 && minutes < 10
                ? '0' + minutes + ':' + seconds
                : minutes + ':' + seconds
    }, 1000)
    timer = setInterval(function () {
        seconds = '0' + (seconds - 60)
        minutes++
        document.getElementById('timer').textContent = minutes + ':' + seconds
    }, 60000)
}

function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    stopTimer()
    seconds = 0
    document.getElementById('timer').textContent = seconds
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

let gameHtml

let imgElements = document.querySelectorAll('img')

for (const imgElement of imgElements) {
    imgElement.addEventListener('click', () => {
        imgElement.classList.add('flip')
        console.log('rrrr')
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

let random1 = Math.floor(Math.random() * 36)
let random2 = Math.floor(Math.random() * 36)
let random3 = Math.floor(Math.random() * 36)
let random4 = Math.floor(Math.random() * 36)
let random5 = Math.floor(Math.random() * 36)
let random6 = Math.floor(Math.random() * 36)
let random7 = Math.floor(Math.random() * 36)
let random8 = Math.floor(Math.random() * 36)
let random9 = Math.floor(Math.random() * 36)
let random10 = Math.floor(Math.random() * 36)
let random11 = Math.floor(Math.random() * 36)
let random12 = Math.floor(Math.random() * 36)
let random13 = Math.floor(Math.random() * 36)
let random14 = Math.floor(Math.random() * 36)
let random15 = Math.floor(Math.random() * 36)
let random16 = Math.floor(Math.random() * 36)
let random17 = Math.floor(Math.random() * 36)
let random18 = Math.floor(Math.random() * 36)

const buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', () => {
    if (difficultyOfGames === 0) {
        alert('Вы не выбрали сложность игры')
    } else if (difficultyOfGames === 1) {
        console.log('1 level')
        console.log(image0)
        console.log(images)
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
                <div class="button game-page__button">Начать заново</div>
            </div>
            <div class="game-page__cards game-page__cards-easy">
                <img class="img" src=${images[random1]} alt="рубашка карты" />
                <img class="img" src=${images[random2]} alt="рубашка карты" />
                <img class="img" src=${images[random3]}
                } alt="рубашка карты" />
                <img class="img" src=${images[random4]} alt="рубашка карты" />
                <img class="img" src=${images[random5]} alt="рубашка карты" />
                <img class="img" src=${images[random6]} alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml

        let imgElements = document.querySelectorAll('img')
        let clickCount = 0
        let clickedElements = []

        for (const imgElement of imgElements) {
            imgElement.addEventListener('click', (event) => {
                let clickedElement = event.target
                clickedElements.push(clickedElement)
                console.log(clickedElements[0])
                console.log(clickedElements[1])
                clickCount++
                imgElement.classList.remove('flip')
                console.log(imgElement.src)
                console.log(clickCount)
                if (clickCount === 2) {
                    if (clickedElements[0].src === clickedElements[1].src) {
                        alert('вы выиграли, поздравляю')
                        location.reload()
                    } else {
                        alert('вы проиграли, попробуйте снова')
                        location.reload()
                    }
                } else {
                    console.log('Выберите вторую карту')
                }
            })
        }
        setTimeout(() => {
            let imgElements = document.querySelectorAll('img')
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
                <div class="button game-page__button">Начать заново</div>
            </div>
            <div class="game-page__cards game-page__cards-medium">
            <img class="img" src=${image0} alt="рубашка карты" />
            <img class="img" src=${image1} alt="рубашка карты" />
            <img class="img" src=${image2} alt="рубашка карты" />
            <img class="img" src=${image3} alt="рубашка карты" />
            <img class="img" src=${image4} alt="рубашка карты" />
            <img class="img" src=${image5} alt="рубашка карты" />
            <img class="img" src=${image6} alt="рубашка карты" />
            <img class="img" src=${image7} alt="рубашка карты" />
            <img class="img" src=${image8} alt="рубашка карты" />
            <img class="img" src=${image9} alt="рубашка карты" />
            <img class="img" src=${image10} alt="рубашка карты" />
            <img class="img" src=${image11} alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml
        let imgElements = document.querySelectorAll('img')
        let clickCount = 0
        let clickedElements = []

        for (const imgElement of imgElements) {
            imgElement.addEventListener('click', (event) => {
                let clickedElement = event.target
                clickedElements.push(clickedElement)
                console.log(clickedElements[0])
                console.log(clickedElements[1])
                clickCount++
                imgElement.classList.remove('flip')
                console.log(imgElement.src)
                console.log(clickCount)
                if (clickCount === 2) {
                    if (clickedElements[0].src === clickedElements[1].src) {
                        alert('вы выиграли, поздравляю')
                        location.reload()
                    } else {
                        alert('вы проиграли, попробуйте снова')
                        location.reload()
                    }
                }
            })
        }
        setTimeout(() => {
            let imgElements = document.querySelectorAll('img')
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
            <div class="button game-page__button">Начать заново</div>
        </div>
        <div class="game-page__cards game-page__cards-difficult">
        <img class="img" src=${image0} alt="рубашка карты" />
        <img class="img" src=${image1} alt="рубашка карты" />
        <img class="img" src=${image2} alt="рубашка карты" />
        <img class="img" src=${image3} alt="рубашка карты" />
        <img class="img" src=${image4} alt="рубашка карты" />
        <img class="img" src=${image5} alt="рубашка карты" />
        <img class="img" src=${image6} alt="рубашка карты" />
        <img class="img" src=${image7} alt="рубашка карты" />
        <img class="img" src=${image8} alt="рубашка карты" />
        <img class="img" src=${image9} alt="рубашка карты" />
        <img class="img" src=${image10} alt="рубашка карты" />
        <img class="img" src=${image11} alt="рубашка карты" />
        <img class="img" src=${image12} alt="рубашка карты" />
        <img class="img" src=${image13} alt="рубашка карты" />
        <img class="img" src=${image14} alt="рубашка карты" />
        <img class="img" src=${image15} alt="рубашка карты" />
        <img class="img" src=${image16} alt="рубашка карты" />
        <img class="img" src=${image17} alt="рубашка карты" />
        </div>
        `
        appEl.innerHTML = gameHtml
        let imgElements = document.querySelectorAll('img')
        let clickCount = 0
        let clickedElements = []

        for (const imgElement of imgElements) {
            imgElement.addEventListener('click', (event) => {
                let clickedElement = event.target
                clickedElements.push(clickedElement)
                console.log(clickedElements[0])
                console.log(clickedElements[1])
                clickCount++
                imgElement.classList.remove('flip')
                console.log(imgElement.src)
                console.log(clickCount)
                if (clickCount === 2) {
                    if (clickedElements[0].src === clickedElements[1].src) {
                        alert('вы выиграли, поздравляю')
                        location.reload()
                    } else {
                        alert('вы проиграли, попробуйте снова')
                        location.reload()
                    }
                }
            })
        }
        setTimeout(() => {
            let imgElements = document.querySelectorAll('img')
            for (const imgElement of imgElements) {
                imgElement.classList.add('flip')
            }
        }, 5000)
    }
})
