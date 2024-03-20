const showMore = document.getElementById('showMoreBtn');
if (showMore) {
    showMore.addEventListener('click', function () {
        var content = document.querySelector('.hero-serv__text');
        content.classList.toggle('expanded');
        this.style.display = 'none'; // Скрыть кнопку после раскрытия текста
    });
}