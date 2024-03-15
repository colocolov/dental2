const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      // задержка на выполнение кода
      setTimeout(() => {
        entry.target.classList.add('show');
      }, 300);        
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElement = document.querySelector('.about__sticks');
// console.log(hiddenElemet);

observer.observe(hiddenElement);


// для множества элементов
// hiddenElement.forEach((el) => observer.observe(el));