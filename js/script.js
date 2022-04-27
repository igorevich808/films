/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelector('.promo__adv');
const imgArr = adv.querySelectorAll('img');
const genre = document.querySelector('.promo__genre');
const promoBg1 = document.querySelector('.promo__bg');
const movieInput = document.querySelector('.adding__input');
const addBtn = document.querySelector('.add button');
const chkBox = document.querySelector('[type="checkbox"]');

function addClickToBtnArr() {
    const delBtnArr = document.querySelectorAll('.delete');
    delBtnArr.forEach(delBtn => {
        delBtn.addEventListener('click', () => {
            const parent = delBtn.parentElement;
            const filmName = parent.textContent.slice(3, parent.textContent.length-1);            
            movieDB.movies.splice(movieDB.movies.indexOf(filmName), 1);
            parent.remove();
            loadMoviesFromDB();
        });
    });
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    movieDB.movies.push(movieInput.value);
    movieInput.value = '';
    movieDB.movies.sort();
    loadMoviesFromDB();
    if (chkBox.checked) {
        alert('Добавляем любимый фильм');
    }
});

genre.innerHTML = 'Драма';
//adv.remove();
for (const elem of imgArr) {
    elem.remove();
}

promoBg1.style.backgroundImage = "url('../img/bg.jpg')";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Мы Миллеры"
    ]
};

function loadMoviesFromDB() {
    const movieUl = document.querySelector('.promo__interactive-list');
    movieUl.innerHTML = '';
    let movieLi;
    movieDB.movies.forEach((elem, id) => {
        if (elem.length > 21) {
            elem = elem.slice(0, 21) + '...';
        };
        movieLi = document.createElement('li');
        movieLi.classList.add('promo__interactive-item');
        movieLi.innerHTML = `${id + 1}. ${elem} <div class="delete"></div>`;
        movieUl.append(movieLi);
    });
    addClickToBtnArr();
} 
loadMoviesFromDB();
