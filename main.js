"use strict";
(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/main/main.component */ 3571);




const routes = [
    {
        path: '',
        component: _layout_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_portfolio_portfolio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/portfolio/portfolio.module */ 9804)).then((m) => m.PortfolioModule),
            },
            {
                path: 'my-music',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-music_my-music_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/my-music/my-music.module */ 9418)).then((m) => m.MyMusicModule),
            },
            {
                path: 'projects',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_projects_projects_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/projects/projects.module */ 3206)).then((m) => m.ProjectsModule),
            },
            {
                path: 'blog',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_blog_blog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blog/blog.module */ 6238)).then((m) => m.BlogModule),
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-portfolio';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _services_ngrx_appTheme_appTheme_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/ngrx/appTheme/appTheme.reducer */ 7248);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/main/main.component */ 3571);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 6);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/local-storage/local-storage.service */ 7635);






// * Component imports







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _layout_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__.NavigationComponent,
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreModule.forRoot({
                appThemeState: _services_ngrx_appTheme_appTheme_reducer__WEBPACK_IMPORTED_MODULE_1__.appThemeStateReducer,
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreModule.forRoot({}, {}),
        ],
        providers: [_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);





let FooterComponent = class FooterComponent {
    constructor() {
        // Icons
        this.faCopyright = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCopyright;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _Users_rajsaha_Documents_GitHub_ng_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.html?ngResource */ 8814);
/* harmony import */ var _navigation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component.scss?ngResource */ 8917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 9636);
/* harmony import */ var _services_custom_color_scheme_custom_color_scheme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/custom-color-scheme/custom-color-scheme.service */ 1070);










let NavigationComponent = class NavigationComponent {
  constructor(router, customColorSchemeService) {
    this.router = router;
    this.customColorSchemeService = customColorSchemeService;
    this.checked = false; // Icons

    this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGithub;
    this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInstagram;
    this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLinkedin;
    this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faYoutube;
    this.farLightbulb = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLightbulb;
    this.fasLightbulb = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLightbulb;
    this.localStorageTheme = this.customColorSchemeService.getCurrentTheme();

    if (this.localStorageTheme === 'dark') {
      this.checked = true;
      this.customColorSchemeService.setDarkTheme();
    } else {
      this.checked = false;
      this.customColorSchemeService.setLightTheme();
    }
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

  goHome() {
    var _this = this;

    return (0,_Users_rajsaha_Documents_GitHub_ng_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.router.navigate(['home']);
    })();
  }

  goTo(url) {
    window.open(url, '_blank');
  }

  onToggleChange(isChecked) {
    if (isChecked) {
      this.customColorSchemeService.setDarkTheme();
    } else {
      this.customColorSchemeService.setLightTheme();
    }
  }

};

NavigationComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_custom_color_scheme_custom_color_scheme_service__WEBPACK_IMPORTED_MODULE_3__.CustomColorSchemeService
}];

NavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-navigation',
  template: _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_navigation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _services_custom_color_scheme_custom_color_scheme_service__WEBPACK_IMPORTED_MODULE_3__.CustomColorSchemeService])], NavigationComponent);


/***/ }),

/***/ 3571:
/*!***********************************************!*\
  !*** ./src/app/layout/main/main.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 8787);
/* harmony import */ var _main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.scss?ngResource */ 843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let MainComponent = class MainComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['home']).then();
        }
        this.onResize();
    }
    onResize() {
        this.innerHeight = window.innerHeight;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MainComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['window:resize', ['$event'],] }]
};
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main',
        template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])
], MainComponent);



/***/ }),

/***/ 1070:
/*!*****************************************************************************!*\
  !*** ./src/app/services/custom-color-scheme/custom-color-scheme.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomColorSchemeService": () => (/* binding */ CustomColorSchemeService),
/* harmony export */   "ThemeMode": () => (/* binding */ ThemeMode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/local-storage/local-storage.service */ 7635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _services_ngrx_appTheme_appTheme_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/ngrx/appTheme/appTheme.actions */ 6781);






var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["DARK"] = 0] = "DARK";
    ThemeMode[ThemeMode["LIGHT"] = 1] = "LIGHT";
})(ThemeMode || (ThemeMode = {}));
let CustomColorSchemeService = class CustomColorSchemeService {
    constructor(storage, store) {
        this.storage = storage;
        this.store = store;
        this.THEME_KEY = 'THEME';
        this.DARK_THEME_VALUE = 'DARK';
        this.LIGHT_THEME_VALUE = 'LIGHT';
        this.DARK_THEME_CLASS_NAME = 'theme-dark';
        this.darkThemeSelected = false;
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(ThemeMode.LIGHT);
    }
    setThemeOnStart() {
        if (this.isDarkThemeSelected()) {
            this.setDarkTheme();
        }
        else {
            this.setLightTheme();
        }
    }
    isDarkThemeSelected() {
        this.darkThemeSelected =
            this.storage.get(this.THEME_KEY) === this.DARK_THEME_VALUE;
        return this.darkThemeSelected;
    }
    getCurrentTheme() {
        const theme = this.storage.get(this.THEME_KEY)
            ? this.storage.get(this.THEME_KEY)
            : 'DARK';
        return theme.toLowerCase();
    }
    setLightTheme() {
        this.store.dispatch((0,_services_ngrx_appTheme_appTheme_actions__WEBPACK_IMPORTED_MODULE_1__.setTheme)({ theme: 'light' }));
        this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
        document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
        this.darkThemeSelected = false;
        this.theme$.next(ThemeMode.LIGHT);
    }
    setDarkTheme() {
        this.store.dispatch((0,_services_ngrx_appTheme_appTheme_actions__WEBPACK_IMPORTED_MODULE_1__.setTheme)({ theme: 'dark' }));
        this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
        document.body.classList.add(this.DARK_THEME_CLASS_NAME);
        this.darkThemeSelected = true;
        this.theme$.next(ThemeMode.DARK);
    }
};
CustomColorSchemeService.ctorParameters = () => [
    { type: _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store }
];
CustomColorSchemeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store])
], CustomColorSchemeService);



/***/ }),

/***/ 7635:
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let StorageService = class StorageService {
    get(key) {
        return localStorage ? localStorage.getItem(key) : null;
    }
    set(key, value) {
        if (localStorage) {
            localStorage.setItem(key, value);
        }
    }
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], StorageService);



/***/ }),

/***/ 6781:
/*!************************************************************!*\
  !*** ./src/app/services/ngrx/appTheme/appTheme.actions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTheme": () => (/* binding */ setTheme)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const setTheme = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App Theme] Set Theme', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 7248:
/*!************************************************************!*\
  !*** ./src/app/services/ngrx/appTheme/appTheme.reducer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appThemeStateReducer": () => (/* binding */ appThemeStateReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _appTheme_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appTheme.actions */ 6781);


const initialState = 'light';
const _appThemeReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_appTheme_actions__WEBPACK_IMPORTED_MODULE_0__.setTheme, (state, { theme }) => theme));
function appThemeStateReducer(state, action) {
    return _appThemeReducer(state, action);
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".footer {\n  border-top: 1px solid var(--table-border-color);\n  color: var(--text-color);\n  padding: 15px 0 15px 25px;\n}\n.footer fa-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10YWJsZS1ib3JkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAyNXB4O1xuICAgIGZhLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG59XG4iXX0= */";

/***/ }),

/***/ 8917:
/*!****************************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".navigation {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  height: 100%;\n  max-height: 100vh;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: var(--table-border-color);\n}\n.navigation .logo-container {\n  cursor: pointer;\n  transform: rotate(-90deg) translate(-15px, 2px);\n}\n.navigation .logo-container svg {\n  width: 50px;\n  height: 50px;\n  fill: var(--logo-fill);\n}\n.navigation #nav-table {\n  table-layout: fixed;\n  transform: rotate(-90deg) translate(-250px, -222px);\n  transform-origin: top;\n}\n.navigation #nav-table tr {\n  border-spacing: 10px;\n  border-collapse: separate;\n}\n.navigation #nav-table tr td {\n  height: 50px;\n  padding: 0 15px;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: var(--table-border-color);\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n  color: var(--text-color);\n  line-height: 50px;\n  outline: none;\n}\n.navigation #nav-table tr td a {\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.navigation #nav-table tr td:hover {\n  background-color: var(--nav-hover-bg-color);\n}\n.navigation #nav-table tr td:hover a,\n.navigation #nav-table tr td:hover fa-icon {\n  color: var(--nav-hover-text-color);\n}\n.navigation .theme-toggle {\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  color: var(--text-color);\n  width: 100%;\n  text-align: center;\n}\n.active {\n  background-color: var(--nav-active-bg-color);\n}\n.active a {\n  color: var(--nav-active-a-color);\n}\n.active fa-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtBQURKO0FBR0k7RUFDSSxlQUFBO0VBQ0EsK0NBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFaO0FBSUk7RUFDSSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7QUFGUjtBQUlRO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtBQUZaO0FBSVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBRmhCO0FBSWdCO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQUZwQjtBQUtnQjtFQUNJLDJDQUFBO0FBSHBCO0FBSW9COztFQUVJLGtDQUFBO0FBRnhCO0FBU0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVdBO0VBQ0ksNENBQUE7QUFSSjtBQVNJO0VBQ0ksZ0NBQUE7QUFQUjtBQVVJO0VBQ0ksWUFBQTtBQVJSIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzLnNjc3MnO1xuXG4ubmF2aWdhdGlvbiB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdGFibGUtYm9yZGVyLWNvbG9yKTtcblxuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTE1cHgsIDJweCk7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxvZ28tZmlsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjbmF2LXRhYmxlIHtcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTI1MHB4LCAtMjIycHgpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG5cbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdGFibGUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWhvdmVyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbmF2LWhvdmVyLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRoZW1lLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYWN0aXZlLWJnLWNvbG9yKTtcbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW5hdi1hY3RpdmUtYS1jb2xvcik7XG4gICAgfVxuXG4gICAgZmEtaWNvbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59XG4iXX0= */";

/***/ }),

/***/ 843:
/*!************************************************************!*\
  !*** ./src/app/layout/main/main.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  background-color: var(--main-background-color);\n  display: grid;\n  grid-template-columns: 50px 1fr;\n}\n.main .main-content .router {\n  z-index: 1;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 25px 25px 0 25px;\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUNKO0FBRVE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVoiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcblxuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAucm91dGVyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjVweCAwIDI1cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 1757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"footer\">\n    <fa-icon [icon]=\"faCopyright\"></fa-icon>\n    <span>{{ currentYear }}, Raj Saha</span>\n</div>\n";

/***/ }),

/***/ 8814:
/*!****************************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"navigation\">\n    <div class=\"logo-container\" (click)=\"goHome()\">\n        <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            height=\"136.724\"\n            width=\"326.631\"\n            viewBox=\"0 0 306.218 128.178\"\n            class=\"logo\"\n        >\n            <path\n                d=\"M249.018 34.875c-8.065 0-14.233 2.283-18.502 6.848-4.365 4.565-8.92 12.783-13.664 24.653-4.839 11.87-9.898 26.571-14.547 33.495-12.715 18.87-29.841 28.306-51.38 28.306-11.197 0-21.16-2.511-29.89-7.533-8.824-5.098-15.703-12.365-20.638-21.8-4.934-9.511-7.086-25.467-7.086-37.261 0-11.87 2.704-22.447 8.113-31.73 5.313-9.283 12.856-16.474 22.63-21.572C133.827 3.107 144.93.52 157.36.52v34.24c-9.488 0-16.842 2.398-22.06 7.191-5.314 4.794-8.6 16.326-8.6 25 0 8.37 2.23 14.876 6.689 19.517 4.365 4.642 10.152 6.963 17.364 6.963 6.737 0 12.383-2.701 16.937-8.104 4.554-5.478 8.824-13.506 12.81-24.083 7.305-19.479 16.997-38.468 27.814-47.37C219.129 4.97 232.603.518 248.734.518c7.605 0 54.934-.353 57.427 1.38-.579 19.466-.029 39.794.073 58.884 0 12.783-2.894 24.425-8.682 34.926-5.883 10.5-13.9 18.528-24.053 24.083-10.153 5.479-21.919 8.218-35.298 8.218V93.655c22.868 0 34.301-10.957 34.301-32.871 0-8.142-2.04-14.495-6.12-19.061-4.175-4.565-9.963-6.848-17.364-6.848z\"\n            />\n            <path\n                d=\"M157.26.63l80.93 92.991v34.375l-80.764-93.274z\"\n                fill-opacity=\".174\"\n                fill-rule=\"evenodd\"\n            />\n            <path d=\"M279.91.54h26.228v58.661H279.91z\" />\n            <g>\n                <path\n                    d=\"M92.93 37.08q-5.25-2.457-10.499-3.574-5.138-1.229-10.388-1.229-15.414 0-23.791 9.941-8.265 9.83-8.265 28.259v57.634H0V3.011h39.987v20.552q7.707-12.286 17.648-17.871Q67.687-.004 81.649-.004q2.01 0 4.356.223 2.345.112 6.813.67l.112 36.19z\"\n                />\n            </g>\n        </svg>\n    </div>\n\n    <table id=\"nav-table\">\n        <tr>\n            <td\n                (click)=\"\n                    goTo(\n                        'https://www.youtube.com/channel/UCmO2-0zBQhcXXjPcLEfk-Iw'\n                    )\n                \"\n            >\n                <fa-icon [icon]=\"faYoutube\"></fa-icon>\n            </td>\n            <td (click)=\"goTo('https://www.instagram.com/rajplaystheguitar/')\">\n                <fa-icon [icon]=\"faInstagram\"></fa-icon>\n            </td>\n            <td (click)=\"goTo('https://www.linkedin.com/in/raj-saha/')\">\n                <fa-icon [icon]=\"faLinkedin\"></fa-icon>\n            </td>\n            <td (click)=\"goTo('https://github.com/rajsaha')\">\n                <fa-icon [icon]=\"faGithub\"></fa-icon>\n            </td>\n            <td routerLink=\"/my-music\" routerLinkActive=\"active\">\n                <a>Music</a>\n            </td>\n\n            <td routerLink=\"/projects\" routerLinkActive=\"active\">\n                <a>Projects</a>\n            </td>\n\n            <td routerLink=\"/blog\" routerLinkActive=\"active\">\n              <a>Blog</a>\n            </td>\n        </tr>\n    </table>\n\n    <div\n        class=\"theme-toggle\"\n        (click)=\"checked = !checked; onToggleChange(checked)\"\n    >\n        <fa-icon [icon]=\"fasLightbulb\"></fa-icon>\n    </div>\n</div>\n";

/***/ }),

/***/ 8787:
/*!************************************************************!*\
  !*** ./src/app/layout/main/main.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main\">\n    <app-navigation></app-navigation>\n    <div class=\"main-content\">\n        <div class=\"router\">\n            <main>\n                <router-outlet></router-outlet>\n            </main>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map