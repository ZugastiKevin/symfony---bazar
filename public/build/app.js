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
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var selector = 'input[type="text"], input[type="number"], input[type=email], input[type=password], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');
function initInput(inputEl) {
  var wrapper = inputEl.closest('span');
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);
}
function onFocus(ev) {
  var parent = ev.target.parentNode;
  if (parent && parent.classList) {
    parent.classList.add('inputs--filled');
  }
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.parentNode;
  if (input.value.trim() === '') {
    wrapper.classList.remove('inputs--filled');
    wrapper.classList.remove('inputs--invalid');
  } else {
    wrapper.classList.add('inputs--filled');
    if (!input.checkValidity()) {
      wrapper.classList.add('inputs--invalid');
    } else {
      wrapper.classList.remove('inputs--invalid');
    }
  }
  input.removeEventListener('input', liveValidation);
  input.addEventListener('input', liveValidation);
}
function liveValidation(ev) {
  var input = ev.target;
  var wrapper = input.parentNode;
  if (!input.checkValidity()) {
    wrapper.classList.add('inputs--invalid');
  } else {
    wrapper.classList.remove('inputs--invalid');
  }
}
if (form) {
  form.addEventListener('submit', onSubmit);
}
function onSubmit(ev) {
  var inputsWrappers = ev.target.querySelectorAll('span');
  var hasError = false;
  inputsWrappers.forEach(function (wrapper) {
    var input = wrapper.querySelector(selector);
    if (input) {
      if (!input.checkValidity()) {
        wrapper.classList.add('inputs--invalid');
        hasError = true;
      } else {
        wrapper.classList.remove('inputs--invalid');
      }
    }
  });
  if (hasError) {
    ev.preventDefault();
  }
}
window.addEventListener('load', function () {
  inputs.forEach(function (input) {
    initInput(input);
    if (input.tagName === 'SELECT' && input.value) {
      var wrapper = input.parentNode;
      wrapper.classList.add('inputs--filled');
    }
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-e6c058"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUYsSUFBSXdDLFFBQVEsRUFBRTtJQUNWVCxFQUFFLENBQUNVLGNBQWMsQ0FBQyxDQUFDO0VBQ3ZCO0FBQ0o7QUFFQXRFLE1BQU0sQ0FBQytCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ2xDbUIsTUFBTSxDQUFDeEMsT0FBTyxDQUFDLFVBQUNzRCxLQUFLLEVBQUs7SUFDdEJaLFNBQVMsQ0FBQ1ksS0FBSyxDQUFDO0lBRWhCLElBQUlBLEtBQUssQ0FBQ08sT0FBTyxLQUFLLFFBQVEsSUFBSVAsS0FBSyxDQUFDUixLQUFLLEVBQUU7TUFDM0MsSUFBTUYsT0FBTyxHQUFHVSxLQUFLLENBQUNELFVBQVU7TUFDaENULE9BQU8sQ0FBQy9CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQzNDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3pGRmhCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBOEQsTUFBTSxFQUFJO0VBQ3REQSxNQUFNLENBQUN6QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNaUMsS0FBSyxHQUFHUSxNQUFNLENBQUNDLHNCQUFzQjtJQUMzQyxJQUFJVCxLQUFLLElBQUlBLEtBQUssQ0FBQ25ELE9BQU8sQ0FBQzZELFFBQVEsS0FBS0MsU0FBUyxFQUFFO01BQy9DWCxLQUFLLENBQUNSLEtBQUssR0FBR1EsS0FBSyxDQUFDbkQsT0FBTyxDQUFDNkQsUUFBUTtNQUNwQ1YsS0FBSyxDQUFDWSxhQUFhLENBQUMsSUFBSUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0nO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZXNldC1idG4nO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCAnaHRteC5vcmcnO1xyXG53aW5kb3cuaHRteCA9IHJlcXVpcmUoJ2h0bXgub3JnJyk7XHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJmdW5jdGlvbiBhdHRhY2hIb3ZlckRyb3Bkb3duKHRvZ2dsZVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVEcm9wZG93biwgMTUwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfbWVudVwiKTtcclxuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xyXG5cclxuICAgIGlmICghdG9nZ2xlIHx8ICFuYXZiYXJNZW51IHx8ICFuYXZiYXJDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZWdpb25FbHMgPSBbdG9nZ2xlLCBuYXZiYXJDb250YWluZXIsIGRyb3Bkb3duQ29udGVudF07XHJcblxyXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgIGxldCBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpc0luUmVnaW9uID0gKGVsKSA9PlxyXG4gICAgICAgIHJlZ2lvbkVscy5zb21lKChub2RlKSA9PiBub2RlICYmIG5vZGUuY29udGFpbnMoZWwpKTtcclxuXHJcbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIudGhlbWUtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG59KTtcclxuIiwiY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpO1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoIGV2ICkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBsaXZlVmFsaWRhdGlvbik7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGxpdmVWYWxpZGF0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oIGV2ICkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChmb3JtKSB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0c1dyYXBwZXJzID0gZXYudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIGlucHV0c1dyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvcikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZVRpbWVvdXQiLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJjb250YWlucyIsInNob3dBbGwiLCJyZWFsbHlIaWRlQWxsIiwib25MZWF2ZVJlZ2lvbiIsInRvIiwicmVsYXRlZFRhcmdldCIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwiY2xvc2VzdCIsInZhbHVlIiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJpbnB1dCIsImNoZWNrVmFsaWRpdHkiLCJsaXZlVmFsaWRhdGlvbiIsIm9uU3VibWl0IiwiaW5wdXRzV3JhcHBlcnMiLCJoYXNFcnJvciIsInByZXZlbnREZWZhdWx0IiwidGFnTmFtZSIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsInVuZGVmaW5lZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=