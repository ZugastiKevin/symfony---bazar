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
/* harmony import */ var _scripts_remember_me__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/remember_me */ "./assets/scripts/remember_me.js");
/* harmony import */ var _scripts_remember_me__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_remember_me__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_reset_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/reset-btn */ "./assets/scripts/reset-btn.js");
/* harmony import */ var _scripts_reset_btn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_reset_btn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/dropdown */ "./assets/scripts/dropdown.js");
/* harmony import */ var _scripts_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown__WEBPACK_IMPORTED_MODULE_6__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUYxSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQTBILE1BQU0sRUFBSTtFQUN0REEsTUFBTSxDQUFDcEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTXNDLEtBQUssR0FBRzhELE1BQU0sQ0FBQ0Msc0JBQXNCO0lBQzNDLElBQUkvRCxLQUFLLElBQUlBLEtBQUssQ0FBQ3pELE9BQU8sQ0FBQ3lILFFBQVEsS0FBSzVDLFNBQVMsRUFBRTtNQUMvQ3BCLEtBQUssQ0FBQ04sS0FBSyxHQUFHTSxLQUFLLENBQUN6RCxPQUFPLENBQUN5SCxRQUFRO01BQ3BDaEUsS0FBSyxDQUFDaUUsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZW1lbWJlcl9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtJztcbmltcG9ydCAnLi9zY3JpcHRzL3JlbWVtYmVyX21lJztcbmltcG9ydCAnLi9zY3JpcHRzL3Jlc2V0LWJ0bic7XG5pbXBvcnQgJy4vc2NyaXB0cy9kcm9wZG93bic7XG5pbXBvcnQgJ2h0bXgub3JnJztcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XG5cbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XG5cbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVhbGx5SGlkZURyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERlc2t0b3AgOiBob3ZlclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcblxuICAgICAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZURyb3Bkb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLWRyb3Bkb3duLXRvZ2dsZVwiKTtcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfbWVudVwiKTtcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcblxuICAgIGlmICghdG9nZ2xlIHx8ICFuYXZiYXJNZW51IHx8ICFuYXZiYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XG4gICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xuXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XG4gICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHJlZ2lvbkVscyA9IFt0b2dnbGUsIG5hdmJhckNvbnRhaW5lciwgZHJvcGRvd25Db250ZW50XTtcblxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XG4gICAgbGV0IGlzQ2xvc2luZyA9IGZhbHNlO1xuICAgIGxldCBpc09wZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IGlzSW5SZWdpb24gPSAoZWwpID0+XG4gICAgICAgIHJlZ2lvbkVscy5zb21lKChub2RlKSA9PiBub2RlICYmIG5vZGUuY29udGFpbnMoZWwpKTtcblxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICBpc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcblxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcblxuICAgICAgICBuYXZiYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVhbGx5SGlkZUFsbCA9ICgpID0+IHtcbiAgICAgICAgaXNDbG9zaW5nID0gdHJ1ZTtcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcblxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcblxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0byA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZUFsbCwgMTUwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93QWxsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRGVza3RvcCA6IGhvdmVyXG4gICAgcmVnaW9uRWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcbiAgICB9KTtcblxuICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXZiYXIpO1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XG59KTsiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcbiAgIENvbXBhdGlibGUgU3VwcG9ydCAvIFVzZXIgLyBMb2dpbiAvIEZvcmdvdFBhc3N3b3JkXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5jb25zdCBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIHNlbGVjdCwgdGV4dGFyZWEnO1xuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICB9XG5cbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcblxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25CbHVyKTtcbn1cblxuZnVuY3Rpb24gb25Gb2N1cyhldikge1xuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsIHZhbGlkYXRlRm4pIHtcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XG59XG5cbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcbiAgICBpZiAoIWNvbmZpZykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVycm9ySWQpO1xuXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcblxuICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG5cbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgLy8gUG91ciAnY2hhbmdlJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIC8vIFBvdXIgJ2JsdXInLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgJ3RvdWNoZW5kJyBwb3VyIG1vYmlsZVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUGV0aXQgZMOpbGFpIHBvdXIgw6l2aXRlciBsZXMgZG91YmxlcyBkw6ljbGVuY2hlbWVudHNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFURVVSUyBFTUFJTFMgKGfDqW7DqXJpcXVlcyBwb3VyIHRvdXQgbGUgc2l0ZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoaW5wdXRJZCwgZXJyb3JJZCkge1xuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSwgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IHNhaXNpciB1bmUgYWRyZXNzZSBlbWFpbC5cIjtcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBcIkFkcmVzc2UgZW1haWwgaW52YWxpZGUuXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5jb25zdCBlbWFpbEZpZWxkcyA9IFtcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxuICAgIHsgaW5wdXRJZDogXCJ1c2VybmFtZVwiLCBlcnJvcklkOiBcInVzZXJuYW1lLWVycm9yXCIgfSxcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cbl07XG5cbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzKSB7XG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdm90cmUgcHNldWRvLlwiO1xuICAgICAgICBpZiAodi5sZW5ndGggPCBtaW5MZW5ndGgpIHJldHVybiBgTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgJHttaW5MZW5ndGh9IGNhcmFjdMOocmVzLmA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcbl07XG5cbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoKSk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1vdCBkZSBwYXNzZS5cIjtcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gXCJBdSBtb2lucyA4IGNhcmFjdMOocmVzIHJlcXVpcy5cIjtcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIFwiVW5lIG1hanVzY3VsZSBlc3QgcmVxdWlzZS5cIjtcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiBcIlVuIGNoaWZmcmUgZXN0IHJlcXVpcy5cIjtcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiBcIlVuIGNhcmFjdMOocmUgc3DDqWNpYWwgZXN0IHJlcXVpcy5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJ1c2VyX3Bhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gXCJMZXMgbW90cyBkZSBwYXNzZSBuZSBjb3JyZXNwb25kZW50IHBhcy5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBNb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIG1vdCBkZSBwYXNzZS5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBNb3QgZGUgcGFzc2UgXCJvdWJsacOpXCIgKG5vdXZlYXUgbW90IGRlIHBhc3NlLCBzaSB0dSBhcyB1biBjaGFtcHMgZMOpZGnDqSlcbnJlZ2lzdGVyVmFsaWRhdG9yKFwiZm9yZ290X3Bhc3N3b3JkXCIsIFwiZm9yZ290X3Bhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtb3QgZGUgcGFzc2UuXCI7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiBcIlZldWlsbGV6IGNob2lzaXIgdW5lIGNhdMOpZ29yaWUuXCI7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHVuIG1lc3NhZ2UuXCI7XG4gICAgaWYgKHYubGVuZ3RoIDwgMTApIHJldHVybiBcIkxlIG1lc3NhZ2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4vLyBWQUxJREFUSU9OIERFIEzigJlJTUFHRSAoc3VwcG9ydClcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xuICAgIGlmICghZmlsZSkgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBhbGxvd2VkID0gW1wiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiLCBcImltYWdlL3BuZ1wiLCBcImltYWdlL3dlYnBcIl07XG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xuXG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHJldHVybiBcIkZvcm1hdHMgYXV0b3Jpc8OpcyA6IEpQRUcsIEpQRywgUE5HLCBXRUJQLlwiO1xuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiBcIkltYWdlIHRyb3Agdm9sdW1pbmV1c2UgKG1heCAyIE1vKS5cIjtcblxuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG5cbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XG4gICAgfSk7XG5cbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSU5JVElBTElTQVRJT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbml0SW5wdXQoaW5wdXQpO1xuXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgc3VwcG9ydFxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCBbJ2NoYW5nZScsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9tZXNzYWdlJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcblxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VybmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xuXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIMOpdmVudHVlbHMgZHUgZm9ybXVsYWlyZSBcIm1vdCBkZSBwYXNzZSBvdWJsacOpXCJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XG5cbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxuICAgIGlmIChmb3JtKSB7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cbiAgICBpZiAobG9naW5Gb3JtKSB7XG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG4gICAgfVxufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XG4gICAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZ1c2UtY29va2llc1wiKTtcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XG5cbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcblxuICAgIC8vIEFGRklDSEFHRSBJTklUSUFMXG4gICAgaWYgKCFjb25zZW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICB9LCA2MDApO1xuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XG4gICAgfVxuXG4gICAgLy8gRMOJU0FDVElWRVIgUkVNRU1CRVIgTUUgU0kgUkVGVVNcbiAgICBpZiAoY29uc2VudCAhPT0gXCJhY2NlcHRlZFwiICYmIHJlbWVtYmVyQ2hlY2tib3gpIHtcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQUNDRVBURVJcbiAgICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gUkVGVVNFUlxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwicmVmdXNlZFwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcblxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBMRSBCT1VUT04gUsOJRFVJVCDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xuICAgIGlmIChjb2xsYXBzZUJ0bikge1xuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBSRU1FTUJFUiBNRSBBUFLDiFMgVU4gUkVGVVMg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxuICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb25zZW50ID09PSBcInJlZnVzZWRcIikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcbiAgICAgICAgICAgIHJlbWVtYmVyTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJodG14IiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2hIb3ZlckRyb3Bkb3duIiwidG9nZ2xlU2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVhbGx5SGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZURyb3Bkb3duIiwic2V0VGltZW91dCIsInRvZ2dsZURyb3Bkb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXNzaXZlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhdHRhY2hOYXZiYXJEcm9wZG93biIsIm5hdmJhck1lbnUiLCJuYXZiYXJDb250YWluZXIiLCJyZWdpb25FbHMiLCJpc0Nsb3NpbmciLCJpc0luUmVnaW9uIiwiZWwiLCJzb21lIiwibm9kZSIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInRvZ2dsZU5hdmJhciIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJ2YWx1ZSIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJnZXRFbGVtZW50QnlJZCIsImVycm9yQm94IiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJyZWdpc3RlckVtYWlsIiwidiIsImVtYWlsRmllbGRzIiwiZiIsInJlZ2lzdGVyUHNldWRvIiwibWluTGVuZ3RoIiwiY29uY2F0IiwicHNldWRvRmllbGRzIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc2FibGVkIiwic2V0SXRlbSIsImNoZWNrZWQiLCJjb2xsYXBzZUJ0biIsImUiLCJyZW1lbWJlckxhYmVsIiwiY2xpY2tIYW5kbGVyIiwiY3VycmVudENvbnNlbnQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9