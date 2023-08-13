# Web-dev-instruments Карточная игра

В игре реализован следующий функционал: выбор сложности, основная логика игры, вывод результата путем всплывающего окна (pop-up)
Есть три уровня сложности: легкий, средний, сложный. От уровня сложности зависит количество карточек, которые будут показаны пользователю на игровом экране.
Легкий - 6 (3 пары одинаковых), средний - 12 (6 пар одинаковых), сложный - 18 (9 пар одинаковых карт).
Когда пользователь кликает на предположительную пару, то игра осуществляет сверку карточек:

- Если карточки совпадают ⇒ игра продолжается
- Если карточки не совпадают ⇒ игра заканчивается

Если были найдены все пары, игрок побеждает.
Каким бы ни был финал игры, пользователю показывается всплывающее окно со:

- Статусом (проиграл / выиграл).
- Временем, затраченным на игру.
- Кнопкой, предлагающей сыграть снова.
