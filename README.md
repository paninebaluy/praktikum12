# Mesto
## EN
[на русском](#ru)

_v0.0.5 - http/https protocol autochange added for switching between development or production builds._

Mesto is a single page project, part of sprint 11 in [Yandex.Praktikum](https://praktikum.yandex.ru/profile/web-developer/) study program.
It's an interactive web page for sharing pictures with short titles.

### It includes
1. A profile section with user's name and information, as well as a changeable avatar (for now, it may be changed with a function only).
2. A popup with form for changing user data.
3. A popup with form for adding custom cards.
4. Cards downloaded from the server. Cards can be:
  +  liked/unliked
  +  deleted (only cards created by user)

Changes made to user info and card list are immediately committed to server.
Pictures on cards may be opened and closed as separate popups (one at a time).

### This web site on GH Pages
https://paninebaluy.github.io/praktikum11/

### Note
This is just a test project used to study Github and Webpack.

### How to start using it locally:

    Clone this repository

$> git clone https://github.com/paninebaluy/praktikum11

    Run dev build

$> npm run dev

    The webpage will open in your default browser.

### Technology used
+ Native JS
+ HTML
+ CSS
+ Git
+ Webpack
+ GitHub Pages

### Further plans
+ Create a popup with a form for loading an avatar picture to server (API function ready)

# Mesto
## RU

_v0.0.5 - добавлена смена протокола в запросах - на http/https, в зависимости от билда (development/production)._

Место &mdash; одностраничный проект, созданный в рамках спринта 11 учебной программы [Яндекс.Практикума](https://praktikum.yandex.ru/profile/web-developer/).
Это интерактивный сайт, пользователи которого могут делиться изображениями с кратким названием.

### Ссылка на сайт на GH-Pages
https://paninebaluy.github.io/praktikum11/

### Возможности сайта
1. Профиль пользователя с именем и информацией, а также аватаром, который можно менять (пока лишь функцией).
2. Попап с формой для изменения данных о пользователе. 
3. Попап с формой для добавления собственной карточки на сервер. 
4. Карточки, загруженные с сервера. Их можно:
  +  лайкать/снимать лайк
  +  удалять (но только те карточки, которые загрузил сам пользователь)


Изменения в профиле и в карточках (добавление, удаление, лайк) сразу поступают на сервер.
Картинки в карточках можно открывать и закрывать как отдельные попапы (по одной).

### Важно
Это учебный проект, выполненный ради изучения Git и Webpack.

### Как запустить его локально

    Клонировать репозиторий

$> git clone https://github.com/paninebaluy/praktikum11

    Запустить скрипт dev-билда

$> npm run dev

    Страница откроется в браузере по умолчанию. 

### Использованные технологии
+ Нативный JS
+ HTML
+ CSS
+ Git
+ Webpack
+ GitHub Pages

### Ближайшие планы
+ Сверстать попап с формой для загрузки изображения для аватара (готова функция в классе API).

[To top/Наверх](#Mesto)
