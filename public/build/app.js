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
/***/ (() => {

var dropdown = document.querySelector(".btn-test-dropdown");
var dropdownContent = document.querySelector(".dropdown-theme-list");
dropdown.addEventListener("mouseover", function () {
  dropdownContent.style.display = "flex";
  dropdownContent.style.animation = "show-content 0.5s ease forwards";
});
dropdown.addEventListener("mouseout", function () {
  dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";
  dropdownContent.addEventListener("animationend", function handler(element) {
    if (element.animationName === "dont-show-content") {
      dropdownContent.style.display = "none";
    }
    dropdownContent.removeEventListener("animationend", handler);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_htmx_org_dist_htmx_e-499ad6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ1c7QUFDcEI7QUFDbEJBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDBEQUFVLENBQUM7QUFFakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7QUNiN0UsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUM3RCxJQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBRXRFRixRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFNO0VBQ3pDRCxlQUFlLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDdENILGVBQWUsQ0FBQ0UsS0FBSyxDQUFDRSxTQUFTLEdBQUcsaUNBQWlDO0FBQ3ZFLENBQUMsQ0FBQztBQUVGUCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFNO0VBQ3hDRCxlQUFlLENBQUNFLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLHNDQUFzQztFQUV4RUosZUFBZSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsU0FBU0ksT0FBT0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZFLElBQUlBLE9BQU8sQ0FBQ0MsYUFBYSxLQUFLLG1CQUFtQixFQUFFO01BQy9DUCxlQUFlLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDMUM7SUFDQUgsZUFBZSxDQUFDUSxtQkFBbUIsQ0FBQyxjQUFjLEVBQUVILE9BQU8sQ0FBQztFQUNoRSxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDakJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb290ZXItZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2Zvb3Rlci1kcm9wZG93bi5qcyc7XG5pbXBvcnQgJ2h0bXgub3JnJztcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTtcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsImNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tdGVzdC1kcm9wZG93blwiKTtcbmNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdGhlbWUtbGlzdFwiKTtcblxuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC41cyBlYXNlIGZvcndhcmRzXCI7XG59KTtcblxuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjVzIGVhc2UgZm9yd2FyZHNcIjtcblxuICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uIGhhbmRsZXIoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XG4gICAgfSk7XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiaHRteCIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiZHJvcGRvd24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkcm9wZG93bkNvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiaGFuZGxlciIsImVsZW1lbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=