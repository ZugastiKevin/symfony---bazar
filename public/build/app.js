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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ1c7QUFDcEI7QUFDbEJBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDBEQUFVLENBQUM7QUFFakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7QUNiN0UsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUM3RCxJQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBRXRFRixRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFNO0VBQ3pDRCxlQUFlLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDdENILGVBQWUsQ0FBQ0UsS0FBSyxDQUFDRSxTQUFTLEdBQUcsaUNBQWlDO0FBQ3ZFLENBQUMsQ0FBQztBQUVGUCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFNO0VBQ3hDRCxlQUFlLENBQUNFLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLHNDQUFzQztFQUV4RUosZUFBZSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsU0FBU0ksT0FBT0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZFLElBQUlBLE9BQU8sQ0FBQ0MsYUFBYSxLQUFLLG1CQUFtQixFQUFFO01BQy9DUCxlQUFlLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDMUM7SUFDQUgsZUFBZSxDQUFDUSxtQkFBbUIsQ0FBQyxjQUFjLEVBQUVILE9BQU8sQ0FBQztFQUNoRSxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDakJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb290ZXItZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9mb290ZXItZHJvcGRvd24uanMnO1xuaW1wb3J0ICdodG14Lm9yZyc7XG53aW5kb3cuaHRteCA9IHJlcXVpcmUoJ2h0bXgub3JnJyk7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXRlc3QtZHJvcGRvd25cIik7XG5jb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXRoZW1lLWxpc3RcIik7XG5cbmRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuNXMgZWFzZSBmb3J3YXJkc1wiO1xufSk7XG5cbmRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC41cyBlYXNlIGZvcndhcmRzXCI7XG5cbiAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiBoYW5kbGVyKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xuICAgIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImh0bXgiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25Db250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImhhbmRsZXIiLCJlbGVtZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9