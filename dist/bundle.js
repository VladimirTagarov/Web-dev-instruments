;(() => {
    let a,
        s = 0,
        l = document.getElementById('app')
    console.log(l),
        (appHtml =
            '<div id="page" class="page">\n<div class="choose-level">\n    <h1 class="page__text">Выбери <br>сложность</h1>\n    <div class="levels">\n        <div id="easy-level" class="level">1</div>\n        <div id="medium-level" class="level">2</div>\n        <div id="difficult-level" class="level">3</div>\n    </div>\n    <button id="button" class="button">Старт</button>\n</div>'),
        (l.innerHTML = appHtml)
    let e = document.querySelectorAll('img')
    for (const a of e)
        a.addEventListener('click', () => {
            a.classList.add('flip'), console.log('rrrr')
        })
    let i = document.getElementById('easy-level')
    console.log(i),
        i.addEventListener('click', () => {
            ;(s = 1),
                i.classList.add('active'),
                g.classList.remove('active'),
                t.classList.remove('active'),
                console.log(s)
        })
    let g = document.getElementById('medium-level')
    console.log(g),
        g.addEventListener('click', () => {
            ;(s = 2),
                i.classList.remove('active'),
                g.classList.add('active'),
                t.classList.remove('active'),
                console.log(s)
        })
    let t = document.getElementById('difficult-level')
    console.log(t),
        t.addEventListener('click', () => {
            ;(s = 3),
                i.classList.remove('active'),
                g.classList.remove('active'),
                t.classList.add('active'),
                console.log(s)
        }),
        console.log(s)
    let n = Math.floor(36 * Math.random()),
        c = Math.floor(36 * Math.random()),
        m = Math.floor(36 * Math.random()),
        o = Math.floor(36 * Math.random()),
        r = Math.floor(36 * Math.random()),
        d = Math.floor(36 * Math.random()),
        p = Math.floor(36 * Math.random()),
        v = Math.floor(36 * Math.random()),
        _ = Math.floor(36 * Math.random()),
        f = Math.floor(36 * Math.random()),
        h = Math.floor(36 * Math.random()),
        u = Math.floor(36 * Math.random()),
        M = Math.floor(36 * Math.random()),
        C = Math.floor(36 * Math.random()),
        $ = Math.floor(36 * Math.random()),
        L = Math.floor(36 * Math.random()),
        y = Math.floor(36 * Math.random()),
        E = Math.floor(36 * Math.random())
    document.getElementById('button').addEventListener('click', () => {
        if (0 === s) alert('Вы не выбрали сложность игры')
        else if (1 === s) {
            console.log('1 level'),
                (a = `\n        <div class="game-page">\n            <div class="game-page__header">\n                <div class="game-page__time">\n                    <div class="game-page__text">\n                        <p class="game-page__text">min</p>\n                        <p class="game-page__text">sec</p>\n                    </div>\n                    <p class="game-page__timer">00.00</p>\n                </div>\n                <div class="button game-page__button">Начать заново</div>\n            </div>\n            <div class="game-page__cards game-page__cards-easy">\n                <img class="img" src=${
                    'img/Cards/' + n + '.png'
                } alt="рубашка карты" />\n                <img class="img" src=${
                    'img/Cards/' + c + '.png'
                } alt="рубашка карты" />\n                <img class="img" src=${
                    'img/Cards/' + m + '.png'
                } alt="рубашка карты" />\n                <img class="img" src=${
                    'img/Cards/' + o + '.png'
                } alt="рубашка карты" />\n                <img class="img" src=${
                    'img/Cards/' + r + '.png'
                } alt="рубашка карты" />\n                <img class="img" src=${
                    'img/Cards/' + d + '.png'
                } alt="рубашка карты" />\n            </div>\n        `),
                (l.innerHTML = a)
            let s = document.querySelectorAll('img'),
                e = 0,
                i = []
            for (const a of s)
                a.addEventListener('click', (s) => {
                    let l = s.target
                    i.push(l),
                        console.log(i[0]),
                        console.log(i[1]),
                        e++,
                        a.classList.remove('flip'),
                        console.log(a.src),
                        console.log(e),
                        i[0].src === i[1].src
                            ? (alert('вы выиграли, поздравляю'),
                              location.reload())
                            : (alert('вы проиграли, попробуйте снова'),
                              location.reload())
                })
            setTimeout(() => {
                let a = document.querySelectorAll('img')
                for (const s of a) s.classList.add('flip')
            }, 5e3)
        } else if (2 === s) {
            console.log('2 level'),
                (a = `\n        <div class="game-page">\n            <div class="game-page__header">\n                <div class="game-page__time">\n                    <div class="game-page__text">\n                        <p class="game-page__text">min</p>\n                        <p class="game-page__text">sec</p>\n                    </div>\n                    <p class="game-page__timer">00.00</p>\n                </div>\n                <div class="button game-page__button">Начать заново</div>\n            </div>\n            <div class="game-page__cards game-page__cards-medium">\n            <img class="img" src=${
                    'img/Cards/' + n + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + c + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + m + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + o + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + r + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + d + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + p + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + v + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + _ + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + f + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + h + '.png'
                } alt="рубашка карты" />\n            <img class="img" src=${
                    'img/Cards/' + u + '.png'
                } alt="рубашка карты" />\n            </div>\n        `),
                (l.innerHTML = a)
            let s = document.querySelectorAll('img'),
                e = 0,
                i = []
            for (const a of s)
                a.addEventListener('click', (s) => {
                    let l = s.target
                    i.push(l),
                        console.log(i[0]),
                        console.log(i[1]),
                        e++,
                        a.classList.remove('flip'),
                        console.log(a.src),
                        console.log(e),
                        i[0].src === i[1].src
                            ? (alert('вы выиграли, поздравляю'),
                              location.reload())
                            : (alert('вы проиграли, попробуйте снова'),
                              location.reload())
                })
            setTimeout(() => {
                let a = document.querySelectorAll('img')
                for (const s of a) s.classList.add('flip')
            }, 5e3)
        } else if (3 === s) {
            console.log('3 level'),
                (a = `\n        <div class="game-page">\n        <div class="game-page__header">\n            <div class="game-page__time">\n                <div class="game-page__text">\n                    <p class="game-page__text">min</p>\n                    <p class="game-page__text">sec</p>\n                </div>\n                <p class="game-page__timer">00.00</p>\n            </div>\n            <div class="button game-page__button">Начать заново</div>\n        </div>\n        <div class="game-page__cards game-page__cards-difficult">\n        <img class="img" src=${
                    'img/Cards/' + n + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + c + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + m + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + o + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + r + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + d + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + p + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + v + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + _ + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + f + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + h + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + u + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + M + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + C + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + $ + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + L + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + y + '.png'
                } alt="рубашка карты" />\n        <img class="img" src=${
                    'img/Cards/' + E + '.png'
                } alt="рубашка карты" />\n        </div>\n        `),
                (l.innerHTML = a)
            let s = document.querySelectorAll('img'),
                e = 0,
                i = []
            for (const a of s)
                a.addEventListener('click', (s) => {
                    let l = s.target
                    i.push(l),
                        console.log(i[0]),
                        console.log(i[1]),
                        e++,
                        a.classList.remove('flip'),
                        console.log(a.src),
                        console.log(e),
                        i[0].src === i[1].src
                            ? (alert('вы выиграли, поздравляю'),
                              location.reload())
                            : (alert('вы проиграли, попробуйте снова'),
                              location.reload())
                })
            setTimeout(() => {
                let a = document.querySelectorAll('img')
                for (const s of a) s.classList.add('flip')
            }, 5e3)
        }
    })
})()