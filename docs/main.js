(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.service.ts":
/*!***************************************!*\
  !*** ./src/app/animations.service.ts ***!
  \***************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
        this.showTitle = true;
    }
    AnimationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'bio', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_3__["BioComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"] },
    { path: 'like', component: _like_like_component__WEBPACK_IMPORTED_MODULE_4__["LikeComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"app-canvas\">\n  <!-- <img class=\"profileimg\" src=\"../assets/burger.svg\"> -->\n  <div id=\"app-gauge\">\n    <div *ngIf=\"!hideStructure\" class=\"structure\">\n      <div class=\"buildings-exp\">\n        div <sup>.buildings</sup><sub> rotate({{buildingsDeg}}&deg;)</sub>\n      </div>\n      <div class=\"gloss-exp\">\n        div <sup>.app-gloss</sup><sub> rotate(-{{buildingsDeg}}&deg;)</sub>\n      </div>\n      <div class=\"route-exp\">\n        routeroutlet <sup> / {{routeName}}</sup>\n      </div>\n    </div>\n\n    <div class=\"buildings\">\n    </div>\n    <div class=\"scrollbar\">\n      <div class=\"scrollbar-inner\"></div>\n    </div>\n    <div [ngClass]=\"{'noscroll': isIe}\" (scroll)=\"onScroll($event)\" id=\"view-container\">\n      <div *ngIf=\"isTitle\" class=\"title-holder\">\n        <h2>{{title}}</h2>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"gauge-bg\">\n\n    </div>\n    <div class=\"gauge-inner\">\n      <div *ngIf=\"desktop\" class=\"desktop-nav\">\n        <div [routerLink]=\"'bio'\" (click)=\"rotateGaugeBg(360, '.5s'); indicate('bio')\" [ngClass]=\"{'bio-active': bio}\"\n          class=\"item-top bio\">\n          <div class=\"active\"></div>\n        </div>\n        <div [routerLink]=\"'skills'\" (click)=\"rotateGaugeBg(90, '.5s'); indicate('skills')\"\n          [ngClass]=\"{'skills-active': skills}\" class=\"item-right skills\">\n          <div class=\"active\"></div>\n        </div>\n        <div [routerLink]=\"'like'\" (click)=\"rotateGaugeBg(180, '.5s'); indicate('like')\"\n          [ngClass]=\"{'like-active': like}\" class=\"item-bottom like\">\n          <div class=\"active\"></div>\n        </div>\n        <div [routerLink]=\"'chat'\" (click)=\"rotateGaugeBg(270, '.5s'); indicate('chat')\"\n          [ngClass]=\"{'chat-active': chat}\" class=\"item-left chat\">\n          <div class=\"active\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gauge-shadow, #app-canvas #app-gauge .gauge-bg {\n  box-shadow: 20px 32px 43px -21px rgba(0, 0, 0, 0.5); }\n\n.gauge-gradient {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#232728+0,60656d+100 */\n  background: #232728;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #232728 0%, #60656d 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#232728', endColorstr='#60656d',GradientType=0 );\n  /* IE6-9 */ }\n\n.scrollbar-gradient {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100;White+to+Transparent */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );\n  /* IE6-9 */\n  background-size: cover; }\n\n.black-to-transparent {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n  /* IE6-9 */ }\n\n.item, #app-canvas #app-gauge .gauge-inner .desktop-nav .item-top, #app-canvas #app-gauge .gauge-inner .desktop-nav .item-right, #app-canvas #app-gauge .gauge-inner .desktop-nav .item-left, #app-canvas #app-gauge .gauge-inner .desktop-nav .item-bottom {\n  position: absolute;\n  width: 5vw;\n  height: 5vw;\n  min-width: 70px;\n  min-height: 70px;\n  border-radius: 50%;\n  max-width: 100px;\n  overflow: hidden;\n  max-height: 100px;\n  border: 3px solid #414042;\n  background-color: #232728;\n  background-color: #232728;\n  background-size: 102%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.2s background-image; }\n\n.active {\n  display: none; }\n\n.rotated {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.profileimg {\n  cursor: pointer;\n  width: 70px;\n  height: auto;\n  position: absolute;\n  left: 25px;\n  top: 25px; }\n\n#app-canvas {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  background-color: white;\n  background-size: 42vw;\n  background-position: center center;\n  background-repeat: no-repeat;\n  transition: 2s -webkit-transform;\n  transition: 2s transform;\n  transition: 2s transform, 2s -webkit-transform; }\n\n@media screen and (max-width: 1024px) {\n    #app-canvas {\n      display: initial;\n      background-size: cover; } }\n\n#app-canvas #app-gauge {\n    border-radius: 50%;\n    margin: 0 auto;\n    vertical-align: middle;\n    background-repeat: no-repeat;\n    position: relative;\n    height: 30vw;\n    width: 30vw;\n    min-width: 500px;\n    min-height: 500px;\n    padding: 2px;\n    opacity: 0;\n    transition: 2s opacity; }\n\n#app-canvas #app-gauge .structure {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      font-size: 26px; }\n\n#app-canvas #app-gauge .structure sub {\n        font-size: 18px; }\n\n#app-canvas #app-gauge .structure div {\n        position: absolute;\n        border-bottom: 1px dashed #464646; }\n\n#app-canvas #app-gauge .structure .buildings-exp {\n        left: -21vw;\n        top: 0;\n        width: 60%; }\n\n#app-canvas #app-gauge .structure .gloss-exp {\n        right: -21vw;\n        top: 50px;\n        width: 60%;\n        text-align: right; }\n\n#app-canvas #app-gauge .structure .route-exp {\n        right: -21vw;\n        top: 400px;\n        width: 60%;\n        text-align: right; }\n\n#app-canvas #app-gauge .scrollbar {\n      display: none;\n      position: absolute;\n      left: -1%;\n      top: -1%;\n      border-radius: 50%;\n      z-index: 2;\n      width: 102%;\n      height: 102%; }\n\n#app-canvas #app-gauge .scrollbar .scrollbar-inner {\n        position: absolute;\n        left: 50%;\n        top: -5%;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        z-index: 3;\n        background: #2e2e2e; }\n\n@media screen and (max-width: 1024px) {\n        #app-canvas #app-gauge .scrollbar {\n          display: none;\n          position: absolute;\n          top: 0;\n          left: 0;\n          z-index: 3;\n          width: 3px;\n          border-radius: 0; }\n          #app-canvas #app-gauge .scrollbar .scrollbar-inner {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 10px;\n            height: 100%;\n            border-radius: 0;\n            z-index: 3;\n            background: white; } }\n\n#app-canvas #app-gauge #view-container {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      max-width: 100%;\n      max-height: 100%;\n      min-width: 100%;\n      min-height: 100%;\n      top: 0;\n      left: 0;\n      z-index: 2;\n      text-align: center;\n      overflow: hidden;\n      color: white;\n      border-radius: 50%;\n      transition: 2s -webkit-transform;\n      transition: 2s transform;\n      transition: 2s transform, 2s -webkit-transform;\n      overflow-y: scroll;\n      overflow-x: hidden; }\n\n#app-canvas #app-gauge #view-container .title-holder {\n        z-index: 3;\n        text-align: center;\n        top: 0;\n        left: 0;\n        overflow: hidden;\n        height: 80px;\n        max-height: 80px;\n        width: 100%;\n        position: absolute;\n        background: white;\n        color: black; }\n\n#app-canvas #app-gauge #view-container .title-holder h2 {\n          margin: 25px 0 0 0; }\n\n@media screen and (max-width: 1024px) {\n          #app-canvas #app-gauge #view-container .title-holder {\n            height: 60px;\n            max-height: 60px;\n            width: 100%;\n            top: 0; }\n            #app-canvas #app-gauge #view-container .title-holder h2 {\n              margin-top: 4px; } }\n\n@media screen and (max-width: 1024px) {\n        #app-canvas #app-gauge #view-container {\n          border-radius: 0; } }\n\n#app-canvas #app-gauge #view-container router-outlet {\n        border-radius: 50%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        width: 100%;\n        height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n        visibility: hidden; }\n\n#app-canvas #app-gauge #view-container::-webkit-scrollbar {\n        display: none; }\n\n#app-canvas #app-gauge #view-container::-webkit-scrollbar-track {\n        display: none; }\n\n#app-canvas #app-gauge #view-container::-webkit-scrollbar-thumb {\n        display: none; }\n\n#app-canvas #app-gauge #view-container::-webkit-scrollbar-thumb:hover {\n        display: none; }\n\n@media screen and (max-width: 1024px) {\n      #app-canvas #app-gauge {\n        vertical-align: unset;\n        margin: initial;\n        position: static;\n        border-radius: initial;\n        width: 100%;\n        height: 100%;\n        padding: 0; } }\n\n#app-canvas #app-gauge .gauge-bg {\n      position: absolute;\n      top: -1%;\n      left: -1%;\n      height: 102%;\n      width: 102%;\n      overflow: hidden;\n      border-radius: 50%;\n      background-image: url('gauge.png');\n      background-size: 102%;\n      opacity: 0.3;\n      background-position: center center;\n      background-repeat: no-repeat;\n      -webkit-transform: rotate(-360deg);\n      transform: rotate(-360deg); }\n\n@media screen and (max-width: 1024px) {\n        #app-canvas #app-gauge .gauge-bg {\n          background-image: none;\n          border-radius: 0; } }\n\n#app-canvas #app-gauge .buildings {\n      background-image: url('buildings.svg');\n      background-size: 96%;\n      background-position: center center;\n      background-repeat: no-repeat;\n      left: -20%;\n      border-radius: 50%;\n      top: -20%;\n      width: 140%;\n      height: 140%;\n      position: absolute;\n      z-index: 0; }\n\n@media screen and (max-width: 1024px) {\n        #app-canvas #app-gauge .buildings {\n          display: none;\n          transition-timing-function: ease-in-out; } }\n\n#app-canvas #app-gauge .gauge-inner {\n      background: #232728;\n      background: #232728;\n      background-repeat: no-repeat;\n      background-size: cover;\n      opacity: 1;\n      filter: alpha(opacity=80) progid:DXImageTransform.Microsoft.Alpha(opacity=80);\n      width: 100%;\n      height: 100%;\n      border-radius: inherit; }\n\n@media screen and (max-width: 1024px) {\n        #app-canvas #app-gauge .gauge-inner {\n          opacity: 0.6; } }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-top {\n          top: -180px;\n          left: 12.5vw; }\n\n@media screen and (max-width: 1670px) {\n            #app-canvas #app-gauge .gauge-inner .desktop-nav .item-top {\n              left: 210px;\n              top: -180px; } }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-top .active:after {\n            top: 6px;\n            left: 58%;\n            border: solid transparent;\n            content: \" \";\n            height: 0;\n            width: 0;\n            position: absolute;\n            pointer-events: none;\n            border-color: rgba(0, 0, 0, 0);\n            border-top-color: #414042;\n            border-width: 8px;\n            margin-left: -15px; }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-right {\n          right: -180px;\n          top: 12vw; }\n\n@media screen and (max-width: 1670px) {\n            #app-canvas #app-gauge .gauge-inner .desktop-nav .item-right {\n              right: -180px;\n              top: 190px; } }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-right .active:after {\n            right: 12px;\n            top: 58%;\n            border: solid transparent;\n            content: \" \";\n            height: 0;\n            width: 0;\n            position: absolute;\n            pointer-events: none;\n            border-color: rgba(255, 255, 255, 0);\n            border-right-color: #414042;\n            border-width: 8px;\n            margin-top: -15px; }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-left {\n          left: -180px;\n          top: 12vw; }\n\n@media screen and (max-width: 1670px) {\n            #app-canvas #app-gauge .gauge-inner .desktop-nav .item-left {\n              left: -180px;\n              top: 190px; } }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-left .active:after {\n            left: 6px;\n            top: 58%;\n            border: solid transparent;\n            content: \" \";\n            height: 0;\n            width: 0;\n            position: absolute;\n            pointer-events: none;\n            border-color: rgba(255, 255, 255, 0);\n            border-left-color: #414042;\n            border-width: 8px;\n            margin-top: -15px; }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-bottom {\n          bottom: -180px;\n          left: 12.5vw; }\n\n@media screen and (max-width: 1670px) {\n            #app-canvas #app-gauge .gauge-inner .desktop-nav .item-bottom {\n              left: 210px;\n              bottom: -180px; } }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .item-bottom .active:after {\n            bottom: 6px;\n            left: 58%;\n            border: solid transparent;\n            content: \" \";\n            height: 0;\n            width: 0;\n            position: absolute;\n            pointer-events: none;\n            border-color: rgba(255, 255, 255, 0);\n            border-bottom-color: #414042;\n            border-width: 8px;\n            margin-left: -15px; }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .bio {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23222727%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Ebio%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%3Cpath id%3D%22usericon%22 class%3D%22st1%22 d%3D%22M67.9%2C61.3c-3.6-2.2-7.6-3.8-11.8-4.7c2.3-3.1%2C3.9-6.6%2C4.8-10.4c1-4%2C0.6-11.8-3.2-16.6%0D%09%09%09%09c-4-5-11.3-5.8-16.3-1.8c-0.7%2C0.5-1.3%2C1.1-1.8%2C1.8c-3.8%2C4.9-4.2%2C12.6-3.2%2C16.6c0.9%2C3.8%2C2.5%2C7.3%2C4.8%2C10.4%0D%09%09%09%09c-4.2%2C0.9-8.2%2C2.5-11.8%2C4.7c-1.2%2C0.8-1.5%2C2.4-0.7%2C3.5c0.5%2C0.7%2C1.3%2C1.1%2C2.1%2C1.1h35.6c1.4%2C0%2C2.5-1.1%2C2.6-2.5%0D%09%09%09%09C69%2C62.6%2C68.6%2C61.8%2C67.9%2C61.3L67.9%2C61.3z M54.1%2C55.1l-0.4%2C0.5c-3%2C3.5-7%2C3.5-10%2C0l-0.4-0.5C39.6%2C50.5%2C38%2C44.7%2C38.7%2C39%0D%09%09%09%09c0.7-5.4%2C3.8-11.1%2C10-11.1s9.3%2C5.7%2C10%2C11.1C59.4%2C44.8%2C57.7%2C50.5%2C54.1%2C55.1z M30.9%2C63.5c3.4-2.1%2C7.1-3.5%2C10.9-4.3l3.2-0.7%0D%09%09%09%09c2.2%2C1.6%2C5.2%2C1.6%2C7.5%2C0l3.2%2C0.7c3.9%2C0.8%2C7.5%2C2.3%2C10.9%2C4.3H30.9z%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .bio:hover {\n            background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23222727%3B%7D%0D%09.st2%7Bfill%3Anone%3Bstroke%3A%23222727%3Bstroke-width%3A2%3Bstroke-miterlimit%3A10%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Ebio_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%3Cpath id%3D%22usericon%22 class%3D%22st1%22 d%3D%22M67.9%2C61.3c-3.6-2.2-7.6-3.8-11.8-4.7c2.3-3.1%2C3.9-6.6%2C4.8-10.4c1-4%2C0.6-11.8-3.2-16.6%0D%09%09%09%09c-4-5-11.3-5.8-16.3-1.8c-0.7%2C0.5-1.3%2C1.1-1.8%2C1.8c-3.8%2C4.9-4.2%2C12.6-3.2%2C16.6c0.9%2C3.8%2C2.5%2C7.3%2C4.8%2C10.4%0D%09%09%09%09c-4.2%2C0.9-8.2%2C2.5-11.8%2C4.7c-1.2%2C0.8-1.5%2C2.4-0.7%2C3.5c0.5%2C0.7%2C1.3%2C1.1%2C2.1%2C1.1h35.6c1.4%2C0%2C2.5-1.1%2C2.6-2.5%0D%09%09%09%09C69%2C62.6%2C68.6%2C61.8%2C67.9%2C61.3L67.9%2C61.3z M54.1%2C55.1l-0.4%2C0.5c-3%2C3.5-7%2C3.5-10%2C0l-0.4-0.5C39.7%2C50.5%2C38%2C44.7%2C38.7%2C39%0D%09%09%09%09c0.7-5.4%2C3.8-11.1%2C10-11.1s9.3%2C5.7%2C10%2C11.1C59.4%2C44.8%2C57.7%2C50.5%2C54.1%2C55.1z M30.9%2C63.5c3.4-2.1%2C7.1-3.5%2C10.9-4.3l3.2-0.7%0D%09%09%09%09c2.2%2C1.6%2C5.2%2C1.6%2C7.5%2C0l3.2%2C0.7c3.9%2C0.8%2C7.5%2C2.3%2C10.9%2C4.3H30.9z%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cpath class%3D%22st2%22 d%3D%22M41.3%2C38.5c0-1.3%2C1-2.3%2C2.3-2.3s2.3%2C1%2C2.3%2C2.3%22%2F%3E%0D%3Cpath class%3D%22st2%22 d%3D%22M50.7%2C38.5c0-1.3%2C1-2.3%2C2.3-2.3s2.3%2C1%2C2.3%2C2.3%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .bio-active {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23222727%3B%7D%0D%09.st2%7Bfill%3Anone%3Bstroke%3A%23222727%3Bstroke-width%3A2%3Bstroke-miterlimit%3A10%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Ebio_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%3Cpath id%3D%22usericon%22 class%3D%22st1%22 d%3D%22M67.9%2C61.3c-3.6-2.2-7.6-3.8-11.8-4.7c2.3-3.1%2C3.9-6.6%2C4.8-10.4c1-4%2C0.6-11.8-3.2-16.6%0D%09%09%09%09c-4-5-11.3-5.8-16.3-1.8c-0.7%2C0.5-1.3%2C1.1-1.8%2C1.8c-3.8%2C4.9-4.2%2C12.6-3.2%2C16.6c0.9%2C3.8%2C2.5%2C7.3%2C4.8%2C10.4%0D%09%09%09%09c-4.2%2C0.9-8.2%2C2.5-11.8%2C4.7c-1.2%2C0.8-1.5%2C2.4-0.7%2C3.5c0.5%2C0.7%2C1.3%2C1.1%2C2.1%2C1.1h35.6c1.4%2C0%2C2.5-1.1%2C2.6-2.5%0D%09%09%09%09C69%2C62.6%2C68.6%2C61.8%2C67.9%2C61.3L67.9%2C61.3z M54.1%2C55.1l-0.4%2C0.5c-3%2C3.5-7%2C3.5-10%2C0l-0.4-0.5C39.7%2C50.5%2C38%2C44.7%2C38.7%2C39%0D%09%09%09%09c0.7-5.4%2C3.8-11.1%2C10-11.1s9.3%2C5.7%2C10%2C11.1C59.4%2C44.8%2C57.7%2C50.5%2C54.1%2C55.1z M30.9%2C63.5c3.4-2.1%2C7.1-3.5%2C10.9-4.3l3.2-0.7%0D%09%09%09%09c2.2%2C1.6%2C5.2%2C1.6%2C7.5%2C0l3.2%2C0.7c3.9%2C0.8%2C7.5%2C2.3%2C10.9%2C4.3H30.9z%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cpath class%3D%22st2%22 d%3D%22M41.3%2C38.5c0-1.3%2C1-2.3%2C2.3-2.3s2.3%2C1%2C2.3%2C2.3%22%2F%3E%0D%3Cpath class%3D%22st2%22 d%3D%22M50.7%2C38.5c0-1.3%2C1-2.3%2C2.3-2.3s2.3%2C1%2C2.3%2C2.3%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .skills {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23232728%3B%7D%0D%3C%2Fstyle%3E%0D%3Csymbol  id%3D%22skills%22 viewBox%3D%22-48.7 -48.7 97.3 97.3%22%3E%0D%09%3Ccircle class%3D%22st0%22 cx%3D%220%22 cy%3D%220%22 r%3D%2248.7%22%2F%3E%0D%09%3Cpath id%3D%22cup_3_%22 class%3D%22st1%22 d%3D%22M14.1-12.8l-1.4-4.3c-0.3-1-1.2-1.6-2.2-1.6h-21c-1%2C0-1.9%2C0.7-2.2%2C1.6l-1.4%2C4.3%0D%09%09c-1.2%2C0.1-2.2%2C1.1-2.2%2C2.3V-7c0%2C1.3%2C1%2C2.3%2C2.3%2C2.3h1.2c0%2C0.1%2C0%2C0.2%2C0%2C0.3l2.3%2C21c0.1%2C1.2%2C1.1%2C2.1%2C2.3%2C2.1H8.2%0D%09%09c1.2%2C0%2C2.2-0.9%2C2.3-2.1l2.3-21c0-0.1%2C0-0.2%2C0-0.3H14c1.3%2C0%2C2.3-1.1%2C2.3-2.3v-3.5C16.3-11.7%2C15.4-12.8%2C14.1-12.8z M-10.5-16.3h21%0D%09%09l1.2%2C3.5h-23.3L-10.5-16.3z M-8.2%2C16.3l-0.4-3.5H8.5l-0.4%2C3.5H-8.2z M8.7%2C11.7H-8.7L-10%2C0h20L8.7%2C11.7z M10.1-1.2h-20.2l-0.4-3.5%0D%09%09h21L10.1-1.2z M14-7h-28v-3.5h28V-7z%22%2F%3E%0D%3C%2Fsymbol%3E%0D%3Ctitle%3Eskills%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%0D%09%09%09%09%3Cuse xlink%3Ahref%3D%22%23skills%22  width%3D%2297.3%22 height%3D%2297.3%22 id%3D%22skills-3%22 x%3D%22-48.7%22 y%3D%22-48.7%22 transform%3D%22matrix(0.9999 0 0 0.9999 48.665 48.665)%22 style%3D%22overflow%3Avisible%3B%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .skills:hover {\n            background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23232728%3B%7D%0D%3C%2Fstyle%3E%0D%3Csymbol  id%3D%22skills%22 viewBox%3D%22-48.7 -48.7 97.3 97.3%22%3E%0D%09%3Ccircle class%3D%22st0%22 cx%3D%220%22 cy%3D%220%22 r%3D%2248.7%22%2F%3E%0D%09%3Cpath id%3D%22cup_3_%22 class%3D%22st1%22 d%3D%22M14.1-12.8l-1.4-4.3c-0.3-1-1.2-1.6-2.2-1.6h-21c-1%2C0-1.9%2C0.7-2.2%2C1.6l-1.4%2C4.3%0D%09%09c-1.2%2C0.1-2.2%2C1.1-2.2%2C2.3V-7c0%2C1.3%2C1%2C2.3%2C2.3%2C2.3h1.2c0%2C0.1%2C0%2C0.2%2C0%2C0.3l2.3%2C21c0.1%2C1.2%2C1.1%2C2.1%2C2.3%2C2.1H8.2%0D%09%09c1.2%2C0%2C2.2-0.9%2C2.3-2.1l2.3-21c0-0.1%2C0-0.2%2C0-0.3H14c1.3%2C0%2C2.3-1.1%2C2.3-2.3v-3.5C16.3-11.7%2C15.4-12.8%2C14.1-12.8z M-10.5-16.3h21%0D%09%09l1.2%2C3.5h-23.3L-10.5-16.3z M-8.2%2C16.3l-0.4-3.5H8.5l-0.4%2C3.5H-8.2z M8.7%2C11.7H-8.7L-10%2C0h20L8.7%2C11.7z M10.1-1.2h-20.2l-0.4-3.5%0D%09%09h21L10.1-1.2z M14-7h-28v-3.5h28V-7z%22%2F%3E%0D%3C%2Fsymbol%3E%0D%3Ctitle%3Eskills_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%0D%09%09%09%09%3Cuse xlink%3Ahref%3D%22%23skills%22  width%3D%2297.3%22 height%3D%2297.3%22 id%3D%22skills-3%22 x%3D%22-48.7%22 y%3D%22-48.7%22 transform%3D%22matrix(0.9999 0 0 0.9999 48.665 48.665)%22 style%3D%22overflow%3Avisible%3B%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M45.4%2C25.5c0.4-1.2%2C0.3-2.4-0.2-3.6c-0.5-1.3-1.2-2.2-0.2-3.5c1-1.4-1.3-2.7-2.3-1.3c-0.8%2C1.2-1.1%2C2.4-0.7%2C3.8%0D%09c0.4%2C1.4%2C1.4%2C2.4%2C0.8%2C3.9C42.3%2C26.4%2C44.8%2C27.1%2C45.4%2C25.5z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M50.1%2C25.5c0.4-1.2%2C0.3-2.4-0.2-3.6c-0.5-1.3-1.2-2.2-0.2-3.5c1-1.4-1.3-2.7-2.3-1.3c-0.8%2C1.2-1.1%2C2.4-0.7%2C3.8%0D%09c0.4%2C1.4%2C1.4%2C2.4%2C0.8%2C3.9C47%2C26.4%2C49.5%2C27.1%2C50.1%2C25.5z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M54.8%2C25.5c0.4-1.2%2C0.3-2.4-0.2-3.6c-0.5-1.3-1.2-2.2-0.2-3.5c1-1.4-1.3-2.7-2.3-1.3c-0.8%2C1.2-1.1%2C2.4-0.7%2C3.8%0D%09c0.4%2C1.4%2C1.4%2C2.4%2C0.8%2C3.9C51.7%2C26.4%2C54.2%2C27.1%2C54.8%2C25.5z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .skills-active {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23232728%3B%7D%0D%3C%2Fstyle%3E%0D%3Csymbol  id%3D%22skills%22 viewBox%3D%22-48.7 -48.7 97.3 97.3%22%3E%0D%09%3Ccircle class%3D%22st0%22 cx%3D%220%22 cy%3D%220%22 r%3D%2248.7%22%2F%3E%0D%09%3Cpath id%3D%22cup_3_%22 class%3D%22st1%22 d%3D%22M14.1-12.8l-1.4-4.3c-0.3-1-1.2-1.6-2.2-1.6h-21c-1%2C0-1.9%2C0.7-2.2%2C1.6l-1.4%2C4.3%0D%09%09c-1.2%2C0.1-2.2%2C1.1-2.2%2C2.3V-7c0%2C1.3%2C1%2C2.3%2C2.3%2C2.3h1.2c0%2C0.1%2C0%2C0.2%2C0%2C0.3l2.3%2C21c0.1%2C1.2%2C1.1%2C2.1%2C2.3%2C2.1H8.2%0D%09%09c1.2%2C0%2C2.2-0.9%2C2.3-2.1l2.3-21c0-0.1%2C0-0.2%2C0-0.3H14c1.3%2C0%2C2.3-1.1%2C2.3-2.3v-3.5C16.3-11.7%2C15.4-12.8%2C14.1-12.8z M-10.5-16.3h21%0D%09%09l1.2%2C3.5h-23.3L-10.5-16.3z M-8.2%2C16.3l-0.4-3.5H8.5l-0.4%2C3.5H-8.2z M8.7%2C11.7H-8.7L-10%2C0h20L8.7%2C11.7z M10.1-1.2h-20.2l-0.4-3.5%0D%09%09h21L10.1-1.2z M14-7h-28v-3.5h28V-7z%22%2F%3E%0D%3C%2Fsymbol%3E%0D%3Ctitle%3Eskills_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%0D%09%09%09%09%3Cuse xlink%3Ahref%3D%22%23skills%22  width%3D%2297.3%22 height%3D%2297.3%22 id%3D%22skills-3%22 x%3D%22-48.7%22 y%3D%22-48.7%22 transform%3D%22matrix(0.9999 0 0 0.9999 48.665 48.665)%22 style%3D%22overflow%3Avisible%3B%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M45.4%2C25.5c0.4-1.2%2C0.3-2.4-0.2-3.6c-0.5-1.3-1.2-2.2-0.2-3.5c1-1.4-1.3-2.7-2.3-1.3c-0.8%2C1.2-1.1%2C2.4-0.7%2C3.8%0D%09c0.4%2C1.4%2C1.4%2C2.4%2C0.8%2C3.9C42.3%2C26.4%2C44.8%2C27.1%2C45.4%2C25.5z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M50.1%2C25.5c0.4-1.2%2C0.3-2.4-0.2-3.6c-0.5-1.3-1.2-2.2-0.2-3.5c1-1.4-1.3-2.7-2.3-1.3c-0.8%2C1.2-1.1%2C2.4-0.7%2C3.8%0D%09c0.4%2C1.4%2C1.4%2C2.4%2C0.8%2C3.9C47%2C26.4%2C49.5%2C27.1%2C50.1%2C25.5z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M54.8%2C25.5c0.4-1.2%2C0.3-2.4-0.2-3.6c-0.5-1.3-1.2-2.2-0.2-3.5c1-1.4-1.3-2.7-2.3-1.3c-0.8%2C1.2-1.1%2C2.4-0.7%2C3.8%0D%09c0.4%2C1.4%2C1.4%2C2.4%2C0.8%2C3.9C51.7%2C26.4%2C54.2%2C27.1%2C54.8%2C25.5z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .chat {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23222727%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Echat%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Cg id%3D%22contact%22%3E%0D%09%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%09%3Cg id%3D%22bubble%22%3E%0D%09%09%09%09%09%3Cpath class%3D%22st1%22 d%3D%22M48.7%2C28.9c-12.8%2C0-23.1%2C7.8-23.1%2C17.3c0%2C6%2C4%2C11.2%2C10.1%2C14.3c0%2C0%2C0%2C0.1%2C0%2C0.1c0%2C2.6-1.9%2C5.4-2.8%2C6.8l0%2C0%0D%09%09%09%09%09%09c-0.3%2C0.7%2C0%2C1.4%2C0.7%2C1.7c0.2%2C0.1%2C0.3%2C0.1%2C0.5%2C0.1c0.1%2C0%2C0.2%2C0%2C0.4%2C0c4.5-0.7%2C8.8-4.9%2C9.8-6.1c1.5%2C0.2%2C3%2C0.3%2C4.5%2C0.3%0D%09%09%09%09%09%09c12.8%2C0%2C23.1-7.8%2C23.1-17.3S61.4%2C28.9%2C48.7%2C28.9z M48.7%2C60.7c-1.3%2C0-2.7-0.1-4-0.3c-0.1%2C0-0.3%2C0-0.4%2C0c-0.9%2C0-1.7%2C0.4-2.3%2C1%0D%09%09%09%09%09%09c-1.3%2C1.4-2.8%2C2.7-4.5%2C3.7c0.6-1.3%2C0.9-2.8%2C1-4.2c0-0.1%2C0-0.2%2C0-0.3c0-1.1-0.6-2.1-1.5-2.6c-5.4-2.7-8.5-7.1-8.5-11.8%0D%09%09%09%09%09%09c0-8%2C9.1-14.5%2C20.2-14.5s20.2%2C6.5%2C20.2%2C14.5S59.8%2C60.7%2C48.7%2C60.7z%22%2F%3E%0D%09%09%09%09%3C%2Fg%3E%0D%09%09%09%3C%2Fg%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .chat:hover {\n            background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23222727%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Echat_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Cg id%3D%22contact%22%3E%0D%09%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%09%3Cg id%3D%22bubble%22%3E%0D%09%09%09%09%09%3Cpath class%3D%22st1%22 d%3D%22M48.7%2C28.9c-12.8%2C0-23.1%2C7.8-23.1%2C17.3c0%2C6%2C4%2C11.2%2C10.1%2C14.3c0%2C0%2C0%2C0.1%2C0%2C0.1c0%2C2.6-1.9%2C5.4-2.8%2C6.8l0%2C0%0D%09%09%09%09%09%09c-0.3%2C0.7%2C0%2C1.4%2C0.7%2C1.7c0.2%2C0.1%2C0.3%2C0.1%2C0.5%2C0.1c0.1%2C0%2C0.2%2C0%2C0.4%2C0c4.5-0.7%2C8.8-4.9%2C9.8-6.1c1.5%2C0.2%2C3%2C0.3%2C4.5%2C0.3%0D%09%09%09%09%09%09c12.8%2C0%2C23.1-7.8%2C23.1-17.3S61.4%2C28.9%2C48.7%2C28.9z M48.7%2C60.7c-1.3%2C0-2.7-0.1-4-0.3c-0.1%2C0-0.3%2C0-0.4%2C0c-0.9%2C0-1.7%2C0.4-2.3%2C1%0D%09%09%09%09%09%09c-1.3%2C1.4-2.8%2C2.7-4.5%2C3.7c0.6-1.3%2C0.9-2.8%2C1-4.2c0-0.1%2C0-0.2%2C0-0.3c0-1.1-0.6-2.1-1.5-2.6c-5.4-2.7-8.5-7.1-8.5-11.8%0D%09%09%09%09%09%09c0-8%2C9.1-14.5%2C20.2-14.5s20.2%2C6.5%2C20.2%2C14.5S59.8%2C60.7%2C48.7%2C60.7z%22%2F%3E%0D%09%09%09%09%3C%2Fg%3E%0D%09%09%09%3C%2Fg%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M59.3%2C43.2H37.8c-0.7%2C0-1.2-0.5-1.2-1.2l0%2C0c0-0.7%2C0.5-1.2%2C1.2-1.2h21.5c0.7%2C0%2C1.2%2C0.5%2C1.2%2C1.2l0%2C0%0D%09C60.5%2C42.7%2C60%2C43.2%2C59.3%2C43.2z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M49.3%2C47.3H37.8c-0.7%2C0-1.2-0.5-1.2-1.2l0%2C0c0-0.7%2C0.5-1.2%2C1.2-1.2h11.5c0.7%2C0%2C1.2%2C0.5%2C1.2%2C1.2l0%2C0%0D%09C50.5%2C46.8%2C49.9%2C47.3%2C49.3%2C47.3z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M59.3%2C51.2H37.8c-0.7%2C0-1.2-0.5-1.2-1.2v0c0-0.7%2C0.5-1.2%2C1.2-1.2h21.5c0.7%2C0%2C1.2%2C0.5%2C1.2%2C1.2v0%0D%09C60.5%2C50.7%2C60%2C51.2%2C59.3%2C51.2z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .chat-active {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23222727%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Echat_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Cg id%3D%22contact%22%3E%0D%09%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%09%3Cg id%3D%22bubble%22%3E%0D%09%09%09%09%09%3Cpath class%3D%22st1%22 d%3D%22M48.7%2C28.9c-12.8%2C0-23.1%2C7.8-23.1%2C17.3c0%2C6%2C4%2C11.2%2C10.1%2C14.3c0%2C0%2C0%2C0.1%2C0%2C0.1c0%2C2.6-1.9%2C5.4-2.8%2C6.8l0%2C0%0D%09%09%09%09%09%09c-0.3%2C0.7%2C0%2C1.4%2C0.7%2C1.7c0.2%2C0.1%2C0.3%2C0.1%2C0.5%2C0.1c0.1%2C0%2C0.2%2C0%2C0.4%2C0c4.5-0.7%2C8.8-4.9%2C9.8-6.1c1.5%2C0.2%2C3%2C0.3%2C4.5%2C0.3%0D%09%09%09%09%09%09c12.8%2C0%2C23.1-7.8%2C23.1-17.3S61.4%2C28.9%2C48.7%2C28.9z M48.7%2C60.7c-1.3%2C0-2.7-0.1-4-0.3c-0.1%2C0-0.3%2C0-0.4%2C0c-0.9%2C0-1.7%2C0.4-2.3%2C1%0D%09%09%09%09%09%09c-1.3%2C1.4-2.8%2C2.7-4.5%2C3.7c0.6-1.3%2C0.9-2.8%2C1-4.2c0-0.1%2C0-0.2%2C0-0.3c0-1.1-0.6-2.1-1.5-2.6c-5.4-2.7-8.5-7.1-8.5-11.8%0D%09%09%09%09%09%09c0-8%2C9.1-14.5%2C20.2-14.5s20.2%2C6.5%2C20.2%2C14.5S59.8%2C60.7%2C48.7%2C60.7z%22%2F%3E%0D%09%09%09%09%3C%2Fg%3E%0D%09%09%09%3C%2Fg%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M59.3%2C43.2H37.8c-0.7%2C0-1.2-0.5-1.2-1.2l0%2C0c0-0.7%2C0.5-1.2%2C1.2-1.2h21.5c0.7%2C0%2C1.2%2C0.5%2C1.2%2C1.2l0%2C0%0D%09C60.5%2C42.7%2C60%2C43.2%2C59.3%2C43.2z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M49.3%2C47.3H37.8c-0.7%2C0-1.2-0.5-1.2-1.2l0%2C0c0-0.7%2C0.5-1.2%2C1.2-1.2h11.5c0.7%2C0%2C1.2%2C0.5%2C1.2%2C1.2l0%2C0%0D%09C50.5%2C46.8%2C49.9%2C47.3%2C49.3%2C47.3z%22%2F%3E%0D%3Cpath class%3D%22st1%22 d%3D%22M59.3%2C51.2H37.8c-0.7%2C0-1.2-0.5-1.2-1.2v0c0-0.7%2C0.5-1.2%2C1.2-1.2h21.5c0.7%2C0%2C1.2%2C0.5%2C1.2%2C1.2v0%0D%09C60.5%2C50.7%2C60%2C51.2%2C59.3%2C51.2z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .like {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23222727%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Elike%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop_1_%22%3E%0D%09%09%3Cg id%3D%22nav_1_%22%3E%0D%09%09%09%3Cg id%3D%22like%22%3E%0D%09%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%09%3Cg id%3D%22heart%22%3E%0D%09%09%09%09%09%3Cpath class%3D%22st1%22 d%3D%22M69.4%2C33c-5.7-5.6-14.8-5.8-20.7-0.5c-5.9-5.3-15-5.1-20.7%2C0.5c-5.8%2C5.7-5.8%2C15.1-0.1%2C20.9L28%2C54%0D%09%09%09%09%09%09l17.3%2C17.3c1.9%2C1.8%2C4.8%2C1.8%2C6.7%2C0l17.3-17.2c5.8-5.7%2C5.9-15.1%2C0.2-20.9C69.5%2C33.1%2C69.4%2C33.1%2C69.4%2C33z M67.1%2C51.9L49.8%2C69%0D%09%09%09%09%09%09c-0.6%2C0.6-1.6%2C0.6-2.2%2C0L30.2%2C51.9c-4.6-4.5-4.6-11.9-0.1-16.5l0.1-0.1c4.5-4.4%2C11.7-4.6%2C16.3-0.3l2.1%2C1.9l2.1-1.9%0D%09%09%09%09%09%09c4.7-4.2%2C11.8-4.1%2C16.3%2C0.3C71.6%2C39.8%2C71.6%2C47.2%2C67.1%2C51.9C67.2%2C51.8%2C67.2%2C51.8%2C67.1%2C51.9z%22%2F%3E%0D%09%09%09%09%3C%2Fg%3E%0D%09%09%09%3C%2Fg%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .like:hover {\n            background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23222727%3Bstroke%3A%23222727%3Bstroke-width%3A0.75%3Bstroke-miterlimit%3A10%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Elike_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Cg id%3D%22like%22%3E%0D%09%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%09%3Cg%3E%0D%09%09%09%09%09%3Cg%3E%0D%09%09%09%09%09%09%3Cpath class%3D%22st1%22 d%3D%22M72.1%2C36.8c-0.3-0.5-0.9-0.6-1.4-0.4c-0.5%2C0.3-0.6%2C0.9-0.4%2C1.4c2.9%2C5.2%2C2.1%2C11.7-2.2%2C16l-0.8%2C0.8%0D%09%09%09%09%09%09%09c-0.2-0.5-0.5-0.9-0.8-1.3L56.4%2C43c0.7-0.3%2C1.3-0.8%2C1.8-1.3l2-2c0.4-0.4%2C0.4-1%2C0-1.4c-0.4-0.4-1-0.4-1.4%2C0l-2%2C2%0D%09%09%09%09%09%09%09c-0.9%2C0.9-2.1%2C1.4-3.4%2C1.4h-3.9c-0.3%2C0-0.5%2C0.1-0.7%2C0.3l-3%2C3c-0.9%2C0.9-2.3%2C0.9-3.2%2C0c-0.9-0.9-0.9-2.3%2C0-3.2l6.8-6.8%0D%09%09%09%09%09%09%09c4.2-4.2%2C10.7-5.1%2C15.8-2.2c0.5%2C0.3%2C1.1%2C0.1%2C1.3-0.4c0.3-0.5%2C0.1-1.1-0.4-1.3c-2.8-1.6-6.2-2.2-9.4-1.8%0D%09%09%09%09%09%09%09c-3%2C0.4-5.8%2C1.7-8.1%2C3.7c-2.8-2.5-6.4-3.8-10.1-3.8c-4.1%2C0-7.9%2C1.6-10.8%2C4.5c-2.9%2C2.9-4.5%2C6.7-4.5%2C10.8%0D%09%09%09%09%09%09%09c0%2C4.1%2C1.6%2C7.9%2C4.5%2C10.8l0.4%2C0.4c0.1%2C0.1%2C0.1%2C0.1%2C0.2%2C0.2c0.1%2C0.9%2C0.4%2C1.7%2C1.1%2C2.4c0.7%2C0.7%2C1.7%2C1.1%2C2.6%2C1.1c0%2C0%2C0.1%2C0%2C0.1%2C0%0D%09%09%09%09%09%09%09c0%2C0.1%2C0%2C0.1%2C0%2C0.2c0%2C1%2C0.4%2C1.9%2C1.1%2C2.6C34%2C62.7%2C35%2C63%2C35.9%2C63c0%2C0%2C0.1%2C0%2C0.1%2C0c0%2C0.1%2C0%2C0.1%2C0%2C0.2c0%2C1%2C0.4%2C1.9%2C1.1%2C2.6%0D%09%09%09%09%09%09%09c0.7%2C0.7%2C1.7%2C1.1%2C2.6%2C1.1c0.1%2C0%2C0.1%2C0%2C0.2%2C0c0%2C1%2C0.3%2C2%2C1.1%2C2.8c0.7%2C0.7%2C1.6%2C1.1%2C2.6%2C1.1c1%2C0%2C1.9-0.4%2C2.6-1.1l1.4-1.4l1.9%2C1.9%0D%09%09%09%09%09%09%09c0.7%2C0.7%2C1.6%2C1.1%2C2.6%2C1.1s1.9-0.4%2C2.6-1.1c0.8-0.8%2C1.1-1.8%2C1.1-2.8c0.1%2C0%2C0.1%2C0%2C0.2%2C0c1%2C0%2C1.9-0.4%2C2.6-1.1%0D%09%09%09%09%09%09%09c0.8-0.8%2C1.1-1.8%2C1.1-2.8c0.1%2C0%2C0.1%2C0%2C0.2%2C0c1%2C0%2C1.9-0.4%2C2.6-1.1c0.8-0.8%2C1.1-1.8%2C1.1-2.8c0.1%2C0%2C0.1%2C0%2C0.2%2C0%0D%09%09%09%09%09%09%09c1%2C0%2C1.9-0.4%2C2.6-1.1c0.4-0.4%2C0.6-0.8%2C0.8-1.2c0.1%2C0%2C0.2-0.1%2C0.3-0.2l1.9-1.9C74.4%2C50.3%2C75.5%2C42.8%2C72.1%2C36.8z M32.1%2C57.2%0D%09%09%09%09%09%09%09c-0.5%2C0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5%2C0.2-0.9%2C0.5-1.2l1.7-1.7c0.3-0.3%2C0.8-0.5%2C1.2-0.5%0D%09%09%09%09%09%09%09c0.5%2C0%2C0.9%2C0.2%2C1.2%2C0.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5l-1.7%2C1.7C33%2C57%2C32.5%2C57.2%2C32.1%2C57.2z M34.7%2C60.5c-0.3-0.3-0.5-0.8-0.5-1.2%0D%09%09%09%09%09%09%09c0-0.5%2C0.2-0.9%2C0.5-1.2l1.7-1.7c0%2C0%2C0%2C0%2C0%2C0c0.3-0.3%2C0.8-0.5%2C1.2-0.5c0.5%2C0%2C0.9%2C0.2%2C1.2%2C0.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5l-1.7%2C1.7%0D%09%09%09%09%09%09%09C36.5%2C61.2%2C35.4%2C61.2%2C34.7%2C60.5z M38.6%2C64.4c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5%2C0.2-0.9%2C0.5-1.2l1.7-1.7c0%2C0%2C0%2C0%2C0%2C0%0D%09%09%09%09%09%09%09c0.3-0.3%2C0.8-0.5%2C1.2-0.5s0.9%2C0.2%2C1.2%2C0.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5l-1.7%2C1.7C40.4%2C65.1%2C39.3%2C65.1%2C38.6%2C64.4z M46.7%2C66.6L45%2C68.3%0D%09%09%09%09%09%09%09c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5c-0.5%2C0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.8%2C0-2.5l1.7-1.7c0%2C0%2C0%2C0%2C0%2C0c0.3-0.3%2C0.8-0.5%2C1.2-0.5%0D%09%09%09%09%09%09%09c0.5%2C0%2C0.9%2C0.2%2C1.2%2C0.5c0.3%2C0.3%2C0.5%2C0.8%2C0.5%2C1.2C47.2%2C65.8%2C47%2C66.3%2C46.7%2C66.6z M65.2%2C57.1c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5%0D%09%09%09%09%09%09%09c-0.5%2C0-0.9-0.2-1.2-0.5L58.6%2C53c0%2C0%2C0%2C0%2C0%2C0l-3.9-3.9c-0.4-0.4-1-0.4-1.4%2C0c-0.4%2C0.4-0.4%2C1%2C0%2C1.4l8%2C8c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5%0D%09%09%09%09%09%09%09c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5c-0.5%2C0-0.9-0.2-1.2-0.5l-8-8c-0.4-0.4-1-0.4-1.4%2C0c-0.4%2C0.4-0.4%2C1%2C0%2C1.4l3.9%2C3.9c0%2C0%2C0%2C0%2C0%2C0%0D%09%09%09%09%09%09%09l4.1%2C4.1c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5c-0.7%2C0.7-1.8%2C0.7-2.5%2C0l-4.1-4.1c-0.1-0.1-0.2-0.1-0.3-0.2l-1.2-1.2c-0.4-0.4-1-0.4-1.4%2C0%0D%09%09%09%09%09%09%09c-0.4%2C0.4-0.4%2C1%2C0%2C1.4l5.5%2C5.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5c-0.5%2C0-0.9-0.2-1.2-0.5l-2.1-2.1%0D%09%09%09%09%09%09%09c0.2-0.4%2C0.2-0.9%2C0.2-1.3c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1c-0.1%2C0-0.1%2C0-0.2%2C0c0-1-0.3-2-1.1-2.8%0D%09%09%09%09%09%09%09c-0.7-0.7-1.6-1.1-2.6-1.1c-0.1%2C0-0.1%2C0-0.2%2C0c0-1-0.3-2-1.1-2.8c-0.7-0.7-1.6-1.1-2.6-1.1c-0.1%2C0-0.1%2C0-0.2%2C0%0D%09%09%09%09%09%09%09c0-1-0.3-2-1.1-2.8c-1.5-1.5-3.8-1.5-5.3%2C0l-1.7%2C1.7c-0.2%2C0.2-0.4%2C0.5-0.6%2C0.7c-2.3-2.5-3.6-5.7-3.6-9.1%0D%09%09%09%09%09%09%09c0-3.6%2C1.4-6.9%2C3.9-9.4c2.5-2.5%2C5.9-3.9%2C9.4-3.9c3.2%2C0%2C6.3%2C1.1%2C8.7%2C3.2l-6.1%2C6.1c-0.8%2C0.8-1.2%2C1.9-1.2%2C3c0%2C1.1%2C0.4%2C2.2%2C1.2%2C3%0D%09%09%09%09%09%09%09c0.8%2C0.8%2C1.9%2C1.2%2C3%2C1.2s2.2-0.4%2C3-1.2l2.7-2.7h3.5c0.3%2C0%2C0.6%2C0%2C0.9-0.1l11%2C11C65.9%2C55.3%2C65.9%2C56.4%2C65.2%2C57.1z%22%2F%3E%0D%09%09%09%09%09%3C%2Fg%3E%0D%09%09%09%09%3C%2Fg%3E%0D%09%09%09%3C%2Fg%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n#app-canvas #app-gauge .gauge-inner .desktop-nav .like-active {\n          background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 23.0.3%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 97.3 97.3%22 style%3D%22enable-background%3Anew 0 0 97.3 97.3%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%09.st1%7Bfill%3A%23222727%3Bstroke%3A%23222727%3Bstroke-width%3A0.75%3Bstroke-miterlimit%3A10%3B%7D%0D%3C%2Fstyle%3E%0D%3Ctitle%3Elike_hvr%3C%2Ftitle%3E%0D%3Cg%3E%0D%09%3Cg id%3D%22Desktop%22%3E%0D%09%09%3Cg id%3D%22nav%22%3E%0D%09%09%09%3Cg id%3D%22like%22%3E%0D%09%09%09%09%3Ccircle class%3D%22st0%22 cx%3D%2248.7%22 cy%3D%2248.7%22 r%3D%2248.7%22%2F%3E%0D%09%09%09%09%3Cg%3E%0D%09%09%09%09%09%3Cg%3E%0D%09%09%09%09%09%09%3Cpath class%3D%22st1%22 d%3D%22M72.1%2C36.8c-0.3-0.5-0.9-0.6-1.4-0.4c-0.5%2C0.3-0.6%2C0.9-0.4%2C1.4c2.9%2C5.2%2C2.1%2C11.7-2.2%2C16l-0.8%2C0.8%0D%09%09%09%09%09%09%09c-0.2-0.5-0.5-0.9-0.8-1.3L56.4%2C43c0.7-0.3%2C1.3-0.8%2C1.8-1.3l2-2c0.4-0.4%2C0.4-1%2C0-1.4c-0.4-0.4-1-0.4-1.4%2C0l-2%2C2%0D%09%09%09%09%09%09%09c-0.9%2C0.9-2.1%2C1.4-3.4%2C1.4h-3.9c-0.3%2C0-0.5%2C0.1-0.7%2C0.3l-3%2C3c-0.9%2C0.9-2.3%2C0.9-3.2%2C0c-0.9-0.9-0.9-2.3%2C0-3.2l6.8-6.8%0D%09%09%09%09%09%09%09c4.2-4.2%2C10.7-5.1%2C15.8-2.2c0.5%2C0.3%2C1.1%2C0.1%2C1.3-0.4c0.3-0.5%2C0.1-1.1-0.4-1.3c-2.8-1.6-6.2-2.2-9.4-1.8%0D%09%09%09%09%09%09%09c-3%2C0.4-5.8%2C1.7-8.1%2C3.7c-2.8-2.5-6.4-3.8-10.1-3.8c-4.1%2C0-7.9%2C1.6-10.8%2C4.5c-2.9%2C2.9-4.5%2C6.7-4.5%2C10.8%0D%09%09%09%09%09%09%09c0%2C4.1%2C1.6%2C7.9%2C4.5%2C10.8l0.4%2C0.4c0.1%2C0.1%2C0.1%2C0.1%2C0.2%2C0.2c0.1%2C0.9%2C0.4%2C1.7%2C1.1%2C2.4c0.7%2C0.7%2C1.7%2C1.1%2C2.6%2C1.1c0%2C0%2C0.1%2C0%2C0.1%2C0%0D%09%09%09%09%09%09%09c0%2C0.1%2C0%2C0.1%2C0%2C0.2c0%2C1%2C0.4%2C1.9%2C1.1%2C2.6C34%2C62.7%2C35%2C63%2C35.9%2C63c0%2C0%2C0.1%2C0%2C0.1%2C0c0%2C0.1%2C0%2C0.1%2C0%2C0.2c0%2C1%2C0.4%2C1.9%2C1.1%2C2.6%0D%09%09%09%09%09%09%09c0.7%2C0.7%2C1.7%2C1.1%2C2.6%2C1.1c0.1%2C0%2C0.1%2C0%2C0.2%2C0c0%2C1%2C0.3%2C2%2C1.1%2C2.8c0.7%2C0.7%2C1.6%2C1.1%2C2.6%2C1.1c1%2C0%2C1.9-0.4%2C2.6-1.1l1.4-1.4l1.9%2C1.9%0D%09%09%09%09%09%09%09c0.7%2C0.7%2C1.6%2C1.1%2C2.6%2C1.1s1.9-0.4%2C2.6-1.1c0.8-0.8%2C1.1-1.8%2C1.1-2.8c0.1%2C0%2C0.1%2C0%2C0.2%2C0c1%2C0%2C1.9-0.4%2C2.6-1.1%0D%09%09%09%09%09%09%09c0.8-0.8%2C1.1-1.8%2C1.1-2.8c0.1%2C0%2C0.1%2C0%2C0.2%2C0c1%2C0%2C1.9-0.4%2C2.6-1.1c0.8-0.8%2C1.1-1.8%2C1.1-2.8c0.1%2C0%2C0.1%2C0%2C0.2%2C0%0D%09%09%09%09%09%09%09c1%2C0%2C1.9-0.4%2C2.6-1.1c0.4-0.4%2C0.6-0.8%2C0.8-1.2c0.1%2C0%2C0.2-0.1%2C0.3-0.2l1.9-1.9C74.4%2C50.3%2C75.5%2C42.8%2C72.1%2C36.8z M32.1%2C57.2%0D%09%09%09%09%09%09%09c-0.5%2C0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5%2C0.2-0.9%2C0.5-1.2l1.7-1.7c0.3-0.3%2C0.8-0.5%2C1.2-0.5%0D%09%09%09%09%09%09%09c0.5%2C0%2C0.9%2C0.2%2C1.2%2C0.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5l-1.7%2C1.7C33%2C57%2C32.5%2C57.2%2C32.1%2C57.2z M34.7%2C60.5c-0.3-0.3-0.5-0.8-0.5-1.2%0D%09%09%09%09%09%09%09c0-0.5%2C0.2-0.9%2C0.5-1.2l1.7-1.7c0%2C0%2C0%2C0%2C0%2C0c0.3-0.3%2C0.8-0.5%2C1.2-0.5c0.5%2C0%2C0.9%2C0.2%2C1.2%2C0.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5l-1.7%2C1.7%0D%09%09%09%09%09%09%09C36.5%2C61.2%2C35.4%2C61.2%2C34.7%2C60.5z M38.6%2C64.4c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5%2C0.2-0.9%2C0.5-1.2l1.7-1.7c0%2C0%2C0%2C0%2C0%2C0%0D%09%09%09%09%09%09%09c0.3-0.3%2C0.8-0.5%2C1.2-0.5s0.9%2C0.2%2C1.2%2C0.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5l-1.7%2C1.7C40.4%2C65.1%2C39.3%2C65.1%2C38.6%2C64.4z M46.7%2C66.6L45%2C68.3%0D%09%09%09%09%09%09%09c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5c-0.5%2C0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.8%2C0-2.5l1.7-1.7c0%2C0%2C0%2C0%2C0%2C0c0.3-0.3%2C0.8-0.5%2C1.2-0.5%0D%09%09%09%09%09%09%09c0.5%2C0%2C0.9%2C0.2%2C1.2%2C0.5c0.3%2C0.3%2C0.5%2C0.8%2C0.5%2C1.2C47.2%2C65.8%2C47%2C66.3%2C46.7%2C66.6z M65.2%2C57.1c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5%0D%09%09%09%09%09%09%09c-0.5%2C0-0.9-0.2-1.2-0.5L58.6%2C53c0%2C0%2C0%2C0%2C0%2C0l-3.9-3.9c-0.4-0.4-1-0.4-1.4%2C0c-0.4%2C0.4-0.4%2C1%2C0%2C1.4l8%2C8c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5%0D%09%09%09%09%09%09%09c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5c-0.5%2C0-0.9-0.2-1.2-0.5l-8-8c-0.4-0.4-1-0.4-1.4%2C0c-0.4%2C0.4-0.4%2C1%2C0%2C1.4l3.9%2C3.9c0%2C0%2C0%2C0%2C0%2C0%0D%09%09%09%09%09%09%09l4.1%2C4.1c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5c-0.7%2C0.7-1.8%2C0.7-2.5%2C0l-4.1-4.1c-0.1-0.1-0.2-0.1-0.3-0.2l-1.2-1.2c-0.4-0.4-1-0.4-1.4%2C0%0D%09%09%09%09%09%09%09c-0.4%2C0.4-0.4%2C1%2C0%2C1.4l5.5%2C5.5c0.7%2C0.7%2C0.7%2C1.8%2C0%2C2.5c-0.3%2C0.3-0.8%2C0.5-1.2%2C0.5c-0.5%2C0-0.9-0.2-1.2-0.5l-2.1-2.1%0D%09%09%09%09%09%09%09c0.2-0.4%2C0.2-0.9%2C0.2-1.3c0-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.6-1.1-2.6-1.1c-0.1%2C0-0.1%2C0-0.2%2C0c0-1-0.3-2-1.1-2.8%0D%09%09%09%09%09%09%09c-0.7-0.7-1.6-1.1-2.6-1.1c-0.1%2C0-0.1%2C0-0.2%2C0c0-1-0.3-2-1.1-2.8c-0.7-0.7-1.6-1.1-2.6-1.1c-0.1%2C0-0.1%2C0-0.2%2C0%0D%09%09%09%09%09%09%09c0-1-0.3-2-1.1-2.8c-1.5-1.5-3.8-1.5-5.3%2C0l-1.7%2C1.7c-0.2%2C0.2-0.4%2C0.5-0.6%2C0.7c-2.3-2.5-3.6-5.7-3.6-9.1%0D%09%09%09%09%09%09%09c0-3.6%2C1.4-6.9%2C3.9-9.4c2.5-2.5%2C5.9-3.9%2C9.4-3.9c3.2%2C0%2C6.3%2C1.1%2C8.7%2C3.2l-6.1%2C6.1c-0.8%2C0.8-1.2%2C1.9-1.2%2C3c0%2C1.1%2C0.4%2C2.2%2C1.2%2C3%0D%09%09%09%09%09%09%09c0.8%2C0.8%2C1.9%2C1.2%2C3%2C1.2s2.2-0.4%2C3-1.2l2.7-2.7h3.5c0.3%2C0%2C0.6%2C0%2C0.9-0.1l11%2C11C65.9%2C55.3%2C65.9%2C56.4%2C65.2%2C57.1z%22%2F%3E%0D%09%09%09%09%09%3C%2Fg%3E%0D%09%09%09%09%3C%2Fg%3E%0D%09%09%09%3C%2Fg%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.service */ "./src/app/animations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, aService) {
        var _this = this;
        this.aService = aService;
        router.events.subscribe(function (Event) {
            if (Event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (Event.url !== '/') {
                    _this.indicate(Event.url.substr(1));
                }
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    Object.defineProperty(AppComponent.prototype, "isTitle", {
        get: function () {
            return this.aService.showTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "title", {
        get: function () {
            return this.aService.title;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngAfterViewInit = function () {
        // this.showStructure = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isIe = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
        this.welcomeAnimation(50);
        // this.detectScroll();
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (width < 1024) {
            this.desktop = false;
        }
        else {
            this.desktop = true;
        }
    };
    AppComponent.prototype.handleScroll = function (pos) {
        var width = window.innerWidth;
        var el = document.querySelector('.scrollbar');
        var inner = document.querySelector('.scrollbar-inner');
        var build = document.querySelector('.buildings');
        if (pos > 0) {
            el.style.display = 'block';
        }
        else {
            el.style.display = 'none';
        }
        if (width > 1024) {
            build.style.transform = "rotate(-" + pos / 15 + "deg)";
            el.style.transform = "rotate(" + pos / 15 + "deg)";
            build.style.transition = "1s transform";
            inner.style.boxShadow = "1px 1px " + pos / 50 + "px #fff, 1px 1px " + pos / 50 + "px red";
        }
        else {
            el.style.transform = "scaleY(" + pos / 2000 + ")";
        }
    };
    AppComponent.prototype.onScroll = function (event) {
        var el = document.getElementById('view-container');
        var pos = el.scrollTop;
        this.handleScroll(pos);
    };
    AppComponent.prototype.rotateGaugeBg = function (deg, s) {
        var el = document.querySelector('.gauge-bg');
        var buildings = document.querySelector('.buildings');
        buildings.style.transition = "2.5s transform";
        el.style.transition = s + " transform";
        buildings.style.transform = "rotate(-" + deg + "deg)";
        el.style.transform = "rotate(" + deg + "deg)";
        clearInterval(this.interval);
        this.animateNumbers(deg);
    };
    AppComponent.prototype.animateNumbers = function (target) {
        var _this = this;
        var number = 0;
        var speed;
        if (target <= 90) {
            speed = 20;
        }
        else if (target <= 180) {
            speed = 10;
        }
        else if (target <= 270) {
            speed = 0.5;
        }
        else if (target <= 360) {
            speed = 0.2;
        }
        this.interval = setInterval(function () {
            _this.buildingsDeg = number;
            if (number >= target) {
                clearInterval(_this.interval);
            }
            number++;
        }, speed);
    };
    AppComponent.prototype.rotateGaugeNav = function (deg, s) {
        var el = document.querySelector('.desktop-nav');
        el.style.transition = s + " transform";
        el.style.transform = "rotate(" + deg + "deg)";
    };
    AppComponent.prototype.indicate = function (id) {
        $('.active').hide();
        $('.' + id + ' .active').fadeIn(50);
        if (id === 'bio') {
            this.bio = true;
            this.routeName = 'bio';
        }
        else {
            this.bio = false;
        }
        if (id === 'skills') {
            this.skills = true;
            this.routeName = 'skills';
        }
        else {
            this.skills = false;
        }
        if (id === 'like') {
            this.like = true;
            this.routeName = 'like';
        }
        else {
            this.like = false;
        }
        if (id === 'chat') {
            this.chat = true;
            this.routeName = 'chat';
        }
        else {
            this.chat = false;
        }
    };
    AppComponent.prototype.welcomeAnimation = function (delay) {
        var _this = this;
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        setTimeout(function () {
            var el = document.getElementById('app-gauge');
            el.style.opacity = '1';
            if (width > 1024) {
                _this.rotateGaugeBg(0, '2s');
                _this.rotateGaugeNav(0, '1s ease-in-out');
            }
        }, delay);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gaugeBg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "gaugeBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']) // for window scroll events
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _animations_service__WEBPACK_IMPORTED_MODULE_2__["AnimationsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animations.service */ "./src/app/animations.service.ts");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__["BioComponent"],
                _like_like_component__WEBPACK_IMPORTED_MODULE_8__["LikeComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_11__["SlickModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            providers: [_animations_service__WEBPACK_IMPORTED_MODULE_10__["AnimationsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bio\">\n  <h2>\n    <img src=\"../../assets/reswhite.jpg\" />\n    Ziv\n  </h2>\n  <p>\n    <span>32</span>, Tel Aviv <br />\n    Web <span>Developer</span> / UXUI <span> Designer</span>\n  </p>\n  <p>\n   I find <span> 🦄 ux & design</span> challenges as interesting as <span> 🤖 logical & functional</span> challenges\n   my preferred <span>design to code</span> stack is photoshop/illustrator/after effects & angular/firebase with cloud functions.\n   I also ❤️ stuff like <span>Audio Mixing</span>, Music Production, Photography, 3D Art & 🌄 Travel (obviously).\n  \n  </p>\n  <p>\n    \n  </p>\n  <!-- <h3>\n    Ideator\n  </h3>\n  <p class=\"paragraph\">\n    with time and experience I learnt that although I may not be the classic\n    team-leader, I have a solid, proven ability to take an abstract idea and\n    construct it into a prototype I believe I can \u001end the extra dimension in\n    every basic idea. I am also able to oversee the entire process and consider\n    variables such as budget, design and development issues.\n  </p>\n  <h3>\n    Team Player\n  </h3>\n  <p class=\"paragraph\">\n    I consider myself to be a part of a mechanism and I believe\n    in contribution to the team's success and dynamics\n    I believe in trust among teammates and I try to constantly build\n    their con\u001edent in themselves and in me.\n  </p> -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/bio/bio.component.scss":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bio {\n  display: inline-block;\n  padding-top: 80px;\n  padding-bottom: 15%;\n  text-align: left;\n  margin: 0 auto;\n  width: 70%;\n  line-height: 1;\n  text-align: left; }\n  @media screen and (max-width: 1024px) {\n    #bio {\n      height: 100%;\n      width: 80%; } }\n  #bio img {\n    opacity: 0.8;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    padding: 6px;\n    box-shadow: 2px 2px 13px rgba(15, 15, 15, 0.9);\n    background-color: white;\n    float: left;\n    margin-right: 20px; }\n  #bio h2 {\n    line-height: 1.2;\n    margin-bottom: 0; }\n  #bio h3 {\n    margin-bottom: 4px; }\n  #bio .emoji {\n    font-weight: normal;\n    line-height: 3;\n    padding: 2px;\n    background: white; }\n  #bio p {\n    margin: 0;\n    line-height: 1.2; }\n  #bio p span {\n      font-weight: bold;\n      color: #26fc30; }\n  #bio .paragraph {\n    margin-top: 4px; }\n"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations.service */ "./src/app/animations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BioComponent = /** @class */ (function () {
    function BioComponent(aService) {
        this.aService = aService;
        this.isTitle = true;
        this.title = 'Bio';
    }
    Object.defineProperty(BioComponent.prototype, "isTitle", {
        set: function (value) {
            this.aService.showTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioComponent.prototype, "title", {
        set: function (value) {
            this.aService.title = value;
        },
        enumerable: true,
        configurable: true
    });
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.scss */ "./src/app/bio/bio.component.scss")]
        }),
        __metadata("design:paramtypes", [_animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"]])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n<input placeholder=\">name_\" type=\"text\">\n<input placeholder=\">email_\" type=\"text\">\n<textarea placeholder=\">whatever_\"></textarea>\n<button type=\"button\">just submit then</button>\n</form>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 330px;\n  margin: 0 auto;\n  padding-top: 30px; }\n  form input,\n  form textarea,\n  form button {\n    font-family: \"Mandali\", sans-serif;\n    margin-bottom: 15px;\n    width: 100%;\n    height: 40px;\n    border-radius: 30px;\n    background-color: rgba(255, 255, 255, 0.1);\n    background-color: transparent;\n    border: 2px solid #26fc30;\n    padding-left: 15px;\n    color: white;\n    font-size: 16px;\n    letter-spacing: 3px; }\n  form input:focus,\n    form textarea:focus,\n    form button:focus {\n      outline: none; }\n  form input::-webkit-input-placeholder,\n    form textarea::-webkit-input-placeholder,\n    form button::-webkit-input-placeholder {\n      color: white;\n      color: #26fc30; }\n  form input:-ms-input-placeholder,\n    form textarea:-ms-input-placeholder,\n    form button:-ms-input-placeholder {\n      color: white;\n      color: #26fc30; }\n  form input::-ms-input-placeholder,\n    form textarea::-ms-input-placeholder,\n    form button::-ms-input-placeholder {\n      color: white;\n      color: #26fc30; }\n  form input::placeholder,\n    form textarea::placeholder,\n    form button::placeholder {\n      color: white;\n      color: #26fc30; }\n  form input:focus,\n    form textarea:focus,\n    form button:focus {\n      border-color: #26fc30; }\n  form input:focus::-webkit-input-placeholder,\n      form textarea:focus::-webkit-input-placeholder,\n      form button:focus::-webkit-input-placeholder {\n        opacity: 0.2; }\n  form input:focus:-ms-input-placeholder,\n      form textarea:focus:-ms-input-placeholder,\n      form button:focus:-ms-input-placeholder {\n        opacity: 0.2; }\n  form input:focus::-ms-input-placeholder,\n      form textarea:focus::-ms-input-placeholder,\n      form button:focus::-ms-input-placeholder {\n        opacity: 0.2; }\n  form input:focus::placeholder,\n      form textarea:focus::placeholder,\n      form button:focus::placeholder {\n        opacity: 0.2; }\n  form textarea {\n    padding-top: 15px;\n    height: 400px;\n    min-height: 90px;\n    border-radius: 20px;\n    max-height: 8vw; }\n  form button {\n    min-width: none;\n    padding: 0;\n    width: 350px;\n    height: 50px;\n    background: #26fc30;\n    color: black;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations.service */ "./src/app/animations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(aService) {
        this.aService = aService;
        this.isTitle = true;
        this.title = 'Contact';
    }
    Object.defineProperty(ChatComponent.prototype, "isTitle", {
        set: function (value) {
            this.aService.showTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatComponent.prototype, "title", {
        set: function (value) {
            this.aService.title = value;
        },
        enumerable: true,
        configurable: true
    });
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/like/like.component.html":
/*!******************************************!*\
  !*** ./src/app/like/like.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n *Hint: unlimited likes\n</p>\n"

/***/ }),

/***/ "./src/app/like/like.component.scss":
/*!******************************************!*\
  !*** ./src/app/like/like.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/like/like.component.ts":
/*!****************************************!*\
  !*** ./src/app/like/like.component.ts ***!
  \****************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations.service */ "./src/app/animations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikeComponent = /** @class */ (function () {
    function LikeComponent(aService) {
        this.aService = aService;
        this.isTitle = true;
        this.title = 'Like Me!';
    }
    Object.defineProperty(LikeComponent.prototype, "isTitle", {
        set: function (value) {
            this.aService.showTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "title", {
        set: function (value) {
            this.aService.title = value;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.scss */ "./src/app/like/like.component.scss")]
        }),
        __metadata("design:paramtypes", [_animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"skills\">\n  <ngx-slick class=\"carousel\" *ngIf=\"!showItems\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"slickChange($event)\">\n    <div ngxSlickItem class=\"item\" style=\"background-image: url('../../assets/webdev.svg')\">\n      <h1>UX/UI Design</h1>\n      <div class=\"view\" (click)=\"showItems = true; \n          webDev = false; webDesign = true; title='Skills / UXUI'; animateList('webdesign');\">\n        <div class=\"inner\">\n        </div>\n      </div>\n    </div>\n    <div ngxSlickItem class=\"item\" style=\"background-image: url('../../assets/flask.svg')\">\n      <h1>Web Development</h1>\n      <div (click)=\"webDev = true; webDesign = false; showItems = true; title='Skills / Web Dev'; animateList('webdev');\" class=\"view\">\n        <div class=\"inner\">\n        </div>\n      </div>\n    </div>\n  </ngx-slick>\n  <div *ngIf=\"webDev\">\n    <img (click)=\"webDev = false; webDesign = false; showItems = false; title='Skills';\" class=\"close\" src=\"../../assets/close.svg\">\n    <div *ngFor='let skill of webDevList'>\n      <div class=\"skill\">\n        <h3>{{skill.title}}</h3>\n        <div class=\"bar\">\n          <div [ngStyle]=\"{\n            'width.%': skill.exp,\n            'transition.s': skill.speed\n            }\"\n            class=\"bar-inner\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"webDesign\">\n      <img (click)=\"webDev = false; webDesign = false; showItems = false; title='Skills';\" class=\"close\" src=\"../../assets/close.svg\">\n\n    <div *ngFor='let skill of webDesignList'>\n      <div class=\"skill\">\n        <h3>{{skill.title}}</h3>\n        <div class=\"bar\">\n          <div [ngStyle]=\"{\n            'width.%': skill.exp,\n            'transition.s': skill.speed\n            }\"\n            class=\"bar-inner\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#skills {\n  display: inline-block;\n  padding-top: 80px;\n  padding-bottom: 15%;\n  text-align: left;\n  margin: 0 auto;\n  width: 70%; }\n  @media screen and (max-width: 1024px) {\n    #skills {\n      text-align: center;\n      height: 100%;\n      width: 80%; } }\n  #skills .back {\n    background: red;\n    position: absolute;\n    width: 50px;\n    height: 50px; }\n  #skills .close {\n    width: 20px;\n    position: absolute;\n    right: 17%;\n    cursor: pointer; }\n  #skills .skill {\n    margin-bottom: 30px; }\n  #skills .skill h3 {\n      font-weight: 400;\n      margin-bottom: 2px;\n      letter-spacing: 0.5px; }\n  #skills .skill .bar {\n      width: 100%;\n      height: 15px;\n      background: rgba(255, 255, 255, 0.15);\n      border-radius: 10px; }\n  #skills .skill .bar .bar-inner {\n        transition: 0.2s width;\n        border-radius: 10px;\n        height: 100%;\n        background: white; }\n  #skills .carousel {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center; }\n  #skills .carousel h1 {\n      letter-spacing: 1px; }\n  #skills .carousel .item {\n      margin-top: 80px;\n      height: 22vw;\n      min-height: 350px;\n      position: relative;\n      background-size: 120px;\n      background-position: center center;\n      background-repeat: no-repeat;\n      cursor: move; }\n  #skills .carousel .item .view {\n        position: absolute;\n        height: auto;\n        bottom: -20px;\n        width: 100%; }\n  #skills .carousel .item .view .inner {\n          cursor: pointer;\n          width: 60px;\n          height: 60px;\n          margin: 0 auto;\n          border: 2px solid white;\n          border-radius: 50%;\n          background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 139.36 87.17%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Eeye%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Mobile%22%3E%3Cg id%3D%22eye%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M139.21%2C42.62a4.8%2C4.8%2C0%2C0%2C0-.09-.56c0-.07-.09-.11-.12-.18a2.84%2C2.84%2C0%2C0%2C0-.09-.32C126.26%2C17.35%2C98.73%2C0%2C69.68%2C0S13.1%2C17.32.45%2C41.53a2.81%2C2.81%2C0%2C0%2C0-.09.32c0%2C.07-.09.11-.12.18a4.07%2C4.07%2C0%2C0%2C0-.09.56%2C3.18%2C3.18%2C0%2C0%2C0%2C0%2C2%2C4.07%2C4.07%2C0%2C0%2C0%2C.09.56c0%2C.07.09.12.12.18a2.81%2C2.81%2C0%2C0%2C0%2C.09.32C13.1%2C69.82%2C40.63%2C87.17%2C69.68%2C87.17s56.58-17.32%2C69.23-41.53a2.82%2C2.82%2C0%2C0%2C0%2C.09-.32c0-.07.09-.11.12-.18a4.81%2C4.81%2C0%2C0%2C0%2C.09-.56%2C3.26%2C3.26%2C0%2C0%2C0%2C0-2ZM69.68%2C78.44c-24.49%2C0-48.46-13.92-60.41-34.87%2C12-21%2C36-34.85%2C60.41-34.85s48.46%2C13.92%2C60.41%2C34.87C118.08%2C64.57%2C94.14%2C78.44%2C69.68%2C78.44Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M69.68%2C26.15h0A17.43%2C17.43%2C0%2C0%2C0%2C52.25%2C43.58a2.18%2C2.18%2C0%2C1%2C0%2C4.36%2C0A13.09%2C13.09%2C0%2C0%2C1%2C69.68%2C30.51h0a2.18%2C2.18%2C0%2C0%2C0%2C0-4.36Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M69.58%2C13.07A30.53%2C30.53%2C0%2C1%2C0%2C100.11%2C43.6%2C30.53%2C30.53%2C0%2C0%2C0%2C69.58%2C13.07Zm0%2C56.7A26.17%2C26.17%2C0%2C1%2C1%2C95.75%2C43.6%2C26.2%2C26.2%2C0%2C0%2C1%2C69.58%2C69.77Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n          background-repeat: no-repeat;\n          background-position: center center;\n          background-size: 30px;\n          transition: 0.2s all; }\n  #skills .carousel .item .view .inner:hover {\n            background-color: white;\n            background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 139.36 87.17%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23231f20%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Eeyeblack%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Mobile%22%3E%3Cg id%3D%22eye%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M139.21%2C42.62a4.8%2C4.8%2C0%2C0%2C0-.09-.56c0-.07-.09-.11-.12-.18a2.84%2C2.84%2C0%2C0%2C0-.09-.32C126.26%2C17.35%2C98.73%2C0%2C69.68%2C0S13.1%2C17.32.45%2C41.53a2.81%2C2.81%2C0%2C0%2C0-.09.32c0%2C.07-.09.11-.12.18a4.07%2C4.07%2C0%2C0%2C0-.09.56%2C3.18%2C3.18%2C0%2C0%2C0%2C0%2C2%2C4.07%2C4.07%2C0%2C0%2C0%2C.09.56c0%2C.07.09.12.12.18a2.81%2C2.81%2C0%2C0%2C0%2C.09.32C13.1%2C69.82%2C40.63%2C87.17%2C69.68%2C87.17s56.58-17.32%2C69.23-41.53a2.82%2C2.82%2C0%2C0%2C0%2C.09-.32c0-.07.09-.11.12-.18a4.81%2C4.81%2C0%2C0%2C0%2C.09-.56%2C3.26%2C3.26%2C0%2C0%2C0%2C0-2ZM69.68%2C78.44c-24.49%2C0-48.46-13.92-60.41-34.87%2C12-21%2C36-34.85%2C60.41-34.85s48.46%2C13.92%2C60.41%2C34.87C118.08%2C64.57%2C94.14%2C78.44%2C69.68%2C78.44Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M69.68%2C26.15h0A17.43%2C17.43%2C0%2C0%2C0%2C52.25%2C43.58a2.18%2C2.18%2C0%2C1%2C0%2C4.36%2C0A13.09%2C13.09%2C0%2C0%2C1%2C69.68%2C30.51h0a2.18%2C2.18%2C0%2C0%2C0%2C0-4.36Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M69.58%2C13.07A30.53%2C30.53%2C0%2C1%2C0%2C100.11%2C43.6%2C30.53%2C30.53%2C0%2C0%2C0%2C69.58%2C13.07Zm0%2C56.7A26.17%2C26.17%2C0%2C1%2C1%2C95.75%2C43.6%2C26.2%2C26.2%2C0%2C0%2C1%2C69.58%2C69.77Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations.service */ "./src/app/animations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(aService) {
        this.aService = aService;
        this.isTitle = true;
        this.title = 'Skills';
    }
    Object.defineProperty(SkillsComponent.prototype, "isTitle", {
        set: function (value) {
            this.aService.showTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillsComponent.prototype, "title", {
        set: function (value) {
            this.aService.title = value;
        },
        enumerable: true,
        configurable: true
    });
    SkillsComponent.prototype.ngOnInit = function () {
        this.webDevList = [
            { title: 'Angular JS/Typescript(2+)', exp: 20, speed: 0.4 },
            { title: 'Javascript/ES6', exp: 20, speed: 0.4 },
            { title: 'Typescript/OO JS', exp: 20, speed: 0.4 },
            { title: 'CSS3', exp: 20, speed: 0.2 },
            { title: 'HTML5', exp: 20, speed: 0.6 },
            { title: 'Bootstrap/Grid', exp: 20, speed: 0.3 },
            { title: 'Firebase/Cloud Functions', exp: 20, speed: 0.6 },
            { title: 'Phonegap/Cordova', exp: 70, speed: 0.6 },
            { title: 'NodeJS', exp: 20, speed: 1 },
            { title: 'SQL', exp: 20, speed: 0.4 },
            { title: 'NoSql', exp: 20, speed: 0.2 },
            { title: 'PWA', exp: 20, speed: 0.8 },
        ];
        this.webDesignList = [
            { title: 'Adobe Photoshop', exp: 20, speed: 0.4 },
            { title: 'Adobe Illustrator', exp: 20, speed: 0.2 },
            { title: 'Adobe After Effects', exp: 20, speed: 0.6 },
            { title: 'Adobe Premiere', exp: 20, speed: 1 },
            { title: 'Autodesk Maya', exp: 20, speed: 0.3 },
            { title: 'Zeplin', exp: 20, speed: 0.3 },
            { title: 'Adobe Animate', exp: 20, speed: 0.3 }
        ];
    };
    SkillsComponent.prototype.slickChange = function (data) {
        console.log(data);
    };
    SkillsComponent.prototype.animateList = function (id) {
        if (id === 'webdesign') {
            id = this.webDesignList;
            go();
            setTimeout(function () {
                id[0].exp = 80;
                id[1].exp = 80;
                id[2].exp = 70;
                id[3].exp = 70;
                id[4].exp = 60;
                id[5].exp = 80;
                id[6].exp = 60;
            }, 200);
        }
        if (id === 'webdev') {
            id = this.webDevList;
            go();
            setTimeout(function () {
                id[0].exp = 80;
                id[1].exp = 90;
                id[2].exp = 90;
                id[3].exp = 80;
                id[4].exp = 90;
                id[5].exp = 90;
                id[6].exp = 50;
                id[7].exp = 80;
                id[8].exp = 90;
                id[9].exp = 80;
                id[10].exp = 80;
            }, 200);
        }
        function go() {
            //  setTimeout(() => {
            //   id.forEach(function (value, index) {
            //     id[index].exp = Math.floor(Math.random() * 100);
            //     id[index].speed = Math.random() * 1.5;
            //  });
            //  }, 100);
            id.forEach(function (value, index) {
                id[index].exp = 20;
                id[index].speed = Math.random() * 1.5;
            });
        }
    };
    SkillsComponent.prototype.ngAfterViewInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [_animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\web\Angular\rotating-portfolio\simplrapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map