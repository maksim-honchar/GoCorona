const menuIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu-header__nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
};


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px', // Менша відстань виглядає солідніше
    duration: 2000,
    delay: 400,
    mobile: false,
    // reset: false // Професіонали зазвичай не дублюють анімацію при скролі вгору
});

sr.reveal('.container-header__body', { distance: '0', opacity: 0 });

// Заголовок та текст
sr.reveal('.get-started__block-text', { origin: 'left', distance: '50px' });
// Картинка з лікарем — дуже плавна поява справа
sr.reveal('.get-started__image', { origin: 'right', distance: '50px', delay: 600 });
// Кнопка Play — тільки легка прозорість, щоб не "літала"
sr.reveal('.get-started__play-icon', { distance: '0', delay: 800 });


sr.reveal('.stay-safe__app-image', { origin: 'left' });
sr.reveal('.stay-safe__content', { origin: 'right' });
// Червоні декор-елементи — не рухаємо, тільки Scale (вони ніби "виростають")
sr.reveal('.stay-safe__app-decor', {
    distance: '0',
    scale: 0.5,
    interval: 200,
    delay: 700
});

sr.reveal('.stat-experts__item', {
    interval: 150,
    origin: 'bottom',
    distance: '20px'
});
// Текст і відео в цій секції
sr.reveal('.experts__block-text-wrapper', { origin: 'left' });
sr.reveal('.experts__video-wrapper', { origin: 'right' });

sr.reveal('.healthcare__item-base', {
    interval: 200,
    origin: 'bottom',
    distance: '40px',
    viewFactor: 0.2 // Почнеться, коли лише 20% картки з'явиться у в'юпорті
});