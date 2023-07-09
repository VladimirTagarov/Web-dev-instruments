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

function flipCardsEasy() {
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
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
            </div>
        `
    appEl.innerHTML = gameHtml
}

function flipCardsMedium() {
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
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
            </div>
        `
    appEl.innerHTML = gameHtml
}

function flipCardsDifficult() {
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
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
                <img class="img" src="img/рубашка.png" alt="рубашка карты" />
            </div>
        `
    appEl.innerHTML = gameHtml
}

const buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', () => {
    if (difficultyOfGames === 0) {
        alert('Вы не выбрали сложность игры')
    } else if (difficultyOfGames === 1) {
        console.log('1 level')
        setTimeout(flipCardsEasy, 5000)
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
                <img class="img1" src=${
                    'img/Cards/' + random1 + '.png'
                } alt="рубашка карты" />
                <img class="img1" src=${
                    'img/Cards/' + random2 + '.png'
                } alt="рубашка карты" />
                <img class="img1" src=${
                    'img/Cards/' + random1 + '.png'
                } alt="рубашка карты" />
                <img class="img1" src=${
                    'img/Cards/' + random3 + '.png'
                } alt="рубашка карты" />
                <img class="img1" src=${
                    'img/Cards/' + random2 + '.png'
                } alt="рубашка карты" />
                <img class="img1" src=${
                    'img/Cards/' + random3 + '.png'
                } alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml

        // let imgElements = document.querySelectorAll('img')

        // for (const imgElement of imgElements) {
        //     imgElement.addEventListener('click', () => {
        //         imgElement.classList.add('flip')
        //         imgElement.src = 'img/рубашка.png'
        //         console.log('rrrr')
        //     })
        // }
    } else if (difficultyOfGames === 2) {
        console.log('2 level')
        setTimeout(flipCardsMedium, 5000)
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
            <img class="img1" src=${
                'img/Cards/' + random1 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random2 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random1 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random3 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random2 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random3 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random6 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random5 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random6 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random4 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random5 + '.png'
            } alt="рубашка карты" />
            <img class="img1" src=${
                'img/Cards/' + random4 + '.png'
            } alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml
    } else if (difficultyOfGames === 3) {
        console.log('3 level')
        setTimeout(flipCardsDifficult, 5000)
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
        <img class="img1" src=${
            'img/Cards/' + random1 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random2 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random1 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random3 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random2 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random3 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random6 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random5 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random6 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random4 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random5 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random4 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random7 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random8 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random7 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random9 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random8 + '.png'
        } alt="рубашка карты" />
        <img class="img1" src=${
            'img/Cards/' + random9 + '.png'
        } alt="рубашка карты" />
        </div>
        `
        appEl.innerHTML = gameHtml
    }
})
