import {
  ANIMATION_MODULE_TYPE,
  CommonModule,
  Component,
  DOCUMENT,
  FactoryTarget,
  FontAwesomeModule,
  Inject,
  Injectable,
  LottieComponent,
  NgModule,
  NgOptimizedImage,
  NgZone,
  Renderer2,
  RendererFactory2,
  RouterModule,
  RuntimeError,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __decorate,
  __metadata,
  animate,
  core_exports,
  faGithub,
  faPaperPlane,
  inject,
  sequence,
  style,
  transition,
  trigger,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable
} from "./chunk-OWUKDESI.js";
import "./chunk-CX3I3NQG.js";

// angular:jit:template:src/app/pages/portfolio/portfolio.component.html
var portfolio_component_default = `<div class="bounding-box">
  <div class="tracking-circle" [ngStyle]="{ 'top': circleTopInPixel, 'left': trackingLineLeftOffset }" ></div>

  <div id="introduction" class="introduction-container-outer" #introductionContainerOuter [ngClass]="isElementInView('1') ? 'in-view' : ''">
    <div class="left-border-line" #trackingLine></div>
    <div class="introduction-container-inner">
      <div class='profile-photo-container' id="1" #element1>
        <img priority="true" ngSrc='assets/mc.png' alt='pixel art of master chief' height='337' width='337' />
      </div>
      <div class="introduction">
        <p
          (mouseenter)="play()"
          (mouseleave)="stop()"
          id="hello-there"
          style="margin-bottom: 1rem; position: relative; width: fit-content;">Hello there! I'm Raj <ng-lottie width="45px" height="50px" [options]="options" [styles]="styles" (animationCreated)="animationCreated($event)"></ng-lottie></p>
        <h2>I'm a software developer</h2>
        <p>This is my personal corner on the Internet</p>
      </div>
    </div>
  </div>

  <div id="section1" class="section" #element2 [ngClass]="isElementInView('section1') ? 'in-view' : ''">
    <div class="left-border-line"></div>
    <h2 id="2">I like all things TypeScript</h2>
    <p class="text-padding">
      My front-end framework of choice is <b>Angular</b> but I also work with Vue and React.
      Postgres is my goto DB solution for personal projects.
      I also have a good amount of experience with <b>NestJS</b>.
    </p>
  </div>

  <div id="section2" class='section' #element3 [ngClass]="isElementInView('section2') ? 'in-view' : ''">
    <div class="left-border-line"></div>
    <h2 id="3">I <span>\u2764\uFE0F</span> working on side-projects</h2>

    <div class="projects-grid text-padding">
      <div class="project-card">
        <div class="project-card__header">
          <h3 class="project-card__title">DoubleJump</h3>
          <span class="project-card__badge wip">WIP</span>
        </div>
        <p class="project-card__description">A knowledge sharing and career growth app for internal teams.</p>
        <div class="project-card__tags">
          <span class="tag">Angular</span>
          <span class="tag">NestJS</span>
          <span class="tag">Postgres</span>
        </div>
        <a class="custom-button project-card__link" href="https://github.com/rajsaha/doublejump" target="_blank">
          <span>View on GitHub</span>
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>
      </div>

      <div class="project-card">
        <div class="project-card__header">
          <h3 class="project-card__title">idontwannalogtime</h3>
          <span class="project-card__badge archived">Archived</span>
        </div>
        <p class="project-card__description">A time logger I built for the workplace. Made so I don't have to think too hard about logging hours.</p>
        <div class="project-card__tags">
          <span class="tag">Vue</span>
          <span class="tag">NestJS</span>
          <span class="tag">MongoDB</span>
        </div>
        <a class="custom-button project-card__link" href="https://github.com/rajsaha/idontwannalogtime" target="_blank">
          <span>View on GitHub</span>
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>
      </div>

      <div class="project-card">
        <div class="project-card__header">
          <h3 class="project-card__title">Everest</h3>
          <span class="project-card__badge archived">Archived</span>
        </div>
        <p class="project-card__description">A social network lite from 2020. Never shipped, but I learned a butt load building it.</p>
        <div class="project-card__tags">
          <span class="tag">Angular</span>
          <span class="tag">Express</span>
          <span class="tag">MongoDB</span>
        </div>
        <a class="custom-button project-card__link" href="https://github.com/rajsaha/ng_everest" target="_blank">
          <span>View on GitHub</span>
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>
      </div>

      <div class="project-card">
        <div class="project-card__header">
          <h3 class="project-card__title">Grab Usage Analyzer</h3>
          <span class="project-card__badge wip">WIP</span>
        </div>
        <p class="project-card__description">A Java app that crunches your Grab ride history and spits out usage stats.</p>
        <div class="project-card__tags">
          <span class="tag">Spring Boot</span>
        </div>
        <a class="custom-button project-card__link" href="https://github.com/rajsaha/grab-usage-analyzer" target="_blank">
          <span>View on GitHub</span>
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>
      </div>

    </div>
  </div>

  <div id="section3" class='section' #element4 [ngClass]="isElementInView('section3') ? 'in-view' : ''">
    <div class="left-border-line"></div>
    <h2 id="4">I write sometimes</h2>
    <p>My write-ups are on <a href='https://medium.com/@rajwraith' target='_blank'>Medium</a> and <a href='https://dev.to/rajsaha' target='_blank'>Dev.to</a>.</p>
  </div>

  <div id="section4" class='section' #element5 [ngClass]="isElementInView('section4') ? 'in-view' : ''">
    <div class="left-border-line"></div>
    <h2>I used to make music</h2>
    <p>Here's my <a href='https://www.youtube.com/channel/UCmO2-0zBQhcXXjPcLEfk-Iw' target='_blank'>YouTube</a> if you're into lo-fi/atmospheric weirdness.</p>
  </div>

  <div id="section5" class="section" #element6 #contactMeSection [ngClass]="isElementInView('section5') ? 'in-view' : ''">
    <div class="left-border-line-end"></div>
    <h2 id="5">Contact Me</h2>
    <p style="margin-bottom: 1rem;">Send me an email at rajsaha&#64;outlook.com</p>
    <div class="custom-button" (click)="sendEmail()" (keydown.enter)="sendEmail()" aria-label="Send Email">
      <span>Send Email</span>
      <fa-icon [icon]="faPaperPlane"></fa-icon>
    </div>
  </div>
</div>
`;

// angular:jit:style:src/app/pages/portfolio/portfolio.component.scss
var portfolio_component_default2 = '/* src/app/pages/portfolio/portfolio.component.scss */\n.bounding-box {\n  position: relative;\n}\n.bounding-box .tracking-circle {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #7DE2D1;\n  position: fixed;\n  transition: top 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  z-index: 2;\n  box-shadow:\n    0 0 5.6px rgba(126, 225, 209, 0.2),\n    0 0 13.6px rgba(126, 225, 209, 0.028),\n    0 0 25.5px rgba(126, 225, 209, 0.3),\n    0 0 45.6px rgba(126, 225, 209, 0.042),\n    0 0 85.2px rgba(126, 225, 209, 0.1),\n    0 0 204px rgba(126, 225, 209, 0.1);\n}\n.bounding-box .introduction-container-outer {\n  display: grid;\n  align-items: center;\n  height: 100vh;\n  padding-left: 2rem;\n  position: relative;\n  opacity: 0.3;\n  transition: opacity 0.3s ease-in-out;\n}\n.bounding-box .introduction-container-outer .left-border-line {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 1px;\n  height: 50%;\n  background: rgb(255, 255, 255);\n  background:\n    linear-gradient(\n      to bottom,\n      #333 0%,\n      #fff 100%);\n  z-index: -1;\n}\n.bounding-box .introduction-container-outer .left-border-line::before {\n  content: "";\n  position: absolute;\n  border-radius: 50%;\n  border: 5px solid var(--left-border-line-circle-bg-color);\n  left: -5px;\n  top: 0;\n  z-index: 1;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .profile-photo-container {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: 5px solid #7DE2D1;\n  margin-bottom: 2rem;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .profile-photo-container img {\n  aspect-ratio: initial;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction {\n  z-index: 1;\n  align-self: center;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction p {\n  line-height: 30px;\n}\n.bounding-box .introduction-container-outer .introduction-container-inner .introduction h2 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n  max-width: 500px;\n}\n.bounding-box .section {\n  z-index: 1;\n  min-height: 50vh;\n  padding-left: 2rem;\n  padding-bottom: 15px;\n  position: relative;\n  opacity: 0.3;\n  transition: opacity 0.3s ease-in-out;\n}\n.bounding-box .section h2 span {\n  text-shadow: none;\n}\n.bounding-box .section .left-border-line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 100%;\n  background: rgb(255, 255, 255);\n  z-index: 0;\n}\n.bounding-box .section:nth-child(odd) .left-border-line {\n  background:\n    linear-gradient(\n      to bottom,\n      #fff 0%,\n      #333 100%);\n}\n.bounding-box .section:nth-child(odd) .left-border-line:before {\n  border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n}\n.bounding-box .section:nth-child(even) .left-border-line {\n  background:\n    linear-gradient(\n      to bottom,\n      #333 0%,\n      #fff 100%);\n}\n.bounding-box .section:nth-child(even) .left-border-line:before {\n  border: 5px solid var(--left-border-line-circle-bg-color-section-even);\n}\n.bounding-box .section .left-border-line::before {\n  content: "";\n  position: absolute;\n  z-index: 1;\n  border-radius: 50%;\n  left: -5px;\n  top: 0;\n}\n.bounding-box .section .left-border-line-end {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 10px;\n  background-color: white;\n}\n.bounding-box .section .left-border-line-end::after {\n  content: "";\n  position: absolute;\n  border-radius: 50%;\n  border: 5px solid var(--left-border-line-circle-bg-color-section-odd);\n  left: -5px;\n  bottom: -10px;\n}\n.bounding-box .section h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n  max-width: 500px;\n}\n.bounding-box .section p {\n  font-weight: 100;\n  line-height: 30px;\n  max-width: 500px;\n}\n.bounding-box .section button {\n  background-color: transparent;\n  border: 1px solid var(--table-border-color);\n  color: var(--text-color);\n  padding: 5px 10px;\n  width: max-content;\n  border-radius: 3px;\n}\n.text-padding {\n  padding-bottom: 10rem;\n}\n.in-view {\n  opacity: 1 !important;\n}\n.projects-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));\n  gap: 1.5rem;\n  max-width: 700px;\n}\n.project-card {\n  border: 1px dashed var(--table-border-color);\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  border-radius: 5px;\n  background-color: var(--card-bg-color);\n  transition: all 0.2s ease-in-out;\n}\n.project-card:hover {\n  box-shadow: 3px 3px rgb(61, 173, 155);\n}\n.project-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.project-card__title {\n  font-family: "Press Start 2P", serif;\n  font-size: 0.6rem;\n  line-height: 1.4;\n  color: var(--text-color);\n  text-shadow: none;\n}\n.project-card__badge {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.55rem;\n  padding: 2px 6px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.project-card__badge.wip {\n  background-color: #339989;\n  color: #fff;\n}\n.project-card__badge.archived {\n  background-color: var(--table-border-color);\n  color: var(--text-color);\n}\n.project-card__description {\n  font-size: 0.7rem;\n  line-height: 1.6;\n  flex: 1;\n}\n.project-card__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.project-card__link {\n  align-self: flex-start;\n  margin-top: auto;\n}\n.tag {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.6rem;\n  padding: 2px 8px;\n  border: 1px solid var(--table-border-color);\n  color: var(--text-color);\n}\n/*# sourceMappingURL=portfolio.component.css.map */\n';

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.2.7",
    ngImport: core_exports,
    type: _AnimationBuilder,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static \u0275prov = \u0275\u0275ngDeclareInjectable({
    minVersion: "12.0.0",
    version: "21.2.7",
    ngImport: core_exports,
    type: _AnimationBuilder,
    providedIn: "root",
    useFactory: () => inject(BrowserAnimationBuilder)
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.2.7",
  ngImport: core_exports,
  type: AnimationBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }]
});
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.2.7",
    ngImport: core_exports,
    type: _BrowserAnimationBuilder,
    deps: [{
      token: RendererFactory2
    }, {
      token: DOCUMENT
    }],
    target: FactoryTarget.Injectable
  });
  static \u0275prov = \u0275\u0275ngDeclareInjectable({
    minVersion: "12.0.0",
    version: "21.2.7",
    ngImport: core_exports,
    type: _BrowserAnimationBuilder,
    providedIn: "root"
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.2.7",
  ngImport: core_exports,
  type: BrowserAnimationBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// src/app/animations/fade.animation.ts
var fadeAnimation = (
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger("fadeAnimation", [
    // route 'enter' transition
    transition(":enter", [
      // css styles at start of transition
      style({ opacity: 0 }),
      // animation and styles at end of transition
      animate(".3s", style({ opacity: 1 }))
    ])
  ])
);

// src/app/pages/portfolio/portfolio.component.ts
var PortfolioComponent = class PortfolioComponent2 {
  constructor(renderer, ngZone) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.detectedElements = [];
    this.introductionContainerOuterHeight = 0;
    this.contactMeSectionHeight = 0;
    this.circleTop = 0;
    this.options = {
      path: "assets/lottie_animations/hand_wave.json",
      loop: false,
      name: "hand-wave"
    };
    this.styles = {
      position: "absolute",
      right: "-40px",
      top: "-18px"
    };
    this.faPaperPlane = faPaperPlane;
    this.faGithub = faGithub;
    this.renderer.listen("window", "scroll", this.detectElms.bind(this));
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.introductionContainerOuterHeight = this.introductionContainerOuter.nativeElement.offsetHeight;
    this.contactMeSectionHeight = this.contactMeSection.nativeElement.offsetHeight;
    setTimeout(this.detectElms.bind(this));
  }
  get trackingLineLeftOffset() {
    if (this.trackingLine) {
      return this.trackingLine.nativeElement.getBoundingClientRect().x - 10 + "px";
    }
  }
  get circleTopInPixel() {
    return this.circleTop + "px";
  }
  sendEmail() {
    window.open("mailto:rajsaha@outlook.com");
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
      if (firstElement.nativeElement.id === "1" && this.trackingLine) {
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
  static {
    this.ctorParameters = () => [
      { type: Renderer2 },
      { type: NgZone }
    ];
  }
  static {
    this.propDecorators = {
      trackingLine: [{ type: ViewChild, args: ["trackingLine"] }],
      introductionContainerOuter: [{ type: ViewChild, args: ["introductionContainerOuter"] }],
      contactMeSection: [{ type: ViewChild, args: ["contactMeSection"] }],
      elements: [{ type: ViewChildren, args: ["element1, element2, element3, element4, element5, element6"] }]
    };
  }
};
PortfolioComponent = __decorate([
  Component({
    selector: "app-portfolio",
    template: portfolio_component_default,
    animations: [fadeAnimation],
    host: { "[@fadeAnimation]": "" },
    standalone: false,
    styles: [portfolio_component_default2]
  }),
  __metadata("design:paramtypes", [Renderer2, NgZone])
], PortfolioComponent);
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) || rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// src/app/pages/portfolio/portfolio-routing.module.ts
var routes = [
  {
    path: "",
    component: PortfolioComponent,
    pathMatch: "full"
  }
];
var PortfolioRoutingModule = class PortfolioRoutingModule2 {
};
PortfolioRoutingModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
], PortfolioRoutingModule);

// src/app/pages/portfolio/portfolio.module.ts
var PortfolioModule = class PortfolioModule2 {
};
PortfolioModule = __decorate([
  NgModule({
    declarations: [PortfolioComponent],
    imports: [
      CommonModule,
      PortfolioRoutingModule,
      FontAwesomeModule,
      NgOptimizedImage,
      LottieComponent
    ]
  })
], PortfolioModule);
export {
  PortfolioModule
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v21.2.7
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=portfolio.module-Q4SJNAK6.js.map
