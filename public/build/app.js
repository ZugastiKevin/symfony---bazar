(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/form.js */ "./assets/scripts/form.js");
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_remember_me_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/remember_me.js */ "./assets/scripts/remember_me.js");
/* harmony import */ var _scripts_remember_me_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_remember_me_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/reset-btn.js */ "./assets/scripts/reset-btn.js");
/* harmony import */ var _scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_itemSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/itemSearch.js */ "./assets/scripts/itemSearch.js");
/* harmony import */ var _scripts_itemSearch_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_itemSearch_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_place_order_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/place-order.js */ "./assets/scripts/place-order.js");
/* harmony import */ var _scripts_place_order_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_place_order_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/dropdown.js */ "./assets/scripts/dropdown.js");
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */








window.htmx = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.btn-copy');
  if (!btn) return;
  var text = btn.getAttribute('data-copy');
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)["catch"](function () {});
  } else {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
    } catch (err) {}
    document.body.removeChild(ta);
  }
  var card = btn.closest('.order-card');
  if (!card) return;
  var popup = card.querySelector('.copy-popup');
  if (!popup) return;
  popup.textContent = text;
  popup.classList.add('visible');
  setTimeout(function () {
    popup.classList.remove('visible');
    popup.textContent = '';
  }, 2000);
});

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
      input.value = asideInput.value;
      updateButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5TSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV5TixZQUFZLENBQUM7SUFDeEQsSUFBSUQsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQ3hOLGdCQUFnQixDQUFDLE9BQU8sRUFBRXlOLFlBQVksQ0FBQztJQUN6RDtFQUNKO0FBRUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xGRjFOLFFBQVEsQ0FBQ2tDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQXlMLE1BQU0sRUFBSTtFQUN0REEsTUFBTSxDQUFDM04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTW9GLEtBQUssR0FBR3VJLE1BQU0sQ0FBQ0Msc0JBQXNCO0lBQzNDLElBQUl4SSxLQUFLLElBQUlBLEtBQUssQ0FBQy9DLE9BQU8sQ0FBQ3dMLFFBQVEsS0FBS3RILFNBQVMsRUFBRTtNQUMvQ25CLEtBQUssQ0FBQ3hFLEtBQUssR0FBR3dFLEtBQUssQ0FBQy9DLE9BQU8sQ0FBQ3dMLFFBQVE7TUFDcEN6SSxLQUFLLENBQUNtRSxhQUFhLENBQUMsSUFBSXVFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9pdGVtU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZm9ybS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3JlbWVtYmVyX21lLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvaXRlbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJ2h0bXgub3JnJztcclxud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLmJ0bi1jb3B5Jyk7XHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvcHknKTtcclxuICAgIGlmICghdGV4dCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgdGEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIHRhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICB0YS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGEpO1xyXG4gICAgICAgIHRhLnNlbGVjdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBidG4uY2xvc2VzdCgnLm9yZGVyLWNhcmQnKTtcclxuICAgIGlmICghY2FyZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBvcHVwID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY29weS1wb3B1cCcpO1xyXG4gICAgaWYgKCFwb3B1cCkgcmV0dXJuO1xyXG5cclxuICAgIHBvcHVwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgcG9wdXAudGV4dENvbnRlbnQgPSAnJztcclxuICAgIH0sIDIwMDApO1xyXG59KTtcclxuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcclxuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xyXG4gICBDb21wYXRpYmxlIFN1cHBvcnQgLyBVc2VyIC8gTG9naW4gLyBGb3Jnb3RQYXNzd29yZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblxyXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcclxuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XHJcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xyXG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xyXG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ2VtYWlsX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiB0KCdlbWFpbF9pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZW1haWxGaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX2VtYWlsXCIsIGVycm9ySWQ6IFwidXNlcl9lbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cclxuXTtcclxuXHJcbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiB0KGtleSkge1xyXG4gICAgcmV0dXJuICh3aW5kb3cuYXBwVHJhbnNsYXRpb25zICYmIHdpbmRvdy5hcHBUcmFuc2xhdGlvbnNba2V5XSkgfHwga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncHNldWRvX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21pbl8zJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcHNldWRvRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX3BzZXVkb1wiLCBlcnJvcklkOiBcInVzZXJfcHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG5dO1xyXG5cclxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gdCgncGFzc3dvcmRfbGVuZ3RoXzgnKTtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfdXBwZXInKTtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX251bWJlcicpO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfc3BlY2lhbCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9udW1iZXInKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxyXG5yZWdpc3RlclZhbGlkYXRvcihcImZvcmdvdF9wYXNzd29yZFwiLCBcImZvcmdvdF9wYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9jYXRlZ29yeV9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX21pbl8xMCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gVkFMSURBVElPTiBERSBM4oCZSU1BR0UgKHN1cHBvcnQpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuICAgIGNvbnN0IG1heCA9IDIgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIHQoJ2ltYWdlX3R5cGUnKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiB0KCdpbWFnZV9zaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRJQUxJU0FUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHJlc2V0IHBhc3N3b3JkXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcclxuICAgIGNvbnN0IGNsZWFyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNsZWFyJyk7XHJcblxyXG4gICAgY29uc3QgYXNpZGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IGFzaWRlQ2xlYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWNsZWFyJyk7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXRvZ2dsZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICAgICAgICBpZiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXN1bHRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gdiAhPT0gJyc7XHJcblxyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gY2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFzaWRlQ2xlYXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGFzaWRlQ2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc2lkZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGFzaWRlSW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidG4pIHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmsgPVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50IGEnKSB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgYScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0TGluaykge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xlYXIgJiYgaW5wdXQpIHtcclxuICAgICAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAodiA9PT0gJycpIHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pY29uXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zcGlubmVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoaWNvbiAmJiBzcGlubmVyKSB7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtc3Bpbm5lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGljb24gJiYgc3Bpbm5lcikge1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRvZ2dsZUJ0biAmJiBpbnB1dCAmJiBhc2lkZUlucHV0KSB7XHJcbiAgICAgICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFzaWRlSW5wdXQgJiYgaW5wdXQpIHtcclxuICAgICAgICBhc2lkZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGFzaWRlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV2dCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXl1cCcsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc2lkZUNsZWFyICYmIGFzaWRlSW5wdXQpIHtcclxuICAgICAgICBhc2lkZUNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFzaWRlSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcclxuICAgIGNvbnN0IHNlYXJjaENsZWFyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNsZWFyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pY29uJyk7XHJcbiAgICBjb25zdCBzZWFyY2hTcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zcGlubmVyJyk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQnRuICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci10b2dnbGUnKTtcclxuICAgIGNvbnN0IHBhbmVsICAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItcGFuZWwnKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItb3ZlcmxheScpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1jbG9zZScpO1xyXG5cclxuICAgIGNvbnN0IGFzaWRlU2VhcmNoICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBhc2lkZUNsZWFyICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1jbGVhcicpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVFbCAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS1uYW1lJyk7XHJcbiAgICBjb25zdCB1bmlxdWVFbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tdW5pcXVlJyk7XHJcbiAgICBjb25zdCBpdGVtSWRJbnB1dCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0taWQnKTtcclxuICAgIGNvbnN0IGltZ0VsICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG8taXRlbS1pbWFnZSBpbWcnKTtcclxuICAgIGNvbnN0IGl0ZW1VbmlxdWVOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS11bmlxdWVOYW1lJyk7XHJcbiAgICBjb25zdCByYW5rU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wby1yYW5rLXNlY3Rpb24nKTtcclxuICAgIGNvbnN0IHJhbmtJbnB1dCAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLXJhbmstc2VjdGlvbiAubnVtYmVyLWxpbmVfX2lucHV0Jyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cykge1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTZWFyY2hVaSgpIHtcclxuICAgICAgICBpZiAoIXNlYXJjaElucHV0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHYgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSB2ICE9PSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaENsZWFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzZWFyY2hDbGVhci5jbG9zZXN0KCcuc2VhcmNoLWlucHV0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLXZhbHVlJywgaGFzVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUmVzdWx0cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3luY2hyb25pc2UgbCdhc2lkZSBhdmVjIGxlIHNlYXJjaCBwcmluY2lwYWxcclxuICAgICAgICBpZiAoYXNpZGVTZWFyY2gpIHtcclxuICAgICAgICAgICAgYXNpZGVTZWFyY2gudmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RSZXN1bHRFbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHRzLWNvbnRlbnRbZGF0YS1pdGVtLW5hbWVdJykgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3QgPSBnZXRGaXJzdFJlc3VsdEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgICAgICBpZiAobmFtZUVsKSAgIG5hbWVFbC50ZXh0Q29udGVudCAgID0gJ0F1Y3VuIGl0ZW0gc8OpbGVjdGlvbm7DqSc7XHJcbiAgICAgICAgICAgIGlmIChpbWdFbCkge1xyXG4gICAgICAgICAgICAgICAgaW1nRWwuc3JjID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpbWdFbC5hbHQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFua1NlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJhbmtTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5hbWUgICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1VbmlxdWUgICAgfHwgJyc7XHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgICAgICA9IGZpcnN0LmRhdGFzZXQuaXRlbU5hbWUgICAgICB8fCBmaXJzdC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbUltYWdlTmFtZSA9IGZpcnN0LmRhdGFzZXQuaXRlbUltYWdlTmFtZSB8fCAnJztcclxuICAgICAgICBjb25zdCBpdGVtQ2F0ZWdvcnkgID0gKGZpcnN0LmRhdGFzZXQuaXRlbUNhdGVnb3J5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGZ1c2lvbkxpbWl0ICAgPSBwYXJzZUludChmaXJzdC5kYXRhc2V0LmZ1c2lvbkxpbWl0IHx8ICcwJywgMTApO1xyXG5cclxuICAgICAgICBpZiAoaXRlbVVuaXF1ZU5hbWVJbnB1dClcclxuICAgICAgICAgICAgaXRlbVVuaXF1ZU5hbWVJbnB1dC52YWx1ZSA9IHVuaXF1ZU5hbWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lRWwpICAgbmFtZUVsLnRleHRDb250ZW50ICAgPSBpdGVtTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGltZ0VsKSB7XHJcbiAgICAgICAgICAgIGltZ0VsLnNyYyA9IGl0ZW1JbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIGltZ0VsLmFsdCA9IGl0ZW1OYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJhbmtTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09ICdtb2RzJyB8fCBpdGVtQ2F0ZWdvcnkgPT09ICdtb2QnKSB7XHJcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhbmtTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmFua0lucHV0KSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oZnVzaW9uTGltaXQpICYmIGZ1c2lvbkxpbWl0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmFua0lucHV0Lm1heCA9IGZ1c2lvbkxpbWl0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJhbmtJbnB1dC52YWx1ZSB8fCAnMCcsIDEwKSA+IGZ1c2lvbkxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0lucHV0LnZhbHVlID0gZnVzaW9uTGltaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5rSW5wdXQubWF4ICAgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmFua0lucHV0LnZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuUGFuZWwoKSB7XHJcbiAgICAgICAgZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0KCk7XHJcbiAgICAgICAgaWYgKHBhbmVsKSAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VQYW5lbCgpIHtcclxuICAgICAgICBpZiAocGFuZWwpICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gU0VBUkNIIFBSSU5DSVBBTCAoSFRNWCkgLS0tXHJcblxyXG4gICAgaWYgKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVNlYXJjaFVpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VhcmNoQnV0dG9uKSB7XHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5rID1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHRzLWxpc3QgLnJlc3VsdHMtY29udGVudCBhJykgfHxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIGEnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdExpbmspIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TGluay5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaENsZWFyICYmIHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgc2VhcmNoQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3Bpbm5lciBIVE1YXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmJlZm9yZVJlcXVlc3QnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcclxuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XHJcblxyXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHYgPSBlbC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VhcmNoSWNvbiAmJiBzZWFyY2hTcGlubmVyKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc2VhcmNoU3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclJlcXVlc3QnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcclxuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XHJcblxyXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hJY29uICYmIHNlYXJjaFNwaW5uZXIpIHtcclxuICAgICAgICAgICAgc2VhcmNoU3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBRdWFuZCBIVE1YIHJlbXBsYWNlICNyZXN1bHRzIOKGkiBzaSBsZSBwYW5lbCBlc3Qgb3V2ZXJ0LCBvbiBtZXQgw6Agam91ciBhdmVjIGxlIG5vdXZlYXUgcHJlbWllciByw6lzdWx0YXRcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJTd2FwJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ICYmIGV2dC50YXJnZXQuaWQgPT09ICdyZXN1bHRzJykge1xyXG4gICAgICAgICAgICBpZiAocGFuZWwgJiYgcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gLS0tIEFTSURFIDogc3luY2hybyArIHJlY2hlcmNoZSBCREQvQVBJIC0tLVxyXG5cclxuICAgIC8vIG91dmVydHVyZSBkdSBwYW5uZWF1XHJcbiAgICBpZiAodG9nZ2xlQnRuKSB7XHJcbiAgICAgICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjb3BpZSBsYSB2YWxldXIgYWN0dWVsbGUgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlIHByaW5jaXBhbGVcclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0ICYmIGFzaWRlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICBhc2lkZVNlYXJjaC52YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wZW5QYW5lbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdmVybGF5KSB7XHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUGFuZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YXBlciBkYW5zIGwnaW5wdXQgZGUgbCdhc2lkZSDihpIgbWV0IMOgIGpvdXIgbGUgc2VhcmNoIHByaW5jaXBhbCArIGTDqWNsZW5jaGUgbGEgcmVjaGVyY2hlIEhUTVhcclxuICAgIGlmIChhc2lkZVNlYXJjaCAmJiBzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgIGFzaWRlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGFzaWRlU2VhcmNoLnZhbHVlO1xyXG4gICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZMOpY2xlbmNoZSB1biBrZXl1cCBwb3VyIHF1ZSBodG14L3JlYWN0aXZlIChoeC10cmlnZ2VyPVwia2V5dXAgY2hhbmdlZCBkZWxheTozMDBtc1wiKVxyXG4gICAgICAgICAgICBjb25zdCBldnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGVhciBkZSBsJ2FzaWRlXHJcbiAgICBpZiAoYXNpZGVDbGVhciAmJiBhc2lkZVNlYXJjaCkge1xyXG4gICAgICAgIGFzaWRlQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0byBpbmNyZW1lbnQgZGVjcmVtZW50XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWxpbmUnKS5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gbGluZS5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLWxpbmVfX2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgdXAgICAgPSBsaW5lLnF1ZXJ5U2VsZWN0b3IoJy51cCcpO1xyXG4gICAgICAgIGNvbnN0IGRvd24gID0gbGluZS5xdWVyeVNlbGVjdG9yKCcuZG93bicpO1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0IHx8ICF1cCB8fCAhZG93bikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIGxldCBob2xkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludChpbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpIHx8ICc5OTk5OTk5JywgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnbWluJykgfHwgJzAnLCAxMCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycgfHwgaW5wdXQudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGFtcFZhbHVlKHZhbCkge1xyXG4gICAgICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkpIHZhbCA9IG1pbjtcclxuICAgICAgICAgICAgaWYgKHZhbCA8IG1pbikgdmFsID0gbWluO1xyXG4gICAgICAgICAgICBpZiAodmFsID4gbWF4KSB2YWwgPSBtYXg7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhcHBseUNsYW1wKCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNsYW1wVmFsdWUoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZVN0ZXBVcCgpIHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgICAgICBpbnB1dC5zdGVwVXAoKTtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZVN0ZXBEb3duKCkge1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgICAgIGlucHV0LnN0ZXBEb3duKCk7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0SG9sZChhY3Rpb24pIHtcclxuICAgICAgICAgICAgYWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBob2xkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9uLCA3MCk7XHJcbiAgICAgICAgICAgIH0sIDE3MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdG9wSG9sZCgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lcik7XHJcbiAgICAgICAgICAgIGhvbGRUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbmNyZW1lbnRcclxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcFVwKCkpKTtcclxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBVcCgpKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAvLyBkZWNyZW1lbnRcclxuICAgICAgICBkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwRG93bigpKSk7XHJcbiAgICAgICAgZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBEb3duKCkpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vIEVtcMOqY2hlciB0b3V0ZSBlbnRyw6llIGludmFsaWRlIGF1IGNsYXZpZXJcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgWydtb3VzZXVwJywgJ21vdXNlbGVhdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXS5mb3JFYWNoKGV2dCA9PlxyXG4gICAgICAgICAgICBsaW5lLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBzdG9wSG9sZClcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiaHRteCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0YSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJlcnIiLCJyZW1vdmVDaGlsZCIsImNhcmQiLCJwb3B1cCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhdHRhY2hIb3ZlckRyb3Bkb3duIiwidG9nZ2xlU2VsZWN0b3IiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheSIsImFuaW1hdGlvbiIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGlkZURyb3Bkb3duIiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnRFbGVtZW50IiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJyZWdpc3RlckVtYWlsIiwidiIsInQiLCJlbWFpbEZpZWxkcyIsImYiLCJrZXkiLCJhcHBUcmFuc2xhdGlvbnMiLCJyZWdpc3RlclBzZXVkbyIsIm1pbkxlbmd0aCIsInBzZXVkb0ZpZWxkcyIsInRlc3QiLCJmaXJzdCIsImZpbGUiLCJmaWxlcyIsImFsbG93ZWQiLCJtYXgiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwib25TdWJtaXQiLCJoYXNFcnJvciIsIk9iamVjdCIsImtleXMiLCJpZCIsImxvZ2luRm9ybSIsInRhZ05hbWUiLCJyZXN1bHRzIiwiY2xlYXIiLCJhc2lkZUlucHV0IiwiYXNpZGVDbGVhciIsInRvZ2dsZUJ0biIsImNsZWFyUmVzdWx0cyIsImlubmVySFRNTCIsInVwZGF0ZUJ1dHRvbiIsImhhc1ZhbHVlIiwiZmlyc3RMaW5rIiwiY2xpY2siLCJmb2N1cyIsImV2dCIsImRldGFpbCIsImVsdCIsImljb24iLCJzcGlubmVyIiwiS2V5Ym9hcmRFdmVudCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50Iiwic2VhcmNoSW5wdXQiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hSZXN1bHRzIiwic2VhcmNoQ2xlYXIiLCJzZWFyY2hJY29uIiwic2VhcmNoU3Bpbm5lciIsInBhbmVsIiwib3ZlcmxheSIsImNsb3NlQnRuIiwiYXNpZGVTZWFyY2giLCJuYW1lRWwiLCJ1bmlxdWVFbCIsIml0ZW1JZElucHV0IiwiaW1nRWwiLCJpdGVtVW5pcXVlTmFtZUlucHV0IiwicmFua1NlY3Rpb24iLCJyYW5rSW5wdXQiLCJ1cGRhdGVTZWFyY2hVaSIsImdldEZpcnN0UmVzdWx0RWxlbWVudCIsImZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCIsInNyYyIsImFsdCIsInVuaXF1ZU5hbWUiLCJpdGVtVW5pcXVlIiwiaXRlbU5hbWUiLCJpdGVtSW1hZ2VOYW1lIiwiaXRlbUNhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJmdXNpb25MaW1pdCIsInBhcnNlSW50IiwiaXNOYU4iLCJvcGVuUGFuZWwiLCJjbG9zZVBhbmVsIiwibGluZSIsInVwIiwiZG93biIsImludGVydmFsIiwiaG9sZFRpbWVyIiwibWluIiwiY2xhbXBWYWx1ZSIsInZhbCIsImFwcGx5Q2xhbXAiLCJzYWZlU3RlcFVwIiwic3RlcFVwIiwic2FmZVN0ZXBEb3duIiwic3RlcERvd24iLCJzdGFydEhvbGQiLCJhY3Rpb24iLCJzZXRJbnRlcnZhbCIsInN0b3BIb2xkIiwiY2xlYXJJbnRlcnZhbCIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJjb25zb2xlIiwid2FybiIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzYWJsZWQiLCJzZXRJdGVtIiwiY2hlY2tlZCIsImNvbGxhcHNlQnRuIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9