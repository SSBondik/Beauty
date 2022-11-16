'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const consultationModal = document.querySelector('.consultation'),
          consultationModalBtn = document.querySelectorAll('[data-consultation]'),
          consultationClose = document.querySelector('[data-consultationClose]'),
          deliveryModal = document.querySelector('.delivery'),
          deliveryModalBtn = document.querySelectorAll('[data-deliveryBtn]'),
          deliveryClose = document.querySelector('[data-deliveryClose]'),
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
          overlayDescr = document.querySelectorAll('[data-descr]'),
          overlayClose = overlayItem.querySelector('.overlay__close'),
          increaseBtn = document.querySelector('.purchase__count-increase'),
          decreaseBtn = document.querySelector('.purchase__count-decrease'),
          amount = document.querySelector('.purchase__count-amount'),
          priceItem = document.querySelector('.purchase__price-num'),
          purchaseModal = document.querySelector('.purchase'),
          purchaseBtnBue = document.querySelectorAll('[data-purchaseBtnBue]'),
          purchaseClose = document.querySelector('.purchase__close');

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
        //Корзина товаров
        purchaseBtnBue.forEach( btn => {
            if(target === btn && purchaseModal.classList.contains('hide')) {
                modal = purchaseModal;
                openModal(modal);
            }
        });
        
        if(target === purchaseClose && !purchaseModal.classList.contains('hide') || target === purchaseModal) {
            modal = purchaseModal;
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
    overlayDescr.forEach(item => {
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
    let productQuantity = amount.innerHTML;

    document.addEventListener('click',(event => {
        const target = event.target;
        if(target === increaseBtn) {
        productQuantity++;
        amount.innerHTML = productQuantity;
        totalPrice += price;
        priceItem.innerHTML = totalPrice;
        }
        if(target === decreaseBtn && productQuantity > 1) {
            productQuantity--;
            amount.innerHTML = productQuantity;
            totalPrice -= price;
            priceItem.innerHTML = totalPrice;
        }
    }));
});