console.log('Task-2');
// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Тестирование функции
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false
console.log(checkStringLength('короткий текст', 15)); // true
console.log(checkStringLength('оченьдлиннаястрока', 10)); // false

// Проверка палиндрома
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/\s+/g, ''); // Приводим строку к нижнему регистру и удаляем пробелы
  const reversedStr = cleanedStr.split('').reverse().join(''); // Создаем перевернутую строку
  return cleanedStr === reversedStr; // Сравниваем исходную и перевернутую строки
}

// Тестирование функции
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
console.log(isPalindrome('А роза упала на лапу Азора')); // true
console.log(isPalindrome('привет')); // false
