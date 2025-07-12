import {createPosts} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureItems = createPosts();
const pictureListFragment = document.createDocumentFragment();

// Создаем объект и меняем данные внутри, складываем все в один элемент

pictureItems.forEach(({url, description, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__img').setAttribute('alt', description);
  pictureElement.querySelector('.picture__likes').textContet = likes;
  pictureListFragment.appendChild(pictureElement);
});

// Добавляю элемент на страницу
pictureList.appendChild(pictureListFragment);
