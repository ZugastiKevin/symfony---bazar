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
    if (v === "") return t('email_required');
    if (!input.checkValidity()) return t('email_invalid');
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

function t(key) {
  return window.appTranslations && window.appTranslations[key] || key;
}
function registerPseudo(inputId, errorId) {
  var minLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  registerValidator(inputId, errorId, function (value) {
    var v = value.trim();
    if (v === "") return t('pseudo_required');
    if (v.length < minLength) return t('pseudo_min_3');
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
  if (v === "") return t('password_required');
  if (v.length < 8) return t('password_length_8');
  if (!/[A-Z]/.test(v)) return t('password_upper');
  if (!/\d/.test(v)) return t('password_number');
  if (!/[\W_]/.test(v)) return t('password_special');
  return true;
});
registerValidator("user_plainPassword_second", "user_password_second-error", function (value) {
  var first = document.getElementById("user_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});
registerValidator("reset_password_form_plainPassword_first", "reset_password_form_plainPassword_first-error", function (value) {
  var v = value.trim();
  if (v === "") return t('password_required');
  if (v.length < 8) return t('password_length_8');
  if (!/[A-Z]/.test(v)) return t('password_upper');
  if (!/\d/.test(v)) return t('password_number');
  if (!/[\W_]/.test(v)) return t('password_special');
  return true;
});
registerValidator("reset_password_form_plainPassword_second", "reset_password_form_plainPassword_second-error", function (value) {
  var first = document.getElementById("reset_password_form_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});

// Mot de passe de connexion
registerValidator("password", "password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// Mot de passe "oublié" (nouveau mot de passe, si tu as un champs dédié)
registerValidator("forgot_password", "forgot_password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// =====================================================
// VALIDATEURS SUPPORT SUPPLÉMENTAIRES → category / message / image
// =====================================================

registerValidator("support_category", "selecte-error", function (value) {
  if (!value || value.trim() === "") return t('support_category_required');
  return true;
});
registerValidator("support_message", "text-area-error", function (value) {
  var v = value.trim();
  if (v === "") return t('support_message_required');
  if (v.length < 10) return t('support_message_min_10');
  return true;
});

// VALIDATION DE L’IMAGE (support)
registerValidator("support_imageFile", "image-error", function (value, input) {
  var file = input.files[0];
  if (!file) return true;
  var allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  var max = 2 * 1024 * 1024;
  if (!allowed.includes(file.type)) return t('image_type');
  if (file.size > max) return t('image_size');
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
    if (asideClear) {
      var _wrapper = asideClear.closest('.search-input-wrapper');
      if (_wrapper) {
        _wrapper.classList.toggle('has-value', hasValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssSUFBSUEsS0FBSyxDQUFDekQsT0FBTyxDQUFDcU0sUUFBUSxLQUFLeEgsU0FBUyxFQUFFO01BQy9DcEIsS0FBSyxDQUFDTixLQUFLLEdBQUdNLEtBQUssQ0FBQ3pELE9BQU8sQ0FBQ3FNLFFBQVE7TUFDcEM1SSxLQUFLLENBQUNzRSxhQUFhLENBQUMsSUFBSXVFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9pdGVtU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZW1lbWJlcl9tZS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2l0ZW1TZWFyY2guanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9wbGFjZS1vcmRlci5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICdodG14Lm9yZyc7XHJcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVEcm9wZG93biwgMTUwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZURyb3Bkb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hOYXZiYXJEcm9wZG93bigpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1uYXZiYXJcIik7XHJcblxyXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lvbkVscyA9IFt0b2dnbGUsIG5hdmJhckNvbnRhaW5lciwgZHJvcGRvd25Db250ZW50XTtcclxuXHJcbiAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgbGV0IGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGlzSW5SZWdpb24gPSAoZWwpID0+XHJcbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGlzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVhbGx5SGlkZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcclxuICAgICAgICBpZiAodG8gJiYgaXNJblJlZ2lvbih0bykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0FsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93QWxsKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlTmF2YmFyLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIubGFuZ3VhZ2UtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbn0pOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFZBTElEQVRJT04gR8OJTsOJUklRVUUgREVTIEZPUk1VTEFJUkVTXHJcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcclxuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cclxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3lzdMOobWUgZGUgdmFsaWRhdGlvbiBnw6luw6lyaXF1ZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xyXG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcclxuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICdcXHUwMEEwJztcclxuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBFTUFJTFMgKGfDqW7DqXJpcXVlcyBwb3VyIHRvdXQgbGUgc2l0ZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoaW5wdXRJZCwgZXJyb3JJZCkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdlbWFpbF9yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gdCgnZW1haWxfaW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVtYWlsRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJuYW1lXCIsIGVycm9ySWQ6IFwidXNlcm5hbWUtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XHJcbl07XHJcblxyXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gdChrZXkpIHtcclxuICAgIHJldHVybiAod2luZG93LmFwcFRyYW5zbGF0aW9ucyAmJiB3aW5kb3cuYXBwVHJhbnNsYXRpb25zW2tleV0pIHx8IGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJQc2V1ZG8oaW5wdXRJZCwgZXJyb3JJZCwgbWluTGVuZ3RoID0gMykge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3BzZXVkb19yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA8IG1pbkxlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19taW5fMycpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBzZXVkb0ZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X25hbWVcIiwgZXJyb3JJZDogXCJwc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuXTtcclxuXHJcbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9udW1iZXInKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInVzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiB0KCdwYXNzd29yZF9sZW5ndGhfOCcpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF91cHBlcicpO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfbnVtYmVyJyk7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9zcGVjaWFsJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb25cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgXCJvdWJsacOpXCIgKG5vdXZlYXUgbW90IGRlIHBhc3NlLCBzaSB0dSBhcyB1biBjaGFtcHMgZMOpZGnDqSlcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfY2F0ZWdvcnlfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9tZXNzYWdlXCIsIFwidGV4dC1hcmVhLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCAxMCkgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9taW5fMTAnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfaW1hZ2VGaWxlXCIsIFwiaW1hZ2UtZXJyb3JcIiwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkID0gW1wiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiLCBcImltYWdlL3BuZ1wiLCBcImltYWdlL3dlYnBcIl07XHJcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XHJcblxyXG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHJldHVybiB0KCdpbWFnZV90eXBlJyk7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSByZXR1cm4gdCgnaW1hZ2Vfc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFydW5WYWxpZGF0b3IoaW5wdXRJZCkpIHtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cclxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvcikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUSUFMSVNBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgc3VwcG9ydFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCBbJ2NoYW5nZScsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSByZXNldCBwYXNzd29yZFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJuYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgw6l2ZW50dWVscyBkdSBmb3JtdWxhaXJlIFwibW90IGRlIHBhc3NlIG91Ymxpw6lcIlxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcclxuICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XHJcbiAgICBjb25zdCBjbGVhciAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbGVhcicpO1xyXG5cclxuICAgIGNvbnN0IGFzaWRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBhc2lkZUNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1jbGVhcicpO1xyXG4gICAgY29uc3QgdG9nZ2xlQnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci10b2dnbGUnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uKCkge1xyXG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdiA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IHYgIT09ICcnO1xyXG5cclxuICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGNsZWFyLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtdmFsdWUnLCBoYXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc2lkZUNsZWFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBhc2lkZUNsZWFyLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtdmFsdWUnLCBoYXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgY2xlYXJSZXN1bHRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXNpZGVJbnB1dCkge1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5rID1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHRzLWxpc3QgLnJlc3VsdHMtY29udGVudCBhJykgfHxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIGEnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdExpbmspIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TGluay5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsZWFyICYmIGlucHV0KSB7XHJcbiAgICAgICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YmVmb3JlUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGV0YWlsLmVsdDtcclxuXHJcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdiA9IGVsLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYgKHYgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtc3Bpbm5lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGljb24gJiYgc3Bpbm5lcikge1xyXG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGV0YWlsLmVsdDtcclxuXHJcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWljb25cIik7XHJcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXNwaW5uZXJcIik7XHJcblxyXG4gICAgICAgIGlmIChpY29uICYmIHNwaW5uZXIpIHtcclxuICAgICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0b2dnbGVCdG4gJiYgaW5wdXQgJiYgYXNpZGVJbnB1dCkge1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYXNpZGVJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc2lkZUlucHV0ICYmIGlucHV0KSB7XHJcbiAgICAgICAgYXNpZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29waWUgbGEgdmFsZXVyIGRhbnMgbGUgY2hhbXAgcXVpIGEgbGVzIGF0dHJpYnV0cyBoeC0qXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gYXNpZGVJbnB1dC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1ldCDDoCBqb3VyIGwnw6l0YXQgZHUgYm91dG9uIC8gY2xlYXIgLyByw6lzdWx0YXRzXHJcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gZMOpY2xlbmNoZSB1biBrZXl1cCBwb3VyIHF1ZSBodG14IHLDqWFnaXNzZSAoaHgtdHJpZ2dlcj1cImtleXVwIGNoYW5nZWQgZGVsYXk6MzAwbXNcIilcclxuICAgICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleXVwJywgeyBidWJibGVzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFzaWRlQ2xlYXIgJiYgYXNpZGVJbnB1dCkge1xyXG4gICAgICAgIGFzaWRlQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFzaWRlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgYXNpZGVJbnB1dC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2kgdHUgdmV1eCBhdXNzaSB2aWRlciBsYSByZWNoZXJjaGUgcHJpbmNpcGFsZSBldCBsZXMgcsOpc3VsdGF0cyA6XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcclxuICAgIGNvbnN0IHNlYXJjaENsZWFyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNsZWFyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pY29uJyk7XHJcbiAgICBjb25zdCBzZWFyY2hTcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zcGlubmVyJyk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQnRuICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci10b2dnbGUnKTtcclxuICAgIGNvbnN0IHBhbmVsICAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItcGFuZWwnKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItb3ZlcmxheScpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1jbG9zZScpO1xyXG5cclxuICAgIGNvbnN0IGFzaWRlU2VhcmNoICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBhc2lkZUNsZWFyICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1jbGVhcicpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVFbCAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS1uYW1lJyk7XHJcbiAgICBjb25zdCB1bmlxdWVFbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tdW5pcXVlJyk7XHJcbiAgICBjb25zdCBpdGVtSWRJbnB1dCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0taWQnKTtcclxuICAgIGNvbnN0IGltZ0VsICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG8taXRlbS1pbWFnZSBpbWcnKTtcclxuICAgIGNvbnN0IGl0ZW1VbmlxdWVOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS11bmlxdWVOYW1lJyk7XHJcbiAgICBjb25zdCByYW5rU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wby1yYW5rLXNlY3Rpb24nKTtcclxuICAgIGNvbnN0IHJhbmtJbnB1dCAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLXJhbmstc2VjdGlvbiAubnVtYmVyLWxpbmVfX2lucHV0Jyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cykge1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTZWFyY2hVaSgpIHtcclxuICAgICAgICBpZiAoIXNlYXJjaElucHV0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHYgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSB2ICE9PSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaENsZWFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzZWFyY2hDbGVhci5jbG9zZXN0KCcuc2VhcmNoLWlucHV0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLXZhbHVlJywgaGFzVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3luY2hyb25pc2UgbCdhc2lkZSBhdmVjIGxlIHNlYXJjaCBwcmluY2lwYWxcclxuICAgICAgICBpZiAoYXNpZGVTZWFyY2gpIHtcclxuICAgICAgICAgICAgYXNpZGVTZWFyY2gudmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RSZXN1bHRFbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHRzLWNvbnRlbnRbZGF0YS1pdGVtLW5hbWVdJykgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3QgPSBnZXRGaXJzdFJlc3VsdEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgICAgICBpZiAobmFtZUVsKSAgIG5hbWVFbC50ZXh0Q29udGVudCAgID0gJ0F1Y3VuIGl0ZW0gc8OpbGVjdGlvbm7DqSc7XHJcbiAgICAgICAgICAgIGlmIChpbWdFbCkge1xyXG4gICAgICAgICAgICAgICAgaW1nRWwuc3JjID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpbWdFbC5hbHQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFua1NlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJhbmtTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5hbWUgICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1VbmlxdWUgICAgfHwgJyc7XHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgICAgICA9IGZpcnN0LmRhdGFzZXQuaXRlbU5hbWUgICAgICB8fCBmaXJzdC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbUltYWdlTmFtZSA9IGZpcnN0LmRhdGFzZXQuaXRlbUltYWdlTmFtZSB8fCAnJztcclxuICAgICAgICBjb25zdCBpdGVtQ2F0ZWdvcnkgID0gKGZpcnN0LmRhdGFzZXQuaXRlbUNhdGVnb3J5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGZ1c2lvbkxpbWl0ICAgPSBwYXJzZUludChmaXJzdC5kYXRhc2V0LmZ1c2lvbkxpbWl0IHx8ICcwJywgMTApO1xyXG5cclxuICAgICAgICBpZiAoaXRlbVVuaXF1ZU5hbWVJbnB1dClcclxuICAgICAgICAgICAgaXRlbVVuaXF1ZU5hbWVJbnB1dC52YWx1ZSA9IHVuaXF1ZU5hbWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lRWwpICAgbmFtZUVsLnRleHRDb250ZW50ICAgPSBpdGVtTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGltZ0VsKSB7XHJcbiAgICAgICAgICAgIGltZ0VsLnNyYyA9IGl0ZW1JbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIGltZ0VsLmFsdCA9IGl0ZW1OYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJhbmtTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09ICdtb2RzJyB8fCBpdGVtQ2F0ZWdvcnkgPT09ICdtb2QnKSB7XHJcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhbmtTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmFua0lucHV0KSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oZnVzaW9uTGltaXQpICYmIGZ1c2lvbkxpbWl0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmFua0lucHV0Lm1heCA9IGZ1c2lvbkxpbWl0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJhbmtJbnB1dC52YWx1ZSB8fCAnMCcsIDEwKSA+IGZ1c2lvbkxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0lucHV0LnZhbHVlID0gZnVzaW9uTGltaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5rSW5wdXQubWF4ICAgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmFua0lucHV0LnZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuUGFuZWwoKSB7XHJcbiAgICAgICAgZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0KCk7XHJcbiAgICAgICAgaWYgKHBhbmVsKSAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VQYW5lbCgpIHtcclxuICAgICAgICBpZiAocGFuZWwpICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gU0VBUkNIIFBSSU5DSVBBTCAoSFRNWCkgLS0tXHJcblxyXG4gICAgaWYgKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVNlYXJjaFVpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VhcmNoQnV0dG9uKSB7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5rID1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHRzLWxpc3QgLnJlc3VsdHMtY29udGVudCBhJykgfHxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIGEnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdExpbmspIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TGluay5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaENsZWFyICYmIHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgc2VhcmNoQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3Bpbm5lciBIVE1YXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmJlZm9yZVJlcXVlc3QnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcclxuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XHJcblxyXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHYgPSBlbC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VhcmNoSWNvbiAmJiBzZWFyY2hTcGlubmVyKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc2VhcmNoU3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclJlcXVlc3QnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcclxuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XHJcblxyXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hJY29uICYmIHNlYXJjaFNwaW5uZXIpIHtcclxuICAgICAgICAgICAgc2VhcmNoU3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBRdWFuZCBIVE1YIHJlbXBsYWNlICNyZXN1bHRzIOKGkiBzaSBsZSBwYW5lbCBlc3Qgb3V2ZXJ0LCBvbiBtZXQgw6Agam91ciBhdmVjIGxlIG5vdXZlYXUgcHJlbWllciByw6lzdWx0YXRcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJTd2FwJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ICYmIGV2dC50YXJnZXQuaWQgPT09ICdyZXN1bHRzJykge1xyXG4gICAgICAgICAgICBpZiAocGFuZWwgJiYgcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gLS0tIEFTSURFIDogc3luY2hybyArIHJlY2hlcmNoZSBCREQvQVBJIC0tLVxyXG5cclxuICAgIC8vIG91dmVydHVyZSBkdSBwYW5uZWF1XHJcbiAgICBpZiAodG9nZ2xlQnRuKSB7XHJcbiAgICAgICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjb3BpZSBsYSB2YWxldXIgYWN0dWVsbGUgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlIHByaW5jaXBhbGVcclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0ICYmIGFzaWRlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICBhc2lkZVNlYXJjaC52YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wZW5QYW5lbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdmVybGF5KSB7XHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUGFuZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YXBlciBkYW5zIGwnaW5wdXQgZGUgbCdhc2lkZSDihpIgbWV0IMOgIGpvdXIgbGUgc2VhcmNoIHByaW5jaXBhbCArIGTDqWNsZW5jaGUgbGEgcmVjaGVyY2hlIEhUTVhcclxuICAgIGlmIChhc2lkZVNlYXJjaCAmJiBzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgIGFzaWRlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGFzaWRlU2VhcmNoLnZhbHVlO1xyXG4gICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZMOpY2xlbmNoZSB1biBrZXl1cCBwb3VyIHF1ZSBodG14L3JlYWN0aXZlIChoeC10cmlnZ2VyPVwia2V5dXAgY2hhbmdlZCBkZWxheTozMDBtc1wiKVxyXG4gICAgICAgICAgICBjb25zdCBldnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGVhciBkZSBsJ2FzaWRlXHJcbiAgICBpZiAoYXNpZGVDbGVhciAmJiBhc2lkZVNlYXJjaCkge1xyXG4gICAgICAgIGFzaWRlQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0byBpbmNyZW1lbnQgZGVjcmVtZW50XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWxpbmUnKS5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gbGluZS5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLWxpbmVfX2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgdXAgICAgPSBsaW5lLnF1ZXJ5U2VsZWN0b3IoJy51cCcpO1xyXG4gICAgICAgIGNvbnN0IGRvd24gID0gbGluZS5xdWVyeVNlbGVjdG9yKCcuZG93bicpO1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0IHx8ICF1cCB8fCAhZG93bikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIGxldCBob2xkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludChpbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpIHx8ICc5OTk5OTk5JywgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnbWluJykgfHwgJzAnLCAxMCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycgfHwgaW5wdXQudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGFtcFZhbHVlKHZhbCkge1xyXG4gICAgICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkpIHZhbCA9IG1pbjtcclxuICAgICAgICAgICAgaWYgKHZhbCA8IG1pbikgdmFsID0gbWluO1xyXG4gICAgICAgICAgICBpZiAodmFsID4gbWF4KSB2YWwgPSBtYXg7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhcHBseUNsYW1wKCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNsYW1wVmFsdWUoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZVN0ZXBVcCgpIHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgICAgICBpbnB1dC5zdGVwVXAoKTtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZVN0ZXBEb3duKCkge1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgICAgIGlucHV0LnN0ZXBEb3duKCk7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0SG9sZChhY3Rpb24pIHtcclxuICAgICAgICAgICAgYWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBob2xkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9uLCA3MCk7XHJcbiAgICAgICAgICAgIH0sIDE3MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdG9wSG9sZCgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lcik7XHJcbiAgICAgICAgICAgIGhvbGRUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbmNyZW1lbnRcclxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcFVwKCkpKTtcclxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBVcCgpKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAvLyBkZWNyZW1lbnRcclxuICAgICAgICBkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwRG93bigpKSk7XHJcbiAgICAgICAgZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBEb3duKCkpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vIEVtcMOqY2hlciB0b3V0ZSBlbnRyw6llIGludmFsaWRlIGF1IGNsYXZpZXJcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgWydtb3VzZXVwJywgJ21vdXNlbGVhdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXS5mb3JFYWNoKGV2dCA9PlxyXG4gICAgICAgICAgICBsaW5lLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBzdG9wSG9sZClcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiaHRteCIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlVGltZW91dCIsImlzT3BlbiIsInNob3dEcm9wZG93biIsImNsZWFyVGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJzZWxlY3RvciIsImlucHV0cyIsImZvcm0iLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwidmFsdWUiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwicnVuVmFsaWRhdG9yIiwiY29uZmlnIiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsInJlc3VsdCIsImF0dGFjaFZhbGlkYXRvciIsImV2ZW50VHlwZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWxheU1zIiwiZXZlbnRUeXBlIiwicmVnaXN0ZXJFbWFpbCIsInYiLCJ0IiwiZW1haWxGaWVsZHMiLCJmIiwia2V5IiwiYXBwVHJhbnNsYXRpb25zIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJwc2V1ZG9GaWVsZHMiLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwiYnRuIiwicmVzdWx0cyIsImNsZWFyIiwiYXNpZGVJbnB1dCIsImFzaWRlQ2xlYXIiLCJ0b2dnbGVCdG4iLCJjbGVhclJlc3VsdHMiLCJpbm5lckhUTUwiLCJ1cGRhdGVCdXR0b24iLCJoYXNWYWx1ZSIsImUiLCJmaXJzdExpbmsiLCJjbGljayIsImZvY3VzIiwiZXZ0IiwiZGV0YWlsIiwiZWx0IiwiaWNvbiIsInNwaW5uZXIiLCJLZXlib2FyZEV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaFJlc3VsdHMiLCJzZWFyY2hDbGVhciIsInNlYXJjaEljb24iLCJzZWFyY2hTcGlubmVyIiwicGFuZWwiLCJvdmVybGF5IiwiY2xvc2VCdG4iLCJhc2lkZVNlYXJjaCIsIm5hbWVFbCIsInVuaXF1ZUVsIiwiaXRlbUlkSW5wdXQiLCJpbWdFbCIsIml0ZW1VbmlxdWVOYW1lSW5wdXQiLCJyYW5rU2VjdGlvbiIsInJhbmtJbnB1dCIsInVwZGF0ZVNlYXJjaFVpIiwiZ2V0Rmlyc3RSZXN1bHRFbGVtZW50IiwiZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0Iiwic3JjIiwiYWx0IiwidW5pcXVlTmFtZSIsIml0ZW1VbmlxdWUiLCJpdGVtTmFtZSIsIml0ZW1JbWFnZU5hbWUiLCJpdGVtQ2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsImZ1c2lvbkxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIm9wZW5QYW5lbCIsImNsb3NlUGFuZWwiLCJsaW5lIiwidXAiLCJkb3duIiwiaW50ZXJ2YWwiLCJob2xkVGltZXIiLCJnZXRBdHRyaWJ1dGUiLCJtaW4iLCJjbGFtcFZhbHVlIiwidmFsIiwiYXBwbHlDbGFtcCIsInNhZmVTdGVwVXAiLCJzdGVwVXAiLCJzYWZlU3RlcERvd24iLCJzdGVwRG93biIsInN0YXJ0SG9sZCIsImFjdGlvbiIsInNldEludGVydmFsIiwic3RvcEhvbGQiLCJjbGVhckludGVydmFsIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsIndhcm4iLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc2FibGVkIiwic2V0SXRlbSIsImNoZWNrZWQiLCJjb2xsYXBzZUJ0biIsInJlbWVtYmVyTGFiZWwiLCJjbGlja0hhbmRsZXIiLCJjdXJyZW50Q29uc2VudCIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==