import {getRandomInteger, getRandomArrayElement} from './utils.js';
import { DESCRIPTIONS, MAX_AVATAR, MAX_COMMENT, MAX_LIKES, MESSAGES, MIN_AVATAR, MIN_COMMENT, MIN_LIKES, NAMES, PHOTOS_COUNT } from "./constants.js";

function generateRandomDescription() { // Возвращаю случайное описание фотки
  return DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)]; // возвращаю случайное описание
}

// Замыкание для идентификатора id комментатора
const getCommentId = () => {
  const commentIdArr = [];
  return function () {
    let currentValue = Math.floor(Math.random() * 1000);
    while (commentIdArr.includes(currentValue)) {
      currentValue = Math.floor(Math.random() * 1000);
    }
    commentIdArr.push(currentValue);
    return currentValue;
  };
};

const commentId = getCommentId();

// Комментарии
const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Замыкание для создания id
const makeCounter = function () {
  let value = 0;
  return {
    increment: function () {
      return ++value;
    },
  };
};

// Посты
const counterPostId = makeCounter();
const counterPostUrl = makeCounter();

const createPost = () => ({
  id: counterPostId.increment(),
  url: `photos/${counterPostUrl.increment()}.jpg`,
  description: generateRandomDescription(),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  similarComments: Array.from({length: getRandomInteger(MIN_COMMENT, MAX_COMMENT)}, createComment),
});

const createPosts = () => Array.from({length: PHOTOS_COUNT}, createPost);
export {createPosts};
