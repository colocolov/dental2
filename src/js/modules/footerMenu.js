document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 768) {
        const accordionHeaders = document.querySelectorAll('.footer__head');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionItem = this.parentElement;
                const isActive = accordionItem.classList.contains('active');

                closeAllAccordionItems();

                if (!isActive) {
                    accordionItem.classList.add('active');
                    const accordionContent = accordionItem.querySelector('.footer__list');
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
            });
        });
      
        // Открытие первого блока аккордеона
        const firstAccordionItem = document.querySelector('.footer__part');
        firstAccordionItem.classList.add('active');
        const firstAccordionContent = firstAccordionItem.querySelector('.footer__list');
        firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px';

        function closeAllAccordionItems() {
            const accordionItems = document.querySelectorAll('.footer__part');

            accordionItems.forEach(item => {
                item.classList.remove('active');
                const accordionContent = item.querySelector('.footer__list');
                accordionContent.style.maxHeight = null;
            });
        }
    }
});
