(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_blog_blog_module_ts"],{

/***/ 3915:
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.component.html?ngResource */ 1916);
/* harmony import */ var _post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.component.scss?ngResource */ 8595);
/* harmony import */ var _post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




let PostComponent = (_class = class PostComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
PostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-post',
  template: _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], PostComponent);


/***/ }),

/***/ 6727:
/*!***************************************************!*\
  !*** ./src/app/pages/blog/blog-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRoutingModule": () => (/* binding */ BlogRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.component */ 9835);




const routes = [{
  path: '',
  component: _blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent,
  pathMatch: 'full'
}];
let BlogRoutingModule = class BlogRoutingModule {};
BlogRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BlogRoutingModule);


/***/ }),

/***/ 9835:
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _Users_rajsaha_Documents_personal_ng_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _blog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.component.html?ngResource */ 2596);
/* harmony import */ var _blog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component.scss?ngResource */ 5655);
/* harmony import */ var _blog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 982);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);

var _class;






let BlogComponent = (_class = class BlogComponent {
  constructor(mdService, httpClient) {
    this.mdService = mdService;
    this.httpClient = httpClient;
    this.markdownRaw = '';
    this.markdown = '';
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_rajsaha_Documents_personal_ng_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.markdownRaw = yield _this.httpClient.get(`/assets/posts/listeningToMultipleFormControls.md`, {
        responseType: 'text'
      }).toPromise();
      _this.markdown = _this.mdService.parse(_this.markdownRaw);
    })();
  }
}, _class.ctorParameters = () => [{
  type: ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}], _class);
BlogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-blog',
  template: _blog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_blog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownService, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient])], BlogComponent);


/***/ }),

/***/ 6238:
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-routing.module */ 6727);
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.component */ 9835);
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/post/post.component */ 3915);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ 982);
/* harmony import */ var node_modules_marked_marked_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/marked/marked.min.js */ 1022);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);









let BlogModule = class BlogModule {};
BlogModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent, _components_post_post_component__WEBPACK_IMPORTED_MODULE_2__.PostComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_8__.MarkdownModule.forRoot({
    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
  })]
})], BlogModule);


/***/ }),

/***/ 1555:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaySubject": () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 2218);
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler/queue */ 8198);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ 2425);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ 3888);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 9086);
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubjectSubscription */ 1722);






class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
    super();
    this.scheduler = scheduler;
    this._events = [];
    this._infiniteTimeWindow = false;
    this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    this._windowTime = windowTime < 1 ? 1 : windowTime;
    if (windowTime === Number.POSITIVE_INFINITY) {
      this._infiniteTimeWindow = true;
      this.next = this.nextInfiniteTimeWindow;
    } else {
      this.next = this.nextTimeWindow;
    }
  }
  nextInfiniteTimeWindow(value) {
    if (!this.isStopped) {
      const _events = this._events;
      _events.push(value);
      if (_events.length > this._bufferSize) {
        _events.shift();
      }
    }
    super.next(value);
  }
  nextTimeWindow(value) {
    if (!this.isStopped) {
      this._events.push(new ReplayEvent(this._getNow(), value));
      this._trimBufferThenGetEvents();
    }
    super.next(value);
  }
  _subscribe(subscriber) {
    const _infiniteTimeWindow = this._infiniteTimeWindow;
    const _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
    const scheduler = this.scheduler;
    const len = _events.length;
    let subscription;
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__.SubjectSubscription(this, subscriber);
    }
    if (scheduler) {
      subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__.ObserveOnSubscriber(subscriber, scheduler));
    }
    if (_infiniteTimeWindow) {
      for (let i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (let i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }
    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }
    return subscription;
  }
  _getNow() {
    return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__.queue).now();
  }
  _trimBufferThenGetEvents() {
    const now = this._getNow();
    const _bufferSize = this._bufferSize;
    const _windowTime = this._windowTime;
    const _events = this._events;
    const eventsCount = _events.length;
    let spliceCount = 0;
    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }
      spliceCount++;
    }
    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }
    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }
    return _events;
  }
}
class ReplayEvent {
  constructor(time, value) {
    this.time = time;
    this.value = value;
  }
}

/***/ }),

/***/ 5398:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 7269);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 7507);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
  let period = -1;
  if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }
  if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
    const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period,
      subscriber
    });
  });
}
function dispatch(state) {
  const {
    index,
    period,
    subscriber
  } = state;
  subscriber.next(index);
  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }
  state.index = index + 1;
  this.schedule(state, period);
}

/***/ }),

/***/ 9128:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shareReplay": () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ 1555);

function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let config;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    config = configOrBufferSize;
  } else {
    config = {
      bufferSize: configOrBufferSize,
      windowTime,
      refCount: false,
      scheduler
    };
  }
  return source => source.lift(shareReplayOperator(config));
}
function shareReplayOperator({
  bufferSize = Number.POSITIVE_INFINITY,
  windowTime = Number.POSITIVE_INFINITY,
  refCount: useRefCount,
  scheduler
}) {
  let subject;
  let refCount = 0;
  let subscription;
  let hasError = false;
  let isComplete = false;
  return function shareReplayOperation(source) {
    refCount++;
    let innerSub;
    if (!subject || hasError) {
      hasError = false;
      subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(bufferSize, windowTime, scheduler);
      innerSub = subject.subscribe(this);
      subscription = source.subscribe({
        next(value) {
          subject.next(value);
        },
        error(err) {
          hasError = true;
          subject.error(err);
        },
        complete() {
          isComplete = true;
          subscription = undefined;
          subject.complete();
        }
      });
      if (isComplete) {
        subscription = undefined;
      }
    } else {
      innerSub = subject.subscribe(this);
    }
    this.add(() => {
      refCount--;
      innerSub.unsubscribe();
      innerSub = undefined;
      if (subscription && !isComplete && useRefCount && refCount === 0) {
        subscription.unsubscribe();
        subscription = undefined;
        subject = undefined;
      }
    });
  };
}

/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
  return source => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }
  call(subscriber, source) {
    const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }
    return takeUntilSubscriber;
  }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination) {
    super(destination);
    this.seenValue = false;
  }
  notifyNext() {
    this.seenValue = true;
    this.complete();
  }
  notifyComplete() {}
}

/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
  return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}

/***/ }),

/***/ 8595:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5655:
/*!***********************************************************!*\
  !*** ./src/app/pages/blog/blog.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  max-width: 500px;\n  margin-bottom: 15px;\n}\n\nh3.date {\n  font-size: 0.8rem;\n  margin-bottom: 30px;\n}\n\nh3.tags {\n  margin-bottom: 30px;\n}\nh3.tags span {\n  font-size: 0.8rem;\n  padding-right: 15px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/blog/blog.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,mBAAA;AACF;AAAE;EACE,iBAAA;EACA,mBAAA;AAEJ","sourcesContent":["h1 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  max-width: 500px;\n  margin-bottom: 15px;\n}\n\nh3.date {\n  font-size: 0.8rem;\n  margin-bottom: 30px;\n}\n\nh3.tags {\n  margin-bottom: 30px;\n  span {\n    font-size: 0.8rem;\n    padding-right: 15px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1916:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>post works!</p>\n";

/***/ }),

/***/ 2596:
/*!***********************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1>Listening to Multiple Form Controls</h1>\n<h3 class=\"date\">25th August, 2022</h3>\n<h3 class=\"tags\">\n  <span>#angular</span>\n  <span>#webdev</span>\n</h3>\n<markdown\n  class=\"markdown\"\n  [data]=\"markdown\">\n</markdown>\n";

/***/ }),

/***/ 8987:
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2020/http.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": () => (/* binding */ HTTP_INTERCEPTORS),
/* harmony export */   "HttpBackend": () => (/* binding */ HttpBackend),
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpClientJsonpModule": () => (/* binding */ HttpClientJsonpModule),
/* harmony export */   "HttpClientModule": () => (/* binding */ HttpClientModule),
/* harmony export */   "HttpClientXsrfModule": () => (/* binding */ HttpClientXsrfModule),
/* harmony export */   "HttpContext": () => (/* binding */ HttpContext),
/* harmony export */   "HttpContextToken": () => (/* binding */ HttpContextToken),
/* harmony export */   "HttpErrorResponse": () => (/* binding */ HttpErrorResponse),
/* harmony export */   "HttpEventType": () => (/* binding */ HttpEventType),
/* harmony export */   "HttpFeatureKind": () => (/* binding */ HttpFeatureKind),
/* harmony export */   "HttpHandler": () => (/* binding */ HttpHandler),
/* harmony export */   "HttpHeaderResponse": () => (/* binding */ HttpHeaderResponse),
/* harmony export */   "HttpHeaders": () => (/* binding */ HttpHeaders),
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "HttpRequest": () => (/* binding */ HttpRequest),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse),
/* harmony export */   "HttpResponseBase": () => (/* binding */ HttpResponseBase),
/* harmony export */   "HttpUrlEncodingCodec": () => (/* binding */ HttpUrlEncodingCodec),
/* harmony export */   "HttpXhrBackend": () => (/* binding */ HttpXhrBackend),
/* harmony export */   "HttpXsrfTokenExtractor": () => (/* binding */ HttpXsrfTokenExtractor),
/* harmony export */   "JsonpClientBackend": () => (/* binding */ JsonpClientBackend),
/* harmony export */   "JsonpInterceptor": () => (/* binding */ JsonpInterceptor),
/* harmony export */   "XhrFactory": () => (/* binding */ XhrFactory),
/* harmony export */   "provideHttpClient": () => (/* binding */ provideHttpClient),
/* harmony export */   "withInterceptors": () => (/* binding */ withInterceptors),
/* harmony export */   "withInterceptorsFromDi": () => (/* binding */ withInterceptorsFromDi),
/* harmony export */   "withJsonpSupport": () => (/* binding */ withJsonpSupport),
/* harmony export */   "withNoXsrfProtection": () => (/* binding */ withNoXsrfProtection),
/* harmony export */   "withRequestsMadeViaParent": () => (/* binding */ withRequestsMadeViaParent),
/* harmony export */   "withXsrfConfiguration": () => (/* binding */ withXsrfConfiguration),
/* harmony export */   "ɵHttpInterceptingHandler": () => (/* binding */ HttpInterceptorHandler),
/* harmony export */   "ɵHttpInterceptorHandler": () => (/* binding */ HttpInterceptorHandler)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/**
 * @license Angular v15.2.9
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */








/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
class HttpHandler {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {}

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */
    this.lazyUpdate = null;
    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');
          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);
            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = new Map();
        Object.entries(headers).forEach(([name, values]) => {
          let headerValues;
          if (typeof values === 'string') {
            headerValues = [values];
          } else if (typeof values === 'number') {
            headerValues = [values.toString()];
          } else {
            headerValues = values.map(value => value.toString());
          }
          if (headerValues.length > 0) {
            const key = name.toLowerCase();
            this.headers.set(key, headerValues);
            this.maybeSetNormalizedName(name, key);
          }
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */
  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */
  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;
        if (typeof value === 'string') {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;
      case 'd':
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter(value => toDelete.indexOf(value) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  /**
   * @internal
   */
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
}
/**
 * Verifies that the headers object has the right shape: the values
 * must be either strings, numbers or arrays. Throws an error if an invalid
 * header value is present.
 */
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === 'string' || typeof value === 'number') && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. ` + `Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}
function paramParser(rawParams, codec) {
  const map = new Map();
  if (rawParams.length > 0) {
    // The `window.location.search` can be used while creating an instance of the `HttpParams` class
    // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
    // may start with the `?` char, so we strip it if it's present.
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }
  return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */
const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key];
        // convert the values to strings
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */
  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */
  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */
  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */
  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key);
      // `a: ['1']` produces `'a=1'`
      // `b: []` produces `''`
      // `c: ['1', '2']` produces `'c=1&c=2'`
      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    })
    // filter out empty values because `b: []` produces `''`
    // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
    .filter(param => param !== '').join('&');
  }
  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;
          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base.splice(idx, 1);
              }
              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
}

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
class HttpContextToken {
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }
}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */
class HttpContext {
  constructor() {
    this.map = new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys() {
    return this.map.keys();
  }
}

/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;
    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */
    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */
    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */
    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */
    this.responseType = 'json';
    this.method = method.toUpperCase();
    // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.
    let options;
    // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.
    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    }
    // If options have been passed, interpret them.
    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      // Override default response type of 'json' if one is provided.
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      // Override headers if they're provided.
      if (!!options.headers) {
        this.headers = options.headers;
      }
      if (!!options.context) {
        this.context = options.context;
      }
      if (!!options.params) {
        this.params = options.params;
      }
    }
    // If no headers have been passed in, construct a new HttpHeaders instance.
    if (!this.headers) {
      this.headers = new HttpHeaders();
    }
    // If no context have been passed in, construct a new HttpContext instance.
    if (!this.context) {
      this.context = new HttpContext();
    }
    // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      const params = this.params.toString();
      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        const qIdx = url.indexOf('?');
        // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.
        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */
  serializeBody() {
    // If no body is present, no need to serialize it.
    if (this.body === null) {
      return null;
    }
    // Check whether the body is already in a serialized form. If so,
    // it can just be returned directly.
    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body) || typeof this.body === 'string') {
      return this.body;
    }
    // Check whether the body is an instance of HttpUrlEncodedParams.
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    // Check whether the body is an object or array, and serialize with JSON if so.
    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    // Fall back on toString() for everything else.
    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */
  detectContentTypeHeader() {
    // An empty body has no content type.
    if (this.body === null) {
      return null;
    }
    // FormData bodies rely on the browser's content type assignment.
    if (isFormData(this.body)) {
      return null;
    }
    // Blobs usually have their own content type. If it doesn't, then
    // no type can be inferred.
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    // Array buffers have unknown contents and thus no type can be inferred.
    if (isArrayBuffer(this.body)) {
      return null;
    }
    // Technically, strings could be a form of JSON data, but it's safe enough
    // to assume they're plain strings.
    if (typeof this.body === 'string') {
      return 'text/plain';
    }
    // `HttpUrlEncodedParams` has its own content-type.
    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    // Arrays, objects, boolean and numbers will be encoded as JSON.
    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return 'application/json';
    }
    // No type could be inferred.
    return null;
  }
  clone(update = {}) {
    // For method, url, and responseType, take the current value unless
    // it is overridden in the update hash.
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    // The body is somewhat special - a `null` value in update.body means
    // whatever current body is present is being overridden with an empty
    // body, whereas an `undefined` value in update.body implies no
    // override.
    const body = update.body !== undefined ? update.body : this.body;
    // Carefully handle the boolean options to differentiate between
    // `false` and `undefined` in the update args.
    const withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
    const reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress;
    // Headers and params may be appended to if `setHeaders` or
    // `setParams` are used.
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    // Pass on context if needed
    const context = update.context ?? this.context;
    // Check whether the caller has asked to add headers.
    if (update.setHeaders !== undefined) {
      // Set every requested header.
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    }
    // Check whether the caller has asked to set params.
    if (update.setParams) {
      // Set every requested param.
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    }
    // Finally, construct the new HttpRequest using the pieces from above.
    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials
    });
  }
}

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   */
  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */
  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */
  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */
  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */
  HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200 /* HttpStatusCode.Ok */, defaultStatusText = 'OK') {
    // If the hash has values passed, use them to initialize the response.
    // Otherwise use the default values.
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    // Cache the ok value to avoid defining a getter.
    this.ok = this.status >= 200 && this.status < 300;
  }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */
  clone(update = {}) {
    // Perform a straightforward initialization of the new HttpHeaderResponse,
    // overriding the current parameters with new ones if given.
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== undefined ? init.body : null;
  }
  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
  constructor(init) {
    // Initialize with a default status of 0 / Unknown Error.
    super(init, 0, 'Unknown Error');
    this.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */
    this.ok = false;
    // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
}

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/tour-of-heroes/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
class HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */
  request(first, url, options = {}) {
    let req;
    // First, check whether the primary argument is an instance of `HttpRequest`.
    if (first instanceof HttpRequest) {
      // It is. The other arguments must be undefined (per the signatures) and can be
      // ignored.
      req = first;
    } else {
      // It's a string, so it represents a URL. Construct a request based on it,
      // and incorporate the remaining arguments (assuming `GET` unless a method is
      // provided.
      // Figure out the headers.
      let headers = undefined;
      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      }
      // Sort out parameters.
      let params = undefined;
      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      }
      // Construct the request.
      req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || 'json',
        withCredentials: options.withCredentials
      });
    }
    // Start with an Observable.of() the initial request, and run the handler (which
    // includes all interceptors) inside a concatMap(). This way, the handler runs
    // inside an Observable chain, which causes interceptors to be re-run on every
    // subscription (this also makes retries re-run the handler, including interceptors).
    const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(req => this.handler.handle(req)));
    // If coming via the API signature which accepts a previously constructed HttpRequest,
    // the only option is to get the event stream. Otherwise, return the event stream if
    // that is what was requested.
    if (first instanceof HttpRequest || options.observe === 'events') {
      return events$;
    }
    // The requested stream contains either the full response or the body. In either
    // case, the first step is to filter the event stream to extract a stream of
    // responses(s).
    const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof HttpResponse));
    // Decide which stream to return.
    switch (options.observe || 'body') {
      case 'body':
        // The requested stream is the body. Map the response stream to the response
        // body. This could be done more simply, but a misbehaving interceptor might
        // transform the response body into a different format and ignore the requested
        // responseType. Guard against this by validating that the response is of the
        // requested type.
        switch (req.responseType) {
          case 'arraybuffer':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is an ArrayBuffer.
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error('Response is not an ArrayBuffer.');
              }
              return res.body;
            }));
          case 'blob':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a Blob.
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error('Response is not a Blob.');
              }
              return res.body;
            }));
          case 'text':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a string.
              if (res.body !== null && typeof res.body !== 'string') {
                throw new Error('Response is not a string.');
              }
              return res.body;
            }));
          case 'json':
          default:
            // No validation needed for JSON responses, as they can be of any type.
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.body));
        }
      case 'response':
        // The response stream was requested directly, so return it.
        return res$;
      default:
        // Guard against new future observe types being added.
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */
  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  get(url, options = {}) {
    return this.request('GET', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */
  head(url, options = {}) {
    return this.request('HEAD', url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */
  jsonp(url, callbackParam) {
    return this.request('JSONP', url, {
      params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json'
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */
  options(url, options = {}) {
    return this.request('OPTIONS', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  patch(url, body, options = {}) {
    return this.request('PATCH', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */
  post(url, body, options = {}) {
    return this.request('POST', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */
  put(url, body, options = {}) {
    return this.request('PUT', url, addBody(options, body));
  }
}
HttpClient.ɵfac = function HttpClient_Factory(t) {
  return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpHandler));
};
HttpClient.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpClient,
  factory: HttpClient.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClient, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpHandler
    }];
  }, null);
})();
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
/**
 * Constructs a `ChainedInterceptorFn` which adapts a legacy `HttpInterceptor` to the
 * `ChainedInterceptorFn` interface.
 */
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
/**
 * Constructs a `ChainedInterceptorFn` which wraps and invokes a functional interceptor in the given
 * injector.
 */
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  // clang-format off
  return (initialRequest, finalHandlerFn) => injector.runInContext(() => interceptorFn(initialRequest, downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)));
  // clang-format on
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');
/**
 * A multi-provided token of `HttpInterceptorFn`s.
 */
const HTTP_INTERCEPTOR_FNS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTOR_FNS');
/**
 * Creates an `HttpInterceptorFn` which lazily initializes an interceptor chain from the legacy
 * class-based interceptors and runs the request through it.
 */
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      // Note: interceptors are wrapped right-to-left so that final execution order is
      // left-to-right. That is, if `interceptors` is the array `[a, b, c]`, we want to
      // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
      // out.
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    return chain(req, handler);
  };
}
class HttpInterceptorHandler extends HttpHandler {
  constructor(backend, injector) {
    super();
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
  }
  handle(initialRequest) {
    if (this.chain === null) {
      const dedupedInterceptorFns = Array.from(new Set(this.injector.get(HTTP_INTERCEPTOR_FNS)));
      // Note: interceptors are wrapped right-to-left so that final execution order is
      // left-to-right. That is, if `dedupedInterceptorFns` is the array `[a, b, c]`, we want to
      // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
      // out.
      this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
    }
    return this.chain(initialRequest, downstreamRequest => this.backend.handle(downstreamRequest));
  }
}
HttpInterceptorHandler.ɵfac = function HttpInterceptorHandler_Factory(t) {
  return new (t || HttpInterceptorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector));
};
HttpInterceptorHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpInterceptorHandler,
  factory: HttpInterceptorHandler.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptorHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector
    }];
  }, null);
})();

// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
/**
 * When a pending <script> is unsubscribed we'll move it to this document, so it won't be
 * executed.
 */
let foreignDocument;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
// Error text given when a request is passed to the JsonpClientBackend that has
// headers set
const JSONP_ERR_HEADERS_NOT_SUPPORTED = 'JSONP requests do not support headers.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }
  return {};
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see {@link HttpHandler}
 * @see {@link HttpXhrBackend}
 *
 * @publicApi
 */
class JsonpClientBackend {
  constructor(callbackMap, document) {
    this.callbackMap = callbackMap;
    this.document = document;
    /**
     * A resolved promise that can be used to schedule microtasks in the event handlers.
     */
    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */
  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */
  handle(req) {
    // Firstly, check both the method and response type. If either doesn't match
    // then the request was improperly routed here and cannot be handled.
    if (req.method !== 'JSONP') {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== 'json') {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    }
    // Check the request headers. JSONP doesn't support headers and
    // cannot set any that were supplied.
    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    }
    // Everything else happens inside the Observable boundary.
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // The first step to make a request is to generate the callback name, and replace the
      // callback placeholder in the URL with the name. Care has to be taken here to ensure
      // a trailing &, if matched, gets inserted back into the URL in the correct place.
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
      // Construct the <script> tag and point it at the URL.
      const node = this.document.createElement('script');
      node.src = url;
      // A JSONP request requires waiting for multiple callbacks. These variables
      // are closed over and track state across those callbacks.
      // The response object, if one has been received, or null otherwise.
      let body = null;
      // Whether the response callback has been called.
      let finished = false;
      // Set the response callback in this.callbackMap (which will be the window
      // object in the browser. The script being loaded via the <script> tag will
      // eventually call this callback.
      this.callbackMap[callback] = data => {
        // Data has been received from the JSONP script. Firstly, delete this callback.
        delete this.callbackMap[callback];
        // Set state to indicate data was received.
        body = data;
        finished = true;
      };
      // cleanup() is a utility closure that removes the <script> from the page and
      // the response callback from the window. This logic is used in both the
      // success, error, and cancellation paths, so it's extracted out for convenience.
      const cleanup = () => {
        // Remove the <script> tag if it's still on the page.
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        // Remove the response callback from the callbackMap (window object in the
        // browser).
        delete this.callbackMap[callback];
      };
      // onLoad() is the success callback which runs after the response callback
      // if the JSONP script loads successfully. The event itself is unimportant.
      // If something went wrong, onLoad() may run without the response callback
      // having been invoked.
      const onLoad = event => {
        // We wrap it in an extra Promise, to ensure the microtask
        // is scheduled after the loaded endpoint has executed any potential microtask itself,
        // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
        this.resolvedPromise.then(() => {
          // Cleanup the page.
          cleanup();
          // Check whether the response callback has run.
          if (!finished) {
            // It hasn't, something went wrong with the request. Return an error via
            // the Observable error path. All JSONP errors have status 0.
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: 'JSONP Error',
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          }
          // Success. body either contains the response body or null if none was
          // returned.
          observer.next(new HttpResponse({
            body,
            status: 200 /* HttpStatusCode.Ok */,
            statusText: 'OK',
            url
          }));
          // Complete the stream, the response is over.
          observer.complete();
        });
      };
      // onError() is the error callback, which runs if the script returned generates
      // a Javascript error. It emits the error via the Observable error channel as
      // a HttpErrorResponse.
      const onError = error => {
        cleanup();
        // Wrap the error in a HttpErrorResponse.
        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: 'JSONP Error',
          url
        }));
      };
      // Subscribe to both the success (load) and error events on the <script> tag,
      // and add it to the page.
      node.addEventListener('load', onLoad);
      node.addEventListener('error', onError);
      this.document.body.appendChild(node);
      // The request has now been successfully sent.
      observer.next({
        type: HttpEventType.Sent
      });
      // Cancellation handler.
      return () => {
        if (!finished) {
          this.removeListeners(node);
        }
        // And finally, clean up the page.
        cleanup();
      };
    });
  }
  removeListeners(script) {
    // Issue #34818
    // Changing <script>'s ownerDocument will prevent it from execution.
    // https://html.spec.whatwg.org/multipage/scripting.html#execute-the-script-block
    if (!foreignDocument) {
      foreignDocument = this.document.implementation.createHTMLDocument();
    }
    foreignDocument.adoptNode(script);
  }
}
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
  return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};
JsonpClientBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpClientBackend,
  factory: JsonpClientBackend.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpClientBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpCallbackContext
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Identifies requests with the method JSONP and shifts them to the `JsonpClientBackend`.
 */
function jsonpInterceptorFn(req, next) {
  if (req.method === 'JSONP') {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(JsonpClientBackend).handle(req);
  }
  // Fall through for normal HTTP requests.
  return next(req);
}
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see {@link HttpInterceptor}
 *
 * @publicApi
 */
class JsonpInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param initialRequest The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(initialRequest, next) {
    return this.injector.runInContext(() => jsonpInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
  }
}
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
  return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector));
};
JsonpInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpInterceptor,
  factory: JsonpInterceptor.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector
    }];
  }, null);
})();
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }
  return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see {@link HttpHandler}
 * @see {@link JsonpClientBackend}
 *
 * @publicApi
 */
class HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */
  handle(req) {
    // Quick check to give a better error message when a user attempts to use
    // HttpClient.jsonp() without installing the HttpClientJsonpModule
    if (req.method === 'JSONP') {
      throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
    }
    // Everything happens on Observable subscription.
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // Start by setting up the XHR object with request method, URL, and withCredentials flag.
      const xhr = this.xhrFactory.build();
      xhr.open(req.method, req.urlWithParams);
      if (!!req.withCredentials) {
        xhr.withCredentials = true;
      }
      // Add all the requested headers.
      req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
      // Add an Accept header if one isn't present already.
      if (!req.headers.has('Accept')) {
        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      }
      // Auto-detect the Content-Type header if one isn't present already.
      if (!req.headers.has('Content-Type')) {
        const detectedType = req.detectContentTypeHeader();
        // Sometimes Content-Type detection fails.
        if (detectedType !== null) {
          xhr.setRequestHeader('Content-Type', detectedType);
        }
      }
      // Set the responseType if one was requested.
      if (req.responseType) {
        const responseType = req.responseType.toLowerCase();
        // JSON responses need to be processed as text. This is because if the server
        // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
        // xhr.response will be null, and xhr.responseText cannot be accessed to
        // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
        // is parsed by first requesting text and then applying JSON.parse.
        xhr.responseType = responseType !== 'json' ? responseType : 'text';
      }
      // Serialize the request body if one is present. If not, this will be set to null.
      const reqBody = req.serializeBody();
      // If progress events are enabled, response headers will be delivered
      // in two events - the HttpHeaderResponse event and the full HttpResponse
      // event. However, since response headers don't change in between these
      // two events, it doesn't make sense to parse them twice. So headerResponse
      // caches the data extracted from the response whenever it's first parsed,
      // to ensure parsing isn't duplicated.
      let headerResponse = null;
      // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
      // state, and memoizes it into headerResponse.
      const partialFromXhr = () => {
        if (headerResponse !== null) {
          return headerResponse;
        }
        const statusText = xhr.statusText || 'OK';
        // Parse headers from XMLHttpRequest - this step is lazy.
        const headers = new HttpHeaders(xhr.getAllResponseHeaders());
        // Read the response URL from the XMLHttpResponse instance and fall back on the
        // request URL.
        const url = getResponseUrl(xhr) || req.url;
        // Construct the HttpHeaderResponse and memoize it.
        headerResponse = new HttpHeaderResponse({
          headers,
          status: xhr.status,
          statusText,
          url
        });
        return headerResponse;
      };
      // Next, a few closures are defined for the various events which XMLHttpRequest can
      // emit. This allows them to be unregistered as event listeners later.
      // First up is the load event, which represents a response being fully available.
      const onLoad = () => {
        // Read response state from the memoized partial data.
        let {
          headers,
          status,
          statusText,
          url
        } = partialFromXhr();
        // The body will be read out if present.
        let body = null;
        if (status !== 204 /* HttpStatusCode.NoContent */) {
          // Use XMLHttpRequest.response if set, responseText otherwise.
          body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
        }
        // Normalize another potential bug (this one comes from CORS).
        if (status === 0) {
          status = !!body ? 200 /* HttpStatusCode.Ok */ : 0;
        }
        // ok determines whether the response will be transmitted on the event or
        // error channel. Unsuccessful status codes (not 2xx) will always be errors,
        // but a successful status code can still result in an error if the user
        // asked for JSON data and the body cannot be parsed as such.
        let ok = status >= 200 && status < 300;
        // Check whether the body needs to be parsed as JSON (in many cases the browser
        // will have done that already).
        if (req.responseType === 'json' && typeof body === 'string') {
          // Save the original body, before attempting XSSI prefix stripping.
          const originalBody = body;
          body = body.replace(XSSI_PREFIX, '');
          try {
            // Attempt the parse. If it fails, a parse error should be delivered to the user.
            body = body !== '' ? JSON.parse(body) : null;
          } catch (error) {
            // Since the JSON.parse failed, it's reasonable to assume this might not have been a
            // JSON response. Restore the original body (including any XSSI prefix) to deliver
            // a better error response.
            body = originalBody;
            // If this was an error request to begin with, leave it as a string, it probably
            // just isn't JSON. Otherwise, deliver the parsing error to the user.
            if (ok) {
              // Even though the response status was 2xx, this is still an error.
              ok = false;
              // The parse error contains the text of the body that failed to parse.
              body = {
                error,
                text: body
              };
            }
          }
        }
        if (ok) {
          // A successful response is delivered on the event stream.
          observer.next(new HttpResponse({
            body,
            headers,
            status,
            statusText,
            url: url || undefined
          }));
          // The full body has been received and delivered, no further events
          // are possible. This request is complete.
          observer.complete();
        } else {
          // An unsuccessful request is delivered on the error channel.
          observer.error(new HttpErrorResponse({
            // The error in this case is the response body (error from the server).
            error: body,
            headers,
            status,
            statusText,
            url: url || undefined
          }));
        }
      };
      // The onError callback is called when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc. These are actual errors, and are
      // transmitted on the error channel.
      const onError = error => {
        const {
          url
        } = partialFromXhr();
        const res = new HttpErrorResponse({
          error,
          status: xhr.status || 0,
          statusText: xhr.statusText || 'Unknown Error',
          url: url || undefined
        });
        observer.error(res);
      };
      // The sentHeaders flag tracks whether the HttpResponseHeaders event
      // has been sent on the stream. This is necessary to track if progress
      // is enabled since the event will be sent on only the first download
      // progress event.
      let sentHeaders = false;
      // The download progress event handler, which is only registered if
      // progress events are enabled.
      const onDownProgress = event => {
        // Send the HttpResponseHeaders event if it hasn't been sent already.
        if (!sentHeaders) {
          observer.next(partialFromXhr());
          sentHeaders = true;
        }
        // Start building the download progress event to deliver on the response
        // event stream.
        let progressEvent = {
          type: HttpEventType.DownloadProgress,
          loaded: event.loaded
        };
        // Set the total number of bytes in the event if it's available.
        if (event.lengthComputable) {
          progressEvent.total = event.total;
        }
        // If the request was for text content and a partial response is
        // available on XMLHttpRequest, include it in the progress event
        // to allow for streaming reads.
        if (req.responseType === 'text' && !!xhr.responseText) {
          progressEvent.partialText = xhr.responseText;
        }
        // Finally, fire the event.
        observer.next(progressEvent);
      };
      // The upload progress event handler, which is only registered if
      // progress events are enabled.
      const onUpProgress = event => {
        // Upload progress events are simpler. Begin building the progress
        // event.
        let progress = {
          type: HttpEventType.UploadProgress,
          loaded: event.loaded
        };
        // If the total number of bytes being uploaded is available, include
        // it.
        if (event.lengthComputable) {
          progress.total = event.total;
        }
        // Send the event.
        observer.next(progress);
      };
      // By default, register for load and error events.
      xhr.addEventListener('load', onLoad);
      xhr.addEventListener('error', onError);
      xhr.addEventListener('timeout', onError);
      xhr.addEventListener('abort', onError);
      // Progress events are only enabled if requested.
      if (req.reportProgress) {
        // Download progress is always enabled if requested.
        xhr.addEventListener('progress', onDownProgress);
        // Upload progress depends on whether there is a body to upload.
        if (reqBody !== null && xhr.upload) {
          xhr.upload.addEventListener('progress', onUpProgress);
        }
      }
      // Fire the request, and notify the event stream that it was fired.
      xhr.send(reqBody);
      observer.next({
        type: HttpEventType.Sent
      });
      // This is the return from the Observable function, which is the
      // request cancellation handler.
      return () => {
        // On a cancellation, remove all registered event listeners.
        xhr.removeEventListener('error', onError);
        xhr.removeEventListener('abort', onError);
        xhr.removeEventListener('load', onLoad);
        xhr.removeEventListener('timeout', onError);
        if (req.reportProgress) {
          xhr.removeEventListener('progress', onDownProgress);
          if (reqBody !== null && xhr.upload) {
            xhr.upload.removeEventListener('progress', onUpProgress);
          }
        }
        // Finally, abort the in-flight request.
        if (xhr.readyState !== xhr.DONE) {
          xhr.abort();
        }
      };
    });
  }
}
HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
  return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory));
};
HttpXhrBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXhrBackend,
  factory: HttpXhrBackend.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXhrBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory
    }];
  }, null);
})();
const XSRF_ENABLED = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_ENABLED');
const XSRF_DEFAULT_COOKIE_NAME = 'XSRF-TOKEN';
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME', {
  providedIn: 'root',
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
const XSRF_DEFAULT_HEADER_NAME = 'X-XSRF-TOKEN';
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME', {
  providedIn: 'root',
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = '';
    this.lastToken = null;
    /**
     * @internal for testing
     */
    this.parseCount = 0;
  }
  getToken() {
    if (this.platform === 'server') {
      return null;
    }
    const cookieString = this.doc.cookie || '';
    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }
    return this.lastToken;
  }
}
HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
  return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME));
};
HttpXsrfCookieExtractor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfCookieExtractor,
  factory: HttpXsrfCookieExtractor.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_COOKIE_NAME]
      }]
    }];
  }, null);
})();
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  // Skip both non-mutating requests and absolute URLs.
  // Non-mutating requests don't require a token, and absolute URLs require special handling
  // anyway as the cookie set
  // on our origin is not the same as the token expected by another origin.
  if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(XSRF_ENABLED) || req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
    return next(req);
  }
  const token = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(HttpXsrfTokenExtractor).getToken();
  const headerName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(XSRF_HEADER_NAME);
  // Be careful not to overwrite an existing header of the same name.
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  intercept(initialRequest, next) {
    return this.injector.runInContext(() => xsrfInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
  }
}
HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
  return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector));
};
HttpXsrfInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfInterceptor,
  factory: HttpXsrfInterceptor.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector
    }];
  }, null);
})();

/**
 * Identifies a particular kind of `HttpFeature`.
 *
 * @publicApi
 */
var HttpFeatureKind;
(function (HttpFeatureKind) {
  HttpFeatureKind[HttpFeatureKind["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind[HttpFeatureKind["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind[HttpFeatureKind["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind[HttpFeatureKind["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind[HttpFeatureKind["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind[HttpFeatureKind["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
/**
 * Configures Angular's `HttpClient` service to be available for injection.
 *
 * By default, `HttpClient` will be configured for injection with its default options for XSRF
 * protection of outgoing requests. Additional configuration options can be provided by passing
 * feature functions to `provideHttpClient`. For example, HTTP interceptors can be added using the
 * `withInterceptors(...)` feature.
 *
 * @see {@link withInterceptors}
 * @see {@link withInterceptorsFromDi}
 * @see {@link withXsrfConfiguration}
 * @see {@link withNoXsrfProtection}
 * @see {@link withJsonpSupport}
 * @see {@link withRequestsMadeViaParent}
 */
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map(f => f.ɵkind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : '');
    }
  }
  const providers = [HttpClient, HttpXhrBackend, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }, {
    provide: XSRF_ENABLED,
    useValue: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }];
  for (const feature of features) {
    providers.push(...feature.ɵproviders);
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.makeEnvironmentProviders)(providers);
}
/**
 * Adds one or more functional-style HTTP interceptors to the configuration of the `HttpClient`
 * instance.
 *
 * @see {@link HttpInterceptorFn}
 * @see {@link provideHttpClient}
 * @publicApi
 */
function withInterceptors(interceptorFns) {
  return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map(interceptorFn => {
    return {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: interceptorFn,
      multi: true
    };
  }));
}
const LEGACY_INTERCEPTOR_FN = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('LEGACY_INTERCEPTOR_FN');
/**
 * Includes class-based interceptors configured using a multi-provider in the current injector into
 * the configured `HttpClient` instance.
 *
 * Prefer `withInterceptors` and functional interceptors instead, as support for DI-provided
 * interceptors may be phased out in a later release.
 *
 * @see {@link HttpInterceptor}
 * @see {@link HTTP_INTERCEPTORS}
 * @see {@link provideHttpClient}
 */
function withInterceptorsFromDi() {
  // Note: the legacy interceptor function is provided here via an intermediate token
  // (`LEGACY_INTERCEPTOR_FN`), using a pattern which guarantees that if these providers are
  // included multiple times, all of the multi-provider entries will have the same instance of the
  // interceptor function. That way, the `HttpINterceptorHandler` will dedup them and legacy
  // interceptors will not run multiple times.
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
/**
 * Customizes the XSRF protection for the configuration of the current `HttpClient` instance.
 *
 * This feature is incompatible with the `withNoXsrfProtection` feature.
 *
 * @see {@link provideHttpClient}
 */
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== undefined) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== undefined) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
/**
 * Disables XSRF protection in the configuration of the current `HttpClient` instance.
 *
 * This feature is incompatible with the `withXsrfConfiguration` feature.
 *
 * @see {@link provideHttpClient}
 */
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
/**
 * Add JSONP support to the configuration of the current `HttpClient` instance.
 *
 * @see {@link provideHttpClient}
 */
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
/**
 * Configures the current `HttpClient` instance to make requests via the parent injector's
 * `HttpClient` instead of directly.
 *
 * By default, `provideHttpClient` configures `HttpClient` in its injector to be an independent
 * instance. For example, even if `HttpClient` is configured in the parent injector with
 * one or more interceptors, they will not intercept requests made via this instance.
 *
 * With this option enabled, once the request has passed through the current injector's
 * interceptors, it will be delegated to the parent injector's `HttpClient` chain instead of
 * dispatched directly, and interceptors in the parent configuration will be applied to the request.
 *
 * If there are several `HttpClient` instances in the injector hierarchy, it's possible for
 * `withRequestsMadeViaParent` to be used at multiple levels, which will cause the request to
 * "bubble up" until either reaching the root level or an `HttpClient` which was not configured with
 * this option.
 *
 * @see {@link provideHttpClient}
 * @developerPreview
 */
function withRequestsMadeViaParent() {
  return makeHttpFeature(HttpFeatureKind.RequestsMadeViaParent, [{
    provide: HttpBackend,
    useFactory: () => {
      const handlerFromParent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(HttpHandler, {
        skipSelf: true,
        optional: true
      });
      if (ngDevMode && handlerFromParent === null) {
        throw new Error('withRequestsMadeViaParent() can only be used when the parent injector also configures HttpClient');
      }
      return handlerFromParent;
    }
  }]);
}

/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [withNoXsrfProtection().ɵproviders]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */
  static withOptions(options = {}) {
    return {
      ngModule: HttpClientXsrfModule,
      providers: withXsrfConfiguration(options).ɵproviders
    };
  }
}
HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
  return new (t || HttpClientXsrfModule)();
};
HttpClientXsrfModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientXsrfModule
});
HttpClientXsrfModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpXsrfInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useExisting: HttpXsrfInterceptor,
    multi: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }, withXsrfConfiguration({
    cookieName: XSRF_DEFAULT_COOKIE_NAME,
    headerName: XSRF_DEFAULT_HEADER_NAME
  }).ɵproviders, {
    provide: XSRF_ENABLED,
    useValue: true
  }]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).ɵproviders, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {}
HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
  return new (t || HttpClientModule)();
};
HttpClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientModule
});
HttpClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [provideHttpClient(withInterceptorsFromDi())]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * @publicApi
 */
class HttpClientJsonpModule {}
HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
  return new (t || HttpClientJsonpModule)();
};
HttpClientJsonpModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientJsonpModule
});
HttpClientJsonpModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [withJsonpSupport().ɵproviders]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [withJsonpSupport().ɵproviders]
    }]
  }], null, null);
})();

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */
const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4611:
/*!***********************************************!*\
  !*** ./node_modules/marked/lib/marked.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer),
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "Renderer": () => (/* binding */ Renderer),
/* harmony export */   "Slugger": () => (/* binding */ Slugger),
/* harmony export */   "TextRenderer": () => (/* binding */ TextRenderer),
/* harmony export */   "Tokenizer": () => (/* binding */ Tokenizer),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "getDefaults": () => (/* binding */ getDefaults),
/* harmony export */   "lexer": () => (/* binding */ lexer),
/* harmony export */   "marked": () => (/* binding */ marked),
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseInline": () => (/* binding */ parseInline),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "setOptions": () => (/* binding */ setOptions),
/* harmony export */   "use": () => (/* binding */ use),
/* harmony export */   "walkTokens": () => (/* binding */ walkTokens)
/* harmony export */ });
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = ch => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}
const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;
  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}
const noopTest = {
  exec: function noopTest() {}
};
function merge(obj) {
  let i = 1,
    target,
    key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }
  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');
  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split('\n').map(node => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic ? rtrim(text, '\n') : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');
      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found code fences
            if (fencesBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new heading
            if (headingBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) {
              // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else {
              // Otherwise, improper indentation ends this item
              break;
            }
            if (!blankLine && !line.trim()) {
              // Check if current line is blank
              blankLine = true;
            }
            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }
        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => {
          return {
            text: c
          };
        }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => {
            return {
              text: c
            };
          });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? 'text' : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!/>$/.test(trimmedUrl)) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
    const nextChar = match[1] || match[2] || '';
    if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;
        if (match[3] || match[4]) {
          // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;
        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }
  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }
  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },

  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
  // em-dashes
  .replace(/---/g, '\u2014')
  // en-dashes
  .replace(/--/g, '\u2013')
  // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
  // closing singles & apostrophes
  .replace(/'/g, '\u2019')
  // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
  // closing doubles
  .replace(/"/g, '\u201d')
  // ellipses
  .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }
  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, '\n');
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') {
          // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, '') + '\n';
    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }
  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }
  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }
  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }
  checkbox(checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }
  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }
  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return '' + text;
  }
  image(href, title, text) {
    return '' + text;
  }
  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value.toLowerCase().trim()
    // remove html tags
    .replace(/<[!\/a-z].*?>/ig, '')
    // remove unwanted chars
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }
      switch (token.type) {
        case 'space':
          {
            continue;
          }
        case 'hr':
          {
            out += this.renderer.hr();
            continue;
          }
        case 'heading':
          {
            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
            continue;
          }
        case 'code':
          {
            out += this.renderer.code(token.text, token.lang, token.escaped);
            continue;
          }
        case 'table':
          {
            header = '';

            // header
            cell = '';
            l2 = token.header.length;
            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                header: true,
                align: token.align[j]
              });
            }
            header += this.renderer.tablerow(cell);
            body = '';
            l2 = token.rows.length;
            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = '';
              l3 = row.length;
              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: token.align[k]
                });
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header, body);
            continue;
          }
        case 'blockquote':
          {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
        case 'list':
          {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = '';
            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = '';
              if (item.task) {
                checkbox = this.renderer.checkbox(checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                      item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: 'text',
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }
            out += this.renderer.list(body, ordered, start);
            continue;
          }
        case 'html':
          {
            // TODO parse inline content if parameter markdown=1
            out += this.renderer.html(token.text);
            continue;
          }
        case 'paragraph':
          {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }
        case 'text':
          {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;
            while (i + 1 < l && tokens[i + 1].type === 'text') {
              token = tokens[++i];
              body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }
            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }
      switch (token.type) {
        case 'escape':
          {
            out += renderer.text(token.text);
            break;
          }
        case 'html':
          {
            out += renderer.html(token.text);
            break;
          }
        case 'link':
          {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }
        case 'image':
          {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }
        case 'strong':
          {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }
        case 'em':
          {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }
        case 'codespan':
          {
            out += renderer.codespan(token.text);
            break;
          }
        case 'br':
          {
            out += renderer.br();
            break;
          }
        case 'del':
          {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }
        case 'text':
          {
            out += renderer.text(token.text);
            break;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }
  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }
    const done = function (err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length) return done();
    let pending = 0;
    marked.walkTokens(tokens, function (token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function (err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function (...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || {
    renderers: {},
    childTokens: {}
  };
  let hasExtensions;
  args.forEach(pack => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach(ext => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) {
          // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function (...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          // Tokenizer Extensions
          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function (token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function (tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table':
        {
          for (const cell of token.header) {
            marked.walkTokens(cell.tokens, callback);
          }
          for (const row of token.rows) {
            for (const cell of row) {
              marked.walkTokens(cell.tokens, callback);
            }
          }
          break;
        }
      case 'list':
        {
          marked.walkTokens(token.items, callback);
          break;
        }
      default:
        {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            // Walk any extensions
            marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
              marked.walkTokens(token[childTokens], callback);
            });
          } else if (token.tokens) {
            marked.walkTokens(token.tokens, callback);
          }
        }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function (src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = Parser.parse;
const lexer = Lexer.lex;


/***/ }),

/***/ 1022:
/*!*******************************************!*\
  !*** ./node_modules/marked/marked.min.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).marked = {});
}(undefined, function (r) {
  "use strict";

  function i(e, t) {
    for (var u = 0; u < t.length; u++) {
      var n = t[u];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
    return n;
  }
  function B(e, t) {
    var u,
      n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = function (e, t) {
      if (e) {
        if ("string" == typeof e) return s(e, t);
        var u = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" === (u = "Object" === u && e.constructor ? e.constructor.name : u) || "Set" === u ? Array.from(e) : "Arguments" === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? s(e, t) : void 0;
      }
    }(e)) || t && e && "number" == typeof e.length) return n && (e = n), u = 0, function () {
      return u >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[u++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function e() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1
    };
  }
  r.defaults = e();
  function u(e) {
    return t[e];
  }
  var n = /[&<>"']/,
    l = /[&<>"']/g,
    a = /[<>"']|&(?!#?\w+;)/,
    o = /[<>"']|&(?!#?\w+;)/g,
    t = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
  function D(e, t) {
    if (t) {
      if (n.test(e)) return e.replace(l, u);
    } else if (a.test(e)) return e.replace(o, u);
    return e;
  }
  var c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function x(e) {
    return e.replace(c, function (e, t) {
      return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
    });
  }
  var h = /(^|[^\[])\^/g;
  function p(u, e) {
    u = "string" == typeof u ? u : u.source, e = e || "";
    var n = {
      replace: function (e, t) {
        return t = (t = t.source || t).replace(h, "$1"), u = u.replace(e, t), n;
      },
      getRegex: function () {
        return new RegExp(u, e);
      }
    };
    return n;
  }
  var f = /[^\w:]/g,
    Z = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function g(e, t, u) {
    if (e) {
      try {
        n = decodeURIComponent(x(u)).replace(f, "").toLowerCase();
      } catch (e) {
        return null;
      }
      if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return null;
    }
    var n;
    t && !Z.test(u) && (e = u, F[" " + (n = t)] || (O.test(n) ? F[" " + n] = n + "/" : F[" " + n] = k(n, "/", !0)), t = -1 === (n = F[" " + n]).indexOf(":"), u = "//" === e.substring(0, 2) ? t ? e : n.replace(q, "$1") + e : "/" === e.charAt(0) ? t ? e : n.replace(L, "$1") + e : n + e);
    try {
      u = encodeURI(u).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return u;
  }
  var F = {},
    O = /^[^:]+:\/*[^/]*$/,
    q = /^([^:]+:)[\s\S]*$/,
    L = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  var A = {
    exec: function () {}
  };
  function d(e) {
    for (var t, u, n = 1; n < arguments.length; n++) for (u in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
    return e;
  }
  function C(e, t) {
    var u = e.replace(/\|/g, function (e, t, u) {
        for (var n = !1, r = t; 0 <= --r && "\\" === u[r];) n = !n;
        return n ? "|" : " |";
      }).split(/ \|/),
      n = 0;
    if (u[0].trim() || u.shift(), 0 < u.length && !u[u.length - 1].trim() && u.pop(), u.length > t) u.splice(t);else for (; u.length < t;) u.push("");
    for (; n < u.length; n++) u[n] = u[n].trim().replace(/\\\|/g, "|");
    return u;
  }
  function k(e, t, u) {
    var n = e.length;
    if (0 === n) return "";
    for (var r = 0; r < n;) {
      var i = e.charAt(n - r - 1);
      if ((i !== t || u) && (i === t || !u)) break;
      r++;
    }
    return e.slice(0, n - r);
  }
  function E(e) {
    e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  function m(e, t) {
    if (t < 1) return "";
    for (var u = ""; 1 < t;) 1 & t && (u += e), t >>= 1, e += e;
    return u + e;
  }
  function b(e, t, u, n) {
    var r = t.href,
      t = t.title ? D(t.title) : null,
      i = e[1].replace(/\\([\[\]])/g, "$1");
    return "!" !== e[0].charAt(0) ? (n.state.inLink = !0, e = {
      type: "link",
      raw: u,
      href: r,
      title: t,
      text: i,
      tokens: n.inlineTokens(i, [])
    }, n.state.inLink = !1, e) : {
      type: "image",
      raw: u,
      href: r,
      title: t,
      text: D(i)
    };
  }
  var w = function () {
      function e(e) {
        this.options = e || r.defaults;
      }
      var t = e.prototype;
      return t.space = function (e) {
        e = this.rules.block.newline.exec(e);
        if (e && 0 < e[0].length) return {
          type: "space",
          raw: e[0]
        };
      }, t.code = function (e) {
        var t,
          e = this.rules.block.code.exec(e);
        if (e) return t = e[0].replace(/^ {1,4}/gm, ""), {
          type: "code",
          raw: e[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? t : k(t, "\n")
        };
      }, t.fences = function (e) {
        var t,
          u,
          e = this.rules.block.fences.exec(e);
        if (e) return u = function (e, t) {
          if (null === (e = e.match(/^(\s+)(?:```)/))) return t;
          var u = e[1];
          return t.split("\n").map(function (e) {
            var t = e.match(/^\s+/);
            return null !== t && t[0].length >= u.length ? e.slice(u.length) : e;
          }).join("\n");
        }(t = e[0], e[3] || ""), {
          type: "code",
          raw: t,
          lang: e[2] && e[2].trim(),
          text: u
        };
      }, t.heading = function (e) {
        var t,
          u,
          e = this.rules.block.heading.exec(e);
        if (e) return t = e[2].trim(), /#$/.test(t) && (u = k(t, "#"), !this.options.pedantic && u && !/ $/.test(u) || (t = u.trim())), u = {
          type: "heading",
          raw: e[0],
          depth: e[1].length,
          text: t,
          tokens: []
        }, this.lexer.inline(u.text, u.tokens), u;
      }, t.hr = function (e) {
        e = this.rules.block.hr.exec(e);
        if (e) return {
          type: "hr",
          raw: e[0]
        };
      }, t.blockquote = function (e) {
        var t,
          e = this.rules.block.blockquote.exec(e);
        if (e) return t = e[0].replace(/^ *>[ \t]?/gm, ""), {
          type: "blockquote",
          raw: e[0],
          tokens: this.lexer.blockTokens(t, []),
          text: t
        };
      }, t.list = function (e) {
        var t = this.rules.block.list.exec(e);
        if (t) {
          var u,
            n,
            r,
            i,
            s,
            l,
            a,
            o,
            D,
            c,
            h,
            p = 1 < (g = t[1].trim()).length,
            f = {
              type: "list",
              raw: "",
              ordered: p,
              start: p ? +g.slice(0, -1) : "",
              loose: !1,
              items: []
            },
            g = p ? "\\d{1,9}\\" + g.slice(-1) : "\\" + g;
          this.options.pedantic && (g = p ? g : "[*+-]");
          for (var F = new RegExp("^( {0,3}" + g + ")((?:[\t ][^\\n]*)?(?:\\n|$))"); e && (h = !1, t = F.exec(e)) && !this.rules.block.hr.test(e);) {
            if (u = t[0], e = e.substring(u.length), a = t[2].split("\n", 1)[0], o = e.split("\n", 1)[0], this.options.pedantic ? (i = 2, c = a.trimLeft()) : (i = t[2].search(/[^ ]/), c = a.slice(i = 4 < i ? 1 : i), i += t[1].length), s = !1, !a && /^ *$/.test(o) && (u += o + "\n", e = e.substring(o.length + 1), h = !0), !h) for (var A = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"), d = new RegExp("^ {0," + Math.min(3, i - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), C = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:```|~~~)"), k = new RegExp("^ {0," + Math.min(3, i - 1) + "}#"); e && (a = D = e.split("\n", 1)[0], this.options.pedantic && (a = a.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !C.test(a)) && !k.test(a) && !A.test(a) && !d.test(e);) {
              if (a.search(/[^ ]/) >= i || !a.trim()) c += "\n" + a.slice(i);else {
                if (s) break;
                c += "\n" + a;
              }
              s || a.trim() || (s = !0), u += D + "\n", e = e.substring(D.length + 1);
            }
            f.loose || (l ? f.loose = !0 : /\n *\n *$/.test(u) && (l = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(c)) && (r = "[ ] " !== n[0], c = c.replace(/^\[[ xX]\] +/, "")), f.items.push({
              type: "list_item",
              raw: u,
              task: !!n,
              checked: r,
              loose: !1,
              text: c
            }), f.raw += u;
          }
          f.items[f.items.length - 1].raw = u.trimRight(), f.items[f.items.length - 1].text = c.trimRight(), f.raw = f.raw.trimRight();
          for (var E = f.items.length, x = 0; x < E; x++) {
            this.lexer.state.top = !1, f.items[x].tokens = this.lexer.blockTokens(f.items[x].text, []);
            var m = f.items[x].tokens.filter(function (e) {
                return "space" === e.type;
              }),
              b = m.every(function (e) {
                for (var t, u = 0, n = B(e.raw.split("")); !(t = n()).done;) if ("\n" === t.value && (u += 1), 1 < u) return !0;
                return !1;
              });
            !f.loose && m.length && b && (f.loose = !0, f.items[x].loose = !0);
          }
          return f;
        }
      }, t.html = function (e) {
        var t,
          e = this.rules.block.html.exec(e);
        if (e) return t = {
          type: "html",
          raw: e[0],
          pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
          text: e[0]
        }, this.options.sanitize && (t.type = "paragraph", t.text = this.options.sanitizer ? this.options.sanitizer(e[0]) : D(e[0]), t.tokens = [], this.lexer.inline(t.text, t.tokens)), t;
      }, t.def = function (e) {
        e = this.rules.block.def.exec(e);
        if (e) return e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), {
          type: "def",
          tag: e[1].toLowerCase().replace(/\s+/g, " "),
          raw: e[0],
          href: e[2],
          title: e[3]
        };
      }, t.table = function (e) {
        e = this.rules.block.table.exec(e);
        if (e) {
          var t = {
            type: "table",
            header: C(e[1]).map(function (e) {
              return {
                text: e
              };
            }),
            align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows: e[3] && e[3].trim() ? e[3].replace(/\n[ \t]*$/, "").split("\n") : []
          };
          if (t.header.length === t.align.length) {
            t.raw = e[0];
            for (var u, n, r, i = t.align.length, s = 0; s < i; s++) /^ *-+: *$/.test(t.align[s]) ? t.align[s] = "right" : /^ *:-+: *$/.test(t.align[s]) ? t.align[s] = "center" : /^ *:-+ *$/.test(t.align[s]) ? t.align[s] = "left" : t.align[s] = null;
            for (i = t.rows.length, s = 0; s < i; s++) t.rows[s] = C(t.rows[s], t.header.length).map(function (e) {
              return {
                text: e
              };
            });
            for (i = t.header.length, u = 0; u < i; u++) t.header[u].tokens = [], this.lexer.inline(t.header[u].text, t.header[u].tokens);
            for (i = t.rows.length, u = 0; u < i; u++) for (r = t.rows[u], n = 0; n < r.length; n++) r[n].tokens = [], this.lexer.inline(r[n].text, r[n].tokens);
            return t;
          }
        }
      }, t.lheading = function (e) {
        var e = this.rules.block.lheading.exec(e);
        if (e) return e = {
          type: "heading",
          raw: e[0],
          depth: "=" === e[2].charAt(0) ? 1 : 2,
          text: e[1],
          tokens: []
        }, this.lexer.inline(e.text, e.tokens), e;
      }, t.paragraph = function (e) {
        var e = this.rules.block.paragraph.exec(e);
        if (e) return e = {
          type: "paragraph",
          raw: e[0],
          text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1],
          tokens: []
        }, this.lexer.inline(e.text, e.tokens), e;
      }, t.text = function (e) {
        var e = this.rules.block.text.exec(e);
        if (e) return e = {
          type: "text",
          raw: e[0],
          text: e[0],
          tokens: []
        }, this.lexer.inline(e.text, e.tokens), e;
      }, t.escape = function (e) {
        e = this.rules.inline.escape.exec(e);
        if (e) return {
          type: "escape",
          raw: e[0],
          text: D(e[1])
        };
      }, t.tag = function (e) {
        e = this.rules.inline.tag.exec(e);
        if (e) return !this.lexer.state.inLink && /^<a /i.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
          type: this.options.sanitize ? "text" : "html",
          raw: e[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : D(e[0]) : e[0]
        };
      }, t.link = function (e) {
        e = this.rules.inline.link.exec(e);
        if (e) {
          var t = e[2].trim();
          if (!this.options.pedantic && /^</.test(t)) {
            if (!/>$/.test(t)) return;
            var u = k(t.slice(0, -1), "\\");
            if ((t.length - u.length) % 2 == 0) return;
          } else {
            u = function (e, t) {
              if (-1 !== e.indexOf(t[1])) for (var u = e.length, n = 0, r = 0; r < u; r++) if ("\\" === e[r]) r++;else if (e[r] === t[0]) n++;else if (e[r] === t[1] && --n < 0) return r;
              return -1;
            }(e[2], "()");
            -1 < u && (r = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + u, e[2] = e[2].substring(0, u), e[0] = e[0].substring(0, r).trim(), e[3] = "");
          }
          var n,
            u = e[2],
            r = "";
          return this.options.pedantic ? (n = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u)) && (u = n[1], r = n[3]) : r = e[3] ? e[3].slice(1, -1) : "", u = u.trim(), b(e, {
            href: (u = /^</.test(u) ? this.options.pedantic && !/>$/.test(t) ? u.slice(1) : u.slice(1, -1) : u) && u.replace(this.rules.inline._escapes, "$1"),
            title: r && r.replace(this.rules.inline._escapes, "$1")
          }, e[0], this.lexer);
        }
      }, t.reflink = function (e, t) {
        var u;
        if ((u = this.rules.inline.reflink.exec(e)) || (u = this.rules.inline.nolink.exec(e))) return (e = t[(e = (u[2] || u[1]).replace(/\s+/g, " ")).toLowerCase()]) && e.href ? b(u, e, u[0], this.lexer) : {
          type: "text",
          raw: t = u[0].charAt(0),
          text: t
        };
      }, t.emStrong = function (e, t, u) {
        void 0 === u && (u = "");
        var n = this.rules.inline.emStrong.lDelim.exec(e);
        if (n && (!n[3] || !u.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
          var r = n[1] || n[2] || "";
          if (!r || "" === u || this.rules.inline.punctuation.exec(u)) {
            var i = n[0].length - 1,
              s = i,
              l = 0,
              a = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
            for (a.lastIndex = 0, t = t.slice(-1 * e.length + i); null != (n = a.exec(t));) if (o = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]) if (o = o.length, n[3] || n[4]) s += o;else if ((n[5] || n[6]) && i % 3 && !((i + o) % 3)) l += o;else if (!(0 < (s -= o))) {
              var o = Math.min(o, o + s + l);
              if (Math.min(i, o) % 2) return D = e.slice(1, i + n.index + o), {
                type: "em",
                raw: e.slice(0, i + n.index + o + 1),
                text: D,
                tokens: this.lexer.inlineTokens(D, [])
              };
              var D = e.slice(2, i + n.index + o - 1);
              return {
                type: "strong",
                raw: e.slice(0, i + n.index + o + 1),
                text: D,
                tokens: this.lexer.inlineTokens(D, [])
              };
            }
          }
        }
      }, t.codespan = function (e) {
        var t,
          u,
          n,
          e = this.rules.inline.code.exec(e);
        if (e) return n = e[2].replace(/\n/g, " "), t = /[^ ]/.test(n), u = /^ /.test(n) && / $/.test(n), n = D(n = t && u ? n.substring(1, n.length - 1) : n, !0), {
          type: "codespan",
          raw: e[0],
          text: n
        };
      }, t.br = function (e) {
        e = this.rules.inline.br.exec(e);
        if (e) return {
          type: "br",
          raw: e[0]
        };
      }, t.del = function (e) {
        e = this.rules.inline.del.exec(e);
        if (e) return {
          type: "del",
          raw: e[0],
          text: e[2],
          tokens: this.lexer.inlineTokens(e[2], [])
        };
      }, t.autolink = function (e, t) {
        var u,
          e = this.rules.inline.autolink.exec(e);
        if (e) return t = "@" === e[2] ? "mailto:" + (u = D(this.options.mangle ? t(e[1]) : e[1])) : u = D(e[1]), {
          type: "link",
          raw: e[0],
          text: u,
          href: t,
          tokens: [{
            type: "text",
            raw: u,
            text: u
          }]
        };
      }, t.url = function (e, t) {
        var u, n, r, i;
        if (u = this.rules.inline.url.exec(e)) {
          if ("@" === u[2]) r = "mailto:" + (n = D(this.options.mangle ? t(u[0]) : u[0]));else {
            for (; i = u[0], u[0] = this.rules.inline._backpedal.exec(u[0])[0], i !== u[0];);
            n = D(u[0]), r = "www." === u[1] ? "http://" + n : n;
          }
          return {
            type: "link",
            raw: u[0],
            text: n,
            href: r,
            tokens: [{
              type: "text",
              raw: n,
              text: n
            }]
          };
        }
      }, t.inlineText = function (e, t) {
        e = this.rules.inline.text.exec(e);
        if (e) return t = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : D(e[0]) : e[0] : D(this.options.smartypants ? t(e[0]) : e[0]), {
          type: "text",
          raw: e[0],
          text: t
        };
      }, e;
    }(),
    y = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: A,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    },
    v = (y.def = p(y.def).replace("label", y._label).replace("title", y._title).getRegex(), y.bullet = /(?:[*+-]|\d{1,9}[.)])/, y.listItemStart = p(/^( *)(bull) */).replace("bull", y.bullet).getRegex(), y.list = p(y.list).replace(/bull/g, y.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + y.def.source + ")").getRegex(), y._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", y._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, y.html = p(y.html, "i").replace("comment", y._comment).replace("tag", y._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), y.paragraph = p(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex(), y.blockquote = p(y.blockquote).replace("paragraph", y.paragraph).getRegex(), y.normal = d({}, y), y.gfm = d({}, y.normal, {
      table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    }), y.gfm.table = p(y.gfm.table).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex(), y.gfm.paragraph = p(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", y.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex(), y.pedantic = d({}, y.normal, {
      html: p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", y._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: A,
      paragraph: p(y.normal._paragraph).replace("hr", y.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", y.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    }), {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: A,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
        rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: A,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/
    });
  function j(e) {
    return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
  }
  function _(e) {
    for (var t, u = "", n = e.length, r = 0; r < n; r++) t = e.charCodeAt(r), u += "&#" + (t = .5 < Math.random() ? "x" + t.toString(16) : t) + ";";
    return u;
  }
  v._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", v.punctuation = p(v.punctuation).replace(/punctuation/g, v._punctuation).getRegex(), v.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, v.escapedEmSt = /\\\*|\\_/g, v._comment = p(y._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), v.emStrong.lDelim = p(v.emStrong.lDelim).replace(/punct/g, v._punctuation).getRegex(), v.emStrong.rDelimAst = p(v.emStrong.rDelimAst, "g").replace(/punct/g, v._punctuation).getRegex(), v.emStrong.rDelimUnd = p(v.emStrong.rDelimUnd, "g").replace(/punct/g, v._punctuation).getRegex(), v._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, v._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, v._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, v.autolink = p(v.autolink).replace("scheme", v._scheme).replace("email", v._email).getRegex(), v._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, v.tag = p(v.tag).replace("comment", v._comment).replace("attribute", v._attribute).getRegex(), v._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, v._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, v.link = p(v.link).replace("label", v._label).replace("href", v._href).replace("title", v._title).getRegex(), v.reflink = p(v.reflink).replace("label", v._label).replace("ref", y._label).getRegex(), v.nolink = p(v.nolink).replace("ref", y._label).getRegex(), v.reflinkSearch = p(v.reflinkSearch, "g").replace("reflink", v.reflink).replace("nolink", v.nolink).getRegex(), v.normal = d({}, v), v.pedantic = d({}, v.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: p(/^!?\[(label)\]\((.*?)\)/).replace("label", v._label).getRegex(),
    reflink: p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", v._label).getRegex()
  }), v.gfm = d({}, v.normal, {
    escape: p(v.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }), v.gfm.url = p(v.gfm.url, "i").replace("email", v.gfm._extended_email).getRegex(), v.breaks = d({}, v.gfm, {
    br: p(v.br).replace("{2,}", "*").getRegex(),
    text: p(v.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  });
  var z = function () {
      function u(e) {
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || r.defaults, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, (this.tokenizer.lexer = this).inlineQueue = [], this.state = {
          inLink: !1,
          inRawBlock: !1,
          top: !0
        };
        e = {
          block: y.normal,
          inline: v.normal
        };
        this.options.pedantic ? (e.block = y.pedantic, e.inline = v.pedantic) : this.options.gfm && (e.block = y.gfm, this.options.breaks ? e.inline = v.breaks : e.inline = v.gfm), this.tokenizer.rules = e;
      }
      u.lex = function (e, t) {
        return new u(t).lex(e);
      }, u.lexInline = function (e, t) {
        return new u(t).inlineTokens(e);
      };
      var e,
        t,
        n = u.prototype;
      return n.lex = function (e) {
        var t;
        for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();) this.inlineTokens(t.src, t.tokens);
        return this.tokens;
      }, n.blockTokens = function (r, t) {
        var u,
          e,
          i,
          n,
          s = this;
        for (void 0 === t && (t = []), r = this.options.pedantic ? r.replace(/\t/g, "    ").replace(/^ +$/gm, "") : r.replace(/^( *)(\t+)/gm, function (e, t, u) {
          return t + "    ".repeat(u.length);
        }); r;) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (e) {
          return !!(u = e.call({
            lexer: s
          }, r, t)) && (r = r.substring(u.raw.length), t.push(u), !0);
        }))) if (u = this.tokenizer.space(r)) r = r.substring(u.raw.length), 1 === u.raw.length && 0 < t.length ? t[t.length - 1].raw += "\n" : t.push(u);else if (u = this.tokenizer.code(r)) r = r.substring(u.raw.length), !(e = t[t.length - 1]) || "paragraph" !== e.type && "text" !== e.type ? t.push(u) : (e.raw += "\n" + u.raw, e.text += "\n" + u.text, this.inlineQueue[this.inlineQueue.length - 1].src = e.text);else if (u = this.tokenizer.fences(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.heading(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.hr(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.blockquote(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.list(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.html(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.def(r)) r = r.substring(u.raw.length), !(e = t[t.length - 1]) || "paragraph" !== e.type && "text" !== e.type ? this.tokens.links[u.tag] || (this.tokens.links[u.tag] = {
          href: u.href,
          title: u.title
        }) : (e.raw += "\n" + u.raw, e.text += "\n" + u.raw, this.inlineQueue[this.inlineQueue.length - 1].src = e.text);else if (u = this.tokenizer.table(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.lheading(r)) r = r.substring(u.raw.length), t.push(u);else if (i = r, this.options.extensions && this.options.extensions.startBlock && !function () {
          var t = 1 / 0,
            u = r.slice(1),
            n = void 0;
          s.options.extensions.startBlock.forEach(function (e) {
            "number" == typeof (n = e.call({
              lexer: this
            }, u)) && 0 <= n && (t = Math.min(t, n));
          }), t < 1 / 0 && 0 <= t && (i = r.substring(0, t + 1));
        }(), this.state.top && (u = this.tokenizer.paragraph(i))) e = t[t.length - 1], n && "paragraph" === e.type ? (e.raw += "\n" + u.raw, e.text += "\n" + u.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = e.text) : t.push(u), n = i.length !== r.length, r = r.substring(u.raw.length);else if (u = this.tokenizer.text(r)) r = r.substring(u.raw.length), (e = t[t.length - 1]) && "text" === e.type ? (e.raw += "\n" + u.raw, e.text += "\n" + u.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = e.text) : t.push(u);else if (r) {
          var l = "Infinite loop on byte: " + r.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          }
          throw new Error(l);
        }
        return this.state.top = !0, t;
      }, n.inline = function (e, t) {
        return this.inlineQueue.push({
          src: e,
          tokens: t = void 0 === t ? [] : t
        }), t;
      }, n.inlineTokens = function (r, t) {
        var u,
          e,
          i,
          n,
          s,
          l,
          a = this,
          o = (void 0 === t && (t = []), r);
        if (this.tokens.links) {
          var D = Object.keys(this.tokens.links);
          if (0 < D.length) for (; null != (n = this.tokenizer.rules.inline.reflinkSearch.exec(o));) D.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, n.index) + "[" + m("a", n[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (n = this.tokenizer.rules.inline.blockSkip.exec(o));) o = o.slice(0, n.index) + "[" + m("a", n[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (n = this.tokenizer.rules.inline.escapedEmSt.exec(o));) o = o.slice(0, n.index) + "++" + o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        for (; r;) if (s || (l = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (e) {
          return !!(u = e.call({
            lexer: a
          }, r, t)) && (r = r.substring(u.raw.length), t.push(u), !0);
        }))) if (u = this.tokenizer.escape(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.tag(r)) r = r.substring(u.raw.length), (e = t[t.length - 1]) && "text" === u.type && "text" === e.type ? (e.raw += u.raw, e.text += u.text) : t.push(u);else if (u = this.tokenizer.link(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.reflink(r, this.tokens.links)) r = r.substring(u.raw.length), (e = t[t.length - 1]) && "text" === u.type && "text" === e.type ? (e.raw += u.raw, e.text += u.text) : t.push(u);else if (u = this.tokenizer.emStrong(r, o, l)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.codespan(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.br(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.del(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.autolink(r, _)) r = r.substring(u.raw.length), t.push(u);else if (!this.state.inLink && (u = this.tokenizer.url(r, _))) r = r.substring(u.raw.length), t.push(u);else if (i = r, this.options.extensions && this.options.extensions.startInline && !function () {
          var t = 1 / 0,
            u = r.slice(1),
            n = void 0;
          a.options.extensions.startInline.forEach(function (e) {
            "number" == typeof (n = e.call({
              lexer: this
            }, u)) && 0 <= n && (t = Math.min(t, n));
          }), t < 1 / 0 && 0 <= t && (i = r.substring(0, t + 1));
        }(), u = this.tokenizer.inlineText(i, j)) r = r.substring(u.raw.length), "_" !== u.raw.slice(-1) && (l = u.raw.slice(-1)), s = !0, (e = t[t.length - 1]) && "text" === e.type ? (e.raw += u.raw, e.text += u.text) : t.push(u);else if (r) {
          var c = "Infinite loop on byte: " + r.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          }
          throw new Error(c);
        }
        return t;
      }, n = u, t = [{
        key: "rules",
        get: function () {
          return {
            block: y,
            inline: v
          };
        }
      }], (e = null) && i(n.prototype, e), t && i(n, t), Object.defineProperty(n, "prototype", {
        writable: !1
      }), u;
    }(),
    $ = function () {
      function e(e) {
        this.options = e || r.defaults;
      }
      var t = e.prototype;
      return t.code = function (e, t, u) {
        var n,
          t = (t || "").match(/\S*/)[0];
        return this.options.highlight && null != (n = this.options.highlight(e, t)) && n !== e && (u = !0, e = n), e = e.replace(/\n$/, "") + "\n", t ? '<pre><code class="' + this.options.langPrefix + D(t, !0) + '">' + (u ? e : D(e, !0)) + "</code></pre>\n" : "<pre><code>" + (u ? e : D(e, !0)) + "</code></pre>\n";
      }, t.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n";
      }, t.html = function (e) {
        return e;
      }, t.heading = function (e, t, u, n) {
        return this.options.headerIds ? "<h" + t + ' id="' + (this.options.headerPrefix + n.slug(u)) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
      }, t.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }, t.list = function (e, t, u) {
        var n = t ? "ol" : "ul";
        return "<" + n + (t && 1 !== u ? ' start="' + u + '"' : "") + ">\n" + e + "</" + n + ">\n";
      }, t.listitem = function (e) {
        return "<li>" + e + "</li>\n";
      }, t.checkbox = function (e) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }, t.paragraph = function (e) {
        return "<p>" + e + "</p>\n";
      }, t.table = function (e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n";
      }, t.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n";
      }, t.tablecell = function (e, t) {
        var u = t.header ? "th" : "td";
        return (t.align ? "<" + u + ' align="' + t.align + '">' : "<" + u + ">") + e + "</" + u + ">\n";
      }, t.strong = function (e) {
        return "<strong>" + e + "</strong>";
      }, t.em = function (e) {
        return "<em>" + e + "</em>";
      }, t.codespan = function (e) {
        return "<code>" + e + "</code>";
      }, t.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, t.del = function (e) {
        return "<del>" + e + "</del>";
      }, t.link = function (e, t, u) {
        if (null === (e = g(this.options.sanitize, this.options.baseUrl, e))) return u;
        e = '<a href="' + D(e) + '"';
        return t && (e += ' title="' + t + '"'), e += ">" + u + "</a>";
      }, t.image = function (e, t, u) {
        if (null === (e = g(this.options.sanitize, this.options.baseUrl, e))) return u;
        e = '<img src="' + e + '" alt="' + u + '"';
        return t && (e += ' title="' + t + '"'), e += this.options.xhtml ? "/>" : ">";
      }, t.text = function (e) {
        return e;
      }, e;
    }(),
    S = function () {
      function e() {}
      var t = e.prototype;
      return t.strong = function (e) {
        return e;
      }, t.em = function (e) {
        return e;
      }, t.codespan = function (e) {
        return e;
      }, t.del = function (e) {
        return e;
      }, t.html = function (e) {
        return e;
      }, t.text = function (e) {
        return e;
      }, t.link = function (e, t, u) {
        return "" + u;
      }, t.image = function (e, t, u) {
        return "" + u;
      }, t.br = function () {
        return "";
      }, e;
    }(),
    T = function () {
      function e() {
        this.seen = {};
      }
      var t = e.prototype;
      return t.serialize = function (e) {
        return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }, t.getNextSafeSlug = function (e, t) {
        var u = e,
          n = 0;
        if (this.seen.hasOwnProperty(u)) for (n = this.seen[e]; u = e + "-" + ++n, this.seen.hasOwnProperty(u););
        return t || (this.seen[e] = n, this.seen[u] = 0), u;
      }, t.slug = function (e, t) {
        void 0 === t && (t = {});
        e = this.serialize(e);
        return this.getNextSafeSlug(e, t.dryrun);
      }, e;
    }(),
    R = function () {
      function u(e) {
        this.options = e || r.defaults, this.options.renderer = this.options.renderer || new $(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new S(), this.slugger = new T();
      }
      u.parse = function (e, t) {
        return new u(t).parse(e);
      }, u.parseInline = function (e, t) {
        return new u(t).parseInline(e);
      };
      var e = u.prototype;
      return e.parse = function (e, t) {
        void 0 === t && (t = !0);
        for (var u, n, r, i, s, l, a, o, D, c, h, p, f, g, F, A, d = "", C = e.length, k = 0; k < C; k++) if (o = e[k], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type] && (!1 !== (A = this.options.extensions.renderers[o.type].call({
          parser: this
        }, o)) || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type))) d += A || "";else switch (o.type) {
          case "space":
            continue;
          case "hr":
            d += this.renderer.hr();
            continue;
          case "heading":
            d += this.renderer.heading(this.parseInline(o.tokens), o.depth, x(this.parseInline(o.tokens, this.textRenderer)), this.slugger);
            continue;
          case "code":
            d += this.renderer.code(o.text, o.lang, o.escaped);
            continue;
          case "table":
            for (l = D = "", r = o.header.length, u = 0; u < r; u++) l += this.renderer.tablecell(this.parseInline(o.header[u].tokens), {
              header: !0,
              align: o.align[u]
            });
            for (D += this.renderer.tablerow(l), a = "", r = o.rows.length, u = 0; u < r; u++) {
              for (l = "", i = (s = o.rows[u]).length, n = 0; n < i; n++) l += this.renderer.tablecell(this.parseInline(s[n].tokens), {
                header: !1,
                align: o.align[n]
              });
              a += this.renderer.tablerow(l);
            }
            d += this.renderer.table(D, a);
            continue;
          case "blockquote":
            a = this.parse(o.tokens), d += this.renderer.blockquote(a);
            continue;
          case "list":
            for (D = o.ordered, E = o.start, c = o.loose, r = o.items.length, a = "", u = 0; u < r; u++) f = (p = o.items[u]).checked, g = p.task, h = "", p.task && (F = this.renderer.checkbox(f), c ? 0 < p.tokens.length && "paragraph" === p.tokens[0].type ? (p.tokens[0].text = F + " " + p.tokens[0].text, p.tokens[0].tokens && 0 < p.tokens[0].tokens.length && "text" === p.tokens[0].tokens[0].type && (p.tokens[0].tokens[0].text = F + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({
              type: "text",
              text: F
            }) : h += F), h += this.parse(p.tokens, c), a += this.renderer.listitem(h, g, f);
            d += this.renderer.list(a, D, E);
            continue;
          case "html":
            d += this.renderer.html(o.text);
            continue;
          case "paragraph":
            d += this.renderer.paragraph(this.parseInline(o.tokens));
            continue;
          case "text":
            for (a = o.tokens ? this.parseInline(o.tokens) : o.text; k + 1 < C && "text" === e[k + 1].type;) a += "\n" + ((o = e[++k]).tokens ? this.parseInline(o.tokens) : o.text);
            d += t ? this.renderer.paragraph(a) : a;
            continue;
          default:
            var E = 'Token with "' + o.type + '" type was not found.';
            if (this.options.silent) return void console.error(E);
            throw new Error(E);
        }
        return d;
      }, e.parseInline = function (e, t) {
        t = t || this.renderer;
        for (var u, n, r = "", i = e.length, s = 0; s < i; s++) if (u = e[s], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u.type] && (!1 !== (n = this.options.extensions.renderers[u.type].call({
          parser: this
        }, u)) || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(u.type))) r += n || "";else switch (u.type) {
          case "escape":
            r += t.text(u.text);
            break;
          case "html":
            r += t.html(u.text);
            break;
          case "link":
            r += t.link(u.href, u.title, this.parseInline(u.tokens, t));
            break;
          case "image":
            r += t.image(u.href, u.title, u.text);
            break;
          case "strong":
            r += t.strong(this.parseInline(u.tokens, t));
            break;
          case "em":
            r += t.em(this.parseInline(u.tokens, t));
            break;
          case "codespan":
            r += t.codespan(u.text);
            break;
          case "br":
            r += t.br();
            break;
          case "del":
            r += t.del(this.parseInline(u.tokens, t));
            break;
          case "text":
            r += t.text(u.text);
            break;
          default:
            var l = 'Token with "' + u.type + '" type was not found.';
            if (this.options.silent) return void console.error(l);
            throw new Error(l);
        }
        return r;
      }, u;
    }();
  function I(e, u, n) {
    if (null == e) throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
    if ("function" == typeof u && (n = u, u = null), E(u = d({}, I.defaults, u || {})), n) {
      var r,
        i = u.highlight;
      try {
        r = z.lex(e, u);
      } catch (e) {
        return n(e);
      }
      var s = function (t) {
        var e;
        if (!t) try {
          u.walkTokens && I.walkTokens(r, u.walkTokens), e = R.parse(r, u);
        } catch (e) {
          t = e;
        }
        return u.highlight = i, t ? n(t) : n(null, e);
      };
      if (!i || i.length < 3) return s();
      if (delete u.highlight, !r.length) return s();
      var l = 0;
      I.walkTokens(r, function (u) {
        "code" === u.type && (l++, setTimeout(function () {
          i(u.text, u.lang, function (e, t) {
            if (e) return s(e);
            null != t && t !== u.text && (u.text = t, u.escaped = !0), 0 === --l && s();
          });
        }, 0));
      }), 0 === l && s();
    } else try {
      var t = z.lex(e, u);
      return u.walkTokens && I.walkTokens(t, u.walkTokens), R.parse(t, u);
    } catch (e) {
      if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", u.silent) return "<p>An error occurred:</p><pre>" + D(e.message + "", !0) + "</pre>";
      throw e;
    }
  }
  I.options = I.setOptions = function (e) {
    return d(I.defaults, e), e = I.defaults, r.defaults = e, I;
  }, I.getDefaults = e, I.defaults = r.defaults, I.use = function () {
    for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
    var n,
      r = d.apply(void 0, [{}].concat(t)),
      o = I.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
    t.forEach(function (s) {
      if (s.extensions && (n = !0, s.extensions.forEach(function (r) {
        if (!r.name) throw new Error("extension name required");
        var i;
        if (r.renderer && (i = o.renderers ? o.renderers[r.name] : null, o.renderers[r.name] = i ? function () {
          for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
          var n = r.renderer.apply(this, t);
          return n = !1 === n ? i.apply(this, t) : n;
        } : r.renderer), r.tokenizer) {
          if (!r.level || "block" !== r.level && "inline" !== r.level) throw new Error("extension level must be 'block' or 'inline'");
          o[r.level] ? o[r.level].unshift(r.tokenizer) : o[r.level] = [r.tokenizer], r.start && ("block" === r.level ? o.startBlock ? o.startBlock.push(r.start) : o.startBlock = [r.start] : "inline" === r.level && (o.startInline ? o.startInline.push(r.start) : o.startInline = [r.start]));
        }
        r.childTokens && (o.childTokens[r.name] = r.childTokens);
      })), s.renderer) {
        var e,
          l = I.defaults.renderer || new $();
        for (e in s.renderer) !function (r) {
          var i = l[r];
          l[r] = function () {
            for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
            var n = s.renderer[r].apply(l, t);
            return n = !1 === n ? i.apply(l, t) : n;
          };
        }(e);
        r.renderer = l;
      }
      if (s.tokenizer) {
        var t,
          a = I.defaults.tokenizer || new w();
        for (t in s.tokenizer) !function (r) {
          var i = a[r];
          a[r] = function () {
            for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
            var n = s.tokenizer[r].apply(a, t);
            return n = !1 === n ? i.apply(a, t) : n;
          };
        }(t);
        r.tokenizer = a;
      }
      var u;
      s.walkTokens && (u = I.defaults.walkTokens, r.walkTokens = function (e) {
        s.walkTokens.call(this, e), u && u.call(this, e);
      }), n && (r.extensions = o), I.setOptions(r);
    });
  }, I.walkTokens = function (e, l) {
    for (var a, t = B(e); !(a = t()).done;) !function () {
      var t = a.value;
      switch (l.call(I, t), t.type) {
        case "table":
          for (var e = B(t.header); !(u = e()).done;) {
            var u = u.value;
            I.walkTokens(u.tokens, l);
          }
          for (var n, r = B(t.rows); !(n = r()).done;) for (var i = B(n.value); !(s = i()).done;) {
            var s = s.value;
            I.walkTokens(s.tokens, l);
          }
          break;
        case "list":
          I.walkTokens(t.items, l);
          break;
        default:
          I.defaults.extensions && I.defaults.extensions.childTokens && I.defaults.extensions.childTokens[t.type] ? I.defaults.extensions.childTokens[t.type].forEach(function (e) {
            I.walkTokens(t[e], l);
          }) : t.tokens && I.walkTokens(t.tokens, l);
      }
    }();
  }, I.parseInline = function (e, t) {
    if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
    if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
    E(t = d({}, I.defaults, t || {}));
    try {
      var u = z.lexInline(e, t);
      return t.walkTokens && I.walkTokens(u, t.walkTokens), R.parseInline(u, t);
    } catch (e) {
      if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + D(e.message + "", !0) + "</pre>";
      throw e;
    }
  }, I.Parser = R, I.parser = R.parse, I.Renderer = $, I.TextRenderer = S, I.Lexer = z, I.lexer = z.lex, I.Tokenizer = w, I.Slugger = T;
  var A = (I.parse = I).options,
    P = I.setOptions,
    Q = I.use,
    U = I.walkTokens,
    M = I.parseInline,
    N = I,
    X = R.parse,
    G = z.lex;
  r.Lexer = z, r.Parser = R, r.Renderer = $, r.Slugger = T, r.TextRenderer = S, r.Tokenizer = w, r.getDefaults = e, r.lexer = G, r.marked = I, r.options = A, r.parse = N, r.parseInline = M, r.parser = X, r.setOptions = P, r.use = Q, r.walkTokens = U, Object.defineProperty(r, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 982:
/*!*************************************************************!*\
  !*** ./node_modules/ngx-markdown/fesm2020/ngx-markdown.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardButtonComponent": () => (/* binding */ ClipboardButtonComponent),
/* harmony export */   "ClipboardOptions": () => (/* binding */ ClipboardOptions),
/* harmony export */   "ClipboardRenderOptions": () => (/* binding */ ClipboardRenderOptions),
/* harmony export */   "ExtendedRenderer": () => (/* binding */ ExtendedRenderer),
/* harmony export */   "KatexSpecificOptions": () => (/* binding */ KatexSpecificOptions),
/* harmony export */   "LanguagePipe": () => (/* binding */ LanguagePipe),
/* harmony export */   "MarkdownComponent": () => (/* binding */ MarkdownComponent),
/* harmony export */   "MarkdownModule": () => (/* binding */ MarkdownModule),
/* harmony export */   "MarkdownPipe": () => (/* binding */ MarkdownPipe),
/* harmony export */   "MarkdownService": () => (/* binding */ MarkdownService),
/* harmony export */   "MarkedOptions": () => (/* binding */ MarkedOptions),
/* harmony export */   "MarkedRenderer": () => (/* reexport safe */ marked__WEBPACK_IMPORTED_MODULE_0__.Renderer),
/* harmony export */   "MermaidAPI": () => (/* binding */ MermaidAPI),
/* harmony export */   "PrismPlugin": () => (/* binding */ PrismPlugin),
/* harmony export */   "SECURITY_CONTEXT": () => (/* binding */ SECURITY_CONTEXT),
/* harmony export */   "errorClipboardNotLoaded": () => (/* binding */ errorClipboardNotLoaded),
/* harmony export */   "errorClipboardViewContainerRequired": () => (/* binding */ errorClipboardViewContainerRequired),
/* harmony export */   "errorJoyPixelsNotLoaded": () => (/* binding */ errorJoyPixelsNotLoaded),
/* harmony export */   "errorKatexNotLoaded": () => (/* binding */ errorKatexNotLoaded),
/* harmony export */   "errorMermaidNotLoaded": () => (/* binding */ errorMermaidNotLoaded),
/* harmony export */   "errorSrcWithoutHttpClient": () => (/* binding */ errorSrcWithoutHttpClient)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ 4611);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);










const _c0 = ["*"];
const BUTTON_TEXT_COPY = 'Copy';
const BUTTON_TEXT_COPIED = 'Copied';
class ClipboardButtonComponent {
  constructor() {
    this._buttonClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.copied$ = this._buttonClick$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(3000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(false)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
    this.copiedText$ = this.copied$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(copied => copied ? BUTTON_TEXT_COPIED : BUTTON_TEXT_COPY));
  }
  onCopyToClipboardClick() {
    this._buttonClick$.next();
  }
}
ClipboardButtonComponent.ɵfac = function ClipboardButtonComponent_Factory(t) {
  return new (t || ClipboardButtonComponent)();
};
ClipboardButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ClipboardButtonComponent,
  selectors: [["markdown-clipboard"]],
  decls: 4,
  vars: 7,
  consts: [[1, "markdown-clipboard-button", 3, "click"]],
  template: function ClipboardButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClipboardButtonComponent_Template_button_click_0_listener() {
        return ctx.onCopyToClipboardClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("copied", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, ctx.copied$));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 5, ctx.copiedText$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](ClipboardButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component,
    args: [{
      selector: 'markdown-clipboard',
      template: `
    <button
      class="markdown-clipboard-button"
      [class.copied]="copied$ | async"
      (click)="onCopyToClipboardClick()"
    >{{ copiedText$ | async }}</button>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
class ClipboardOptions {}
class ClipboardRenderOptions extends ClipboardOptions {}

/* eslint-disable */
class KatexSpecificOptions {}
class LanguagePipe {
  transform(value, language) {
    if (value == null) {
      value = '';
    }
    if (language == null) {
      language = '';
    }
    if (typeof value !== 'string') {
      console.error(`LanguagePipe has been invoked with an invalid value type [${typeof value}]`);
      return value;
    }
    if (typeof language !== 'string') {
      console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof language}]`);
      return value;
    }
    return '```' + language + '\n' + value + '\n```';
  }
}
LanguagePipe.ɵfac = function LanguagePipe_Factory(t) {
  return new (t || LanguagePipe)();
};
LanguagePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefinePipe"]({
  name: "language",
  type: LanguagePipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](LanguagePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Pipe,
    args: [{
      name: 'language'
    }]
  }], null, null);
})();
var PrismPlugin;
(function (PrismPlugin) {
  PrismPlugin["CommandLine"] = "command-line";
  PrismPlugin["LineHighlight"] = "line-highlight";
  PrismPlugin["LineNumbers"] = "line-numbers";
})(PrismPlugin || (PrismPlugin = {}));
class MarkedOptions {}

/* eslint-disable max-len */
const errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
const errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
const errorMermaidNotLoaded = '[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information';
const errorClipboardNotLoaded = '[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information';
const errorClipboardViewContainerRequired = '[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function';
const errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
/* eslint-enable max-len */
const SECURITY_CONTEXT = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.InjectionToken('SECURITY_CONTEXT');
class ExtendedRenderer extends marked__WEBPACK_IMPORTED_MODULE_0__.Renderer {
  constructor() {
    super(...arguments);
    this.ɵNgxMarkdownRendererExtended = false;
  }
}
class MarkdownService {
  constructor(platform, securityContext, http, clipboardOptions, options, sanitizer) {
    this.platform = platform;
    this.securityContext = securityContext;
    this.http = http;
    this.clipboardOptions = clipboardOptions;
    this.sanitizer = sanitizer;
    this.DEFAULT_PARSE_OPTIONS = {
      decodeHtml: false,
      inline: false,
      emoji: false,
      mermaid: false,
      markedOptions: undefined
    };
    this.DEFAULT_RENDER_OPTIONS = {
      clipboard: false,
      clipboardOptions: undefined,
      katex: false,
      katexOptions: undefined,
      mermaid: false,
      mermaidOptions: undefined
    };
    this.DEFAULT_MARKED_OPTIONS = {
      renderer: new marked__WEBPACK_IMPORTED_MODULE_0__.Renderer()
    };
    this.DEFAULT_KATEX_OPTIONS = {
      delimiters: [{
        left: "$$",
        right: "$$",
        display: true
      }, {
        left: "$",
        right: "$",
        display: false
      }, {
        left: "\\(",
        right: "\\)",
        display: false
      }, {
        left: "\\begin{equation}",
        right: "\\end{equation}",
        display: true
      }, {
        left: "\\begin{align}",
        right: "\\end{align}",
        display: true
      }, {
        left: "\\begin{alignat}",
        right: "\\end{alignat}",
        display: true
      }, {
        left: "\\begin{gather}",
        right: "\\end{gather}",
        display: true
      }, {
        left: "\\begin{CD}",
        right: "\\end{CD}",
        display: true
      }, {
        left: "\\[",
        right: "\\]",
        display: true
      }]
    };
    this.DEFAULT_MERMAID_OPTIONS = {
      startOnLoad: false
    };
    this.DEFAULT_CLIPBOARD_OPTIONS = {
      buttonComponent: undefined
    };
    this._reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.reload$ = this._reload$.asObservable();
    this.options = options;
  }
  get options() {
    return this._options;
  }
  set options(value) {
    this._options = {
      ...this.DEFAULT_MARKED_OPTIONS,
      ...value
    };
  }
  get renderer() {
    return this.options.renderer;
  }
  set renderer(value) {
    this.options.renderer = value;
  }
  parse(markdown, options = this.DEFAULT_PARSE_OPTIONS) {
    const {
      decodeHtml,
      inline,
      emoji,
      mermaid,
      markedOptions = this.options
    } = options;
    if (mermaid) {
      this.renderer = this.extendRenderer(markedOptions.renderer || new marked__WEBPACK_IMPORTED_MODULE_0__.Renderer());
    }
    const trimmed = this.trimIndentation(markdown);
    const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
    const emojified = emoji ? this.parseEmoji(decoded) : decoded;
    const marked = this.parseMarked(emojified, markedOptions, inline);
    return this.sanitizer.sanitize(this.securityContext, marked) || '';
  }
  render(element, options = this.DEFAULT_RENDER_OPTIONS, viewContainerRef) {
    const {
      clipboard,
      clipboardOptions,
      katex,
      katexOptions,
      mermaid,
      mermaidOptions
    } = options;
    if (clipboard) {
      this.renderClipboard(element, viewContainerRef, {
        ...this.DEFAULT_CLIPBOARD_OPTIONS,
        ...this.clipboardOptions,
        ...clipboardOptions
      });
    }
    if (katex) {
      this.renderKatex(element, {
        ...this.DEFAULT_KATEX_OPTIONS,
        ...katexOptions
      });
    }
    if (mermaid) {
      this.renderMermaid(element, {
        ...this.DEFAULT_MERMAID_OPTIONS,
        ...mermaidOptions
      });
    }
    this.highlight(element);
  }
  reload() {
    this._reload$.next();
  }
  getSource(src) {
    if (!this.http) {
      throw new Error(errorSrcWithoutHttpClient);
    }
    return this.http.get(src, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(markdown => this.handleExtension(src, markdown)));
  }
  highlight(element) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }
    if (typeof Prism === 'undefined' || typeof Prism.highlightAllUnder === 'undefined') {
      return;
    }
    if (!element) {
      element = document;
    }
    const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
    Array.prototype.forEach.call(noLanguageElements, x => x.classList.add('language-none'));
    Prism.highlightAllUnder(element);
  }
  decodeHtml(html) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return html;
    }
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
  }
  extendRenderer(renderer) {
    const extendedRenderer = renderer;
    if (extendedRenderer.ɵNgxMarkdownRendererExtended === true) {
      return renderer;
    }
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const defaultCode = renderer.code;
    renderer.code = function (code, language, isEscaped) {
      return language === 'mermaid' ? `<div class="mermaid">${code}</div>` : defaultCode.call(this, code, language, isEscaped);
    };
    extendedRenderer.ɵNgxMarkdownRendererExtended = true;
    return renderer;
  }
  handleExtension(src, markdown) {
    const urlProtocolIndex = src.lastIndexOf('://');
    const urlWithoutProtocol = urlProtocolIndex > -1 ? src.substring(urlProtocolIndex + 4) : src;
    const lastSlashIndex = urlWithoutProtocol.lastIndexOf('/');
    const lastUrlSegment = lastSlashIndex > -1 ? urlWithoutProtocol.substring(lastSlashIndex + 1).split('?')[0] : '';
    const lastDotIndex = lastUrlSegment.lastIndexOf('.');
    const extension = lastDotIndex > -1 ? lastUrlSegment.substring(lastDotIndex + 1) : '';
    return !!extension && extension !== 'md' ? '```' + extension + '\n' + markdown + '\n```' : markdown;
  }
  parseMarked(html, markedOptions, inline = false) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return html;
    }
    if (inline) {
      return marked__WEBPACK_IMPORTED_MODULE_0__.marked.parseInline(html, markedOptions);
    }
    return marked__WEBPACK_IMPORTED_MODULE_0__.marked.parse(html, markedOptions);
  }
  parseEmoji(html) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return html;
    }
    if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
      throw new Error(errorJoyPixelsNotLoaded);
    }
    return joypixels.shortnameToUnicode(html);
  }
  renderKatex(element, options) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }
    if (typeof katex === 'undefined' || typeof renderMathInElement === 'undefined') {
      throw new Error(errorKatexNotLoaded);
    }
    renderMathInElement(element, options);
  }
  renderClipboard(element, viewContainerRef, options) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }
    if (typeof ClipboardJS === 'undefined') {
      throw new Error(errorClipboardNotLoaded);
    }
    if (!viewContainerRef) {
      throw new Error(errorClipboardViewContainerRequired);
    }
    const {
      buttonComponent,
      buttonTemplate
    } = options;
    // target every <pre> elements
    const preElements = element.querySelectorAll('pre');
    for (let i = 0; i < preElements.length; i++) {
      const preElement = preElements.item(i);
      // create <pre> wrapper element
      const preWrapperElement = document.createElement('div');
      preWrapperElement.style.position = 'relative';
      preElement.parentNode.insertBefore(preWrapperElement, preElement);
      preWrapperElement.appendChild(preElement);
      // create toolbar element
      const toolbarWrapperElement = document.createElement('div');
      toolbarWrapperElement.style.position = 'absolute';
      toolbarWrapperElement.style.top = '.5em';
      toolbarWrapperElement.style.right = '.5em';
      toolbarWrapperElement.style.opacity = '0';
      toolbarWrapperElement.style.transition = 'opacity 250ms ease-out';
      preWrapperElement.insertAdjacentElement('beforeend', toolbarWrapperElement);
      // register listener to show/hide toolbar
      preElement.onmouseover = () => toolbarWrapperElement.style.opacity = '1';
      preElement.onmouseout = () => toolbarWrapperElement.style.opacity = '0';
      // declare embeddedViewRef holding variable
      let embeddedViewRef;
      // use provided component via input property
      // or provided via ClipboardOptions provider
      if (buttonComponent) {
        const componentRef = viewContainerRef.createComponent(buttonComponent);
        embeddedViewRef = componentRef.hostView;
      }
      // use provided template via input property
      else if (buttonTemplate) {
        embeddedViewRef = viewContainerRef.createEmbeddedView(buttonTemplate);
      }
      // use default component
      else {
        const componentRef = viewContainerRef.createComponent(ClipboardButtonComponent);
        embeddedViewRef = componentRef.hostView;
      }
      // declare clipboard instance variable
      let clipboardInstance;
      // attach clipboard.js to root node
      embeddedViewRef.rootNodes.forEach(node => {
        node.onmouseover = () => toolbarWrapperElement.style.opacity = '1';
        toolbarWrapperElement.appendChild(node);
        clipboardInstance = new ClipboardJS(node, {
          text: () => preElement.innerText
        });
      });
      // destroy clipboard instance when view is destroyed
      embeddedViewRef.onDestroy(() => clipboardInstance.destroy());
    }
  }
  renderMermaid(element, options = this.DEFAULT_MERMAID_OPTIONS) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }
    if (typeof mermaid === 'undefined' || typeof mermaid.init === 'undefined') {
      throw new Error(errorMermaidNotLoaded);
    }
    const mermaidElements = element.querySelectorAll('.mermaid');
    if (mermaidElements.length === 0) {
      return;
    }
    mermaid.initialize(options);
    mermaid.init(mermaidElements);
  }
  trimIndentation(markdown) {
    if (!markdown) {
      return '';
    }
    let indentStart;
    return markdown.split('\n').map(line => {
      let lineIdentStart = indentStart;
      if (line.length > 0) {
        lineIdentStart = isNaN(lineIdentStart) ? line.search(/\S|$/) : Math.min(line.search(/\S|$/), lineIdentStart);
      }
      if (isNaN(indentStart)) {
        indentStart = lineIdentStart;
      }
      return lineIdentStart ? line.substring(lineIdentStart) : line;
    }).join('\n');
  }
}
MarkdownService.ɵfac = function MarkdownService_Factory(t) {
  return new (t || MarkdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](SECURITY_CONTEXT), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](ClipboardOptions, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](MarkedOptions, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer));
};
MarkdownService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: MarkdownService,
  factory: MarkdownService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.SecurityContext,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject,
        args: [SECURITY_CONTEXT]
      }]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Optional
      }]
    }, {
      type: ClipboardOptions,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Optional
      }]
    }, {
      type: MarkedOptions,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Optional
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer
    }];
  }, null);
})();

/* eslint-disable @typescript-eslint/no-unused-vars */
class MarkdownComponent {
  constructor(element, markdownService, viewContainerRef) {
    this.element = element;
    this.markdownService = markdownService;
    this.viewContainerRef = viewContainerRef;
    // Event emitters
    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this._commandLine = false;
    this._clipboard = false;
    this._emoji = false;
    this._inline = false;
    this._katex = false;
    this._lineHighlight = false;
    this._lineNumbers = false;
    this._mermaid = false;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  get inline() {
    return this._inline;
  }
  set inline(value) {
    this._inline = this.coerceBooleanProperty(value);
  }
  // Plugin - clipboard
  get clipboard() {
    return this._clipboard;
  }
  set clipboard(value) {
    this._clipboard = this.coerceBooleanProperty(value);
  }
  // Plugin - emoji
  get emoji() {
    return this._emoji;
  }
  set emoji(value) {
    this._emoji = this.coerceBooleanProperty(value);
  }
  // Plugin - katex
  get katex() {
    return this._katex;
  }
  set katex(value) {
    this._katex = this.coerceBooleanProperty(value);
  }
  // Plugin - mermaid
  get mermaid() {
    return this._mermaid;
  }
  set mermaid(value) {
    this._mermaid = this.coerceBooleanProperty(value);
  }
  // Plugin - lineHighlight
  get lineHighlight() {
    return this._lineHighlight;
  }
  set lineHighlight(value) {
    this._lineHighlight = this.coerceBooleanProperty(value);
  }
  // Plugin - lineNumbers
  get lineNumbers() {
    return this._lineNumbers;
  }
  set lineNumbers(value) {
    this._lineNumbers = this.coerceBooleanProperty(value);
  }
  // Plugin - commandLine
  get commandLine() {
    return this._commandLine;
  }
  set commandLine(value) {
    this._commandLine = this.coerceBooleanProperty(value);
  }
  ngOnChanges() {
    this.loadContent();
  }
  loadContent() {
    if (this.data != null) {
      this.handleData();
      return;
    }
    if (this.src != null) {
      this.handleSrc();
      return;
    }
  }
  ngAfterViewInit() {
    if (!this.data && !this.src) {
      this.handleTransclusion();
    }
    this.markdownService.reload$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroyed$)).subscribe(() => this.loadContent());
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  render(markdown, decodeHtml = false) {
    const parsedOptions = {
      decodeHtml,
      inline: this.inline,
      emoji: this.emoji,
      mermaid: this.mermaid
    };
    const renderOptions = {
      clipboard: this.clipboard,
      clipboardOptions: {
        buttonComponent: this.clipboardButtonComponent,
        buttonTemplate: this.clipboardButtonTemplate
      },
      katex: this.katex,
      katexOptions: this.katexOptions,
      mermaid: this.mermaid,
      mermaidOptions: this.mermaidOptions
    };
    const parsed = this.markdownService.parse(markdown, parsedOptions);
    this.element.nativeElement.innerHTML = parsed;
    this.handlePlugins();
    this.markdownService.render(this.element.nativeElement, renderOptions, this.viewContainerRef);
    this.ready.emit();
  }
  coerceBooleanProperty(value) {
    return value != null && `${String(value)}` !== 'false';
  }
  handleData() {
    this.render(this.data);
  }
  handleSrc() {
    this.markdownService.getSource(this.src).subscribe({
      next: markdown => {
        this.render(markdown);
        this.load.emit(markdown);
      },
      error: error => this.error.emit(error)
    });
  }
  handleTransclusion() {
    this.render(this.element.nativeElement.innerHTML, true);
  }
  handlePlugins() {
    if (this.commandLine) {
      this.setPluginClass(this.element.nativeElement, PrismPlugin.CommandLine);
      this.setPluginOptions(this.element.nativeElement, {
        dataFilterOutput: this.filterOutput,
        dataHost: this.host,
        dataPrompt: this.prompt,
        dataOutput: this.output,
        dataUser: this.user
      });
    }
    if (this.lineHighlight) {
      this.setPluginOptions(this.element.nativeElement, {
        dataLine: this.line,
        dataLineOffset: this.lineOffset
      });
    }
    if (this.lineNumbers) {
      this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
      this.setPluginOptions(this.element.nativeElement, {
        dataStart: this.start
      });
    }
  }
  setPluginClass(element, plugin) {
    const preElements = element.querySelectorAll('pre');
    for (let i = 0; i < preElements.length; i++) {
      const classes = plugin instanceof Array ? plugin : [plugin];
      preElements.item(i).classList.add(...classes);
    }
  }
  setPluginOptions(element, options) {
    const preElements = element.querySelectorAll('pre');
    for (let i = 0; i < preElements.length; i++) {
      Object.keys(options).forEach(option => {
        const attributeValue = options[option];
        if (attributeValue) {
          const attributeName = this.toLispCase(option);
          preElements.item(i).setAttribute(attributeName, attributeValue.toString());
        }
      });
    }
  }
  toLispCase(value) {
    const upperChars = value.match(/([A-Z])/g);
    if (!upperChars) {
      return value;
    }
    let str = value.toString();
    for (let i = 0, n = upperChars.length; i < n; i++) {
      str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
    }
    if (str.slice(0, 1) === '-') {
      str = str.slice(1);
    }
    return str;
  }
}
MarkdownComponent.ɵfac = function MarkdownComponent_Factory(t) {
  return new (t || MarkdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](MarkdownService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef));
};
MarkdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: MarkdownComponent,
  selectors: [["markdown"], ["", "markdown", ""]],
  inputs: {
    data: "data",
    src: "src",
    inline: "inline",
    clipboard: "clipboard",
    clipboardButtonComponent: "clipboardButtonComponent",
    clipboardButtonTemplate: "clipboardButtonTemplate",
    emoji: "emoji",
    katex: "katex",
    katexOptions: "katexOptions",
    mermaid: "mermaid",
    mermaidOptions: "mermaidOptions",
    lineHighlight: "lineHighlight",
    line: "line",
    lineOffset: "lineOffset",
    lineNumbers: "lineNumbers",
    start: "start",
    commandLine: "commandLine",
    filterOutput: "filterOutput",
    host: "host",
    prompt: "prompt",
    output: "output",
    user: "user"
  },
  outputs: {
    error: "error",
    load: "load",
    ready: "ready"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MarkdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'markdown, [markdown]',
      template: '<ng-content></ng-content>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef
    }, {
      type: MarkdownService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    clipboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    clipboardButtonComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    clipboardButtonTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    emoji: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    katex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    katexOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    mermaid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    mermaidOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    lineHighlight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    lineOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    lineNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    commandLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    filterOutput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    host: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    prompt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    output: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    user: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
    }],
    load: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
    }]
  });
})();
class MarkdownPipe {
  constructor(domSanitizer, elementRef, markdownService, viewContainerRef, zone) {
    this.domSanitizer = domSanitizer;
    this.elementRef = elementRef;
    this.markdownService = markdownService;
    this.viewContainerRef = viewContainerRef;
    this.zone = zone;
  }
  transform(value, options) {
    if (value == null) {
      return '';
    }
    if (typeof value !== 'string') {
      console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof value}]`);
      return value;
    }
    const markdown = this.markdownService.parse(value, options);
    this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.first)()).subscribe(() => this.markdownService.render(this.elementRef.nativeElement, options, this.viewContainerRef));
    return this.domSanitizer.bypassSecurityTrustHtml(markdown);
  }
}
MarkdownPipe.ɵfac = function MarkdownPipe_Factory(t) {
  return new (t || MarkdownPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](MarkdownService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone, 16));
};
MarkdownPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefinePipe"]({
  name: "markdown",
  type: MarkdownPipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Pipe,
    args: [{
      name: 'markdown'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef
    }, {
      type: MarkdownService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
    }];
  }, null);
})();
const sharedDeclarations = [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe];
const sharedEntryComponents = [ClipboardButtonComponent];
class MarkdownModule {
  static forRoot(markdownModuleConfig) {
    return {
      ngModule: MarkdownModule,
      providers: [MarkdownService, markdownModuleConfig && markdownModuleConfig.loader || [], markdownModuleConfig && markdownModuleConfig.clipboardOptions || [], markdownModuleConfig && markdownModuleConfig.markedOptions || [], {
        provide: SECURITY_CONTEXT,
        useValue: markdownModuleConfig && markdownModuleConfig.sanitize != null ? markdownModuleConfig.sanitize : _angular_core__WEBPACK_IMPORTED_MODULE_11__.SecurityContext.HTML
      }]
    };
  }
  static forChild() {
    return {
      ngModule: MarkdownModule
    };
  }
}
MarkdownModule.ɵfac = function MarkdownModule_Factory(t) {
  return new (t || MarkdownModule)();
};
MarkdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: MarkdownModule,
  declarations: [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe]
});
MarkdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
      exports: sharedDeclarations,
      declarations: sharedDeclarations,
      entryComponents: sharedEntryComponents
    }]
  }], null, null);
})();

/* eslint-disable */
var MermaidAPI;
(function (MermaidAPI) {
  let SecurityLevel;
  (function (SecurityLevel) {
    /**
     * (default) tags in text are encoded, click functionality is disabled
     */
    SecurityLevel["Strict"] = "strict";
    /**
     * tags in text are allowed, click functionality is enabled
     */
    SecurityLevel["Loose"] = "loose";
    /**
     * html tags in text are allowed, (only script element is removed), click functionality is enabled
     */
    SecurityLevel["Antiscript"] = "antiscript";
    /**
     * with this security level all rendering takes place in a sandboxed iframe.
     * This prevent any javascript running in the context.
     * This may hinder interactive functionality of the diagram like scripts,
     * popups in sequence diagram or links to other tabs/targets etc.
     */
    SecurityLevel["Sandbox"] = "sandbox";
  })(SecurityLevel = MermaidAPI.SecurityLevel || (MermaidAPI.SecurityLevel = {}));
  let Theme;
  (function (Theme) {
    /**
     * Designed to modified, as the name implies it is supposed to be used as the base for making custom themes.
     */
    Theme["Base"] = "base";
    /**
     * A theme full of light greens that is easy on the eyes.
     */
    Theme["Forest"] = "forest";
    /**
     * A theme that would go well with other dark colored elements.
     */
    Theme["Dark"] = "dark";
    /**
     *  The default theme for all diagrams.
     */
    Theme["Default"] = "default";
    /**
     * The theme to be used for black and white printing
     */
    Theme["Neutral"] = "neutral";
  })(Theme = MermaidAPI.Theme || (MermaidAPI.Theme = {}));
  let LogLevel;
  (function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
  })(LogLevel = MermaidAPI.LogLevel || (MermaidAPI.LogLevel = {}));
})(MermaidAPI || (MermaidAPI = {}));

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_blog_blog_module_ts.js.map