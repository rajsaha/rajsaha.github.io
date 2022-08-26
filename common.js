"use strict";
(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["common"],{

/***/ 1182:
/*!**********************************************!*\
  !*** ./src/app/animations/fade.animation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeAnimation": () => (/* binding */ fadeAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);
// import the required animation functions from the angular animations module

const fadeAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeAnimation', [
    // route 'enter' transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
        // css styles at start of transition
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
        // animation and styles at end of transition
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
    ]),
]);


/***/ })

}]);
//# sourceMappingURL=common.js.map