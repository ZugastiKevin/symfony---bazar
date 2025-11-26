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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsR0FBRyxJQUFJO0lBQ3ZDO0VBQ0o7RUFFQSxJQUFJQSxRQUFRLEVBQUUzQixFQUFFLENBQUM4QixjQUFjLENBQUMsQ0FBQztBQUNyQztBQUVBLElBQUl0QyxJQUFJLEVBQUVBLElBQUksQ0FBQ3BCLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFELFFBQVEsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Sm5ENUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFnRixNQUFNLEVBQUk7RUFDdERBLE1BQU0sQ0FBQzNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DLElBQU02QixLQUFLLEdBQUc4QixNQUFNLENBQUNDLHNCQUFzQjtJQUMzQyxJQUFJL0IsS0FBSyxJQUFJQSxLQUFLLENBQUMvQyxPQUFPLENBQUMrRSxRQUFRLEtBQUtDLFNBQVMsRUFBRTtNQUMvQ2pDLEtBQUssQ0FBQ0osS0FBSyxHQUFHSSxLQUFLLENBQUMvQyxPQUFPLENBQUMrRSxRQUFRO01BQ3BDaEMsS0FBSyxDQUFDa0MsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0nO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZXNldC1idG4nO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCAnaHRteC5vcmcnO1xyXG53aW5kb3cuaHRteCA9IHJlcXVpcmUoJ2h0bXgub3JnJyk7XHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJmdW5jdGlvbiBhdHRhY2hIb3ZlckRyb3Bkb3duKHRvZ2dsZVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVEcm9wZG93biwgMTUwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfbWVudVwiKTtcclxuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xyXG5cclxuICAgIGlmICghdG9nZ2xlIHx8ICFuYXZiYXJNZW51IHx8ICFuYXZiYXJDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZWdpb25FbHMgPSBbdG9nZ2xlLCBuYXZiYXJDb250YWluZXIsIGRyb3Bkb3duQ29udGVudF07XHJcblxyXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgIGxldCBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpc0luUmVnaW9uID0gKGVsKSA9PlxyXG4gICAgICAgIHJlZ2lvbkVscy5zb21lKChub2RlKSA9PiBub2RlICYmIG5vZGUuY29udGFpbnMoZWwpKTtcclxuXHJcbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIudGhlbWUtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG59KTtcclxuIiwiY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJyk7XHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpO1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWYWxpZGF0b3IoeyBpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZSB9KSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlcnJvcklkKTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlKGlucHV0LnZhbHVlLCBpbnB1dCwgZXJyb3JCb3gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcnVuKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgcnVuKTtcclxuXHJcbiAgICAgICAgLy8gZXhwb3NlciBsYSBmb25jdGlvbiBnbG9iYWxlIHBvdXIgb25TdWJtaXRcclxuICAgICAgICB3aW5kb3dbYHZhbGlkYXRlXyR7aW5wdXRJZH1gXSA9IHJ1bjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jcmVhdGVWYWxpZGF0b3Ioe1xyXG4gICAgaW5wdXRJZDogJ3BzZXVkbycsXHJcbiAgICBlcnJvcklkOiAncHNldWRvLWVycm9yJyxcclxuICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuIFwiVmV1aWxsZXogZW50cmVyIHZvdHJlIHBzZXVkby5cIjtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMykgcmV0dXJuIFwiTGUgcHNldWRvIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMyBjYXJhY3TDqHJlcy5cIjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jcmVhdGVWYWxpZGF0b3Ioe1xyXG4gICAgaW5wdXRJZDogJ2VtYWlsJyxcclxuICAgIGVycm9ySWQ6ICdlbWFpbC1lcnJvcicsXHJcbiAgICB2YWxpZGF0ZTogKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSByZXR1cm4gXCJWZXVpbGxleiBzYWlzaXIgdW5lIGFkcmVzc2UgZW1haWwuXCI7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBcIkFkcmVzc2UgZW1haWwgaW52YWxpZGUuXCI7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY3JlYXRlVmFsaWRhdG9yKHtcclxuICAgIGlucHV0SWQ6ICdzZWxlY3RlJyxcclxuICAgIGVycm9ySWQ6ICdzZWxlY3RlLWVycm9yJyxcclxuICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBcIlZldWlsbGV6IGNob2lzaXIgdW5lIGNhdMOpZ29yaWUuXCI7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY3JlYXRlVmFsaWRhdG9yKHtcclxuICAgIGlucHV0SWQ6ICd0ZXh0LWFyZWEnLFxyXG4gICAgZXJyb3JJZDogJ3RleHQtYXJlYS1lcnJvcicsXHJcbiAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiBcIlZldWlsbGV6IGVudHJlciB1biBtZXNzYWdlLlwiO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxMCkgcmV0dXJuIFwiTGUgbWVzc2FnZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDEwIGNhcmFjdMOocmVzLlwiO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXBwb3J0X2ltYWdlRmlsZScpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UtZXJyb3InKTtcclxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvanBnJywgJ2ltYWdlL3BuZycsICdpbWFnZS93ZWJwJ107XHJcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWxlKCkge1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgICAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkge1xyXG4gICAgICAgICAgICBlcnJvckJveC50ZXh0Q29udGVudCA9IFwiRm9ybWF0cyBhdXRvcmlzw6lzIDogSlBFRywgSlBHLCBQTkcsIFdFQlAuXCI7XHJcbiAgICAgICAgICAgIGVycm9yQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IG1heCkge1xyXG4gICAgICAgICAgICBlcnJvckJveC50ZXh0Q29udGVudCA9IFwiSW1hZ2UgdHJvcCB2b2x1bWluZXVzZSAobWF4IDIgTW8pLlwiO1xyXG4gICAgICAgICAgICBlcnJvckJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHZhbGlkYXRlRmlsZSk7XHJcbiAgICB3aW5kb3cudmFsaWRhdGVfc3VwcG9ydF9pbWFnZUZpbGUgPSB2YWxpZGF0ZUZpbGU7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gZXYudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIENoZWNrIG5hdGl2ZSBIVE1MIHZhbGlkYXRpb25cclxuICAgIHdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGlucHV0ICYmICFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoZWNrIGFsbCBjdXN0b20gdmFsaWRhdG9yc1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gd2luZG93KSB7XHJcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwidmFsaWRhdGVfXCIpICYmIHR5cGVvZiB3aW5kb3dba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93W2tleV0oKSkgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmlmIChmb3JtKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiaHRteCIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlVGltZW91dCIsInNob3dEcm9wZG93biIsImNsZWFyVGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJhdHRhY2hOYXZiYXJEcm9wZG93biIsIm5hdmJhck1lbnUiLCJuYXZiYXJDb250YWluZXIiLCJyZWdpb25FbHMiLCJpc0Nsb3NpbmciLCJpc0luUmVnaW9uIiwiZWwiLCJzb21lIiwibm9kZSIsImNvbnRhaW5zIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0Iiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJjbG9zZXN0IiwidmFsdWUiLCJ0cmltIiwib25CbHVyIiwiZXYiLCJpbnB1dCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjcmVhdGVWYWxpZGF0b3IiLCJfcmVmIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZSIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJydW4iLCJ0ZXh0Q29udGVudCIsInJlc3VsdCIsImNvbmNhdCIsImxlbmd0aCIsImFsbG93ZWQiLCJtYXgiLCJ2YWxpZGF0ZUZpbGUiLCJmaWxlIiwiZmlsZXMiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwidmFsaWRhdGVfc3VwcG9ydF9pbWFnZUZpbGUiLCJvblN1Ym1pdCIsIndyYXBwZXJzIiwiaGFzRXJyb3IiLCJrZXkiLCJzdGFydHNXaXRoIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJ1bmRlZmluZWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9