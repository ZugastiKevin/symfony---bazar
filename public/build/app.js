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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixDQUFDO0lBRURtTCxnQkFBZ0IsQ0FBQzlNLGdCQUFnQixDQUFDLE9BQU8sRUFBRXlOLFlBQVksQ0FBQztJQUN4RCxJQUFJRCxhQUFhLEVBQUU7TUFDZkEsYUFBYSxDQUFDeE4sZ0JBQWdCLENBQUMsT0FBTyxFQUFFeU4sWUFBWSxDQUFDO0lBQ3pEO0VBQ0o7QUFFSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZGMU4sUUFBUSxDQUFDa0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBeUwsTUFBTSxFQUFJO0VBQ3REQSxNQUFNLENBQUMzTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNb0YsS0FBSyxHQUFHdUksTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSXhJLEtBQUssSUFBSUEsS0FBSyxDQUFDL0MsT0FBTyxDQUFDd0wsUUFBUSxLQUFLdEgsU0FBUyxFQUFFO01BQy9DbkIsS0FBSyxDQUFDeEUsS0FBSyxHQUFHd0UsS0FBSyxDQUFDL0MsT0FBTyxDQUFDd0wsUUFBUTtNQUNwQ3pJLEtBQUssQ0FBQ21FLGFBQWEsQ0FBQyxJQUFJdUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2l0ZW1TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcGxhY2Utb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmVtZW1iZXJfbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmVzZXQtYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZm9ybS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3JlbWVtYmVyX21lLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvaXRlbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJ2h0bXgub3JnJztcclxud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLmJ0bi1jb3B5Jyk7XHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvcHknKTtcclxuICAgIGlmICghdGV4dCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgdGEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIHRhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICB0YS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGEpO1xyXG4gICAgICAgIHRhLnNlbGVjdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBidG4uY2xvc2VzdCgnLm9yZGVyLWNhcmQnKTtcclxuICAgIGlmICghY2FyZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBvcHVwID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY29weS1wb3B1cCcpO1xyXG4gICAgaWYgKCFwb3B1cCkgcmV0dXJuO1xyXG5cclxuICAgIHBvcHVwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgcG9wdXAudGV4dENvbnRlbnQgPSAnJztcclxuICAgIH0sIDIwMDApO1xyXG59KTtcclxuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcclxuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xyXG4gICBDb21wYXRpYmxlIFN1cHBvcnQgLyBVc2VyIC8gTG9naW4gLyBGb3Jnb3RQYXNzd29yZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblxyXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcclxuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XHJcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xyXG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xyXG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ2VtYWlsX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiB0KCdlbWFpbF9pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZW1haWxGaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX2VtYWlsXCIsIGVycm9ySWQ6IFwidXNlcl9lbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cclxuXTtcclxuXHJcbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiB0KGtleSkge1xyXG4gICAgcmV0dXJuICh3aW5kb3cuYXBwVHJhbnNsYXRpb25zICYmIHdpbmRvdy5hcHBUcmFuc2xhdGlvbnNba2V5XSkgfHwga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncHNldWRvX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21pbl8zJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcHNldWRvRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX3BzZXVkb1wiLCBlcnJvcklkOiBcInVzZXJfcHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG5dO1xyXG5cclxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gdCgncGFzc3dvcmRfbGVuZ3RoXzgnKTtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfdXBwZXInKTtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX251bWJlcicpO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfc3BlY2lhbCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9udW1iZXInKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxyXG5yZWdpc3RlclZhbGlkYXRvcihcImZvcmdvdF9wYXNzd29yZFwiLCBcImZvcmdvdF9wYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9jYXRlZ29yeV9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX21pbl8xMCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gVkFMSURBVElPTiBERSBM4oCZSU1BR0UgKHN1cHBvcnQpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuICAgIGNvbnN0IG1heCA9IDIgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIHQoJ2ltYWdlX3R5cGUnKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiB0KCdpbWFnZV9zaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRJQUxJU0FUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHJlc2V0IHBhc3N3b3JkXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcclxuICAgIGNvbnN0IGNsZWFyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNsZWFyJyk7XHJcblxyXG4gICAgY29uc3QgYXNpZGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IGFzaWRlQ2xlYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWNsZWFyJyk7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXRvZ2dsZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICAgICAgICBpZiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXN1bHRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gdiAhPT0gJyc7XHJcblxyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gY2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFzaWRlQ2xlYXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGFzaWRlQ2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc2lkZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGFzaWRlSW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidG4pIHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmsgPVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50IGEnKSB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgYScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0TGluaykge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xlYXIgJiYgaW5wdXQpIHtcclxuICAgICAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAodiA9PT0gJycpIHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pY29uXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zcGlubmVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoaWNvbiAmJiBzcGlubmVyKSB7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGV2dC5kZXRhaWwgfHwge307XHJcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xyXG5cclxuICAgICAgICBpZiAoIWVsIHx8IGVsLmlkICE9PSAnc2VhcmNoLWlucHV0JykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaWNvblwiKTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtc3Bpbm5lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGljb24gJiYgc3Bpbm5lcikge1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRvZ2dsZUJ0biAmJiBpbnB1dCAmJiBhc2lkZUlucHV0KSB7XHJcbiAgICAgICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFzaWRlSW5wdXQgJiYgaW5wdXQpIHtcclxuICAgICAgICBhc2lkZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb3BpZSBsYSB2YWxldXIgZGFucyBsZSBjaGFtcCBxdWkgYSBsZXMgYXR0cmlidXRzIGh4LSpcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBhc2lkZUlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gbWV0IMOgIGpvdXIgbCfDqXRhdCBkdSBib3V0b24gLyBjbGVhciAvIHLDqXN1bHRhdHNcclxuICAgICAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkw6ljbGVuY2hlIHVuIGtleXVwIHBvdXIgcXVlIGh0bXggcsOpYWdpc3NlIChoeC10cmlnZ2VyPVwia2V5dXAgY2hhbmdlZCBkZWxheTozMDBtc1wiKVxyXG4gICAgICAgICAgICBjb25zdCBldnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXNpZGVDbGVhciAmJiBhc2lkZUlucHV0KSB7XHJcbiAgICAgICAgYXNpZGVDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXNpZGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhc2lkZUlucHV0LmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzaSB0dSB2ZXV4IGF1c3NpIHZpZGVyIGxhIHJlY2hlcmNoZSBwcmluY2lwYWxlIGV0IGxlcyByw6lzdWx0YXRzIDpcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xyXG4gICAgY29uc3Qgc2VhcmNoQ2xlYXIgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY2xlYXInKTtcclxuICAgIGNvbnN0IHNlYXJjaEljb24gICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWljb24nKTtcclxuICAgIGNvbnN0IHNlYXJjaFNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNwaW5uZXInKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVCdG4gICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXRvZ2dsZScpO1xyXG4gICAgY29uc3QgcGFuZWwgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1wYW5lbCcpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLWNsb3NlJyk7XHJcblxyXG4gICAgY29uc3QgYXNpZGVTZWFyY2ggICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtaW5wdXQnKTtcclxuICAgIGNvbnN0IGFzaWRlQ2xlYXIgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWNsZWFyJyk7XHJcblxyXG4gICAgY29uc3QgbmFtZUVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLW5hbWUnKTtcclxuICAgIGNvbnN0IHVuaXF1ZUVsICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS11bmlxdWUnKTtcclxuICAgIGNvbnN0IGl0ZW1JZElucHV0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS1pZCcpO1xyXG4gICAgY29uc3QgaW1nRWwgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wby1pdGVtLWltYWdlIGltZycpO1xyXG4gICAgY29uc3QgaXRlbVVuaXF1ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLXVuaXF1ZU5hbWUnKTtcclxuICAgIGNvbnN0IHJhbmtTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLXJhbmstc2VjdGlvbicpO1xyXG4gICAgY29uc3QgcmFua0lucHV0ICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG8tcmFuay1zZWN0aW9uIC5udW1iZXItbGluZV9faW5wdXQnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNlYXJjaFVpKCkge1xyXG4gICAgICAgIGlmICghc2VhcmNoSW5wdXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdiA9IHNlYXJjaElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IHYgIT09ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoQ2xlYXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IHNlYXJjaENsZWFyLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtdmFsdWUnLCBoYXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgY2xlYXJSZXN1bHRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzeW5jaHJvbmlzZSBsJ2FzaWRlIGF2ZWMgbGUgc2VhcmNoIHByaW5jaXBhbFxyXG4gICAgICAgIGlmIChhc2lkZVNlYXJjaCkge1xyXG4gICAgICAgICAgICBhc2lkZVNlYXJjaC52YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaXJzdFJlc3VsdEVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHRzLWxpc3QgLnJlc3VsdHMtY29udGVudFtkYXRhLWl0ZW0tbmFtZV0nKSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxQYW5lbEZyb21GaXJzdFJlc3VsdCgpIHtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IGdldEZpcnN0UmVzdWx0RWxlbWVudCgpO1xyXG5cclxuICAgICAgICBpZiAoIWZpcnN0KSB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lRWwpICAgbmFtZUVsLnRleHRDb250ZW50ICAgPSAnQXVjdW4gaXRlbSBzw6lsZWN0aW9ubsOpJztcclxuICAgICAgICAgICAgaWYgKGltZ0VsKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdFbC5zcmMgPSAnJztcclxuICAgICAgICAgICAgICAgIGltZ0VsLmFsdCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyYW5rU2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmFua1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdW5pcXVlTmFtZSAgICA9IGZpcnN0LmRhdGFzZXQuaXRlbVVuaXF1ZSAgICB8fCAnJztcclxuICAgICAgICBjb25zdCBpdGVtTmFtZSAgICAgID0gZmlyc3QuZGF0YXNldC5pdGVtTmFtZSAgICAgIHx8IGZpcnN0LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgICBjb25zdCBpdGVtSW1hZ2VOYW1lID0gZmlyc3QuZGF0YXNldC5pdGVtSW1hZ2VOYW1lIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1DYXRlZ29yeSAgPSAoZmlyc3QuZGF0YXNldC5pdGVtQ2F0ZWdvcnkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZnVzaW9uTGltaXQgICA9IHBhcnNlSW50KGZpcnN0LmRhdGFzZXQuZnVzaW9uTGltaXQgfHwgJzAnLCAxMCk7XHJcblxyXG4gICAgICAgIGlmIChpdGVtVW5pcXVlTmFtZUlucHV0KVxyXG4gICAgICAgICAgICBpdGVtVW5pcXVlTmFtZUlucHV0LnZhbHVlID0gdW5pcXVlTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWVFbCkgICBuYW1lRWwudGV4dENvbnRlbnQgICA9IGl0ZW1OYW1lO1xyXG5cclxuICAgICAgICBpZiAoaW1nRWwpIHtcclxuICAgICAgICAgICAgaW1nRWwuc3JjID0gaXRlbUltYWdlTmFtZTtcclxuICAgICAgICAgICAgaW1nRWwuYWx0ID0gaXRlbU5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmFua1NlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSA9PT0gJ21vZHMnIHx8IGl0ZW1DYXRlZ29yeSA9PT0gJ21vZCcpIHtcclxuICAgICAgICAgICAgICAgIHJhbmtTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFua1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyYW5rSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihmdXNpb25MaW1pdCkgJiYgZnVzaW9uTGltaXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByYW5rSW5wdXQubWF4ID0gZnVzaW9uTGltaXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocmFua0lucHV0LnZhbHVlIHx8ICcwJywgMTApID4gZnVzaW9uTGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5rSW5wdXQudmFsdWUgPSBmdXNpb25MaW1pdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhbmtJbnB1dC5tYXggICA9IDA7XHJcbiAgICAgICAgICAgICAgICByYW5rSW5wdXQudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5QYW5lbCgpIHtcclxuICAgICAgICBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKTtcclxuICAgICAgICBpZiAocGFuZWwpICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG4gICAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVBhbmVsKCkge1xyXG4gICAgICAgIGlmIChwYW5lbCkgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgaWYgKG92ZXJsYXkpIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBTRUFSQ0ggUFJJTkNJUEFMIChIVE1YKSAtLS1cclxuXHJcbiAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xyXG4gICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlU2VhcmNoVWkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2hCdXR0b24pIHtcclxuICAgICAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmsgPVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50IGEnKSB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgYScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0TGluaykge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VhcmNoQ2xlYXIgJiYgc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICBzZWFyY2hDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzcGlubmVyIEhUTVhcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YmVmb3JlUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGV0YWlsLmVsdDtcclxuXHJcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdiA9IGVsLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gJycpIHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hJY29uICYmIHNlYXJjaFNwaW5uZXIpIHtcclxuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBzZWFyY2hTcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGV0YWlsLmVsdDtcclxuXHJcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaEljb24gJiYgc2VhcmNoU3Bpbm5lcikge1xyXG4gICAgICAgICAgICBzZWFyY2hTcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNlYXJjaEljb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFF1YW5kIEhUTVggcmVtcGxhY2UgI3Jlc3VsdHMg4oaSIHNpIGxlIHBhbmVsIGVzdCBvdXZlcnQsIG9uIG1ldCDDoCBqb3VyIGF2ZWMgbGUgbm91dmVhdSBwcmVtaWVyIHLDqXN1bHRhdFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclN3YXAnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgJiYgZXZ0LnRhcmdldC5pZCA9PT0gJ3Jlc3VsdHMnKSB7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbCAmJiBwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAtLS0gQVNJREUgOiBzeW5jaHJvICsgcmVjaGVyY2hlIEJERC9BUEkgLS0tXHJcblxyXG4gICAgLy8gb3V2ZXJ0dXJlIGR1IHBhbm5lYXVcclxuICAgIGlmICh0b2dnbGVCdG4pIHtcclxuICAgICAgICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIGNvcGllIGxhIHZhbGV1ciBhY3R1ZWxsZSBkZSBsYSBiYXJyZSBkZSByZWNoZXJjaGUgcHJpbmNpcGFsZVxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQgJiYgYXNpZGVTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3BlblBhbmVsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG92ZXJsYXkpIHtcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQYW5lbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2xvc2VCdG4pIHtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUGFuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhcGVyIGRhbnMgbCdpbnB1dCBkZSBsJ2FzaWRlIOKGkiBtZXQgw6Agam91ciBsZSBzZWFyY2ggcHJpbmNpcGFsICsgZMOpY2xlbmNoZSBsYSByZWNoZXJjaGUgSFRNWFxyXG4gICAgaWYgKGFzaWRlU2VhcmNoICYmIHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgYXNpZGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gYXNpZGVTZWFyY2gudmFsdWU7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkw6ljbGVuY2hlIHVuIGtleXVwIHBvdXIgcXVlIGh0bXgvcmVhY3RpdmUgKGh4LXRyaWdnZXI9XCJrZXl1cCBjaGFuZ2VkIGRlbGF5OjMwMG1zXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGV2dCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXl1cCcsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFyIGRlIGwnYXNpZGVcclxuICAgIGlmIChhc2lkZUNsZWFyICYmIGFzaWRlU2VhcmNoKSB7XHJcbiAgICAgICAgYXNpZGVDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXNpZGVTZWFyY2gudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgYXNpZGVTZWFyY2guZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRvIGluY3JlbWVudCBkZWNyZW1lbnRcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXItbGluZScpLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBsaW5lLnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXItbGluZV9faW5wdXQnKTtcclxuICAgICAgICBjb25zdCB1cCAgICA9IGxpbmUucXVlcnlTZWxlY3RvcignLnVwJyk7XHJcbiAgICAgICAgY29uc3QgZG93biAgPSBsaW5lLnF1ZXJ5U2VsZWN0b3IoJy5kb3duJyk7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQgfHwgIXVwIHx8ICFkb3duKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGhvbGRUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnbWF4JykgfHwgJzk5OTk5OTknLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSB8fCAnMCcsIDEwKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyB8fCBpbnB1dC52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsYW1wVmFsdWUodmFsKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsKSkgdmFsID0gbWluO1xyXG4gICAgICAgICAgICBpZiAodmFsIDwgbWluKSB2YWwgPSBtaW47XHJcbiAgICAgICAgICAgIGlmICh2YWwgPiBtYXgpIHZhbCA9IG1heDtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5Q2xhbXAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY2xhbXBWYWx1ZShpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzYWZlU3RlcFVwKCkge1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgICAgIGlucHV0LnN0ZXBVcCgpO1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzYWZlU3RlcERvd24oKSB7XHJcbiAgICAgICAgICAgIGFwcGx5Q2xhbXAoKTtcclxuICAgICAgICAgICAgaW5wdXQuc3RlcERvd24oKTtcclxuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRIb2xkKGFjdGlvbikge1xyXG4gICAgICAgICAgICBhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGhvbGRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhY3Rpb24sIDcwKTtcclxuICAgICAgICAgICAgfSwgMTcwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BIb2xkKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaG9sZFRpbWVyKTtcclxuICAgICAgICAgICAgaG9sZFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGluY3JlbWVudFxyXG4gICAgICAgIHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwVXAoKSkpO1xyXG4gICAgICAgIHVwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcFVwKCkpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vIGRlY3JlbWVudFxyXG4gICAgICAgIGRvd24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gc3RhcnRIb2xkKCgpID0+IGlucHV0LnN0ZXBEb3duKCkpKTtcclxuICAgICAgICBkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcERvd24oKSksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgLy8gRW1ww6pjaGVyIHRvdXRlIGVudHLDqWUgaW52YWxpZGUgYXUgY2xhdmllclxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHN0b3BcclxuICAgICAgICBbJ21vdXNldXAnLCAnbW91c2VsZWF2ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCddLmZvckVhY2goZXZ0ID0+XHJcbiAgICAgICAgICAgIGxpbmUuYWRkRXZlbnRMaXN0ZW5lcihldnQsIHN0b3BIb2xkKVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xyXG4gICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmdXNlLWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHF1ZSBsZXMgw6lsw6ltZW50cyBleGlzdGVudFxyXG4gICAgaWYgKCFib3ggfHwgIWFjY2VwdCB8fCAhcmVmdXNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiw4lsw6ltZW50cyBjb29raWUgbm9uIHRyb3V2w6lzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAvLyBBRkZJQ0hBR0UgSU5JVElBTFxyXG4gICAgaWYgKCFjb25zZW50KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgfSBlbHNlIGlmIChjb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIETDiVNBQ1RJVkVSIFJFTUVNQkVSIE1FIFNJIFJFRlVTXHJcbiAgICBpZiAoY29uc2VudCAhPT0gXCJhY2NlcHRlZFwiICYmIHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBQ0NFUFRFUlxyXG4gICAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUkVGVVNFUlxyXG4gICAgcmVmdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcInJlZnVzZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBMRSBCT1VUT04gUsOJRFVJVCDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWV4cGFuZC1idG5cIik7XHJcbiAgICBpZiAoY29sbGFwc2VCdG4pIHtcclxuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgUkVNRU1CRVIgTUUgQVBSw4hTIFVOIFJFRlVTIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgY29uc3QgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIl9yZW1lbWJlcl9tZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJMYWJlbCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJodG14IiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJidG4iLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGV4dCIsImdldEF0dHJpYnV0ZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRhIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwic3R5bGUiLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImVyciIsInJlbW92ZUNoaWxkIiwiY2FyZCIsInBvcHVwIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwicmVhbGx5SGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJzZWxlY3RvciIsImlucHV0cyIsImZvcm0iLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsInBhcmVudEVsZW1lbnQiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwicnVuVmFsaWRhdG9yIiwiY29uZmlnIiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJyZXN1bHQiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInJlZ2lzdGVyRW1haWwiLCJ2IiwidCIsImVtYWlsRmllbGRzIiwiZiIsImtleSIsImFwcFRyYW5zbGF0aW9ucyIsInJlZ2lzdGVyUHNldWRvIiwibWluTGVuZ3RoIiwicHNldWRvRmllbGRzIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsInJlc3VsdHMiLCJjbGVhciIsImFzaWRlSW5wdXQiLCJhc2lkZUNsZWFyIiwidG9nZ2xlQnRuIiwiY2xlYXJSZXN1bHRzIiwiaW5uZXJIVE1MIiwidXBkYXRlQnV0dG9uIiwiaGFzVmFsdWUiLCJmaXJzdExpbmsiLCJjbGljayIsImZvY3VzIiwiZXZ0IiwiZGV0YWlsIiwiZWx0IiwiaWNvbiIsInNwaW5uZXIiLCJLZXlib2FyZEV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaFJlc3VsdHMiLCJzZWFyY2hDbGVhciIsInNlYXJjaEljb24iLCJzZWFyY2hTcGlubmVyIiwicGFuZWwiLCJvdmVybGF5IiwiY2xvc2VCdG4iLCJhc2lkZVNlYXJjaCIsIm5hbWVFbCIsInVuaXF1ZUVsIiwiaXRlbUlkSW5wdXQiLCJpbWdFbCIsIml0ZW1VbmlxdWVOYW1lSW5wdXQiLCJyYW5rU2VjdGlvbiIsInJhbmtJbnB1dCIsInVwZGF0ZVNlYXJjaFVpIiwiZ2V0Rmlyc3RSZXN1bHRFbGVtZW50IiwiZmlsbFBhbmVsRnJvbUZpcnN0UmVzdWx0Iiwic3JjIiwiYWx0IiwidW5pcXVlTmFtZSIsIml0ZW1VbmlxdWUiLCJpdGVtTmFtZSIsIml0ZW1JbWFnZU5hbWUiLCJpdGVtQ2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsImZ1c2lvbkxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIm9wZW5QYW5lbCIsImNsb3NlUGFuZWwiLCJsaW5lIiwidXAiLCJkb3duIiwiaW50ZXJ2YWwiLCJob2xkVGltZXIiLCJtaW4iLCJjbGFtcFZhbHVlIiwidmFsIiwiYXBwbHlDbGFtcCIsInNhZmVTdGVwVXAiLCJzdGVwVXAiLCJzYWZlU3RlcERvd24iLCJzdGVwRG93biIsInN0YXJ0SG9sZCIsImFjdGlvbiIsInNldEludGVydmFsIiwic3RvcEhvbGQiLCJjbGVhckludGVydmFsIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNhYmxlZCIsInNldEl0ZW0iLCJjaGVja2VkIiwiY29sbGFwc2VCdG4iLCJyZW1lbWJlckxhYmVsIiwiY2xpY2tIYW5kbGVyIiwiY3VycmVudENvbnNlbnQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=