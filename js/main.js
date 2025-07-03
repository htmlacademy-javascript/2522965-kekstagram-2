function generateRandomDescription() { // Возвращаю случайное описание фотки
  const descriptions = [
    "Закат на море",
    "Домик в лесу",
    "Горный пейзаж над рекой",
    "Лесные осенние тропы",
    "Цветочный сад",
    "Закат над озером",
    "Песчаный пляж",
    "Милые котики",
    "Семейный ужин",
    "Встреча с друзьями"
  ];

  return descriptions[Math.floor(Math.random() * descriptions.length)]; // возвращаю случайное описание
}

function generateRandomLikes() {
  return Math.floor(Math.random() * 186) + 15; // Выбор лучайного числа от 15 до 200
}

function createCounter() {
  let count = 0;
  count = Math.floor(Math.random() * 31);
}

function generateRandomComments(count) { // надо ли тут число каунт зарандомить от какого то до какого то? Временная вариация
  const comments = [];
  const messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
  ];
  const names = ["Артём", "Алёна", "Петя", "Анна", "Анатолий", "Елена"];

  for (let i = 0; i < count; i++) {
    const comment = {
      id: i + 1,
      avatar: `img/avatar-${Math.floor(Math.random() * 6) + 1}.svg`,
      message: messages[Math.floor(Math.random() * messages.length)],
      name: names[Math.floor(Math.random() * names.length)]
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
