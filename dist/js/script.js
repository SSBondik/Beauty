/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  document.addEventListener('click', event => {
    const target = event.target;
    let modal = '';
    //Модальное окно консультации
    if (target === consultationModalBtn[0] && consultationModal.classList.contains('hide') || target === consultationModalBtn[1] && consultationModal.classList.contains('hide')) {
      modal = consultationModal;
      openModal(modal);
    }
    if (target === consultationClose && !consultationModal.classList.contains('hide') || target === consultationModal) {
      modal = consultationModal;
      closeModal(modal);
    }
    //Модальное окно ДОСТАВКА И ОПЛАТА
    if (target === deliveryModalBtn[0] && deliveryModal.classList.contains('hide') || target === deliveryModalBtn[1] && deliveryModal.classList.contains('hide')) {
      modal = deliveryModal;
      openModal(modal);
    }
    if (target === deliveryClose && !deliveryModal.classList.contains('hide') || target === deliveryModal) {
      modal = deliveryModal;
      closeModal(modal);
    }
    //Модальное окно Політика Конфіденційності
    if (target === confidentialityModalBtn && confidentialityModal.classList.contains('hide')) {
      modal = confidentialityModal;
      openModal(modal);
    }
    if (target === confidentialityClose && !confidentialityModal.classList.contains('hide') || target === confidentialityModal) {
      modal = confidentialityModal;
      closeModal(modal);
    }
    //Модальное окно Договiр Оферти
    if (target === contractModalBtn && contractModal.classList.contains('hide')) {
      modal = contractModal;
      openModal(modal);
    }
    if (target === contractClose && !contractModal.classList.contains('hide') || target === contractModal) {
      modal = contractModal;
      closeModal(modal);
    }
    //Корзина товаров
    purchaseBtnBue.forEach(btn => {
      if (target === btn && purchaseModal.classList.contains('hide')) {
        modal = purchaseModal;
        openModal(modal);
      }
    });
    if (target === purchaseClose && !purchaseModal.classList.contains('hide') || target === purchaseModal) {
      modal = purchaseModal;
      closeModal(modal);
    }
  });
  // Функция открытия модального окна
  function openModal(modal) {
    modal.classList.toggle('hide');
    document.body.style.overflow = 'hidden';
  }
  // Функция закрытия модального окна
  function closeModal(modal) {
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
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('showFlex', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('catalog__tab_active');
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains('catalog__tab')) {
      tabs.forEach((item, i) => {
        if (item == target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Окно товара
  overlayDescr.forEach(item => {
    item.addEventListener('click', () => {
      overlayItem.classList.toggle('hide');
    });
  });
  overlayClose.addEventListener('click', () => {
    overlayItem.classList.toggle('hide');
  });
  document.addEventListener('click', event => {
    if (event.target == overlayItem) {
      overlayItem.classList.toggle('hide');
    }
  });

  //Подсчёт стоимости
  const price = Number(priceItem.innerHTML);
  let totalPrice = price;
  let productQuantity = amount.innerHTML;
  document.addEventListener('click', event => {
    const target = event.target;
    if (target === increaseBtn) {
      productQuantity++;
      amount.innerHTML = productQuantity;
      totalPrice += price;
      priceItem.innerHTML = totalPrice;
    }
    if (target === decreaseBtn && productQuantity > 1) {
      productQuantity--;
      amount.innerHTML = productQuantity;
      totalPrice -= price;
      priceItem.innerHTML = totalPrice;
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map