(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_portfolio_portfolio_module_ts"],{

/***/ 1965:
/*!**********************************************!*\
  !*** ./src/app/animations/fade.animation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeAnimation: () => (/* binding */ fadeAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);
// import the required animation functions from the angular animations module

const fadeAnimation =
// trigger name for attaching this animation to an element using the [@triggerName] syntax
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeAnimation', [
// route 'enter' transition
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
// css styles at start of transition
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}),
// animation and styles at end of transition
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))])]);

/***/ }),

/***/ 559:
/*!*************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioRoutingModule: () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component */ 4171);




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

/***/ 4171:
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioComponent: () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.html?ngResource */ 2498);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component.scss?ngResource */ 1707);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade.animation */ 1965);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);






let PortfolioComponent = class PortfolioComponent {
  constructor(renderer, ngZone) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.detectedElements = [];
    this.introductionContainerOuterHeight = 0;
    this.contactMeSectionHeight = 0;
    this.circleTop = 0;
    this.options = {
      path: 'assets/lottie_animations/hand_wave.json',
      loop: false,
      name: 'hand-wave'
    };
    this.styles = {
      position: 'absolute',
      right: '-40px',
      top: '-18px'
    };
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
    this.elementInView = firstElement;
    if (firstElement) {
      if (firstElement.nativeElement.id === '1' && this.trackingLine) {
        this.circleTop = this.trackingLine.nativeElement.getBoundingClientRect().y;
      } else {
        this.circleTop = firstElement.nativeElement.getBoundingClientRect().y;
      }
    }
  }
  isElementInView(id) {
    if (this.elementInView) {
      return this.elementInView.nativeElement.id === id;
    } else {
      return false;
    }
  }
  animationCreated(animationItem) {
    this.animationItem = animationItem;
  }
  play() {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.loop = true;
      this.animationItem.play();
    });
  }
  stop() {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.loop = false;
      this.animationItem.play();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
  }];
  static #_2 = this.propDecorators = {
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
  };
};
PortfolioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-portfolio',
  template: _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
  host: {
    '[@fadeAnimation]': ''
  },
  styles: [(_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone])], PortfolioComponent);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/***/ }),

/***/ 9553:
/*!*****************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioModule: () => (/* binding */ PortfolioModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-routing.module */ 559);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component */ 4171);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ 9809);







let PortfolioModule = class PortfolioModule {};
PortfolioModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgOptimizedImage, ngx_lottie__WEBPACK_IMPORTED_MODULE_6__.LottieComponent]
})], PortfolioModule);


/***/ }),

/***/ 1707:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bounding-box {
  position: relative;
}
.bounding-box .tracking-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #7DE2D1;
  position: fixed;
  transition: top 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  z-index: 2;
  box-shadow: 0 0 5.6px rgba(126, 225, 209, 0.2), 0 0 13.6px rgba(126, 225, 209, 0.028), 0 0 25.5px rgba(126, 225, 209, 0.3), 0 0 45.6px rgba(126, 225, 209, 0.042), 0 0 85.2px rgba(126, 225, 209, 0.1), 0 0 204px rgba(126, 225, 209, 0.1);
}
.bounding-box .introduction-container-outer {
  display: grid;
  align-items: center;
  height: 100vh;
  padding-left: 2rem;
  position: relative;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
}
.bounding-box .introduction-container-outer .left-border-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 1px;
  height: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(to bottom, #333 0%, #fff 100%);
  z-index: -1;
}
.bounding-box .introduction-container-outer .left-border-line::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 5px solid var(--left-border-line-circle-bg-color);
  left: -5px;
  top: 0;
  z-index: 1;
}
.bounding-box .introduction-container-outer .introduction-container-inner .profile-photo-container {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  border: 5px solid #7DE2D1;
  margin-bottom: 2rem;
}
.bounding-box .introduction-container-outer .introduction-container-inner .profile-photo-container img {
  aspect-ratio: initial;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.bounding-box .introduction-container-outer .introduction-container-inner .introduction {
  z-index: 1;
  align-self: center;
}
.bounding-box .introduction-container-outer .introduction-container-inner .introduction p {
  line-height: 30px;
}
.bounding-box .introduction-container-outer .introduction-container-inner .introduction h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  max-width: 500px;
}
.bounding-box .section {
  z-index: 1;
  min-height: 50vh;
  padding-left: 2rem;
  padding-bottom: 15px;
  position: relative;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
}
.bounding-box .section .left-border-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: rgb(255, 255, 255);
  z-index: 0;
}
.bounding-box .section:nth-child(odd) .left-border-line {
  background: linear-gradient(to bottom, #fff 0%, #333 100%);
}
.bounding-box .section:nth-child(odd) .left-border-line:before {
  border: 5px solid var(--left-border-line-circle-bg-color-section-odd);
}
.bounding-box .section:nth-child(even) .left-border-line {
  background: linear-gradient(to bottom, #333 0%, #fff 100%);
}
.bounding-box .section:nth-child(even) .left-border-line:before {
  border: 5px solid var(--left-border-line-circle-bg-color-section-even);
}
.bounding-box .section .left-border-line::before {
  content: "";
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  left: -5px;
  top: 0;
}
.bounding-box .section .left-border-line-end {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 10px;
  background-color: white;
}
.bounding-box .section .left-border-line-end::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 5px solid var(--left-border-line-circle-bg-color-section-odd);
  left: -5px;
  bottom: -10px;
}
.bounding-box .section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  max-width: 500px;
}
.bounding-box .section p {
  font-weight: 100;
  line-height: 30px;
  max-width: 500px;
}
.bounding-box .section button {
  background-color: transparent;
  border: 1px solid var(--table-border-color);
  color: var(--text-color);
  padding: 5px 10px;
  width: max-content;
  border-radius: 3px;
}

.side-project-text-padding {
  padding-bottom: 10rem;
}

.in-view {
  opacity: 1 !important;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/portfolio/portfolio.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,yDAAA;EACA,UAAA;EACA,0OACE;AACN;AAOE;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AALJ;AAOI;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,8BAAA;EACA,0DAAA;EACA,WAAA;AALN;AAQI;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,yDAAA;EACA,UAAA;EACA,MAAA;EACA,UAAA;AANN;AAUM;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,qCAAA;EACA,yBAAA;EACA,mBAAA;AARR;AAUQ;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AARV;AAYM;EACE,UAAA;EACA,kBAAA;AAVR;AAYQ;EACE,iBAAA;AAVV;AAaQ;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;AAXV;AAiBE;EACE,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AAfJ;AAiBI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,8BAAA;EACA,UAAA;AAfN;AAmBM;EACE,0DAAA;AAjBR;AAmBQ;EACE,qEAAA;AAjBV;AAuBM;EACE,0DAAA;AArBR;AAuBQ;EACE,sEAAA;AArBV;AA0BI;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;AAxBN;AA2BI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,uBAAA;AAzBN;AA4BI;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qEAAA;EACA,UAAA;EACA,aAAA;AA1BN;AA6BI;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AA3BN;AA8BI;EACE,gBAAA;EACA,iBAAA;EACA,gBAAA;AA5BN;AA+BI;EACE,6BAAA;EACA,2CAAA;EACA,wBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AA7BN;;AAkCA;EACE,qBAAA;AA/BF;;AAkCA;EACE,qBAAA;AA/BF","sourcesContent":[".bounding-box {\n  position: relative;\n  .tracking-circle {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #7DE2D1;\n    position: fixed;\n    transition: top 0.2s cubic-bezier(.17,.67,.83,.67);\n    z-index: 2;\n    box-shadow:\n      0 0 5.6px rgba(126, 225, 209, 0.2),\n      0 0 13.6px rgba(126, 225, 209, 0.028),\n      0 0 25.5px rgba(126, 225, 209, 0.3),\n      0 0 45.6px rgba(126, 225, 209, 0.042),\n      0 0 85.2px rgba(126, 225, 209, 0.1),\n      0 0 204px rgba(126, 225, 209, 0.1);\n  }\n\n  .introduction-container-outer {\n    display: grid;\n    align-items: center;\n    height: 100vh;\n    padding-left: 2rem;\n    position: relative;\n    opacity: 0.3;\n    transition: opacity 0.3s ease-in-out;\n\n    .left-border-line {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 1px;\n      height: 50%;\n      background: rgb(255,255,255);\n      background: linear-gradient(to bottom, #333 0%, #fff 100%);\n      z-index: -1;\n    }\n\n    .left-border-line::before {\n      content: \"\";\n      position: absolute;\n      border-radius: 50%;\n      border: 5px solid var(--left-border-line-circle-bg-color);\n      left: -5px;\n      top: 0;\n      z-index: 1;\n    }\n\n    .introduction-container-inner {\n      .profile-photo-container {\n        position: relative;\n        width: 150px;\n        height: 150px;\n        border-radius: 50%;\n        background-color: rgba(0, 0, 0, .05);\n        border: 5px solid #7DE2D1;\n        margin-bottom: 2rem;\n\n        img {\n          aspect-ratio: initial;\n          width: 150px;\n          height: 150px;\n          border-radius: 50%;\n        }\n      }\n\n      .introduction {\n        z-index: 1;\n        align-self: center;\n\n        p {\n          line-height: 30px;\n        }\n\n        h2 {\n          font-size: 2rem;\n          margin-bottom: 15px;\n          max-width: 500px;\n        }\n      }\n    }\n  }\n\n  .section {\n    z-index: 1;\n    min-height: 50vh;\n    padding-left: 2rem;\n    padding-bottom: 15px;\n    position: relative;\n    opacity: 0.3;\n    transition: opacity 0.3s ease-in-out;\n\n    .left-border-line {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1px;\n      height: 100%;\n      background: rgb(255,255,255);\n      z-index: 0;\n    }\n\n    &:nth-child(odd) {\n      .left-border-line {\n        background: linear-gradient(to bottom, #fff 0%, #333 100%);\n\n        &:before {\n          border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n        }\n      }\n    }\n\n    &:nth-child(even) {\n      .left-border-line {\n        background: linear-gradient(to bottom, #333 0%, #fff 100%);\n\n        &:before {\n          border: 5px solid var(--left-border-line-circle-bg-color-section-even);\n        }\n      }\n    }\n\n    .left-border-line::before {\n      content: \"\";\n      position: absolute;\n      z-index: 1;\n      border-radius: 50%;\n      left: -5px;\n      top: 0;\n    }\n\n    .left-border-line-end {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1px;\n      height: 10px;\n      background-color: white;\n    }\n\n    .left-border-line-end::after {\n      content: \"\";\n      position: absolute;\n      border-radius: 50%;\n      border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n      left: -5px;\n      bottom: -10px;\n    }\n\n    h2 {\n      font-size: 1.5rem;\n      font-weight: 700;\n      margin-bottom: 15px;\n      max-width: 500px;\n    }\n\n    p {\n      font-weight: 100;\n      line-height: 30px;\n      max-width: 500px;\n    }\n\n    button {\n      background-color: transparent;\n      border: 1px solid var(--table-border-color);\n      color: var(--text-color);\n      padding: 5px 10px;\n      width: max-content;\n      border-radius: 3px;\n    }\n  }\n}\n\n.side-project-text-padding {\n  padding-bottom: 10rem;\n}\n\n.in-view {\n  opacity: 1 !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2498:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bounding-box\">\n  <div class=\"tracking-circle\" [ngStyle]=\"{ 'top': circleTopInPixel, 'left': trackingLineLeftOffset }\" ></div>\n\n  <div id=\"introduction\" class=\"introduction-container-outer\" #introductionContainerOuter [ngClass]=\"isElementInView('1') ? 'in-view' : ''\">\n    <div class=\"left-border-line\" #trackingLine></div>\n    <div class=\"introduction-container-inner\">\n      <div class='profile-photo-container' id=\"1\" #element1>\n        <img priority=\"true\" ngSrc='assets/mc.png' alt='pixel art of master chief' height='337' width='337' />\n      </div>\n      <div class=\"introduction\">\n        <p\n          (mouseenter)=\"play()\"\n          (mouseleave)=\"stop()\"\n          id=\"hello-there\"\n          style=\"margin-bottom: 1rem; position: relative; width: fit-content;\">Hello there! I'm Raj <ng-lottie width=\"45px\" height=\"50px\" [options]=\"options\" [styles]=\"styles\" (animationCreated)=\"animationCreated($event)\"></ng-lottie></p>\n        <h2>I'm a software developer</h2>\n        <p>This is my personal corner on the Internet</p>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"section1\" class=\"section\" #element2 [ngClass]=\"isElementInView('section1') ? 'in-view' : ''\">\n    <div class=\"left-border-line\"></div>\n    <h2 id=\"2\">Tech Stack</h2>\n    <p>\n      I work with <b><code>TypeScript.</code></b>\n      My front-end framework of choice is <b>Angular</b> but I also work with Vue and Svelte.\n      Mongo is my goto DB solution for personal projects but at work I use PostgresSQL.\n      I also have experience with <b>NestJS</b>.\n    </p>\n  </div>\n\n  <div id=\"section2\" class='section' #element3 [ngClass]=\"isElementInView('section2') ? 'in-view' : ''\">\n    <div class=\"left-border-line\"></div>\n    <h2 id=\"3\">I like working on side-projects</h2>\n    <p>\n      I made this little time logger which I use at work called <a href='https://github.com/rajsaha/idontwannalogtime' target='_blank'>idontwannalogtime</a>.\n      It was made with Vue and NestJS. This is still in development.\n    </p>\n\n    <br />\n\n    <p class=\"side-project-text-padding\">\n      I also made a social network lite called <a href='https://github.com/rajsaha/ng_everest' target='_blank'>Everest</a> back in 2020.\n      It was never released to the wild and has been abandoned since then but I learned a butt load from developing it.\n      It was made with Angular and the backend was plain express with Mongo as the DB solution.\n    </p>\n  </div>\n\n  <div id=\"section3\" class='section' #element4 [ngClass]=\"isElementInView('section3') ? 'in-view' : ''\">\n    <div class=\"left-border-line\"></div>\n    <h2 id=\"4\">I write sometimes</h2>\n    <p>My write-ups are on <a href='https://medium.com/@rajwraith' target='_blank'>Medium</a> and <a href='https://dev.to/rajsaha' target='_blank'>Dev.to</a>.</p>\n  </div>\n\n  <div id=\"section4\" class='section' #element5 [ngClass]=\"isElementInView('section4') ? 'in-view' : ''\">\n    <div class=\"left-border-line\"></div>\n    <h2>I used to make music</h2>\n    <p>Here's my <a href='https://www.youtube.com/channel/UCmO2-0zBQhcXXjPcLEfk-Iw' target='_blank'>YouTube</a> if you're into lo-fi/atmospheric weirdness.</p>\n  </div>\n\n  <div id=\"section5\" class=\"section\" #element6 #contactMeSection [ngClass]=\"isElementInView('section5') ? 'in-view' : ''\">\n    <div class=\"left-border-line-end\"></div>\n    <h2 id=\"5\">Contact Me</h2>\n    <p style=\"margin-bottom: 1rem;\">Send me an email at rajsaha@outlook.com</p>\n    <div class=\"custom-button\" (click)=\"sendEmail()\">\n      <span>Send Email</span>\n      <fa-icon [icon]=\"faPaperPlane\"></fa-icon>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_portfolio_portfolio_module_ts.js.map