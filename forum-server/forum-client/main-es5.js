function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'forum-client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _forum_forum_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./forum/forum.component */
    "./src/app/forum/forum.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'forum',
        component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_19__["ForumComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _forum_forum_component__WEBPACK_IMPORTED_MODULE_19__["ForumComponent"]],
        imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _forum_forum_component__WEBPACK_IMPORTED_MODULE_19__["ForumComponent"]],
          imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([{
            path: 'login',
            component: _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
          }, {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          }, {
            path: 'forum',
            component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_19__["ForumComponent"]
          }])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DataService = function DataService() {
      _classCallCheck(this, DataService);
    };

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forum/forum.component.ts":
  /*!******************************************!*\
    !*** ./src/app/forum/forum.component.ts ***!
    \******************************************/

  /*! exports provided: ForumComponent */

  /***/
  function srcAppForumForumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumComponent", function () {
      return ForumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ForumComponent_mat_card_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8.Username + ": " + comment_r8.Text + "| " + comment_r8.Timestamp, " ");
      }
    }

    function ForumComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForumComponent_mat_card_1_div_8_Template, 2, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForumComponent_mat_card_1_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var threadNumber_r5 = ctx.index;

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.addComment(_r7, threadNumber_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var thread_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("From: " + thread_r4.Username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", thread_r4.Timestamp, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", thread_r4.Text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", thread_r4.comments);
      }
    }

    var ForumComponent =
    /*#__PURE__*/
    function () {
      function ForumComponent(http, dataService) {
        var _this = this;

        _classCallCheck(this, ForumComponent);

        this.http = http;
        this.dataService = dataService;
        this.threadsData = [];
        this.ws = new WebSocket('ws:localhost:3001');
        this.ws.addEventListener('message', function (event) {
          if (event.data) {
            var tempArray = JSON.parse(event.data);

            if (tempArray) {
              _this.threadsData = tempArray.slice().reverse();
            }
          }
        });
      }

      _createClass(ForumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addComment",
        value: function addComment(threadForm, threadNumber) {
          var message = {
            userName: this.dataService.userName,
            userID: this.dataService.userID,
            threadID: this.threadsData[threadNumber].ID,
            text: threadForm.value.comment
          };
          this.http.post('api/Comment', {
            message: message
          }).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "addThread",
        value: function addThread(threadForm) {
          var message = {
            userName: this.dataService.userName,
            userID: this.dataService.userID,
            text: threadForm.value.thread
          };
          this.http.post('api/Thread', {
            message: message
          }).subscribe(function (response) {
            console.log(response);
          });
        }
      }]);

      return ForumComponent;
    }();

    ForumComponent.ɵfac = function ForumComponent_Factory(t) {
      return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForumComponent,
      selectors: [["app-forum"]],
      decls: 9,
      vars: 1,
      consts: [[1, "threads-wrapper"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "thread-form", 3, "ngSubmit"], ["threadForm", "ngForm"], [1, "thread-full-width"], ["matInput", "", "name", "thread", "placeholder", "New Thread", "ngModel", ""], ["mat-stroked-button", "", "type", "submit", 1, "btn-block"], [1, "box"], [1, "thread-time"], [1, "thread-text"], ["class", "comment-text", 4, "ngFor", "ngForOf"], [1, "comment-form", 3, "ngSubmit"], ["commentForm", "ngForm"], ["matInput", "", "name", "comment", "placeholder", "Comment", "ngModel", ""], [1, "comment-text"]],
      template: function ForumComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForumComponent_mat_card_1_Template, 16, 4, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForumComponent_Template_form_ngSubmit_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.addThread(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.threadsData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"]],
      styles: [".app-header[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.threads-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.positronx[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 70%;\n  left: 90px;\n  margin: 20px;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n}\n\n.box.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 80%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   .thread-form[_ngcontent-%COMP%] {\n  min-width: 80%;\n  left: 111px;\n  position: relative;\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   .thread-full-width[_ngcontent-%COMP%], .thread-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px 70px 50px;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.threads-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.thread-text[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: left;\n  margin: 20px;\n}\n\n.comment-text[_ngcontent-%COMP%] {\n  padding-left: 100px;\n  margin: 20px;\n  font-size: large;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydW0vQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEFuZ3VsYXJcXEZvcnVtXFxmb3J1bS1jbGllbnQvc3JjXFxhcHBcXGZvcnVtXFxmb3J1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBWSx5QkFBQTtVQUFBLDhCQUFBO0VBQThCLGVBQUE7RUFBZSxNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxVQUFBO0VBQVUsaUhBQUE7QUNPeEY7O0FETkE7RUFBaUIsWUFBQTtBQ1VqQjs7QURUQTtFQUFXLHFCQUFBO0VBQXFCLGNBQUE7QUNjaEM7O0FEYkE7RUFBSyxrQkFBQTtFQUFrQixNQUFBO0VBQU0sVUFBQTtFQUFVLFdBQUE7RUFBVyw0QkFBQTtFQUE0QixVQUFBO0VBQVUsVUFBQTtFQUFXLFlBQUE7RUFBYSxnQkFBQTtFQUFnQixtQkFBQTtFQUFtQixtQkFBQTtFQUFtQiwyQkFBQTtFQUEyQix1QkFBQTtFQUF1QixVQUFBO0FDOEJ4Tjs7QUQ3QkE7RUFBVSxzQkFBQTtFQUFxQiw4QkFBQTtFQUE2QiwwQkFBQTtFQUF5QixVQUFBO0VBQVUsWUFBQTtFQUFXLFdBQUE7QUNzQzFHOztBRHJDQTtFQUFZLFdBQUE7RUFBVyxVQUFBO0VBQVUsWUFBQTtFQUFZLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLFVBQUE7RUFBVSxvQ0FBQTtFQUFtQyxPQUFBO0VBQU8sc0JBQUE7RUFBcUIsOEJBQUE7RUFBNkIsMEJBQUE7RUFBeUIsV0FBQTtBQ29Eak47O0FEbkRBO0VBQThCLGNBQUE7RUFDMUIsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3VESjs7QURyREE7RUFBK0QsV0FBQTtBQ3lEL0Q7O0FEeERBO0VBQWlDLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxjQUFBO0VBQWMsZ0JBQUE7QUMrRDVFOztBRDlEQTtFQUFnRCxlQUFBO0VBQWUsU0FBQTtBQ21FL0Q7O0FEbEVBO0VBQTJCLHVCQUFBO0FDc0UzQjs7QURyRUE7RUFBcUMsOEJBQUE7RUFBOEIsaUJBQUE7RUFBaUIsbUJBQUE7QUMyRXBGOztBRDFFQTtFQUF5RSxtQkFBQTtBQzhFekU7O0FEN0VBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNnRko7O0FEOUVBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2dGSiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hcHAtaGVhZGVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6Mjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO31cclxuLnRocmVhZHMtd3JhcHBlcntoZWlnaHQ6MTAwJTt9XHJcbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XHJcbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjA7b3BhY2l0eToxO2Zsb2F0OmxlZnQ7cGFkZGluZzo2MHB4IDUwcHggNDBweCA1MHB4O3dpZHRoOjcwJTtsZWZ0OiA5MHB4O21hcmdpbjogMjBweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoxMHB4O3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3otaW5kZXg6NTt9XHJcbi5ib3guYmFja3t0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt0b3A6LTIwcHg7b3BhY2l0eTouODt6LWluZGV4Oi0xO31cclxuLmJveDpiZWZvcmV7Y29udGVudDpcIlwiO3dpZHRoOjgwJTtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3otaW5kZXg6LTE7fVxyXG4udGhyZWFkcy13cmFwcGVyIC50aHJlYWQtZm9ybXttaW4td2lkdGg6IDgwJTtcclxuICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6MzAwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi50aHJlYWRzLXdyYXBwZXIgLnRocmVhZC1mdWxsLXdpZHRoLC50aHJlYWQtd3JhcHBlciAuYnRuLWJsb2Nre3dpZHRoOjEwMCU7fVxyXG4udGhyZWFkcy13cmFwcGVyIG1hdC1jYXJkLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO31cclxuLnRocmVhZHMtd3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjMwcHg7bWFyZ2luOjA7fVxyXG4udGhyZWFkcy13cmFwcGVyIC5tYXQtY2FyZHtwYWRkaW5nOjQwcHggNzBweCA1MHB4O31cclxuLnRocmVhZHMtd3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjU0cHg7YmFja2dyb3VuZDojRkZGN0ZBO31cclxuLnRocmVhZHMtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MC44Mzc1ZW0gMDt9XHJcbi50aHJlYWQtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNvbW1lbnQtdGV4dCB7IFxyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSIsIi5hcHAtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udGhyZWFkcy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9zaXRyb254IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogOTBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB6LWluZGV4OiA1O1xufVxuXG4uYm94LmJhY2sge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udGhyZWFkcy13cmFwcGVyIC50aHJlYWQtZm9ybSB7XG4gIG1pbi13aWR0aDogODAlO1xuICBsZWZ0OiAxMTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGhyZWFkcy13cmFwcGVyIC50aHJlYWQtZnVsbC13aWR0aCwgLnRocmVhZC13cmFwcGVyIC5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRocmVhZHMtd3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRocmVhZHMtd3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRocmVhZHMtd3JhcHBlciAubWF0LWNhcmQge1xuICBwYWRkaW5nOiA0MHB4IDcwcHggNTBweDtcbn1cblxuLnRocmVhZHMtd3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZDogI0ZGRjdGQTtcbn1cblxuLnRocmVhZHMtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuLnRocmVhZC10ZXh0IHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jb21tZW50LXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forum',
          templateUrl: './forum.component.html',
          styleUrls: ['./forum.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(http, router, dataService) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.router = router;
        this.dataService = dataService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit(form) {
          var _this2 = this;

          this.dataService.userName = form.value.userName;
          this.http.post('api/Users', {
            userName: form.value.userName
          }).subscribe(function (response) {
            console.log(response);
            _this2.dataService.userID = response['ID'];
          });
          this.router.navigate(['/forum']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 12,
      vars: 0,
      consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "login-form", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "login-full-width"], ["matInput", "", "name", "userName", "placeholder", "Username", "ngModel", ""], ["mat-stroked-button", "", "color", "accent", "type", "submit", 1, "btn-block"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.submit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".app-header[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.positronx[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEFuZ3VsYXJcXEZvcnVtXFxmb3J1bS1jbGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBWSx5QkFBQTtVQUFBLDhCQUFBO0VBQThCLGVBQUE7RUFBZSxNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxVQUFBO0VBQVUsaUhBQUE7QUNPeEY7O0FETkE7RUFBZSxZQUFBO0FDVWY7O0FEVEE7RUFBVyxxQkFBQTtFQUFxQixjQUFBO0FDY2hDOztBRGJBO0VBQUssa0JBQUE7RUFBa0IsTUFBQTtFQUFNLFVBQUE7RUFBVSxXQUFBO0VBQVcsNEJBQUE7RUFBNEIsV0FBQTtFQUFXLGdCQUFBO0VBQWdCLG1CQUFBO0VBQW1CLG1CQUFBO0VBQW1CLDJCQUFBO0VBQTJCLHVCQUFBO0VBQXVCLFVBQUE7RUFBVSxnQkFBQTtBQzZCM007O0FENUJBO0VBQVUsc0JBQUE7RUFBcUIsOEJBQUE7RUFBNkIsMEJBQUE7RUFBeUIsVUFBQTtFQUFVLFlBQUE7RUFBVyxXQUFBO0FDcUMxRzs7QURwQ0E7RUFBWSxXQUFBO0VBQVcsV0FBQTtFQUFXLFlBQUE7RUFBWSxtQkFBQTtFQUFtQixrQkFBQTtFQUFrQixVQUFBO0VBQVUsb0NBQUE7RUFBbUMsT0FBQTtFQUFPLHNCQUFBO0VBQXFCLDhCQUFBO0VBQTZCLDBCQUFBO0VBQXlCLFdBQUE7QUNtRGxOOztBRGxEQTtFQUEyQixlQUFBO0VBQWUsZ0JBQUE7RUFBZ0IsV0FBQTtBQ3dEMUQ7O0FEdkRBO0VBQTJELFdBQUE7QUMyRDNEOztBRDFEQTtFQUErQixrQkFBQTtFQUFrQixXQUFBO0VBQVcsY0FBQTtFQUFjLGdCQUFBO0FDaUUxRTs7QURoRUE7RUFBOEMsZUFBQTtFQUFlLFNBQUE7QUNxRTdEOztBRHBFQTtFQUF5Qix1QkFBQTtBQ3dFekI7O0FEdkVBO0VBQW1DLDhCQUFBO0VBQThCLGlCQUFBO0VBQWlCLG1CQUFBO0FDNkVsRjs7QUQ1RUE7RUFBdUUsbUJBQUE7QUNnRnZFIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFwcC1oZWFkZXJ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7fVxyXG4ubG9naW4td3JhcHBlcntoZWlnaHQ6MTAwJTt9XHJcbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XHJcbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjA7b3BhY2l0eToxO2Zsb2F0OmxlZnQ7cGFkZGluZzo2MHB4IDUwcHggNDBweCA1MHB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt6LWluZGV4OjU7bWF4LXdpZHRoOjMzMHB4O31cclxuLmJveC5iYWNre3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3RvcDotMjBweDtvcGFjaXR5Oi44O3otaW5kZXg6LTE7fVxyXG4uYm94OmJlZm9yZXtjb250ZW50OlwiXCI7d2lkdGg6MTAwJTtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3otaW5kZXg6LTE7fVxyXG4ubG9naW4td3JhcHBlciAubG9naW4tZm9ybXttaW4td2lkdGg6MTAwJTttYXgtd2lkdGg6MzAwcHg7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1mdWxsLXdpZHRoLC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2t7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZTozMHB4O21hcmdpbjowO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJke3BhZGRpbmc6NDBweCA3MHB4IDUwcHg7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjU0cHg7YmFja2dyb3VuZDojRkZGN0ZBO31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjAuODM3NWVtIDA7fSIsIi5hcHAtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBvc2l0cm9ueCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB6LWluZGV4OiA1O1xuICBtYXgtd2lkdGg6IDMzMHB4O1xufVxuXG4uYm94LmJhY2sge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWZvcm0ge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4td3JhcHBlciAubG9naW4tZnVsbC13aWR0aCwgLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDQwcHggNzBweCA1MHB4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZDogI0ZGRjdGQTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuODM3NWVtIDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Documents\Angular\Forum\forum-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map