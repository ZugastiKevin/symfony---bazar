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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5TSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV5TixZQUFZLENBQUM7SUFDeEQsSUFBSUQsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQ3hOLGdCQUFnQixDQUFDLE9BQU8sRUFBRXlOLFlBQVksQ0FBQztJQUN6RDtFQUNKO0FBRUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xGRjFOLFFBQVEsQ0FBQ2tDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQXlMLE1BQU0sRUFBSTtFQUN0REEsTUFBTSxDQUFDM04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTW9GLEtBQUssR0FBR3VJLE1BQU0sQ0FBQ0Msc0JBQXNCO0lBQzNDLElBQUl4SSxLQUFLLElBQUlBLEtBQUssQ0FBQy9DLE9BQU8sQ0FBQ3dMLFFBQVEsS0FBS3RILFNBQVMsRUFBRTtNQUMvQ25CLEtBQUssQ0FBQ3hFLEtBQUssR0FBR3dFLEtBQUssQ0FBQy9DLE9BQU8sQ0FBQ3dMLFFBQVE7TUFDcEN6SSxLQUFLLENBQUNtRSxhQUFhLENBQUMsSUFBSXVFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9pdGVtU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3BsYWNlLW9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZm9ybS5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9yZW1lbWJlcl9tZS5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9yZXNldC1idG4uanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvaXRlbVNlYXJjaC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9wbGFjZS1vcmRlci5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9kcm9wZG93bi5qcyc7XG5pbXBvcnQgJ2h0bXgub3JnJztcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5idG4tY29weScpO1xuICAgIGlmICghYnRuKSByZXR1cm47XG5cbiAgICBjb25zdCB0ZXh0ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3B5Jyk7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm47XG5cbiAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0YS52YWx1ZSA9IHRleHQ7XG4gICAgICAgIHRhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgdGEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7XG4gICAgICAgIHRhLnNlbGVjdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkID0gYnRuLmNsb3Nlc3QoJy5vcmRlci1jYXJkJyk7XG4gICAgaWYgKCFjYXJkKSByZXR1cm47XG5cbiAgICBjb25zdCBwb3B1cCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNvcHktcG9wdXAnKTtcbiAgICBpZiAoIXBvcHVwKSByZXR1cm47XG5cbiAgICBwb3B1cC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgcG9wdXAudGV4dENvbnRlbnQgPSAnJztcbiAgICB9LCAyMDAwKTtcbn0pO1xuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcblxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcblxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcblxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICBsZXQgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xuXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRHJvcGRvd24pO1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICAgICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xuXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XG5cbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xuXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xuXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIGlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xuXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xuICAgICAgICBpc09wZW4gPSBmYWxzZTtcblxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xuXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICAgICAgaWYgKHRvICYmIGlzSW5SZWdpb24odG8pKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dBbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0FsbCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xuICAgIH0pO1xuXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZU5hdmJhciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbn0pOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBWQUxJREFUSU9OIEfDiU7DiVJJUVVFIERFUyBGT1JNVUxBSVJFU1xuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgIH1cblxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xufVxuXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBldi50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQmx1cihldikge1xuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJywgJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbihldikge1xuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN5c3TDqG1lIGRlIHZhbGlkYXRpb24gZ8OpbsOpcmlxdWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5jb25zdCB2YWxpZGF0aW9uVGltZXJzID0ge307IC8vIFN0b2NrYWdlIGRlcyB0aW1lcnNcblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xuICAgIHZhbGlkYXRvcnNbaW5wdXRJZF0gPSB7IGVycm9ySWQsIHZhbGlkYXRlRm4gfTtcbn1cblxuZnVuY3Rpb24gcnVuVmFsaWRhdG9yKGlucHV0SWQpIHtcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XG5cbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnXFx1MDBBMCc7XG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBjb25maWcudmFsaWRhdGVGbihpbnB1dC52YWx1ZSwgaW5wdXQpO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICBlcnJvckJveC50ZXh0Q29udGVudCA9IHJlc3VsdDtcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVmFsaWRhdG9yKGlucHV0SWQsIGV2ZW50VHlwZXMgPSBbJ2lucHV0JywgJ2JsdXInXSwgZGVsYXlNcyA9IDMwMDApIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICAgIGlmICghaW5wdXQpIHJldHVybjtcblxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAvLyBQb3VyIGwnw6l2w6luZW1lbnQgJ2lucHV0Jywgb24gYWpvdXRlIHVuIGTDqWxhaSBkZSAzIHNlY29uZGVzXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcnVuVmFsaWRhdG9yKGlucHV0SWQpLCAxMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAvLyBQb3VyICdjbGljaycsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlLCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ2VtYWlsX3JlcXVpcmVkJyk7XG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gdCgnZW1haWxfaW52YWxpZCcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuY29uc3QgZW1haWxGaWVsZHMgPSBbXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXG4gICAgeyBpbnB1dElkOiBcInVzZXJfZW1haWxcIiwgZXJyb3JJZDogXCJ1c2VyX2VtYWlsLWVycm9yXCIgfSxcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XG5dO1xuXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gdChrZXkpIHtcbiAgICByZXR1cm4gKHdpbmRvdy5hcHBUcmFuc2xhdGlvbnMgJiYgd2luZG93LmFwcFRyYW5zbGF0aW9uc1trZXldKSB8fCBrZXk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUHNldWRvKGlucHV0SWQsIGVycm9ySWQsIG1pbkxlbmd0aCA9IDMpIHtcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwc2V1ZG9fcmVxdWlyZWQnKTtcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21pbl8zJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcbl07XG5cbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoKSk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF91cHBlcicpO1xuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX251bWJlcicpO1xuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJ1c2VyX3Bhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gdCgncGFzc3dvcmRfbGVuZ3RoXzgnKTtcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfbnVtYmVyJyk7XG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfc3BlY2lhbCcpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxucmVnaXN0ZXJWYWxpZGF0b3IoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X2NhdGVnb3J5X3JlcXVpcmVkJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9yZXF1aXJlZCcpO1xuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX21pbl8xMCcpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XG5cbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIHQoJ2ltYWdlX3R5cGUnKTtcbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSByZXR1cm4gdCgnaW1hZ2Vfc2l6ZScpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcblxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICB9KTtcblxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcblxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJTklUSUFMSVNBVElPTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XG5cbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xuXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG5cbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSByZXNldCBwYXNzd29yZFxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcblxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcblxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcbiAgICB9XG5cbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXG4gICAgaWYgKGxvZ2luRm9ybSkge1xuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xuICAgIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuICAgIGNvbnN0IGNsZWFyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNsZWFyJyk7XG5cbiAgICBjb25zdCBhc2lkZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLW9yZGVyLXNlYXJjaC1pbnB1dCcpO1xuICAgIGNvbnN0IGFzaWRlQ2xlYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWNsZWFyJyk7XG4gICAgY29uc3QgdG9nZ2xlQnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci10b2dnbGUnKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcbiAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB2ID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IHYgIT09ICcnO1xuXG4gICAgICAgIGlmIChjbGVhcikge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGNsZWFyLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQtd3JhcHBlcicpO1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy12YWx1ZScsIGhhc1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc2lkZUNsZWFyKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gYXNpZGVDbGVhci5jbG9zZXN0KCcuc2VhcmNoLWlucHV0LXdyYXBwZXInKTtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoYXMtdmFsdWUnLCBoYXNWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XG4gICAgICAgICAgICBjbGVhclJlc3VsdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc2lkZUlucHV0KSB7XG4gICAgICAgICAgICBhc2lkZUlucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgdXBkYXRlQnV0dG9uKCk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlQnV0dG9uKTtcbiAgICB9XG5cbiAgICBpZiAoYnRuKSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TGluayA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgLnJlc3VsdHMtbGlzdCAucmVzdWx0cy1jb250ZW50IGEnKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIGEnKTtcblxuICAgICAgICAgICAgaWYgKGZpcnN0TGluaykge1xuICAgICAgICAgICAgICAgIGZpcnN0TGluay5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2xlYXIgJiYgaW5wdXQpIHtcbiAgICAgICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcblxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XG5cbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcblxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICh2ID09PSAnJykge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpY29uICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaWNvblwiKTtcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXNwaW5uZXJcIik7XG5cbiAgICAgICAgaWYgKGljb24gJiYgc3Bpbm5lcikge1xuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyUmVxdWVzdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXZ0LmRldGFpbCB8fCB7fTtcbiAgICAgICAgY29uc3QgZWwgPSBkZXRhaWwuZWx0O1xuXG4gICAgICAgIGlmICghZWwgfHwgZWwuaWQgIT09ICdzZWFyY2gtaW5wdXQnKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWljb25cIik7XG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zcGlubmVyXCIpO1xuXG4gICAgICAgIGlmIChpY29uICYmIHNwaW5uZXIpIHtcbiAgICAgICAgICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUJ1dHRvbigpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRvZ2dsZUJ0biAmJiBpbnB1dCAmJiBhc2lkZUlucHV0KSB7XG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFzaWRlSW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFzaWRlSW5wdXQgJiYgaW5wdXQpIHtcbiAgICAgICAgYXNpZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gYXNpZGVJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgdXBkYXRlQnV0dG9uKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV2dCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXl1cCcsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFzaWRlQ2xlYXIgJiYgYXNpZGVJbnB1dCkge1xuICAgICAgICBhc2lkZUNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFzaWRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGFzaWRlSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuICAgIGNvbnN0IHNlYXJjaENsZWFyICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNsZWFyJyk7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaWNvbicpO1xuICAgIGNvbnN0IHNlYXJjaFNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNwaW5uZXInKTtcblxuICAgIGNvbnN0IHRvZ2dsZUJ0biAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItdG9nZ2xlJyk7XG4gICAgY29uc3QgcGFuZWwgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1wYW5lbCcpO1xuICAgIGNvbnN0IG92ZXJsYXkgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItb3ZlcmxheScpO1xuICAgIGNvbnN0IGNsb3NlQnRuICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItY2xvc2UnKTtcblxuICAgIGNvbnN0IGFzaWRlU2VhcmNoICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utb3JkZXItc2VhcmNoLWlucHV0Jyk7XG4gICAgY29uc3QgYXNpZGVDbGVhciAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1vcmRlci1zZWFyY2gtY2xlYXInKTtcblxuICAgIGNvbnN0IG5hbWVFbCAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS1uYW1lJyk7XG4gICAgY29uc3QgdW5pcXVlRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwby1pdGVtLXVuaXF1ZScpO1xuICAgIGNvbnN0IGl0ZW1JZElucHV0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG8taXRlbS1pZCcpO1xuICAgIGNvbnN0IGltZ0VsICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG8taXRlbS1pbWFnZSBpbWcnKTtcbiAgICBjb25zdCBpdGVtVW5pcXVlTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvLWl0ZW0tdW5pcXVlTmFtZScpO1xuICAgIGNvbnN0IHJhbmtTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLXJhbmstc2VjdGlvbicpO1xuICAgIGNvbnN0IHJhbmtJbnB1dCAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvLXJhbmstc2VjdGlvbiAubnVtYmVyLWxpbmVfX2lucHV0Jyk7XG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTZWFyY2hVaSgpIHtcbiAgICAgICAgaWYgKCFzZWFyY2hJbnB1dCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHYgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gdiAhPT0gJyc7XG5cbiAgICAgICAgaWYgKHNlYXJjaENsZWFyKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gc2VhcmNoQ2xlYXIuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dC13cmFwcGVyJyk7XG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLXZhbHVlJywgaGFzVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xuICAgICAgICAgICAgY2xlYXJSZXN1bHRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzeW5jaHJvbmlzZSBsJ2FzaWRlIGF2ZWMgbGUgc2VhcmNoIHByaW5jaXBhbFxuICAgICAgICBpZiAoYXNpZGVTZWFyY2gpIHtcbiAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGaXJzdFJlc3VsdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHRzLWNvbnRlbnRbZGF0YS1pdGVtLW5hbWVdJykgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gZ2V0Rmlyc3RSZXN1bHRFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgaWYgKG5hbWVFbCkgICBuYW1lRWwudGV4dENvbnRlbnQgICA9ICdBdWN1biBpdGVtIHPDqWxlY3Rpb25uw6knO1xuICAgICAgICAgICAgaWYgKGltZ0VsKSB7XG4gICAgICAgICAgICAgICAgaW1nRWwuc3JjID0gJyc7XG4gICAgICAgICAgICAgICAgaW1nRWwuYWx0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFua1NlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5hbWUgICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1VbmlxdWUgICAgfHwgJyc7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lICAgICAgPSBmaXJzdC5kYXRhc2V0Lml0ZW1OYW1lICAgICAgfHwgZmlyc3QudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBjb25zdCBpdGVtSW1hZ2VOYW1lID0gZmlyc3QuZGF0YXNldC5pdGVtSW1hZ2VOYW1lIHx8ICcnO1xuICAgICAgICBjb25zdCBpdGVtQ2F0ZWdvcnkgID0gKGZpcnN0LmRhdGFzZXQuaXRlbUNhdGVnb3J5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBmdXNpb25MaW1pdCAgID0gcGFyc2VJbnQoZmlyc3QuZGF0YXNldC5mdXNpb25MaW1pdCB8fCAnMCcsIDEwKTtcblxuICAgICAgICBpZiAoaXRlbVVuaXF1ZU5hbWVJbnB1dClcbiAgICAgICAgICAgIGl0ZW1VbmlxdWVOYW1lSW5wdXQudmFsdWUgPSB1bmlxdWVOYW1lO1xuXG4gICAgICAgIGlmIChuYW1lRWwpICAgbmFtZUVsLnRleHRDb250ZW50ICAgPSBpdGVtTmFtZTtcblxuICAgICAgICBpZiAoaW1nRWwpIHtcbiAgICAgICAgICAgIGltZ0VsLnNyYyA9IGl0ZW1JbWFnZU5hbWU7XG4gICAgICAgICAgICBpbWdFbC5hbHQgPSBpdGVtTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYW5rU2VjdGlvbikge1xuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSA9PT0gJ21vZHMnIHx8IGl0ZW1DYXRlZ29yeSA9PT0gJ21vZCcpIHtcbiAgICAgICAgICAgICAgICByYW5rU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFua1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFua0lucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKGZ1c2lvbkxpbWl0KSAmJiBmdXNpb25MaW1pdCA+IDApIHtcbiAgICAgICAgICAgICAgICByYW5rSW5wdXQubWF4ID0gZnVzaW9uTGltaXQ7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJhbmtJbnB1dC52YWx1ZSB8fCAnMCcsIDEwKSA+IGZ1c2lvbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmtJbnB1dC52YWx1ZSA9IGZ1c2lvbkxpbWl0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFua0lucHV0Lm1heCAgID0gMDtcbiAgICAgICAgICAgICAgICByYW5rSW5wdXQudmFsdWUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBhbmVsKCkge1xuICAgICAgICBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKTtcbiAgICAgICAgaWYgKHBhbmVsKSAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcbiAgICAgICAgaWYgKG92ZXJsYXkpIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlUGFuZWwoKSB7XG4gICAgICAgIGlmIChwYW5lbCkgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICB9XG5cbiAgICAvLyAtLS0gU0VBUkNIIFBSSU5DSVBBTCAoSFRNWCkgLS0tXG5cbiAgICBpZiAoc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcbiAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVTZWFyY2hVaSk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaEJ1dHRvbikge1xuICAgICAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmsgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzIC5yZXN1bHRzLWxpc3QgLnJlc3VsdHMtY29udGVudCBhJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cyBhJyk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdExpbmspIHtcbiAgICAgICAgICAgICAgICBmaXJzdExpbmsuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaENsZWFyICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgIHNlYXJjaENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xuICAgICAgICAgICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3Bpbm5lciBIVE1YXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDpiZWZvcmVSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XG5cbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcblxuICAgICAgICBjb25zdCB2ID0gZWwudmFsdWUudHJpbSgpO1xuICAgICAgICBpZiAodiA9PT0gJycpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaEljb24gJiYgc2VhcmNoU3Bpbm5lcikge1xuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgc2VhcmNoU3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBldnQuZGV0YWlsIHx8IHt9O1xuICAgICAgICBjb25zdCBlbCA9IGRldGFpbC5lbHQ7XG5cbiAgICAgICAgaWYgKCFlbCB8fCBlbC5pZCAhPT0gJ3NlYXJjaC1pbnB1dCcpIHJldHVybjtcblxuICAgICAgICBpZiAoc2VhcmNoSWNvbiAmJiBzZWFyY2hTcGlubmVyKSB7XG4gICAgICAgICAgICBzZWFyY2hTcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVNlYXJjaFVpKCk7XG4gICAgfSk7XG5cbiAgICAvLyBRdWFuZCBIVE1YIHJlbXBsYWNlICNyZXN1bHRzIOKGkiBzaSBsZSBwYW5lbCBlc3Qgb3V2ZXJ0LCBvbiBtZXQgw6Agam91ciBhdmVjIGxlIG5vdXZlYXUgcHJlbWllciByw6lzdWx0YXRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyU3dhcCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgJiYgZXZ0LnRhcmdldC5pZCA9PT0gJ3Jlc3VsdHMnKSB7XG4gICAgICAgICAgICBpZiAocGFuZWwgJiYgcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICBmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLS0tIEFTSURFIDogc3luY2hybyArIHJlY2hlcmNoZSBCREQvQVBJIC0tLVxuXG4gICAgLy8gb3V2ZXJ0dXJlIGR1IHBhbm5lYXVcbiAgICBpZiAodG9nZ2xlQnRuKSB7XG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBjb3BpZSBsYSB2YWxldXIgYWN0dWVsbGUgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlIHByaW5jaXBhbGVcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dCAmJiBhc2lkZVNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGFzaWRlU2VhcmNoLnZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcGVuUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUGFuZWwpO1xuICAgIH1cbiAgICBpZiAoY2xvc2VCdG4pIHtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBhbmVsKTtcbiAgICB9XG5cbiAgICAvLyB0YXBlciBkYW5zIGwnaW5wdXQgZGUgbCdhc2lkZSDihpIgbWV0IMOgIGpvdXIgbGUgc2VhcmNoIHByaW5jaXBhbCArIGTDqWNsZW5jaGUgbGEgcmVjaGVyY2hlIEhUTVhcbiAgICBpZiAoYXNpZGVTZWFyY2ggJiYgc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgYXNpZGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGFzaWRlU2VhcmNoLnZhbHVlO1xuICAgICAgICAgICAgdXBkYXRlU2VhcmNoVWkoKTtcblxuICAgICAgICAgICAgLy8gZMOpY2xlbmNoZSB1biBrZXl1cCBwb3VyIHF1ZSBodG14L3JlYWN0aXZlIChoeC10cmlnZ2VyPVwia2V5dXAgY2hhbmdlZCBkZWxheTozMDBtc1wiKVxuICAgICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleXVwJywgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgc2VhcmNoSW5wdXQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBkZSBsJ2FzaWRlXG4gICAgaWYgKGFzaWRlQ2xlYXIgJiYgYXNpZGVTZWFyY2gpIHtcbiAgICAgICAgYXNpZGVDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhc2lkZVNlYXJjaC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgYXNpZGVTZWFyY2guZm9jdXMoKTtcblxuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB1cGRhdGVTZWFyY2hVaSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhdXRvIGluY3JlbWVudCBkZWNyZW1lbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWxpbmUnKS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGxpbmUucXVlcnlTZWxlY3RvcignLm51bWJlci1saW5lX19pbnB1dCcpO1xuICAgICAgICBjb25zdCB1cCAgICA9IGxpbmUucXVlcnlTZWxlY3RvcignLnVwJyk7XG4gICAgICAgIGNvbnN0IGRvd24gID0gbGluZS5xdWVyeVNlbGVjdG9yKCcuZG93bicpO1xuXG4gICAgICAgIGlmICghaW5wdXQgfHwgIXVwIHx8ICFkb3duKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGludGVydmFsID0gbnVsbDtcbiAgICAgICAgbGV0IGhvbGRUaW1lciA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSB8fCAnOTk5OTk5OScsIDEwKTtcbiAgICAgICAgY29uc3QgbWluID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSB8fCAnMCcsIDEwKTtcblxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnIHx8IGlucHV0LnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsYW1wVmFsdWUodmFsKSB7XG4gICAgICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgICAgIGlmIChpc05hTih2YWwpKSB2YWwgPSBtaW47XG4gICAgICAgICAgICBpZiAodmFsIDwgbWluKSB2YWwgPSBtaW47XG4gICAgICAgICAgICBpZiAodmFsID4gbWF4KSB2YWwgPSBtYXg7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlDbGFtcCgpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY2xhbXBWYWx1ZShpbnB1dC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzYWZlU3RlcFVwKCkge1xuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xuICAgICAgICAgICAgaW5wdXQuc3RlcFVwKCk7XG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzYWZlU3RlcERvd24oKSB7XG4gICAgICAgICAgICBhcHBseUNsYW1wKCk7XG4gICAgICAgICAgICBpbnB1dC5zdGVwRG93bigpO1xuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRIb2xkKGFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uKCk7XG5cbiAgICAgICAgICAgIGhvbGRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9uLCA3MCk7XG4gICAgICAgICAgICB9LCAxNzApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcEhvbGQoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaG9sZFRpbWVyKTtcbiAgICAgICAgICAgIGhvbGRUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluY3JlbWVudFxuICAgICAgICB1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcFVwKCkpKTtcbiAgICAgICAgdXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHN0YXJ0SG9sZCgoKSA9PiBpbnB1dC5zdGVwVXAoKSksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgICAgICAvLyBkZWNyZW1lbnRcbiAgICAgICAgZG93bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcERvd24oKSkpO1xuICAgICAgICBkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiBzdGFydEhvbGQoKCkgPT4gaW5wdXQuc3RlcERvd24oKSksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgICAgICAvLyBFbXDDqmNoZXIgdG91dGUgZW50csOpZSBpbnZhbGlkZSBhdSBjbGF2aWVyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgYXBwbHlDbGFtcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdG9wXG4gICAgICAgIFsnbW91c2V1cCcsICdtb3VzZWxlYXZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ10uZm9yRWFjaChldnQgPT5cbiAgICAgICAgICAgIGxpbmUuYWRkRXZlbnRMaXN0ZW5lcihldnQsIHN0b3BIb2xkKVxuICAgICAgICApO1xuICAgIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XG4gICAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZ1c2UtY29va2llc1wiKTtcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XG5cbiAgICAvLyBWw6lyaWZpZXIgcXVlIGxlcyDDqWzDqW1lbnRzIGV4aXN0ZW50XG4gICAgaWYgKCFib3ggfHwgIWFjY2VwdCB8fCAhcmVmdXNlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xuXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcbiAgICBpZiAoIWNvbnNlbnQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIH0sIDYwMCk7XG4gICAgfSBlbHNlIGlmIChjb25zZW50ID09PSBcInJlZnVzZWRcIikge1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xuICAgIGlmIChjb25zZW50ICE9PSBcImFjY2VwdGVkXCIgJiYgcmVtZW1iZXJDaGVja2JveCkge1xuICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBQ0NFUFRFUlxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwiYWNjZXB0ZWRcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBSRUZVU0VSXG4gICAgcmVmdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIExFIEJPVVRPTiBSw4lEVUlUIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWV4cGFuZC1idG5cIik7XG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XG4gICAgICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXG4gICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcbiAgICAgICAgY29uc3QgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIl9yZW1lbWJlcl9tZVwiXScpO1xuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICBpZiAocmVtZW1iZXJMYWJlbCkge1xuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGEiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJzdHlsZSIsInBvc2l0aW9uIiwib3BhY2l0eSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZXJyIiwicmVtb3ZlQ2hpbGQiLCJjYXJkIiwicG9wdXAiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJoaWRlVGltZW91dCIsImlzT3BlbiIsInNob3dEcm9wZG93biIsImNsZWFyVGltZW91dCIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInRvZ2dsZURyb3Bkb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXNzaXZlIiwiY29udGFpbnMiLCJhdHRhY2hOYXZiYXJEcm9wZG93biIsIm5hdmJhck1lbnUiLCJuYXZiYXJDb250YWluZXIiLCJyZWdpb25FbHMiLCJpc0Nsb3NpbmciLCJpc0luUmVnaW9uIiwiZWwiLCJzb21lIiwibm9kZSIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInRvZ2dsZU5hdmJhciIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwicGFyZW50RWxlbWVudCIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJnZXRFbGVtZW50QnlJZCIsImVycm9yQm94IiwidmlzaWJpbGl0eSIsInJlc3VsdCIsImF0dGFjaFZhbGlkYXRvciIsImV2ZW50VHlwZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWxheU1zIiwiZXZlbnRUeXBlIiwicmVnaXN0ZXJFbWFpbCIsInYiLCJ0IiwiZW1haWxGaWVsZHMiLCJmIiwia2V5IiwiYXBwVHJhbnNsYXRpb25zIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJwc2V1ZG9GaWVsZHMiLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwicmVzdWx0cyIsImNsZWFyIiwiYXNpZGVJbnB1dCIsImFzaWRlQ2xlYXIiLCJ0b2dnbGVCdG4iLCJjbGVhclJlc3VsdHMiLCJpbm5lckhUTUwiLCJ1cGRhdGVCdXR0b24iLCJoYXNWYWx1ZSIsImZpcnN0TGluayIsImNsaWNrIiwiZm9jdXMiLCJldnQiLCJkZXRhaWwiLCJlbHQiLCJpY29uIiwic3Bpbm5lciIsIktleWJvYXJkRXZlbnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsInNlYXJjaElucHV0Iiwic2VhcmNoQnV0dG9uIiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaENsZWFyIiwic2VhcmNoSWNvbiIsInNlYXJjaFNwaW5uZXIiLCJwYW5lbCIsIm92ZXJsYXkiLCJjbG9zZUJ0biIsImFzaWRlU2VhcmNoIiwibmFtZUVsIiwidW5pcXVlRWwiLCJpdGVtSWRJbnB1dCIsImltZ0VsIiwiaXRlbVVuaXF1ZU5hbWVJbnB1dCIsInJhbmtTZWN0aW9uIiwicmFua0lucHV0IiwidXBkYXRlU2VhcmNoVWkiLCJnZXRGaXJzdFJlc3VsdEVsZW1lbnQiLCJmaWxsUGFuZWxGcm9tRmlyc3RSZXN1bHQiLCJzcmMiLCJhbHQiLCJ1bmlxdWVOYW1lIiwiaXRlbVVuaXF1ZSIsIml0ZW1OYW1lIiwiaXRlbUltYWdlTmFtZSIsIml0ZW1DYXRlZ29yeSIsInRvTG93ZXJDYXNlIiwiZnVzaW9uTGltaXQiLCJwYXJzZUludCIsImlzTmFOIiwib3BlblBhbmVsIiwiY2xvc2VQYW5lbCIsImxpbmUiLCJ1cCIsImRvd24iLCJpbnRlcnZhbCIsImhvbGRUaW1lciIsIm1pbiIsImNsYW1wVmFsdWUiLCJ2YWwiLCJhcHBseUNsYW1wIiwic2FmZVN0ZXBVcCIsInN0ZXBVcCIsInNhZmVTdGVwRG93biIsInN0ZXBEb3duIiwic3RhcnRIb2xkIiwiYWN0aW9uIiwic2V0SW50ZXJ2YWwiLCJzdG9wSG9sZCIsImNsZWFySW50ZXJ2YWwiLCJib3giLCJhY2NlcHQiLCJyZWZ1c2UiLCJyZW1lbWJlckNoZWNrYm94IiwiY29uc29sZSIsIndhcm4iLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc2FibGVkIiwic2V0SXRlbSIsImNoZWNrZWQiLCJjb2xsYXBzZUJ0biIsInJlbWVtYmVyTGFiZWwiLCJjbGlja0hhbmRsZXIiLCJjdXJyZW50Q29uc2VudCIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==