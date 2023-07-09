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
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml
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
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
                <img src="img/рубашка.png" alt="рубашка карты" />
            </div>
        `
        appEl.innerHTML = gameHtml
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
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
            <img src="img/рубашка.png" alt="рубашка карты" />
        </div>
        `
        appEl.innerHTML = gameHtml
    }
})
