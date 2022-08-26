"use strict";
(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_portfolio_portfolio_module_ts"],{

/***/ 8803:
/*!*************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioRoutingModule": () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component */ 7919);




const routes = [
    {
        path: '',
        component: _portfolio_component__WEBPACK_IMPORTED_MODULE_0__.PortfolioComponent,
        pathMatch: 'full',
    },
];
let PortfolioRoutingModule = class PortfolioRoutingModule {
};
PortfolioRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PortfolioRoutingModule);



/***/ }),

/***/ 7919:
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.html?ngResource */ 2498);
/* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component.scss?ngResource */ 9382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade.animation */ 1182);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);






let PortfolioComponent = class PortfolioComponent {
    constructor() {
        // Icons
        this.faPaperPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPaperPlane;
    }
    ngOnInit() { }
    sendEmail() {
        window.open('mailto:rajsaha@outlook.com');
    }
};
PortfolioComponent.ctorParameters = () => [];
PortfolioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-portfolio',
        template: _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        host: { '[@fadeAnimation]': '' },
        styles: [_portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
], PortfolioComponent);



/***/ }),

/***/ 9804:
/*!*****************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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






let PortfolioModule = class PortfolioModule {
};
PortfolioModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule],
    })
], PortfolioModule);



/***/ }),

/***/ 9382:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".introduction-container {\n  display: grid;\n  min-height: 100vh;\n}\n.introduction-container .introduction {\n  z-index: 1;\n  align-self: center;\n}\n.introduction-container .introduction h3 {\n  font-weight: 100;\n  margin-bottom: 15px;\n}\n.introduction-container .introduction h1 {\n  font-weight: 700;\n  font-size: 4rem;\n  margin-bottom: 15px;\n}\n.introduction-container .introduction h2 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n}\n.section {\n  z-index: 1;\n  margin-bottom: 45px;\n}\n.section h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.section p {\n  font-weight: 100;\n  margin-bottom: 15px;\n  line-height: 25px;\n  max-width: 500px;\n}\n.section button {\n  background-color: transparent;\n  border: 1px solid var(--table-border-color);\n  color: var(--text-color);\n  padding: 5px 10px;\n  width: max-content;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUdaO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVaO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUlBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNJLDZCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZSIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyb2R1Y3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VjdGlvbiB7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10YWJsZS1ib3JkZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG59XG4iXX0= */";

/***/ }),

/***/ 2498:
/*!*********************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"introduction-container\">\n    <div class=\"introduction\">\n        <h3>Hello there! 👋 I'm Raj</h3>\n        <h2>I'm a software developer</h2>\n        <h3>This is my personal corner on the Internet</h3>\n    </div>\n</div>\n\n<div class=\"section\">\n    <h2>Tech Stack</h2>\n    <p>\n        I work with <b>Angular</b> and <b>Node</b> primarily <br />\n        Mongo is my goto DB solution for personal projects but at work I use\n        PostgresSQL<br /><br />\n        I also have a little bit of experience with React, Vue and NestJS\n    </p>\n</div>\n\n<div class=\"section\">\n    <h2>Contact Me</h2>\n    <p>Send me an email at rajsaha@outlook.com</p>\n    <div class=\"custom-button\" (click)=\"sendEmail()\">\n        <span>Send Email</span>\n        <fa-icon [icon]=\"faPaperPlane\"></fa-icon>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_portfolio_portfolio_module_ts.js.map