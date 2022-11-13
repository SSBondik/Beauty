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
    returnModal = document.querySelector('.return'),
    returnModalBtn = document.querySelector('[data-returnBtn]'),
    returnClose = document.querySelector('[data-returnClose]'),
    confidentialityModal = document.querySelector('.confidentiality'),
    confidentialityModalBtn = document.querySelector('[data-confidentialityBtn]'),
    confidentialityClose = document.querySelector('[data-confidentialityClose]'),
    contractModal = document.querySelector('.contract'),
    contractModalBtn = document.querySelector('[data-contractBtn]'),
    contractClose = document.querySelector('[data-contractClose]');
  document.addEventListener('click', e => {
    let modal = '';
    //Модальное окно консультации
    if (e.target === consultationModalBtn[0] && consultationModal.classList.contains('hide') || e.target === consultationModalBtn[1] && consultationModal.classList.contains('hide')) {
      modal = consultationModal;
      openModal(modal);
    }
    if (e.target === consultationClose && !consultationModal.classList.contains('hide') || e.target === consultationModal) {
      modal = consultationModal;
      closeModal(modal);
    }
    //Модальное окно ДОСТАВКА И ОПЛАТА
    if (e.target === deliveryModalBtn[0] && deliveryModal.classList.contains('hide') || e.target === deliveryModalBtn[1] && deliveryModal.classList.contains('hide')) {
      modal = deliveryModal;
      openModal(modal);
    }
    if (e.target === deliveryClose && !deliveryModal.classList.contains('hide') || e.target === deliveryModal) {
      modal = deliveryModal;
      closeModal(modal);
    }
    //Модальное окно ВОЗВРАТ И ГАРАНТИЯ
    if (e.target === returnModalBtn && returnModal.classList.contains('hide')) {
      modal = returnModal;
      openModal(modal);
    }
    if (e.target === returnClose && !returnModal.classList.contains('hide') || e.target === returnModal) {
      modal = returnModal;
      closeModal(modal);
    }
    //Модальное окно Політика Конфіденційності
    if (e.target === confidentialityModalBtn && confidentialityModal.classList.contains('hide')) {
      modal = confidentialityModal;
      openModal(modal);
    }
    if (e.target === confidentialityClose && !confidentialityModal.classList.contains('hide') || e.target === confidentialityModal) {
      modal = confidentialityModal;
      closeModal(modal);
    }
    //Модальное окно Договiр Оферти
    if (e.target === contractModalBtn && contractModal.classList.contains('hide')) {
      modal = contractModal;
      openModal(modal);
    }
    if (e.target === contractClose && !contractModal.classList.contains('hide') || e.target === contractModal) {
      modal = contractModal;
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
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map