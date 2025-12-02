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
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/dropdown.js */ "./assets/scripts/dropdown.js");
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-7a4696"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7SUFDeEQsSUFBSUQsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQ2xHLGdCQUFnQixDQUFDLE9BQU8sRUFBRW1HLFlBQVksQ0FBQztJQUN6RDtFQUNKO0FBRUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xGRjNILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBMkgsTUFBTSxFQUFJO0VBQ3REQSxNQUFNLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNc0MsS0FBSyxHQUFHK0QsTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSWhFLEtBQUssSUFBSUEsS0FBSyxDQUFDekQsT0FBTyxDQUFDMEgsUUFBUSxLQUFLN0MsU0FBUyxFQUFFO01BQy9DcEIsS0FBSyxDQUFDTixLQUFLLEdBQUdNLEtBQUssQ0FBQ3pELE9BQU8sQ0FBQzBILFFBQVE7TUFDcENqRSxLQUFLLENBQUNrRSxhQUFhLENBQUMsSUFBSUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZm9ybS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3JlbWVtYmVyX21lLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJ2h0bXgub3JnJztcclxud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcclxuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xyXG4gICBDb21wYXRpYmxlIFN1cHBvcnQgLyBVc2VyIC8gTG9naW4gLyBGb3Jnb3RQYXNzd29yZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblxyXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcclxuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XHJcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xyXG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xyXG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogc2Fpc2lyIHVuZSBhZHJlc3NlIGVtYWlsLlwiO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gXCJBZHJlc3NlIGVtYWlsIGludmFsaWRlLlwiO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVtYWlsRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJuYW1lXCIsIGVycm9ySWQ6IFwidXNlcm5hbWUtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XHJcbl07XHJcblxyXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJQc2V1ZG8oaW5wdXRJZCwgZXJyb3JJZCwgbWluTGVuZ3RoID0gMykge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIHBzZXVkby5cIjtcclxuICAgICAgICBpZiAodi5sZW5ndGggPCBtaW5MZW5ndGgpIHJldHVybiBgTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgJHttaW5MZW5ndGh9IGNhcmFjdMOocmVzLmA7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcHNldWRvRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX3BzZXVkb1wiLCBlcnJvcklkOiBcInVzZXJfcHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG5dO1xyXG5cclxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiBcIkF1IG1vaW5zIDggY2FyYWN0w6hyZXMgcmVxdWlzLlwiO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiBcIlVuZSBtYWp1c2N1bGUgZXN0IHJlcXVpc2UuXCI7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiBcIlVuIGNoaWZmcmUgZXN0IHJlcXVpcy5cIjtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2FyYWN0w6hyZSBzcMOpY2lhbCBlc3QgcmVxdWlzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gXCJBdSBtb2lucyA4IGNhcmFjdMOocmVzIHJlcXVpcy5cIjtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gXCJVbmUgbWFqdXNjdWxlIGVzdCByZXF1aXNlLlwiO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gXCJVbiBjaGlmZnJlIGVzdCByZXF1aXMuXCI7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiBcIlVuIGNhcmFjdMOocmUgc3DDqWNpYWwgZXN0IHJlcXVpcy5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIFwib3VibGnDqVwiIChub3V2ZWF1IG1vdCBkZSBwYXNzZSwgc2kgdHUgYXMgdW4gY2hhbXBzIGTDqWRpw6kpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwiZm9yZ290X3Bhc3N3b3JkXCIsIFwiZm9yZ290X3Bhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY2hvaXNpciB1bmUgY2F0w6lnb3JpZS5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9tZXNzYWdlXCIsIFwidGV4dC1hcmVhLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbWVzc2FnZS5cIjtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gXCJMZSBtZXNzYWdlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMTAgY2FyYWN0w6hyZXMuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBWQUxJREFUSU9OIERFIEzigJlJTUFHRSAoc3VwcG9ydClcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZCA9IFtcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIiwgXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS93ZWJwXCJdO1xyXG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuICAgIGlmICghYWxsb3dlZC5pbmNsdWRlcyhmaWxlLnR5cGUpKSByZXR1cm4gXCJGb3JtYXRzIGF1dG9yaXPDqXMgOiBKUEVHLCBKUEcsIFBORywgV0VCUC5cIjtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiBcIkltYWdlIHRyb3Agdm9sdW1pbmV1c2UgKG1heCAyIE1vKS5cIjtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xyXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQW5udWxlciB0b3VzIGxlcyB0aW1lcnMgZW4gY291cnNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHRvdXMgbGVzIHZhbGlkYXRldXJzIGVucmVnaXN0csOpc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgY2hhbXBzIHF1aSBvbnQgZMOpasOgIHVuIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVElBTElTQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbml0SW5wdXQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9tZXNzYWdlJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgcmVzZXQgcGFzc3dvcmRcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VybmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIMOpdmVudHVlbHMgZHUgZm9ybXVsYWlyZSBcIm1vdCBkZSBwYXNzZSBvdWJsacOpXCJcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XHJcbiAgICBpZiAoZm9ybSkge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGlmIChsb2dpbkZvcm0pIHtcclxuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWNvbnNlbnRcIik7XHJcbiAgICBjb25zdCBhY2NlcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZ1c2UtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlbWVtYmVyQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9yZW1lbWJlcl9tZVwiKTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgcXVlIGxlcyDDqWzDqW1lbnRzIGV4aXN0ZW50XHJcbiAgICBpZiAoIWJveCB8fCAhYWNjZXB0IHx8ICFyZWZ1c2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLDiWzDqW1lbnRzIGNvb2tpZSBub24gdHJvdXbDqXNcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgIC8vIEFGRklDSEFHRSBJTklUSUFMXHJcbiAgICBpZiAoIWNvbnNlbnQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOJU0FDVElWRVIgUkVNRU1CRVIgTUUgU0kgUkVGVVNcclxuICAgIGlmIChjb25zZW50ICE9PSBcImFjY2VwdGVkXCIgJiYgcmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFDQ0VQVEVSXHJcbiAgICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwiYWNjZXB0ZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSRUZVU0VSXHJcbiAgICByZWZ1c2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwicmVmdXNlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIExFIEJPVVRPTiBSw4lEVUlUIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtZXhwYW5kLWJ0blwiKTtcclxuICAgIGlmIChjb2xsYXBzZUJ0bikge1xyXG4gICAgICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBSRU1FTUJFUiBNRSBBUFLDiFMgVU4gUkVGVVMg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICBjb25zdCByZW1lbWJlckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiX3JlbWVtYmVyX21lXCJdJyk7XHJcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckxhYmVsKSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsInRhcmdldCIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInZhbHVlIiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwidGV4dENvbnRlbnQiLCJyZXN1bHQiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInJlZ2lzdGVyRW1haWwiLCJ2IiwiZW1haWxGaWVsZHMiLCJmIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJjb25jYXQiLCJwc2V1ZG9GaWVsZHMiLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsIndhcm4iLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc2FibGVkIiwic2V0SXRlbSIsImNoZWNrZWQiLCJjb2xsYXBzZUJ0biIsImUiLCJyZW1lbWJlckxhYmVsIiwiY2xpY2tIYW5kbGVyIiwiY3VycmVudENvbnNlbnQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9