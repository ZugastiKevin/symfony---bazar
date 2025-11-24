(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/form */ "./assets/scripts/form.js");
/* harmony import */ var _scripts_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_reset_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/reset-btn */ "./assets/scripts/reset-btn.js");
/* harmony import */ var _scripts_reset_btn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_reset_btn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/dropdown.js */ "./assets/scripts/dropdown.js");
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */





window.htmx = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/scripts/dropdown.js":
/*!************************************!*\
  !*** ./assets/scripts/dropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function attachHoverDropdown(toggleSelector) {
  var toggles = document.querySelectorAll(toggleSelector);
  toggles.forEach(function (toggle) {
    var targetSelector = toggle.dataset.dropdownTarget;
    if (!targetSelector) return;
    var dropdownContent = document.querySelector(targetSelector);
    if (!dropdownContent) return;
    var hideTimeout = null;
    var showDropdown = function showDropdown() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      dropdownContent.style.display = "flex";
      dropdownContent.style.animation = "show-content 0.25s ease forwards";
      toggle.classList.add("dropdown-open");
    };
    var reallyHideDropdown = function reallyHideDropdown() {
      dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
      var _handler = function handler(event) {
        if (event.animationName === "dont-show-content") {
          dropdownContent.style.display = "none";
          toggle.classList.remove("dropdown-open");
          dropdownContent.removeEventListener("animationend", _handler);
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    var hideDropdown = function hideDropdown() {
      hideTimeout = setTimeout(reallyHideDropdown, 150);
    };
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);
  });
}
function attachNavbarDropdown() {
  var toggle = document.querySelector(".navbar-dropdown-toggle");
  var navbarMenu = document.querySelector(".navbar_menu");
  var navbarContainer = document.querySelector(".dropdown-navbar");
  if (!toggle || !navbarMenu || !navbarContainer) return;
  var targetSelector = toggle.dataset.dropdownTarget;
  if (!targetSelector) return;
  var dropdownContent = document.querySelector(targetSelector);
  if (!dropdownContent) return;
  var regionEls = [toggle, navbarContainer, dropdownContent];
  var hideTimeout = null;
  var isClosing = false;
  var isInRegion = function isInRegion(el) {
    return regionEls.some(function (node) {
      return node && node.contains(el);
    });
  };
  var showAll = function showAll() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    isClosing = false;
    dropdownContent.style.display = "flex";
    dropdownContent.style.animation = "show-content 0.25s ease forwards";
    toggle.classList.add("dropdown-open");
    navbarMenu.classList.remove("navbar-menu-anim-show");
    navbarMenu.classList.add("navbar-menu-anim-hide");
    navbarContainer.style.display = "flex";
    navbarContainer.classList.remove("dropdown-navbar-anim-hide");
    navbarContainer.classList.add("dropdown-navbar-anim-show");
  };
  var reallyHideAll = function reallyHideAll() {
    isClosing = true;
    dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
    var _handler2 = function handler(event) {
      if (event.animationName === "dont-show-content") {
        if (!isClosing) {
          dropdownContent.removeEventListener("animationend", _handler2);
          return;
        }
        dropdownContent.style.display = "none";
        toggle.classList.remove("dropdown-open");
        dropdownContent.removeEventListener("animationend", _handler2);
      }
    };
    dropdownContent.addEventListener("animationend", _handler2);
    navbarContainer.classList.remove("dropdown-navbar-anim-show");
    navbarContainer.classList.add("dropdown-navbar-anim-hide");
    navbarMenu.classList.remove("navbar-menu-anim-hide");
    navbarMenu.classList.add("navbar-menu-anim-show");
  };
  var onLeaveRegion = function onLeaveRegion(event) {
    var to = event.relatedTarget;
    if (to && isInRegion(to)) return;
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(reallyHideAll, 150);
  };
  regionEls.forEach(function (el) {
    el.addEventListener("mouseenter", showAll);
    el.addEventListener("mouseleave", onLeaveRegion);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  attachNavbarDropdown();
  attachHoverDropdown(".language-dropdown-toggle");
  attachHoverDropdown(".theme-dropdown-toggle");
});

/***/ }),

/***/ "./assets/scripts/form.js":
/*!********************************!*\
  !*** ./assets/scripts/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
var selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');

// ========================
// FONCTIONS D'INPUT
// ========================
function initInput(inputEl) {
  var wrapper = inputEl.closest('span') || inputEl.parentElement;
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);
}
function onFocus(ev) {
  var parent = ev.target.closest('span') || ev.target.parentElement;
  if (parent && parent.classList) {
    parent.classList.add('inputs--filled');
  }
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (input.value.trim() === '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--filled');
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
}
function liveValidation(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (!input.checkValidity()) {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  }
}

// ========================
// VALIDATEURS PERSONNALISÉS
// ========================
var validators = {};
var validationTimers = {}; // Stockage des timers

function registerValidator(inputId, errorId, validateFn) {
  validators[inputId] = {
    errorId: errorId,
    validateFn: validateFn
  };
}
function runValidator(inputId) {
  var config = validators[inputId];
  if (!config) return true;
  var input = document.getElementById(inputId);
  var errorBox = document.getElementById(config.errorId);
  if (!input || !errorBox) return true;
  var wrapper = input.closest('span') || input.parentElement;
  errorBox.style.visibility = 'hidden';
  errorBox.textContent = '';
  wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  var result = config.validateFn(input.value, input);
  if (result !== true) {
    errorBox.textContent = result;
    errorBox.style.visibility = 'visible';
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
    return false;
  }
  return true;
}
function attachValidator(inputId) {
  var eventTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'blur'];
  var delayMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  var input = document.getElementById(inputId);
  if (!input) return;
  eventTypes.forEach(function (eventType) {
    if (eventType === 'input') {
      // Pour l'événement 'input', on ajoute un délai de 3 secondes
      input.addEventListener('input', function () {
        // Annuler le timer précédent s'il existe
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
        }

        // Créer un nouveau timer
        validationTimers[inputId] = setTimeout(function () {
          runValidator(inputId);
        }, delayMs);
      });
    } else {
      // Pour les autres événements (blur, change), validation immédiate
      input.addEventListener(eventType, function () {
        // Annuler le timer en cours si l'utilisateur quitte le champ
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    }
  });
}

// ========================
// DÉFINITION DES VALIDATIONS
// ========================

// Validation Pseudo (Name)
registerValidator('support_name', 'pseudo-error', function (value) {
  if (value.trim() === '') {
    return "Veuillez entrer votre pseudo.";
  }
  if (value.length < 3) {
    return "Le pseudo doit contenir au moins 3 caractères.";
  }
  return true;
});

// Validation Email
registerValidator('support_email', 'email-error', function (value, input) {
  if (value.trim() === '') {
    return "Veuillez saisir une adresse email.";
  }
  if (!input.checkValidity()) {
    return "Adresse email invalide.";
  }
  return true;
});

// Validation Select (Category)
registerValidator('support_category', 'selecte-error', function (value) {
  if (!value || value.trim() === '') {
    return "Veuillez choisir une catégorie.";
  }
  return true;
});

// Validation Textarea (Message)
registerValidator('support_message', 'text-area-error', function (value) {
  if (value.trim() === '') {
    return "Veuillez entrer un message.";
  }
  if (value.length < 10) {
    return "Le message doit contenir au moins 10 caractères.";
  }
  return true;
});

// Validation Image
registerValidator('support_imageFile', 'image-error', function (value, input) {
  var file = input.files[0];
  if (!file) return true;
  var allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  var max = 2 * 1024 * 1024;
  if (!allowed.includes(file.type)) {
    return "Formats autorisés : JPEG, JPG, PNG, WEBP.";
  }
  if (file.size > max) {
    return "Image trop volumineuse (max 2 Mo).";
  }
  return true;
});

// ========================
// VALIDATIONS FORMULAIRE UTILISATEUR
// ========================

// Validation Pseudo Utilisateur
registerValidator('user_pseudo', 'user_pseudo-error', function (value) {
  if (value.trim() === '') {
    return "Veuillez entrer votre pseudo.";
  }
  if (value.length < 3) {
    return "Le pseudo doit contenir au moins 3 caractères.";
  }
  return true;
});

// Validation Email Utilisateur
registerValidator('user_email', 'user_email-error', function (value, input) {
  if (value.trim() === '') {
    return "Veuillez saisir une adresse email.";
  }
  if (!input.checkValidity()) {
    return "Adresse email invalide.";
  }
  return true;
});

// Validation Mot de passe (utiliser les vrais IDs)
registerValidator('user_plainPassword_first', 'user_password_first-error', function (value) {
  if (value.trim() === '') {
    return "Veuillez entrer un mot de passe.";
  }
  if (value.length < 8) {
    return "Le mot de passe doit contenir au moins 8 caractères.";
  }

  // Vérifier majuscule
  if (!/[A-Z]/.test(value)) {
    return "Le mot de passe doit contenir au moins une majuscule.";
  }

  // Vérifier chiffre
  if (!/\d/.test(value)) {
    return "Le mot de passe doit contenir au moins un chiffre.";
  }

  // Vérifier caractère spécial
  if (!/[\W_]/.test(value)) {
    return "Le mot de passe doit contenir au moins un caractère spécial.";
  }
  return true;
});

// Validation Confirmation mot de passe (utiliser les vrais IDs)
registerValidator('user_plainPassword_second', 'user_password_second-error', function (value) {
  var firstPassword = document.getElementById('user_plainPassword_first');
  if (!firstPassword) return true;
  if (value.trim() === '') {
    return "Veuillez confirmer votre mot de passe.";
  }
  if (value !== firstPassword.value) {
    return "Les mots de passe ne correspondent pas.";
  }
  return true;
});

// ========================
// SOUMISSION DU FORMULAIRE
// ========================
function onSubmit(ev) {
  var hasError = false;

  // Annuler tous les timers en cours
  Object.keys(validationTimers).forEach(function (inputId) {
    clearTimeout(validationTimers[inputId]);
    delete validationTimers[inputId];
  });

  // Vérifier tous les validateurs enregistrés
  Object.keys(validators).forEach(function (inputId) {
    if (!runValidator(inputId)) {
      hasError = true;
    }
  });

  // Vérifier la validité HTML5 des champs sans validateur custom
  var form = ev.target;
  var inputs = form.querySelectorAll(selector);
  inputs.forEach(function (input) {
    // Ignorer les champs qui ont déjà un validateur custom
    if (validators[input.id]) return;
    var wrapper = input.closest('span') || input.parentElement;
    if (!input.checkValidity()) {
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
      hasError = true;
    } else {
      wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
    }
  });
  if (hasError) {
    ev.preventDefault();
  }
}

// ========================
// INITIALISATION
// ========================
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.all-form');
  var inputs = document.querySelectorAll(selector);

  // Initialiser les inputs de base
  inputs.forEach(function (input) {
    initInput(input);
    if (input.tagName === 'SELECT' && input.value) {
      var wrapper = input.closest('span') || input.parentElement;
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
    }
  });

  // Attacher les validateurs du formulaire de support
  attachValidator('support_name', ['input', 'blur'], 3000);
  attachValidator('support_email', ['input', 'blur'], 3000);
  attachValidator('support_category', ['change', 'blur'], 3000);
  attachValidator('support_message', ['input', 'blur'], 3000);
  attachValidator('support_imageFile', ['change'], 0);

  // Attacher les validateurs du formulaire utilisateur (avec les vrais IDs)
  attachValidator('user_pseudo', ['input', 'blur'], 3000);
  attachValidator('user_email', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher la validation au submit
  if (form) {
    form.addEventListener('submit', onSubmit);
  }
});

/***/ }),

/***/ "./assets/scripts/reset-btn.js":
/*!*************************************!*\
  !*** ./assets/scripts/reset-btn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.reset-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var input = button.previousElementSibling;
    if (input && input.dataset.original !== undefined) {
      input.value = input.dataset.original;
      input.dispatchEvent(new Event('change'));
    }
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-7a4696"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQzs7RUFFckU7RUFDQSxJQUFJN0IsSUFBSSxFQUFFO0lBQ05BLElBQUksQ0FBQ3BCLGdCQUFnQixDQUFDLFFBQVEsRUFBRWlFLFFBQVEsQ0FBQztFQUM3QztBQUNKLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNyVUZ4RixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQTZGLE1BQU0sRUFBSTtFQUN0REEsTUFBTSxDQUFDeEUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTWlDLEtBQUssR0FBR3VDLE1BQU0sQ0FBQ0Msc0JBQXNCO0lBQzNDLElBQUl4QyxLQUFLLElBQUlBLEtBQUssQ0FBQ25ELE9BQU8sQ0FBQzRGLFFBQVEsS0FBS3JCLFNBQVMsRUFBRTtNQUMvQ3BCLEtBQUssQ0FBQ1AsS0FBSyxHQUFHTyxLQUFLLENBQUNuRCxPQUFPLENBQUM0RixRQUFRO01BQ3BDekMsS0FBSyxDQUFDMEMsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtJztcbmltcG9ydCAnLi9zY3JpcHRzL3Jlc2V0LWJ0bic7XG5pbXBvcnQgJy4vc2NyaXB0cy9kcm9wZG93bi5qcyc7XG5pbXBvcnQgJ2h0bXgub3JnJztcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XG5cbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XG5cbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVhbGx5SGlkZURyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xuXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xuXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xuXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBpc0luUmVnaW9uID0gKGVsKSA9PlxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XG5cbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTtcblxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XG5cbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XG5cbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlYWxseUhpZGVBbGwgPSAoKSA9PiB7XG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XG5cbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcblxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcblxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0byA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZUFsbCwgMTUwKTtcbiAgICB9O1xuXG4gICAgcmVnaW9uRWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcbiAgICB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XG59KTtcbiIsImNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT05DVElPTlMgRCdJTlBVVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dEVsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgfVxuXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XG59XG5cbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25CbHVyKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRFVVJTIFBFUlNPTk5BTElTw4lTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xuXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xufVxuXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRvcnNbaW5wdXRJZF07XG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcblxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcblxuICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG5cbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQW5udWxlciBsZSB0aW1lciBwcsOpY8OpZGVudCBzJ2lsIGV4aXN0ZVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgdW4gbm91dmVhdSB0aW1lclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQb3VyIGxlcyBhdXRyZXMgw6l2w6luZW1lbnRzIChibHVyLCBjaGFuZ2UpLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQW5udWxlciBsZSB0aW1lciBlbiBjb3VycyBzaSBsJ3V0aWxpc2F0ZXVyIHF1aXR0ZSBsZSBjaGFtcFxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRMOJRklOSVRJT04gREVTIFZBTElEQVRJT05TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFsaWRhdGlvbiBQc2V1ZG8gKE5hbWUpXG5yZWdpc3RlclZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgJ3BzZXVkby1lcnJvcicsICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB2b3RyZSBwc2V1ZG8uXCI7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgICAgIHJldHVybiBcIkxlIHBzZXVkbyBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXMuXCI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFZhbGlkYXRpb24gRW1haWxcbnJlZ2lzdGVyVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgJ2VtYWlsLWVycm9yJywgKHZhbHVlLCBpbnB1dCkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBcIlZldWlsbGV6IHNhaXNpciB1bmUgYWRyZXNzZSBlbWFpbC5cIjtcbiAgICB9XG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcmV0dXJuIFwiQWRyZXNzZSBlbWFpbCBpbnZhbGlkZS5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBTZWxlY3QgKENhdGVnb3J5KVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCAnc2VsZWN0ZS1lcnJvcicsICh2YWx1ZSkgPT4ge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBjaG9pc2lyIHVuZSBjYXTDqWdvcmllLlwiO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBWYWxpZGF0aW9uIFRleHRhcmVhIChNZXNzYWdlKVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsICd0ZXh0LWFyZWEtZXJyb3InLCAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbWVzc2FnZS5cIjtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHJldHVybiBcIkxlIG1lc3NhZ2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBJbWFnZVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgJ2ltYWdlLWVycm9yJywgKHZhbHVlLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgYWxsb3dlZCA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9qcGcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL3dlYnAnXTtcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XG5cbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkge1xuICAgICAgICByZXR1cm4gXCJGb3JtYXRzIGF1dG9yaXPDqXMgOiBKUEVHLCBKUEcsIFBORywgV0VCUC5cIjtcbiAgICB9XG5cbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBcIkltYWdlIHRyb3Agdm9sdW1pbmV1c2UgKG1heCAyIE1vKS5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRJT05TIEZPUk1VTEFJUkUgVVRJTElTQVRFVVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBWYWxpZGF0aW9uIFBzZXVkbyBVdGlsaXNhdGV1clxucmVnaXN0ZXJWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgJ3VzZXJfcHNldWRvLWVycm9yJywgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIHBzZXVkby5cIjtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcmV0dXJuIFwiTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMyBjYXJhY3TDqHJlcy5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBFbWFpbCBVdGlsaXNhdGV1clxucmVnaXN0ZXJWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCAndXNlcl9lbWFpbC1lcnJvcicsICh2YWx1ZSwgaW5wdXQpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBzYWlzaXIgdW5lIGFkcmVzc2UgZW1haWwuXCI7XG4gICAgfVxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHJldHVybiBcIkFkcmVzc2UgZW1haWwgaW52YWxpZGUuXCI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFZhbGlkYXRpb24gTW90IGRlIHBhc3NlICh1dGlsaXNlciBsZXMgdnJhaXMgSURzKVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsICd1c2VyX3Bhc3N3b3JkX2ZpcnN0LWVycm9yJywgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDgpIHtcbiAgICAgICAgcmV0dXJuIFwiTGUgbW90IGRlIHBhc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgOCBjYXJhY3TDqHJlcy5cIjtcbiAgICB9XG5cbiAgICAvLyBWw6lyaWZpZXIgbWFqdXNjdWxlXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIkxlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIHVuZSBtYWp1c2N1bGUuXCI7XG4gICAgfVxuXG4gICAgLy8gVsOpcmlmaWVyIGNoaWZmcmVcbiAgICBpZiAoIS9cXGQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIkxlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIHVuIGNoaWZmcmUuXCI7XG4gICAgfVxuXG4gICAgLy8gVsOpcmlmaWVyIGNhcmFjdMOocmUgc3DDqWNpYWxcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIkxlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIHVuIGNhcmFjdMOocmUgc3DDqWNpYWwuXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBDb25maXJtYXRpb24gbW90IGRlIHBhc3NlICh1dGlsaXNlciBsZXMgdnJhaXMgSURzKVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCAndXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3InLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBmaXJzdFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcpO1xuICAgIGlmICghZmlyc3RQYXNzd29yZCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBjb25maXJtZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IGZpcnN0UGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiTGVzIG1vdHMgZGUgcGFzc2UgbmUgY29ycmVzcG9uZGVudCBwYXMuXCI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG5cbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgfSk7XG5cbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSU5JVElBTElTQVRJT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcblxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1ciAoYXZlYyBsZXMgdnJhaXMgSURzKVxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcblxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG4gICAgfVxufSk7XG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZVRpbWVvdXQiLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJjb250YWlucyIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJ2YWx1ZSIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJ0YXJnZXQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJnZXRFbGVtZW50QnlJZCIsImVycm9yQm94IiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsInRlc3QiLCJmaXJzdFBhc3N3b3JkIiwib25TdWJtaXQiLCJoYXNFcnJvciIsIk9iamVjdCIsImtleXMiLCJpZCIsInByZXZlbnREZWZhdWx0IiwidGFnTmFtZSIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=