"use strict";
(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_projects_projects_module_ts"],{

/***/ 6702:
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/projects-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsRoutingModule": () => (/* binding */ ProjectsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component */ 796);




const routes = [
    {
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent,
        pathMatch: 'full',
    },
];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProjectsRoutingModule);



/***/ }),

/***/ 796:
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.html?ngResource */ 21);
/* harmony import */ var _projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.scss?ngResource */ 6313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);





let ProjectsComponent = class ProjectsComponent {
    constructor() {
        // Icons
        this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faExternalLinkAlt;
        // Links
        this.everestLink = 'https://github.com/rajsaha/ng_everest';
        this.lazywalletLink = 'https://github.com/rajsaha/lazywallet';
    }
    ngOnInit() { }
    goTo(url) {
        window.open(url, '_blank');
    }
};
ProjectsComponent.ctorParameters = () => [];
ProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-projects',
        template: _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])
], ProjectsComponent);



/***/ }),

/***/ 3206:
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsModule": () => (/* binding */ ProjectsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-routing.module */ 6702);
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component */ 796);
/* harmony import */ var _fortawesome_angular_fontawesome_testing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome/testing */ 478);






let ProjectsModule = class ProjectsModule {
};
ProjectsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsRoutingModule, _fortawesome_angular_fontawesome_testing__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeTestingModule],
    })
], ProjectsModule);



/***/ }),

/***/ 6313:
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".projects {\n  z-index: 1;\n  margin-bottom: 15px;\n}\n.projects h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.projects .project {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 15px;\n  margin-bottom: 50px;\n}\n.projects .project .left .project-title {\n  margin-bottom: 15px;\n}\n.projects .project .left .project-title h3 {\n  text-transform: uppercase;\n  margin-bottom: 5px;\n}\n.projects .project .left .project-title h3 a fa-icon {\n  font-size: 12px;\n}\n.projects .project .left .project-description {\n  margin-bottom: 15px;\n}\n.projects .project .left .project-description p {\n  font-weight: 100;\n  line-height: 25px;\n  max-width: 500px;\n}\n.projects .project .left .project-description p a {\n  color: var(--text-color);\n}\n.tag {\n  padding: 3px 5px;\n  text-transform: uppercase;\n  font-size: 10px;\n  display: inline-block;\n  border-radius: 3px;\n  letter-spacing: 2px;\n}\n.in-development {\n  background-color: var(--in-development);\n}\n.live {\n  background-color: #80e27e;\n  color: black;\n}\n.development-paused {\n  background-color: yellow;\n  color: black;\n}\n@media (min-width: 768px) {\n  .projects .project {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURSO0FBSVk7RUFDSSxtQkFBQTtBQUZoQjtBQUdnQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFEcEI7QUFJd0I7RUFDSSxlQUFBO0FBRjVCO0FBUVk7RUFDSSxtQkFBQTtBQU5oQjtBQU9nQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxwQjtBQU9vQjtFQUNJLHdCQUFBO0FBTHhCO0FBYUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUE7RUFDSSx1Q0FBQTtBQVZKO0FBYUE7RUFDSSx5QkEvREc7RUFnRUgsWUFBQTtBQVZKO0FBYUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUFWRjtBQWFBO0VBRVE7SUFDSSw4QkFBQTtFQVhWO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGl2ZTogIzgwZTI3ZTtcblxuLnByb2plY3RzIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAucHJvamVjdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWcge1xuICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uaW4tZGV2ZWxvcG1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluLWRldmVsb3BtZW50KTtcbn1cblxuLmxpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXZlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmRldmVsb3BtZW50LXBhdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAucHJvamVjdHMge1xuICAgICAgICAucHJvamVjdCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";

/***/ }),

/***/ 21:
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"projects\">\n    <h2>My Projects</h2>\n    <div class=\"project\">\n        <div class=\"left\">\n            <div class=\"project-title\">\n                <h3>Everest</h3>\n                <p class=\"tag development-paused\">Development paused</p>\n            </div>\n            <div class=\"project-description\">\n                <p>\n                    Everest is a social network that's focused on sharing and\n                    collecting stuff you find on the Internet.<br /><br />\n                    It's not a replacement for traditional social media. Rather,\n                    its focus is on keeping a library of resources and sharing\n                    them with your friends, should you choose to do so.<br /><br />\n                    The project is open-source and features are being added\n                    whenever time allows. If you're reading this and want to\n                    contribute or fork the project,\n                    <a\n                        href=\"https://github.com/rajsaha/ng_everest\"\n                        target=\"_blank\"\n                        >click here</a\n                    >. Have fun!\n                </p>\n            </div>\n            <div class=\"custom-button\" (click)=\"goTo(everestLink)\">\n                <span>View Github</span>\n                <fa-icon [icon]=\"faExternalLinkAlt\"></fa-icon>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"project\">\n        <div class=\"left\">\n            <div class=\"project-title\">\n                <h3>Lazywallet</h3>\n                <p class=\"tag in-development\">In development</p>\n            </div>\n            <div class=\"project-description\">\n                <p>\n                    Lazywallet is an expense manager app made using React. Most\n                    expense manager apps I've come across on the play store are\n                    badly designed or have way too many features.<br /><br />\n                    I want to make something that hits the sweet spot, something\n                    that's powerful yet extremely easy to use.\n                </p>\n            </div>\n            <div class=\"custom-button\" (click)=\"goTo(lazywalletLink)\">\n                <span>View Github</span>\n                <fa-icon [icon]=\"faExternalLinkAlt\"></fa-icon>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 478:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm2020/fortawesome-angular-fontawesome-testing.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontAwesomeTestingModule": () => (/* binding */ FontAwesomeTestingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);



const dummyIcon = {
  prefix: 'fad',
  iconName: 'dummy',
  icon: [512, 512, [], 'f030', 'M50 50 H462 V462 H50 Z']
};

class MockFaIconLibrary {
  addIcons() {
    throw new Error('Attempt to add an icon to the MockFaIconLibrary.');
  }

  addIconPacks() {
    throw new Error('Attempt to add an icon pack to the MockFaIconLibrary.');
  }

  getIconDefinition(prefix, name) {
    return dummyIcon;
  }

}

MockFaIconLibrary.ɵfac = function MockFaIconLibrary_Factory(t) {
  return new (t || MockFaIconLibrary)();
};

MockFaIconLibrary.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MockFaIconLibrary,
  factory: MockFaIconLibrary.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockFaIconLibrary, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class FontAwesomeTestingModule {}

FontAwesomeTestingModule.ɵfac = function FontAwesomeTestingModule_Factory(t) {
  return new (t || FontAwesomeTestingModule)();
};

FontAwesomeTestingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FontAwesomeTestingModule,
  exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeModule]
});
FontAwesomeTestingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconLibrary,
    useExisting: MockFaIconLibrary
  }],
  imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontAwesomeTestingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeModule],
      providers: [{
        provide: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconLibrary,
        useExisting: MockFaIconLibrary
      }]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_projects_projects_module_ts.js.map