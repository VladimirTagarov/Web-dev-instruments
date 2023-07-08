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
        <div id="page" class="page">
        <svg width="95" height="133" viewBox="0 0 95 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="95" height="133" rx="4" fill="white"/>
<path d="M10.32 6L6.288 24H8.712L9.648 19.584H14.592L15.528 24H17.952L13.92 6H10.32ZM10.128 17.376L12.12 7.92L14.112 17.376H10.128Z" fill="black"/>
<path d="M84.68 126L88.712 108L86.288 108L85.352 112.416L80.408 112.416L79.472 108L77.048 108L81.08 126L84.68 126ZM84.872 114.624L82.88 124.08L80.888 114.624L84.872 114.624Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.4946 76.7216C49.3283 78.7749 51.7912 80 53.9419 80C57.6159 80 61.841 77.9312 62.0247 71.7248C61.8538 65.601 55.1644 60.4538 48.7603 55.5261C48.2805 55.1569 47.8024 54.789 47.3287 54.422C47.3287 54.422 47.3287 54.4221 47.3286 54.4221C47.3286 54.4221 47.3286 54.422 47.3286 54.422C47.0942 54.6036 46.8591 54.7854 46.6238 54.9675C40.0334 60.0656 33.1774 65.3692 33 71.7248C33.1837 77.9312 37.7762 80 41.4502 80C43.6009 80 45.8557 78.7749 47.4946 76.7216Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4519 29.007C12.5627 29.0908 12.6744 29.1747 12.7864 29.2589C14.3251 30.4148 15.9323 31.6223 15.9734 33.0588C15.9293 34.5147 14.9141 35 14.0314 35C13.5147 35 12.923 34.7127 12.4824 34.2311C12.0887 34.7127 11.547 35 11.0303 35C10.1475 35 9.04414 34.5147 9 33.0588C9.04261 31.5679 10.6899 30.3238 12.2733 29.1279C12.3266 29.0876 12.3799 29.0473 12.4331 29.0071C12.4362 29.0047 12.4393 29.0023 12.4425 28.9999C12.4425 28.9999 12.4425 28.9999 12.4426 28.9999C12.4426 28.9999 12.4426 28.9999 12.4426 28.9999C12.4458 29.0023 12.4489 29.0047 12.4519 29.007Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.5214 103.635C82.4107 103.557 82.299 103.478 82.1869 103.399C80.6483 102.312 79.0411 101.176 79 99.8254C79.0441 98.4564 80.0593 98 80.942 98C81.4587 98 82.0504 98.2702 82.4909 98.7231C82.8847 98.2702 83.4264 98 83.9431 98C84.8258 98 85.9293 98.4564 85.9734 99.8254C85.9308 101.227 84.2835 102.397 82.7001 103.522C82.6467 103.56 82.5934 103.598 82.5403 103.635C82.5372 103.638 82.534 103.64 82.5309 103.642C82.5309 103.642 82.5309 103.642 82.5308 103.642C82.5308 103.642 82.5308 103.642 82.5308 103.642C82.5276 103.64 82.5245 103.638 82.5214 103.635Z" fill="black"/>
</svg>

        </div>
        `
        appEl.innerHTML = gameHtml
    } else if (difficultyOfGames === 2) {
        console.log('2 level')
        gameHtml = `
        <div id="page" class="page">
        <svg width="95" height="133" viewBox="0 0 95 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="95" height="133" rx="4" fill="white"/>
<path d="M10.32 6L6.288 24H8.712L9.648 19.584H14.592L15.528 24H17.952L13.92 6H10.32ZM10.128 17.376L12.12 7.92L14.112 17.376H10.128Z" fill="black"/>
<path d="M84.68 126L88.712 108L86.288 108L85.352 112.416L80.408 112.416L79.472 108L77.048 108L81.08 126L84.68 126ZM84.872 114.624L82.88 124.08L80.888 114.624L84.872 114.624Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.53 57.2785C45.6964 55.2252 43.2335 54.0001 41.0828 54.0001C37.4088 54.0001 33.1837 56.0689 33 62.2754C33.1709 68.3992 39.8603 73.5464 46.2644 78.474C46.7441 78.8432 47.2223 79.2111 47.696 79.5781C47.696 79.5781 47.696 79.5781 47.696 79.578C47.6961 79.5781 47.6961 79.5781 47.6961 79.5781C47.9305 79.3965 48.1655 79.2147 48.4009 79.0326C54.9912 73.9345 61.8473 68.6309 62.0247 62.2754C61.841 56.0689 57.2485 54.0001 53.5745 54.0001C51.4238 54.0001 49.169 55.2252 47.53 57.2785Z" fill="#FF4545"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5214 34.9928C12.4107 34.9091 12.299 34.8252 12.1869 34.741C10.6483 33.5851 9.04106 32.3776 9 30.9411C9.04414 29.4852 10.0593 28.9999 10.942 28.9999C11.4587 28.9999 12.0504 29.2872 12.4909 29.7688C12.8847 29.2872 13.4264 28.9999 13.9431 28.9999C14.8258 28.9999 15.9293 29.4852 15.9734 30.9411C15.9308 32.432 14.2835 33.6761 12.7001 34.872C12.6467 34.9123 12.5935 34.9526 12.5403 34.9928C12.5372 34.9952 12.5341 34.9976 12.5309 35C12.5309 35 12.5309 35 12.5308 34.9999C12.5308 35 12.5308 35 12.5308 35C12.5276 34.9976 12.5245 34.9952 12.5214 34.9928Z" fill="#FF4545"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.452 98.0068C82.5627 98.0855 82.6744 98.1644 82.7864 98.2436C84.3251 99.3305 85.9323 100.466 85.9734 101.817C85.9293 103.186 84.9141 103.642 84.0314 103.642C83.5147 103.642 82.923 103.372 82.4824 102.919C82.0887 103.372 81.547 103.642 81.0303 103.642C80.1475 103.642 79.0441 103.186 79 101.817C79.0426 100.415 80.6899 99.2449 82.2733 98.1203C82.3267 98.0824 82.3799 98.0446 82.4331 98.0068C82.4362 98.0045 82.4393 98.0023 82.4425 98C82.4425 98 82.4425 98 82.4426 98.0001C82.4426 98 82.4426 98 82.4426 98C82.4458 98.0023 82.4489 98.0045 82.452 98.0068Z" fill="#FF4545"/>
</svg>


        </div>
        `
        appEl.innerHTML = gameHtml
    } else if (difficultyOfGames === 3) {
        console.log('3 level')
        gameHtml = `
        <div id="page" class="page">
        <svg width="95" height="133" viewBox="0 0 95 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="95" height="133" rx="4" fill="white"/>
<path d="M10.32 6L6.288 24H8.712L9.648 19.584H14.592L15.528 24H17.952L13.92 6H10.32ZM10.128 17.376L12.12 7.92L14.112 17.376H10.128Z" fill="black"/>
<path d="M84.68 126L88.712 108L86.288 108L85.352 112.416L80.408 112.416L79.472 108L77.048 108L81.08 126L84.68 126ZM84.872 114.624L82.88 124.08L80.888 114.624L84.872 114.624Z" fill="black"/>
<path d="M48 54.0002L58.2705 66.7817L48 79.4994L37.7295 66.7817L48 54.0002Z" fill="#FF4545"/>
<path d="M12.3748 28L15.0933 31.3832L12.3748 34.7495L9.6562 31.3832L12.3748 28Z" fill="#FF4545"/>
<path d="M82.3748 97L85.0933 100.383L82.3748 103.75L79.6562 100.383L82.3748 97Z" fill="#FF4545"/>
</svg>

        </div>
        `
        appEl.innerHTML = gameHtml
    }
})
