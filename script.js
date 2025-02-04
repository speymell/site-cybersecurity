document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header__hamburger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const body = document.body;

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active"); // Добавляем/убираем класс active
    mobileMenu.classList.toggle("active"); // Открываем/закрываем мобильное меню
    body.classList.toggle("menu-open"); // Отключаем/включаем прокрутку
  });

  // Закрытие меню при клике вне его
  mobileMenu.addEventListener("click", function (event) {
    if (event.target === mobileMenu) {
      mobileMenu.classList.remove("active"); // Закрываем мобильное меню
      hamburger.classList.remove("active"); // Убираем класс active у бургера
      body.classList.remove("menu-open"); // Включаем прокрутку
    }
  });

  const contactButton = document.getElementById("contactButton");
  contactButton.addEventListener("click", function () {
    // Создаем модальное окно
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal__content");

    const closeModal = document.createElement("span");
    closeModal.classList.add("modal__close");
    closeModal.innerHTML = "&times;";

    const title = document.createElement("h2");
    title.textContent = "Контакты";

    const address = document.createElement("p");
    address.innerHTML = "<strong>Адрес:</strong> адрес";

    const email = document.createElement("p");
    email.innerHTML = "<strong>Почта:</strong> example@example.com";

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Телефон:</strong> +1 (234) 567-890";

    const hours = document.createElement("p");
    hours.innerHTML = "<strong>Часы работы:</strong> Пн-Пт: 9:00 - 18:00";

    // Добавляем элементы в модальное окно
    modalContent.appendChild(closeModal);
    modalContent.appendChild(title);
    modalContent.appendChild(address);
    modalContent.appendChild(email);
    modalContent.appendChild(phone);
    modalContent.appendChild(hours);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Отображаем модальное окно
    modal.style.display = "block";

    // Закрытие модального окна
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.removeChild(modal); // Удаляем модальное окно из DOM
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.removeChild(modal); // Удаляем модальное окно из DOM
      }
    });
  });

  function updateContent() {
    const aboutContent = document.getElementById("aboutContent");
    if (window.innerWidth < 720) {
      aboutContent.innerHTML = `<h2 class='about__header'>Почему мы?</h2><p class='about__info'><span>Наша команда</span> состоит из высококвалифицированных специалистов с многолетним опытом работы в области кибербезопасности.</p><p class='about__info'><span>Гарантируем конфиденциальность</span> и сохранность ваших данных, а также оперативное реагирование на любые инциденты.</p><p class='about__info'>Учитываем <span>специфику вашего бизнеса</span> и разрабатываем решения, которые наилучшим образом соответствуют вашим потребностям.</p>`;
    } else {
      aboutContent.innerHTML = "";
    }
  }

  // Обновляем контент при загрузке страницы
  updateContent();

  // Обновляем контент при изменении размера окна
  window.addEventListener("resize", updateContent);
});
