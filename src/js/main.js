'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const consultationModal = document.querySelector('.consultation'),
          consultationModalBtn = document.querySelectorAll('[data-consultation]'),
          consultationClose = document.querySelector('[data-consultationClose]'),
          deliveryModal = document.querySelector('.delivery'),
          deliveryModalBtn = document.querySelectorAll('[data-deliveryBtn]'),
          deliveryClose = document.querySelector('[data-deliveryClose]'),
          returnModal = document.querySelector('.return'),
          returnModalBtn = document.querySelector('[data-returnBtn]'),
          returnClose = document.querySelector('[data-returnClose]'),
          confidentialityModal = document.querySelector('.confidentiality'),
          confidentialityModalBtn = document.querySelector('[data-confidentialityBtn]'),
          confidentialityClose = document.querySelector('[data-confidentialityClose]'),
          contractModal = document.querySelector('.contract'),
          contractModalBtn = document.querySelector('[data-contractBtn]'),
          contractClose = document.querySelector('[data-contractClose]'),
          tabs = document.querySelectorAll('.catalog__tab'),
          tabsContent = document.querySelectorAll('.catalog__content'),
          tabsParent = document.querySelector('.catalog__tabs'),
          overlayItem = document.querySelector('.overlay'),
          overlayBtn = document.querySelectorAll('.catalog-item__btn'),
          overlayClose = overlayItem.querySelector('.overlay__close'),
          increaseBtn = document.querySelector('.overlay__count-increase'),
          decreaseBtn = document.querySelector('.overlay__count-decrease'),
          amount = document.querySelector('.overlay__count-amount'),
          priceItem = document.querySelector('.overlay__count-price');

    //МОДАЛЬНЫЕ ОКНА
    document.addEventListener('click', (event) => {
        const target = event.target;
        let modal = '';
        //Модальное окно консультации
        if(target === consultationModalBtn[0] && consultationModal.classList.contains('hide') || target === consultationModalBtn[1] && consultationModal.classList.contains('hide') ) {
            modal = consultationModal;
            openModal(modal);
        }
        if(target === consultationClose && !consultationModal.classList.contains('hide') || target === consultationModal) {
            modal = consultationModal;
            closeModal(modal);
        }
        //Модальное окно ДОСТАВКА И ОПЛАТА
        if(target === deliveryModalBtn[0] && deliveryModal.classList.contains('hide') || target === deliveryModalBtn[1] && deliveryModal.classList.contains('hide')) {
            modal = deliveryModal;
            openModal(modal);
        }
        if(target === deliveryClose && !deliveryModal.classList.contains('hide') || target === deliveryModal) {
            modal = deliveryModal;
            closeModal(modal);
        }
        //Модальное окно ВОЗВРАТ И ГАРАНТИЯ
        if(target === returnModalBtn && returnModal.classList.contains('hide')) {
            modal = returnModal;
            openModal(modal);
        }
        if(target === returnClose && !returnModal.classList.contains('hide') || target === returnModal) {
            modal = returnModal;
            closeModal(modal);
        }
        //Модальное окно Політика Конфіденційності
        if(target === confidentialityModalBtn && confidentialityModal.classList.contains('hide')) {
            modal = confidentialityModal;
            openModal(modal);
        }
        if(target === confidentialityClose && !confidentialityModal.classList.contains('hide') || target === confidentialityModal) {
            modal = confidentialityModal;
            closeModal(modal);
        }
        //Модальное окно Договiр Оферти
        if(target === contractModalBtn && contractModal.classList.contains('hide')) {
            modal = contractModal;
            openModal(modal);
        }
        if(target === contractClose && !contractModal.classList.contains('hide') || target === contractModal) {
            modal = contractModal;
            closeModal(modal);
        }
    });
    // Функция открытия модального окна
    function openModal(modal){
        modal.classList.toggle('hide');
        document.body.style.overflow = 'hidden';
    }
    // Функция закрытия модального окна
    function closeModal(modal){
        modal.classList.toggle('hide');
        document.body.style.overflow = '';
    }

    //КАТАЛОГ
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('showFlex', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('catalog__tab_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event) => {
        const target = event.target;

        if(target && target.classList.contains('catalog__tab')) {
            tabs.forEach((item, i) => {
                if(item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Окно товара
    overlayBtn.forEach(item => {
        item.addEventListener('click',() => {
            overlayItem.classList.toggle('hide');
        });
    });
    overlayClose.addEventListener('click', () => {
        overlayItem.classList.toggle('hide');
    });
    document.addEventListener('click',(event) => {
        if(event.target == overlayItem) {
            overlayItem.classList.toggle('hide');
        }
    });

    //Подсчёт стоимости
    const price = Number(priceItem.innerHTML);
    let totalPrice = price;
    
    increaseBtn.addEventListener('click',() => {
        let i = amount.innerHTML;
        i++;
        amount.innerHTML = i;
        totalPrice += price;
        priceItem.innerHTML = totalPrice;
    });

    decreaseBtn.addEventListener('click',() => {
        let i = amount.innerHTML;
        if(i == 1) {
            return i;
        } else {
            i--;
            amount.innerHTML = i;
            totalPrice -= price;
            priceItem.innerHTML = totalPrice;
        }
        
    });
});