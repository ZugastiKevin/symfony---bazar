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
    var max = parseInt(input.getAttribute('max') || '999', 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5TSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV5TixZQUFZLENBQUM7SUFDeEQsSUFBSUQsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQ3hOLGdCQUFnQixDQUFDLE9BQU8sRUFBRXlOLFlBQVksQ0FBQztJQUN6RDtFQUNKO0FBRUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xGRjFOLFFBQVEsQ0FBQ2tDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQXlMLE1BQU0sRUFBSTtFQUN0REEsTUFBTSxDQUFDM04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTW9GLEtBQUssR0FBR3VJLE1BQU0sQ0FBQ0Msc0JBQXNCO0lBQzNDLElBQUl4SSxLQUFLLElBQUlBLEtBQUssQ0FBQy9DLE9BQU8sQ0FBQ3dMLFFBQVEsS0FBS3RILFNBQVMsRUFBRTtNQUMvQ25CLEtBQUssQ0FBQ3hFLEtBQUssR0FBR3dFLEtBQUssQ0FBQy9DLE9BQU8sQ0FBQ3dMLFFBQVE7TUFDcEN6SSxLQUFLLENBQUNtRSxhQUFhLENBQUMsSUFBSXVFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9pdGVtU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZW1lbWJlcl9tZS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2l0ZW1TZWFyY2guanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9wbGFjZS1vcmRlci5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICdodG14Lm9yZyc7XHJcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5idG4tY29weScpO1xyXG4gICAgaWYgKCFidG4pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3B5Jyk7XHJcbiAgICBpZiAoIXRleHQpIHJldHVybjtcclxuXHJcbiAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCkge1xyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIHRhLnZhbHVlID0gdGV4dDtcclxuICAgICAgICB0YS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgdGEuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhKTtcclxuICAgICAgICB0YS5zZWxlY3QoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJkID0gYnRuLmNsb3Nlc3QoJy5vcmRlci1jYXJkJyk7XHJcbiAgICBpZiAoIWNhcmQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwb3B1cCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNvcHktcG9wdXAnKTtcclxuICAgIGlmICghcG9wdXApIHJldHVybjtcclxuXHJcbiAgICBwb3B1cC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgIHBvcHVwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9LCAyMDAwKTtcclxufSk7XHJcbiIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVEcm9wZG93biwgMTUwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZURyb3Bkb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hOYXZiYXJEcm9wZG93bigpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1uYXZiYXJcIik7XHJcblxyXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lvbkVscyA9IFt0b2dnbGUsIG5hdmJhckNvbnRhaW5lciwgZHJvcGRvd25Db250ZW50XTtcclxuXHJcbiAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgbGV0IGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGlzSW5SZWdpb24gPSAoZWwpID0+XHJcbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGlzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVhbGx5SGlkZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcclxuICAgICAgICBpZiAodG8gJiYgaXNJblJlZ2lvbih0bykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0FsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93QWxsKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlTmF2YmFyLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIubGFuZ3VhZ2UtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbn0pOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFZBTElEQVRJT04gR8OJTsOJUklRVUUgREVTIEZPUk1VTEFJUkVTXHJcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcclxuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cclxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3lzdMOobWUgZGUgdmFsaWRhdGlvbiBnw6luw6lyaXF1ZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xyXG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcclxuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICdcXHUwMEEwJztcclxuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBFTUFJTFMgKGfDqW7DqXJpcXVlcyBwb3VyIHRvdXQgbGUgc2l0ZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoaW5wdXRJZCwgZXJyb3JJZCkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdlbWFpbF9yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gdCgnZW1haWxfaW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVtYWlsRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJuYW1lXCIsIGVycm9ySWQ6IFwidXNlcm5hbWUtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XHJcbl07XHJcblxyXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gdChrZXkpIHtcclxuICAgIHJldHVybiAod2luZG93LmFwcFRyYW5zbGF0aW9ucyAmJiB3aW5kb3cuYXBwVHJhbnNsYXRpb25zW2tleV0pIHx8IGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJQc2V1ZG8oaW5wdXRJZCwgZXJyb3JJZCwgbWluTGVuZ3RoID0gMykge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3BzZXVkb19yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA8IG1pbkxlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19taW5fMycpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBzZXVkb0ZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X25hbWVcIiwgZXJyb3JJZDogXCJwc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuXTtcclxuXHJcbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9udW1iZXInKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInVzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiB0KCdwYXNzd29yZF9sZW5ndGhfOCcpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF91cHBlcicpO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfbnVtYmVyJyk7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9zcGVjaWFsJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb25cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgXCJvdWJsacOpXCIgKG5vdXZlYXUgbW90IGRlIHBhc3NlLCBzaSB0dSBhcyB1biBjaGFtcHMgZMOpZGnDqSlcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfY2F0ZWdvcnlfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9tZXNzYWdlXCIsIFwidGV4dC1hcmVhLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCAxMCkgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9taW5fMTAnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfaW1hZ2VGaWxlXCIsIFwiaW1hZ2UtZXJyb3JcIiwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkID0gW1wiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiLCBcImltYWdlL3BuZ1wiLCBcImltYWdlL3dlYnBcIl07XHJcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XHJcblxyXG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHJldHVybiB0KCdpbWFnZV90eXBlJyk7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSByZXR1cm4gdCgnaW1hZ2Vfc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFydW5WYWxpZGF0b3IoaW5wdXRJZCkpIHtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cclxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvcikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUSUFMSVNBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgc3VwcG9ydFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCBbJ2NoYW5nZScsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSByZXNldCBwYXNzd29yZFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJuYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgw6l2ZW50dWVscyBkdSBmb3JtdWxhaXJlIFwibW90IGRlIHBhc3NlIG91Ymxpw6lcIlxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcclxuICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XHJcbiAgICBjb25zdCBjbGVhciAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbGVhcicpO1xyXG5cclxuICAgIGNvbnN0IGFzaWRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBhc2lkZUNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1jbGVhcicpO1xyXG4gICAgY29uc3QgdG9nZ2xlQnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci10b2dnbGUnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uKCkge1xyXG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdiA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IHYgIT09ICcnO1xyXG5cclxuICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGNsZWFyLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtdmFsdWUnLCBoYXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc2lkZUNsZWFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBhc2lkZUNsZWFyLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtdmFsdWUnLCBoYXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgY2xlYXJSZXN1bHRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXNpZGVJbnB1dCkge1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5rID1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHRzLWxpc3QgLnJlc3VsdHMtY29udGVudCBhJykgfHxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIGEnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdExpbmspIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TGluay5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsZWFyICYmIGlucHV0KSB7XHJcbiAgICAgICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YmVmb3JlUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGV0YWlsLmVsdDtcclxuXHJcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdiA9IGVsLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYgKHYgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtc3Bpbm5lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGljb24gJiYgc3Bpbm5lcikge1xyXG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGV0YWlsLmVsdDtcclxuXHJcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWljb25cIik7XHJcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXNwaW5uZXJcIik7XHJcblxyXG4gICAgICAgIGlmIChpY29uICYmIHNwaW5uZXIpIHtcclxuICAgICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0b2dnbGVCdG4gJiYgaW5wdXQgJiYgYXNpZGVJbnB1dCkge1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYXNpZGVJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc2lkZUlucHV0ICYmIGlucHV0KSB7XHJcbiAgICAgICAgYXNpZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBhc2lkZUlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBldnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXNpZGVDbGVhciAmJiBhc2lkZUlucHV0KSB7XHJcbiAgICAgICAgYXNpZGVDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXNpZGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XHJcbiAgICBjb25zdCBzZWFyY2hDbGVhciAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbGVhcicpO1xyXG4gICAgY29uc3Qgc2VhcmNoSWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaWNvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoU3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3Bpbm5lcicpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUJ0biAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBwYW5lbCAgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXBhbmVsJyk7XHJcbiAgICBjb25zdCBvdmVybGF5ICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLW92ZXJsYXknKTtcclxuICAgIGNvbnN0IGNsb3NlQnRuICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItY2xvc2UnKTtcclxuXHJcbiAgICBjb25zdCBhc2lkZVNlYXJjaCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1pbnB1dCcpO1xyXG4gICAgY29uc3QgYXNpZGVDbGVhciAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtY2xlYXInKTtcclxuXHJcbiAgICBjb25zdCBuYW1lRWwgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tbmFtZScpO1xyXG4gICAgY29uc3QgdW5pcXVlRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLXVuaXF1ZScpO1xyXG4gICAgY29uc3QgaXRlbUlkSW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLWlkJyk7XHJcbiAgICBjb25zdCBpbWdFbCAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLWl0ZW0taW1hZ2UgaW1nJyk7XHJcbiAgICBjb25zdCBpdGVtVW5pcXVlTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tdW5pcXVlTmFtZScpO1xyXG4gICAgY29uc3QgcmFua1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG8tcmFuay1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCByYW5rSW5wdXQgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wby1yYW5rLXNlY3Rpb24gLm51bWJlci1saW5lX19pbnB1dCcpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2VhcmNoVWkoKSB7XHJcbiAgICAgICAgaWYgKCFzZWFyY2hJbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gdiAhPT0gJyc7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hDbGVhcikge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gc2VhcmNoQ2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN5bmNocm9uaXNlIGwnYXNpZGUgYXZlYyBsZSBzZWFyY2ggcHJpbmNpcGFsXHJcbiAgICAgICAgaWYgKGFzaWRlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpcnN0UmVzdWx0RWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50W2RhdGEtaXRlbS1uYW1lXScpIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gZ2V0Rmlyc3RSZXN1bHRFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGlmICghZmlyc3QpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWVFbCkgICBuYW1lRWwudGV4dENvbnRlbnQgICA9ICdBdWN1biBpdGVtIHPDqWxlY3Rpb25uw6knO1xyXG4gICAgICAgICAgICBpZiAoaW1nRWwpIHtcclxuICAgICAgICAgICAgICAgIGltZ0VsLnNyYyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaW1nRWwuYWx0ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhbmtTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1bmlxdWVOYW1lICAgID0gZmlyc3QuZGF0YXNldC5pdGVtVW5pcXVlICAgIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lICAgICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1OYW1lICAgICAgfHwgZmlyc3QudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JbWFnZU5hbWUgPSBmaXJzdC5kYXRhc2V0Lml0ZW1JbWFnZU5hbWUgfHwgJyc7XHJcbiAgICAgICAgY29uc3QgaXRlbUNhdGVnb3J5ICA9IChmaXJzdC5kYXRhc2V0Lml0ZW1DYXRlZ29yeSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBmdXNpb25MaW1pdCAgID0gcGFyc2VJbnQoZmlyc3QuZGF0YXNldC5mdXNpb25MaW1pdCB8fCAnMCcsIDEwKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW1VbmlxdWVOYW1lSW5wdXQpXHJcbiAgICAgICAgICAgIGl0ZW1VbmlxdWVOYW1lSW5wdXQudmFsdWUgPSB1bmlxdWVOYW1lO1xyXG5cclxuICAgICAgICBpZiAobmFtZUVsKSAgIG5hbWVFbC50ZXh0Q29udGVudCAgID0gaXRlbU5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbWdFbCkge1xyXG4gICAgICAgICAgICBpbWdFbC5zcmMgPSBpdGVtSW1hZ2VOYW1lO1xyXG4gICAgICAgICAgICBpbWdFbC5hbHQgPSBpdGVtTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyYW5rU2VjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ID09PSAnbW9kcycgfHwgaXRlbUNhdGVnb3J5ID09PSAnbW9kJykge1xyXG4gICAgICAgICAgICAgICAgcmFua1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJhbmtJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGZ1c2lvbkxpbWl0KSAmJiBmdXNpb25MaW1pdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJhbmtJbnB1dC5tYXggPSBmdXNpb25MaW1pdDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChyYW5rSW5wdXQudmFsdWUgfHwgJzAnLCAxMCkgPiBmdXNpb25MaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtJbnB1dC52YWx1ZSA9IGZ1c2lvbkxpbWl0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFua0lucHV0Lm1heCAgID0gMDtcclxuICAgICAgICAgICAgICAgIHJhbmtJbnB1dC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblBhbmVsKCkge1xyXG4gICAgICAgIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpO1xyXG4gICAgICAgIGlmIChwYW5lbCkgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgaWYgKG92ZXJsYXkpIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlUGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKHBhbmVsKSAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIFNFQVJDSCBQUklOQ0lQQUwgKEhUTVgpIC0tLVxyXG5cclxuICAgIGlmIChzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVTZWFyY2hVaSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaEJ1dHRvbikge1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TGluayA9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHRzLWNvbnRlbnQgYScpIHx8XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyBhJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3RMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdExpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2hDbGVhciAmJiBzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgIHNlYXJjaENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNwaW5uZXIgSFRNWFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSAnJykge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaEljb24gJiYgc2VhcmNoU3Bpbm5lcikge1xyXG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNlYXJjaFNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoSWNvbiAmJiBzZWFyY2hTcGlubmVyKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUXVhbmQgSFRNWCByZW1wbGFjZSAjcmVzdWx0cyDihpIgc2kgbGUgcGFuZWwgZXN0IG91dmVydCwgb24gbWV0IMOgIGpvdXIgYXZlYyBsZSBub3V2ZWF1IHByZW1pZXIgcsOpc3VsdGF0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyU3dhcCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCAmJiBldnQudGFyZ2V0LmlkID09PSAncmVzdWx0cycpIHtcclxuICAgICAgICAgICAgaWYgKHBhbmVsICYmIHBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIC0tLSBBU0lERSA6IHN5bmNocm8gKyByZWNoZXJjaGUgQkREL0FQSSAtLS1cclxuXHJcbiAgICAvLyBvdXZlcnR1cmUgZHUgcGFubmVhdVxyXG4gICAgaWYgKHRvZ2dsZUJ0bikge1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29waWUgbGEgdmFsZXVyIGFjdHVlbGxlIGRlIGxhIGJhcnJlIGRlIHJlY2hlcmNoZSBwcmluY2lwYWxlXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dCAmJiBhc2lkZVNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgYXNpZGVTZWFyY2gudmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcGVuUGFuZWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3ZlcmxheSkge1xyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBhbmVsKTtcclxuICAgIH1cclxuICAgIGlmIChjbG9zZUJ0bikge1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFwZXIgZGFucyBsJ2lucHV0IGRlIGwnYXNpZGUg4oaSIG1ldCDDoCBqb3VyIGxlIHNlYXJjaCBwcmluY2lwYWwgKyBkw6ljbGVuY2hlIGxhIHJlY2hlcmNoZSBIVE1YXHJcbiAgICBpZiAoYXNpZGVTZWFyY2ggJiYgc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICBhc2lkZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBhc2lkZVNlYXJjaC52YWx1ZTtcclxuICAgICAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGTDqWNsZW5jaGUgdW4ga2V5dXAgcG91ciBxdWUgaHRteC9yZWFjdGl2ZSAoaHgtdHJpZ2dlcj1cImtleXVwIGNoYW5nZWQgZGVsYXk6MzAwbXNcIilcclxuICAgICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleXVwJywgeyBidWJibGVzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXIgZGUgbCdhc2lkZVxyXG4gICAgaWYgKGFzaWRlQ2xlYXIgJiYgYXNpZGVTZWFyY2gpIHtcclxuICAgICAgICBhc2lkZUNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhc2lkZVNlYXJjaC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhc2lkZVNlYXJjaC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dG8gaW5jcmVtZW50IGRlY3JlbWVudFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1saW5lJykuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGxpbmUucXVlcnlTZWxlY3RvcignLm51bWJlci1saW5lX19pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHVwICAgID0gbGluZS5xdWVyeVNlbGVjdG9yKCcudXAnKTtcclxuICAgICAgICBjb25zdCBkb3duICA9IGxpbmUucXVlcnlTZWxlY3RvcignLmRvd24nKTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dCB8fCAhdXAgfHwgIWRvd24pIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGludGVydmFsID0gbnVsbDtcclxuICAgICAgICBsZXQgaG9sZFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSB8fCAnOTk5JywgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnbWluJykgfHwgJzAnLCAxMCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycgfHwgaW5wdXQudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGFtcFZhbHVlKHZhbCkge1xyXG4gICAgICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkpIHZhbCA9IG1pbjtcclxuICAgICAgICAgICAgaWYgKHZhbCA8IG1pbikgdmFsID0gbWluO1xyXG4gICAgICAgICAgICBpZiAodmFsID4gbWF4KSB2YWwgPSBtYXg7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhcHBseUNsYW1wKCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNsYW1wVmFsdWUoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZVN0ZXBVcCgpIHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgICAgICBpbnB1dC5zdGVwVXAoKTtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZVN0ZXBEb3duKCkge1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgICAgIGlucHV0LnN0ZXBEb3duKCk7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0SG9sZChhY3Rpb24pIHtcclxuICAgICAgICAgICAgYWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBob2xkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9uLCA3MCk7XHJcbiAgICAgICAgICAgIH0sIDE3MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdG9wSG9sZCgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lcik7XHJcbiAgICAgICAgICAgIGhvbGRUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbmNyZW1lbnRcclxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcFVwKCkpKTtcclxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBVcCgpKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAvLyBkZWNyZW1lbnRcclxuICAgICAgICBkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwRG93bigpKSk7XHJcbiAgICAgICAgZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBEb3duKCkpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vIEVtcMOqY2hlciB0b3V0ZSBlbnRyw6llIGludmFsaWRlIGF1IGNsYXZpZXJcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzdG9wXHJcbiAgICAgICAgWydtb3VzZXVwJywgJ21vdXNlbGVhdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXS5mb3JFYWNoKGV2dCA9PlxyXG4gICAgICAgICAgICBsaW5lLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBzdG9wSG9sZClcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiaHRteCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0YSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJlcnIiLCJyZW1vdmVDaGlsZCIsImNhcmQiLCJwb3B1cCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhdHRhY2hIb3ZlckRyb3Bkb3duIiwidG9nZ2xlU2VsZWN0b3IiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheSIsImFuaW1hdGlvbiIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGlkZURyb3Bkb3duIiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnRFbGVtZW50IiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJyZWdpc3RlckVtYWlsIiwidiIsInQiLCJlbWFpbEZpZWxkcyIsImYiLCJrZXkiLCJhcHBUcmFuc2xhdGlvbnMiLCJyZWdpc3RlclBzZXVkbyIsIm1pbkxlbmd0aCIsInBzZXVkb0ZpZWxkcyIsInRlc3QiLCJmaXJzdCIsImZpbGUiLCJmaWxlcyIsImFsbG93ZWQiLCJtYXgiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwib25TdWJtaXQiLCJoYXNFcnJvciIsIk9iamVjdCIsImtleXMiLCJpZCIsImxvZ2luRm9ybSIsInRhZ05hbWUiLCJyZXN1bHRzIiwiY2xlYXIiLCJhc2lkZUlucHV0IiwiYXNpZGVDbGVhciIsInRvZ2dsZUJ0biIsImNsZWFyUmVzdWx0cyIsImlubmVySFRNTCIsInVwZGF0ZUJ1dHRvbiIsImhhc1ZhbHVlIiwiZmlyc3RMaW5rIiwiY2xpY2siLCJmb2N1cyIsImV2dCIsImRldGFpbCIsImVsdCIsImljb24iLCJzcGlubmVyIiwiS2V5Ym9hcmRFdmVudCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50Iiwic2VhcmNoSW5wdXQiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hSZXN1bHRzIiwic2VhcmNoQ2xlYXIiLCJzZWFyY2hJY29uIiwic2VhcmNoU3Bpbm5lciIsInBhbmVsIiwib3ZlcmxheSIsImNsb3NlQnRuIiwiYXNpZGVTZWFyY2giLCJuYW1lRWwiLCJ1bmlxdWVFbCIsIml0ZW1JZElucHV0IiwiaW1nRWwiLCJpdGVtVW5pcXVlTmFtZUlucHV0IiwicmFua1NlY3Rpb24iLCJyYW5rSW5wdXQiLCJ1cGRhdGVTZWFyY2hVaSIsImdldEZpcnN0UmVzdWx0RWxlbWVudCIsImZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCIsInNyYyIsImFsdCIsInVuaXF1ZU5hbWUiLCJpdGVtVW5pcXVlIiwiaXRlbU5hbWUiLCJpdGVtSW1hZ2VOYW1lIiwiaXRlbUNhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJmdXNpb25MaW1pdCIsInBhcnNlSW50IiwiaXNOYU4iLCJvcGVuUGFuZWwiLCJjbG9zZVBhbmVsIiwibGluZSIsInVwIiwiZG93biIsImludGVydmFsIiwiaG9sZFRpbWVyIiwibWluIiwiY2xhbXBWYWx1ZSIsInZhbCIsImFwcGx5Q2xhbXAiLCJzYWZlU3RlcFVwIiwic3RlcFVwIiwic2FmZVN0ZXBEb3duIiwic3RlcERvd24iLCJzdGFydEhvbGQiLCJhY3Rpb24iLCJzZXRJbnRlcnZhbCIsInN0b3BIb2xkIiwiY2xlYXJJbnRlcnZhbCIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJjb25zb2xlIiwid2FybiIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzYWJsZWQiLCJzZXRJdGVtIiwiY2hlY2tlZCIsImNvbGxhcHNlQnRuIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9