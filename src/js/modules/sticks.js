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

const hiddenElement = document.querySelector('.sticks--hide');
// console.log(hiddenElemet);

if (hiddenElement) {
  observer.observe(hiddenElement);
}


// для множества элементов
// hiddenElement.forEach((el) => observer.observe(el));