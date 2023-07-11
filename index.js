let difficultyOfGames = 0

let appEl = document.getElementById('app')
console.log(appEl)

appHtml = `<div id="page" class="page">
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
        gameHtml = `
        <div class="game-page">
            <div class="game-page__header">
                <div class="game-page__time">
                    <div class="game-page__text">
                        <p class="game-page__text">min</p>
                        <p class="game-page__text">sec</p>
                    </div>
                    <p class="game-page__timer">00.00</p>
                </div>
                <div class="button game-page__button">Начать заново</div>
            </div>
            <div class="game-page__cards game-page__cards-easy">
                <img class="img" src=${
                    'img/Cards/' + random1 + '.png'
                } alt="рубашка карты" />
                <img class="img" src=${
                    'img/Cards/' + random2 + '.png'
                } alt="рубашка карты" />
                <img class="img" src=${
                    'img/Cards/' + random3 + '.png'
                } alt="рубашка карты" />
                <img class="img" src=${
                    'img/Cards/' + random4 + '.png'
                } alt="рубашка карты" />
                <img class="img" src=${
                    'img/Cards/' + random5 + '.png'
                } alt="рубашка карты" />
                <img class="img" src=${
                    'img/Cards/' + random6 + '.png'
                } alt="рубашка карты" />
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
                if (clickedElements[0].src === clickedElements[1].src) {
                    alert('вы выиграли, поздравляю')
                    location.reload()
                } else {
                    alert('вы проиграли, попробуйте снова')
                    location.reload()
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
        gameHtml = `
        <div class="game-page">
            <div class="game-page__header">
                <div class="game-page__time">
                    <div class="game-page__text">
                        <p class="game-page__text">min</p>
                        <p class="game-page__text">sec</p>
                    </div>
                    <p class="game-page__timer">00.00</p>
                </div>
                <div class="button game-page__button">Начать заново</div>
            </div>
            <div class="game-page__cards game-page__cards-medium">
            <img class="img" src=${
                'img/Cards/' + random1 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random2 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random3 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random4 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random5 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random6 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random7 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random8 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random9 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random10 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random11 + '.png'
            } alt="рубашка карты" />
            <img class="img" src=${
                'img/Cards/' + random12 + '.png'
            } alt="рубашка карты" />
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
                if (clickedElements[0].src === clickedElements[1].src) {
                    alert('вы выиграли, поздравляю')
                    location.reload()
                } else {
                    alert('вы проиграли, попробуйте снова')
                    location.reload()
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
        gameHtml = `
        <div class="game-page">
        <div class="game-page__header">
            <div class="game-page__time">
                <div class="game-page__text">
                    <p class="game-page__text">min</p>
                    <p class="game-page__text">sec</p>
                </div>
                <p class="game-page__timer">00.00</p>
            </div>
            <div class="button game-page__button">Начать заново</div>
        </div>
        <div class="game-page__cards game-page__cards-difficult">
        <img class="img" src=${
            'img/Cards/' + random1 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random2 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random3 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random4 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random5 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random6 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random7 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random8 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random9 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random10 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random11 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random12 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random13 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random14 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random15 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random16 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random17 + '.png'
        } alt="рубашка карты" />
        <img class="img" src=${
            'img/Cards/' + random18 + '.png'
        } alt="рубашка карты" />
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
                if (clickedElements[0].src === clickedElements[1].src) {
                    alert('вы выиграли, поздравляю')
                    location.reload()
                } else {
                    alert('вы проиграли, попробуйте снова')
                    location.reload()
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
