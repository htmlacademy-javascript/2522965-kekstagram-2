import { DESCRIPTIONS, MAX_AVATAR, MAX_COMMENT, MAX_LIKES, MESSAGES, MIN_AVATAR, MIN_COMMENT, MIN_LIKES, NAMES, PHOTOS_COUNT } from "./constants.js";
import { getRandomPositiveInteger } from "./utils.js";

function generateRandomDescription() { // Возвращаю случайное описание фотки
  return DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)]; // возвращаю случайное описание
}

function generateRandomLikes() {
  return getRandomPositiveInteger(MIN_LIKES, MAX_LIKES);
}

function generateRandomComments() { // надо ли тут число каунт зарандомить от какого то до какого то? Временная вариация
  const comments = [];
  const count = getRandomPositiveInteger(MIN_COMMENT, MAX_COMMENT);

  for (let i = 1; i <= count; i++) {
    const comment = {
      id: i,
      avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
    };
    comments.push(comment);
  }
  return comments;
}

function generatePhoto(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: generateRandomDescription(),
    likes: generateRandomLikes(),
    comments: generateRandomComments()
  };
}

export const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(generatePhoto(i));
  }
  return photos;
};
