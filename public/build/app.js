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
/* =====================================================
   VALIDATION GÉNÉRIQUE DES FORMULAIRES
   Emails + Mots de passe + Pseudos + Custom validators
   Compatible Support / User / Login / ForgotPassword
   ===================================================== */

var selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');

// =====================================================
// Fonctions d'apparence des inputs
// =====================================================
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
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--filled', 'inputs--invalid');
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

// =====================================================
// Système de validation générique
// =====================================================
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
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
        }
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

// =====================================================
// VALIDATEURS EMAILS (génériques pour tout le site)
// =====================================================

function registerEmail(inputId, errorId) {
  registerValidator(inputId, errorId, function (value, input) {
    var v = value.trim();
    if (v === "") return "Veuillez saisir une adresse email.";
    if (!input.checkValidity()) return "Adresse email invalide.";
    return true;
  });
}
var emailFields = [{
  inputId: "support_email",
  errorId: "email-error"
}, {
  inputId: "user_email",
  errorId: "user_email-error"
}, {
  inputId: "username",
  errorId: "username-error"
}, {
  inputId: "forgot_email",
  errorId: "forgot_email-error"
}];
emailFields.forEach(function (f) {
  return registerEmail(f.inputId, f.errorId);
});

// =====================================================
// VALIDATEURS PSEUDOS (génériques)
// =====================================================

function registerPseudo(inputId, errorId) {
  var minLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  registerValidator(inputId, errorId, function (value) {
    var v = value.trim();
    if (v === "") return "Veuillez entrer votre pseudo.";
    if (v.length < minLength) return "Le pseudo doit contenir au moins ".concat(minLength, " caract\xE8res.");
    return true;
  });
}
var pseudoFields = [{
  inputId: "support_name",
  errorId: "pseudo-error",
  minLength: 3
}, {
  inputId: "user_pseudo",
  errorId: "user_pseudo-error",
  minLength: 3
}
// Exemple pour plus tard : champ pseudo pour un autre formulaire
// { inputId: "forgot_pseudo", errorId: "forgot_pseudo-error", minLength: 3 }
];
pseudoFields.forEach(function (f) {
  return registerPseudo(f.inputId, f.errorId, f.minLength);
});

// =====================================================
// VALIDATEURS MOTS DE PASSE (génériques)
// =====================================================

registerValidator("user_plainPassword_first", "user_password_first-error", function (value) {
  var v = value.trim();
  if (v === "") return "Veuillez entrer un mot de passe.";
  if (v.length < 8) return "Au moins 8 caractères requis.";
  if (!/[A-Z]/.test(v)) return "Une majuscule est requise.";
  if (!/\d/.test(v)) return "Un chiffre est requis.";
  if (!/[\W_]/.test(v)) return "Un caractère spécial est requis.";
  return true;
});
registerValidator("user_plainPassword_second", "user_password_second-error", function (value) {
  var first = document.getElementById("user_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return "Veuillez confirmer votre mot de passe.";
  if (value !== first.value) return "Les mots de passe ne correspondent pas.";
  return true;
});

// Mot de passe de connexion
registerValidator("password", "password-error", function (value) {
  if (value.trim() === "") return "Veuillez entrer votre mot de passe.";
  return true;
});

// Mot de passe "oublié" (nouveau mot de passe, si tu as un champs dédié)
registerValidator("forgot_password", "forgot_password-error", function (value) {
  if (value.trim() === "") return "Veuillez entrer un mot de passe.";
  return true;
});

// =====================================================
// VALIDATEURS SUPPORT SUPPLÉMENTAIRES → category / message / image
// =====================================================

registerValidator("support_category", "selecte-error", function (value) {
  if (!value || value.trim() === "") return "Veuillez choisir une catégorie.";
  return true;
});
registerValidator("support_message", "text-area-error", function (value) {
  var v = value.trim();
  if (v === "") return "Veuillez entrer un message.";
  if (v.length < 10) return "Le message doit contenir au moins 10 caractères.";
  return true;
});

// VALIDATION DE L’IMAGE (support)
registerValidator("support_imageFile", "image-error", function (value, input) {
  var file = input.files[0];
  if (!file) return true;
  var allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  var max = 2 * 1024 * 1024;
  if (!allowed.includes(file.type)) return "Formats autorisés : JPEG, JPG, PNG, WEBP.";
  if (file.size > max) return "Image trop volumineuse (max 2 Mo).";
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

  // Attacher les validateurs éventuels du formulaire "mot de passe oublié"
  attachValidator('forgot_email', ['input', 'blur'], 3000);
  attachValidator('forgot_password', ['input', 'blur'], 3000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0nO1xuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuJztcbmltcG9ydCAnLi9zY3JpcHRzL2Ryb3Bkb3duLmpzJztcbmltcG9ydCAnaHRteC5vcmcnO1xud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcblxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcblxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcblxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICBsZXQgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xuXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRHJvcGRvd24pO1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICAgICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xuXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xuXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xuXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIGlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xuXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xuICAgICAgICBpc09wZW4gPSBmYWxzZTtcblxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xuXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICAgICAgaWYgKHRvICYmIGlzSW5SZWdpb24odG8pKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dBbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0FsbCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xuICAgIH0pO1xuXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZU5hdmJhciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbn0pOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBWQUxJREFUSU9OIEfDiU7DiVJJUVVFIERFUyBGT1JNVUxBSVJFU1xuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgIH1cblxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xufVxuXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBldi50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQmx1cihldikge1xuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJywgJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbihldikge1xuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN5c3TDqG1lIGRlIHZhbGlkYXRpb24gZ8OpbsOpcmlxdWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5jb25zdCB2YWxpZGF0aW9uVGltZXJzID0ge307IC8vIFN0b2NrYWdlIGRlcyB0aW1lcnNcblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xuICAgIHZhbGlkYXRvcnNbaW5wdXRJZF0gPSB7IGVycm9ySWQsIHZhbGlkYXRlRm4gfTtcbn1cblxuZnVuY3Rpb24gcnVuVmFsaWRhdG9yKGlucHV0SWQpIHtcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XG5cbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnJztcbiAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XG5cbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gcmVzdWx0O1xuICAgICAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuXG4gICAgZXZlbnRUeXBlcy5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFMSURBVEVVUlMgRU1BSUxTIChnw6luw6lyaXF1ZXMgcG91ciB0b3V0IGxlIHNpdGUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiByZWdpc3RlckVtYWlsKGlucHV0SWQsIGVycm9ySWQpIHtcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBzYWlzaXIgdW5lIGFkcmVzc2UgZW1haWwuXCI7XG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gXCJBZHJlc3NlIGVtYWlsIGludmFsaWRlLlwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuY29uc3QgZW1haWxGaWVsZHMgPSBbXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXG4gICAgeyBpbnB1dElkOiBcInVzZXJfZW1haWxcIiwgZXJyb3JJZDogXCJ1c2VyX2VtYWlsLWVycm9yXCIgfSxcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cbl07XG5cbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzKSB7XG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgcHNldWRvLlwiO1xuICAgICAgICBpZiAodi5sZW5ndGggPCBtaW5MZW5ndGgpIHJldHVybiBgTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgJHttaW5MZW5ndGh9IGNhcmFjdMOocmVzLmA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcbiAgICAvLyBFeGVtcGxlIHBvdXIgcGx1cyB0YXJkIDogY2hhbXAgcHNldWRvIHBvdXIgdW4gYXV0cmUgZm9ybXVsYWlyZVxuICAgIC8vIHsgaW5wdXRJZDogXCJmb3Jnb3RfcHNldWRvXCIsIGVycm9ySWQ6IFwiZm9yZ290X3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfVxuXTtcblxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgpKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbW90IGRlIHBhc3NlLlwiO1xuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiBcIkF1IG1vaW5zIDggY2FyYWN0w6hyZXMgcmVxdWlzLlwiO1xuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gXCJVbmUgbWFqdXNjdWxlIGVzdCByZXF1aXNlLlwiO1xuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2hpZmZyZSBlc3QgcmVxdWlzLlwiO1xuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2FyYWN0w6hyZSBzcMOpY2lhbCBlc3QgcmVxdWlzLlwiO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInVzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBjb25maXJtZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIE1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb25cbnJlZ2lzdGVyVmFsaWRhdG9yKFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY2hvaXNpciB1bmUgY2F0w6lnb3JpZS5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfbWVzc2FnZVwiLCBcInRleHQtYXJlYS1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbWVzc2FnZS5cIjtcbiAgICBpZiAodi5sZW5ndGggPCAxMCkgcmV0dXJuIFwiTGUgbWVzc2FnZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDEwIGNhcmFjdMOocmVzLlwiO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XG5cbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIFwiRm9ybWF0cyBhdXRvcmlzw6lzIDogSlBFRywgSlBHLCBQTkcsIFdFQlAuXCI7XG4gICAgaWYgKGZpbGUuc2l6ZSA+IG1heCkgcmV0dXJuIFwiSW1hZ2UgdHJvcCB2b2x1bWluZXVzZSAobWF4IDIgTW8pLlwiO1xuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcblxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICB9KTtcblxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcblxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJTklUSUFMSVNBVElPTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XG5cbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xuXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJuYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigncGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgw6l2ZW50dWVscyBkdSBmb3JtdWxhaXJlIFwibW90IGRlIHBhc3NlIG91Ymxpw6lcIlxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcbiAgICB9XG5cbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXG4gICAgaWYgKGxvZ2luRm9ybSkge1xuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xuICAgIH1cbn0pO1xuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJodG14IiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2hIb3ZlckRyb3Bkb3duIiwidG9nZ2xlU2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVhbGx5SGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZURyb3Bkb3duIiwic2V0VGltZW91dCIsInRvZ2dsZURyb3Bkb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXNzaXZlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhdHRhY2hOYXZiYXJEcm9wZG93biIsIm5hdmJhck1lbnUiLCJuYXZiYXJDb250YWluZXIiLCJyZWdpb25FbHMiLCJpc0Nsb3NpbmciLCJpc0luUmVnaW9uIiwiZWwiLCJzb21lIiwibm9kZSIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInRvZ2dsZU5hdmJhciIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJ2YWx1ZSIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJnZXRFbGVtZW50QnlJZCIsImVycm9yQm94IiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJyZWdpc3RlckVtYWlsIiwidiIsImVtYWlsRmllbGRzIiwiZiIsInJlZ2lzdGVyUHNldWRvIiwibWluTGVuZ3RoIiwiY29uY2F0IiwicHNldWRvRmllbGRzIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=