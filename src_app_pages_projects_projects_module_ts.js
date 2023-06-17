(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_projects_projects_module_ts"],{

/***/ 6702:
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/projects-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsRoutingModule": () => (/* binding */ ProjectsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component */ 796);




const routes = [{
  path: '',
  component: _projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent,
  pathMatch: 'full'
}];
let ProjectsRoutingModule = class ProjectsRoutingModule {};
ProjectsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ProjectsRoutingModule);


/***/ }),

/***/ 796:
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.html?ngResource */ 21);
/* harmony import */ var _projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.scss?ngResource */ 3465);
/* harmony import */ var _projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
var _class;





let ProjectsComponent = (_class = class ProjectsComponent {
  constructor() {
    // Icons
    this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faExternalLinkAlt;
    // Links
    this.everestLink = 'https://github.com/rajsaha/ng_everest';
    this.lazywalletLink = 'https://github.com/rajsaha/lazywallet';
  }
  ngOnInit() {}
  goTo(url) {
    window.open(url, '_blank');
  }
}, _class.ctorParameters = () => [], _class);
ProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-projects',
  template: _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ProjectsComponent);


/***/ }),

/***/ 3206:
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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






let ProjectsModule = class ProjectsModule {};
ProjectsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsRoutingModule, _fortawesome_angular_fontawesome_testing__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeTestingModule]
})], ProjectsModule);


/***/ }),

/***/ 3465:
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projects {\n  z-index: 1;\n  margin-bottom: 15px;\n}\n.projects h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.projects .project {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 15px;\n  margin-bottom: 50px;\n}\n.projects .project .left .project-title {\n  margin-bottom: 15px;\n}\n.projects .project .left .project-title h3 {\n  text-transform: uppercase;\n  margin-bottom: 5px;\n}\n.projects .project .left .project-title h3 a fa-icon {\n  font-size: 12px;\n}\n.projects .project .left .project-description {\n  margin-bottom: 15px;\n}\n.projects .project .left .project-description p {\n  font-weight: 100;\n  line-height: 25px;\n  max-width: 500px;\n}\n.projects .project .left .project-description p a {\n  color: var(--text-color);\n}\n\n.tag {\n  padding: 3px 5px;\n  text-transform: uppercase;\n  font-size: 10px;\n  display: inline-block;\n  border-radius: 3px;\n  letter-spacing: 2px;\n}\n\n.in-development {\n  background-color: var(--in-development);\n}\n\n.live {\n  background-color: #80e27e;\n  color: black;\n}\n\n.development-paused {\n  background-color: yellow;\n  color: black;\n}\n\n@media (min-width: 768px) {\n  .projects .project {\n    grid-template-columns: 1fr 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/projects/projects.component.scss"],"names":[],"mappings":"AAEA;EACI,UAAA;EACA,mBAAA;AADJ;AAEI;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;AAAR;AAGI;EACI,kBAAA;EACA,aAAA;EACA,0BAAA;EACA,cAAA;EACA,mBAAA;AADR;AAIY;EACI,mBAAA;AAFhB;AAGgB;EACI,yBAAA;EACA,kBAAA;AADpB;AAIwB;EACI,eAAA;AAF5B;AAQY;EACI,mBAAA;AANhB;AAOgB;EACI,gBAAA;EACA,iBAAA;EACA,gBAAA;AALpB;AAOoB;EACI,wBAAA;AALxB;;AAaA;EACI,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;AAVJ;;AAaA;EACI,uCAAA;AAVJ;;AAaA;EACI,yBA/DG;EAgEH,YAAA;AAVJ;;AAaA;EACE,wBAAA;EACA,YAAA;AAVF;;AAaA;EAEQ;IACI,8BAAA;EAXV;AACF","sourcesContent":["$live: #80e27e;\r\n\r\n.projects {\r\n    z-index: 1;\r\n    margin-bottom: 15px;\r\n    h2 {\r\n        font-size: 1.5rem;\r\n        font-weight: 700;\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .project {\r\n        position: relative;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-gap: 15px;\r\n        margin-bottom: 50px;\r\n\r\n        .left {\r\n            .project-title {\r\n                margin-bottom: 15px;\r\n                h3 {\r\n                    text-transform: uppercase;\r\n                    margin-bottom: 5px;\r\n\r\n                    a {\r\n                        fa-icon {\r\n                            font-size: 12px;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n\r\n            .project-description {\r\n                margin-bottom: 15px;\r\n                p {\r\n                    font-weight: 100;\r\n                    line-height: 25px;\r\n                    max-width: 500px;\r\n\r\n                    a {\r\n                        color: var(--text-color);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.tag {\r\n    padding: 3px 5px;\r\n    text-transform: uppercase;\r\n    font-size: 10px;\r\n    display: inline-block;\r\n    border-radius: 3px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.in-development {\r\n    background-color: var(--in-development);\r\n}\r\n\r\n.live {\r\n    background-color: $live;\r\n    color: black;\r\n}\r\n\r\n.development-paused {\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .projects {\r\n        .project {\r\n            grid-template-columns: 1fr 1fr;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21:
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"projects\">\r\n    <h2>My Projects</h2>\r\n    <div class=\"project\">\r\n        <div class=\"left\">\r\n            <div class=\"project-title\">\r\n                <h3>Everest</h3>\r\n                <p class=\"tag development-paused\">Development paused</p>\r\n            </div>\r\n            <div class=\"project-description\">\r\n                <p>\r\n                    Everest is a social network that's focused on sharing and\r\n                    collecting stuff you find on the Internet.<br /><br />\r\n                    It's not a replacement for traditional social media. Rather,\r\n                    its focus is on keeping a library of resources and sharing\r\n                    them with your friends, should you choose to do so.<br /><br />\r\n                    The project is open-source and features are being added\r\n                    whenever time allows. If you're reading this and want to\r\n                    contribute or fork the project,\r\n                    <a\r\n                        href=\"https://github.com/rajsaha/ng_everest\"\r\n                        target=\"_blank\"\r\n                        >click here</a\r\n                    >. Have fun!\r\n                </p>\r\n            </div>\r\n            <div class=\"custom-button\" (click)=\"goTo(everestLink)\">\r\n                <span>View Github</span>\r\n                <fa-icon [icon]=\"faExternalLinkAlt\"></fa-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"project\">\r\n        <div class=\"left\">\r\n            <div class=\"project-title\">\r\n                <h3>Lazywallet</h3>\r\n                <p class=\"tag in-development\">In development</p>\r\n            </div>\r\n            <div class=\"project-description\">\r\n                <p>\r\n                    Lazywallet is an expense manager app made using React. Most\r\n                    expense manager apps I've come across on the play store are\r\n                    badly designed or have way too many features.<br /><br />\r\n                    I want to make something that hits the sweet spot, something\r\n                    that's powerful yet extremely easy to use.\r\n                </p>\r\n            </div>\r\n            <div class=\"custom-button\" (click)=\"goTo(lazywalletLink)\">\r\n                <span>View Github</span>\r\n                <fa-icon [icon]=\"faExternalLinkAlt\"></fa-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 478:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm2020/fortawesome-angular-fontawesome-testing.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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