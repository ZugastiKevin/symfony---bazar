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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ0E7QUFDTztBQUNGO0FBQ0Q7QUFDYjtBQUNsQkEsTUFBTSxDQUFDQyxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMERBQVUsQ0FBQztBQUVqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjdFLFNBQVNDLG1CQUFtQkEsQ0FBQ0MsY0FBYyxFQUFFO0VBQ3pDLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsY0FBYyxDQUFDO0VBRXpEQyxPQUFPLENBQUNHLE9BQU8sQ0FBQyxVQUFDQyxNQUFNLEVBQUs7SUFDeEIsSUFBTUMsY0FBYyxHQUFHRCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsY0FBYztJQUNwRCxJQUFJLENBQUNGLGNBQWMsRUFBRTtJQUVyQixJQUFNRyxlQUFlLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDSixjQUFjLENBQUM7SUFDOUQsSUFBSSxDQUFDRyxlQUFlLEVBQUU7SUFFdEIsSUFBSUUsV0FBVyxHQUFHLElBQUk7SUFDdEIsSUFBSUMsTUFBTSxHQUFHLEtBQUs7SUFFbEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztNQUN2QixJQUFJRixXQUFXLEVBQUU7UUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7UUFDekJBLFdBQVcsR0FBRyxJQUFJO01BQ3RCO01BRUFDLE1BQU0sR0FBRyxJQUFJO01BQ2JILGVBQWUsQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUN0Q1AsZUFBZSxDQUFDTSxLQUFLLENBQUNFLFNBQVMsR0FBRyxrQ0FBa0M7TUFDcEVaLE1BQU0sQ0FBQ2EsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7TUFDN0JYLGVBQWUsQ0FBQ00sS0FBSyxDQUFDRSxTQUFTLEdBQUcsdUNBQXVDO01BRXpFLElBQU1JLFFBQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxLQUFLLEVBQUs7UUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxhQUFhLEtBQUssbUJBQW1CLEVBQUU7VUFDN0NkLGVBQWUsQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtVQUN0Q1gsTUFBTSxDQUFDYSxTQUFTLENBQUNNLE1BQU0sQ0FBQyxlQUFlLENBQUM7VUFDeENmLGVBQWUsQ0FBQ2dCLG1CQUFtQixDQUFDLGNBQWMsRUFBRUosUUFBTyxDQUFDO1VBQzVEVCxNQUFNLEdBQUcsS0FBSztRQUNsQjtNQUNKLENBQUM7TUFFREgsZUFBZSxDQUFDaUIsZ0JBQWdCLENBQUMsY0FBYyxFQUFFTCxRQUFPLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7TUFDdkJoQixXQUFXLEdBQUdpQixVQUFVLENBQUNSLGtCQUFrQixFQUFFLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJUCxLQUFLLEVBQUs7TUFDOUJBLEtBQUssQ0FBQ1EsY0FBYyxDQUFDLENBQUM7TUFDdEJSLEtBQUssQ0FBQ1MsZUFBZSxDQUFDLENBQUM7TUFFdkIsSUFBSW5CLE1BQU0sRUFBRTtRQUNSLElBQUlELFdBQVcsRUFBRTtVQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztRQUM3QjtRQUNBUyxrQkFBa0IsQ0FBQyxDQUFDO01BQ3hCLENBQUMsTUFBTTtRQUNIUCxZQUFZLENBQUMsQ0FBQztNQUNsQjtJQUNKLENBQUM7O0lBRUQ7SUFDQVIsTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFYixZQUFZLENBQUM7SUFDbkRSLE1BQU0sQ0FBQ3FCLGdCQUFnQixDQUFDLFlBQVksRUFBRUMsWUFBWSxDQUFDO0lBQ25EbEIsZUFBZSxDQUFDaUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFYixZQUFZLENBQUM7SUFDNURKLGVBQWUsQ0FBQ2lCLGdCQUFnQixDQUFDLFlBQVksRUFBRUMsWUFBWSxDQUFDOztJQUU1RDtJQUNBdEIsTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRyxjQUFjLENBQUM7SUFDaER4QixNQUFNLENBQUNxQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVHLGNBQWMsRUFBRTtNQUFFRyxPQUFPLEVBQUU7SUFBTSxDQUFDLENBQUM7O0lBRXpFO0lBQ0E5QixRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0osS0FBSyxFQUFLO01BQzFDLElBQUlWLE1BQU0sSUFBSSxDQUFDUCxNQUFNLENBQUM0QixRQUFRLENBQUNYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLElBQUksQ0FBQ3pCLGVBQWUsQ0FBQ3dCLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDWSxNQUFNLENBQUMsRUFBRTtRQUNyRixJQUFJdkIsV0FBVyxFQUFFO1VBQ2JHLFlBQVksQ0FBQ0gsV0FBVyxDQUFDO1FBQzdCO1FBQ0FTLGtCQUFrQixDQUFDLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7SUFFRmxCLFFBQVEsQ0FBQ3dCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFDSixLQUFLLEVBQUs7TUFDL0MsSUFBSVYsTUFBTSxJQUFJLENBQUNQLE1BQU0sQ0FBQzRCLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDWSxNQUFNLENBQUMsSUFBSSxDQUFDekIsZUFBZSxDQUFDd0IsUUFBUSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQyxFQUFFO1FBQ3JGLElBQUl2QixXQUFXLEVBQUU7VUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7UUFDN0I7UUFDQVMsa0JBQWtCLENBQUMsQ0FBQztNQUN4QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOO0FBRUEsU0FBU2Usb0JBQW9CQSxDQUFBLEVBQUc7RUFDNUIsSUFBTTlCLE1BQU0sR0FBR0gsUUFBUSxDQUFDUSxhQUFhLENBQUMseUJBQXlCLENBQUM7RUFDaEUsSUFBTTBCLFVBQVUsR0FBR2xDLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN6RCxJQUFNMkIsZUFBZSxHQUFHbkMsUUFBUSxDQUFDUSxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFFbEUsSUFBSSxDQUFDTCxNQUFNLElBQUksQ0FBQytCLFVBQVUsSUFBSSxDQUFDQyxlQUFlLEVBQUU7RUFFaEQsSUFBTS9CLGNBQWMsR0FBR0QsTUFBTSxDQUFDRSxPQUFPLENBQUNDLGNBQWM7RUFDcEQsSUFBSSxDQUFDRixjQUFjLEVBQUU7RUFFckIsSUFBTUcsZUFBZSxHQUFHUCxRQUFRLENBQUNRLGFBQWEsQ0FBQ0osY0FBYyxDQUFDO0VBQzlELElBQUksQ0FBQ0csZUFBZSxFQUFFO0VBRXRCLElBQU02QixTQUFTLEdBQUcsQ0FBQ2pDLE1BQU0sRUFBRWdDLGVBQWUsRUFBRTVCLGVBQWUsQ0FBQztFQUU1RCxJQUFJRSxXQUFXLEdBQUcsSUFBSTtFQUN0QixJQUFJNEIsU0FBUyxHQUFHLEtBQUs7RUFDckIsSUFBSTNCLE1BQU0sR0FBRyxLQUFLO0VBRWxCLElBQU00QixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsRUFBRTtJQUFBLE9BQ2xCSCxTQUFTLENBQUNJLElBQUksQ0FBQyxVQUFDQyxJQUFJO01BQUEsT0FBS0EsSUFBSSxJQUFJQSxJQUFJLENBQUNWLFFBQVEsQ0FBQ1EsRUFBRSxDQUFDO0lBQUEsRUFBQztFQUFBO0VBRXZELElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7SUFDbEIsSUFBSWpDLFdBQVcsRUFBRTtNQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztNQUN6QkEsV0FBVyxHQUFHLElBQUk7SUFDdEI7SUFFQTRCLFNBQVMsR0FBRyxLQUFLO0lBQ2pCM0IsTUFBTSxHQUFHLElBQUk7SUFFYkgsZUFBZSxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3RDUCxlQUFlLENBQUNNLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLGtDQUFrQztJQUNwRVosTUFBTSxDQUFDYSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFFckNpQixVQUFVLENBQUNsQixTQUFTLENBQUNNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUNwRFksVUFBVSxDQUFDbEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7SUFFakRrQixlQUFlLENBQUN0QixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3RDcUIsZUFBZSxDQUFDbkIsU0FBUyxDQUFDTSxNQUFNLENBQUMsMkJBQTJCLENBQUM7SUFDN0RhLGVBQWUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0VBQzlELENBQUM7RUFFRCxJQUFNMEIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJOLFNBQVMsR0FBRyxJQUFJO0lBQ2hCM0IsTUFBTSxHQUFHLEtBQUs7SUFFZEgsZUFBZSxDQUFDTSxLQUFLLENBQUNFLFNBQVMsR0FBRyx1Q0FBdUM7SUFFekUsSUFBTUksU0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLEtBQUssRUFBSztNQUN2QixJQUFJQSxLQUFLLENBQUNDLGFBQWEsS0FBSyxtQkFBbUIsRUFBRTtRQUM3QyxJQUFJLENBQUNnQixTQUFTLEVBQUU7VUFDWjlCLGVBQWUsQ0FBQ2dCLG1CQUFtQixDQUFDLGNBQWMsRUFBRUosU0FBTyxDQUFDO1VBQzVEO1FBQ0o7UUFFQVosZUFBZSxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1FBQ3RDWCxNQUFNLENBQUNhLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUN4Q2YsZUFBZSxDQUFDZ0IsbUJBQW1CLENBQUMsY0FBYyxFQUFFSixTQUFPLENBQUM7TUFDaEU7SUFDSixDQUFDO0lBQ0RaLGVBQWUsQ0FBQ2lCLGdCQUFnQixDQUFDLGNBQWMsRUFBRUwsU0FBTyxDQUFDO0lBRXpEZ0IsZUFBZSxDQUFDbkIsU0FBUyxDQUFDTSxNQUFNLENBQUMsMkJBQTJCLENBQUM7SUFDN0RhLGVBQWUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0lBRTFEaUIsVUFBVSxDQUFDbEIsU0FBUyxDQUFDTSxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDcERZLFVBQVUsQ0FBQ2xCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO0VBQ3JELENBQUM7RUFFRCxJQUFNMkIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJeEIsS0FBSyxFQUFLO0lBQzdCLElBQU15QixFQUFFLEdBQUd6QixLQUFLLENBQUMwQixhQUFhO0lBQzlCLElBQUlELEVBQUUsSUFBSVAsVUFBVSxDQUFDTyxFQUFFLENBQUMsRUFBRTtJQUUxQixJQUFJcEMsV0FBVyxFQUFFO01BQ2JHLFlBQVksQ0FBQ0gsV0FBVyxDQUFDO0lBQzdCO0lBQ0FBLFdBQVcsR0FBR2lCLFVBQVUsQ0FBQ2lCLGFBQWEsRUFBRSxHQUFHLENBQUM7RUFDaEQsQ0FBQztFQUVELElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJM0IsS0FBSyxFQUFLO0lBQzVCQSxLQUFLLENBQUNRLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCUixLQUFLLENBQUNTLGVBQWUsQ0FBQyxDQUFDO0lBRXZCLElBQUluQixNQUFNLEVBQUU7TUFDUixJQUFJRCxXQUFXLEVBQUU7UUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7TUFDN0I7TUFDQWtDLGFBQWEsQ0FBQyxDQUFDO0lBQ25CLENBQUMsTUFBTTtNQUNIRCxPQUFPLENBQUMsQ0FBQztJQUNiO0VBQ0osQ0FBQzs7RUFFRDtFQUNBTixTQUFTLENBQUNsQyxPQUFPLENBQUMsVUFBQ3FDLEVBQUUsRUFBSztJQUN0QkEsRUFBRSxDQUFDZixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVrQixPQUFPLENBQUM7SUFDMUNILEVBQUUsQ0FBQ2YsZ0JBQWdCLENBQUMsWUFBWSxFQUFFb0IsYUFBYSxDQUFDO0VBQ3BELENBQUMsQ0FBQzs7RUFFRjtFQUNBekMsTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFdUIsWUFBWSxDQUFDO0VBQzlDNUMsTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFdUIsWUFBWSxFQUFFO0lBQUVqQixPQUFPLEVBQUU7RUFBTSxDQUFDLENBQUM7O0VBRXZFO0VBQ0E5QixRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0osS0FBSyxFQUFLO0lBQzFDLElBQUlWLE1BQU0sSUFBSSxDQUFDNEIsVUFBVSxDQUFDbEIsS0FBSyxDQUFDWSxNQUFNLENBQUMsRUFBRTtNQUNyQyxJQUFJdkIsV0FBVyxFQUFFO1FBQ2JHLFlBQVksQ0FBQ0gsV0FBVyxDQUFDO01BQzdCO01BQ0FrQyxhQUFhLENBQUMsQ0FBQztJQUNuQjtFQUNKLENBQUMsQ0FBQztFQUVGM0MsUUFBUSxDQUFDd0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUNKLEtBQUssRUFBSztJQUMvQyxJQUFJVixNQUFNLElBQUksQ0FBQzRCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLEVBQUU7TUFDckMsSUFBSXZCLFdBQVcsRUFBRTtRQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztNQUM3QjtNQUNBa0MsYUFBYSxDQUFDLENBQUM7SUFDbkI7RUFDSixDQUFDLENBQUM7QUFDTjtBQUVBM0MsUUFBUSxDQUFDd0IsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRFMsb0JBQW9CLENBQUMsQ0FBQztFQUN0QnBDLG1CQUFtQixDQUFDLDJCQUEyQixDQUFDO0VBQ2hEQSxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQztBQUNqRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW1ELFFBQVEsR0FBRyx5R0FBeUc7QUFDMUgsSUFBTUMsTUFBTSxHQUFHakQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQytDLFFBQVEsQ0FBQztBQUNsRCxJQUFNRSxJQUFJLEdBQUdsRCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxXQUFXLENBQUM7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLFNBQVMyQyxTQUFTQSxDQUFDQyxPQUFPLEVBQUU7RUFDeEIsSUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSUYsT0FBTyxDQUFDRyxhQUFhO0VBRWhFLElBQUlILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUM3QkosT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXJDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQzVDO0VBRUFtQyxPQUFPLENBQUM1QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVrQyxPQUFPLENBQUM7RUFDMUNOLE9BQU8sQ0FBQzVCLGdCQUFnQixDQUFDLE1BQU0sRUFBRW1DLE1BQU0sQ0FBQzs7RUFFeEM7RUFDQVAsT0FBTyxDQUFDNUIsZ0JBQWdCLENBQUMsVUFBVSxFQUFFbUMsTUFBTSxDQUFDO0FBQ2hEO0FBRUEsU0FBU0QsT0FBT0EsQ0FBQ0UsRUFBRSxFQUFFO0VBQ2pCLElBQU1DLE1BQU0sR0FBR0QsRUFBRSxDQUFDNUIsTUFBTSxDQUFDc0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJTSxFQUFFLENBQUM1QixNQUFNLENBQUN1QixhQUFhO0VBRW5FLElBQUlNLE1BQU0sSUFBSUEsTUFBTSxDQUFDN0MsU0FBUyxFQUFFO0lBQzVCNkMsTUFBTSxDQUFDN0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDMUM7QUFDSjtBQUVBLFNBQVMwQyxNQUFNQSxDQUFDQyxFQUFFLEVBQUU7RUFDaEIsSUFBTUUsS0FBSyxHQUFHRixFQUFFLENBQUM1QixNQUFNO0VBQ3ZCLElBQU1xQixPQUFPLEdBQUdTLEtBQUssQ0FBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJUSxLQUFLLENBQUNQLGFBQWE7RUFFNUQsSUFBSU8sS0FBSyxDQUFDTixLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzNCSixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFckMsU0FBUyxDQUFDTSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7RUFDbEUsQ0FBQyxNQUFNO0lBQ0grQixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDNUM7QUFDSjtBQUVBLFNBQVM4QyxjQUFjQSxDQUFDSCxFQUFFLEVBQUU7RUFDeEIsSUFBTUUsS0FBSyxHQUFHRixFQUFFLENBQUM1QixNQUFNO0VBQ3ZCLElBQU1xQixPQUFPLEdBQUdTLEtBQUssQ0FBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJUSxLQUFLLENBQUNQLGFBQWE7RUFFNUQsSUFBSSxDQUFDTyxLQUFLLENBQUNFLGFBQWEsQ0FBQyxDQUFDLEVBQUU7SUFDeEJYLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVyQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUM3QyxDQUFDLE1BQU07SUFDSG9DLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVyQyxTQUFTLENBQUNNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUNoRDtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU0yQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLElBQU1DLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTdCLFNBQVNDLGlCQUFpQkEsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtFQUNyREwsVUFBVSxDQUFDRyxPQUFPLENBQUMsR0FBRztJQUFFQyxPQUFPLEVBQVBBLE9BQU87SUFBRUMsVUFBVSxFQUFWQTtFQUFXLENBQUM7QUFDakQ7QUFFQSxTQUFTQyxZQUFZQSxDQUFDSCxPQUFPLEVBQUU7RUFDM0IsSUFBTUksTUFBTSxHQUFHUCxVQUFVLENBQUNHLE9BQU8sQ0FBQztFQUNsQyxJQUFJLENBQUNJLE1BQU0sRUFBRSxPQUFPLElBQUk7RUFFeEIsSUFBTVYsS0FBSyxHQUFHOUQsUUFBUSxDQUFDeUUsY0FBYyxDQUFDTCxPQUFPLENBQUM7RUFDOUMsSUFBTU0sUUFBUSxHQUFHMUUsUUFBUSxDQUFDeUUsY0FBYyxDQUFDRCxNQUFNLENBQUNILE9BQU8sQ0FBQztFQUV4RCxJQUFJLENBQUNQLEtBQUssSUFBSSxDQUFDWSxRQUFRLEVBQUUsT0FBTyxJQUFJO0VBRXBDLElBQU1yQixPQUFPLEdBQUdTLEtBQUssQ0FBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJUSxLQUFLLENBQUNQLGFBQWE7RUFFNURtQixRQUFRLENBQUM3RCxLQUFLLENBQUM4RCxVQUFVLEdBQUcsUUFBUTtFQUNwQ0QsUUFBUSxDQUFDRSxXQUFXLEdBQUcsTUFBUTtFQUMvQnZCLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVyQyxTQUFTLENBQUNNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUU1QyxJQUFNdUQsTUFBTSxHQUFHTCxNQUFNLENBQUNGLFVBQVUsQ0FBQ1IsS0FBSyxDQUFDTixLQUFLLEVBQUVNLEtBQUssQ0FBQztFQUVwRCxJQUFJZSxNQUFNLEtBQUssSUFBSSxFQUFFO0lBQ2pCSCxRQUFRLENBQUNFLFdBQVcsR0FBR0MsTUFBTTtJQUM3QkgsUUFBUSxDQUFDN0QsS0FBSyxDQUFDOEQsVUFBVSxHQUFHLFNBQVM7SUFDckN0QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDekMsT0FBTyxLQUFLO0VBQ2hCO0VBRUEsT0FBTyxJQUFJO0FBQ2Y7QUFFQSxTQUFTNkQsZUFBZUEsQ0FBQ1YsT0FBTyxFQUFrRDtFQUFBLElBQWhEVyxVQUFVLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUFBLElBQUVHLE9BQU8sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSTtFQUM1RSxJQUFNbEIsS0FBSyxHQUFHOUQsUUFBUSxDQUFDeUUsY0FBYyxDQUFDTCxPQUFPLENBQUM7RUFDOUMsSUFBSSxDQUFDTixLQUFLLEVBQUU7RUFFWmlCLFVBQVUsQ0FBQzdFLE9BQU8sQ0FBQyxVQUFBa0YsU0FBUyxFQUFJO0lBQzVCLElBQUlBLFNBQVMsS0FBSyxPQUFPLEVBQUU7TUFDdkI7TUFDQXRCLEtBQUssQ0FBQ3RDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2xDLElBQUkwQyxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7VUFDM0J4RCxZQUFZLENBQUNzRCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7UUFDM0M7UUFFQUYsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxHQUFHMUMsVUFBVSxDQUFDLFlBQU07VUFDekM2QyxZQUFZLENBQUNILE9BQU8sQ0FBQztRQUN6QixDQUFDLEVBQUVlLE9BQU8sQ0FBQztNQUNmLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTSxJQUFJQyxTQUFTLEtBQUssUUFBUSxFQUFFO01BQy9CO01BQ0F0QixLQUFLLENBQUN0QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtRQUNuQyxJQUFJMEMsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxFQUFFO1VBQzNCeEQsWUFBWSxDQUFDc0QsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1VBQ3ZDLE9BQU9GLGdCQUFnQixDQUFDRSxPQUFPLENBQUM7UUFDcEM7UUFDQUcsWUFBWSxDQUFDSCxPQUFPLENBQUM7TUFDekIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNLElBQUlnQixTQUFTLEtBQUssTUFBTSxFQUFFO01BQzdCO01BQ0F0QixLQUFLLENBQUN0QyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBTTtRQUNqQyxJQUFJMEMsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxFQUFFO1VBQzNCeEQsWUFBWSxDQUFDc0QsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1VBQ3ZDLE9BQU9GLGdCQUFnQixDQUFDRSxPQUFPLENBQUM7UUFDcEM7UUFDQUcsWUFBWSxDQUFDSCxPQUFPLENBQUM7TUFDekIsQ0FBQyxDQUFDOztNQUVGO01BQ0FOLEtBQUssQ0FBQ3RDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFNO1FBQ3JDLElBQUkwQyxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7VUFDM0J4RCxZQUFZLENBQUNzRCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7VUFDdkMsT0FBT0YsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQztRQUNwQztRQUNBO1FBQ0ExQyxVQUFVLENBQUM7VUFBQSxPQUFNNkMsWUFBWSxDQUFDSCxPQUFPLENBQUM7UUFBQSxHQUFFLEdBQUcsQ0FBQztNQUNoRCxDQUFDLENBQUM7SUFDTixDQUFDLE1BQU0sSUFBSWdCLFNBQVMsS0FBSyxPQUFPLEVBQUU7TUFDOUI7TUFDQXRCLEtBQUssQ0FBQ3RDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2xDLElBQUkwQyxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7VUFDM0J4RCxZQUFZLENBQUNzRCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7VUFDdkMsT0FBT0YsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQztRQUNwQztRQUNBRyxZQUFZLENBQUNILE9BQU8sQ0FBQztNQUN6QixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTaUIsYUFBYUEsQ0FBQ2pCLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0VBQ3JDRixpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUUsVUFBQ2IsS0FBSyxFQUFFTSxLQUFLLEVBQUs7SUFDbEQsSUFBTXdCLENBQUMsR0FBRzlCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBSTZCLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxvQ0FBb0M7SUFDekQsSUFBSSxDQUFDeEIsS0FBSyxDQUFDRSxhQUFhLENBQUMsQ0FBQyxFQUFFLE9BQU8seUJBQXlCO0lBQzVELE9BQU8sSUFBSTtFQUNmLENBQUMsQ0FBQztBQUNOO0FBRUEsSUFBTXVCLFdBQVcsR0FBRyxDQUNoQjtFQUFFbkIsT0FBTyxFQUFFLGVBQWU7RUFBRUMsT0FBTyxFQUFFO0FBQWMsQ0FBQyxFQUNwRDtFQUFFRCxPQUFPLEVBQUUsWUFBWTtFQUFFQyxPQUFPLEVBQUU7QUFBbUIsQ0FBQyxFQUN0RDtFQUFFRCxPQUFPLEVBQUUsVUFBVTtFQUFFQyxPQUFPLEVBQUU7QUFBaUIsQ0FBQyxFQUNsRDtFQUFFRCxPQUFPLEVBQUUsb0NBQW9DO0VBQUVDLE9BQU8sRUFBRTtBQUFxQixDQUFDLENBQ25GO0FBRURrQixXQUFXLENBQUNyRixPQUFPLENBQUMsVUFBQXNGLENBQUM7RUFBQSxPQUFJSCxhQUFhLENBQUNHLENBQUMsQ0FBQ3BCLE9BQU8sRUFBRW9CLENBQUMsQ0FBQ25CLE9BQU8sQ0FBQztBQUFBLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQSxTQUFTb0IsY0FBY0EsQ0FBQ3JCLE9BQU8sRUFBRUMsT0FBTyxFQUFpQjtFQUFBLElBQWZxQixTQUFTLEdBQUFWLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7RUFDbkRiLGlCQUFpQixDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxVQUFDYixLQUFLLEVBQUs7SUFDM0MsSUFBTThCLENBQUMsR0FBRzlCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBSTZCLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTywrQkFBK0I7SUFDcEQsSUFBSUEsQ0FBQyxDQUFDTCxNQUFNLEdBQUdTLFNBQVMsRUFBRSwyQ0FBQUMsTUFBQSxDQUEyQ0QsU0FBUztJQUM5RSxPQUFPLElBQUk7RUFDZixDQUFDLENBQUM7QUFDTjtBQUVBLElBQU1FLFlBQVksR0FBRyxDQUNqQjtFQUFFeEIsT0FBTyxFQUFFLGNBQWM7RUFBRUMsT0FBTyxFQUFFLGNBQWM7RUFBRXFCLFNBQVMsRUFBRTtBQUFFLENBQUMsRUFDbEU7RUFBRXRCLE9BQU8sRUFBRSxhQUFhO0VBQUVDLE9BQU8sRUFBRSxtQkFBbUI7RUFBRXFCLFNBQVMsRUFBRTtBQUFFLENBQUMsQ0FDekU7QUFFREUsWUFBWSxDQUFDMUYsT0FBTyxDQUFDLFVBQUFzRixDQUFDO0VBQUEsT0FBSUMsY0FBYyxDQUFDRCxDQUFDLENBQUNwQixPQUFPLEVBQUVvQixDQUFDLENBQUNuQixPQUFPLEVBQUVtQixDQUFDLENBQUNFLFNBQVMsQ0FBQztBQUFBLEVBQUM7O0FBRTVFO0FBQ0E7QUFDQTs7QUFFQXZCLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLDJCQUEyQixFQUFFLFVBQUNYLEtBQUssRUFBSztFQUNsRixJQUFNOEIsQ0FBQyxHQUFHOUIsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJNkIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLGtDQUFrQztFQUN2RCxJQUFJQSxDQUFDLENBQUNMLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTywrQkFBK0I7RUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDUCxDQUFDLENBQUMsRUFBRSxPQUFPLDRCQUE0QjtFQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDTyxJQUFJLENBQUNQLENBQUMsQ0FBQyxFQUFFLE9BQU8sd0JBQXdCO0VBQ2xELElBQUksQ0FBQyxPQUFPLENBQUNPLElBQUksQ0FBQ1AsQ0FBQyxDQUFDLEVBQUUsT0FBTyxrQ0FBa0M7RUFDL0QsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDO0FBRUZuQixpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSxVQUFDWCxLQUFLLEVBQUs7RUFDcEYsSUFBTXNDLEtBQUssR0FBRzlGLFFBQVEsQ0FBQ3lFLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQztFQUNqRSxJQUFJLENBQUNxQixLQUFLLEVBQUUsT0FBTyxJQUFJO0VBRXZCLElBQUl0QyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sd0NBQXdDO0VBQ3hFLElBQUlELEtBQUssS0FBS3NDLEtBQUssQ0FBQ3RDLEtBQUssRUFBRSxPQUFPLHlDQUF5QztFQUMzRSxPQUFPLElBQUk7QUFDZixDQUFDLENBQUM7QUFFRlcsaUJBQWlCLENBQUMseUNBQXlDLEVBQUUsK0NBQStDLEVBQUUsVUFBQ1gsS0FBSyxFQUFLO0VBQ3JILElBQU04QixDQUFDLEdBQUc5QixLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ3RCLElBQUk2QixDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sa0NBQWtDO0VBQ3ZELElBQUlBLENBQUMsQ0FBQ0wsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPLCtCQUErQjtFQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDWSxJQUFJLENBQUNQLENBQUMsQ0FBQyxFQUFFLE9BQU8sNEJBQTRCO0VBQ3pELElBQUksQ0FBQyxJQUFJLENBQUNPLElBQUksQ0FBQ1AsQ0FBQyxDQUFDLEVBQUUsT0FBTyx3QkFBd0I7RUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQ08sSUFBSSxDQUFDUCxDQUFDLENBQUMsRUFBRSxPQUFPLGtDQUFrQztFQUMvRCxPQUFPLElBQUk7QUFDZixDQUFDLENBQUM7QUFFRm5CLGlCQUFpQixDQUFDLDBDQUEwQyxFQUFFLGdEQUFnRCxFQUFFLFVBQUNYLEtBQUssRUFBSztFQUN2SCxJQUFNc0MsS0FBSyxHQUFHOUYsUUFBUSxDQUFDeUUsY0FBYyxDQUFDLHlDQUF5QyxDQUFDO0VBQ2hGLElBQUksQ0FBQ3FCLEtBQUssRUFBRSxPQUFPLElBQUk7RUFFdkIsSUFBSXRDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyx3Q0FBd0M7RUFDeEUsSUFBSUQsS0FBSyxLQUFLc0MsS0FBSyxDQUFDdEMsS0FBSyxFQUFFLE9BQU8seUNBQXlDO0VBQzNFLE9BQU8sSUFBSTtBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBVyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsVUFBQ1gsS0FBSyxFQUFLO0VBQ3ZELElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxxQ0FBcUM7RUFDckUsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FVLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLFVBQUNYLEtBQUssRUFBSztFQUNyRSxJQUFJQSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sa0NBQWtDO0VBQ2xFLE9BQU8sSUFBSTtBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7O0FBRUFVLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxVQUFDWCxLQUFLLEVBQUs7RUFDOUQsSUFBSSxDQUFDQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxpQ0FBaUM7RUFDM0UsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDO0FBRUZVLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFVBQUNYLEtBQUssRUFBSztFQUMvRCxJQUFNOEIsQ0FBQyxHQUFHOUIsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJNkIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLDZCQUE2QjtFQUNsRCxJQUFJQSxDQUFDLENBQUNMLE1BQU0sR0FBRyxFQUFFLEVBQUUsT0FBTyxrREFBa0Q7RUFDNUUsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FkLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxVQUFDWCxLQUFLLEVBQUVNLEtBQUssRUFBSztFQUNwRSxJQUFNaUMsSUFBSSxHQUFHakMsS0FBSyxDQUFDa0MsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUMzQixJQUFJLENBQUNELElBQUksRUFBRSxPQUFPLElBQUk7RUFFdEIsSUFBTUUsT0FBTyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO0VBQ3RFLElBQU1DLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUk7RUFFM0IsSUFBSSxDQUFDRCxPQUFPLENBQUNFLFFBQVEsQ0FBQ0osSUFBSSxDQUFDSyxJQUFJLENBQUMsRUFBRSxPQUFPLDJDQUEyQztFQUNwRixJQUFJTCxJQUFJLENBQUNNLElBQUksR0FBR0gsR0FBRyxFQUFFLE9BQU8sb0NBQW9DO0VBRWhFLE9BQU8sSUFBSTtBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxTQUFTSSxRQUFRQSxDQUFDMUMsRUFBRSxFQUFFO0VBQ2xCLElBQUkyQyxRQUFRLEdBQUcsS0FBSzs7RUFFcEI7RUFDQUMsTUFBTSxDQUFDQyxJQUFJLENBQUN2QyxnQkFBZ0IsQ0FBQyxDQUFDaEUsT0FBTyxDQUFDLFVBQUFrRSxPQUFPLEVBQUk7SUFDN0N4RCxZQUFZLENBQUNzRCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDdkMsT0FBT0YsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQztFQUNwQyxDQUFDLENBQUM7O0VBRUY7RUFDQW9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDeEMsVUFBVSxDQUFDLENBQUMvRCxPQUFPLENBQUMsVUFBQ2tFLE9BQU8sRUFBSztJQUN6QyxJQUFJLENBQUNHLFlBQVksQ0FBQ0gsT0FBTyxDQUFDLEVBQUU7TUFDeEJtQyxRQUFRLEdBQUcsSUFBSTtJQUNuQjtFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQU1yRCxJQUFJLEdBQUdVLEVBQUUsQ0FBQzVCLE1BQU07RUFDdEIsSUFBTWlCLE1BQU0sR0FBR0MsSUFBSSxDQUFDakQsZ0JBQWdCLENBQUMrQyxRQUFRLENBQUM7RUFFOUNDLE1BQU0sQ0FBQy9DLE9BQU8sQ0FBQyxVQUFDNEQsS0FBSyxFQUFLO0lBQ3RCO0lBQ0EsSUFBSUcsVUFBVSxDQUFDSCxLQUFLLENBQUM0QyxFQUFFLENBQUMsRUFBRTtJQUUxQixJQUFNckQsT0FBTyxHQUFHUyxLQUFLLENBQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSVEsS0FBSyxDQUFDUCxhQUFhO0lBRTVELElBQUksQ0FBQ08sS0FBSyxDQUFDRSxhQUFhLENBQUMsQ0FBQyxFQUFFO01BQ3hCWCxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7TUFDekNzRixRQUFRLEdBQUcsSUFBSTtJQUNuQixDQUFDLE1BQU07TUFDSGxELE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVyQyxTQUFTLENBQUNNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRDtFQUNKLENBQUMsQ0FBQztFQUVGLElBQUlpRixRQUFRLEVBQUU7SUFDVjNDLEVBQUUsQ0FBQ2hDLGNBQWMsQ0FBQyxDQUFDO0VBQ3ZCO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E1QixRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU0wQixJQUFJLEdBQUdsRCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDaEQsSUFBTW1HLFNBQVMsR0FBRzNHLFFBQVEsQ0FBQ3lFLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDdkQsSUFBTXhCLE1BQU0sR0FBR2pELFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMrQyxRQUFRLENBQUM7O0VBRWxEO0VBQ0FDLE1BQU0sQ0FBQy9DLE9BQU8sQ0FBQyxVQUFDNEQsS0FBSyxFQUFLO0lBQ3RCWCxTQUFTLENBQUNXLEtBQUssQ0FBQztJQUVoQixJQUFJQSxLQUFLLENBQUM4QyxPQUFPLEtBQUssUUFBUSxJQUFJOUMsS0FBSyxDQUFDTixLQUFLLEVBQUU7TUFDM0MsSUFBTUgsT0FBTyxHQUFHUyxLQUFLLENBQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSVEsS0FBSyxDQUFDUCxhQUFhO01BQzVERixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDNUM7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQTZELGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ3hEQSxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUN6REEsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUM3REEsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUMzREEsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztFQUVuRDtFQUNBQSxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUN2REEsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDdERBLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDcEVBLGVBQWUsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7O0VBRXJFO0VBQ0FBLGVBQWUsQ0FBQyx5Q0FBeUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDbkZBLGVBQWUsQ0FBQywwQ0FBMEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7O0VBRXBGO0VBQ0FBLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ3BEQSxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQzs7RUFFcEQ7RUFDQUEsZUFBZSxDQUFDLG9DQUFvQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUM5RUEsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQzs7RUFFM0Q7RUFDQSxJQUFJNUIsSUFBSSxFQUFFO0lBQ05BLElBQUksQ0FBQzFCLGdCQUFnQixDQUFDLFFBQVEsRUFBRThFLFFBQVEsQ0FBQztFQUM3Qzs7RUFFQTtFQUNBLElBQUlLLFNBQVMsRUFBRTtJQUNYQSxTQUFTLENBQUNuRixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU4RSxRQUFRLENBQUM7RUFDbEQ7QUFDSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUNuWEZ0RyxRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBRXRELElBQU1xRixHQUFHLEdBQUc3RyxRQUFRLENBQUN5RSxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDckQsSUFBTXFDLE1BQU0sR0FBRzlHLFFBQVEsQ0FBQ3lFLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN4RCxJQUFNc0MsTUFBTSxHQUFHL0csUUFBUSxDQUFDeUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0VBQ3hELElBQU11QyxnQkFBZ0IsR0FBR2hILFFBQVEsQ0FBQ3lFLGNBQWMsQ0FBQyxjQUFjLENBQUM7O0VBRWhFO0VBQ0EsSUFBSSxDQUFDb0MsR0FBRyxJQUFJLENBQUNDLE1BQU0sSUFBSSxDQUFDQyxNQUFNLEVBQUU7SUFDNUJwSCxPQUFPLENBQUNzSCxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDM0M7RUFDSjtFQUVBLElBQU1DLE9BQU8sR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7O0VBRXREO0VBQ0EsSUFBSSxDQUFDRixPQUFPLEVBQUU7SUFDVnhGLFVBQVUsQ0FBQyxZQUFNO01BQ2JtRixHQUFHLENBQUM3RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNYLENBQUMsTUFBTSxJQUFJaUcsT0FBTyxLQUFLLFNBQVMsRUFBRTtJQUM5QkwsR0FBRyxDQUFDN0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ2xDOztFQUVBO0VBQ0EsSUFBSWlHLE9BQU8sS0FBSyxVQUFVLElBQUlGLGdCQUFnQixFQUFFO0lBQzVDQSxnQkFBZ0IsQ0FBQ0ssUUFBUSxHQUFHLElBQUk7RUFDcEM7O0VBRUE7RUFDQVAsTUFBTSxDQUFDdEYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMyRixZQUFZLENBQUNHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUM7SUFDbERULEdBQUcsQ0FBQzdGLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QnVGLEdBQUcsQ0FBQzdGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMzQixJQUFJK0YsZ0JBQWdCLEVBQUVBLGdCQUFnQixDQUFDSyxRQUFRLEdBQUcsS0FBSztFQUMzRCxDQUFDLENBQUM7O0VBRUY7RUFDQU4sTUFBTSxDQUFDdkYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMyRixZQUFZLENBQUNHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7SUFDakRULEdBQUcsQ0FBQzdGLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QnVGLEdBQUcsQ0FBQzdGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUU5QixJQUFJK0YsZ0JBQWdCLEVBQUU7TUFDbEJBLGdCQUFnQixDQUFDTyxPQUFPLEdBQUcsS0FBSztNQUNoQ1AsZ0JBQWdCLENBQUNLLFFBQVEsR0FBRyxJQUFJO0lBQ3BDO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTUcsV0FBVyxHQUFHeEgsUUFBUSxDQUFDeUUsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0VBQ2hFLElBQUkrQyxXQUFXLEVBQUU7SUFDYkEsV0FBVyxDQUFDaEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNpRyxDQUFDLEVBQUs7TUFDekNBLENBQUMsQ0FBQzdGLGNBQWMsQ0FBQyxDQUFDO01BQ2xCNkYsQ0FBQyxDQUFDNUYsZUFBZSxDQUFDLENBQUM7TUFDbkJnRixHQUFHLENBQUM3RixTQUFTLENBQUNNLE1BQU0sQ0FBQyxXQUFXLENBQUM7TUFDakN1RixHQUFHLENBQUM3RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQSxJQUFJK0YsZ0JBQWdCLEVBQUU7SUFDbEIsSUFBTVUsYUFBYSxHQUFHMUgsUUFBUSxDQUFDUSxhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDekUsSUFBTW1ILFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJRixDQUFDLEVBQUs7TUFDeEIsSUFBTUcsY0FBYyxHQUFHVCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztNQUU3RCxJQUFJUSxjQUFjLEtBQUssU0FBUyxFQUFFO1FBQzlCSCxDQUFDLENBQUM3RixjQUFjLENBQUMsQ0FBQztRQUNsQjZGLENBQUMsQ0FBQzVGLGVBQWUsQ0FBQyxDQUFDO1FBQ25CbUYsZ0JBQWdCLENBQUNPLE9BQU8sR0FBRyxLQUFLO1FBQ2hDVixHQUFHLENBQUM3RixTQUFTLENBQUNNLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDakN1RixHQUFHLENBQUM3RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDekIsT0FBTyxLQUFLO01BQ2hCO0lBQ0osQ0FBQztJQUVEK0YsZ0JBQWdCLENBQUN4RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVtRyxZQUFZLENBQUM7SUFDeEQsSUFBSUQsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQ2xHLGdCQUFnQixDQUFDLE9BQU8sRUFBRW1HLFlBQVksQ0FBQztJQUN6RDtFQUNKO0FBRUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xGRjNILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBMkgsTUFBTSxFQUFJO0VBQ3REQSxNQUFNLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNc0MsS0FBSyxHQUFHK0QsTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSWhFLEtBQUssSUFBSUEsS0FBSyxDQUFDekQsT0FBTyxDQUFDMEgsUUFBUSxLQUFLN0MsU0FBUyxFQUFFO01BQy9DcEIsS0FBSyxDQUFDTixLQUFLLEdBQUdNLEtBQUssQ0FBQ3pELE9BQU8sQ0FBQzBILFFBQVE7TUFDcENqRSxLQUFLLENBQUNrRSxhQUFhLENBQUMsSUFBSUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZW1lbWJlcl9tZS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICdodG14Lm9yZyc7XHJcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVEcm9wZG93biwgMTUwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZURyb3Bkb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hOYXZiYXJEcm9wZG93bigpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1uYXZiYXJcIik7XHJcblxyXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lvbkVscyA9IFt0b2dnbGUsIG5hdmJhckNvbnRhaW5lciwgZHJvcGRvd25Db250ZW50XTtcclxuXHJcbiAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgbGV0IGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGlzSW5SZWdpb24gPSAoZWwpID0+XHJcbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGlzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVhbGx5SGlkZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcclxuICAgICAgICBpZiAodG8gJiYgaXNJblJlZ2lvbih0bykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0FsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93QWxsKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlTmF2YmFyLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIubGFuZ3VhZ2UtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbn0pOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFZBTElEQVRJT04gR8OJTsOJUklRVUUgREVTIEZPUk1VTEFJUkVTXHJcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcclxuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cclxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3lzdMOobWUgZGUgdmFsaWRhdGlvbiBnw6luw6lyaXF1ZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xyXG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcclxuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICdcXHUwMEEwJztcclxuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBFTUFJTFMgKGfDqW7DqXJpcXVlcyBwb3VyIHRvdXQgbGUgc2l0ZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoaW5wdXRJZCwgZXJyb3JJZCkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IHNhaXNpciB1bmUgYWRyZXNzZSBlbWFpbC5cIjtcclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIFwiQWRyZXNzZSBlbWFpbCBpbnZhbGlkZS5cIjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBlbWFpbEZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X2VtYWlsXCIsIGVycm9ySWQ6IFwiZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfZW1haWxcIiwgZXJyb3JJZDogXCJ1c2VyX2VtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VybmFtZVwiLCBlcnJvcklkOiBcInVzZXJuYW1lLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsXCIsIGVycm9ySWQ6IFwiZm9yZ290X2VtYWlsLWVycm9yXCIgfVxyXG5dO1xyXG5cclxuZW1haWxGaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyRW1haWwoZi5pbnB1dElkLCBmLmVycm9ySWQpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFBTRVVET1MgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyUHNldWRvKGlucHV0SWQsIGVycm9ySWQsIG1pbkxlbmd0aCA9IDMpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB2b3RyZSBwc2V1ZG8uXCI7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gYExlIHBzZXVkbyBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zICR7bWluTGVuZ3RofSBjYXJhY3TDqHJlcy5gO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBzZXVkb0ZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X25hbWVcIiwgZXJyb3JJZDogXCJwc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuXTtcclxuXHJcbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gXCJBdSBtb2lucyA4IGNhcmFjdMOocmVzIHJlcXVpcy5cIjtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gXCJVbmUgbWFqdXNjdWxlIGVzdCByZXF1aXNlLlwiO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gXCJVbiBjaGlmZnJlIGVzdCByZXF1aXMuXCI7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiBcIlVuIGNhcmFjdMOocmUgc3DDqWNpYWwgZXN0IHJlcXVpcy5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInVzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGNvbmZpcm1lciB2b3RyZSBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gXCJMZXMgbW90cyBkZSBwYXNzZSBuZSBjb3JyZXNwb25kZW50IHBhcy5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbW90IGRlIHBhc3NlLlwiO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIFwiQXUgbW9pbnMgOCBjYXJhY3TDqHJlcyByZXF1aXMuXCI7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIFwiVW5lIG1hanVzY3VsZSBlc3QgcmVxdWlzZS5cIjtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIFwiVW4gY2hpZmZyZSBlc3QgcmVxdWlzLlwiO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gXCJVbiBjYXJhY3TDqHJlIHNww6ljaWFsIGVzdCByZXF1aXMuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGNvbmZpcm1lciB2b3RyZSBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gXCJMZXMgbW90cyBkZSBwYXNzZSBuZSBjb3JyZXNwb25kZW50IHBhcy5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb25cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxyXG5yZWdpc3RlclZhbGlkYXRvcihcImZvcmdvdF9wYXNzd29yZFwiLCBcImZvcmdvdF9wYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtb3QgZGUgcGFzc2UuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBTVVBQT1JUIFNVUFBMw4lNRU5UQUlSRVMg4oaSIGNhdGVnb3J5IC8gbWVzc2FnZSAvIGltYWdlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfY2F0ZWdvcnlcIiwgXCJzZWxlY3RlLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGNob2lzaXIgdW5lIGNhdMOpZ29yaWUuXCI7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfbWVzc2FnZVwiLCBcInRleHQtYXJlYS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1lc3NhZ2UuXCI7XHJcbiAgICBpZiAodi5sZW5ndGggPCAxMCkgcmV0dXJuIFwiTGUgbWVzc2FnZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDEwIGNhcmFjdMOocmVzLlwiO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gVkFMSURBVElPTiBERSBM4oCZSU1BR0UgKHN1cHBvcnQpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuICAgIGNvbnN0IG1heCA9IDIgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIFwiRm9ybWF0cyBhdXRvcmlzw6lzIDogSlBFRywgSlBHLCBQTkcsIFdFQlAuXCI7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSByZXR1cm4gXCJJbWFnZSB0cm9wIHZvbHVtaW5ldXNlIChtYXggMiBNbykuXCI7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRJQUxJU0FUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHJlc2V0IHBhc3N3b3JkXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xyXG4gICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmdXNlLWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHF1ZSBsZXMgw6lsw6ltZW50cyBleGlzdGVudFxyXG4gICAgaWYgKCFib3ggfHwgIWFjY2VwdCB8fCAhcmVmdXNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiw4lsw6ltZW50cyBjb29raWUgbm9uIHRyb3V2w6lzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAvLyBBRkZJQ0hBR0UgSU5JVElBTFxyXG4gICAgaWYgKCFjb25zZW50KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgfSBlbHNlIGlmIChjb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIETDiVNBQ1RJVkVSIFJFTUVNQkVSIE1FIFNJIFJFRlVTXHJcbiAgICBpZiAoY29uc2VudCAhPT0gXCJhY2NlcHRlZFwiICYmIHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBQ0NFUFRFUlxyXG4gICAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUkVGVVNFUlxyXG4gICAgcmVmdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcInJlZnVzZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBMRSBCT1VUT04gUsOJRFVJVCDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWV4cGFuZC1idG5cIik7XHJcbiAgICBpZiAoY29sbGFwc2VCdG4pIHtcclxuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgUkVNRU1CRVIgTUUgQVBSw4hTIFVOIFJFRlVTIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgY29uc3QgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIl9yZW1lbWJlcl9tZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJMYWJlbCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJodG14IiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2hIb3ZlckRyb3Bkb3duIiwidG9nZ2xlU2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVhbGx5SGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZURyb3Bkb3duIiwic2V0VGltZW91dCIsInRvZ2dsZURyb3Bkb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXNzaXZlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhdHRhY2hOYXZiYXJEcm9wZG93biIsIm5hdmJhck1lbnUiLCJuYXZiYXJDb250YWluZXIiLCJyZWdpb25FbHMiLCJpc0Nsb3NpbmciLCJpc0luUmVnaW9uIiwiZWwiLCJzb21lIiwibm9kZSIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInRvZ2dsZU5hdmJhciIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJ2YWx1ZSIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJnZXRFbGVtZW50QnlJZCIsImVycm9yQm94IiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJyZWdpc3RlckVtYWlsIiwidiIsImVtYWlsRmllbGRzIiwiZiIsInJlZ2lzdGVyUHNldWRvIiwibWluTGVuZ3RoIiwiY29uY2F0IiwicHNldWRvRmllbGRzIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJ3YXJuIiwiY29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNhYmxlZCIsInNldEl0ZW0iLCJjaGVja2VkIiwiY29sbGFwc2VCdG4iLCJlIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==