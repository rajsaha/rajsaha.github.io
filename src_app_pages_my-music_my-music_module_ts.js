"use strict";
(self["webpackChunkng_portfolio"] = self["webpackChunkng_portfolio"] || []).push([["src_app_pages_my-music_my-music_module_ts"],{

/***/ 5126:
/*!*****************************************************!*\
  !*** ./src/app/components/music/music.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicComponent": () => (/* binding */ MusicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music.component.html?ngResource */ 8789);
/* harmony import */ var _music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music.component.scss?ngResource */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let MusicComponent = class MusicComponent {
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
        this.router
            .navigate(['track', track], { relativeTo: this.route.parent })
            .then();
    }
};
MusicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
MusicComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
MusicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-music',
        template: _music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute])
], MusicComponent);



/***/ }),

/***/ 3047:
/*!*****************************************************!*\
  !*** ./src/app/components/track/track.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackComponent": () => (/* binding */ TrackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _track_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.component.html?ngResource */ 1539);
/* harmony import */ var _track_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track.component.scss?ngResource */ 2746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/demo-data/demo-data.service */ 8207);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);









let TrackComponent = class TrackComponent {
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
        this.route.params.subscribe((val) => {
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
        const temp = 'https://www.youtube.com/embed/' +
            this.extractYoutubeVideoId(this.trackData.links.youtube);
        this.embedVideoUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(temp);
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
};
TrackComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_2__.DemoDataService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
TrackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-track',
        template: _track_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_track_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute,
        src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_2__.DemoDataService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer])
], TrackComponent);



/***/ }),

/***/ 5285:
/*!***********************************************************!*\
  !*** ./src/app/pages/my-music/my-music-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMusicRoutingModule": () => (/* binding */ MyMusicRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _my_music_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-music.component */ 8233);
/* harmony import */ var _components_track_track_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/track/track.component */ 3047);





const routes = [
    {
        path: '',
        component: _my_music_component__WEBPACK_IMPORTED_MODULE_0__.MyMusicComponent,
        pathMatch: 'full',
    },
    {
        path: 'track/:track',
        component: _components_track_track_component__WEBPACK_IMPORTED_MODULE_1__.TrackComponent,
    },
];
let MyMusicRoutingModule = class MyMusicRoutingModule {
};
MyMusicRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MyMusicRoutingModule);



/***/ }),

/***/ 8233:
/*!******************************************************!*\
  !*** ./src/app/pages/my-music/my-music.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMusicComponent": () => (/* binding */ MyMusicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-music.component.html?ngResource */ 605);
/* harmony import */ var _my_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-music.component.scss?ngResource */ 2579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade.animation */ 1182);
/* harmony import */ var src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/demo-data/demo-data.service */ 8207);






let MyMusicComponent = class MyMusicComponent {
    constructor(demoDataService) {
        this.demoDataService = demoDataService;
        this.data = this.demoDataService.getData();
    }
    ngOnInit() { }
};
MyMusicComponent.ctorParameters = () => [
    { type: src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_3__.DemoDataService }
];
MyMusicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-music',
        template: _my_music_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        host: { '[@fadeAnimation]': '' },
        styles: [_my_music_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [src_app_services_demo_data_demo_data_service__WEBPACK_IMPORTED_MODULE_3__.DemoDataService])
], MyMusicComponent);



/***/ }),

/***/ 9418:
/*!***************************************************!*\
  !*** ./src/app/pages/my-music/my-music.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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








let MyMusicModule = class MyMusicModule {
};
MyMusicModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_my_music_component__WEBPACK_IMPORTED_MODULE_1__.MyMusicComponent, _components_music_music_component__WEBPACK_IMPORTED_MODULE_2__.MusicComponent, _components_track_track_component__WEBPACK_IMPORTED_MODULE_3__.TrackComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _my_music_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyMusicRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule],
    })
], MyMusicModule);



/***/ }),

/***/ 8207:
/*!*********************************************************!*\
  !*** ./src/app/services/demo-data/demo-data.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoDataService": () => (/* binding */ DemoDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DemoDataService = class DemoDataService {
    constructor() {
        this.data = [
            {
                id: 'ch',
                image: 'https://i1.sndcdn.com/avatars-000582864471-vb016p-t500x500.jpg',
                title: 'Changing Homes',
                subtitle: 'Band',
                description: 'I\'m in this band! We make all kinds of weird shit regardless of genre.<br /><br />We are releasing our next EP sometime this year.',
                links: {
                    spotify: 'https://open.spotify.com/artist/5M1zRN28GLSDh7B4aJzNLg?si=0myo5Eq7QpKLQ-EBnkJHig',
                    soundcloud: 'https://soundcloud.com/changing-homes',
                    youtube: 'https://www.youtube.com/channel/UCRQygYIe8vP9qZmHwr_YtVA',
                },
                type: 'band',
            },
            {
                id: 'happydays',
                image: 'https://i.imgur.com/JECusiO.jpg',
                title: 'Happy Days',
                subtitle: 'Single',
                description: 'Happy Days is an instrumental, atmospheric song about a moment of reprieve, about daydreaming in the middle of work.   <br /><br /> The beautiful album art was again done by my amazing wife.',
                links: {
                    spotify: null,
                    soundcloud: null,
                    youtube: 'https://www.youtube.com/watch?v=ysqB6j-mgDA',
                },
                type: 'track',
            },
            {
                id: 'igtba',
                image: 'https://i.imgur.com/mrvshGX.png',
                title: 'It\'s going to be alright',
                subtitle: 'Single',
                description: 'This song is all about perseverance. Things are pretty bad right now around the world as I write this. 2020 is a year of tragedy and yet we go on no matter what in the hopes that tomorrow will be a better day. So really, hold on to hope. Hold on to your friends. It\'s not over yet. It\'s going to be alright!   <br /><br /> Amazing album art done by my wife.',
                links: {
                    spotify: null,
                    soundcloud: null,
                    youtube: 'https://www.youtube.com/watch?v=OzpzyVS3t90',
                },
                type: 'track',
            },
            {
                id: 'drive',
                image: 'https://i1.sndcdn.com/artworks-MyF33mqrsnokNxCT-x4TyOw-t500x500.jpg',
                title: 'Drive',
                subtitle: 'Single',
                description: 'This is my first solo track. <br /><br />Drive came out of me messing around with an app called Bandlab (which is really good, by the way, for making music on the go). It\'s a bluesy, hip-hoppy track that you\'ll want to play while you\'re driving alone at night, hence the title.',
                links: {
                    spotify: null,
                    soundcloud: 'https://soundcloud.com/raj-wraith/drive',
                    youtube: 'https://www.youtube.com/watch?v=N7BcEcDcTlo',
                },
                type: 'track',
            },
            {
                id: 'dissonance',
                image: 'https://i1.sndcdn.com/artworks-HuVDmCzKBz8yQtEU-KSfh9w-t500x500.jpg',
                title: 'Dissonance',
                subtitle: 'Single',
                description: 'The first track I mixed and mastered myself with lots of invaluable advice from friends. Bit off more than I could chew to be honest but hey, man\'s gotta try! <br /><br /> Amazing album art done by my wife.',
                links: {
                    spotify: null,
                    soundcloud: 'https://soundcloud.com/raj-wraith/dissonance',
                    youtube: 'https://www.youtube.com/watch?v=OxxGp1-lnyo',
                },
                type: 'track',
            },
        ];
    }
    getData() {
        return this.data;
    }
};
DemoDataService.ctorParameters = () => [];
DemoDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])
], DemoDataService);



/***/ }),

/***/ 9348:
/*!******************************************************************!*\
  !*** ./src/app/components/music/music.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".music {\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 15px;\n  margin-bottom: 50px;\n}\n.music .left {\n  margin-bottom: 15px;\n}\n.music .left img {\n  display: block;\n  width: 100%;\n  max-width: 400px;\n}\n.music .right h1 {\n  color: var(--text-color);\n  font-weight: 700;\n  font-size: 25px;\n  margin-bottom: 7.5px;\n}\n.music .right h3 {\n  color: var(--text-color);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.music .right p {\n  color: var(--text-color);\n  font-weight: 100;\n  line-height: 25px;\n  margin-bottom: 15px;\n}\n.music .right .links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 15px;\n}\n.music .right .links .link {\n  color: inherit;\n  border-radius: 3px;\n  padding: 4px 0;\n  text-decoration: none;\n  transition: background-color 0.2s ease-in-out;\n}\n.music .right .links .link div {\n  color: var(--text-color);\n  text-align: center;\n}\n.music .right .links .link div fa-icon {\n  margin-right: 0;\n}\n.music .right .links .link div p {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n@media (min-width: 768px) {\n  .music {\n    grid-template-columns: max-content 1fr;\n    grid-gap: 30px;\n  }\n  .music .left {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .music .right p.description {\n    max-width: 500px;\n  }\n  .music .right .links .link div fa-icon {\n    margin-right: 5px;\n  }\n  .music .right .links .link div p {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUlRO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUZaO0FBS1E7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFIWjtBQU1RO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQU9RO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFMWjtBQU1ZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUFKaEI7QUFNZ0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0FBSnBCO0FBS29CO0VBQ0ksZUFBQTtBQUh4QjtBQU1vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFKeEI7QUFZQTtFQUNJO0lBQ0ksc0NBQUE7SUFDQSxjQUFBO0VBVE47RUFVTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VBUlY7RUFXVTtJQUNJLGdCQUFBO0VBVGQ7RUFjc0I7SUFDSSxpQkFBQTtFQVoxQjtFQWNzQjtJQUNJLHFCQUFBO0VBWjFCO0FBQ0YiLCJmaWxlIjoibXVzaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG4ubXVzaWMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgLmxlZnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmlnaHQge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZ2FwOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5tdXNpYyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuICAgICAgICBncmlkLWdhcDogMzBweDtcbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 2746:
/*!******************************************************************!*\
  !*** ./src/app/components/track/track.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".track {\n  margin-bottom: 30px;\n}\n.track .top {\n  margin-bottom: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.track .top iframe {\n  width: 100%;\n}\n.track .bottom h1 {\n  color: var(--text-color);\n  font-weight: 700;\n  font-size: 25px;\n  margin-bottom: 7.5px;\n}\n.track .bottom h3 {\n  color: var(--text-color);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.track .bottom p {\n  color: var(--text-color);\n  font-weight: 100;\n  line-height: 25px;\n  margin-bottom: 15px;\n}\n.track .bottom .links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 15px;\n}\n.track .bottom .links .link {\n  color: inherit;\n  border-radius: 3px;\n  padding: 4px 0;\n  text-decoration: none;\n  transition: background-color 0.2s ease-in-out;\n}\n.track .bottom .links .link div {\n  color: var(--text-color);\n  text-align: center;\n}\n.track .bottom .links .link div fa-icon {\n  margin-right: 0;\n}\n.track .bottom .links .link div p {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n@media (min-width: 768px) {\n  .track .bottom .links .link div fa-icon {\n    margin-right: 5px;\n  }\n  .track .bottom .links .link div p {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7QUFESjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7QUFBWjtBQUtRO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUhaO0FBTVE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFKWjtBQU9RO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFOWjtBQU9ZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUFMaEI7QUFPZ0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0FBTHBCO0FBTW9CO0VBQ0ksZUFBQTtBQUp4QjtBQU9vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFMeEI7QUFhQTtFQU13QjtJQUNJLGlCQUFBO0VBZjFCO0VBaUJzQjtJQUNJLHFCQUFBO0VBZjFCO0FBQ0YiLCJmaWxlIjoidHJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG4udHJhY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgLnRvcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvdHRvbSB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3LjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBnYXA6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZhLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnRyYWNrIHtcbiAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 2579:
/*!*******************************************************************!*\
  !*** ./src/app/pages/my-music/my-music.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1tdXNpYy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8789:
/*!******************************************************************!*\
  !*** ./src/app/components/music/music.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"music\">\n    <div class=\"right\">\n        <h1>{{ data.title }}</h1>\n        <h3>{{ data.subtitle }}</h3>\n        <p class=\"description\" [innerHTML]=\"data.description\"></p>\n        <div\n            class=\"links\"\n            [ngClass]=\"{\n                'two-columns': numLinks === 2,\n                'three-columns': numLinks === 3\n            }\"\n        >\n            <a\n                *ngIf=\"data.links.spotify\"\n                class=\"link\"\n                [href]=\"data.links.spotify\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSpotify\"></fa-icon>\n                    <p>Spotify</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"data.links.soundcloud\"\n                class=\"link\"\n                [href]=\"data.links.soundcloud\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSoundcloud\"></fa-icon>\n                    <p>Soundcloud</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"data.links.youtube\"\n                class=\"link\"\n                [href]=\"data.links.youtube\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faYoutube\"></fa-icon>\n                    <p>YouTube</p>\n                </div>\n            </a>\n        </div>\n\n        <div\n            class=\"custom-button\"\n            *ngIf=\"data.type === 'track'\"\n            (click)=\"goToTrack(data.id)\"\n        >\n            <span>View Track</span>\n            <fa-icon [icon]=\"faArrowRight\"></fa-icon>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 1539:
/*!******************************************************************!*\
  !*** ./src/app/components/track/track.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"track\">\n    <div class=\"top\">\n        <iframe\n            height=\"400\"\n            [src]=\"embedVideoUrl\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n            allowfullscreen\n        ></iframe>\n    </div>\n    <div class=\"bottom\">\n        <h1>{{ trackData.title }}</h1>\n        <h3>{{ trackData.subtitle }}</h3>\n        <p class=\"description\" [innerHTML]=\"trackData.description\"></p>\n        <div\n            class=\"links\"\n            [ngClass]=\"{\n                'two-columns': numLinks === 2,\n                'three-columns': numLinks === 3\n            }\"\n        >\n            <a\n                *ngIf=\"trackData.links.spotify\"\n                class=\"link\"\n                [href]=\"trackData.links.spotify\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSpotify\"></fa-icon>\n                    <p>Spotify</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"trackData.links.soundcloud\"\n                class=\"link\"\n                [href]=\"trackData.links.soundcloud\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faSoundcloud\"></fa-icon>\n                    <p>Soundcloud</p>\n                </div>\n            </a>\n            <a\n                *ngIf=\"trackData.links.youtube\"\n                class=\"link\"\n                [href]=\"trackData.links.youtube\"\n                target=\"_blank\"\n            >\n                <div>\n                    <fa-icon [icon]=\"faYoutube\"></fa-icon>\n                    <p>YouTube</p>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 605:
/*!*******************************************************************!*\
  !*** ./src/app/pages/my-music/my-music.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<app-music *ngFor=\"let item of data\" [data]=\"item\"></app-music>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-music_my-music_module_ts.js.map