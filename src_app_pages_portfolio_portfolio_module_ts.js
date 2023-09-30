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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.html?ngResource */ 2498);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component.scss?ngResource */ 1707);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade.animation */ 1182);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
var _class;






let PortfolioComponent = (_class = class PortfolioComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.detectedElements = [];
    this.introductionContainerOuterHeight = 0;
    this.contactMeSectionHeight = 0;
    this.circleTop = 0;
    // Icons
    this.faPaperPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPaperPlane;
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.introductionContainerOuterHeight = this.introductionContainerOuter.nativeElement.offsetHeight;
    this.contactMeSectionHeight = this.contactMeSection.nativeElement.offsetHeight;
    setTimeout(this.detectElms.bind(this));
  }
  get trackingLineLeftOffset() {
    if (this.trackingLine) {
      return this.trackingLine.nativeElement.getBoundingClientRect().x - 10 + 'px';
    }
  }
  get circleTopInPixel() {
    return this.circleTop + 'px';
  }
  sendEmail() {
    window.open('mailto:rajsaha@outlook.com');
  }
  detectElms() {
    const detectedElements = [];
    this.elements.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        detectedElements.push(elm);
      }
    });
    this.detectedElements = detectedElements;
    const firstElement = this.detectedElements[0];
    if (firstElement) {
      if (firstElement.nativeElement.id === '1' && this.trackingLine) {
        this.circleTop = this.trackingLine.nativeElement.getBoundingClientRect().y;
      } else {
        this.circleTop = firstElement.nativeElement.getBoundingClientRect().y;
      }
    }
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
}], _class.propDecorators = {
  trackingLine: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['trackingLine']
  }],
  introductionContainerOuter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['introductionContainerOuter']
  }],
  contactMeSection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['contactMeSection']
  }],
  elements: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChildren,
    args: ['element1, element2, element3, element4, element5, element6']
  }]
}, _class);
PortfolioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-portfolio',
  template: _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
  host: {
    '[@fadeAnimation]': ''
  },
  styles: [(_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2])], PortfolioComponent);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

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
___CSS_LOADER_EXPORT___.push([module.id, ".bounding-box {\n  position: relative;\n}\n.bounding-box .tracking-circle {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #7DE2D1;\n  position: fixed;\n  transition: top 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  z-index: 2;\n}\n.bounding-box .introduction-container-outer {\n  display: grid;\n  align-items: center;\n  height: 100vh;\n  padding-left: 2rem;\n  position: relative;\n}\n.bounding-box .introduction-container-outer .left-border-line {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 1px;\n  height: 50%;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(to bottom, #333 0%, #fff 100%);\n  z-index: -1;\n}\n.bounding-box .introduction-container-outer .left-border-line::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  border: 5px solid var(--left-border-line-circle-bg-color);\n  left: -5px;\n  top: 0;\n  z-index: 1;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .profile-photo-container {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: 5px solid #7DE2D1;\n  margin-bottom: 2rem;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .profile-photo-container img {\n  aspect-ratio: initial;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction {\n  z-index: 1;\n  align-self: center;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction h3 {\n  font-weight: 100;\n  margin-bottom: 15px;\n  line-height: 25px;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction h1 {\n  font-weight: 700;\n  font-size: 4rem;\n  margin-bottom: 15px;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction h2 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n}\n.bounding-box .section {\n  z-index: 1;\n  min-height: 50vh;\n  padding-left: 2rem;\n  padding-bottom: 15px;\n  position: relative;\n}\n.bounding-box .section .left-border-line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 100%;\n  background: rgb(255, 255, 255);\n  z-index: 0;\n}\n.bounding-box .section:nth-child(odd) .left-border-line {\n  background: linear-gradient(to bottom, #fff 0%, #333 100%);\n}\n.bounding-box .section:nth-child(odd) .left-border-line:before {\n  border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n}\n.bounding-box .section:nth-child(even) .left-border-line {\n  background: linear-gradient(to bottom, #333 0%, #fff 100%);\n}\n.bounding-box .section:nth-child(even) .left-border-line:before {\n  border: 5px solid var(--left-border-line-circle-bg-color-section-even);\n}\n.bounding-box .section .left-border-line::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  border-radius: 50%;\n  left: -5px;\n  top: 0;\n}\n.bounding-box .section .left-border-line-end {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 10px;\n  background-color: white;\n}\n.bounding-box .section .left-border-line-end::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n  left: -5px;\n  bottom: -10px;\n}\n.bounding-box .section h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.bounding-box .section p {\n  font-weight: 100;\n  line-height: 25px;\n  max-width: 500px;\n}\n.bounding-box .section button {\n  background-color: transparent;\n  border: 1px solid var(--table-border-color);\n  color: var(--text-color);\n  padding: 5px 10px;\n  width: max-content;\n  border-radius: 3px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/portfolio/portfolio.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,yDAAA;EACA,UAAA;AAEJ;AACE;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AACI;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,8BAAA;EACA,0DAAA;EACA,WAAA;AACN;AAEI;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,yDAAA;EACA,UAAA;EACA,MAAA;EACA,UAAA;AAAN;AAIM;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,qCAAA;EACA,yBAAA;EACA,mBAAA;AAFR;AAIQ;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AAFV;AAMM;EACE,UAAA;EACA,kBAAA;AAJR;AAKQ;EACE,gBAAA;EACA,mBAAA;EACA,iBAAA;AAHV;AAMQ;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;AAJV;AAOQ;EACE,eAAA;EACA,mBAAA;AALV;AAWE;EACE,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;AATJ;AAWI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,8BAAA;EACA,UAAA;AATN;AAaM;EACE,0DAAA;AAXR;AAaQ;EACE,qEAAA;AAXV;AAiBM;EACE,0DAAA;AAfR;AAiBQ;EACE,sEAAA;AAfV;AAoBI;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;AAlBN;AAqBI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,uBAAA;AAnBN;AAsBI;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qEAAA;EACA,UAAA;EACA,aAAA;AApBN;AAuBI;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;AArBN;AAwBI;EACE,gBAAA;EACA,iBAAA;EACA,gBAAA;AAtBN;AAyBI;EACE,6BAAA;EACA,2CAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AAvBN","sourcesContent":[".bounding-box {\n  position: relative;\n  .tracking-circle {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #7DE2D1;\n    position: fixed;\n    transition: top 0.2s cubic-bezier(.17,.67,.83,.67);\n    z-index: 2;\n  }\n\n  .introduction-container-outer {\n    display: grid;\n    align-items: center;\n    height: 100vh;\n    padding-left: 2rem;\n    position: relative;\n\n    .left-border-line {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 1px;\n      height: 50%;\n      background: rgb(255,255,255);\n      background: linear-gradient(to bottom, #333 0%, #fff 100%);\n      z-index: -1;\n    }\n\n    .left-border-line::before {\n      content: \"\";\n      position: absolute;\n      border-radius: 50%;\n      border: 5px solid var(--left-border-line-circle-bg-color);\n      left: -5px;\n      top: 0;\n      z-index: 1;\n    }\n\n    .introduction-container-inner {\n      .profile-photo-container {\n        position: relative;\n        width: 150px;\n        height: 150px;\n        border-radius: 50%;\n        background-color: rgba(0, 0, 0, .05);\n        border: 5px solid #7DE2D1;\n        margin-bottom: 2rem;\n\n        img {\n          aspect-ratio: initial;\n          width: 150px;\n          height: 150px;\n          border-radius: 50%;\n        }\n      }\n\n      .introduction {\n        z-index: 1;\n        align-self: center;\n        h3 {\n          font-weight: 100;\n          margin-bottom: 15px;\n          line-height: 25px;\n        }\n\n        h1 {\n          font-weight: 700;\n          font-size: 4rem;\n          margin-bottom: 15px;\n        }\n\n        h2 {\n          font-size: 2rem;\n          margin-bottom: 15px;\n        }\n      }\n    }\n  }\n\n  .section {\n    z-index: 1;\n    min-height: 50vh;\n    padding-left: 2rem;\n    padding-bottom: 15px;\n    position: relative;\n\n    .left-border-line {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1px;\n      height: 100%;\n      background: rgb(255,255,255);\n      z-index: 0;\n    }\n\n    &:nth-child(odd) {\n      .left-border-line {\n        background: linear-gradient(to bottom, #fff 0%, #333 100%);\n\n        &:before {\n          border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n        }\n      }\n    }\n\n    &:nth-child(even) {\n      .left-border-line {\n        background: linear-gradient(to bottom, #333 0%, #fff 100%);\n\n        &:before {\n          border: 5px solid var(--left-border-line-circle-bg-color-section-even);\n        }\n      }\n    }\n\n    .left-border-line::before {\n      content: \"\";\n      position: absolute;\n      z-index: 1;\n      border-radius: 50%;\n      left: -5px;\n      top: 0;\n    }\n\n    .left-border-line-end {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1px;\n      height: 10px;\n      background-color: white;\n    }\n\n    .left-border-line-end::after {\n      content: \"\";\n      position: absolute;\n      border-radius: 50%;\n      border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n      left: -5px;\n      bottom: -10px;\n    }\n\n    h2 {\n      font-size: 1.5rem;\n      font-weight: 700;\n      margin-bottom: 15px;\n    }\n\n    p {\n      font-weight: 100;\n      line-height: 25px;\n      max-width: 500px;\n    }\n\n    button {\n      background-color: transparent;\n      border: 1px solid var(--table-border-color);\n      color: var(--text-color);\n      padding: 5px 10px;\n      width: max-content;\n      border-radius: 3px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2498:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bounding-box\">\n  <div class=\"tracking-circle\" [ngStyle]=\"{ 'top': circleTopInPixel, 'left': trackingLineLeftOffset }\" ></div>\n\n  <div class=\"introduction-container-outer\" #introductionContainerOuter>\n    <div class=\"left-border-line\" #trackingLine></div>\n    <div class=\"introduction-container-inner\">\n      <div class='profile-photo-container' id=\"1\" #element1>\n        <img ngSrc='assets/mc.png' alt='pixel art of master chief' height='337' width='337' />\n      </div>\n      <div class=\"introduction\">\n        <h3>Hello there! I'm Raj</h3>\n        <h2>I'm a software developer</h2>\n        <h3>This is my personal corner on the Internet</h3>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section\" #element2>\n    <div class=\"left-border-line\"></div>\n    <h2 id=\"2\">Tech Stack</h2>\n    <p>\n      I work with <b><code>TypeScript.</code></b>\n      My front-end framework of choice is <b>Angular</b> but I also work with Vue and Svelte.\n      Mongo is my goto DB solution for personal projects but at work I use PostgresSQL.\n      I also have experience with <b>NestJS</b>.\n    </p>\n  </div>\n\n  <div class='section' #element3>\n    <div class=\"left-border-line\"></div>\n    <h2 id=\"3\">I like working on side-projects</h2>\n    <p>\n      I made this little time logger which I use at work called <a href='https://github.com/rajsaha/idontwannalogtime' target='_blank'>idontwannalogtime</a>.\n      It was made with Vue and NestJS. This is still in development.\n    </p>\n\n    <p>\n      I also made a social network lite called <a href='https://github.com/rajsaha/ng_everest' target='_blank'>Everest</a> back in 2020.\n      It was never released to the wild and has been abandoned since then but I learned a butt load from developing it.\n      It was made with Angular and the backend was plain express with Mongo as the DB solution.\n    </p>\n  </div>\n\n  <div class='section' #element4>\n    <div class=\"left-border-line\"></div>\n    <h2 id=\"4\">I write sometimes</h2>\n    <p>My write-ups are on <a href='https://medium.com/@rajwraith' target='_blank'>Medium</a> and <a href='https://dev.to/rajsaha' target='_blank'>Dev.to</a>.</p>\n  </div>\n\n  <div class='section' #element5>\n    <div class=\"left-border-line\"></div>\n    <h2>I used to make music</h2>\n    <p>Here's my <a href='https://www.youtube.com/channel/UCmO2-0zBQhcXXjPcLEfk-Iw' target='_blank'>YouTube</a> if you're into lo-fi/atmospheric weirdness.</p>\n  </div>\n\n  <div class=\"section\" #element6 #contactMeSection>\n    <div class=\"left-border-line-end\"></div>\n    <h2 id=\"5\">Contact Me</h2>\n    <p style=\"margin-bottom: 1rem;\">Send me an email at rajsaha@outlook.com</p>\n    <div class=\"custom-button\" (click)=\"sendEmail()\">\n      <span>Send Email</span>\n      <fa-icon [icon]=\"faPaperPlane\"></fa-icon>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_portfolio_portfolio_module_ts.js.map