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
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/form.js */ "./assets/scripts/form.js");
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_remember_me_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/remember_me.js */ "./assets/scripts/remember_me.js");
/* harmony import */ var _scripts_remember_me_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_remember_me_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/reset-btn.js */ "./assets/scripts/reset-btn.js");
/* harmony import */ var _scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_itemSearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/itemSearch.js */ "./assets/scripts/itemSearch.js");
/* harmony import */ var _scripts_itemSearch_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_itemSearch_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_place_order_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/place-order.js */ "./assets/scripts/place-order.js");
/* harmony import */ var _scripts_place_order_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_place_order_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/dropdown.js */ "./assets/scripts/dropdown.js");
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");


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
  errorBox.textContent = "\xA0";
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
  inputId: "forgot_password_request_form_email",
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
}];
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
registerValidator("reset_password_form_plainPassword_first", "reset_password_form_plainPassword_first-error", function (value) {
  var v = value.trim();
  if (v === "") return "Veuillez entrer un mot de passe.";
  if (v.length < 8) return "Au moins 8 caractères requis.";
  if (!/[A-Z]/.test(v)) return "Une majuscule est requise.";
  if (!/\d/.test(v)) return "Un chiffre est requis.";
  if (!/[\W_]/.test(v)) return "Un caractère spécial est requis.";
  return true;
});
registerValidator("reset_password_form_plainPassword_second", "reset_password_form_plainPassword_second-error", function (value) {
  var first = document.getElementById("reset_password_form_plainPassword_first");
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

  // Attacher les validateurs du formulaire reset password
  attachValidator('reset_password_form_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('reset_password_form_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire de connexion
  attachValidator('username', ['input', 'blur'], 3000);
  attachValidator('password', ['input', 'blur'], 3000);

  // Attacher les validateurs éventuels du formulaire "mot de passe oublié"
  attachValidator('forgot_password_request_form_email', ['input', 'blur'], 3000);
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

/***/ "./assets/scripts/itemSearch.js":
/*!**************************************!*\
  !*** ./assets/scripts/itemSearch.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('search-input');
  var btn = document.getElementById('search-button');
  var results = document.getElementById('results');
  var clear = document.getElementById('search-clear');
  var asideInput = document.getElementById('place-order-search-input');
  var asideClear = document.getElementById('place-order-search-clear');
  var toggleBtn = document.getElementById('place-order-toggle');
  function clearResults() {
    if (results) {
      results.innerHTML = '';
    }
  }
  function updateButton() {
    if (!input) return;
    var v = input.value.trim();
    var hasValue = v !== '';
    if (clear) {
      var wrapper = clear.closest('.search-input-wrapper');
      if (wrapper) {
        wrapper.classList.toggle('has-value', hasValue);
      }
    }
    if (!hasValue) {
      clearResults();
    }
    if (asideInput) {
      asideInput.value = input.value;
    }
  }
  if (input) {
    updateButton();
    input.addEventListener('input', updateButton);
  }
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var firstLink = document.querySelector('#results .results-list .results-content a') || document.querySelector('#results a');
      if (firstLink) {
        firstLink.click();
      }
    });
  }
  if (clear && input) {
    clear.addEventListener('click', function (e) {
      e.preventDefault();
      input.value = '';
      updateButton();
      input.focus();
    });
  }
  document.addEventListener('htmx:beforeRequest', function (evt) {
    var detail = evt.detail || {};
    var el = detail.elt;
    if (!el || el.id !== 'search-input') return;
    var v = el.value.trim();
    if (v === '') {
      evt.preventDefault();
      return;
    }
    var icon = document.getElementById("search-icon");
    var spinner = document.getElementById("search-spinner");
    if (icon && spinner) {
      icon.style.display = "none";
      spinner.style.display = "inline-block";
    }
  });
  document.addEventListener('htmx:afterRequest', function (evt) {
    var detail = evt.detail || {};
    var el = detail.elt;
    if (!el || el.id !== 'search-input') return;
    var icon = document.getElementById("search-icon");
    var spinner = document.getElementById("search-spinner");
    if (icon && spinner) {
      spinner.style.display = "none";
      icon.style.display = "inline-block";
    }
    updateButton();
  });
  if (toggleBtn && input && asideInput) {
    toggleBtn.addEventListener('click', function () {
      asideInput.value = input.value;
    });
  }
  if (asideInput && input) {
    asideInput.addEventListener('input', function () {
      // copie la valeur dans le champ qui a les attributs hx-*
      input.value = asideInput.value;

      // met à jour l'état du bouton / clear / résultats
      updateButton();

      // déclenche un keyup pour que htmx réagisse (hx-trigger="keyup changed delay:300ms")
      var evt = new KeyboardEvent('keyup', {
        bubbles: true
      });
      input.dispatchEvent(evt);
    });
  }
  if (asideClear && asideInput) {
    asideClear.addEventListener('click', function (e) {
      e.preventDefault();
      asideInput.value = '';
      asideInput.focus();

      // si tu veux aussi vider la recherche principale et les résultats :
      if (input) {
        input.value = '';
        updateButton();
      }
    });
  }
});

/***/ }),

/***/ "./assets/scripts/place-order.js":
/*!***************************************!*\
  !*** ./assets/scripts/place-order.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('search-input');
  var searchButton = document.getElementById('search-button');
  var searchResults = document.getElementById('results');
  var searchClear = document.getElementById('search-clear');
  var searchIcon = document.getElementById('search-icon');
  var searchSpinner = document.getElementById('search-spinner');
  var toggleBtn = document.getElementById('place-order-toggle');
  var panel = document.getElementById('place-order-panel');
  var overlay = document.getElementById('place-order-overlay');
  var closeBtn = document.getElementById('place-order-close');
  var asideSearch = document.getElementById('place-order-search-input');
  var asideClear = document.getElementById('place-order-search-clear');
  var nameEl = document.getElementById('po-item-name');
  var uniqueEl = document.getElementById('po-item-unique');
  var itemIdInput = document.getElementById('po-item-id');
  var imgEl = document.querySelector('.po-item-image img');
  var itemUniqueNameInput = document.getElementById('po-item-uniqueName');
  var rankSection = document.querySelector('.po-rank-section');
  var rankInput = document.querySelector('.po-rank-section .number-line__input');
  function clearResults() {
    if (searchResults) {
      searchResults.innerHTML = '';
    }
  }
  function updateSearchUi() {
    if (!searchInput) return;
    var v = searchInput.value.trim();
    var hasValue = v !== '';
    if (searchClear) {
      var wrapper = searchClear.closest('.search-input-wrapper');
      if (wrapper) {
        wrapper.classList.toggle('has-value', hasValue);
      }
    }
    if (!hasValue) {
      clearResults();
    }

    // synchronise l'aside avec le search principal
    if (asideSearch) {
      asideSearch.value = searchInput.value;
    }
  }
  function getFirstResultElement() {
    return document.querySelector('#results .results-list .results-content[data-item-name]') || null;
  }
  function fillPanelFromFirstResult() {
    var first = getFirstResultElement();
    if (!first) {
      if (nameEl) nameEl.textContent = 'Aucun item sélectionné';
      if (imgEl) {
        imgEl.src = '';
        imgEl.alt = '';
      }
      if (rankSection) {
        rankSection.classList.add('is-hidden');
      }
      return;
    }
    var uniqueName = first.dataset.itemUnique || '';
    var itemName = first.dataset.itemName || first.textContent.trim();
    var itemImageName = first.dataset.itemImageName || '';
    var itemCategory = (first.dataset.itemCategory || '').toLowerCase();
    var fusionLimit = parseInt(first.dataset.fusionLimit || '0', 10);
    if (itemUniqueNameInput) itemUniqueNameInput.value = uniqueName;
    if (nameEl) nameEl.textContent = itemName;
    if (imgEl) {
      imgEl.src = itemImageName;
      imgEl.alt = itemName;
    }
    if (rankSection) {
      if (itemCategory === 'mods' || itemCategory === 'mod') {
        rankSection.classList.remove('is-hidden');
      } else {
        rankSection.classList.add('is-hidden');
      }
    }
    if (rankInput) {
      if (!isNaN(fusionLimit) && fusionLimit > 0) {
        rankInput.max = fusionLimit;
        if (parseInt(rankInput.value || '0', 10) > fusionLimit) {
          rankInput.value = fusionLimit;
        }
      } else {
        rankInput.max = 0;
        rankInput.value = 0;
      }
    }
  }
  function openPanel() {
    fillPanelFromFirstResult();
    if (panel) panel.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
  }
  function closePanel() {
    if (panel) panel.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
  }

  // --- SEARCH PRINCIPAL (HTMX) ---

  if (searchInput) {
    updateSearchUi();
    searchInput.addEventListener('input', updateSearchUi);
  }
  if (searchButton) {
    searchButton.addEventListener('click', function (e) {
      e.preventDefault();
      var firstLink = document.querySelector('#results .results-list .results-content a') || document.querySelector('#results a');
      if (firstLink) {
        firstLink.click();
      }
    });
  }
  if (searchClear && searchInput) {
    searchClear.addEventListener('click', function (e) {
      e.preventDefault();
      searchInput.value = '';
      updateSearchUi();
      searchInput.focus();
    });
  }

  // spinner HTMX
  document.addEventListener('htmx:beforeRequest', function (evt) {
    var detail = evt.detail || {};
    var el = detail.elt;
    if (!el || el.id !== 'search-input') return;
    var v = el.value.trim();
    if (v === '') {
      evt.preventDefault();
      return;
    }
    if (searchIcon && searchSpinner) {
      searchIcon.style.display = 'none';
      searchSpinner.style.display = 'inline-block';
    }
  });
  document.addEventListener('htmx:afterRequest', function (evt) {
    var detail = evt.detail || {};
    var el = detail.elt;
    if (!el || el.id !== 'search-input') return;
    if (searchIcon && searchSpinner) {
      searchSpinner.style.display = 'none';
      searchIcon.style.display = 'inline-block';
    }
    updateSearchUi();
  });

  // Quand HTMX remplace #results → si le panel est ouvert, on met à jour avec le nouveau premier résultat
  document.addEventListener('htmx:afterSwap', function (evt) {
    if (evt.target && evt.target.id === 'results') {
      if (panel && panel.classList.contains('is-open')) {
        fillPanelFromFirstResult();
      }
    }
  });

  // --- ASIDE : synchro + recherche BDD/API ---

  // ouverture du panneau
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // copie la valeur actuelle de la barre de recherche principale
      if (searchInput && asideSearch) {
        asideSearch.value = searchInput.value;
      }
      openPanel();
    });
  }
  if (overlay) {
    overlay.addEventListener('click', closePanel);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closePanel);
  }

  // taper dans l'input de l'aside → met à jour le search principal + déclenche la recherche HTMX
  if (asideSearch && searchInput) {
    asideSearch.addEventListener('input', function () {
      searchInput.value = asideSearch.value;
      updateSearchUi();

      // déclenche un keyup pour que htmx/reactive (hx-trigger="keyup changed delay:300ms")
      var evt = new KeyboardEvent('keyup', {
        bubbles: true
      });
      searchInput.dispatchEvent(evt);
    });
  }

  // clear de l'aside
  if (asideClear && asideSearch) {
    asideClear.addEventListener('click', function (e) {
      e.preventDefault();
      asideSearch.value = '';
      asideSearch.focus();
      if (searchInput) {
        searchInput.value = '';
        updateSearchUi();
      }
    });
  }

  // auto increment decrement
  document.querySelectorAll('.number-line').forEach(function (line) {
    var input = line.querySelector('.number-line__input');
    var up = line.querySelector('.up');
    var down = line.querySelector('.down');
    if (!input || !up || !down) return;
    var interval = null;
    var holdTimer = null;
    var max = parseInt(input.getAttribute('max') || '9999999', 10);
    var min = parseInt(input.getAttribute('min') || '0', 10);
    if (input.value === '' || input.value === null) {
      input.value = min;
    }
    function clampValue(val) {
      val = parseInt(val, 10);
      if (isNaN(val)) val = min;
      if (val < min) val = min;
      if (val > max) val = max;
      return val;
    }
    function applyClamp() {
      input.value = clampValue(input.value);
    }
    function safeStepUp() {
      applyClamp();
      input.stepUp();
      applyClamp();
    }
    function safeStepDown() {
      applyClamp();
      input.stepDown();
      applyClamp();
    }
    function startHold(action) {
      action();
      holdTimer = setTimeout(function () {
        interval = setInterval(action, 70);
      }, 170);
    }
    function stopHold() {
      clearTimeout(holdTimer);
      holdTimer = null;
      if (interval !== null) {
        clearInterval(interval);
        interval = null;
      }
    }

    // increment
    up.addEventListener('mousedown', function () {
      return startHold(function () {
        return input.stepUp();
      });
    });
    up.addEventListener('touchstart', function () {
      return startHold(function () {
        return input.stepUp();
      });
    }, {
      passive: true
    });

    // decrement
    down.addEventListener('mousedown', function () {
      return startHold(function () {
        return input.stepDown();
      });
    });
    down.addEventListener('touchstart', function () {
      return startHold(function () {
        return input.stepDown();
      });
    }, {
      passive: true
    });

    // Empêcher toute entrée invalide au clavier
    input.addEventListener('input', function () {
      applyClamp();
    });

    // stop
    ['mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach(function (evt) {
      return line.addEventListener(evt, stopHold);
    });
  });
});

/***/ }),

/***/ "./assets/scripts/remember_me.js":
/*!***************************************!*\
  !*** ./assets/scripts/remember_me.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("cookie-consent");
  var accept = document.getElementById("accept-cookies");
  var refuse = document.getElementById("refuse-cookies");
  var rememberCheckbox = document.getElementById("_remember_me");

  // Vérifier que les éléments existent
  if (!box || !accept || !refuse) {
    console.warn("Éléments cookie non trouvés");
    return;
  }
  var consent = localStorage.getItem("cookie-consent");

  // AFFICHAGE INITIAL
  if (!consent) {
    setTimeout(function () {
      box.classList.add("show");
    }, 600);
  } else if (consent === "refused") {
    box.classList.add("collapsed");
  }

  // DÉSACTIVER REMEMBER ME SI REFUS
  if (consent !== "accepted" && rememberCheckbox) {
    rememberCheckbox.disabled = true;
  }

  // ACCEPTER
  accept.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "accepted");
    box.classList.remove("show");
    box.classList.add("hidden");
    if (rememberCheckbox) rememberCheckbox.disabled = false;
  });

  // REFUSER
  refuse.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "refused");
    box.classList.remove("show");
    box.classList.add("collapsed");
    if (rememberCheckbox) {
      rememberCheckbox.checked = false;
      rememberCheckbox.disabled = true;
    }
  });

  // SI ON CLIQUE SUR LE BOUTON RÉDUIT → RÉAFFICHER LA BANNIÈRE
  var collapseBtn = document.getElementById("cookie-expand-btn");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.remove("collapsed");
      box.classList.add("show");
    });
  }

  // SI ON CLIQUE SUR REMEMBER ME APRÈS UN REFUS → RÉAFFICHER LA BANNIÈRE
  if (rememberCheckbox) {
    var rememberLabel = document.querySelector('label[for="_remember_me"]');
    var clickHandler = function clickHandler(e) {
      var currentConsent = localStorage.getItem("cookie-consent");
      if (currentConsent === "refused") {
        e.preventDefault();
        e.stopPropagation();
        rememberCheckbox.checked = false;
        box.classList.remove("collapsed");
        box.classList.add("show");
        return false;
      }
    };
    rememberCheckbox.addEventListener("click", clickHandler);
    if (rememberLabel) {
      rememberLabel.addEventListener("click", clickHandler);
    }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-b0e95a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ0o7QUFFSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZGcE0sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFvTSxNQUFNLEVBQUk7RUFDdERBLE1BQU0sQ0FBQzlLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DLElBQU1zQyxLQUFLLEdBQUd3SSxNQUFNLENBQUNDLHNCQUFzQjtJQUMzQyxJQUFJekksS0FBSyxJQUFJQSxLQUFLLENBQUN6RCxPQUFPLENBQUNtTSxRQUFRLEtBQUt0SCxTQUFTLEVBQUU7TUFDL0NwQixLQUFLLENBQUNOLEtBQUssR0FBR00sS0FBSyxDQUFDekQsT0FBTyxDQUFDbU0sUUFBUTtNQUNwQzFJLEtBQUssQ0FBQ29FLGFBQWEsQ0FBQyxJQUFJdUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2l0ZW1TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcGxhY2Utb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmVtZW1iZXJfbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmVzZXQtYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZm9ybS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3JlbWVtYmVyX21lLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvaXRlbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJ2h0bXgub3JnJztcclxud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcclxuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xyXG4gICBDb21wYXRpYmxlIFN1cHBvcnQgLyBVc2VyIC8gTG9naW4gLyBGb3Jnb3RQYXNzd29yZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblxyXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcclxuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XHJcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xyXG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xyXG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogc2Fpc2lyIHVuZSBhZHJlc3NlIGVtYWlsLlwiO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gXCJBZHJlc3NlIGVtYWlsIGludmFsaWRlLlwiO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVtYWlsRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJuYW1lXCIsIGVycm9ySWQ6IFwidXNlcm5hbWUtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XHJcbl07XHJcblxyXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJQc2V1ZG8oaW5wdXRJZCwgZXJyb3JJZCwgbWluTGVuZ3RoID0gMykge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIHBzZXVkby5cIjtcclxuICAgICAgICBpZiAodi5sZW5ndGggPCBtaW5MZW5ndGgpIHJldHVybiBgTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgJHttaW5MZW5ndGh9IGNhcmFjdMOocmVzLmA7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcHNldWRvRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX3BzZXVkb1wiLCBlcnJvcklkOiBcInVzZXJfcHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG5dO1xyXG5cclxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiBcIkF1IG1vaW5zIDggY2FyYWN0w6hyZXMgcmVxdWlzLlwiO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiBcIlVuZSBtYWp1c2N1bGUgZXN0IHJlcXVpc2UuXCI7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiBcIlVuIGNoaWZmcmUgZXN0IHJlcXVpcy5cIjtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2FyYWN0w6hyZSBzcMOpY2lhbCBlc3QgcmVxdWlzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gXCJBdSBtb2lucyA4IGNhcmFjdMOocmVzIHJlcXVpcy5cIjtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gXCJVbmUgbWFqdXNjdWxlIGVzdCByZXF1aXNlLlwiO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gXCJVbiBjaGlmZnJlIGVzdCByZXF1aXMuXCI7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiBcIlVuIGNhcmFjdMOocmUgc3DDqWNpYWwgZXN0IHJlcXVpcy5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIFwib3VibGnDqVwiIChub3V2ZWF1IG1vdCBkZSBwYXNzZSwgc2kgdHUgYXMgdW4gY2hhbXBzIGTDqWRpw6kpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwiZm9yZ290X3Bhc3N3b3JkXCIsIFwiZm9yZ290X3Bhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY2hvaXNpciB1bmUgY2F0w6lnb3JpZS5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9tZXNzYWdlXCIsIFwidGV4dC1hcmVhLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbWVzc2FnZS5cIjtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gXCJMZSBtZXNzYWdlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMTAgY2FyYWN0w6hyZXMuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBWQUxJREFUSU9OIERFIEzigJlJTUFHRSAoc3VwcG9ydClcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZCA9IFtcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIiwgXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS93ZWJwXCJdO1xyXG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuICAgIGlmICghYWxsb3dlZC5pbmNsdWRlcyhmaWxlLnR5cGUpKSByZXR1cm4gXCJGb3JtYXRzIGF1dG9yaXPDqXMgOiBKUEVHLCBKUEcsIFBORywgV0VCUC5cIjtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiBcIkltYWdlIHRyb3Agdm9sdW1pbmV1c2UgKG1heCAyIE1vKS5cIjtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xyXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQW5udWxlciB0b3VzIGxlcyB0aW1lcnMgZW4gY291cnNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHRvdXMgbGVzIHZhbGlkYXRldXJzIGVucmVnaXN0csOpc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgY2hhbXBzIHF1aSBvbnQgZMOpasOgIHVuIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVElBTElTQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbml0SW5wdXQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9tZXNzYWdlJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgcmVzZXQgcGFzc3dvcmRcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VybmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIMOpdmVudHVlbHMgZHUgZm9ybXVsYWlyZSBcIm1vdCBkZSBwYXNzZSBvdWJsacOpXCJcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XHJcbiAgICBpZiAoZm9ybSkge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGlmIChsb2dpbkZvcm0pIHtcclxuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xyXG4gICAgY29uc3QgY2xlYXIgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY2xlYXInKTtcclxuXHJcbiAgICBjb25zdCBhc2lkZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3QgYXNpZGVDbGVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtY2xlYXInKTtcclxuICAgIGNvbnN0IHRvZ2dsZUJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItdG9nZ2xlJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gICAgICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbigpIHtcclxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHYgPSBpbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSB2ICE9PSAnJztcclxuXHJcbiAgICAgICAgaWYgKGNsZWFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBjbGVhci5jbG9zZXN0KCcuc2VhcmNoLWlucHV0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLXZhbHVlJywgaGFzVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFzaWRlSW5wdXQpIHtcclxuICAgICAgICAgICAgYXNpZGVJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TGluayA9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHRzLWNvbnRlbnQgYScpIHx8XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyBhJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3RMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdExpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGVhciAmJiBpbnB1dCkge1xyXG4gICAgICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmJlZm9yZVJlcXVlc3QnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcclxuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XHJcblxyXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHYgPSBlbC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgICAgIGlmICh2ID09PSAnJykge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWljb25cIik7XHJcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXNwaW5uZXJcIik7XHJcblxyXG4gICAgICAgIGlmIChpY29uICYmIHNwaW5uZXIpIHtcclxuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclJlcXVlc3QnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcclxuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XHJcblxyXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pY29uXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zcGlubmVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoaWNvbiAmJiBzcGlubmVyKSB7XHJcbiAgICAgICAgICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodG9nZ2xlQnRuICYmIGlucHV0ICYmIGFzaWRlSW5wdXQpIHtcclxuICAgICAgICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFzaWRlSW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXNpZGVJbnB1dCAmJiBpbnB1dCkge1xyXG4gICAgICAgIGFzaWRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvcGllIGxhIHZhbGV1ciBkYW5zIGxlIGNoYW1wIHF1aSBhIGxlcyBhdHRyaWJ1dHMgaHgtKlxyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGFzaWRlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBtZXQgw6Agam91ciBsJ8OpdGF0IGR1IGJvdXRvbiAvIGNsZWFyIC8gcsOpc3VsdGF0c1xyXG4gICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGTDqWNsZW5jaGUgdW4ga2V5dXAgcG91ciBxdWUgaHRteCByw6lhZ2lzc2UgKGh4LXRyaWdnZXI9XCJrZXl1cCBjaGFuZ2VkIGRlbGF5OjMwMG1zXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGV2dCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXl1cCcsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc2lkZUNsZWFyICYmIGFzaWRlSW5wdXQpIHtcclxuICAgICAgICBhc2lkZUNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFzaWRlSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNpIHR1IHZldXggYXVzc2kgdmlkZXIgbGEgcmVjaGVyY2hlIHByaW5jaXBhbGUgZXQgbGVzIHLDqXN1bHRhdHMgOlxyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XHJcbiAgICBjb25zdCBzZWFyY2hDbGVhciAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbGVhcicpO1xyXG4gICAgY29uc3Qgc2VhcmNoSWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaWNvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoU3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3Bpbm5lcicpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUJ0biAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBwYW5lbCAgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXBhbmVsJyk7XHJcbiAgICBjb25zdCBvdmVybGF5ICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLW92ZXJsYXknKTtcclxuICAgIGNvbnN0IGNsb3NlQnRuICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItY2xvc2UnKTtcclxuXHJcbiAgICBjb25zdCBhc2lkZVNlYXJjaCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3QgYXNpZGVDbGVhciAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtY2xlYXInKTtcclxuXHJcbiAgICBjb25zdCBuYW1lRWwgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tbmFtZScpO1xyXG4gICAgY29uc3QgdW5pcXVlRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLXVuaXF1ZScpO1xyXG4gICAgY29uc3QgaXRlbUlkSW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLWlkJyk7XHJcbiAgICBjb25zdCBpbWdFbCAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLWl0ZW0taW1hZ2UgaW1nJyk7XHJcbiAgICBjb25zdCBpdGVtVW5pcXVlTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tdW5pcXVlTmFtZScpO1xyXG4gICAgY29uc3QgcmFua1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG8tcmFuay1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCByYW5rSW5wdXQgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wby1yYW5rLXNlY3Rpb24gLm51bWJlci1saW5lX19pbnB1dCcpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2VhcmNoVWkoKSB7XHJcbiAgICAgICAgaWYgKCFzZWFyY2hJbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gdiAhPT0gJyc7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hDbGVhcikge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gc2VhcmNoQ2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN5bmNocm9uaXNlIGwnYXNpZGUgYXZlYyBsZSBzZWFyY2ggcHJpbmNpcGFsXHJcbiAgICAgICAgaWYgKGFzaWRlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpcnN0UmVzdWx0RWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50W2RhdGEtaXRlbS1uYW1lXScpIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gZ2V0Rmlyc3RSZXN1bHRFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGlmICghZmlyc3QpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWVFbCkgICBuYW1lRWwudGV4dENvbnRlbnQgICA9ICdBdWN1biBpdGVtIHPDqWxlY3Rpb25uw6knO1xyXG4gICAgICAgICAgICBpZiAoaW1nRWwpIHtcclxuICAgICAgICAgICAgICAgIGltZ0VsLnNyYyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaW1nRWwuYWx0ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhbmtTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1bmlxdWVOYW1lICAgID0gZmlyc3QuZGF0YXNldC5pdGVtVW5pcXVlICAgIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lICAgICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1OYW1lICAgICAgfHwgZmlyc3QudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JbWFnZU5hbWUgPSBmaXJzdC5kYXRhc2V0Lml0ZW1JbWFnZU5hbWUgfHwgJyc7XHJcbiAgICAgICAgY29uc3QgaXRlbUNhdGVnb3J5ICA9IChmaXJzdC5kYXRhc2V0Lml0ZW1DYXRlZ29yeSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBmdXNpb25MaW1pdCAgID0gcGFyc2VJbnQoZmlyc3QuZGF0YXNldC5mdXNpb25MaW1pdCB8fCAnMCcsIDEwKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW1VbmlxdWVOYW1lSW5wdXQpXHJcbiAgICAgICAgICAgIGl0ZW1VbmlxdWVOYW1lSW5wdXQudmFsdWUgPSB1bmlxdWVOYW1lO1xyXG5cclxuICAgICAgICBpZiAobmFtZUVsKSAgIG5hbWVFbC50ZXh0Q29udGVudCAgID0gaXRlbU5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbWdFbCkge1xyXG4gICAgICAgICAgICBpbWdFbC5zcmMgPSBpdGVtSW1hZ2VOYW1lO1xyXG4gICAgICAgICAgICBpbWdFbC5hbHQgPSBpdGVtTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyYW5rU2VjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ID09PSAnbW9kcycgfHwgaXRlbUNhdGVnb3J5ID09PSAnbW9kJykge1xyXG4gICAgICAgICAgICAgICAgcmFua1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJhbmtJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGZ1c2lvbkxpbWl0KSAmJiBmdXNpb25MaW1pdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJhbmtJbnB1dC5tYXggPSBmdXNpb25MaW1pdDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChyYW5rSW5wdXQudmFsdWUgfHwgJzAnLCAxMCkgPiBmdXNpb25MaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtJbnB1dC52YWx1ZSA9IGZ1c2lvbkxpbWl0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFua0lucHV0Lm1heCAgID0gMDtcclxuICAgICAgICAgICAgICAgIHJhbmtJbnB1dC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblBhbmVsKCkge1xyXG4gICAgICAgIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpO1xyXG4gICAgICAgIGlmIChwYW5lbCkgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgaWYgKG92ZXJsYXkpIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlUGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKHBhbmVsKSAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIFNFQVJDSCBQUklOQ0lQQUwgKEhUTVgpIC0tLVxyXG5cclxuICAgIGlmIChzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVTZWFyY2hVaSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaEJ1dHRvbikge1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TGluayA9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHRzLWNvbnRlbnQgYScpIHx8XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyBhJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3RMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdExpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2hDbGVhciAmJiBzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgIHNlYXJjaENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNwaW5uZXIgSFRNWFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSAnJykge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaEljb24gJiYgc2VhcmNoU3Bpbm5lcikge1xyXG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNlYXJjaFNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoSWNvbiAmJiBzZWFyY2hTcGlubmVyKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUXVhbmQgSFRNWCByZW1wbGFjZSAjcmVzdWx0cyDihpIgc2kgbGUgcGFuZWwgZXN0IG91dmVydCwgb24gbWV0IMOgIGpvdXIgYXZlYyBsZSBub3V2ZWF1IHByZW1pZXIgcsOpc3VsdGF0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyU3dhcCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCAmJiBldnQudGFyZ2V0LmlkID09PSAncmVzdWx0cycpIHtcclxuICAgICAgICAgICAgaWYgKHBhbmVsICYmIHBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIC0tLSBBU0lERSA6IHN5bmNocm8gKyByZWNoZXJjaGUgQkREL0FQSSAtLS1cclxuXHJcbiAgICAvLyBvdXZlcnR1cmUgZHUgcGFubmVhdVxyXG4gICAgaWYgKHRvZ2dsZUJ0bikge1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29waWUgbGEgdmFsZXVyIGFjdHVlbGxlIGRlIGxhIGJhcnJlIGRlIHJlY2hlcmNoZSBwcmluY2lwYWxlXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dCAmJiBhc2lkZVNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgYXNpZGVTZWFyY2gudmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcGVuUGFuZWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3ZlcmxheSkge1xyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBhbmVsKTtcclxuICAgIH1cclxuICAgIGlmIChjbG9zZUJ0bikge1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFwZXIgZGFucyBsJ2lucHV0IGRlIGwnYXNpZGUg4oaSIG1ldCDDoCBqb3VyIGxlIHNlYXJjaCBwcmluY2lwYWwgKyBkw6ljbGVuY2hlIGxhIHJlY2hlcmNoZSBIVE1YXHJcbiAgICBpZiAoYXNpZGVTZWFyY2ggJiYgc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICBhc2lkZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBhc2lkZVNlYXJjaC52YWx1ZTtcclxuICAgICAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGTDqWNsZW5jaGUgdW4ga2V5dXAgcG91ciBxdWUgaHRteC9yZWFjdGl2ZSAoaHgtdHJpZ2dlcj1cImtleXVwIGNoYW5nZWQgZGVsYXk6MzAwbXNcIilcclxuICAgICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleXVwJywgeyBidWJibGVzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXIgZGUgbCdhc2lkZVxyXG4gICAgaWYgKGFzaWRlQ2xlYXIgJiYgYXNpZGVTZWFyY2gpIHtcclxuICAgICAgICBhc2lkZUNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhc2lkZVNlYXJjaC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhc2lkZVNlYXJjaC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dG8gaW5jcmVtZW50IGRlY3JlbWVudFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1saW5lJykuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGxpbmUucXVlcnlTZWxlY3RvcignLm51bWJlci1saW5lX19pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHVwICAgID0gbGluZS5xdWVyeVNlbGVjdG9yKCcudXAnKTtcclxuICAgICAgICBjb25zdCBkb3duICA9IGxpbmUucXVlcnlTZWxlY3RvcignLmRvd24nKTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dCB8fCAhdXAgfHwgIWRvd24pIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGludGVydmFsID0gbnVsbDtcclxuICAgICAgICBsZXQgaG9sZFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSB8fCAnOTk5OTk5OScsIDEwKTtcclxuICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludChpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8ICcwJywgMTApO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnIHx8IGlucHV0LnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gbWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xhbXBWYWx1ZSh2YWwpIHtcclxuICAgICAgICAgICAgdmFsID0gcGFyc2VJbnQodmFsLCAxMCk7XHJcbiAgICAgICAgICAgIGlmIChpc05hTih2YWwpKSB2YWwgPSBtaW47XHJcbiAgICAgICAgICAgIGlmICh2YWwgPCBtaW4pIHZhbCA9IG1pbjtcclxuICAgICAgICAgICAgaWYgKHZhbCA+IG1heCkgdmFsID0gbWF4O1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYXBwbHlDbGFtcCgpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjbGFtcFZhbHVlKGlucHV0LnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNhZmVTdGVwVXAoKSB7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICAgICAgaW5wdXQuc3RlcFVwKCk7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNhZmVTdGVwRG93bigpIHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgICAgICBpbnB1dC5zdGVwRG93bigpO1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEhvbGQoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaG9sZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGFjdGlvbiwgNzApO1xyXG4gICAgICAgICAgICB9LCAxNzApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcEhvbGQoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChob2xkVGltZXIpO1xyXG4gICAgICAgICAgICBob2xkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIGludGVydmFsID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5jcmVtZW50XHJcbiAgICAgICAgdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBVcCgpKSk7XHJcbiAgICAgICAgdXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwVXAoKSksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgLy8gZGVjcmVtZW50XHJcbiAgICAgICAgZG93bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcERvd24oKSkpO1xyXG4gICAgICAgIGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwRG93bigpKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAvLyBFbXDDqmNoZXIgdG91dGUgZW50csOpZSBpbnZhbGlkZSBhdSBjbGF2aWVyXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc3RvcFxyXG4gICAgICAgIFsnbW91c2V1cCcsICdtb3VzZWxlYXZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ10uZm9yRWFjaChldnQgPT5cclxuICAgICAgICAgICAgbGluZS5hZGRFdmVudExpc3RlbmVyKGV2dCwgc3RvcEhvbGQpXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWNvbnNlbnRcIik7XHJcbiAgICBjb25zdCBhY2NlcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZ1c2UtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlbWVtYmVyQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9yZW1lbWJlcl9tZVwiKTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgcXVlIGxlcyDDqWzDqW1lbnRzIGV4aXN0ZW50XHJcbiAgICBpZiAoIWJveCB8fCAhYWNjZXB0IHx8ICFyZWZ1c2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLDiWzDqW1lbnRzIGNvb2tpZSBub24gdHJvdXbDqXNcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgIC8vIEFGRklDSEFHRSBJTklUSUFMXHJcbiAgICBpZiAoIWNvbnNlbnQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOJU0FDVElWRVIgUkVNRU1CRVIgTUUgU0kgUkVGVVNcclxuICAgIGlmIChjb25zZW50ICE9PSBcImFjY2VwdGVkXCIgJiYgcmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFDQ0VQVEVSXHJcbiAgICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwiYWNjZXB0ZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSRUZVU0VSXHJcbiAgICByZWZ1c2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwicmVmdXNlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIExFIEJPVVRPTiBSw4lEVUlUIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtZXhwYW5kLWJ0blwiKTtcclxuICAgIGlmIChjb2xsYXBzZUJ0bikge1xyXG4gICAgICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBSRU1FTUJFUiBNRSBBUFLDiFMgVU4gUkVGVVMg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICBjb25zdCByZW1lbWJlckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiX3JlbWVtYmVyX21lXCJdJyk7XHJcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckxhYmVsKSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsInRhcmdldCIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInZhbHVlIiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwidGV4dENvbnRlbnQiLCJyZXN1bHQiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInJlZ2lzdGVyRW1haWwiLCJ2IiwiZW1haWxGaWVsZHMiLCJmIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJjb25jYXQiLCJwc2V1ZG9GaWVsZHMiLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwiYnRuIiwicmVzdWx0cyIsImNsZWFyIiwiYXNpZGVJbnB1dCIsImFzaWRlQ2xlYXIiLCJ0b2dnbGVCdG4iLCJjbGVhclJlc3VsdHMiLCJpbm5lckhUTUwiLCJ1cGRhdGVCdXR0b24iLCJoYXNWYWx1ZSIsImUiLCJmaXJzdExpbmsiLCJjbGljayIsImZvY3VzIiwiZXZ0IiwiZGV0YWlsIiwiZWx0IiwiaWNvbiIsInNwaW5uZXIiLCJLZXlib2FyZEV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaFJlc3VsdHMiLCJzZWFyY2hDbGVhciIsInNlYXJjaEljb24iLCJzZWFyY2hTcGlubmVyIiwicGFuZWwiLCJvdmVybGF5IiwiY2xvc2VCdG4iLCJhc2lkZVNlYXJjaCIsIm5hbWVFbCIsInVuaXF1ZUVsIiwiaXRlbUlkSW5wdXQiLCJpbWdFbCIsIml0ZW1VbmlxdWVOYW1lSW5wdXQiLCJyYW5rU2VjdGlvbiIsInJhbmtJbnB1dCIsInVwZGF0ZVNlYXJjaFVpIiwiZ2V0Rmlyc3RSZXN1bHRFbGVtZW50IiwiZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0Iiwic3JjIiwiYWx0IiwidW5pcXVlTmFtZSIsIml0ZW1VbmlxdWUiLCJpdGVtTmFtZSIsIml0ZW1JbWFnZU5hbWUiLCJpdGVtQ2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsImZ1c2lvbkxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIm9wZW5QYW5lbCIsImNsb3NlUGFuZWwiLCJsaW5lIiwidXAiLCJkb3duIiwiaW50ZXJ2YWwiLCJob2xkVGltZXIiLCJnZXRBdHRyaWJ1dGUiLCJtaW4iLCJjbGFtcFZhbHVlIiwidmFsIiwiYXBwbHlDbGFtcCIsInNhZmVTdGVwVXAiLCJzdGVwVXAiLCJzYWZlU3RlcERvd24iLCJzdGVwRG93biIsInN0YXJ0SG9sZCIsImFjdGlvbiIsInNldEludGVydmFsIiwic3RvcEhvbGQiLCJjbGVhckludGVydmFsIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsIndhcm4iLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc2FibGVkIiwic2V0SXRlbSIsImNoZWNrZWQiLCJjb2xsYXBzZUJ0biIsInJlbWVtYmVyTGFiZWwiLCJjbGlja0hhbmRsZXIiLCJjdXJyZW50Q29uc2VudCIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==