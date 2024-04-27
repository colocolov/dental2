// мобильное меню

//выпадающее меню для мобильных устройств
// раскоментироват если надо !!!!! ПРОВЕРИТЬ НА РАБОТОСПОСОБНОСТЬ КОДА
//document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  if (window.innerWidth > 900) {
    if (targetElement.classList.contains("menu__arrow")) {
      //console.log(targetElement);
      targetElement.closest(".menu__item").classList.toggle("_hover");
    }
    if (
      !targetElement.closest(".menu__item") &&
      document.querySelectorAll(".menu__item._hover").length > 0
    ) {
      // console.log("ehhh");
      // _removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
    }
  }
}

// стрелка для выпадающего меню
document.addEventListener('DOMContentLoaded', function() {
    const menuItemHasChildren = document.querySelectorAll('.menu-item-has-children');

    menuItemHasChildren.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное действие ссылки
            this.classList.toggle('_active'); // Добавляем или удаляем класс active при клике
            event.stopPropagation(); // Останавливаем всплытие события клика, чтобы не закрывать меню
        });

        // Добавляем обработчик клика на дочерние элементы меню, чтобы предотвратить закрытие меню
        const submenuItems = item.querySelectorAll('.menu__item');
        submenuItems.forEach(function(subitem) {
            subitem.addEventListener('click', function(event) {
                event.stopPropagation(); // Останавливаем всплытие события клика на дочерних элементах
            });
        });
    });

    // Добавляем обработчик события на документ, чтобы закрывать открытые меню при клике вне меню
    document.addEventListener('click', function(event) {
        menuItemHasChildren.forEach(function(item) {
            if (!item.contains(event.target)) { // Проверяем, является ли цель клика дочерним элементом меню
                item.classList.remove('_active'); // Удаляем класс active у всех элементов
            }
        });
    });
});





// проверка, является ли уствройство мобильным
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  // document.querySelector('html').classList.add('_touch');
  document.body.classList.add("_touch");
}

// меню бургер
const body = document.querySelector(".page__body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");
if (iconMenu) {
  iconMenu.addEventListener("click", (e) => {
    body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// закрытие при клике
if (menuLink.length) {
  menuLink.forEach((item) => {
    item.addEventListener("click", () => {
      removeActiveClass();
    });
  });
}

function removeActiveClass() {
  body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}
