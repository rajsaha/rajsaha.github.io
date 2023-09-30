(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_my-music_my-music_module_ts"],{

/***/ 5126:
/*!*****************************************************!*\
  !*** ./src/app/components/music/music.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicComponent": () => (/* binding */ MusicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music.component.html?ngResource */ 8789);
/* harmony import */ var _music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music.component.scss?ngResource */ 4966);
/* harmony import */ var _music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
var _class;







let MusicComponent = (_class = class MusicComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    // Icons
    this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight;
    this.faSpotify = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSpotify;
    this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faYoutube;
    this.faSoundcloud = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSoundcloud;
  }
  ngOnInit() {
    this.numLinks = Object.keys(this.data.links).length;
  }
  goToTrack(track) {
    this.router.navigate(['track', track], {
      relativeTo: this.route.parent
    }).then();
  }
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}], _class.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
}, _class);
MusicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-music',
  template: _music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute])], MusicComponent);


/***/ }),

/***/ 3047:
/*!*****************************************************!*\
  !*** ./src/app/components/track/track.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackComponent": () => (/* binding */ TrackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _track_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.component.html?ngResource */ 1539);
/* harmony import */ var _track_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track.component.scss?ngResource */ 5259);
/* harmony import */ var _track_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_track_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/demo-data/demo-data.service */ 8207);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
var _class;









let TrackComponent = (_class = class TrackComponent {
  constructor(router, route, demoDataService, sanitizer) {
    this.router = router;
    this.route = route;
    this.demoDataService = demoDataService;
    this.sanitizer = sanitizer;
    // Icons
    this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight;
    this.faSpotify = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSpotify;
    this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faYoutube;
    this.faSoundcloud = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSoundcloud;
  }
  ngOnInit() {
    this.data = this.demoDataService.getData();
    this.route.params.subscribe(val => {
      this.setTrack(val.track);
    });
  }
  setTrack(trackName) {
    switch (trackName) {
      case 'happydays':
        this.setEmbedVideoUrl(1);
        // this.setMeta();
        break;
      case 'igtba':
        this.setEmbedVideoUrl(2);
        // this.setMeta();
        break;
      case 'drive':
        this.setEmbedVideoUrl(3);
        // this.setMeta();
        break;
      case 'dissonance':
        this.setEmbedVideoUrl(4);
        // this.setMeta();
        break;
      default:
        this.router.navigate(['my-music']).then();
        break;
    }
  }
  setEmbedVideoUrl(index) {
    // * Set trackData
    // * Currently using local data
    this.trackData = this.data[index];
    const temp = 'https://www.youtube.com/embed/' + this.extractYoutubeVideoId(this.trackData.links.youtube);
    this.embedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(temp);
    this.numLinks = Object.keys(this.trackData.links).length;
  }
  extractYoutubeVideoId(link) {
    let video_id = link.split('v=')[1];
    const ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_2__.DemoDataService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}], _class);
TrackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-track',
  template: _track_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_track_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute, src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_2__.DemoDataService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer])], TrackComponent);


/***/ }),

/***/ 5285:
/*!***********************************************************!*\
  !*** ./src/app/pages/my-music/my-music-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMusicRoutingModule": () => (/* binding */ MyMusicRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _my_music_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-music.component */ 8233);
/* harmony import */ var _components_track_track_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/track/track.component */ 3047);





const routes = [{
  path: '',
  component: _my_music_component__WEBPACK_IMPORTED_MODULE_0__.MyMusicComponent,
  pathMatch: 'full'
}, {
  path: 'track/:track',
  component: _components_track_track_component__WEBPACK_IMPORTED_MODULE_1__.TrackComponent
}];
let MyMusicRoutingModule = class MyMusicRoutingModule {};
MyMusicRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], MyMusicRoutingModule);


/***/ }),

/***/ 8233:
/*!******************************************************!*\
  !*** ./src/app/pages/my-music/my-music.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMusicComponent": () => (/* binding */ MyMusicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-music.component.html?ngResource */ 605);
/* harmony import */ var _my_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-music.component.scss?ngResource */ 2839);
/* harmony import */ var _my_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_my_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade.animation */ 1182);
/* harmony import */ var src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/demo-data/demo-data.service */ 8207);
var _class;






let MyMusicComponent = (_class = class MyMusicComponent {
  constructor(demoDataService) {
    this.demoDataService = demoDataService;
    this.data = this.demoDataService.getData();
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [{
  type: src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_3__.DemoDataService
}], _class);
MyMusicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-my-music',
  template: _my_music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
  host: {
    '[@fadeAnimation]': ''
  },
  styles: [(_my_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_3__.DemoDataService])], MyMusicComponent);


/***/ }),

/***/ 9418:
/*!***************************************************!*\
  !*** ./src/app/pages/my-music/my-music.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMusicModule": () => (/* binding */ MyMusicModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _my_music_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-music-routing.module */ 5285);
/* harmony import */ var _my_music_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-music.component */ 8233);
/* harmony import */ var _components_music_music_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/music/music.component */ 5126);
/* harmony import */ var _components_track_track_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/track/track.component */ 3047);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);








let MyMusicModule = class MyMusicModule {};
MyMusicModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_my_music_component__WEBPACK_IMPORTED_MODULE_1__.MyMusicComponent, _components_music_music_component__WEBPACK_IMPORTED_MODULE_2__.MusicComponent, _components_track_track_component__WEBPACK_IMPORTED_MODULE_3__.TrackComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _my_music_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyMusicRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule]
})], MyMusicModule);


/***/ }),

/***/ 8207:
/*!*********************************************************!*\
  !*** ./src/app/services/demo-data/demo-data.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoDataService": () => (/* binding */ DemoDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;


let DemoDataService = (_class = class DemoDataService {
  constructor() {
    this.data = [{
      id: 'ch',
      image: 'https://i1.sndcdn.com/avatars-000582864471-vb016p-t500x500.jpg',
      title: 'Changing Homes',
      subtitle: 'Band',
      description: 'I\'m in this band! We make all kinds of weird shit regardless of genre.<br /><br />We are releasing our next EP sometime this year.',
      links: {
        spotify: 'https://open.spotify.com/artist/5M1zRN28GLSDh7B4aJzNLg?si=0myo5Eq7QpKLQ-EBnkJHig',
        soundcloud: 'https://soundcloud.com/changing-homes',
        youtube: 'https://www.youtube.com/channel/UCRQygYIe8vP9qZmHwr_YtVA'
      },
      type: 'band'
    }, {
      id: 'happydays',
      image: 'https://i.imgur.com/JECusiO.jpg',
      title: 'Happy Days',
      subtitle: 'Single',
      description: 'Happy Days is an instrumental, atmospheric song about a moment of reprieve, about daydreaming in the middle of work.   <br /><br /> The beautiful album art was again done by my amazing wife.',
      links: {
        spotify: null,
        soundcloud: null,
        youtube: 'https://www.youtube.com/watch?v=ysqB6j-mgDA'
      },
      type: 'track'
    }, {
      id: 'igtba',
      image: 'https://i.imgur.com/mrvshGX.png',
      title: 'It\'s going to be alright',
      subtitle: 'Single',
      description: 'This song is all about perseverance. Things are pretty bad right now around the world as I write this. 2020 is a year of tragedy and yet we go on no matter what in the hopes that tomorrow will be a better day. So really, hold on to hope. Hold on to your friends. It\'s not over yet. It\'s going to be alright!   <br /><br /> Amazing album art done by my wife.',
      links: {
        spotify: null,
        soundcloud: null,
        youtube: 'https://www.youtube.com/watch?v=OzpzyVS3t90'
      },
      type: 'track'
    }, {
      id: 'drive',
      image: 'https://i1.sndcdn.com/artworks-MyF33mqrsnokNxCT-x4TyOw-t500x500.jpg',
      title: 'Drive',
      subtitle: 'Single',
      description: 'This is my first solo track. <br /><br />Drive came out of me messing around with an app called Bandlab (which is really good, by the way, for making music on the go). It\'s a bluesy, hip-hoppy track that you\'ll want to play while you\'re driving alone at night, hence the title.',
      links: {
        spotify: null,
        soundcloud: 'https://soundcloud.com/raj-wraith/drive',
        youtube: 'https://www.youtube.com/watch?v=N7BcEcDcTlo'
      },
      type: 'track'
    }, {
      id: 'dissonance',
      image: 'https://i1.sndcdn.com/artworks-HuVDmCzKBz8yQtEU-KSfh9w-t500x500.jpg',
      title: 'Dissonance',
      subtitle: 'Single',
      description: 'The first track I mixed and mastered myself with lots of invaluable advice from friends. Bit off more than I could chew to be honest but hey, man\'s gotta try! <br /><br /> Amazing album art done by my wife.',
      links: {
        spotify: null,
        soundcloud: 'https://soundcloud.com/raj-wraith/dissonance',
        youtube: 'https://www.youtube.com/watch?v=OxxGp1-lnyo'
      },
      type: 'track'
    }];
  }
  getData() {
    return this.data;
  }
}, _class.ctorParameters = () => [], _class);
DemoDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])], DemoDataService);


/***/ }),

/***/ 4966:
/*!******************************************************************!*\
  !*** ./src/app/components/music/music.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".music {\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 15px;\n  margin-bottom: 50px;\n}\n.music .left {\n  margin-bottom: 15px;\n}\n.music .left img {\n  display: block;\n  width: 100%;\n  max-width: 400px;\n}\n.music .right h1 {\n  color: var(--text-color);\n  font-weight: 700;\n  font-size: 25px;\n  margin-bottom: 7.5px;\n}\n.music .right h3 {\n  color: var(--text-color);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.music .right p {\n  color: var(--text-color);\n  font-weight: 100;\n  line-height: 25px;\n  margin-bottom: 15px;\n}\n.music .right .links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 15px;\n}\n.music .right .links .link {\n  color: inherit;\n  border-radius: 3px;\n  padding: 4px 0;\n  text-decoration: none;\n  transition: background-color 0.2s ease-in-out;\n}\n.music .right .links .link div {\n  color: var(--text-color);\n  text-align: center;\n}\n.music .right .links .link div fa-icon {\n  margin-right: 0;\n}\n.music .right .links .link div p {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .music {\n    grid-template-columns: max-content 1fr;\n    grid-gap: 30px;\n  }\n  .music .left {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .music .right p.description {\n    max-width: 500px;\n  }\n  .music .right .links .link div fa-icon {\n    margin-right: 5px;\n  }\n  .music .right .links .link div p {\n    display: inline-block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/components/music/music.component.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,2BAAA;EACA,cAAA;EACA,mBAAA;AADJ;AAEI;EACI,mBAAA;AAAR;AACQ;EACI,cAAA;EACA,WAAA;EACA,gBAAA;AACZ;AAIQ;EACI,wBAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;AAFZ;AAKQ;EACI,wBAAA;EACA,mBAAA;EACA,yBAAA;AAHZ;AAMQ;EACI,wBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AAJZ;AAOQ;EACI,aAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;AALZ;AAMY;EACI,cAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,6CAAA;AAJhB;AAMgB;EACI,wBAAA;EACA,kBAAA;AAJpB;AAKoB;EACI,eAAA;AAHxB;AAMoB;EACI,eAAA;EACA,gBAAA;EACA,aAAA;AAJxB;;AAYA;EACI;IACI,sCAAA;IACA,cAAA;EATN;EAUM;IACI,cAAA;IACA,eAAA;EARV;EAWU;IACI,gBAAA;EATd;EAcsB;IACI,iBAAA;EAZ1B;EAcsB;IACI,qBAAA;EAZ1B;AACF","sourcesContent":["@import '../../../variables';\n\n.music {\n    display: grid;\n    grid-template-columns: auto;\n    grid-gap: 15px;\n    margin-bottom: 50px;\n    .left {\n        margin-bottom: 15px;\n        img {\n            display: block;\n            width: 100%;\n            max-width: 400px;\n        }\n    }\n\n    .right {\n        h1 {\n            color: var(--text-color);\n            font-weight: 700;\n            font-size: 25px;\n            margin-bottom: 7.5px;\n        }\n\n        h3 {\n            color: var(--text-color);\n            margin-bottom: 15px;\n            text-transform: uppercase;\n        }\n\n        p {\n            color: var(--text-color);\n            font-weight: 100;\n            line-height: 25px;\n            margin-bottom: 15px;\n        }\n\n        .links {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 30px;\n            margin-bottom: 15px;\n            .link {\n                color: inherit;\n                border-radius: 3px;\n                padding: 4px 0;\n                text-decoration: none;\n                transition: background-color 0.2s ease-in-out;\n\n                div {\n                    color: var(--text-color);\n                    text-align: center;\n                    fa-icon {\n                        margin-right: 0;\n                    }\n\n                    p {\n                        font-size: 12px;\n                        margin-bottom: 0;\n                        display: none;\n                    }\n                }\n            }\n        }\n    }\n}\n\n@media (min-width: 768px) {\n    .music {\n        grid-template-columns: max-content 1fr;\n        grid-gap: 30px;\n        .left {\n            margin-left: 0;\n            margin-right: 0;\n        }\n        .right {\n            p.description {\n                max-width: 500px;\n            }\n            .links {\n                .link {\n                    div {\n                        fa-icon {\n                            margin-right: 5px;\n                        }\n                        p {\n                            display: inline-block;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5259:
/*!******************************************************************!*\
  !*** ./src/app/components/track/track.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".track {\n  margin-bottom: 30px;\n}\n.track .top {\n  margin-bottom: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.track .top iframe {\n  width: 100%;\n}\n.track .bottom h1 {\n  color: var(--text-color);\n  font-weight: 700;\n  font-size: 25px;\n  margin-bottom: 7.5px;\n}\n.track .bottom h3 {\n  color: var(--text-color);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.track .bottom p {\n  color: var(--text-color);\n  font-weight: 100;\n  line-height: 25px;\n  margin-bottom: 15px;\n}\n.track .bottom .links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 15px;\n}\n.track .bottom .links .link {\n  color: inherit;\n  border-radius: 3px;\n  padding: 4px 0;\n  text-decoration: none;\n  transition: background-color 0.2s ease-in-out;\n}\n.track .bottom .links .link div {\n  color: var(--text-color);\n  text-align: center;\n}\n.track .bottom .links .link div fa-icon {\n  margin-right: 0;\n}\n.track .bottom .links .link div p {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .track .bottom .links .link div fa-icon {\n    margin-right: 5px;\n  }\n  .track .bottom .links .link div p {\n    display: inline-block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/components/track/track.component.scss"],"names":[],"mappings":"AAEA;EACI,mBAAA;AADJ;AAEI;EACI,mBAAA;EACA,iBAAA;EACA,kBAAA;AAAR;AAEQ;EACI,WAAA;AAAZ;AAKQ;EACI,wBAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;AAHZ;AAMQ;EACI,wBAAA;EACA,mBAAA;EACA,yBAAA;AAJZ;AAOQ;EACI,wBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AALZ;AAQQ;EACI,aAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;AANZ;AAOY;EACI,cAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,6CAAA;AALhB;AAOgB;EACI,wBAAA;EACA,kBAAA;AALpB;AAMoB;EACI,eAAA;AAJxB;AAOoB;EACI,eAAA;EACA,gBAAA;EACA,aAAA;AALxB;;AAaA;EAMwB;IACI,iBAAA;EAf1B;EAiBsB;IACI,qBAAA;EAf1B;AACF","sourcesContent":["@import '../../../variables';\n\n.track {\n    margin-bottom: 30px;\n    .top {\n        margin-bottom: 15px;\n        margin-left: auto;\n        margin-right: auto;\n\n        iframe {\n            width: 100%;\n        }\n    }\n\n    .bottom {\n        h1 {\n            color: var(--text-color);\n            font-weight: 700;\n            font-size: 25px;\n            margin-bottom: 7.5px;\n        }\n\n        h3 {\n            color: var(--text-color);\n            margin-bottom: 15px;\n            text-transform: uppercase;\n        }\n\n        p {\n            color: var(--text-color);\n            font-weight: 100;\n            line-height: 25px;\n            margin-bottom: 15px;\n        }\n\n        .links {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 30px;\n            margin-bottom: 15px;\n            .link {\n                color: inherit;\n                border-radius: 3px;\n                padding: 4px 0;\n                text-decoration: none;\n                transition: background-color 0.2s ease-in-out;\n\n                div {\n                    color: var(--text-color);\n                    text-align: center;\n                    fa-icon {\n                        margin-right: 0;\n                    }\n\n                    p {\n                        font-size: 12px;\n                        margin-bottom: 0;\n                        display: none;\n                    }\n                }\n            }\n        }\n    }\n}\n\n@media (min-width: 768px) {\n    .track {\n        .bottom {\n            .links {\n                .link {\n                    div {\n                        fa-icon {\n                            margin-right: 5px;\n                        }\n                        p {\n                            display: inline-block;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2839:
/*!*******************************************************************!*\
  !*** ./src/app/pages/my-music/my-music.component.scss?ngResource ***!
  \*******************************************************************/
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

/***/ 8789:
/*!******************************************************************!*\
  !*** ./src/app/components/music/music.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"music\">\n    <div class=\"right\">\n        <h1>{{ data.title }}</h1>\n        <h3>{{ data.subtitle }}</h3>\n        <p class=\"description\" [innerHTML]=\"data.description\"></p>\n        <div\n            class=\"links\"\n            [ngClass]=\"{\n                'two-columns': numLinks === 2,\n                'three-columns': numLinks === 3\n            }\"\n        >\n            <a\n                *ngIf=\"data.links.spotify\"\n                class=\"link\"\n                [href]=\"data.links.spotify\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSpotify\"></fa-icon>\n                    <p>Spotify</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"data.links.soundcloud\"\n                class=\"link\"\n                [href]=\"data.links.soundcloud\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSoundcloud\"></fa-icon>\n                    <p>Soundcloud</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"data.links.youtube\"\n                class=\"link\"\n                [href]=\"data.links.youtube\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faYoutube\"></fa-icon>\n                    <p>YouTube</p>\n                </div>\n            </a>\n        </div>\n\n        <div\n            class=\"custom-button\"\n            *ngIf=\"data.type === 'track'\"\n            (click)=\"goToTrack(data.id)\"\n        >\n            <span>View Track</span>\n            <fa-icon [icon]=\"faArrowRight\"></fa-icon>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 1539:
/*!******************************************************************!*\
  !*** ./src/app/components/track/track.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"track\">\n    <div class=\"top\">\n        <iframe\n            height=\"400\"\n            [src]=\"embedVideoUrl\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n            allowfullscreen\n        ></iframe>\n    </div>\n    <div class=\"bottom\">\n        <h1>{{ trackData.title }}</h1>\n        <h3>{{ trackData.subtitle }}</h3>\n        <p class=\"description\" [innerHTML]=\"trackData.description\"></p>\n        <div\n            class=\"links\"\n            [ngClass]=\"{\n                'two-columns': numLinks === 2,\n                'three-columns': numLinks === 3\n            }\"\n        >\n            <a\n                *ngIf=\"trackData.links.spotify\"\n                class=\"link\"\n                [href]=\"trackData.links.spotify\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSpotify\"></fa-icon>\n                    <p>Spotify</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"trackData.links.soundcloud\"\n                class=\"link\"\n                [href]=\"trackData.links.soundcloud\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSoundcloud\"></fa-icon>\n                    <p>Soundcloud</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"trackData.links.youtube\"\n                class=\"link\"\n                [href]=\"trackData.links.youtube\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faYoutube\"></fa-icon>\n                    <p>YouTube</p>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 605:
/*!*******************************************************************!*\
  !*** ./src/app/pages/my-music/my-music.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-music *ngFor=\"let item of data\" [data]=\"item\"></app-music>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-music_my-music_module_ts.js.map