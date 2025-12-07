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
});

/***/ }),

/***/ "./assets/scripts/place-order.js":
/*!***************************************!*\
  !*** ./assets/scripts/place-order.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.getElementById('place-order-toggle');
  var panel = document.getElementById('place-order-panel');
  var overlay = document.getElementById('place-order-overlay');
  var closeBtn = document.getElementById('place-order-close');
  var nameEl = document.getElementById('po-item-name');
  var imgEl = document.getElementById('po-item-image');
  var uniqueEl = document.getElementById('po-item-unique');
  var qtyRange = document.getElementById('po-quantity');
  var qtyValue = document.getElementById('po-quantity-value');
  var priceInput = document.getElementById('po-price');
  var priceTotal = document.getElementById('po-price-total');
  if (!toggleBtn || !panel || !overlay) {
    return;
  }
  function getFirstResultElement() {
    // Adapter le sélecteur à ta structure réelle
    return document.querySelector('#results .results-list .results-content .result-item') || document.querySelector('#results .result-item') || null;
  }
  function fillPanelFromFirstResult() {
    var first = getFirstResultElement();
    if (!first) {
      if (nameEl) nameEl.textContent = 'Aucun item sélectionné';
      if (imgEl) imgEl.src = '';
      if (uniqueEl) uniqueEl.textContent = '';
      return;
    }
    var itemName = first.dataset.itemName || first.textContent.trim();
    var itemImage = first.dataset.itemImage || '';
    var itemUnique = first.dataset.itemUnique || '';
    var itemPlat = first.dataset.itemPlatinum || '';
    if (nameEl) nameEl.textContent = itemName;
    if (uniqueEl) uniqueEl.textContent = itemUnique;
    if (imgEl) {
      imgEl.src = itemImage;
      imgEl.alt = itemName;
    }
    if (itemPlat && !isNaN(itemPlat)) {
      priceInput.value = parseInt(itemPlat, 10);
      updatePriceTotal();
    }
  }
  function openPanel() {
    fillPanelFromFirstResult();
    panel.classList.add('is-open');
    overlay.classList.add('is-open');
  }
  function closePanel() {
    panel.classList.remove('is-open');
    overlay.classList.remove('is-open');
  }
  function updateQuantityDisplay() {
    if (qtyValue && qtyRange) {
      qtyValue.textContent = qtyRange.value;
      updatePriceTotal();
    }
  }
  function updatePriceTotal() {
    if (!priceInput || !qtyRange || !priceTotal) return;
    var qty = parseInt(qtyRange.value || '1', 10);
    var price = parseInt(priceInput.value || '0', 10);
    var total = qty * price;
    priceTotal.textContent = isNaN(total) ? '0' : total.toString();
  }

  // Events
  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openPanel();
  });
  overlay.addEventListener('click', closePanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (qtyRange) {
    qtyRange.addEventListener('input', updateQuantityDisplay);
    updateQuantityDisplay();
  }
  if (priceInput) {
    priceInput.addEventListener('input', updatePriceTotal);
  }

  // Quand HTMX met à jour #results, on peut (optionnel) re-préparer les données
  document.addEventListener('htmx:afterSwap', function (evt) {
    if (evt.target && evt.target.id === 'results') {
      // facultatif : auto refresh du panel si ouvert
      if (panel.classList.contains('is-open')) {
        fillPanelFromFirstResult();
      }
    }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-917620"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R00sS0FBSyxDQUFDekQsT0FBTyxDQUFDdUssUUFBUTtNQUNwQzlHLEtBQUssQ0FBQytHLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDUkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvaXRlbVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9wbGFjZS1vcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZW1lbWJlcl9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVtZW1iZXJfbWUuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZXNldC1idG4uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9pdGVtU2VhcmNoLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcGxhY2Utb3JkZXIuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCAnaHRteC5vcmcnO1xyXG53aW5kb3cuaHRteCA9IHJlcXVpcmUoJ2h0bXgub3JnJyk7XHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJmdW5jdGlvbiBhdHRhY2hIb3ZlckRyb3Bkb3duKHRvZ2dsZVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhbGx5SGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIERlc2t0b3AgOiBob3ZlclxyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG5cclxuICAgICAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRHJvcGRvd24pO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVEcm9wZG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfbWVudVwiKTtcclxuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xyXG5cclxuICAgIGlmICghdG9nZ2xlIHx8ICFuYXZiYXJNZW51IHx8ICFuYXZiYXJDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZWdpb25FbHMgPSBbdG9nZ2xlLCBuYXZiYXJDb250YWluZXIsIGRyb3Bkb3duQ29udGVudF07XHJcblxyXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgIGxldCBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpc0luUmVnaW9uID0gKGVsKSA9PlxyXG4gICAgICAgIHJlZ2lvbkVscy5zb21lKChub2RlKSA9PiBub2RlICYmIG5vZGUuY29udGFpbnMoZWwpKTtcclxuXHJcbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlYWxseUhpZGVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNDbG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTGVhdmVSZWdpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0byA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XHJcbiAgICAgICAgaWYgKHRvICYmIGlzSW5SZWdpb24odG8pKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZUFsbCwgMTUwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlc2t0b3AgOiBob3ZlclxyXG4gICAgcmVnaW9uRWxzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0FsbCk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgb25MZWF2ZVJlZ2lvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXZiYXIpO1xyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZU5hdmJhciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhaXNJblJlZ2lvbihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhaXNJblJlZ2lvbihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIudGhlbWUtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG59KTsiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBWQUxJREFUSU9OIEfDiU7DiVJJUVVFIERFUyBGT1JNVUxBSVJFU1xyXG4gICBFbWFpbHMgKyBNb3RzIGRlIHBhc3NlICsgUHNldWRvcyArIEN1c3RvbSB2YWxpZGF0b3JzXHJcbiAgIENvbXBhdGlibGUgU3VwcG9ydCAvIFVzZXIgLyBMb2dpbiAvIEZvcmdvdFBhc3N3b3JkXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5jb25zdCBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIHNlbGVjdCwgdGV4dGFyZWEnO1xyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9uY3Rpb25zIGQnYXBwYXJlbmNlIGRlcyBpbnB1dHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dEVsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHJcbiAgICAvLyBQb3VyIGxlIHJlc3BvbnNpdmUgbW9iaWxlXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25CbHVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Gb2N1cyhldikge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBldi50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CbHVyKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJywgJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5c3TDqG1lIGRlIHZhbGlkYXRpb24gZ8OpbsOpcmlxdWVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xyXG5jb25zdCB2YWxpZGF0aW9uVGltZXJzID0ge307IC8vIFN0b2NrYWdlIGRlcyB0aW1lcnNcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsIHZhbGlkYXRlRm4pIHtcclxuICAgIHZhbGlkYXRvcnNbaW5wdXRJZF0gPSB7IGVycm9ySWQsIHZhbGlkYXRlRm4gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuVmFsaWRhdG9yKGlucHV0SWQpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRvcnNbaW5wdXRJZF07XHJcbiAgICBpZiAoIWNvbmZpZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVycm9ySWQpO1xyXG5cclxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnXFx1MDBBMCc7XHJcbiAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjb25maWcudmFsaWRhdGVGbihpbnB1dC52YWx1ZSwgaW5wdXQpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcclxuICAgICAgICBlcnJvckJveC50ZXh0Q29udGVudCA9IHJlc3VsdDtcclxuICAgICAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoVmFsaWRhdG9yKGlucHV0SWQsIGV2ZW50VHlwZXMgPSBbJ2lucHV0JywgJ2JsdXInXSwgZGVsYXlNcyA9IDMwMDApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XHJcblxyXG4gICAgZXZlbnRUeXBlcy5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICAvLyBQb3VyIGwnw6l2w6luZW1lbnQgJ2lucHV0Jywgb24gYWpvdXRlIHVuIGTDqWxhaSBkZSAzIHNlY29uZGVzXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NoYW5nZScpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2hhbmdlJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2JsdXInKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2JsdXInLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgJ3RvdWNoZW5kJyBwb3VyIG1vYmlsZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gUGV0aXQgZMOpbGFpIHBvdXIgw6l2aXRlciBsZXMgZG91YmxlcyBkw6ljbGVuY2hlbWVudHNcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcnVuVmFsaWRhdG9yKGlucHV0SWQpLCAxMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjbGljaycsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgRU1BSUxTIChnw6luw6lyaXF1ZXMgcG91ciB0b3V0IGxlIHNpdGUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckVtYWlsKGlucHV0SWQsIGVycm9ySWQpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBzYWlzaXIgdW5lIGFkcmVzc2UgZW1haWwuXCI7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBcIkFkcmVzc2UgZW1haWwgaW52YWxpZGUuXCI7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZW1haWxGaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX2VtYWlsXCIsIGVycm9ySWQ6IFwidXNlcl9lbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cclxuXTtcclxuXHJcbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgcHNldWRvLlwiO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA8IG1pbkxlbmd0aCkgcmV0dXJuIGBMZSBwc2V1ZG8gZG9pdCBjb250ZW5pciBhdSBtb2lucyAke21pbkxlbmd0aH0gY2FyYWN0w6hyZXMuYDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9uYW1lXCIsIGVycm9ySWQ6IFwicHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfcHNldWRvXCIsIGVycm9ySWQ6IFwidXNlcl9wc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzIH0sXHJcbl07XHJcblxyXG5wc2V1ZG9GaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyUHNldWRvKGYuaW5wdXRJZCwgZi5lcnJvcklkLCBmLm1pbkxlbmd0aCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgTU9UUyBERSBQQVNTRSAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJ1c2VyX3Bhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIFwiQXUgbW9pbnMgOCBjYXJhY3TDqHJlcyByZXF1aXMuXCI7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIFwiVW5lIG1hanVzY3VsZSBlc3QgcmVxdWlzZS5cIjtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2hpZmZyZSBlc3QgcmVxdWlzLlwiO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gXCJVbiBjYXJhY3TDqHJlIHNww6ljaWFsIGVzdCByZXF1aXMuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJ1c2VyX3Bhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBjb25maXJtZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIFwiTGVzIG1vdHMgZGUgcGFzc2UgbmUgY29ycmVzcG9uZGVudCBwYXMuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiBcIkF1IG1vaW5zIDggY2FyYWN0w6hyZXMgcmVxdWlzLlwiO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiBcIlVuZSBtYWp1c2N1bGUgZXN0IHJlcXVpc2UuXCI7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiBcIlVuIGNoaWZmcmUgZXN0IHJlcXVpcy5cIjtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2FyYWN0w6hyZSBzcMOpY2lhbCBlc3QgcmVxdWlzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBjb25maXJtZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIFwiTGVzIG1vdHMgZGUgcGFzc2UgbmUgY29ycmVzcG9uZGVudCBwYXMuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB2b3RyZSBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgXCJvdWJsacOpXCIgKG5vdXZlYXUgbW90IGRlIHBhc3NlLCBzaSB0dSBhcyB1biBjaGFtcHMgZMOpZGnDqSlcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBjaG9pc2lyIHVuZSBjYXTDqWdvcmllLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtZXNzYWdlLlwiO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgMTApIHJldHVybiBcIkxlIG1lc3NhZ2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfaW1hZ2VGaWxlXCIsIFwiaW1hZ2UtZXJyb3JcIiwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkID0gW1wiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiLCBcImltYWdlL3BuZ1wiLCBcImltYWdlL3dlYnBcIl07XHJcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XHJcblxyXG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHJldHVybiBcIkZvcm1hdHMgYXV0b3Jpc8OpcyA6IEpQRUcsIEpQRywgUE5HLCBXRUJQLlwiO1xyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IG1heCkgcmV0dXJuIFwiSW1hZ2UgdHJvcCB2b2x1bWluZXVzZSAobWF4IDIgTW8pLlwiO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFydW5WYWxpZGF0b3IoaW5wdXRJZCkpIHtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cclxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvcikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUSUFMSVNBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgc3VwcG9ydFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCBbJ2NoYW5nZScsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSByZXNldCBwYXNzd29yZFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJuYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgw6l2ZW50dWVscyBkdSBmb3JtdWxhaXJlIFwibW90IGRlIHBhc3NlIG91Ymxpw6lcIlxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcclxuICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XHJcbiAgICBjb25zdCBjbGVhciAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbGVhcicpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICAgICAgICBpZiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXN1bHRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gdiAhPT0gJyc7XHJcblxyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gY2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidG4pIHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmsgPVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50IGEnKSB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgYScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0TGluaykge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xlYXIgJiYgaW5wdXQpIHtcclxuICAgICAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAodiA9PT0gJycpIHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pY29uXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zcGlubmVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoaWNvbiAmJiBzcGlubmVyKSB7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtc3Bpbm5lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGljb24gJiYgc3Bpbm5lcikge1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgfSk7XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci10b2dnbGUnKTtcclxuICAgIGNvbnN0IHBhbmVsICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXBhbmVsJyk7XHJcbiAgICBjb25zdCBvdmVybGF5ICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1jbG9zZScpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVFbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tbmFtZScpO1xyXG4gICAgY29uc3QgaW1nRWwgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS1pbWFnZScpO1xyXG4gICAgY29uc3QgdW5pcXVlRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS11bmlxdWUnKTtcclxuICAgIGNvbnN0IHF0eVJhbmdlICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLXF1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBxdHlWYWx1ZSAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1xdWFudGl0eS12YWx1ZScpO1xyXG4gICAgY29uc3QgcHJpY2VJbnB1dCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8tcHJpY2UnKTtcclxuICAgIGNvbnN0IHByaWNlVG90YWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLXByaWNlLXRvdGFsJyk7XHJcblxyXG4gICAgaWYgKCF0b2dnbGVCdG4gfHwgIXBhbmVsIHx8ICFvdmVybGF5KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpcnN0UmVzdWx0RWxlbWVudCgpIHtcclxuICAgICAgICAvLyBBZGFwdGVyIGxlIHPDqWxlY3RldXIgw6AgdGEgc3RydWN0dXJlIHLDqWVsbGVcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50IC5yZXN1bHQtaXRlbScpXHJcbiAgICAgICAgICAgIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHQtaXRlbScpXHJcbiAgICAgICAgICAgIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gZ2V0Rmlyc3RSZXN1bHRFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGlmICghZmlyc3QpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWVFbCkgbmFtZUVsLnRleHRDb250ZW50ID0gJ0F1Y3VuIGl0ZW0gc8OpbGVjdGlvbm7DqSc7XHJcbiAgICAgICAgICAgIGlmIChpbWdFbCkgaW1nRWwuc3JjID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVFbCkgdW5pcXVlRWwudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgICA9IGZpcnN0LmRhdGFzZXQuaXRlbU5hbWUgfHwgZmlyc3QudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JbWFnZSAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1JbWFnZSB8fCAnJztcclxuICAgICAgICBjb25zdCBpdGVtVW5pcXVlID0gZmlyc3QuZGF0YXNldC5pdGVtVW5pcXVlIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1QbGF0ICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1QbGF0aW51bSB8fCAnJztcclxuXHJcbiAgICAgICAgaWYgKG5hbWVFbCkgICBuYW1lRWwudGV4dENvbnRlbnQgICA9IGl0ZW1OYW1lO1xyXG4gICAgICAgIGlmICh1bmlxdWVFbCkgdW5pcXVlRWwudGV4dENvbnRlbnQgPSBpdGVtVW5pcXVlO1xyXG4gICAgICAgIGlmIChpbWdFbCkge1xyXG4gICAgICAgICAgICBpbWdFbC5zcmMgPSBpdGVtSW1hZ2U7XHJcbiAgICAgICAgICAgIGltZ0VsLmFsdCA9IGl0ZW1OYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW1QbGF0ICYmICFpc05hTihpdGVtUGxhdCkpIHtcclxuICAgICAgICAgICAgcHJpY2VJbnB1dC52YWx1ZSA9IHBhcnNlSW50KGl0ZW1QbGF0LCAxMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVG90YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblBhbmVsKCkge1xyXG4gICAgICAgIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpO1xyXG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVBhbmVsKCkge1xyXG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWFudGl0eURpc3BsYXkoKSB7XHJcbiAgICAgICAgaWYgKHF0eVZhbHVlICYmIHF0eVJhbmdlKSB7XHJcbiAgICAgICAgICAgIHF0eVZhbHVlLnRleHRDb250ZW50ID0gcXR5UmFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVG90YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJpY2VUb3RhbCgpIHtcclxuICAgICAgICBpZiAoIXByaWNlSW5wdXQgfHwgIXF0eVJhbmdlIHx8ICFwcmljZVRvdGFsKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcXR5ICAgPSBwYXJzZUludChxdHlSYW5nZS52YWx1ZSB8fCAnMScsIDEwKTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlSW50KHByaWNlSW5wdXQudmFsdWUgfHwgJzAnLCAxMCk7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBxdHkgKiBwcmljZTtcclxuICAgICAgICBwcmljZVRvdGFsLnRleHRDb250ZW50ID0gaXNOYU4odG90YWwpID8gJzAnIDogdG90YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFdmVudHNcclxuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9wZW5QYW5lbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUGFuZWwpO1xyXG4gICAgaWYgKGNsb3NlQnRuKSBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUGFuZWwpO1xyXG5cclxuICAgIGlmIChxdHlSYW5nZSkge1xyXG4gICAgICAgIHF0eVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlUXVhbnRpdHlEaXNwbGF5KTtcclxuICAgICAgICB1cGRhdGVRdWFudGl0eURpc3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJpY2VJbnB1dCkge1xyXG4gICAgICAgIHByaWNlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVQcmljZVRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBRdWFuZCBIVE1YIG1ldCDDoCBqb3VyICNyZXN1bHRzLCBvbiBwZXV0IChvcHRpb25uZWwpIHJlLXByw6lwYXJlciBsZXMgZG9ubsOpZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJTd2FwJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ICYmIGV2dC50YXJnZXQuaWQgPT09ICdyZXN1bHRzJykge1xyXG4gICAgICAgICAgICAvLyBmYWN1bHRhdGlmIDogYXV0byByZWZyZXNoIGR1IHBhbmVsIHNpIG91dmVydFxyXG4gICAgICAgICAgICBpZiAocGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiaHRteCIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlVGltZW91dCIsImlzT3BlbiIsInNob3dEcm9wZG93biIsImNsZWFyVGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJzZWxlY3RvciIsImlucHV0cyIsImZvcm0iLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwidmFsdWUiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwicnVuVmFsaWRhdG9yIiwiY29uZmlnIiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsInJlc3VsdCIsImF0dGFjaFZhbGlkYXRvciIsImV2ZW50VHlwZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWxheU1zIiwiZXZlbnRUeXBlIiwicmVnaXN0ZXJFbWFpbCIsInYiLCJlbWFpbEZpZWxkcyIsImYiLCJyZWdpc3RlclBzZXVkbyIsIm1pbkxlbmd0aCIsImNvbmNhdCIsInBzZXVkb0ZpZWxkcyIsInRlc3QiLCJmaXJzdCIsImZpbGUiLCJmaWxlcyIsImFsbG93ZWQiLCJtYXgiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwib25TdWJtaXQiLCJoYXNFcnJvciIsIk9iamVjdCIsImtleXMiLCJpZCIsImxvZ2luRm9ybSIsInRhZ05hbWUiLCJidG4iLCJyZXN1bHRzIiwiY2xlYXIiLCJjbGVhclJlc3VsdHMiLCJpbm5lckhUTUwiLCJ1cGRhdGVCdXR0b24iLCJoYXNWYWx1ZSIsImUiLCJmaXJzdExpbmsiLCJjbGljayIsImZvY3VzIiwiZXZ0IiwiZGV0YWlsIiwiZWx0IiwiaWNvbiIsInNwaW5uZXIiLCJ0b2dnbGVCdG4iLCJwYW5lbCIsIm92ZXJsYXkiLCJjbG9zZUJ0biIsIm5hbWVFbCIsImltZ0VsIiwidW5pcXVlRWwiLCJxdHlSYW5nZSIsInF0eVZhbHVlIiwicHJpY2VJbnB1dCIsInByaWNlVG90YWwiLCJnZXRGaXJzdFJlc3VsdEVsZW1lbnQiLCJmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQiLCJzcmMiLCJpdGVtTmFtZSIsIml0ZW1JbWFnZSIsIml0ZW1VbmlxdWUiLCJpdGVtUGxhdCIsIml0ZW1QbGF0aW51bSIsImFsdCIsImlzTmFOIiwicGFyc2VJbnQiLCJ1cGRhdGVQcmljZVRvdGFsIiwib3BlblBhbmVsIiwiY2xvc2VQYW5lbCIsInVwZGF0ZVF1YW50aXR5RGlzcGxheSIsInF0eSIsInByaWNlIiwidG90YWwiLCJ0b1N0cmluZyIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJ3YXJuIiwiY29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNhYmxlZCIsInNldEl0ZW0iLCJjaGVja2VkIiwiY29sbGFwc2VCdG4iLCJyZW1lbWJlckxhYmVsIiwiY2xpY2tIYW5kbGVyIiwiY3VycmVudENvbnNlbnQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9