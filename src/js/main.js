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
          contractClose = document.querySelector('[data-contractClose]');

    document.addEventListener('click', (e) => {
        let modal = '';
        //Модальное окно консультации
        if(e.target === consultationModalBtn[0] && consultationModal.classList.contains('hide') || e.target === consultationModalBtn[1] && consultationModal.classList.contains('hide') ) {
            modal = consultationModal;
            openModal(modal);
        }
        if(e.target === consultationClose && !consultationModal.classList.contains('hide') || e.target === consultationModal) {
            modal = consultationModal;
            closeModal(modal);
        }
        //Модальное окно ДОСТАВКА И ОПЛАТА
        if(e.target === deliveryModalBtn[0] && deliveryModal.classList.contains('hide') || e.target === deliveryModalBtn[1] && deliveryModal.classList.contains('hide')) {
            modal = deliveryModal;
            openModal(modal);
        }
        if(e.target === deliveryClose && !deliveryModal.classList.contains('hide') || e.target === deliveryModal) {
            modal = deliveryModal;
            closeModal(modal);
        }
        //Модальное окно ВОЗВРАТ И ГАРАНТИЯ
        if(e.target === returnModalBtn && returnModal.classList.contains('hide')) {
            modal = returnModal;
            openModal(modal);
        }
        if(e.target === returnClose && !returnModal.classList.contains('hide') || e.target === returnModal) {
            modal = returnModal;
            closeModal(modal);
        }
        //Модальное окно Політика Конфіденційності
        if(e.target === confidentialityModalBtn && confidentialityModal.classList.contains('hide')) {
            modal = confidentialityModal;
            openModal(modal);
        }
        if(e.target === confidentialityClose && !confidentialityModal.classList.contains('hide') || e.target === confidentialityModal) {
            modal = confidentialityModal;
            closeModal(modal);
        }
        //Модальное окно Договiр Оферти
        if(e.target === contractModalBtn && contractModal.classList.contains('hide')) {
            modal = contractModal;
            openModal(modal);
        }
        if(e.target === contractClose && !contractModal.classList.contains('hide') || e.target === contractModal) {
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



});