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
    var isOpen = false;
    var showDropdown = function showDropdown() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      isOpen = true;
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
          isOpen = false;
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    var hideDropdown = function hideDropdown() {
      hideTimeout = setTimeout(reallyHideDropdown, 150);
    };
    var toggleDropdown = function toggleDropdown(event) {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      } else {
        showDropdown();
      }
    };

    // Desktop : hover
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);

    // Mobile : click/touch
    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("touchstart", toggleDropdown, {
      passive: false
    });

    // Fermer si on clique ailleurs
    document.addEventListener("click", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
    document.addEventListener("touchstart", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
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
  var isOpen = false;
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
    isOpen = true;
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
    isOpen = false;
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
  var toggleNavbar = function toggleNavbar(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isOpen) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    } else {
      showAll();
    }
  };

  // Desktop : hover
  regionEls.forEach(function (el) {
    el.addEventListener("mouseenter", showAll);
    el.addEventListener("mouseleave", onLeaveRegion);
  });

  // Mobile : click/touch
  toggle.addEventListener("click", toggleNavbar);
  toggle.addEventListener("touchstart", toggleNavbar, {
    passive: false
  });

  // Fermer si on clique ailleurs
  document.addEventListener("click", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
  document.addEventListener("touchstart", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
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

  // Pour le responsive mobile
  inputEl.addEventListener('touchend', onBlur);
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
    } else if (eventType === 'change') {
      // Pour 'change', validation immédiate
      input.addEventListener('change', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    } else if (eventType === 'blur') {
      // Pour 'blur', validation immédiate
      input.addEventListener('blur', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });

      // Ajouter 'touchend' pour mobile
      input.addEventListener('touchend', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        // Petit délai pour éviter les doubles déclenchements
        setTimeout(function () {
          return runValidator(inputId);
        }, 100);
      });
    } else if (eventType === 'click') {
      // Pour 'click', validation immédiate
      input.addEventListener('click', function () {
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

// Validation Mot de passe
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

// Validation Confirmation mot de passe
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
// VALIDATIONS FORMULAIRE DE CONNEXION
// ========================

// Validation Email de connexion
registerValidator('username', 'username-error', function (value, input) {
  if (value.trim() === '') {
    return "Veuillez saisir votre adresse email.";
  }
  if (!input.checkValidity()) {
    return "Adresse email invalide.";
  }
  return true;
});

// Validation Mot de passe de connexion
registerValidator('password', 'password-error', function (value) {
  if (value.trim() === '') {
    return "Veuillez entrer votre mot de passe.";
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
  var loginForm = document.getElementById('login-form');
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

  // Attacher les validateurs du formulaire utilisateur
  attachValidator('user_pseudo', ['input', 'blur'], 3000);
  attachValidator('user_email', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire de connexion
  attachValidator('username', ['input', 'blur'], 3000);
  attachValidator('password', ['input', 'blur'], 3000);

  // Attacher la validation au submit
  if (form) {
    form.addEventListener('submit', onSubmit);
  }

  // Attacher la validation au formulaire de connexion
  if (loginForm) {
    loginForm.addEventListener('submit', onSubmit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtJQUNOQSxJQUFJLENBQUMxQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVzRSxRQUFRLENBQUM7RUFDN0M7O0VBRUE7RUFDQSxJQUFJSyxTQUFTLEVBQUU7SUFDWEEsU0FBUyxDQUFDM0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFc0UsUUFBUSxDQUFDO0VBQ2xEO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3BZRjlGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBbUcsTUFBTSxFQUFJO0VBQ3REQSxNQUFNLENBQUM3RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNc0MsS0FBSyxHQUFHdUMsTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSXhDLEtBQUssSUFBSUEsS0FBSyxDQUFDekQsT0FBTyxDQUFDa0csUUFBUSxLQUFLckIsU0FBUyxFQUFFO01BQy9DcEIsS0FBSyxDQUFDTixLQUFLLEdBQUdNLEtBQUssQ0FBQ3pELE9BQU8sQ0FBQ2tHLFFBQVE7TUFDcEN6QyxLQUFLLENBQUMwQyxhQUFhLENBQUMsSUFBSUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0nO1xuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuJztcbmltcG9ydCAnLi9zY3JpcHRzL2Ryb3Bkb3duLmpzJztcbmltcG9ydCAnaHRteC5vcmcnO1xud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcblxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcblxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcblxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICBsZXQgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xuXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRHJvcGRvd24pO1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICAgICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xuXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xuXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xuXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIGlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xuXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xuICAgICAgICBpc09wZW4gPSBmYWxzZTtcblxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xuXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICAgICAgaWYgKHRvICYmIGlzSW5SZWdpb24odG8pKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dBbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0FsbCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xuICAgIH0pO1xuXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZU5hdmJhciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbn0pOyIsImNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT05DVElPTlMgRCdJTlBVVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dEVsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgfVxuXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XG5cbiAgICAvLyBQb3VyIGxlIHJlc3BvbnNpdmUgbW9iaWxlXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XG59XG5cbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25CbHVyKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRFVVJTIFBFUlNPTk5BTElTw4lTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xuXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xufVxuXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRvcnNbaW5wdXRJZF07XG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcblxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcblxuICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG5cbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQW5udWxlciBsZSB0aW1lciBwcsOpY8OpZGVudCBzJ2lsIGV4aXN0ZVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgdW4gbm91dmVhdSB0aW1lclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgLy8gUG91ciAnY2hhbmdlJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIC8vIFBvdXIgJ2JsdXInLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgJ3RvdWNoZW5kJyBwb3VyIG1vYmlsZVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUGV0aXQgZMOpbGFpIHBvdXIgw6l2aXRlciBsZXMgZG91YmxlcyBkw6ljbGVuY2hlbWVudHNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRMOJRklOSVRJT04gREVTIFZBTElEQVRJT05TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFsaWRhdGlvbiBQc2V1ZG8gKE5hbWUpXG5yZWdpc3RlclZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgJ3BzZXVkby1lcnJvcicsICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB2b3RyZSBwc2V1ZG8uXCI7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgICAgIHJldHVybiBcIkxlIHBzZXVkbyBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXMuXCI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFZhbGlkYXRpb24gRW1haWxcbnJlZ2lzdGVyVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgJ2VtYWlsLWVycm9yJywgKHZhbHVlLCBpbnB1dCkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBcIlZldWlsbGV6IHNhaXNpciB1bmUgYWRyZXNzZSBlbWFpbC5cIjtcbiAgICB9XG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcmV0dXJuIFwiQWRyZXNzZSBlbWFpbCBpbnZhbGlkZS5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBTZWxlY3QgKENhdGVnb3J5KVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCAnc2VsZWN0ZS1lcnJvcicsICh2YWx1ZSkgPT4ge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBjaG9pc2lyIHVuZSBjYXTDqWdvcmllLlwiO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBWYWxpZGF0aW9uIFRleHRhcmVhIChNZXNzYWdlKVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsICd0ZXh0LWFyZWEtZXJyb3InLCAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbWVzc2FnZS5cIjtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHJldHVybiBcIkxlIG1lc3NhZ2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBJbWFnZVxucmVnaXN0ZXJWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgJ2ltYWdlLWVycm9yJywgKHZhbHVlLCBpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgYWxsb3dlZCA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9qcGcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL3dlYnAnXTtcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XG5cbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkge1xuICAgICAgICByZXR1cm4gXCJGb3JtYXRzIGF1dG9yaXPDqXMgOiBKUEVHLCBKUEcsIFBORywgV0VCUC5cIjtcbiAgICB9XG5cbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBcIkltYWdlIHRyb3Agdm9sdW1pbmV1c2UgKG1heCAyIE1vKS5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRJT05TIEZPUk1VTEFJUkUgVVRJTElTQVRFVVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBWYWxpZGF0aW9uIFBzZXVkbyBVdGlsaXNhdGV1clxucmVnaXN0ZXJWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgJ3VzZXJfcHNldWRvLWVycm9yJywgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIHBzZXVkby5cIjtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcmV0dXJuIFwiTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMyBjYXJhY3TDqHJlcy5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBFbWFpbCBVdGlsaXNhdGV1clxucmVnaXN0ZXJWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCAndXNlcl9lbWFpbC1lcnJvcicsICh2YWx1ZSwgaW5wdXQpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBzYWlzaXIgdW5lIGFkcmVzc2UgZW1haWwuXCI7XG4gICAgfVxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHJldHVybiBcIkFkcmVzc2UgZW1haWwgaW52YWxpZGUuXCI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFZhbGlkYXRpb24gTW90IGRlIHBhc3NlXG5yZWdpc3RlclZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgJ3VzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3InLCAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbW90IGRlIHBhc3NlLlwiO1xuICAgIH1cbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgOCkge1xuICAgICAgICByZXR1cm4gXCJMZSBtb3QgZGUgcGFzc2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyA4IGNhcmFjdMOocmVzLlwiO1xuICAgIH1cblxuICAgIC8vIFbDqXJpZmllciBtYWp1c2N1bGVcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiTGUgbW90IGRlIHBhc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgdW5lIG1hanVzY3VsZS5cIjtcbiAgICB9XG5cbiAgICAvLyBWw6lyaWZpZXIgY2hpZmZyZVxuICAgIGlmICghL1xcZC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiTGUgbW90IGRlIHBhc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgdW4gY2hpZmZyZS5cIjtcbiAgICB9XG5cbiAgICAvLyBWw6lyaWZpZXIgY2FyYWN0w6hyZSBzcMOpY2lhbFxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiTGUgbW90IGRlIHBhc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgdW4gY2FyYWN0w6hyZSBzcMOpY2lhbC5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBWYWxpZGF0aW9uIENvbmZpcm1hdGlvbiBtb3QgZGUgcGFzc2VcbnJlZ2lzdGVyVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgJ3VzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yJywgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmlyc3RQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnKTtcbiAgICBpZiAoIWZpcnN0UGFzc3dvcmQpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFwiVmV1aWxsZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdFBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRJT05TIEZPUk1VTEFJUkUgREUgQ09OTkVYSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFsaWRhdGlvbiBFbWFpbCBkZSBjb25uZXhpb25cbnJlZ2lzdGVyVmFsaWRhdG9yKCd1c2VybmFtZScsICd1c2VybmFtZS1lcnJvcicsICh2YWx1ZSwgaW5wdXQpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBzYWlzaXIgdm90cmUgYWRyZXNzZSBlbWFpbC5cIjtcbiAgICB9XG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcmV0dXJuIFwiQWRyZXNzZSBlbWFpbCBpbnZhbGlkZS5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gVmFsaWRhdGlvbiBNb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uXG5yZWdpc3RlclZhbGlkYXRvcigncGFzc3dvcmQnLCAncGFzc3dvcmQtZXJyb3InLCAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xuXG4gICAgLy8gQW5udWxlciB0b3VzIGxlcyB0aW1lcnMgZW4gY291cnNcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XG4gICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xuICAgIH0pO1xuXG4gICAgLy8gVsOpcmlmaWVyIHRvdXMgbGVzIHZhbGlkYXRldXJzIGVucmVnaXN0csOpc1xuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcbiAgICAgICAgaWYgKCFydW5WYWxpZGF0b3IoaW5wdXRJZCkpIHtcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cbiAgICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgLy8gSWdub3JlciBsZXMgY2hhbXBzIHF1aSBvbnQgZMOpasOgIHVuIHZhbGlkYXRldXIgY3VzdG9tXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElOSVRJQUxJU0FUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcblxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcblxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcblxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxuICAgIGlmIChsb2dpbkZvcm0pIHtcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcbiAgICB9XG59KTtcblxuXG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsInRhcmdldCIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInZhbHVlIiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwidGV4dENvbnRlbnQiLCJyZXN1bHQiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsImZpbGUiLCJmaWxlcyIsImFsbG93ZWQiLCJtYXgiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwidGVzdCIsImZpcnN0UGFzc3dvcmQiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=