(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_portfolio_portfolio_module_ts"],{

/***/ 8803:
/*!*************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioRoutingModule": () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component */ 7919);




const routes = [{
  path: '',
  component: _portfolio_component__WEBPACK_IMPORTED_MODULE_0__.PortfolioComponent,
  pathMatch: 'full'
}];
let PortfolioRoutingModule = class PortfolioRoutingModule {};
PortfolioRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PortfolioRoutingModule);


/***/ }),

/***/ 7919:
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.html?ngResource */ 2498);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component.scss?ngResource */ 1707);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade.animation */ 1182);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
var _class;






let PortfolioComponent = (_class = class PortfolioComponent {
  constructor() {
    // Icons
    this.faPaperPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPaperPlane;
  }
  ngOnInit() {}
  sendEmail() {
    window.open('mailto:rajsaha@outlook.com');
  }
}, _class.ctorParameters = () => [], _class);
PortfolioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-portfolio',
  template: _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
  host: {
    '[@fadeAnimation]': ''
  },
  styles: [(_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])], PortfolioComponent);


/***/ }),

/***/ 9804:
/*!*****************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioModule": () => (/* binding */ PortfolioModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-routing.module */ 8803);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component */ 7919);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);






let PortfolioModule = class PortfolioModule {};
PortfolioModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgOptimizedImage]
})], PortfolioModule);


/***/ }),

/***/ 1707:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".introduction-container {\n  display: grid;\n  margin-bottom: 2rem;\n}\n.introduction-container .profile-photo-container {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: 5px solid #7DE2D1;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n}\n.introduction-container .profile-photo-container img {\n  aspect-ratio: initial;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.introduction-container .introduction {\n  z-index: 1;\n  align-self: center;\n  text-align: center;\n}\n.introduction-container .introduction h3 {\n  font-weight: 100;\n  margin-bottom: 15px;\n  line-height: 25px;\n}\n.introduction-container .introduction h1 {\n  font-weight: 700;\n  font-size: 4rem;\n  margin-bottom: 15px;\n}\n.introduction-container .introduction h2 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n}\n\n.section {\n  z-index: 1;\n  margin-bottom: 45px;\n  text-align: center;\n}\n.section h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.section p {\n  font-weight: 100;\n  margin-bottom: 15px;\n  line-height: 25px;\n  max-width: 500px;\n}\n.section button {\n  background-color: transparent;\n  border: 1px solid var(--table-border-color);\n  color: var(--text-color);\n  padding: 5px 10px;\n  width: max-content;\n  border-radius: 3px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/portfolio/portfolio.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;AACJ;AACI;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,qCAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;AACN;AAAM;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAER;AAEI;EACI,UAAA;EACA,kBAAA;EACA,kBAAA;AAAR;AACQ;EACI,gBAAA;EACA,mBAAA;EACA,iBAAA;AACZ;AAEQ;EACI,gBAAA;EACA,eAAA;EACA,mBAAA;AAAZ;AAGQ;EACI,eAAA;EACA,mBAAA;AADZ;;AAMA;EACI,UAAA;EACA,mBAAA;EACA,kBAAA;AAHJ;AAII;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;AAFR;AAKI;EACI,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;AAHR;AAMI;EACI,6BAAA;EACA,2CAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AAJR","sourcesContent":[".introduction-container {\r\n    display: grid;\r\n    margin-bottom: 2rem;\r\n\r\n    .profile-photo-container {\r\n      width: 150px;\r\n      height: 150px;\r\n      border-radius: 50%;\r\n      background-color: rgba(0, 0, 0, .05);\r\n      border: 5px solid #7DE2D1;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-bottom: 2rem;\r\n      img {\r\n        aspect-ratio: initial;\r\n        width: 150px;\r\n        height: 150px;\r\n        border-radius: 50%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n      }\r\n    }\r\n\r\n    .introduction {\r\n        z-index: 1;\r\n        align-self: center;\r\n        text-align: center;\r\n        h3 {\r\n            font-weight: 100;\r\n            margin-bottom: 15px;\r\n            line-height: 25px;\r\n        }\r\n\r\n        h1 {\r\n            font-weight: 700;\r\n            font-size: 4rem;\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 2rem;\r\n            margin-bottom: 15px;\r\n        }\r\n    }\r\n}\r\n\r\n.section {\r\n    z-index: 1;\r\n    margin-bottom: 45px;\r\n    text-align: center;\r\n    h2 {\r\n        font-size: 1.5rem;\r\n        font-weight: 700;\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    p {\r\n        font-weight: 100;\r\n        margin-bottom: 15px;\r\n        line-height: 25px;\r\n        max-width: 500px;\r\n    }\r\n\r\n    button {\r\n        background-color: transparent;\r\n        border: 1px solid var(--table-border-color);\r\n        color: var(--text-color);\r\n        padding: 5px 10px;\r\n        width: max-content;\r\n        border-radius: 3px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2498:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"introduction-container\">\r\n    <div class='profile-photo-container'>\r\n      <img ngSrc='assets/mc.png' alt='pixel art of master chief' height='337' width='337' />\r\n    </div>\r\n    <div class=\"introduction\">\r\n        <h3>Hello there! I'm Raj</h3>\r\n        <h2>I'm a software developer</h2>\r\n        <h3>This is my personal corner on the Internet</h3>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section\">\r\n    <h2>Tech Stack</h2>\r\n    <p>\r\n        I work with <b><code>TypeScript.</code></b>\r\n        My front-end framework of choice is <b>Angular</b> but I also work with Vue and Svelte.\r\n        Mongo is my goto DB solution for personal projects but at work I use PostgresSQL.\r\n        I also have experience with <b>NestJS</b>.\r\n    </p>\r\n</div>\r\n\r\n<div class='section'>\r\n  <h2>I like working on side-projects</h2>\r\n  <p>\r\n    I made this little time logger which I use at work called <a href='https://github.com/rajsaha/idontwannalogtime' target='_blank'>idontwannalogtime</a>.\r\n    It was made with Vue and NestJS. This is still in development.\r\n  </p>\r\n\r\n  <p>\r\n    I also made a social network lite called <a href='https://github.com/rajsaha/ng_everest' target='_blank'>Everest</a> back in 2020.\r\n    It was never released to the wild and has been abandoned since then but I learned a butt load from developing it.\r\n    It was made with Angular and the backend was plain express with Mongo as the DB solution.\r\n  </p>\r\n</div>\r\n\r\n<div class='section'>\r\n  <h2>I write sometimes</h2>\r\n  <p>My write-ups are on <a href='https://medium.com/@rajwraith' target='_blank'>Medium</a> and <a href='https://dev.to/rajsaha' target='_blank'>Dev.to</a>.</p>\r\n</div>\r\n\r\n<div class='section'>\r\n  <h2>I used to make music</h2>\r\n  <p>Here's my <a href='https://www.youtube.com/channel/UCmO2-0zBQhcXXjPcLEfk-Iw' target='_blank'>YouTube</a> if you're into lo-fi/atmospheric weirdness.</p>\r\n</div>\r\n\r\n<div class=\"section\">\r\n    <h2>Contact Me</h2>\r\n    <p>Send me an email at rajsaha@outlook.com</p>\r\n    <div class=\"custom-button\" (click)=\"sendEmail()\">\r\n        <span>Send Email</span>\r\n        <fa-icon [icon]=\"faPaperPlane\"></fa-icon>\r\n    </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_portfolio_portfolio_module_ts.js.map