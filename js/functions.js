console.log('Task-5');
// Проверяю, укладывается ли встреча в рабочий день
function isMeetingWithinWorkingHours(startWork, endWork, meetingStart, duration) {
  function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  } // Разбиваю строку по символу ":", преобразую часы и минуты в числа, вычисляб общее кол-во минут

  // Конвертирую все временные метки в минуты
  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  // Проверяю, что встреча начинается не раньше начала рабочего дня
  // и заканчивается не позже конца рабочего дня
  return (
    meetingStartMinutes >= startWorkMinutes &&
    meetingEndMinutes <= endWorkMinutes
  );
}

// Тестирование функции
console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120)); // true
console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90)); // false
console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900)); // false
