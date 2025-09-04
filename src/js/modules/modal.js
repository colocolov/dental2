// Получаем элементы
const modal = document.getElementById('modal');

if (modal) {

  const openModalBtns = document.querySelectorAll('.openModalBtn');
  const closeModalBtn = document.getElementById('closeModal');
  const submitBtn = document.getElementById('submit');
  const socialLink = document.querySelectorAll('.social__icon');
  const phoneInput = document.getElementById('phone');
  const body = document.body;

  // Функция закрытия окна
  function closeModal() {
    modal.classList.remove("open");
    body.classList.remove("_lock");
  }

  // Функция обновления скрытого поля
  function updateJaluziType() {
    const activeSlide = document.querySelector('.swiper-pagination-bullet-active');
    const jaluziType = activeSlide?.dataset.jaluziType || 'Не указано';
    console.log(activeSlide);
    
    // Для CF7 формы
    const form = document.querySelector('.wpcf7-form');
    if(form) {
        const hiddenField = form.querySelector('[name="jaluzi-type"]');
      if (hiddenField) hiddenField.value = activeSlide;
      console.log(activeSlide);
    }
  }

  // Открытие модального окна при клике на кнопку
  openModalBtns.forEach(button => {
    button.onclick = function () {
      modal.classList.add('open');
      body.classList.add('_lock');
      phoneInput.value = "";
      updateJaluziType();      
    };
  });

  // Закрытие модального окна при клике на крестик
  closeModalBtn.onclick = function() {
    closeModal();
  };

  // Закрытие модального окна при клике на фон
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  // Закрытие при клике на соц.сети
  if (socialLink.length) {
    socialLink.forEach((item) => {
      item.addEventListener("click", () => {
        closeModal();
      });
    });
  }


  // Закрытие модального окна про клавише Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeModal();
    }
  });

  // Фиксируем код страны +373 при фокусе
    if (phoneInput) {

        phoneInput.addEventListener("input", function (e) {
            let value = phoneInput.value.replace(/\D/g, ""); // Убираем все не-цифры
            // value = value.replace(/^373/, ""); // Убираем лишний код страны
            // value = value.trim(); // Убираем случайные пробелы

            // Ограничиваем длину номера 8 цифрами
            if (value.length > 9) {
                value = value.substring(0, 9);
            }

            // Форматируем номер с пробелами: +373 XX XXXXXXX
            let formatted = "";
            for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 3 === 0) {
                    formatted += " ";
                }
                formatted += value[i];
            }
            
            this.value = formatted;
        });
    }

  

  // Закрытие окна через 5 секунд после успешной отправки формы
  document.addEventListener('wpcf7mailsent', function () { 
    setTimeout(() => { 
        closeModal(); 
    }, 5000); 
  }, false);


}