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
/* harmony import */ var _scripts_footer_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/footer-dropdown.js */ "./assets/scripts/footer-dropdown.js");
/* harmony import */ var _scripts_footer_dropdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_footer_dropdown_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */



window.htmx = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/scripts/footer-dropdown.js":
/*!*******************************************!*\
  !*** ./assets/scripts/footer-dropdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
function attachHoverDropdown(toggleSelector) {
  var toggles = document.querySelectorAll(toggleSelector);
  toggles.forEach(function (toggle) {
    var targetSelector = toggle.dataset.dropdownTarget;
    if (!targetSelector) return;
    var dropdownContent = document.querySelector(targetSelector);
    if (!dropdownContent) return;
    var showDropdown = function showDropdown() {
      dropdownContent.style.display = "flex";
      dropdownContent.style.animation = "show-content 0.5s ease forwards";
    };
    var hideDropdown = function hideDropdown() {
      dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";
      var _handler = function handler(event) {
        if (event.animationName === "dont-show-content") {
          dropdownContent.style.display = "none";
          dropdownContent.removeEventListener("animationend", _handler);
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);
  });
}

// attachHoverDropdown(".navbar-dropdown-toggle");
attachHoverDropdown(".language-dropdown-toggle");
attachHoverDropdown(".theme-dropdown-toggle");

// const dropdown = document.querySelector(".theme-dropdown-toggle");
// const dropdownContent = document.querySelector(".dropdown-theme-list");
//
// dropdown.addEventListener("mouseover", () => {
//     dropdownContent.style.display = "flex";
//     dropdownContent.style.animation = "show-content 0.5s ease forwards";
// });
//
// dropdown.addEventListener("mouseout", () => {
//     dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";
//
//     dropdownContent.addEventListener("animationend", function handler(element) {
//         if (element.animationName === "dont-show-content") {
//             dropdownContent.style.display = "none";
//         }
//         dropdownContent.removeEventListener("animationend", handler);
//     });
// });

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-75a287"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ1c7QUFDcEI7QUFDbEJBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDBEQUFVLENBQUM7QUFFakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2I3RSxTQUFTQyxtQkFBbUJBLENBQUNDLGNBQWMsRUFBRTtFQUN6QyxJQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNILGNBQWMsQ0FBQztFQUV6REMsT0FBTyxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsTUFBTSxFQUFLO0lBQ3hCLElBQU1DLGNBQWMsR0FBR0QsTUFBTSxDQUFDRSxPQUFPLENBQUNDLGNBQWM7SUFDcEQsSUFBSSxDQUFDRixjQUFjLEVBQUU7SUFFckIsSUFBTUcsZUFBZSxHQUFHUCxRQUFRLENBQUNRLGFBQWEsQ0FBQ0osY0FBYyxDQUFDO0lBQzlELElBQUksQ0FBQ0csZUFBZSxFQUFFO0lBRXRCLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7TUFDdkJGLGVBQWUsQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUN0Q0osZUFBZSxDQUFDRyxLQUFLLENBQUNFLFNBQVMsR0FBRyxpQ0FBaUM7SUFDdkUsQ0FBQztJQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7TUFDdkJOLGVBQWUsQ0FBQ0csS0FBSyxDQUFDRSxTQUFTLEdBQUcsc0NBQXNDO01BRXhFLElBQU1FLFFBQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxLQUFLLEVBQUs7UUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxhQUFhLEtBQUssbUJBQW1CLEVBQUU7VUFDN0NULGVBQWUsQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtVQUN0Q0osZUFBZSxDQUFDVSxtQkFBbUIsQ0FBQyxjQUFjLEVBQUVILFFBQU8sQ0FBQztRQUNoRTtNQUNKLENBQUM7TUFFRFAsZUFBZSxDQUFDVyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUVKLFFBQU8sQ0FBQztJQUM3RCxDQUFDO0lBRURYLE1BQU0sQ0FBQ2UsZ0JBQWdCLENBQUMsWUFBWSxFQUFFVCxZQUFZLENBQUM7SUFDbkROLE1BQU0sQ0FBQ2UsZ0JBQWdCLENBQUMsWUFBWSxFQUFFTCxZQUFZLENBQUM7SUFFbkROLGVBQWUsQ0FBQ1csZ0JBQWdCLENBQUMsWUFBWSxFQUFFVCxZQUFZLENBQUM7SUFDNURGLGVBQWUsQ0FBQ1csZ0JBQWdCLENBQUMsWUFBWSxFQUFFTCxZQUFZLENBQUM7RUFDaEUsQ0FBQyxDQUFDO0FBQ047O0FBRUE7QUFDQWhCLG1CQUFtQixDQUFDLDJCQUEyQixDQUFDO0FBQ2hEQSxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7Ozs7OztBQzFEQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZm9vdGVyLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvZm9vdGVyLWRyb3Bkb3duLmpzJztcclxuaW1wb3J0ICdodG14Lm9yZyc7XHJcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gYXR0YWNoSG92ZXJEcm9wZG93bihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG5hdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XHJcblxyXG5cclxuLy8gY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuLy8gY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10aGVtZS1saXN0XCIpO1xyXG4vL1xyXG4vLyBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuLy8gICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbi8vICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC41cyBlYXNlIGZvcndhcmRzXCI7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4vLyAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC41cyBlYXNlIGZvcndhcmRzXCI7XHJcbi8vXHJcbi8vICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiBoYW5kbGVyKGVsZW1lbnQpIHtcclxuLy8gICAgICAgICBpZiAoZWxlbWVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuLy8gICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkYXRhc2V0IiwiZHJvcGRvd25UYXJnZXQiLCJkcm9wZG93bkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwic2hvd0Ryb3Bkb3duIiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiaGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==