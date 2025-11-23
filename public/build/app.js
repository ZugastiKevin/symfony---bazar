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
/* harmony import */ var _scripts_reset_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/reset-btn */ "./assets/scripts/reset-btn.js");
/* harmony import */ var _scripts_reset_btn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_reset_btn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/dropdown.js */ "./assets/scripts/dropdown.js");
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");


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
    var showDropdown = function showDropdown() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
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
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    var hideDropdown = function hideDropdown() {
      hideTimeout = setTimeout(reallyHideDropdown, 150);
    };
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);
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
  regionEls.forEach(function (el) {
    el.addEventListener("mouseenter", showAll);
    el.addEventListener("mouseleave", onLeaveRegion);
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
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');
function initInput(inputEl) {
  var wrapper = inputEl.closest('span');
  if (inputEl.value.trim() !== '') wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  inputEl.addEventListener('focus', function () {
    return wrapper === null || wrapper === void 0 ? void 0 : wrapper.classList.add('inputs--filled');
  });
  inputEl.addEventListener('blur', onBlur);
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.closest('span');
  if (input.value.trim() === '') {
    wrapper.classList.remove('inputs--filled', 'inputs--invalid');
  } else {
    wrapper.classList.add('inputs--filled');
    if (!input.checkValidity()) wrapper.classList.add('inputs--invalid');
  }
}
function createValidator(_ref) {
  var inputId = _ref.inputId,
    errorId = _ref.errorId,
    validate = _ref.validate;
  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById(inputId);
    var errorBox = document.getElementById(errorId);
    if (!input || !errorBox) return;
    var wrapper = input.closest('span');
    function run() {
      errorBox.style.display = 'none';
      errorBox.textContent = '';
      wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
      var result = validate(input.value, input, errorBox);
      if (result !== true) {
        errorBox.textContent = result;
        errorBox.style.display = 'block';
        wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
        return false;
      }
      return true;
    }
    input.addEventListener('input', run);
    input.addEventListener('blur', run);

    // exposer la fonction globale pour onSubmit
    window["validate_".concat(inputId)] = run;
  });
}
createValidator({
  inputId: 'pseudo',
  errorId: 'pseudo-error',
  validate: function validate(value) {
    if (value.trim() === '') return "Veuillez entrer votre pseudo.";
    if (value.length < 3) return "Le pseudo doit contenir au moins 3 caractères.";
    return true;
  }
});
createValidator({
  inputId: 'email',
  errorId: 'email-error',
  validate: function validate(value, input) {
    if (value.trim() === '') return "Veuillez saisir une adresse email.";
    if (!input.checkValidity()) return "Adresse email invalide.";
    return true;
  }
});
createValidator({
  inputId: 'selecte',
  errorId: 'selecte-error',
  validate: function validate(value) {
    if (value === "" || value === null) return "Veuillez choisir une catégorie.";
    return true;
  }
});
createValidator({
  inputId: 'text-area',
  errorId: 'text-area-error',
  validate: function validate(value) {
    if (value.trim() === '') return "Veuillez entrer un message.";
    if (value.length < 10) return "Le message doit contenir au moins 10 caractères.";
    return true;
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('support_imageFile');
  var errorBox = document.getElementById('image-error');
  if (!input || !errorBox) return;
  var wrapper = input.closest('span');
  var allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  var max = 2 * 1024 * 1024;
  function validateFile() {
    errorBox.style.display = 'none';
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
    var file = input.files[0];
    if (!file) return true;
    if (!allowed.includes(file.type)) {
      errorBox.textContent = "Formats autorisés : JPEG, JPG, PNG, WEBP.";
      errorBox.style.display = 'block';
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
      return false;
    }
    if (file.size > max) {
      errorBox.textContent = "Image trop volumineuse (max 2 Mo).";
      errorBox.style.display = 'block';
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
      return false;
    }
    return true;
  }
  input.addEventListener('change', validateFile);
  window.validate_support_imageFile = validateFile;
});
function onSubmit(ev) {
  var wrappers = ev.target.querySelectorAll('span');
  var hasError = false;

  // Check native HTML validation
  wrappers.forEach(function (wrapper) {
    var input = wrapper.querySelector(selector);
    if (input && !input.checkValidity()) {
      wrapper.classList.add('inputs--invalid');
      hasError = true;
    }
  });

  // Check all custom validators
  for (var key in window) {
    if (key.startsWith("validate_") && typeof window[key] === "function") {
      if (!window[key]()) hasError = true;
    }
  }
  if (hasError) ev.preventDefault();
}
if (form) form.addEventListener('submit', onSubmit);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-6a1350"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsR0FBRyxJQUFJO0lBQ3ZDO0VBQ0o7RUFFQSxJQUFJQSxRQUFRLEVBQUUzQixFQUFFLENBQUM4QixjQUFjLENBQUMsQ0FBQztBQUNyQztBQUVBLElBQUl0QyxJQUFJLEVBQUVBLElBQUksQ0FBQ3BCLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFELFFBQVEsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Sm5ENUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFnRixNQUFNLEVBQUk7RUFDdERBLE1BQU0sQ0FBQzNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DLElBQU02QixLQUFLLEdBQUc4QixNQUFNLENBQUNDLHNCQUFzQjtJQUMzQyxJQUFJL0IsS0FBSyxJQUFJQSxLQUFLLENBQUMvQyxPQUFPLENBQUMrRSxRQUFRLEtBQUtDLFNBQVMsRUFBRTtNQUMvQ2pDLEtBQUssQ0FBQ0osS0FBSyxHQUFHSSxLQUFLLENBQUMvQyxPQUFPLENBQUMrRSxRQUFRO01BQ3BDaEMsS0FBSyxDQUFDa0MsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJ2h0bXgub3JnJztcclxud2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhbGx5SGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVhbGx5SGlkZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcclxuICAgICAgICBpZiAodG8gJiYgaXNJblJlZ2lvbih0bykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93QWxsKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7XHJcbiIsImNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpO1xyXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKSk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKTtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVmFsaWRhdG9yKHsgaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGUgfSkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXJyb3JJZCk7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAgICAgZXJyb3JCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0ZShpbnB1dC52YWx1ZSwgaW5wdXQsIGVycm9yQm94KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgZXJyb3JCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHJ1bik7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHJ1bik7XHJcblxyXG4gICAgICAgIC8vIGV4cG9zZXIgbGEgZm9uY3Rpb24gZ2xvYmFsZSBwb3VyIG9uU3VibWl0XHJcbiAgICAgICAgd2luZG93W2B2YWxpZGF0ZV8ke2lucHV0SWR9YF0gPSBydW47XHJcbiAgICB9KTtcclxufVxyXG5cclxuY3JlYXRlVmFsaWRhdG9yKHtcclxuICAgIGlucHV0SWQ6ICdwc2V1ZG8nLFxyXG4gICAgZXJyb3JJZDogJ3BzZXVkby1lcnJvcicsXHJcbiAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB2b3RyZSBwc2V1ZG8uXCI7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpIHJldHVybiBcIkxlIHBzZXVkbyBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXMuXCI7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY3JlYXRlVmFsaWRhdG9yKHtcclxuICAgIGlucHV0SWQ6ICdlbWFpbCcsXHJcbiAgICBlcnJvcklkOiAnZW1haWwtZXJyb3InLFxyXG4gICAgdmFsaWRhdGU6ICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIFwiVmV1aWxsZXogc2Fpc2lyIHVuZSBhZHJlc3NlIGVtYWlsLlwiO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gXCJBZHJlc3NlIGVtYWlsIGludmFsaWRlLlwiO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNyZWF0ZVZhbGlkYXRvcih7XHJcbiAgICBpbnB1dElkOiAnc2VsZWN0ZScsXHJcbiAgICBlcnJvcklkOiAnc2VsZWN0ZS1lcnJvcicsXHJcbiAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gXCJWZXVpbGxleiBjaG9pc2lyIHVuZSBjYXTDqWdvcmllLlwiO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNyZWF0ZVZhbGlkYXRvcih7XHJcbiAgICBpbnB1dElkOiAndGV4dC1hcmVhJyxcclxuICAgIGVycm9ySWQ6ICd0ZXh0LWFyZWEtZXJyb3InLFxyXG4gICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSByZXR1cm4gXCJWZXVpbGxleiBlbnRyZXIgdW4gbWVzc2FnZS5cIjtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMTApIHJldHVybiBcIkxlIG1lc3NhZ2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy5cIjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VwcG9ydF9pbWFnZUZpbGUnKTtcclxuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWVycm9yJyk7XHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJyk7XHJcbiAgICBjb25zdCBhbGxvd2VkID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL2pwZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvd2VicCddO1xyXG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmlsZSgpIHtcclxuICAgICAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcclxuICAgICAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSBcIkZvcm1hdHMgYXV0b3Jpc8OpcyA6IEpQRUcsIEpQRywgUE5HLCBXRUJQLlwiO1xyXG4gICAgICAgICAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHtcclxuICAgICAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSBcIkltYWdlIHRyb3Agdm9sdW1pbmV1c2UgKG1heCAyIE1vKS5cIjtcclxuICAgICAgICAgICAgZXJyb3JCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB2YWxpZGF0ZUZpbGUpO1xyXG4gICAgd2luZG93LnZhbGlkYXRlX3N1cHBvcnRfaW1hZ2VGaWxlID0gdmFsaWRhdGVGaWxlO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBDaGVjayBuYXRpdmUgSFRNTCB2YWxpZGF0aW9uXHJcbiAgICB3cmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiAhaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBhbGwgY3VzdG9tIHZhbGlkYXRvcnNcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHdpbmRvdykge1xyXG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcInZhbGlkYXRlX1wiKSAmJiB0eXBlb2Ygd2luZG93W2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvd1trZXldKCkpIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5pZiAoZm9ybSkgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZVRpbWVvdXQiLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJjb250YWlucyIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwiY2xvc2VzdCIsInZhbHVlIiwidHJpbSIsIm9uQmx1ciIsImV2IiwiaW5wdXQiLCJ0YXJnZXQiLCJjaGVja1ZhbGlkaXR5IiwiY3JlYXRlVmFsaWRhdG9yIiwiX3JlZiIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGUiLCJnZXRFbGVtZW50QnlJZCIsImVycm9yQm94IiwicnVuIiwidGV4dENvbnRlbnQiLCJyZXN1bHQiLCJjb25jYXQiLCJsZW5ndGgiLCJhbGxvd2VkIiwibWF4IiwidmFsaWRhdGVGaWxlIiwiZmlsZSIsImZpbGVzIiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsInZhbGlkYXRlX3N1cHBvcnRfaW1hZ2VGaWxlIiwib25TdWJtaXQiLCJ3cmFwcGVycyIsImhhc0Vycm9yIiwia2V5Iiwic3RhcnRzV2l0aCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwidW5kZWZpbmVkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==