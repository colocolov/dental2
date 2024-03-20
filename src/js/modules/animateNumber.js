function animateNumber(element, targetNumber, duration) {
    const startNumber = 0; // Начинаем с нуля
    const steps = targetNumber; // Количество шагов равно целевому числу
    const increment = Math.ceil(targetNumber / (duration / 10));
    let currentNumber = startNumber;

    const interval = setInterval(function() {
      if (currentNumber < targetNumber) {
        currentNumber += 1; // Увеличиваем на 1
        element.innerText = currentNumber;
      } else {
        clearInterval(interval);
      }
    }, duration / steps);
  }

  const numbers = document.querySelectorAll('.number');
  if (numbers) {
    numbers.forEach((number, index) => {
      const targetNumber = parseInt(number.innerText); // Получаем конечное число из <div>
      setTimeout(() => {
        animateNumber(number, targetNumber, 1000); // Продолжительность анимации: 3 секунды
      }, index * 500); // Задержка перед началом анимации каждого числа: 500 мс
    });
  }