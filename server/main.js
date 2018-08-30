(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/bundles/router.umd.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/router/bundles/router.umd.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Angular v6.0.7
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/common */ "@angular/common"), __webpack_require__(/*! @angular/core */ "@angular/core"), __webpack_require__(/*! rxjs */ "rxjs"), __webpack_require__(/*! rxjs/operators */ "rxjs/operators"), __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser")) :
	undefined;
}(this, (function (exports,common,core,rxjs,operators,platformBrowser) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};















function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Base for events the Router goes through, as opposed to events tied to a specific
 * Route. `RouterEvent`s will only be fired one time for any given navigation.
 *
 * Example:
 *
 * ```
 * class MyService {
 *   constructor(public router: Router, logger: Logger) {
 *     router.events.filter(e => e instanceof RouterEvent).subscribe(e => {
 *       logger.log(e.id, e.url);
 *     });
 *   }
 * }
 * ```
 *
 * @experimental
 */
var RouterEvent = /** @class */ (function () {
    function RouterEvent(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url) {
        this.id = id;
        this.url = url;
    }
    return RouterEvent;
}());
/**
 * @description
 *
 * Represents an event triggered when a navigation starts.
 *
 *
 */
var NavigationStart = /** @class */ (function (_super) {
    __extends(NavigationStart, _super);
    function NavigationStart(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    navigationTrigger, 
    /** @docsNotRequired */
    restoredState) {
        /** @docsNotRequired */
        if (navigationTrigger === void 0) { navigationTrigger = 'imperative'; }
        /** @docsNotRequired */
        if (restoredState === void 0) { restoredState = null; }
        var _this = _super.call(this, id, url) || this;
        _this.navigationTrigger = navigationTrigger;
        _this.restoredState = restoredState;
        return _this;
    }
    /** @docsNotRequired */
    NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationStart;
}(RouterEvent));
/**
 * @description
 *
 * Represents an event triggered when a navigation ends successfully.
 *
 *
 */
var NavigationEnd = /** @class */ (function (_super) {
    __extends(NavigationEnd, _super);
    function NavigationEnd(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        return _this;
    }
    /** @docsNotRequired */
    NavigationEnd.prototype.toString = function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}(RouterEvent));
/**
 * @description
 *
 * Represents an event triggered when a navigation is canceled.
 *
 *
 */
var NavigationCancel = /** @class */ (function (_super) {
    __extends(NavigationCancel, _super);
    function NavigationCancel(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    reason) {
        var _this = _super.call(this, id, url) || this;
        _this.reason = reason;
        return _this;
    }
    /** @docsNotRequired */
    NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationCancel;
}(RouterEvent));
/**
 * @description
 *
 * Represents an event triggered when a navigation fails due to an unexpected error.
 *
 *
 */
var NavigationError = /** @class */ (function (_super) {
    __extends(NavigationError, _super);
    function NavigationError(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    error) {
        var _this = _super.call(this, id, url) || this;
        _this.error = error;
        return _this;
    }
    /** @docsNotRequired */
    NavigationError.prototype.toString = function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}(RouterEvent));
/**
 * @description
 *
 * Represents an event triggered when routes are recognized.
 *
 *
 */
var RoutesRecognized = /** @class */ (function (_super) {
    __extends(RoutesRecognized, _super);
    function RoutesRecognized(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    /** @docsNotRequired */
    RoutesRecognized.prototype.toString = function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}(RouterEvent));
/**
 * @description
 *
 * Represents the start of the Guard phase of routing.
 *
 * @experimental
 */
var GuardsCheckStart = /** @class */ (function (_super) {
    __extends(GuardsCheckStart, _super);
    function GuardsCheckStart(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    GuardsCheckStart.prototype.toString = function () {
        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return GuardsCheckStart;
}(RouterEvent));
/**
 * @description
 *
 * Represents the end of the Guard phase of routing.
 *
 * @experimental
 */
var GuardsCheckEnd = /** @class */ (function (_super) {
    __extends(GuardsCheckEnd, _super);
    function GuardsCheckEnd(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state, 
    /** @docsNotRequired */
    shouldActivate) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        _this.shouldActivate = shouldActivate;
        return _this;
    }
    GuardsCheckEnd.prototype.toString = function () {
        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
    };
    return GuardsCheckEnd;
}(RouterEvent));
/**
 * @description
 *
 * Represents the start of the Resolve phase of routing. The timing of this
 * event may change, thus it's experimental. In the current iteration it will run
 * in the "resolve" phase whether there's things to resolve or not. In the future this
 * behavior may change to only run when there are things to be resolved.
 *
 * @experimental
 */
var ResolveStart = /** @class */ (function (_super) {
    __extends(ResolveStart, _super);
    function ResolveStart(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    ResolveStart.prototype.toString = function () {
        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveStart;
}(RouterEvent));
/**
 * @description
 *
 * Represents the end of the Resolve phase of routing. See note on
 * `ResolveStart` for use of this experimental API.
 *
 * @experimental
 */
var ResolveEnd = /** @class */ (function (_super) {
    __extends(ResolveEnd, _super);
    function ResolveEnd(
    /** @docsNotRequired */
    id, 
    /** @docsNotRequired */
    url, 
    /** @docsNotRequired */
    urlAfterRedirects, 
    /** @docsNotRequired */
    state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    ResolveEnd.prototype.toString = function () {
        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveEnd;
}(RouterEvent));
/**
 * @description
 *
 * Represents an event triggered before lazy loading a route config.
 *
 * @experimental
 */
var RouteConfigLoadStart = /** @class */ (function () {
    function RouteConfigLoadStart(
    /** @docsNotRequired */
    route) {
        this.route = route;
    }
    RouteConfigLoadStart.prototype.toString = function () { return "RouteConfigLoadStart(path: " + this.route.path + ")"; };
    return RouteConfigLoadStart;
}());
/**
 * @description
 *
 * Represents an event triggered when a route has been lazy loaded.
 *
 * @experimental
 */
var RouteConfigLoadEnd = /** @class */ (function () {
    function RouteConfigLoadEnd(
    /** @docsNotRequired */
    route) {
        this.route = route;
    }
    RouteConfigLoadEnd.prototype.toString = function () { return "RouteConfigLoadEnd(path: " + this.route.path + ")"; };
    return RouteConfigLoadEnd;
}());
/**
 * @description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ChildActivationEnd` for use of this experimental API.
 *
 * @experimental
 */
var ChildActivationStart = /** @class */ (function () {
    function ChildActivationStart(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ChildActivationStart.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ChildActivationStart(path: '" + path + "')";
    };
    return ChildActivationStart;
}());
/**
 * @description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ChildActivationStart` for use of this experimental API.
 *
 * @experimental
 */
var ChildActivationEnd = /** @class */ (function () {
    function ChildActivationEnd(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ChildActivationEnd.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ChildActivationEnd(path: '" + path + "')";
    };
    return ChildActivationEnd;
}());
/**
 * @description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ActivationEnd` for use of this experimental API.
 *
 * @experimental
 */
var ActivationStart = /** @class */ (function () {
    function ActivationStart(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ActivationStart.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ActivationStart(path: '" + path + "')";
    };
    return ActivationStart;
}());
/**
 * @description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ActivationStart` for use of this experimental API.
 *
 * @experimental
 */
var ActivationEnd = /** @class */ (function () {
    function ActivationEnd(
    /** @docsNotRequired */
    snapshot) {
        this.snapshot = snapshot;
    }
    ActivationEnd.prototype.toString = function () {
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ActivationEnd(path: '" + path + "')";
    };
    return ActivationEnd;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
var EmptyOutletComponent = /** @class */ (function () {
    function EmptyOutletComponent() {
    }
    EmptyOutletComponent.decorators = [
        { type: core.Component, args: [{ template: "<router-outlet></router-outlet>" }] }
    ];
    return EmptyOutletComponent;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Name of the primary outlet.
 *
 *
 */
var PRIMARY_OUTLET = 'primary';
var ParamsAsMap = /** @class */ (function () {
    function ParamsAsMap(params) {
        this.params = params || {};
    }
    ParamsAsMap.prototype.has = function (name) { return this.params.hasOwnProperty(name); };
    ParamsAsMap.prototype.get = function (name) {
        if (this.has(name)) {
            var v = this.params[name];
            return Array.isArray(v) ? v[0] : v;
        }
        return null;
    };
    ParamsAsMap.prototype.getAll = function (name) {
        if (this.has(name)) {
            var v = this.params[name];
            return Array.isArray(v) ? v : [v];
        }
        return [];
    };
    Object.defineProperty(ParamsAsMap.prototype, "keys", {
        get: function () { return Object.keys(this.params); },
        enumerable: true,
        configurable: true
    });
    return ParamsAsMap;
}());
/**
 * Convert a `Params` instance to a `ParamMap`.
 *
 *
 */
function convertToParamMap(params) {
    return new ParamsAsMap(params);
}
var NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
function navigationCancelingError(message) {
    var error = Error('NavigationCancelingError: ' + message);
    error[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}
function isNavigationCancelingError(error) {
    return error && error[NAVIGATION_CANCELING_ERROR];
}
// Matches the route configuration (`route`) against the actual URL (`segments`).
function defaultUrlMatcher(segments, segmentGroup, route) {
    var parts = route.path.split('/');
    if (parts.length > segments.length) {
        // The actual URL is shorter than the config, no match
        return null;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || parts.length < segments.length)) {
        // The config is longer than the actual URL but we are looking for a full match, return null
        return null;
    }
    var posParams = {};
    // Check each config part against the actual URL
    for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        var segment = segments[index];
        var isParameter = part.startsWith(':');
        if (isParameter) {
            posParams[part.substring(1)] = segment;
        }
        else if (part !== segment.path) {
            // The actual URL part does not match the config, no match
            return null;
        }
    }
    return { consumed: segments.slice(0, parts.length), posParams: posParams };
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var LoadedRouterConfig = /** @class */ (function () {
    function LoadedRouterConfig(routes, module) {
        this.routes = routes;
        this.module = module;
    }
    return LoadedRouterConfig;
}());
function validateConfig(config, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    // forEach doesn't iterate undefined values
    for (var i = 0; i < config.length; i++) {
        var route = config[i];
        var fullPath = getFullPath(parentPath, route);
        validateNode(route, fullPath);
    }
}
function validateNode(route, fullPath) {
    if (!route) {
        throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
    }
    if (Array.isArray(route)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
    }
    if (!route.component && !route.children && !route.loadChildren &&
        (route.outlet && route.outlet !== PRIMARY_OUTLET)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route without children or loadChildren cannot have a named outlet set");
    }
    if (route.redirectTo && route.children) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
    }
    if (route.redirectTo && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
    }
    if (route.children && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
    }
    if (route.redirectTo && route.component) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
    }
    if (route.path && route.matcher) {
        throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
    }
    if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
    }
    if (route.path === void 0 && route.matcher === void 0) {
        throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
        throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
        var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
        throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
    }
    if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
        throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
    }
    if (route.children) {
        validateConfig(route.children, fullPath);
    }
}
function getFullPath(parentPath, currentRoute) {
    if (!currentRoute) {
        return parentPath;
    }
    if (!parentPath && !currentRoute.path) {
        return '';
    }
    else if (parentPath && !currentRoute.path) {
        return parentPath + "/";
    }
    else if (!parentPath && currentRoute.path) {
        return currentRoute.path;
    }
    else {
        return parentPath + "/" + currentRoute.path;
    }
}
/**
 * Makes a copy of the config and adds any default required properties.
 */
function standardizeConfig(r) {
    var children = r.children && r.children.map(standardizeConfig);
    var c = children ? __assign({}, r, { children: children }) : __assign({}, r);
    if (!c.component && (children || c.loadChildren) && (c.outlet && c.outlet !== PRIMARY_OUTLET)) {
        c.component = EmptyOutletComponent;
    }
    return c;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
function shallowEqual(a, b) {
    var k1 = Object.keys(a);
    var k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
/**
 * Flattens single-level nested arrays.
 */
function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}
/**
 * Return the last element of an array.
 */
function last$1(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
/**
 * Verifys all booleans in an array are `true`.
 */

function forEach(map$$1, callback) {
    for (var prop in map$$1) {
        if (map$$1.hasOwnProperty(prop)) {
            callback(map$$1[prop], prop);
        }
    }
}
function waitForMap(obj, fn) {
    if (Object.keys(obj).length === 0) {
        return rxjs.of({});
    }
    var waitHead = [];
    var waitTail = [];
    var res = {};
    forEach(obj, function (a, k) {
        var mapped = fn(k, a).pipe(operators.map(function (r) { return res[k] = r; }));
        if (k === PRIMARY_OUTLET) {
            waitHead.push(mapped);
        }
        else {
            waitTail.push(mapped);
        }
    });
    // Closure compiler has problem with using spread operator here. So just using Array.concat.
    return rxjs.of.apply(null, waitHead.concat(waitTail)).pipe(operators.concatAll(), operators.last(), operators.map(function () { return res; }));
}
/**
 * ANDs Observables by merging all input observables, reducing to an Observable verifying all
 * input Observables return `true`.
 */
function andObservables(observables) {
    return observables.pipe(operators.mergeAll(), operators.every(function (result) { return result === true; }));
}
function wrapIntoObservable(value) {
    if (core.ɵisObservable(value)) {
        return value;
    }
    if (core.ɵisPromise(value)) {
        // Use `Promise.resolve()` to wrap promise-like instances.
        // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
        // change detection.
        return rxjs.from(Promise.resolve(value));
    }
    return rxjs.of(value);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
function containsTree(container, containee, exact) {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
function equalQueryParams(container, containee) {
    return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (var c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
function containsQueryParams(container, containee) {
    return Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
}
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        var current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (var c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        var current = containeePaths.slice(0, container.segments.length);
        var next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[PRIMARY_OUTLET])
            return false;
        return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
    }
}
/**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 *
 */
var UrlTree = /** @class */ (function () {
    /** @internal */
    function UrlTree(
    /** The root segment group of the URL tree */
    root, 
    /** The query params of the URL */
    queryParams, 
    /** The fragment of the URL */
    fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    Object.defineProperty(UrlTree.prototype, "queryParamMap", {
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    UrlTree.prototype.toString = function () { return DEFAULT_SERIALIZER.serialize(this); };
    return UrlTree;
}());
/**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 *
 */
var UrlSegmentGroup = /** @class */ (function () {
    function UrlSegmentGroup(
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments, 
    /** The list of children of this group */
    children) {
        var _this = this;
        this.segments = segments;
        this.children = children;
        /** The parent node in the url tree */
        this.parent = null;
        forEach(children, function (v, k) { return v.parent = _this; });
    }
    /** Whether the segment has child segments */
    UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
    Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
        /** Number of child segments */
        get: function () { return Object.keys(this.children).length; },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
    return UrlSegmentGroup;
}());
/**
 * @description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * ## Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 *
 */
var UrlSegment = /** @class */ (function () {
    function UrlSegment(
    /** The path part of a URL segment */
    path, 
    /** The matrix parameters associated with a segment */
    parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    Object.defineProperty(UrlSegment.prototype, "parameterMap", {
        get: function () {
            if (!this._parameterMap) {
                this._parameterMap = convertToParamMap(this.parameters);
            }
            return this._parameterMap;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    UrlSegment.prototype.toString = function () { return serializePath(this); };
    return UrlSegment;
}());
function equalSegments(as, bs) {
    return equalPath(as, bs) && as.every(function (a, i) { return shallowEqual(a.parameters, bs[i].parameters); });
}
function equalPath(as, bs) {
    if (as.length !== bs.length)
        return false;
    return as.every(function (a, i) { return a.path === bs[i].path; });
}
function mapChildrenIntoArray(segment, fn) {
    var res = [];
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 *
 */
var UrlSerializer = /** @class */ (function () {
    function UrlSerializer() {
    }
    return UrlSerializer;
}());
/**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 *
 */
var DefaultUrlSerializer = /** @class */ (function () {
    function DefaultUrlSerializer() {
    }
    /** Parses a url into a `UrlTree` */
    DefaultUrlSerializer.prototype.parse = function (url) {
        var p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    };
    /** Converts a `UrlTree` into a url */
    DefaultUrlSerializer.prototype.serialize = function (tree) {
        var segment = "/" + serializeSegment(tree.root, true);
        var query = serializeQueryParams(tree.queryParams);
        var fragment = typeof tree.fragment === "string" ? "#" + encodeUriFragment(tree.fragment) : '';
        return "" + segment + query + fragment;
    };
    return DefaultUrlSerializer;
}());
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
    return segment.segments.map(function (p) { return serializePath(p); }).join('/');
}
function serializeSegment(segment, root) {
    if (!segment.hasChildren()) {
        return serializePaths(segment);
    }
    if (root) {
        var primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false) :
            '';
        var children_1 = [];
        forEach(segment.children, function (v, k) {
            if (k !== PRIMARY_OUTLET) {
                children_1.push(k + ":" + serializeSegment(v, false));
            }
        });
        return children_1.length > 0 ? primary + "(" + children_1.join('//') + ")" : primary;
    }
    else {
        var children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
            }
            return [k + ":" + serializeSegment(v, false)];
        });
        return serializePaths(segment) + "/(" + children.join('//') + ")";
    }
}
/**
 * Encodes a URI string with the default encoding. This function will only ever be called from
 * `encodeUriQuery` or `encodeUriSegment` as it's the base set of encodings to be used. We need
 * a custom encoding because encodeURIComponent is too aggressive and encodes stuff that doesn't
 * have to be encoded per https://url.spec.whatwg.org.
 */
function encodeUriString(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}
/**
 * This function should be used to encode both keys and values in a query string key/value. In
 * the following URL, you need to call encodeUriQuery on "k" and "v":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
function encodeUriQuery(s) {
    return encodeUriString(s).replace(/%3B/gi, ';');
}
/**
 * This function should be used to encode a URL fragment. In the following URL, you need to call
 * encodeUriFragment on "f":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
function encodeUriFragment(s) {
    return encodeURI(s);
}
/**
 * This function should be run on any URI segment as well as the key and value in a key/value
 * pair for matrix params. In the following URL, you need to call encodeUriSegment on "html",
 * "mk", and "mv":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
function encodeUriSegment(s) {
    return encodeUriString(s).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}
function decode(s) {
    return decodeURIComponent(s);
}
// Query keys/values should have the "+" replaced first, as "+" in a query string is " ".
// decodeURIComponent function will not decode "+" as a space.
function decodeQuery(s) {
    return decode(s.replace(/\+/g, '%20'));
}
function serializePath(path) {
    return "" + encodeUriSegment(path.path) + serializeMatrixParams(path.parameters);
}
function serializeMatrixParams(params) {
    return Object.keys(params)
        .map(function (key) { return ";" + encodeUriSegment(key) + "=" + encodeUriSegment(params[key]); })
        .join('');
}
function serializeQueryParams(params) {
    var strParams = Object.keys(params).map(function (name) {
        var value = params[name];
        return Array.isArray(value) ?
            value.map(function (v) { return encodeUriQuery(name) + "=" + encodeUriQuery(v); }).join('&') :
            encodeUriQuery(name) + "=" + encodeUriQuery(value);
    });
    return strParams.length ? "?" + strParams.join("&") : '';
}
var SEGMENT_RE = /^[^\/()?;=#]+/;
function matchSegments(str) {
    var match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
// Return the name of the query param at the start of the string or an empty string
function matchQueryParams(str) {
    var match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
// Return the value of the query param at the start of the string or an empty string
function matchUrlQueryParamValue(str) {
    var match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
var UrlParser = /** @class */ (function () {
    function UrlParser(url) {
        this.url = url;
        this.remaining = url;
    }
    UrlParser.prototype.parseRootSegment = function () {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        // The root segment group never has segments
        return new UrlSegmentGroup([], this.parseChildren());
    };
    UrlParser.prototype.parseQueryParams = function () {
        var params = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    };
    UrlParser.prototype.parseFragment = function () {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    };
    UrlParser.prototype.parseChildren = function () {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        var segments = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        var children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        var res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
    };
    // parse a segment with its matrix parameters
    // ie `name;k1=v1;k2`
    UrlParser.prototype.parseSegment = function () {
        var path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
    };
    UrlParser.prototype.parseMatrixParams = function () {
        var params = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseParam = function (params) {
        var key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var value = '';
        if (this.consumeOptional('=')) {
            var valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    // Parse a single query parameter `name[=value]`
    UrlParser.prototype.parseQueryParam = function (params) {
        var key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var value = '';
        if (this.consumeOptional('=')) {
            var valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        var decodedKey = decodeQuery(key);
        var decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
            // Append to existing values
            var currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            // Create a new value
            params[decodedKey] = decodedVal;
        }
    };
    // parse `(a/b//outlet_name:c/d)`
    UrlParser.prototype.parseParens = function (allowPrimary) {
        var segments = {};
        this.capture('(');
        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            var path = matchSegments(this.remaining);
            var next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            var outletName = undefined;
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            var children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    };
    UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
    // Consumes the prefix when it is present and returns whether it has been consumed
    UrlParser.prototype.consumeOptional = function (str) {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    };
    UrlParser.prototype.capture = function (str) {
        if (!this.consumeOptional(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
    };
    return UrlParser;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NoMatch = /** @class */ (function () {
    function NoMatch(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
    }
    return NoMatch;
}());
var AbsoluteRedirect = /** @class */ (function () {
    function AbsoluteRedirect(urlTree) {
        this.urlTree = urlTree;
    }
    return AbsoluteRedirect;
}());
function noMatch(segmentGroup) {
    return new rxjs.Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
function absoluteRedirect(newTree) {
    return new rxjs.Observable(function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
}
function namedOutletsRedirect(redirectTo) {
    return new rxjs.Observable(function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
}
function canLoadFails(route) {
    return new rxjs.Observable(function (obs) { return obs.error(navigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
/**
 * Returns the `UrlTree` with the redirection applied.
 *
 * Lazy modules are loaded along the way.
 */
function applyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config).apply();
}
var ApplyRedirects = /** @class */ (function () {
    function ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
        this.ngModule = moduleInjector.get(core.NgModuleRef);
    }
    ApplyRedirects.prototype.apply = function () {
        var _this = this;
        var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET);
        var urlTrees$ = expanded$.pipe(operators.map(function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment); }));
        return urlTrees$.pipe(operators.catchError(function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(e.urlTree);
            }
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        }));
    };
    ApplyRedirects.prototype.match = function (tree) {
        var _this = this;
        var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET);
        var mapped$ = expanded$.pipe(operators.map(function (rootSegmentGroup) {
            return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
        }));
        return mapped$.pipe(operators.catchError(function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        }));
    };
    ApplyRedirects.prototype.noMatchError = function (e) {
        return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
    };
    ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
        var root = rootCandidate.segments.length > 0 ?
            new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
            rootCandidate;
        return new UrlTree(root, queryParams, fragment);
        var _a;
    };
    ApplyRedirects.prototype.expandSegmentGroup = function (ngModule, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.expandChildren(ngModule, routes, segmentGroup)
                .pipe(operators.map(function (children) { return new UrlSegmentGroup([], children); }));
        }
        return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);
    };
    // Recursively expand segment groups for all the child outlets
    ApplyRedirects.prototype.expandChildren = function (ngModule, routes, segmentGroup) {
        var _this = this;
        return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(ngModule, routes, child, childOutlet); });
    };
    ApplyRedirects.prototype.expandSegment = function (ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        return rxjs.of.apply(void 0, __spread(routes)).pipe(operators.map(function (r) {
            var expanded$ = _this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return expanded$.pipe(operators.catchError(function (e) {
                if (e instanceof NoMatch) {
                    // TODO(i): this return type doesn't match the declared Observable<UrlSegmentGroup> -
                    // talk to Jason
                    return rxjs.of(null);
                }
                throw e;
            }));
        }), operators.concatAll(), operators.first(function (s) { return !!s; }), operators.catchError(function (e, _) {
            if (e instanceof rxjs.EmptyError || e.name === 'EmptyError') {
                if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return rxjs.of(new UrlSegmentGroup([], {}));
                }
                throw new NoMatch(segmentGroup);
            }
            throw e;
        }));
    };
    ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    ApplyRedirects.prototype.expandSegmentAgainstRoute = function (ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet) {
            return noMatch(segmentGroup);
        }
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths);
        }
        if (allowRedirects && this.allowRedirects) {
            return this.expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, paths, outlet);
        }
        return noMatch(segmentGroup);
    };
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet);
        }
        return this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
    };
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (ngModule, routes, route, outlet) {
        var _this = this;
        var newTree = this.applyRedirectCommands([], route.redirectTo, {});
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(operators.mergeMap(function (newSegments) {
            var group = new UrlSegmentGroup(newSegments, {});
            return _this.expandSegment(ngModule, group, routes, newSegments, outlet, false);
        }));
    };
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
        var _this = this;
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        var newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(operators.mergeMap(function (newSegments) {
            return _this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
        }));
    };
    ApplyRedirects.prototype.matchSegmentAgainstRoute = function (ngModule, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            if (route.loadChildren) {
                return this.configLoader.load(ngModule.injector, route)
                    .pipe(operators.map(function (cfg) {
                    route._loadedConfig = cfg;
                    return new UrlSegmentGroup(segments, {});
                }));
            }
            return rxjs.of(new UrlSegmentGroup(segments, {}));
        }
        var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild;
        if (!matched)
            return noMatch(rawSegmentGroup);
        var rawSlicedSegments = segments.slice(lastChild);
        var childConfig$ = this.getChildConfig(ngModule, route);
        return childConfig$.pipe(operators.mergeMap(function (routerConfig) {
            var childModule = routerConfig.module;
            var childConfig = routerConfig.routes;
            var _a = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                var expanded$_1 = _this.expandChildren(childModule, childConfig, segmentGroup);
                return expanded$_1.pipe(operators.map(function (children) { return new UrlSegmentGroup(consumedSegments, children); }));
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
                return rxjs.of(new UrlSegmentGroup(consumedSegments, {}));
            }
            var expanded$ = _this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
            return expanded$.pipe(operators.map(function (cs) {
                return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children);
            }));
        }));
    };
    ApplyRedirects.prototype.getChildConfig = function (ngModule, route) {
        var _this = this;
        if (route.children) {
            // The children belong to the same module
            return rxjs.of(new LoadedRouterConfig(route.children, ngModule));
        }
        if (route.loadChildren) {
            // lazy children belong to the loaded module
            if (route._loadedConfig !== undefined) {
                return rxjs.of(route._loadedConfig);
            }
            return runCanLoadGuard(ngModule.injector, route).pipe(operators.mergeMap(function (shouldLoad) {
                if (shouldLoad) {
                    return _this.configLoader.load(ngModule.injector, route)
                        .pipe(operators.map(function (cfg) {
                        route._loadedConfig = cfg;
                        return cfg;
                    }));
                }
                return canLoadFails(route);
            }));
        }
        return rxjs.of(new LoadedRouterConfig([], ngModule));
    };
    ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
        var res = [];
        var c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return rxjs.of(res);
            }
            if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                return namedOutletsRedirect(route.redirectTo);
            }
            c = c.children[PRIMARY_OUTLET];
        }
    };
    ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    };
    ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
        var newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    };
    ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
        var res = {};
        forEach(redirectToParams, function (v, k) {
            var copySourceValue = typeof v === 'string' && v.startsWith(':');
            if (copySourceValue) {
                var sourceName = v.substring(1);
                res[k] = actualParams[sourceName];
            }
            else {
                res[k] = v;
            }
        });
        return res;
    };
    ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
        var _this = this;
        var updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        var children = {};
        forEach(group.children, function (child, name) {
            children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new UrlSegmentGroup(updatedSegments, children);
    };
    ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
        var _this = this;
        return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
            _this.findOrReturn(s, actualSegments); });
    };
    ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
        var pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
        return pos;
    };
    ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
        var idx = 0;
        try {
            for (var actualSegments_1 = __values(actualSegments), actualSegments_1_1 = actualSegments_1.next(); !actualSegments_1_1.done; actualSegments_1_1 = actualSegments_1.next()) {
                var s = actualSegments_1_1.value;
                if (s.path === redirectToUrlSegment.path) {
                    actualSegments.splice(idx);
                    return s;
                }
                idx++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (actualSegments_1_1 && !actualSegments_1_1.done && (_a = actualSegments_1.return)) _a.call(actualSegments_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return redirectToUrlSegment;
        var e_1, _a;
    };
    return ApplyRedirects;
}());
function runCanLoadGuard(moduleInjector, route) {
    var canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return rxjs.of(true);
    var obs = rxjs.from(canLoad).pipe(operators.map(function (injectionToken) {
        var guard = moduleInjector.get(injectionToken);
        return wrapIntoObservable(guard.canLoad ? guard.canLoad(route) : guard(route));
    }));
    return andObservables(obs);
}
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    }
    var matcher = route.matcher || defaultUrlMatcher;
    var res = matcher(segments, segmentGroup, route);
    if (!res) {
        return {
            matched: false,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {},
        };
    }
    return {
        matched: true,
        consumedSegments: res.consumed,
        lastChild: res.consumed.length,
        positionalParamSegments: res.posParams,
    };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        var s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
}
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
        var c = s.children[PRIMARY_OUTLET];
        return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
    }
    return s;
}
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var res = {};
    try {
        for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
            var r = routes_1_1.value;
            if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
                res[getOutlet(r)] = new UrlSegmentGroup([], {});
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return __assign({}, children, res);
    var e_2, _a;
}
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    var res = {};
    res[PRIMARY_OUTLET] = primarySegmentGroup;
    try {
        for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
            var r = routes_2_1.value;
            if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
                res[getOutlet(r)] = new UrlSegmentGroup([], {});
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (routes_2_1 && !routes_2_1.done && (_a = routes_2.return)) _a.call(routes_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return res;
    var e_3, _a;
}
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET; });
}
function containsEmptyPathRedirects(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r); });
}
function isEmptyPathRedirect(segmentGroup, segments, r) {
    if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo !== undefined;
}
function getOutlet(route) {
    return route.outlet || PRIMARY_OUTLET;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Tree = /** @class */ (function () {
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal
     */
    Tree.prototype.parent = function (t) {
        var p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    /**
     * @internal
     */
    Tree.prototype.children = function (t) {
        var n = findNode(t, this._root);
        return n ? n.children.map(function (t) { return t.value; }) : [];
    };
    /**
     * @internal
     */
    Tree.prototype.firstChild = function (t) {
        var n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    };
    /**
     * @internal
     */
    Tree.prototype.siblings = function (t) {
        var p = findPath(t, this._root);
        if (p.length < 2)
            return [];
        var c = p[p.length - 2].children.map(function (c) { return c.value; });
        return c.filter(function (cc) { return cc !== t; });
    };
    /**
     * @internal
     */
    Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root).map(function (s) { return s.value; }); };
    return Tree;
}());
// DFS for the node matching the value
function findNode(value, node) {
    if (value === node.value)
        return node;
    try {
        for (var _a = __values(node.children), _b = _a.next(); !_b.done; _b = _a.next()) {
            var child = _b.value;
            var node_1 = findNode(value, child);
            if (node_1)
                return node_1;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
    var e_1, _c;
}
// Return the path to the node with the given value using DFS
function findPath(value, node) {
    if (value === node.value)
        return [node];
    try {
        for (var _a = __values(node.children), _b = _a.next(); !_b.done; _b = _a.next()) {
            var child = _b.value;
            var path = findPath(value, child);
            if (path.length) {
                path.unshift(node);
                return path;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return [];
    var e_2, _c;
}
var TreeNode = /** @class */ (function () {
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
    return TreeNode;
}());
// Return the list of T indexed by outlet name
function nodeChildrenAsMap(node) {
    var map$$1 = {};
    if (node) {
        node.children.forEach(function (child) { return map$$1[child.value.outlet] = child; });
    }
    return map$$1;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Represents the state of the router.
 *
 * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
 * segments, the extracted parameters, and the resolved data.
 *
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * See `ActivatedRoute` for more information.
 *
 *
 */
var RouterState = /** @class */ (function (_super) {
    __extends(RouterState, _super);
    /** @internal */
    function RouterState(root, 
    /** The current snapshot of the router state */
    snapshot) {
        var _this = _super.call(this, root) || this;
        _this.snapshot = snapshot;
        setRouterState(_this, root);
        return _this;
    }
    RouterState.prototype.toString = function () { return this.snapshot.toString(); };
    return RouterState;
}(Tree));
function createEmptyState(urlTree, rootComponent) {
    var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    var emptyUrl = new rxjs.BehaviorSubject([new UrlSegment('', {})]);
    var emptyParams = new rxjs.BehaviorSubject({});
    var emptyData = new rxjs.BehaviorSubject({});
    var emptyQueryParams = new rxjs.BehaviorSubject({});
    var fragment = new rxjs.BehaviorSubject('');
    var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(urlTree, rootComponent) {
    var emptyParams = {};
    var emptyData = {};
    var emptyQueryParams = {};
    var fragment = '';
    var activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
    return new RouterStateSnapshot('', new TreeNode(activated, []));
}
/**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet.  An `ActivatedRoute` can also be used to traverse the router state tree.
 *
 * ```
 * @Component({...})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: Observable<string> = route.params.map(p => p.id);
 *     const url: Observable<string> = route.url.map(segments => segments.join(''));
 *     // route.data includes both `data` and `resolve`
 *     const user = route.data.map(d => d.user);
 *   }
 * }
 * ```
 *
 *
 */
var ActivatedRoute = /** @class */ (function () {
    /** @internal */
    function ActivatedRoute(
    /** An observable of the URL segments matched by this route */
    url, 
    /** An observable of the matrix parameters scoped to this route */
    params, 
    /** An observable of the query parameters shared by all the routes */
    queryParams, 
    /** An observable of the URL fragment shared by all the routes */
    fragment, 
    /** An observable of the static and resolved data of this route. */
    data, 
    /** The outlet name of the route. It's a constant */
    outlet, 
    /** The component of the route. It's a constant */
    // TODO(vsavkin): remove |string
    component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
        /** The configuration used to match this route */
        get: function () { return this._futureSnapshot.routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "root", {
        /** The root of the router state */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "parent", {
        /** The parent of this route in the router state tree */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
        /** The first child of this route in the router state tree */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "children", {
        /** The children of this route in the router state tree */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
        /** The path from the root of the router state tree to this route */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "paramMap", {
        get: function () {
            if (!this._paramMap) {
                this._paramMap = this.params.pipe(operators.map(function (p) { return convertToParamMap(p); }));
            }
            return this._paramMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "queryParamMap", {
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap =
                    this.queryParams.pipe(operators.map(function (p) { return convertToParamMap(p); }));
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    ActivatedRoute.prototype.toString = function () {
        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
    };
    return ActivatedRoute;
}());
/**
 * Returns the inherited params, data, and resolve for a given route.
 * By default, this only inherits values up to the nearest path-less or component-less route.
 * @internal
 */
function inheritedParamsDataResolve(route, paramsInheritanceStrategy) {
    if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
    var pathFromRoot = route.pathFromRoot;
    var inheritingStartingFrom = 0;
    if (paramsInheritanceStrategy !== 'always') {
        inheritingStartingFrom = pathFromRoot.length - 1;
        while (inheritingStartingFrom >= 1) {
            var current = pathFromRoot[inheritingStartingFrom];
            var parent_1 = pathFromRoot[inheritingStartingFrom - 1];
            // current route is an empty path => inherits its parent's params and data
            if (current.routeConfig && current.routeConfig.path === '') {
                inheritingStartingFrom--;
                // parent is componentless => current route should inherit its params and data
            }
            else if (!parent_1.component) {
                inheritingStartingFrom--;
            }
            else {
                break;
            }
        }
    }
    return flattenInherited(pathFromRoot.slice(inheritingStartingFrom));
}
/** @internal */
function flattenInherited(pathFromRoot) {
    return pathFromRoot.reduce(function (res, curr) {
        var params = __assign({}, res.params, curr.params);
        var data = __assign({}, res.data, curr.data);
        var resolve = __assign({}, res.resolve, curr._resolvedData);
        return { params: params, data: data, resolve: resolve };
    }, { params: {}, data: {}, resolve: {} });
}
/**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * @Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 *
 */
var ActivatedRouteSnapshot = /** @class */ (function () {
    /** @internal */
    function ActivatedRouteSnapshot(
    /** The URL segments matched by this route */
    url, 
    /** The matrix parameters scoped to this route */
    params, 
    /** The query parameters shared by all the routes */
    queryParams, 
    /** The URL fragment shared by all the routes */
    fragment, 
    /** The static and resolved data of this route */
    data, 
    /** The outlet name of the route */
    outlet, 
    /** The component of the route */
    component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this.routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
        /** The root of the router state */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
        /** The parent of this route in the router state tree */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
        /** The first child of this route in the router state tree */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
        /** The children of this route in the router state tree */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
        /** The path from the root of the router state tree to this route */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "paramMap", {
        get: function () {
            if (!this._paramMap) {
                this._paramMap = convertToParamMap(this.params);
            }
            return this._paramMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "queryParamMap", {
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    ActivatedRouteSnapshot.prototype.toString = function () {
        var url = this.url.map(function (segment) { return segment.toString(); }).join('/');
        var matched = this.routeConfig ? this.routeConfig.path : '';
        return "Route(url:'" + url + "', path:'" + matched + "')";
    };
    return ActivatedRouteSnapshot;
}());
/**
 * @description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 *
 */
var RouterStateSnapshot = /** @class */ (function (_super) {
    __extends(RouterStateSnapshot, _super);
    /** @internal */
    function RouterStateSnapshot(
    /** The url from which this snapshot was created */
    url, root) {
        var _this = _super.call(this, root) || this;
        _this.url = url;
        setRouterState(_this, root);
        return _this;
    }
    RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
    return RouterStateSnapshot;
}(Tree));
function setRouterState(state, node) {
    node.value._routerState = state;
    node.children.forEach(function (c) { return setRouterState(state, c); });
}
function serializeNode(node) {
    var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(', ') + " } " : '';
    return "" + node.value + c;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 */
function advanceActivatedRoute(route) {
    if (route.snapshot) {
        var currentSnapshot = route.snapshot;
        var nextSnapshot = route._futureSnapshot;
        route.snapshot = nextSnapshot;
        if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
            route.queryParams.next(nextSnapshot.queryParams);
        }
        if (currentSnapshot.fragment !== nextSnapshot.fragment) {
            route.fragment.next(nextSnapshot.fragment);
        }
        if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
            route.params.next(nextSnapshot.params);
        }
        if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
            route.url.next(nextSnapshot.url);
        }
        if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
            route.data.next(nextSnapshot.data);
        }
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        route.data.next(route._futureSnapshot.data);
    }
}
function equalParamsAndUrlSegments(a, b) {
    var equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
    var parentsMismatch = !a.parent !== !b.parent;
    return equalUrlParams && !parentsMismatch &&
        (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function createRouterState(routeReuseStrategy, curr, prevState) {
    var root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        var value = prevState.value;
        value._futureSnapshot = curr.value;
        var children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new TreeNode(value, children);
        // retrieve an activated route that is used to be displayed, but is not currently displayed
    }
    else {
        var detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
        if (detachedRouteHandle) {
            var tree = detachedRouteHandle.route;
            setFutureSnapshotsOfActivatedRoutes(curr, tree);
            return tree;
        }
        else {
            var value = createActivatedRoute(curr.value);
            var children = curr.children.map(function (c) { return createNode(routeReuseStrategy, c); });
            return new TreeNode(value, children);
        }
    }
}
function setFutureSnapshotsOfActivatedRoutes(curr, result) {
    if (curr.value.routeConfig !== result.value.routeConfig) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
    }
    if (curr.children.length !== result.children.length) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
    }
    result.value._futureSnapshot = curr.value;
    for (var i = 0; i < curr.children.length; ++i) {
        setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
    }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map(function (child) {
        try {
            for (var _a = __values(prevState.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var p = _b.value;
                if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                    return createNode(routeReuseStrategy, child, p);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return createNode(routeReuseStrategy, child);
        var e_1, _c;
    });
}
function createActivatedRoute(c) {
    return new ActivatedRoute(new rxjs.BehaviorSubject(c.url), new rxjs.BehaviorSubject(c.params), new rxjs.BehaviorSubject(c.queryParams), new rxjs.BehaviorSubject(c.fragment), new rxjs.BehaviorSubject(c.data), c.outlet, c.component, c);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    var nav = computeNavigation(commands);
    if (nav.toRoot()) {
        return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
    }
    var startingPosition = findStartingPosition(nav, urlTree, route);
    var segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
function isMatrixParams(command) {
    return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
}
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    var qp = {};
    if (queryParams) {
        forEach(queryParams, function (value, name) {
            qp[name] = Array.isArray(value) ? value.map(function (v) { return "" + v; }) : "" + value;
        });
    }
    if (urlTree.root === oldSegmentGroup) {
        return new UrlTree(newSegmentGroup, qp, fragment);
    }
    return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
    var children = {};
    forEach(current.children, function (c, outletName) {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    });
    return new UrlSegmentGroup(current.segments, children);
}
var Navigation = /** @class */ (function () {
    function Navigation(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
            throw new Error('Root segment cannot have matrix parameters');
        }
        var cmdWithOutlet = commands.find(function (c) { return typeof c === 'object' && c != null && c.outlets; });
        if (cmdWithOutlet && cmdWithOutlet !== last$1(commands)) {
            throw new Error('{outlets:{}} has to be the last command');
        }
    }
    Navigation.prototype.toRoot = function () {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
    };
    return Navigation;
}());
/** Transforms commands to a normalized `Navigation` */
function computeNavigation(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
        return new Navigation(true, 0, commands);
    }
    var numberOfDoubleDots = 0;
    var isAbsolute = false;
    var res = commands.reduce(function (res, cmd, cmdIdx) {
        if (typeof cmd === 'object' && cmd != null) {
            if (cmd.outlets) {
                var outlets_1 = {};
                forEach(cmd.outlets, function (commands, name) {
                    outlets_1[name] = typeof commands === 'string' ? commands.split('/') : commands;
                });
                return __spread(res, [{ outlets: outlets_1 }]);
            }
            if (cmd.segmentPath) {
                return __spread(res, [cmd.segmentPath]);
            }
        }
        if (!(typeof cmd === 'string')) {
            return __spread(res, [cmd]);
        }
        if (cmdIdx === 0) {
            cmd.split('/').forEach(function (urlPart, partIndex) {
                if (partIndex == 0 && urlPart === '.') {
                    // skip './a'
                }
                else if (partIndex == 0 && urlPart === '') {
                    isAbsolute = true;
                }
                else if (urlPart === '..') {
                    numberOfDoubleDots++;
                }
                else if (urlPart != '') {
                    res.push(urlPart);
                }
            });
            return res;
        }
        return __spread(res, [cmd]);
    }, []);
    return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = /** @class */ (function () {
    function Position(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
    return Position;
}());
function findStartingPosition(nav, tree, route) {
    if (nav.isAbsolute) {
        return new Position(tree.root, true, 0);
    }
    if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    var modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
    var index = route.snapshot._lastPathIndex + modifier;
    return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
    var g = group;
    var ci = index;
    var dd = numberOfDoubleDots;
    while (dd > ci) {
        dd -= ci;
        g = g.parent;
        if (!g) {
            throw new Error('Invalid number of \'../\'');
        }
        ci = g.segments.length;
    }
    return new Position(g, false, ci - dd);
}
function getPath(command) {
    if (typeof command === 'object' && command != null && command.outlets) {
        return command.outlets[PRIMARY_OUTLET];
    }
    return "" + command;
}
function getOutlets(commands) {
    if (!(typeof commands[0] === 'object'))
        return _a = {}, _a[PRIMARY_OUTLET] = commands, _a;
    if (commands[0].outlets === undefined)
        return _b = {}, _b[PRIMARY_OUTLET] = commands, _b;
    return commands[0].outlets;
    var _a, _b;
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new UrlSegmentGroup([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    var m = prefixedWith(segmentGroup, startIndex, commands);
    var slicedCommands = commands.slice(m.commandIndex);
    if (m.match && m.pathIndex < segmentGroup.segments.length) {
        var g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
        g.children[PRIMARY_OUTLET] =
            new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
        return updateSegmentGroupChildren(g, 0, slicedCommands);
    }
    else if (m.match && slicedCommands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else {
        var outlets_2 = getOutlets(commands);
        var children_1 = {};
        forEach(outlets_2, function (commands, outlet) {
            if (commands !== null) {
                children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        });
        forEach(segmentGroup.children, function (child, childOutlet) {
            if (outlets_2[childOutlet] === undefined) {
                children_1[childOutlet] = child;
            }
        });
        return new UrlSegmentGroup(segmentGroup.segments, children_1);
    }
}
function prefixedWith(segmentGroup, startIndex, commands) {
    var currentCommandIndex = 0;
    var currentPathIndex = startIndex;
    var noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        var path = segmentGroup.segments[currentPathIndex];
        var curr = getPath(commands[currentCommandIndex]);
        var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (currentPathIndex > 0 && curr === undefined)
            break;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    var paths = segmentGroup.segments.slice(0, startIndex);
    var i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            var children = createNewSegmentChildren(commands[i].outlets);
            return new UrlSegmentGroup(paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && isMatrixParams(commands[0])) {
            var p = segmentGroup.segments[startIndex];
            paths.push(new UrlSegment(p.path, commands[0]));
            i++;
            continue;
        }
        var curr = getPath(commands[i]);
        var next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && isMatrixParams(next)) {
            paths.push(new UrlSegment(curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new UrlSegment(curr, {}));
            i++;
        }
    }
    return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
    var children = {};
    forEach(outlets, function (commands, outlet) {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
        }
    });
    return children;
}
function stringify(params) {
    var res = {};
    forEach(params, function (v, k) { return res[k] = "" + v; });
    return res;
}
function compare(path, params, segment) {
    return path == segment.path && shallowEqual(params, segment.parameters);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CanActivate = /** @class */ (function () {
    function CanActivate(path) {
        this.path = path;
        this.route = this.path[this.path.length - 1];
    }
    return CanActivate;
}());
var CanDeactivate = /** @class */ (function () {
    function CanDeactivate(component, route) {
        this.component = component;
        this.route = route;
    }
    return CanDeactivate;
}());
/**
 * This class bundles the actions involved in preactivation of a route.
 */
var PreActivation = /** @class */ (function () {
    function PreActivation(future, curr, moduleInjector, forwardEvent) {
        this.future = future;
        this.curr = curr;
        this.moduleInjector = moduleInjector;
        this.forwardEvent = forwardEvent;
        this.canActivateChecks = [];
        this.canDeactivateChecks = [];
    }
    PreActivation.prototype.initialize = function (parentContexts) {
        var futureRoot = this.future._root;
        var currRoot = this.curr ? this.curr._root : null;
        this.setupChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
    };
    PreActivation.prototype.checkGuards = function () {
        var _this = this;
        if (!this.isDeactivating() && !this.isActivating()) {
            return rxjs.of(true);
        }
        var canDeactivate$ = this.runCanDeactivateChecks();
        return canDeactivate$.pipe(operators.mergeMap(function (canDeactivate) { return canDeactivate ? _this.runCanActivateChecks() : rxjs.of(false); }));
    };
    PreActivation.prototype.resolveData = function (paramsInheritanceStrategy) {
        var _this = this;
        if (!this.isActivating())
            return rxjs.of(null);
        return rxjs.from(this.canActivateChecks)
            .pipe(operators.concatMap(function (check) { return _this.runResolve(check.route, paramsInheritanceStrategy); }), operators.reduce(function (_, __) { return _; }));
    };
    PreActivation.prototype.isDeactivating = function () { return this.canDeactivateChecks.length !== 0; };
    PreActivation.prototype.isActivating = function () { return this.canActivateChecks.length !== 0; };
    /**
     * Iterates over child routes and calls recursive `setupRouteGuards` to get `this` instance in
     * proper state to run `checkGuards()` method.
     */
    PreActivation.prototype.setupChildRouteGuards = function (futureNode, currNode, contexts, futurePath) {
        var _this = this;
        var prevChildren = nodeChildrenAsMap(currNode);
        // Process the children of the future route
        futureNode.children.forEach(function (c) {
            _this.setupRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]));
            delete prevChildren[c.value.outlet];
        });
        // Process any children left from the current route (not active for the future route)
        forEach(prevChildren, function (v, k) {
            return _this.deactivateRouteAndItsChildren(v, contexts.getContext(k));
        });
    };
    /**
     * Iterates over child routes and calls recursive `setupRouteGuards` to get `this` instance in
     * proper state to run `checkGuards()` method.
     */
    PreActivation.prototype.setupRouteGuards = function (futureNode, currNode, parentContexts, futurePath) {
        var future = futureNode.value;
        var curr = currNode ? currNode.value : null;
        var context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
        // reusing the node
        if (curr && future.routeConfig === curr.routeConfig) {
            var shouldRunGuardsAndResolvers = this.shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
            if (shouldRunGuardsAndResolvers) {
                this.canActivateChecks.push(new CanActivate(futurePath));
            }
            else {
                // we need to set the data
                future.data = curr.data;
                future._resolvedData = curr._resolvedData;
            }
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.setupChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath);
                // if we have a componentless route, we recurse but keep the same outlet map.
            }
            else {
                this.setupChildRouteGuards(futureNode, currNode, parentContexts, futurePath);
            }
            if (shouldRunGuardsAndResolvers) {
                var outlet = context.outlet;
                this.canDeactivateChecks.push(new CanDeactivate(outlet.component, curr));
            }
        }
        else {
            if (curr) {
                this.deactivateRouteAndItsChildren(currNode, context);
            }
            this.canActivateChecks.push(new CanActivate(futurePath));
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.setupChildRouteGuards(futureNode, null, context ? context.children : null, futurePath);
                // if we have a componentless route, we recurse but keep the same outlet map.
            }
            else {
                this.setupChildRouteGuards(futureNode, null, parentContexts, futurePath);
            }
        }
    };
    PreActivation.prototype.shouldRunGuardsAndResolvers = function (curr, future, mode) {
        switch (mode) {
            case 'always':
                return true;
            case 'paramsOrQueryParamsChange':
                return !equalParamsAndUrlSegments(curr, future) ||
                    !shallowEqual(curr.queryParams, future.queryParams);
            case 'paramsChange':
            default:
                return !equalParamsAndUrlSegments(curr, future);
        }
    };
    PreActivation.prototype.deactivateRouteAndItsChildren = function (route, context) {
        var _this = this;
        var children = nodeChildrenAsMap(route);
        var r = route.value;
        forEach(children, function (node, childName) {
            if (!r.component) {
                _this.deactivateRouteAndItsChildren(node, context);
            }
            else if (context) {
                _this.deactivateRouteAndItsChildren(node, context.children.getContext(childName));
            }
            else {
                _this.deactivateRouteAndItsChildren(node, null);
            }
        });
        if (!r.component) {
            this.canDeactivateChecks.push(new CanDeactivate(null, r));
        }
        else if (context && context.outlet && context.outlet.isActivated) {
            this.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
        }
        else {
            this.canDeactivateChecks.push(new CanDeactivate(null, r));
        }
    };
    PreActivation.prototype.runCanDeactivateChecks = function () {
        var _this = this;
        return rxjs.from(this.canDeactivateChecks)
            .pipe(operators.mergeMap(function (check) { return _this.runCanDeactivate(check.component, check.route); }), operators.every(function (result) { return result === true; }));
    };
    PreActivation.prototype.runCanActivateChecks = function () {
        var _this = this;
        return rxjs.from(this.canActivateChecks)
            .pipe(operators.concatMap(function (check) { return andObservables(rxjs.from([
            _this.fireChildActivationStart(check.route.parent),
            _this.fireActivationStart(check.route), _this.runCanActivateChild(check.path),
            _this.runCanActivate(check.route)
        ])); }), operators.every(function (result) { return result === true; }));
        // this.fireChildActivationStart(check.path),
    };
    /**
     * This should fire off `ActivationStart` events for each route being activated at this
     * level.
     * In other words, if you're activating `a` and `b` below, `path` will contain the
     * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
     * return
     * `true` so checks continue to run.
     */
    PreActivation.prototype.fireActivationStart = function (snapshot) {
        if (snapshot !== null && this.forwardEvent) {
            this.forwardEvent(new ActivationStart(snapshot));
        }
        return rxjs.of(true);
    };
    /**
     * This should fire off `ChildActivationStart` events for each route being activated at this
     * level.
     * In other words, if you're activating `a` and `b` below, `path` will contain the
     * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
     * return
     * `true` so checks continue to run.
     */
    PreActivation.prototype.fireChildActivationStart = function (snapshot) {
        if (snapshot !== null && this.forwardEvent) {
            this.forwardEvent(new ChildActivationStart(snapshot));
        }
        return rxjs.of(true);
    };
    PreActivation.prototype.runCanActivate = function (future) {
        var _this = this;
        var canActivate = future.routeConfig ? future.routeConfig.canActivate : null;
        if (!canActivate || canActivate.length === 0)
            return rxjs.of(true);
        var obs = rxjs.from(canActivate).pipe(operators.map(function (c) {
            var guard = _this.getToken(c, future);
            var observable;
            if (guard.canActivate) {
                observable = wrapIntoObservable(guard.canActivate(future, _this.future));
            }
            else {
                observable = wrapIntoObservable(guard(future, _this.future));
            }
            return observable.pipe(operators.first());
        }));
        return andObservables(obs);
    };
    PreActivation.prototype.runCanActivateChild = function (path) {
        var _this = this;
        var future = path[path.length - 1];
        var canActivateChildGuards = path.slice(0, path.length - 1)
            .reverse()
            .map(function (p) { return _this.extractCanActivateChild(p); })
            .filter(function (_) { return _ !== null; });
        return andObservables(rxjs.from(canActivateChildGuards).pipe(operators.map(function (d) {
            var obs = rxjs.from(d.guards).pipe(operators.map(function (c) {
                var guard = _this.getToken(c, d.node);
                var observable;
                if (guard.canActivateChild) {
                    observable = wrapIntoObservable(guard.canActivateChild(future, _this.future));
                }
                else {
                    observable = wrapIntoObservable(guard(future, _this.future));
                }
                return observable.pipe(operators.first());
            }));
            return andObservables(obs);
        })));
    };
    PreActivation.prototype.extractCanActivateChild = function (p) {
        var canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
        if (!canActivateChild || canActivateChild.length === 0)
            return null;
        return { node: p, guards: canActivateChild };
    };
    PreActivation.prototype.runCanDeactivate = function (component, curr) {
        var _this = this;
        var canDeactivate = curr && curr.routeConfig ? curr.routeConfig.canDeactivate : null;
        if (!canDeactivate || canDeactivate.length === 0)
            return rxjs.of(true);
        var canDeactivate$ = rxjs.from(canDeactivate).pipe(operators.mergeMap(function (c) {
            var guard = _this.getToken(c, curr);
            var observable;
            if (guard.canDeactivate) {
                observable =
                    wrapIntoObservable(guard.canDeactivate(component, curr, _this.curr, _this.future));
            }
            else {
                observable = wrapIntoObservable(guard(component, curr, _this.curr, _this.future));
            }
            return observable.pipe(operators.first());
        }));
        return canDeactivate$.pipe(operators.every(function (result) { return result === true; }));
    };
    PreActivation.prototype.runResolve = function (future, paramsInheritanceStrategy) {
        var resolve = future._resolve;
        return this.resolveNode(resolve, future).pipe(operators.map(function (resolvedData) {
            future._resolvedData = resolvedData;
            future.data = __assign({}, future.data, inheritedParamsDataResolve(future, paramsInheritanceStrategy).resolve);
            return null;
        }));
    };
    PreActivation.prototype.resolveNode = function (resolve, future) {
        var _this = this;
        var keys = Object.keys(resolve);
        if (keys.length === 0) {
            return rxjs.of({});
        }
        if (keys.length === 1) {
            var key_1 = keys[0];
            return this.getResolver(resolve[key_1], future).pipe(operators.map(function (value) {
                return _a = {}, _a[key_1] = value, _a;
                var _a;
            }));
        }
        var data = {};
        var runningResolvers$ = rxjs.from(keys).pipe(operators.mergeMap(function (key) {
            return _this.getResolver(resolve[key], future).pipe(operators.map(function (value) {
                data[key] = value;
                return value;
            }));
        }));
        return runningResolvers$.pipe(operators.last(), operators.map(function () { return data; }));
    };
    PreActivation.prototype.getResolver = function (injectionToken, future) {
        var resolver = this.getToken(injectionToken, future);
        return resolver.resolve ? wrapIntoObservable(resolver.resolve(future, this.future)) :
            wrapIntoObservable(resolver(future, this.future));
    };
    PreActivation.prototype.getToken = function (token, snapshot) {
        var config = closestLoadedConfig(snapshot);
        var injector = config ? config.module.injector : this.moduleInjector;
        return injector.get(token);
    };
    return PreActivation;
}());
function closestLoadedConfig(snapshot) {
    if (!snapshot)
        return null;
    for (var s = snapshot.parent; s; s = s.parent) {
        var route = s.routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
    }
    return null;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NoMatch$1 = /** @class */ (function () {
    function NoMatch() {
    }
    return NoMatch;
}());
function recognize(rootComponentType, config, urlTree, url, paramsInheritanceStrategy) {
    if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
    return new Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy)
        .recognize();
}
var Recognizer = /** @class */ (function () {
    function Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy) {
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.url = url;
        this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    }
    Recognizer.prototype.recognize = function () {
        try {
            var rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config).segmentGroup;
            var children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
            var root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
            var rootNode = new TreeNode(root, children);
            var routeState = new RouterStateSnapshot(this.url, rootNode);
            this.inheritParamsAndData(routeState._root);
            return rxjs.of(routeState);
        }
        catch (e) {
            return new rxjs.Observable(function (obs) { return obs.error(e); });
        }
    };
    Recognizer.prototype.inheritParamsAndData = function (routeNode) {
        var _this = this;
        var route = routeNode.value;
        var i = inheritedParamsDataResolve(route, this.paramsInheritanceStrategy);
        route.params = Object.freeze(i.params);
        route.data = Object.freeze(i.data);
        routeNode.children.forEach(function (n) { return _this.inheritParamsAndData(n); });
    };
    Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.processChildren(config, segmentGroup);
        }
        return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
    };
    Recognizer.prototype.processChildren = function (config, segmentGroup) {
        var _this = this;
        var children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
        checkOutletNameUniqueness(children);
        sortActivatedRouteSnapshots(children);
        return children;
    };
    Recognizer.prototype.processSegment = function (config, segmentGroup, segments, outlet) {
        try {
            for (var config_1 = __values(config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                var r = config_1_1.value;
                try {
                    return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
                }
                catch (e) {
                    if (!(e instanceof NoMatch$1))
                        throw e;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (config_1_1 && !config_1_1.done && (_a = config_1.return)) _a.call(config_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
            return [];
        }
        throw new NoMatch$1();
        var e_1, _a;
    };
    Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, segments, outlet) {
        if (route.redirectTo)
            throw new NoMatch$1();
        if ((route.outlet || PRIMARY_OUTLET) !== outlet)
            throw new NoMatch$1();
        var snapshot;
        var consumedSegments = [];
        var rawSlicedSegments = [];
        if (route.path === '**') {
            var params = segments.length > 0 ? last$1(segments).parameters : {};
            snapshot = new ActivatedRouteSnapshot(segments, params, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
        }
        else {
            var result = match$1(rawSegment, route, segments);
            consumedSegments = result.consumedSegments;
            rawSlicedSegments = segments.slice(result.lastChild);
            snapshot = new ActivatedRouteSnapshot(consumedSegments, result.parameters, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
        }
        var childConfig = getChildConfig(route);
        var _a = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
            var children_1 = this.processChildren(childConfig, segmentGroup);
            return [new TreeNode(snapshot, children_1)];
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
            return [new TreeNode(snapshot, [])];
        }
        var children = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
        return [new TreeNode(snapshot, children)];
    };
    return Recognizer;
}());
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort(function (a, b) {
        if (a.value.outlet === PRIMARY_OUTLET)
            return -1;
        if (b.value.outlet === PRIMARY_OUTLET)
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
function getChildConfig(route) {
    if (route.children) {
        return route.children;
    }
    if (route.loadChildren) {
        return route._loadedConfig.routes;
    }
    return [];
}
function match$1(segmentGroup, route, segments) {
    if (route.path === '') {
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
            throw new NoMatch$1();
        }
        return { consumedSegments: [], lastChild: 0, parameters: {} };
    }
    var matcher = route.matcher || defaultUrlMatcher;
    var res = matcher(segments, segmentGroup, route);
    if (!res)
        throw new NoMatch$1();
    var posParams = {};
    forEach(res.posParams, function (v, k) { posParams[k] = v.path; });
    var parameters = res.consumed.length > 0 ? __assign({}, posParams, res.consumed[res.consumed.length - 1].parameters) :
        posParams;
    return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
}
function checkOutletNameUniqueness(nodes) {
    var names = {};
    nodes.forEach(function (n) {
        var routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
            var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
        }
        names[n.value.outlet] = n.value;
    });
}
function getSourceSegmentGroup(segmentGroup) {
    var s = segmentGroup;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
function getPathIndexShift(segmentGroup) {
    var s = segmentGroup;
    var res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
    }
    return res - 1;
}
function split$1(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var s_1 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        s_1._sourceSegment = segmentGroup;
        s_1._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_1, slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
        var s_2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        s_2._sourceSegment = segmentGroup;
        s_2._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_2, slicedSegments: slicedSegments };
    }
    var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
    s._sourceSegment = segmentGroup;
    s._segmentIndexShift = consumedSegments.length;
    return { segmentGroup: s, slicedSegments: slicedSegments };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var res = {};
    try {
        for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
            var r = routes_1_1.value;
            if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
                var s = new UrlSegmentGroup([], {});
                s._sourceSegment = segmentGroup;
                s._segmentIndexShift = segmentGroup.segments.length;
                res[getOutlet$1(r)] = s;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return __assign({}, children, res);
    var e_2, _a;
}
function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
    var res = {};
    res[PRIMARY_OUTLET] = primarySegment;
    primarySegment._sourceSegment = segmentGroup;
    primarySegment._segmentIndexShift = consumedSegments.length;
    try {
        for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
            var r = routes_2_1.value;
            if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
                var s = new UrlSegmentGroup([], {});
                s._sourceSegment = segmentGroup;
                s._segmentIndexShift = consumedSegments.length;
                res[getOutlet$1(r)] = s;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (routes_2_1 && !routes_2_1.done && (_a = routes_2.return)) _a.call(routes_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return res;
    var e_3, _a;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet$1(r) !== PRIMARY_OUTLET; });
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); });
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo === undefined;
}
function getOutlet$1(route) {
    return route.outlet || PRIMARY_OUTLET;
}
function getData(route) {
    return route.data || {};
}
function getResolve(route) {
    return route.resolve || {};
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * @experimental
 */
var RouteReuseStrategy = /** @class */ (function () {
    function RouteReuseStrategy() {
    }
    return RouteReuseStrategy;
}());
/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
var DefaultRouteReuseStrategy = /** @class */ (function () {
    function DefaultRouteReuseStrategy() {
    }
    DefaultRouteReuseStrategy.prototype.shouldDetach = function (route) { return false; };
    DefaultRouteReuseStrategy.prototype.store = function (route, detachedTree) { };
    DefaultRouteReuseStrategy.prototype.shouldAttach = function (route) { return false; };
    DefaultRouteReuseStrategy.prototype.retrieve = function (route) { return null; };
    DefaultRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return DefaultRouteReuseStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(i): switch to fromPromise once it's expored in rxjs
/**
 * @docsNotRequired
 * @experimental
 */
var ROUTES = new core.InjectionToken('ROUTES');
var RouterConfigLoader = /** @class */ (function () {
    function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
        this.loader = loader;
        this.compiler = compiler;
        this.onLoadStartListener = onLoadStartListener;
        this.onLoadEndListener = onLoadEndListener;
    }
    RouterConfigLoader.prototype.load = function (parentInjector, route) {
        var _this = this;
        if (this.onLoadStartListener) {
            this.onLoadStartListener(route);
        }
        var moduleFactory$ = this.loadModuleFactory(route.loadChildren);
        return moduleFactory$.pipe(operators.map(function (factory) {
            if (_this.onLoadEndListener) {
                _this.onLoadEndListener(route);
            }
            var module = factory.create(parentInjector);
            return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)).map(standardizeConfig), module);
        }));
    };
    RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
        var _this = this;
        if (typeof loadChildren === 'string') {
            return rxjs.from(this.loader.load(loadChildren));
        }
        else {
            return wrapIntoObservable(loadChildren()).pipe(operators.mergeMap(function (t) {
                if (t instanceof core.NgModuleFactory) {
                    return rxjs.of(t);
                }
                else {
                    return rxjs.from(_this.compiler.compileModuleAsync(t));
                }
            }));
        }
    };
    return RouterConfigLoader;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @experimental
 */
var UrlHandlingStrategy = /** @class */ (function () {
    function UrlHandlingStrategy() {
    }
    return UrlHandlingStrategy;
}());
/**
 * @experimental
 */
var DefaultUrlHandlingStrategy = /** @class */ (function () {
    function DefaultUrlHandlingStrategy() {
    }
    DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
    DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
    DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
    return DefaultUrlHandlingStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function defaultErrorHandler(error) {
    throw error;
}
/**
 * @internal
 */
function defaultRouterHook(snapshot) {
    return rxjs.of(null);
}
/**
 * @description
 *
 * Provides the navigation and url manipulation capabilities.
 *
 * See `Routes` for more details and examples.
 *
 * @ngModule RouterModule
 *
 *
 */
var Router = /** @class */ (function () {
    /**
     * Creates the router service.
     */
    // TODO: vsavkin make internal after the final is out.
    function Router(rootComponentType, urlSerializer, rootContexts, location, injector, loader, compiler, config) {
        var _this = this;
        this.rootComponentType = rootComponentType;
        this.urlSerializer = urlSerializer;
        this.rootContexts = rootContexts;
        this.location = location;
        this.config = config;
        this.navigations = new rxjs.BehaviorSubject(null);
        this.navigationId = 0;
        this.events = new rxjs.Subject();
        /**
         * Error handler that is invoked when a navigation errors.
         *
         * See `ErrorHandler` for more information.
         */
        this.errorHandler = defaultErrorHandler;
        /**
         * Indicates if at least one navigation happened.
         */
        this.navigated = false;
        this.lastSuccessfulId = -1;
        /**
         * Used by RouterModule. This allows us to
         * pause the navigation either before preactivation or after it.
         * @internal
         */
        this.hooks = {
            beforePreactivation: defaultRouterHook,
            afterPreactivation: defaultRouterHook
        };
        /**
         * Extracts and merges URLs. Used for AngularJS to Angular migrations.
         */
        this.urlHandlingStrategy = new DefaultUrlHandlingStrategy();
        this.routeReuseStrategy = new DefaultRouteReuseStrategy();
        /**
         * Define what the router should do if it receives a navigation request to the current URL.
         * By default, the router will ignore this navigation. However, this prevents features such
         * as a "refresh" button. Use this option to configure the behavior when navigating to the
         * current URL. Default is 'ignore'.
         */
        this.onSameUrlNavigation = 'ignore';
        /**
         * Defines how the router merges params, data and resolved data from parent to child
         * routes. Available options are:
         *
         * - `'emptyOnly'`, the default, only inherits parent params for path-less or component-less
         *   routes.
         * - `'always'`, enables unconditional inheritance of parent params.
         */
        this.paramsInheritanceStrategy = 'emptyOnly';
        var onLoadStart = function (r) { return _this.triggerEvent(new RouteConfigLoadStart(r)); };
        var onLoadEnd = function (r) { return _this.triggerEvent(new RouteConfigLoadEnd(r)); };
        this.ngModule = injector.get(core.NgModuleRef);
        this.resetConfig(config);
        this.currentUrlTree = createEmptyUrlTree();
        this.rawUrlTree = this.currentUrlTree;
        this.configLoader = new RouterConfigLoader(loader, compiler, onLoadStart, onLoadEnd);
        this.routerState = createEmptyState(this.currentUrlTree, this.rootComponentType);
        this.processNavigations();
    }
    /**
     * @internal
     * TODO: this should be removed once the constructor of the router made internal
     */
    Router.prototype.resetRootComponentType = function (rootComponentType) {
        this.rootComponentType = rootComponentType;
        // TODO: vsavkin router 4.0 should make the root component set to null
        // this will simplify the lifecycle of the router.
        this.routerState.root.component = this.rootComponentType;
    };
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    Router.prototype.initialNavigation = function () {
        this.setUpLocationChangeListener();
        if (this.navigationId === 0) {
            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
        }
    };
    /**
     * Sets up the location change listener.
     */
    Router.prototype.setUpLocationChangeListener = function () {
        var _this = this;
        // Don't need to use Zone.wrap any more, because zone.js
        // already patch onPopState, so location change callback will
        // run into ngZone
        if (!this.locationSubscription) {
            this.locationSubscription = this.location.subscribe(function (change) {
                var rawUrlTree = _this.urlSerializer.parse(change['url']);
                var source = change['type'] === 'popstate' ? 'popstate' : 'hashchange';
                var state = change.state && change.state.navigationId ?
                    { navigationId: change.state.navigationId } :
                    null;
                setTimeout(function () { _this.scheduleNavigation(rawUrlTree, source, state, { replaceUrl: true }); }, 0);
            });
        }
    };
    Object.defineProperty(Router.prototype, "url", {
        /** The current url */
        get: function () { return this.serializeUrl(this.currentUrlTree); },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    Router.prototype.triggerEvent = function (e) { this.events.next(e); };
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * ### Usage
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    Router.prototype.resetConfig = function (config) {
        validateConfig(config);
        this.config = config.map(standardizeConfig);
        this.navigated = false;
        this.lastSuccessfulId = -1;
    };
    /** @docsNotRequired */
    Router.prototype.ngOnDestroy = function () { this.dispose(); };
    /** Disposes of the router */
    Router.prototype.dispose = function () {
        if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = null;
        }
    };
    /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * ### Usage
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
    Router.prototype.createUrlTree = function (commands, navigationExtras) {
        if (navigationExtras === void 0) { navigationExtras = {}; }
        var relativeTo = navigationExtras.relativeTo, queryParams = navigationExtras.queryParams, fragment = navigationExtras.fragment, preserveQueryParams = navigationExtras.preserveQueryParams, queryParamsHandling = navigationExtras.queryParamsHandling, preserveFragment = navigationExtras.preserveFragment;
        if (core.isDevMode() && preserveQueryParams && console && console.warn) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
        }
        var a = relativeTo || this.routerState.root;
        var f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        var q = null;
        if (queryParamsHandling) {
            switch (queryParamsHandling) {
                case 'merge':
                    q = __assign({}, this.currentUrlTree.queryParams, queryParams);
                    break;
                case 'preserve':
                    q = this.currentUrlTree.queryParams;
                    break;
                default:
                    q = queryParams || null;
            }
        }
        else {
            q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams || null;
        }
        if (q !== null) {
            q = this.removeEmptyProps(q);
        }
        return createUrlTree(a, this.currentUrlTree, commands, q, f);
    };
    /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * ### Usage
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * In opposite to `navigate`, `navigateByUrl` takes a whole URL
     * and does not apply any delta to the current one.
     */
    Router.prototype.navigateByUrl = function (url, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        var urlTree = url instanceof UrlTree ? url : this.parseUrl(url);
        var mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
        return this.scheduleNavigation(mergedTree, 'imperative', null, extras);
    };
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * ### Usage
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * In opposite to `navigateByUrl`, `navigate` always takes a delta that is applied to the current
     * URL.
     */
    Router.prototype.navigate = function (commands, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        validateCommands(commands);
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    };
    /** Serializes a `UrlTree` into a string */
    Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
    /** Parses a string into a `UrlTree` */
    Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
    /** Returns whether the url is activated */
    Router.prototype.isActive = function (url, exact) {
        if (url instanceof UrlTree) {
            return containsTree(this.currentUrlTree, url, exact);
        }
        var urlTree = this.urlSerializer.parse(url);
        return containsTree(this.currentUrlTree, urlTree, exact);
    };
    Router.prototype.removeEmptyProps = function (params) {
        return Object.keys(params).reduce(function (result, key) {
            var value = params[key];
            if (value !== null && value !== undefined) {
                result[key] = value;
            }
            return result;
        }, {});
    };
    Router.prototype.processNavigations = function () {
        var _this = this;
        this.navigations
            .pipe(operators.concatMap(function (nav) {
            if (nav) {
                _this.executeScheduledNavigation(nav);
                // a failed navigation should not stop the router from processing
                // further navigations => the catch
                return nav.promise.catch(function () { });
            }
            else {
                return rxjs.of(null);
            }
        }))
            .subscribe(function () { });
    };
    Router.prototype.scheduleNavigation = function (rawUrl, source, state, extras) {
        var lastNavigation = this.navigations.value;
        // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
        // and that navigation results in 'replaceState' that leads to the same URL,
        // we should skip those.
        if (lastNavigation && source !== 'imperative' && lastNavigation.source === 'imperative' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        // Because of a bug in IE and Edge, the location class fires two events (popstate and
        // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
        // flicker. Handles the case when a popstate was emitted first.
        if (lastNavigation && source == 'hashchange' && lastNavigation.source === 'popstate' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        // Because of a bug in IE and Edge, the location class fires two events (popstate and
        // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
        // flicker. Handles the case when a hashchange was emitted first.
        if (lastNavigation && source == 'popstate' && lastNavigation.source === 'hashchange' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        var resolve = null;
        var reject = null;
        var promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        var id = ++this.navigationId;
        this.navigations.next({ id: id, source: source, state: state, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise });
        // Make sure that the error is propagated even though `processNavigations` catch
        // handler does not rethrow
        return promise.catch(function (e) { return Promise.reject(e); });
    };
    Router.prototype.executeScheduledNavigation = function (_a) {
        var _this = this;
        var id = _a.id, rawUrl = _a.rawUrl, extras = _a.extras, resolve = _a.resolve, reject = _a.reject, source = _a.source, state = _a.state;
        var url = this.urlHandlingStrategy.extract(rawUrl);
        var urlTransition = !this.navigated || url.toString() !== this.currentUrlTree.toString();
        if ((this.onSameUrlNavigation === 'reload' ? true : urlTransition) &&
            this.urlHandlingStrategy.shouldProcessUrl(rawUrl)) {
            this.events
                .next(new NavigationStart(id, this.serializeUrl(url), source, state));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, !!extras.skipLocationChange, !!extras.replaceUrl, id, null); })
                .then(resolve, reject);
            // we cannot process the current URL, but we could process the previous one =>
            // we need to do some cleanup
        }
        else if (urlTransition && this.rawUrlTree &&
            this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
            this.events
                .next(new NavigationStart(id, this.serializeUrl(url), source, state));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, false, false, id, createEmptyState(url, _this.rootComponentType).snapshot); })
                .then(resolve, reject);
        }
        else {
            this.rawUrlTree = rawUrl;
            resolve(null);
        }
    };
    Router.prototype.runNavigate = function (url, rawUrl, skipLocationChange, replaceUrl, id, precreatedState) {
        var _this = this;
        if (id !== this.navigationId) {
            this.events
                .next(new NavigationCancel(id, this.serializeUrl(url), "Navigation ID " + id + " is not equal to the current navigation id " + this.navigationId));
            return Promise.resolve(false);
        }
        return new Promise(function (resolvePromise, rejectPromise) {
            // create an observable of the url and route state snapshot
            // this operation do not result in any side effects
            var urlAndSnapshot$;
            if (!precreatedState) {
                var moduleInjector = _this.ngModule.injector;
                var redirectsApplied$ = applyRedirects(moduleInjector, _this.configLoader, _this.urlSerializer, url, _this.config);
                urlAndSnapshot$ = redirectsApplied$.pipe(operators.mergeMap(function (appliedUrl) {
                    return recognize(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl), _this.paramsInheritanceStrategy)
                        .pipe(operators.map(function (snapshot) {
                        _this.events
                            .next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot));
                        return { appliedUrl: appliedUrl, snapshot: snapshot };
                    }));
                }));
            }
            else {
                urlAndSnapshot$ = rxjs.of({ appliedUrl: url, snapshot: precreatedState });
            }
            var beforePreactivationDone$ = urlAndSnapshot$.pipe(operators.mergeMap(function (p) {
                if (typeof p === 'boolean')
                    return rxjs.of(p);
                return _this.hooks.beforePreactivation(p.snapshot).pipe(operators.map(function () { return p; }));
            }));
            // run preactivation: guards and data resolvers
            var preActivation;
            var preactivationSetup$ = beforePreactivationDone$.pipe(operators.map(function (p) {
                if (typeof p === 'boolean')
                    return p;
                var appliedUrl = p.appliedUrl, snapshot = p.snapshot;
                var moduleInjector = _this.ngModule.injector;
                preActivation = new PreActivation(snapshot, _this.routerState.snapshot, moduleInjector, function (evt) { return _this.triggerEvent(evt); });
                preActivation.initialize(_this.rootContexts);
                return { appliedUrl: appliedUrl, snapshot: snapshot };
            }));
            var preactivationCheckGuards$ = preactivationSetup$.pipe(operators.mergeMap(function (p) {
                if (typeof p === 'boolean' || _this.navigationId !== id)
                    return rxjs.of(false);
                var appliedUrl = p.appliedUrl, snapshot = p.snapshot;
                _this.triggerEvent(new GuardsCheckStart(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot));
                return preActivation.checkGuards().pipe(operators.map(function (shouldActivate) {
                    _this.triggerEvent(new GuardsCheckEnd(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot, shouldActivate));
                    return { appliedUrl: appliedUrl, snapshot: snapshot, shouldActivate: shouldActivate };
                }));
            }));
            var preactivationResolveData$ = preactivationCheckGuards$.pipe(operators.mergeMap(function (p) {
                if (typeof p === 'boolean' || _this.navigationId !== id)
                    return rxjs.of(false);
                if (p.shouldActivate && preActivation.isActivating()) {
                    _this.triggerEvent(new ResolveStart(id, _this.serializeUrl(url), _this.serializeUrl(p.appliedUrl), p.snapshot));
                    return preActivation.resolveData(_this.paramsInheritanceStrategy).pipe(operators.map(function () {
                        _this.triggerEvent(new ResolveEnd(id, _this.serializeUrl(url), _this.serializeUrl(p.appliedUrl), p.snapshot));
                        return p;
                    }));
                }
                else {
                    return rxjs.of(p);
                }
            }));
            var preactivationDone$ = preactivationResolveData$.pipe(operators.mergeMap(function (p) {
                if (typeof p === 'boolean' || _this.navigationId !== id)
                    return rxjs.of(false);
                return _this.hooks.afterPreactivation(p.snapshot).pipe(operators.map(function () { return p; }));
            }));
            // create router state
            // this operation has side effects => route state is being affected
            var routerState$ = preactivationDone$.pipe(operators.map(function (p) {
                if (typeof p === 'boolean' || _this.navigationId !== id)
                    return false;
                var appliedUrl = p.appliedUrl, snapshot = p.snapshot, shouldActivate = p.shouldActivate;
                if (shouldActivate) {
                    var state = createRouterState(_this.routeReuseStrategy, snapshot, _this.routerState);
                    return { appliedUrl: appliedUrl, state: state, shouldActivate: shouldActivate };
                }
                else {
                    return { appliedUrl: appliedUrl, state: null, shouldActivate: shouldActivate };
                }
            }));
            _this.activateRoutes(routerState$, _this.routerState, _this.currentUrlTree, id, url, rawUrl, skipLocationChange, replaceUrl, resolvePromise, rejectPromise);
        });
    };
    /**
     * Performs the logic of activating routes. This is a synchronous process by default. While this
     * is a private method, it could be overridden to make activation asynchronous.
     */
    Router.prototype.activateRoutes = function (state, storedState, storedUrl, id, url, rawUrl, skipLocationChange, replaceUrl, resolvePromise, rejectPromise) {
        var _this = this;
        // applied the new router state
        // this operation has side effects
        var navigationIsSuccessful;
        state
            .forEach(function (p) {
            if (typeof p === 'boolean' || !p.shouldActivate || id !== _this.navigationId || !p.state) {
                navigationIsSuccessful = false;
                return;
            }
            var appliedUrl = p.appliedUrl, state = p.state;
            _this.currentUrlTree = appliedUrl;
            _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
            _this.routerState = state;
            if (!skipLocationChange) {
                var path = _this.urlSerializer.serialize(_this.rawUrlTree);
                if (_this.location.isCurrentPathEqualTo(path) || replaceUrl) {
                    _this.location.replaceState(path, '', { navigationId: id });
                }
                else {
                    _this.location.go(path, '', { navigationId: id });
                }
            }
            new ActivateRoutes(_this.routeReuseStrategy, state, storedState, function (evt) { return _this.triggerEvent(evt); })
                .activate(_this.rootContexts);
            navigationIsSuccessful = true;
        })
            .then(function () {
            if (navigationIsSuccessful) {
                _this.navigated = true;
                _this.lastSuccessfulId = id;
                _this.events
                    .next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(_this.currentUrlTree)));
                resolvePromise(true);
            }
            else {
                _this.resetUrlToCurrentUrlTree();
                _this.events
                    .next(new NavigationCancel(id, _this.serializeUrl(url), ''));
                resolvePromise(false);
            }
        }, function (e) {
            if (isNavigationCancelingError(e)) {
                _this.navigated = true;
                _this.resetStateAndUrl(storedState, storedUrl, rawUrl);
                _this.events
                    .next(new NavigationCancel(id, _this.serializeUrl(url), e.message));
                resolvePromise(false);
            }
            else {
                _this.resetStateAndUrl(storedState, storedUrl, rawUrl);
                _this.events
                    .next(new NavigationError(id, _this.serializeUrl(url), e));
                try {
                    resolvePromise(_this.errorHandler(e));
                }
                catch (ee) {
                    rejectPromise(ee);
                }
            }
        });
    };
    Router.prototype.resetStateAndUrl = function (storedState, storedUrl, rawUrl) {
        this.routerState = storedState;
        this.currentUrlTree = storedUrl;
        this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, rawUrl);
        this.resetUrlToCurrentUrlTree();
    };
    Router.prototype.resetUrlToCurrentUrlTree = function () {
        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
    };
    return Router;
}());
var ActivateRoutes = /** @class */ (function () {
    function ActivateRoutes(routeReuseStrategy, futureState, currState, forwardEvent) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
        this.forwardEvent = forwardEvent;
    }
    ActivateRoutes.prototype.activate = function (parentContexts) {
        var futureRoot = this.futureState._root;
        var currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
        advanceActivatedRoute(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentContexts);
    };
    // De-activate the child route that are not re-used for the future state
    ActivateRoutes.prototype.deactivateChildRoutes = function (futureNode, currNode, contexts) {
        var _this = this;
        var children = nodeChildrenAsMap(currNode);
        // Recurse on the routes active in the future state to de-activate deeper children
        futureNode.children.forEach(function (futureChild) {
            var childOutletName = futureChild.value.outlet;
            _this.deactivateRoutes(futureChild, children[childOutletName], contexts);
            delete children[childOutletName];
        });
        // De-activate the routes that will not be re-used
        forEach(children, function (v, childName) {
            _this.deactivateRouteAndItsChildren(v, contexts);
        });
    };
    ActivateRoutes.prototype.deactivateRoutes = function (futureNode, currNode, parentContext) {
        var future = futureNode.value;
        var curr = currNode ? currNode.value : null;
        if (future === curr) {
            // Reusing the node, check to see if the children need to be de-activated
            if (future.component) {
                // If we have a normal route, we need to go through an outlet.
                var context = parentContext.getContext(future.outlet);
                if (context) {
                    this.deactivateChildRoutes(futureNode, currNode, context.children);
                }
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.deactivateChildRoutes(futureNode, currNode, parentContext);
            }
        }
        else {
            if (curr) {
                // Deactivate the current route which will not be re-used
                this.deactivateRouteAndItsChildren(currNode, parentContext);
            }
        }
    };
    ActivateRoutes.prototype.deactivateRouteAndItsChildren = function (route, parentContexts) {
        if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
            this.detachAndStoreRouteSubtree(route, parentContexts);
        }
        else {
            this.deactivateRouteAndOutlet(route, parentContexts);
        }
    };
    ActivateRoutes.prototype.detachAndStoreRouteSubtree = function (route, parentContexts) {
        var context = parentContexts.getContext(route.value.outlet);
        if (context && context.outlet) {
            var componentRef = context.outlet.detach();
            var contexts = context.children.onOutletDeactivated();
            this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route, contexts: contexts });
        }
    };
    ActivateRoutes.prototype.deactivateRouteAndOutlet = function (route, parentContexts) {
        var _this = this;
        var context = parentContexts.getContext(route.value.outlet);
        if (context) {
            var children = nodeChildrenAsMap(route);
            var contexts_1 = route.value.component ? context.children : parentContexts;
            forEach(children, function (v, k) { return _this.deactivateRouteAndItsChildren(v, contexts_1); });
            if (context.outlet) {
                // Destroy the component
                context.outlet.deactivate();
                // Destroy the contexts for all the outlets that were in the component
                context.children.onOutletDeactivated();
            }
        }
    };
    ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, contexts) {
        var _this = this;
        var children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.activateRoutes(c, children[c.value.outlet], contexts);
            _this.forwardEvent(new ActivationEnd(c.value.snapshot));
        });
        if (futureNode.children.length) {
            this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
        }
    };
    ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentContexts) {
        var future = futureNode.value;
        var curr = currNode ? currNode.value : null;
        advanceActivatedRoute(future);
        // reusing the node
        if (future === curr) {
            if (future.component) {
                // If we have a normal route, we need to go through an outlet.
                var context = parentContexts.getOrCreateContext(future.outlet);
                this.activateChildRoutes(futureNode, currNode, context.children);
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, currNode, parentContexts);
            }
        }
        else {
            if (future.component) {
                // if we have a normal route, we need to place the component into the outlet and recurse.
                var context = parentContexts.getOrCreateContext(future.outlet);
                if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                    var stored = this.routeReuseStrategy.retrieve(future.snapshot);
                    this.routeReuseStrategy.store(future.snapshot, null);
                    context.children.onOutletReAttached(stored.contexts);
                    context.attachRef = stored.componentRef;
                    context.route = stored.route.value;
                    if (context.outlet) {
                        // Attach right away when the outlet has already been instantiated
                        // Otherwise attach from `RouterOutlet.ngOnInit` when it is instantiated
                        context.outlet.attach(stored.componentRef, stored.route.value);
                    }
                    advanceActivatedRouteNodeAndItsChildren(stored.route);
                }
                else {
                    var config = parentLoadedConfig(future.snapshot);
                    var cmpFactoryResolver = config ? config.module.componentFactoryResolver : null;
                    context.route = future;
                    context.resolver = cmpFactoryResolver;
                    if (context.outlet) {
                        // Activate the outlet when it has already been instantiated
                        // Otherwise it will get activated from its `ngOnInit` when instantiated
                        context.outlet.activateWith(future, cmpFactoryResolver);
                    }
                    this.activateChildRoutes(futureNode, null, context.children);
                }
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, null, parentContexts);
            }
        }
    };
    return ActivateRoutes;
}());
function advanceActivatedRouteNodeAndItsChildren(node) {
    advanceActivatedRoute(node.value);
    node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
}
function parentLoadedConfig(snapshot) {
    for (var s = snapshot.parent; s; s = s.parent) {
        var route = s.routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
        if (route && route.component)
            return null;
    }
    return null;
}
function validateCommands(commands) {
    for (var i = 0; i < commands.length; i++) {
        var cmd = commands[i];
        if (cmd == null) {
            throw new Error("The requested path contains " + cmd + " segment at index " + i);
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`.
 * When linking to this `user/:name` route, you use the `RouterLink` directive.
 *
 * If the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive to how to handle queryParams, available options are:
 *  - `'merge'`: merge the queryParams into the current queryParams
 *  - `'preserve'`: preserve the current queryParams
 *  - default/`''`: use the queryParams only
 *
 * Same options for {@link NavigationExtras#queryParamsHandling
 * NavigationExtras#queryParamsHandling}.
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * See {@link Router#createUrlTree createUrlTree} for more information.
 *
 * @ngModule RouterModule
 *
 *
 */
var RouterLink = /** @class */ (function () {
    function RouterLink(router, route, tabIndex, renderer, el) {
        this.router = router;
        this.route = route;
        this.commands = [];
        if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterLink.prototype, "preserveQueryParams", {
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */
        set: function (value) {
            if (core.isDevMode() && console && console.warn) {
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.prototype.onClick = function () {
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(RouterLink.prototype, "urlTree", {
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.decorators = [
        { type: core.Directive, args: [{ selector: ':not(a)[routerLink]' },] }
    ];
    /** @nocollapse */
    RouterLink.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    RouterLink.propDecorators = {
        queryParams: [{ type: core.Input }],
        fragment: [{ type: core.Input }],
        queryParamsHandling: [{ type: core.Input }],
        preserveFragment: [{ type: core.Input }],
        skipLocationChange: [{ type: core.Input }],
        replaceUrl: [{ type: core.Input }],
        routerLink: [{ type: core.Input }],
        preserveQueryParams: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };
    return RouterLink;
}());
/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 *
 */
var RouterLinkWithHref = /** @class */ (function () {
    function RouterLinkWithHref(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterLinkWithHref.prototype, "preserveQueryParams", {
        set: function (value) {
            if (core.isDevMode() && console && console.warn) {
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey, shiftKey) {
        if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkWithHref.decorators = [
        { type: core.Directive, args: [{ selector: 'a[routerLink]' },] }
    ];
    /** @nocollapse */
    RouterLinkWithHref.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: common.LocationStrategy }
    ]; };
    RouterLinkWithHref.propDecorators = {
        target: [{ type: core.HostBinding, args: ['attr.target',] }, { type: core.Input }],
        queryParams: [{ type: core.Input }],
        fragment: [{ type: core.Input }],
        queryParamsHandling: [{ type: core.Input }],
        preserveFragment: [{ type: core.Input }],
        skipLocationChange: [{ type: core.Input }],
        replaceUrl: [{ type: core.Input }],
        href: [{ type: core.HostBinding }],
        routerLink: [{ type: core.Input }],
        preserveQueryParams: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'],] }]
    };
    return RouterLinkWithHref;
}());
function attrBoolValue(s) {
    return s === '' || !!s;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *
 * @description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * @ngModule RouterModule
 *
 *
 */
var RouterLinkActive = /** @class */ (function () {
    function RouterLinkActive(router, element, renderer, cdr) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.classes = [];
        this.isActive = false;
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.update();
            }
        });
    }
    RouterLinkActive.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.links.changes.subscribe(function (_) { return _this.update(); });
        this.linksWithHrefs.changes.subscribe(function (_) { return _this.update(); });
        this.update();
    };
    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
        set: function (data) {
            var classes = Array.isArray(data) ? data : data.split(' ');
            this.classes = classes.filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
    RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    RouterLinkActive.prototype.update = function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        Promise.resolve().then(function () {
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.isActive !== hasActiveLinks) {
                _this.isActive = hasActiveLinks;
                _this.classes.forEach(function (c) {
                    if (hasActiveLinks) {
                        _this.renderer.addClass(_this.element.nativeElement, c);
                    }
                    else {
                        _this.renderer.removeClass(_this.element.nativeElement, c);
                    }
                });
            }
        });
    };
    RouterLinkActive.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) {
            return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
        };
    };
    RouterLinkActive.prototype.hasActiveLinks = function () {
        return this.links.some(this.isLinkActive(this.router)) ||
            this.linksWithHrefs.some(this.isLinkActive(this.router));
    };
    RouterLinkActive.decorators = [
        { type: core.Directive, args: [{
                    selector: '[routerLinkActive]',
                    exportAs: 'routerLinkActive',
                },] }
    ];
    /** @nocollapse */
    RouterLinkActive.ctorParameters = function () { return [
        { type: Router },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    RouterLinkActive.propDecorators = {
        links: [{ type: core.ContentChildren, args: [RouterLink, { descendants: true },] }],
        linksWithHrefs: [{ type: core.ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }],
        routerLinkActiveOptions: [{ type: core.Input }],
        routerLinkActive: [{ type: core.Input }]
    };
    return RouterLinkActive;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Store contextual information about a `RouterOutlet`
 *
 *
 */
var OutletContext = /** @class */ (function () {
    function OutletContext() {
        this.outlet = null;
        this.route = null;
        this.resolver = null;
        this.children = new ChildrenOutletContexts();
        this.attachRef = null;
    }
    return OutletContext;
}());
/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 *
 */
var ChildrenOutletContexts = /** @class */ (function () {
    function ChildrenOutletContexts() {
        // contexts for child outlets, by name.
        this.contexts = new Map();
    }
    /** Called when a `RouterOutlet` directive is instantiated */
    ChildrenOutletContexts.prototype.onChildOutletCreated = function (childName, outlet) {
        var context = this.getOrCreateContext(childName);
        context.outlet = outlet;
        this.contexts.set(childName, context);
    };
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    ChildrenOutletContexts.prototype.onChildOutletDestroyed = function (childName) {
        var context = this.getContext(childName);
        if (context) {
            context.outlet = null;
        }
    };
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    ChildrenOutletContexts.prototype.onOutletDeactivated = function () {
        var contexts = this.contexts;
        this.contexts = new Map();
        return contexts;
    };
    ChildrenOutletContexts.prototype.onOutletReAttached = function (contexts) { this.contexts = contexts; };
    ChildrenOutletContexts.prototype.getOrCreateContext = function (childName) {
        var context = this.getContext(childName);
        if (!context) {
            context = new OutletContext();
            this.contexts.set(childName, context);
        }
        return context;
    };
    ChildrenOutletContexts.prototype.getContext = function (childName) { return this.contexts.get(childName) || null; };
    return ChildrenOutletContexts;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet will emit an activate event any time a new component is being instantiated,
 * and a deactivate event when it is being destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * @ngModule RouterModule
 *
 *
 */
var RouterOutlet = /** @class */ (function () {
    function RouterOutlet(parentContexts, location, resolver, name, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.activated = null;
        this._activatedRoute = null;
        this.activateEvents = new core.EventEmitter();
        this.deactivateEvents = new core.EventEmitter();
        this.name = name || PRIMARY_OUTLET;
        parentContexts.onChildOutletCreated(this.name, this);
    }
    RouterOutlet.prototype.ngOnDestroy = function () { this.parentContexts.onChildOutletDestroyed(this.name); };
    RouterOutlet.prototype.ngOnInit = function () {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            var context = this.parentContexts.getContext(this.name);
            if (context && context.route) {
                if (context.attachRef) {
                    // `attachRef` is populated when there is an existing component to mount
                    this.attach(context.attachRef, context.route);
                }
                else {
                    // otherwise the component defined in the configuration is created
                    this.activateWith(context.route, context.resolver || null);
                }
            }
        }
    };
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        get: function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "component", {
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this._activatedRoute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRouteData", {
        get: function () {
            if (this._activatedRoute) {
                return this._activatedRoute.snapshot.data;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    RouterOutlet.prototype.detach = function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        var cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return cmp;
    };
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    RouterOutlet.prototype.attach = function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
    };
    RouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            var c = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    RouterOutlet.prototype.activateWith = function (activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        var snapshot = activatedRoute._futureSnapshot;
        var component = snapshot.routeConfig.component;
        resolver = resolver || this.resolver;
        var factory = resolver.resolveComponentFactory(component);
        var childContexts = this.parentContexts.getOrCreateContext(this.name).children;
        var injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
        this.activated = this.location.createComponent(factory, this.location.length, injector);
        // Calling `markForCheck` to make sure we will run the change detection when the
        // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
        this.changeDetector.markForCheck();
        this.activateEvents.emit(this.activated.instance);
    };
    RouterOutlet.decorators = [
        { type: core.Directive, args: [{ selector: 'router-outlet', exportAs: 'outlet' },] }
    ];
    /** @nocollapse */
    RouterOutlet.ctorParameters = function () { return [
        { type: ChildrenOutletContexts },
        { type: core.ViewContainerRef },
        { type: core.ComponentFactoryResolver },
        { type: String, decorators: [{ type: core.Attribute, args: ['name',] }] },
        { type: core.ChangeDetectorRef }
    ]; };
    RouterOutlet.propDecorators = {
        activateEvents: [{ type: core.Output, args: ['activate',] }],
        deactivateEvents: [{ type: core.Output, args: ['deactivate',] }]
    };
    return RouterOutlet;
}());
var OutletInjector = /** @class */ (function () {
    function OutletInjector(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    OutletInjector.prototype.get = function (token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
    };
    return OutletInjector;
}());

/**
*@license
*Copyright Google Inc. All Rights Reserved.
*
*Use of this source code is governed by an MIT-style license that can be
*found in the LICENSE file at https://angular.io/license
*/
/**
 * @description
 *
 * Provides a preloading strategy.
 *
 * @experimental
 */
var PreloadingStrategy = /** @class */ (function () {
    function PreloadingStrategy() {
    }
    return PreloadingStrategy;
}());
/**
 * @description
 *
 * Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * @experimental
 */
var PreloadAllModules = /** @class */ (function () {
    function PreloadAllModules() {
    }
    PreloadAllModules.prototype.preload = function (route, fn) {
        return fn().pipe(operators.catchError(function () { return rxjs.of(null); }));
    };
    return PreloadAllModules;
}());
/**
 * @description
 *
 * Provides a preloading strategy that does not preload any modules.
 *
 * This strategy is enabled by default.
 *
 * @experimental
 */
var NoPreloading = /** @class */ (function () {
    function NoPreloading() {
    }
    NoPreloading.prototype.preload = function (route, fn) { return rxjs.of(null); };
    return NoPreloading;
}());
/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 *
 */
var RouterPreloader = /** @class */ (function () {
    function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
        this.router = router;
        this.injector = injector;
        this.preloadingStrategy = preloadingStrategy;
        var onStartLoad = function (r) { return router.triggerEvent(new RouteConfigLoadStart(r)); };
        var onEndLoad = function (r) { return router.triggerEvent(new RouteConfigLoadEnd(r)); };
        this.loader = new RouterConfigLoader(moduleLoader, compiler, onStartLoad, onEndLoad);
    }
    RouterPreloader.prototype.setUpPreloading = function () {
        var _this = this;
        this.subscription =
            this.router.events
                .pipe(operators.filter(function (e) { return e instanceof NavigationEnd; }), operators.concatMap(function () { return _this.preload(); }))
                .subscribe(function () { });
    };
    RouterPreloader.prototype.preload = function () {
        var ngModule = this.injector.get(core.NgModuleRef);
        return this.processRoutes(ngModule, this.router.config);
    };
    // TODO(jasonaden): This class relies on code external to the class to call setUpPreloading. If
    // this hasn't been done, ngOnDestroy will fail as this.subscription will be undefined. This
    // should be refactored.
    RouterPreloader.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    RouterPreloader.prototype.processRoutes = function (ngModule, routes) {
        var res = [];
        try {
            for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                var route = routes_1_1.value;
                // we already have the config loaded, just recurse
                if (route.loadChildren && !route.canLoad && route._loadedConfig) {
                    var childConfig = route._loadedConfig;
                    res.push(this.processRoutes(childConfig.module, childConfig.routes));
                    // no config loaded, fetch the config
                }
                else if (route.loadChildren && !route.canLoad) {
                    res.push(this.preloadConfig(ngModule, route));
                    // recurse into children
                }
                else if (route.children) {
                    res.push(this.processRoutes(ngModule, route.children));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rxjs.from(res).pipe(operators.mergeAll(), operators.map(function (_) { return void 0; }));
        var e_1, _a;
    };
    RouterPreloader.prototype.preloadConfig = function (ngModule, route) {
        var _this = this;
        return this.preloadingStrategy.preload(route, function () {
            var loaded$ = _this.loader.load(ngModule.injector, route);
            return loaded$.pipe(operators.mergeMap(function (config) {
                route._loadedConfig = config;
                return _this.processRoutes(config.module, config.routes);
            }));
        });
    };
    RouterPreloader.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    RouterPreloader.ctorParameters = function () { return [
        { type: Router },
        { type: core.NgModuleFactoryLoader },
        { type: core.Compiler },
        { type: core.Injector },
        { type: PreloadingStrategy }
    ]; };
    return RouterPreloader;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Contains a list of directives
 *
 *
 */
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive, EmptyOutletComponent];
/**
 * @description
 *
 * Is used in DI to configure the router.
 *
 *
 */
var ROUTER_CONFIGURATION = new core.InjectionToken('ROUTER_CONFIGURATION');
/**
 * @docsNotRequired
 */
var ROUTER_FORROOT_GUARD = new core.InjectionToken('ROUTER_FORROOT_GUARD');
var ROUTER_PROVIDERS = [
    common.Location,
    { provide: UrlSerializer, useClass: DefaultUrlSerializer },
    {
        provide: Router,
        useFactory: setupRouter,
        deps: [
            core.ApplicationRef, UrlSerializer, ChildrenOutletContexts, common.Location, core.Injector,
            core.NgModuleFactoryLoader, core.Compiler, ROUTES, ROUTER_CONFIGURATION,
            [UrlHandlingStrategy, new core.Optional()], [RouteReuseStrategy, new core.Optional()]
        ]
    },
    ChildrenOutletContexts,
    { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
    { provide: core.NgModuleFactoryLoader, useClass: core.SystemJsNgModuleLoader },
    RouterPreloader,
    NoPreloading,
    PreloadAllModules,
    { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } },
];
function routerNgProbeToken() {
    return new core.NgProbeToken('Router', Router);
}
/**
 * @usageNotes
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @description
 *
 * Adds router directives and providers.
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
 * overview of how the router should be used.
 *
 *
 */
var RouterModule = /** @class */ (function () {
    // Note: We are injecting the Router so it gets created eagerly...
    function RouterModule(guard, router) {
    }
    /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options (see `ExtraOptions`):
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * * `preloadingStrategy` configures a preloading strategy (see `PreloadAllModules`).
     * * `onSameUrlNavigation` configures how the router handles navigation to the current URL. See
     * `ExtraOptions` for more details.
     */
    RouterModule.forRoot = function (routes, config) {
        return {
            ngModule: RouterModule,
            providers: [
                ROUTER_PROVIDERS,
                provideRoutes(routes),
                {
                    provide: ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[Router, new core.Optional(), new core.SkipSelf()]]
                },
                { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
                {
                    provide: common.LocationStrategy,
                    useFactory: provideLocationStrategy,
                    deps: [
                        common.PlatformLocation, [new core.Inject(common.APP_BASE_HREF), new core.Optional()], ROUTER_CONFIGURATION
                    ]
                },
                {
                    provide: PreloadingStrategy,
                    useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
                        NoPreloading
                },
                { provide: core.NgProbeToken, multi: true, useFactory: routerNgProbeToken },
                provideRouterInitializer(),
            ],
        };
    };
    /**
     * Creates a module with all the router directives and a provider registering routes.
     */
    RouterModule.forChild = function (routes) {
        return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
    };
    RouterModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: ROUTER_DIRECTIVES,
                    exports: ROUTER_DIRECTIVES,
                    entryComponents: [EmptyOutletComponent]
                },] }
    ];
    /** @nocollapse */
    RouterModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [ROUTER_FORROOT_GUARD,] }] },
        { type: Router, decorators: [{ type: core.Optional }] }
    ]; };
    return RouterModule;
}());
function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
    if (options === void 0) { options = {}; }
    return options.useHash ? new common.HashLocationStrategy(platformLocationStrategy, baseHref) :
        new common.PathLocationStrategy(platformLocationStrategy, baseHref);
}
function provideForRootGuard(router) {
    if (router) {
        throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    }
    return 'guarded';
}
/**
 * @description
 *
 * Registers routes.
 *
 * ### Example
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 *
 */
function provideRoutes(routes) {
    return [
        { provide: core.ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes },
        { provide: ROUTES, multi: true, useValue: routes },
    ];
}
function setupRouter(ref, urlSerializer, contexts, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
    if (opts === void 0) { opts = {}; }
    var router = new Router(null, urlSerializer, contexts, location, injector, loader, compiler, flatten(config));
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    if (routeReuseStrategy) {
        router.routeReuseStrategy = routeReuseStrategy;
    }
    if (opts.errorHandler) {
        router.errorHandler = opts.errorHandler;
    }
    if (opts.enableTracing) {
        var dom_1 = platformBrowser.ɵgetDOM();
        router.events.subscribe(function (e) {
            dom_1.logGroup("Router Event: " + e.constructor.name);
            dom_1.log(e.toString());
            dom_1.log(e);
            dom_1.logGroupEnd();
        });
    }
    if (opts.onSameUrlNavigation) {
        router.onSameUrlNavigation = opts.onSameUrlNavigation;
    }
    if (opts.paramsInheritanceStrategy) {
        router.paramsInheritanceStrategy = opts.paramsInheritanceStrategy;
    }
    return router;
}
function rootRoute(router) {
    return router.routerState.root;
}
/**
 * To initialize the router properly we need to do in two steps:
 *
 * We need to start the navigation in a APP_INITIALIZER to block the bootstrap if
 * a resolver or a guards executes asynchronously. Second, we need to actually run
 * activation in a BOOTSTRAP_LISTENER. We utilize the afterPreactivation
 * hook provided by the router to do that.
 *
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */
var RouterInitializer = /** @class */ (function () {
    function RouterInitializer(injector) {
        this.injector = injector;
        this.initNavigation = false;
        this.resultOfPreactivationDone = new rxjs.Subject();
    }
    RouterInitializer.prototype.appInitializer = function () {
        var _this = this;
        var p = this.injector.get(common.LOCATION_INITIALIZED, Promise.resolve(null));
        return p.then(function () {
            var resolve = null;
            var res = new Promise(function (r) { return resolve = r; });
            var router = _this.injector.get(Router);
            var opts = _this.injector.get(ROUTER_CONFIGURATION);
            if (_this.isLegacyDisabled(opts) || _this.isLegacyEnabled(opts)) {
                resolve(true);
            }
            else if (opts.initialNavigation === 'disabled') {
                router.setUpLocationChangeListener();
                resolve(true);
            }
            else if (opts.initialNavigation === 'enabled') {
                router.hooks.afterPreactivation = function () {
                    // only the initial navigation should be delayed
                    if (!_this.initNavigation) {
                        _this.initNavigation = true;
                        resolve(true);
                        return _this.resultOfPreactivationDone;
                        // subsequent navigations should not be delayed
                    }
                    else {
                        return rxjs.of(null);
                    }
                };
                router.initialNavigation();
            }
            else {
                throw new Error("Invalid initialNavigation options: '" + opts.initialNavigation + "'");
            }
            return res;
        });
    };
    RouterInitializer.prototype.bootstrapListener = function (bootstrappedComponentRef) {
        var opts = this.injector.get(ROUTER_CONFIGURATION);
        var preloader = this.injector.get(RouterPreloader);
        var router = this.injector.get(Router);
        var ref = this.injector.get(core.ApplicationRef);
        if (bootstrappedComponentRef !== ref.components[0]) {
            return;
        }
        if (this.isLegacyEnabled(opts)) {
            router.initialNavigation();
        }
        else if (this.isLegacyDisabled(opts)) {
            router.setUpLocationChangeListener();
        }
        preloader.setUpPreloading();
        router.resetRootComponentType(ref.componentTypes[0]);
        this.resultOfPreactivationDone.next(null);
        this.resultOfPreactivationDone.complete();
    };
    RouterInitializer.prototype.isLegacyEnabled = function (opts) {
        return opts.initialNavigation === 'legacy_enabled' || opts.initialNavigation === true ||
            opts.initialNavigation === undefined;
    };
    RouterInitializer.prototype.isLegacyDisabled = function (opts) {
        return opts.initialNavigation === 'legacy_disabled' || opts.initialNavigation === false;
    };
    RouterInitializer.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    RouterInitializer.ctorParameters = function () { return [
        { type: core.Injector }
    ]; };
    return RouterInitializer;
}());
function getAppInitializer(r) {
    return r.appInitializer.bind(r);
}
function getBootstrapListener(r) {
    return r.bootstrapListener.bind(r);
}
/**
 * A token for the router initializer that will be called after the app is bootstrapped.
 *
 * @experimental
 */
var ROUTER_INITIALIZER = new core.InjectionToken('Router Initializer');
function provideRouterInitializer() {
    return [
        RouterInitializer,
        {
            provide: core.APP_INITIALIZER,
            multi: true,
            useFactory: getAppInitializer,
            deps: [RouterInitializer]
        },
        { provide: ROUTER_INITIALIZER, useFactory: getBootstrapListener, deps: [RouterInitializer] },
        { provide: core.APP_BOOTSTRAP_LISTENER, multi: true, useExisting: ROUTER_INITIALIZER },
    ];
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
var VERSION = new core.Version('6.0.7');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.

/**
 * Generated bundle index. Do not edit.
 */

exports.ɵangular_packages_router_router_a = ROUTER_FORROOT_GUARD;
exports.ɵangular_packages_router_router_g = RouterInitializer;
exports.ɵangular_packages_router_router_h = getAppInitializer;
exports.ɵangular_packages_router_router_i = getBootstrapListener;
exports.ɵangular_packages_router_router_d = provideForRootGuard;
exports.ɵangular_packages_router_router_c = provideLocationStrategy;
exports.ɵangular_packages_router_router_j = provideRouterInitializer;
exports.ɵangular_packages_router_router_f = rootRoute;
exports.ɵangular_packages_router_router_b = routerNgProbeToken;
exports.ɵangular_packages_router_router_e = setupRouter;
exports.ɵangular_packages_router_router_k = Tree;
exports.ɵangular_packages_router_router_l = TreeNode;
exports.RouterLink = RouterLink;
exports.RouterLinkWithHref = RouterLinkWithHref;
exports.RouterLinkActive = RouterLinkActive;
exports.RouterOutlet = RouterOutlet;
exports.ActivationEnd = ActivationEnd;
exports.ActivationStart = ActivationStart;
exports.ChildActivationEnd = ChildActivationEnd;
exports.ChildActivationStart = ChildActivationStart;
exports.GuardsCheckEnd = GuardsCheckEnd;
exports.GuardsCheckStart = GuardsCheckStart;
exports.NavigationCancel = NavigationCancel;
exports.NavigationEnd = NavigationEnd;
exports.NavigationError = NavigationError;
exports.NavigationStart = NavigationStart;
exports.ResolveEnd = ResolveEnd;
exports.ResolveStart = ResolveStart;
exports.RouteConfigLoadEnd = RouteConfigLoadEnd;
exports.RouteConfigLoadStart = RouteConfigLoadStart;
exports.RouterEvent = RouterEvent;
exports.RoutesRecognized = RoutesRecognized;
exports.RouteReuseStrategy = RouteReuseStrategy;
exports.Router = Router;
exports.ROUTES = ROUTES;
exports.ROUTER_CONFIGURATION = ROUTER_CONFIGURATION;
exports.ROUTER_INITIALIZER = ROUTER_INITIALIZER;
exports.RouterModule = RouterModule;
exports.provideRoutes = provideRoutes;
exports.ChildrenOutletContexts = ChildrenOutletContexts;
exports.OutletContext = OutletContext;
exports.NoPreloading = NoPreloading;
exports.PreloadAllModules = PreloadAllModules;
exports.PreloadingStrategy = PreloadingStrategy;
exports.RouterPreloader = RouterPreloader;
exports.ActivatedRoute = ActivatedRoute;
exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
exports.RouterState = RouterState;
exports.RouterStateSnapshot = RouterStateSnapshot;
exports.PRIMARY_OUTLET = PRIMARY_OUTLET;
exports.convertToParamMap = convertToParamMap;
exports.UrlHandlingStrategy = UrlHandlingStrategy;
exports.DefaultUrlSerializer = DefaultUrlSerializer;
exports.UrlSegment = UrlSegment;
exports.UrlSegmentGroup = UrlSegmentGroup;
exports.UrlSerializer = UrlSerializer;
exports.UrlTree = UrlTree;
exports.VERSION = VERSION;
exports.ɵEmptyOutletComponent = EmptyOutletComponent;
exports.ɵROUTER_PROVIDERS = ROUTER_PROVIDERS;
exports.ɵflatten = flatten;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=router.umd.js.map


/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./modules/navigation/navigation.component.ngfactory */ "./src/app/modules/navigation/navigation.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./modules/navigation/navigation.component */ "./src/app/modules/navigation/navigation.component.ts");
var i4 = __webpack_require__(/*! ./modules/navigation/services/send-mail.service */ "./src/app/modules/navigation/services/send-mail.service.ts");
var i5 = __webpack_require__(/*! ./modules/home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i6 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i7 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ./modules/footer/footer.component.ngfactory */ "./src/app/modules/footer/footer.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./modules/footer/footer.component */ "./src/app/modules/footer/footer.component.ts");
var i11 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i12 = __webpack_require__(/*! ./modules/footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var i13 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-navigation", [], null, null, null, i2.View_NavigationComponent_0, i2.RenderType_NavigationComponent)), i1.ɵdid(1, 4308992, null, 0, i3.NavigationComponent, [i4.SendMailService, i5.ChapterService, i6.FormBuilder, i7.Http], null, null), (_l()(), i1.ɵeld(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(3, 212992, null, 0, i8.RouterOutlet, [i8.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-footer", [], null, null, null, i9.View_FooterComponent_0, i9.RenderType_FooterComponent)), i1.ɵdid(5, 114688, null, 0, i10.FooterComponent, [i11.WINDOW, i5.ChapterService, i12.NewLetterService, i4.SendMailService, i6.FormBuilder, i7.Http], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["id", "to-Top"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "i", [["class", "fas fa-angle-double-right"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i13.AppComponent, [i11.WINDOW], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i13.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = /** @class */ (function () {
    function AppComponent(window) {
        //button scroll top
        this.window = window;
        setTimeout(function () {
            $(window).scroll(function () {
                $('#to-Top').css('display', 'flex');
                if ($(this).scrollTop()) {
                    $('#to-Top').fadeIn();
                }
                else {
                    $('#to-Top').fadeOut();
                }
            });
            $("#to-Top").click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1000);
            });
        }, 1000);
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var page_error_component_1 = __webpack_require__(/*! ./modules/page-error/page-error.component */ "./src/app/modules/page-error/page-error.component.ts");
//import { MakeTextCssPipe } from './common/pipes/make-text-css.pipe';
//import { ShareModuleModule } from './common/pipes/share-module.module';
// import { ChapterHeartModule } from './modules/chapter/chapter-heart/chapter-heart.module';
// import { StoriesModule } from './modules/stories/stories.module';
var routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule',
        pathMatch: 'full'
    },
    {
        path: 'get-to-know-victoria',
        loadChildren: './modules/get-to-know-vic/get-to-know-vic.module#GetToKnowVicModule',
    },
    {
        path: 'contact-us',
        loadChildren: './modules/contact/contact.module#ContactModule',
    },
    {
        path: 'entrepreneurs-stories',
        loadChildren: './modules/stories/stories.module#StoriesModule',
    },
    {
        path: 'page-not-found',
        component: page_error_component_1.PageErrorComponent
    },
    {
        path: ':name',
        loadChildren: './modules/chapter/chapter-heart/chapter-heart.module#ChapterHeartModule',
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./modules/page-error/page-error.component.ngfactory */ "./src/app/modules/page-error/page-error.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i9 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i10 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i11 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i12 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i13 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i14 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i15 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i16 = __webpack_require__(/*! ./modules/home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i17 = __webpack_require__(/*! ./modules/home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i18 = __webpack_require__(/*! ./modules/stories/services/stories.service */ "./src/app/modules/stories/services/stories.service.ts");
var i19 = __webpack_require__(/*! ./modules/contact/services/contact.service */ "./src/app/modules/contact/services/contact.service.ts");
var i20 = __webpack_require__(/*! ./modules/navigation/services/send-mail.service */ "./src/app/modules/navigation/services/send-mail.service.ts");
var i21 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i22 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i23 = __webpack_require__(/*! ./modules/page-error/page-error.component */ "./src/app/modules/page-error/page-error.component.ts");
var i24 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.PageErrorComponentNgFactory, i5.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID, [2, i6.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵangular_packages_platform_browser_platform_browser_e, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]), i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []), i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p3_0) { return [new i7.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2), new i8.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i6.DOCUMENT, i0.NgZone, [2, i0.PLATFORM_ID], i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG, i0.ɵConsole, i7.DOCUMENT]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager, i7.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i8.ɵangular_packages_platform_server_platform_server_c, i8.ɵangular_packages_platform_server_platform_server_c, [i7.DOCUMENT, [2, i7.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i8.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i8.ɵServerRendererFactory2, i8.ɵServerRendererFactory2, [i7.EventManager, i0.NgZone, i7.DOCUMENT, i7.ɵSharedStylesHost]), i0.ɵmpd(4608, i9.AnimationDriver, i9.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i9.ɵAnimationStyleNormalizer, i10.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i9.ɵAnimationEngine, i10.ɵangular_packages_platform_browser_animations_animations_a, [i6.DOCUMENT, i9.AnimationDriver, i9.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i8.ɵangular_packages_platform_server_platform_server_a, [i8.ɵServerRendererFactory2, i9.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i7.Meta, i7.Meta, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.Title, i7.Title, [i6.DOCUMENT]), i0.ɵmpd(4608, i11.ɵa, i11.ɵa, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i11.WINDOW, i11.windowFactory, [i11.ɵa]), i0.ɵmpd(4608, i11.DocumentService, i11.DocumentService, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i11.NGT_DOCUMENT, i11.documentFactory, [i11.DocumentService]), i0.ɵmpd(4608, i11.ɵb, i11.ɵb, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i11.LOCAL_STORAGE, i11.localStorageFactory, [i11.ɵb]), i0.ɵmpd(4608, i12.FormBuilder, i12.FormBuilder, []), i0.ɵmpd(4608, i12.ɵangular_packages_forms_forms_i, i12.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i13.HttpXsrfTokenExtractor, i13.ɵangular_packages_common_http_http_g, [i6.DOCUMENT, i0.PLATFORM_ID, i13.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i13.ɵangular_packages_common_http_http_h, i13.ɵangular_packages_common_http_http_h, [i13.HttpXsrfTokenExtractor, i13.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i13.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i13.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i13.XhrFactory, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i13.HttpXhrBackend, i13.HttpXhrBackend, [i13.XhrFactory]), i0.ɵmpd(6144, i13.HttpBackend, null, [i13.HttpXhrBackend]), i0.ɵmpd(5120, i13.HttpHandler, i8.ɵangular_packages_platform_server_platform_server_h, [i13.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i13.HttpClient, i13.HttpClient, [i13.HttpHandler]), i0.ɵmpd(4608, i13.ɵangular_packages_common_http_http_d, i13.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i14.BrowserXhr, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i14.ResponseOptions, i14.BaseResponseOptions, []), i0.ɵmpd(4608, i14.XSRFStrategy, i8.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i14.XHRBackend, i14.XHRBackend, [i14.BrowserXhr, i14.ResponseOptions, i14.XSRFStrategy]), i0.ɵmpd(4608, i14.RequestOptions, i14.BaseRequestOptions, []), i0.ɵmpd(5120, i14.Http, i8.ɵangular_packages_platform_server_platform_server_g, [i14.XHRBackend, i14.RequestOptions]), i0.ɵmpd(5120, i15.ActivatedRoute, i15.ɵangular_packages_router_router_f, [i15.Router]), i0.ɵmpd(4608, i15.NoPreloading, i15.NoPreloading, []), i0.ɵmpd(6144, i15.PreloadingStrategy, null, [i15.NoPreloading]), i0.ɵmpd(135680, i15.RouterPreloader, i15.RouterPreloader, [i15.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i15.PreloadingStrategy]), i0.ɵmpd(4608, i15.PreloadAllModules, i15.PreloadAllModules, []), i0.ɵmpd(5120, i15.ROUTER_INITIALIZER, i15.ɵangular_packages_router_router_i, [i15.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i15.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i10.BrowserAnimationsModule, i10.BrowserAnimationsModule, []), i0.ɵmpd(4608, i16.ChapterService, i16.ChapterService, [i13.HttpClient, i15.Router]), i0.ɵmpd(4608, i17.ArticleService, i17.ArticleService, [i13.HttpClient, i15.Router]), i0.ɵmpd(4608, i18.StoriesService, i18.StoriesService, [i13.HttpClient]), i0.ɵmpd(4608, i19.ContactService, i19.ContactService, [i13.HttpClient]), i0.ɵmpd(4608, i20.SendMailService, i20.SendMailService, [i13.HttpClient]), i0.ɵmpd(4608, i21.AnimationBuilder, i10.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i7.DOCUMENT]), i0.ɵmpd(4608, i6.ViewportScroller, i6.ɵNullViewportScroller, []), i0.ɵmpd(4608, i7.TransferState, i7.TransferState, []), i0.ɵmpd(5120, i8.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i8.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i7.DOCUMENT, i0.APP_ID, i7.TransferState]), i0.ɵmpd(1073742336, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i15.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i15.ɵangular_packages_router_router_g, i15.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "app-root", []), i0.ɵmpd(2048, i7.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i7.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i15.ɵangular_packages_router_router_h(p1_0), i7.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i15.ɵangular_packages_router_router_g, i7.ɵTRANSITION_ID, i6.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(1073742336, i11.NgtUniversalModule, i11.NgtUniversalModule, []), i0.ɵmpd(1024, i15.ɵangular_packages_router_router_a, i15.ɵangular_packages_router_router_d, [[3, i15.Router]]), i0.ɵmpd(512, i15.UrlSerializer, i15.DefaultUrlSerializer, []), i0.ɵmpd(512, i15.ChildrenOutletContexts, i15.ChildrenOutletContexts, []), i0.ɵmpd(256, i15.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i6.LocationStrategy, i15.ɵangular_packages_router_router_c, [i6.PlatformLocation, [2, i6.APP_BASE_HREF], i15.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i22.ModuleMapNgFactoryLoader, [i0.Compiler, i22.MODULE_MAP]), i0.ɵmpd(1024, i15.ROUTES, function () { return [[{ path: "", loadChildren: "./modules/home/home.module#HomeModule", pathMatch: "full" }, { path: "get-to-know-victoria", loadChildren: "./modules/get-to-know-vic/get-to-know-vic.module#GetToKnowVicModule" }, { path: "contact-us", loadChildren: "./modules/contact/contact.module#ContactModule" }, { path: "entrepreneurs-stories", loadChildren: "./modules/stories/stories.module#StoriesModule" }, { path: "page-not-found", component: i23.PageErrorComponent }, { path: ":name", loadChildren: "./modules/chapter/chapter-heart/chapter-heart.module#ChapterHeartModule" }]]; }, []), i0.ɵmpd(1024, i15.Router, i15.ɵangular_packages_router_router_e, [i0.ApplicationRef, i15.UrlSerializer, i15.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i15.ROUTES, i15.ROUTER_CONFIGURATION, [2, i15.UrlHandlingStrategy], [2, i15.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i15.RouterModule, i15.RouterModule, [[2, i15.ɵangular_packages_router_router_a], [2, i15.Router]]), i0.ɵmpd(1073742336, i12.ɵangular_packages_forms_forms_bb, i12.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i12.ReactiveFormsModule, i12.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i12.FormsModule, i12.FormsModule, []), i0.ɵmpd(1073742336, i13.HttpClientXsrfModule, i13.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i13.HttpClientModule, i13.HttpClientModule, []), i0.ɵmpd(1073742336, i14.HttpModule, i14.HttpModule, []), i0.ɵmpd(1073742336, i24.AppModule, i24.AppModule, []), i0.ɵmpd(1073742336, i10.NoopAnimationsModule, i10.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i8.ServerModule, i8.ServerModule, []), i0.ɵmpd(1073742336, i22.ModuleMapLoaderModule, i22.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i8.ServerTransferStateModule, i8.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i13.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i13.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i10.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/common/pipes/make-text-css.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/common/pipes/make-text-css.pipe.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var MakeTextCssPipe = /** @class */ (function () {
    function MakeTextCssPipe(sanitized) {
        this.sanitized = sanitized;
    }
    MakeTextCssPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return MakeTextCssPipe;
}());
exports.MakeTextCssPipe = MakeTextCssPipe;


/***/ }),

/***/ "./src/app/common/pipes/share-module.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/pipes/share-module.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShareModuleModule = /** @class */ (function () {
    function ShareModuleModule() {
    }
    return ShareModuleModule;
}());
exports.ShareModuleModule = ShareModuleModule;


/***/ }),

/***/ "./src/app/common/pipes/sharecomponent/explore-chapter.component.css.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/pipes/sharecomponent/explore-chapter.component.css.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/common/pipes/sharecomponent/explore-chapter.component.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./explore-chapter.component.css.shim.ngstyle */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./explore-chapter.component */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ts");
var i5 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i6 = __webpack_require__(/*! ../../../modules/home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var styles_ExploreChapterComponent = [i0.styles];
var RenderType_ExploreChapterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ExploreChapterComponent, data: {} });
exports.RenderType_ExploreChapterComponent = RenderType_ExploreChapterComponent;
function View_ExploreChapterComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.scrollArticle() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 6, "div", [["class", "menu-footer-item-1"]], null, null, null, null, null)), i1.ɵdid(4, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "border-top-color": 0 }), (_l()(), i1.ɵeld(6, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(8, { "color": 0 }), (_l()(), i1.ɵted(9, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "/", _v.context.$implicit.slug); _ck(_v, 1, 0, currVal_2); var currVal_3 = _ck(_v, 5, 0, _v.context.$implicit.color); _ck(_v, 4, 0, currVal_3); var currVal_4 = _ck(_v, 8, 0, _v.context.$implicit.color); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _v.context.$implicit.chapter_name; _ck(_v, 9, 0, currVal_5); }); }
function View_ExploreChapterComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "container-menu-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE ALL CHAPTERS"])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "menu-footer"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ExploreChapterComponent_1)), i1.ɵdid(5, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.chapter; _ck(_v, 5, 0, currVal_0); }, null); }
exports.View_ExploreChapterComponent_0 = View_ExploreChapterComponent_0;
function View_ExploreChapterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-explore-chapter", [], null, null, null, View_ExploreChapterComponent_0, RenderType_ExploreChapterComponent)), i1.ɵdid(1, 114688, null, 0, i4.ExploreChapterComponent, [i5.WINDOW, i6.ChapterService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ExploreChapterComponent_Host_0 = View_ExploreChapterComponent_Host_0;
var ExploreChapterComponentNgFactory = i1.ɵccf("app-explore-chapter", i4.ExploreChapterComponent, View_ExploreChapterComponent_Host_0, {}, {}, []);
exports.ExploreChapterComponentNgFactory = ExploreChapterComponentNgFactory;


/***/ }),

/***/ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/pipes/sharecomponent/explore-chapter.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var chapter_service_1 = __webpack_require__(/*! ./../../../modules/home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var ExploreChapterComponent = /** @class */ (function () {
    function ExploreChapterComponent(window, _serviceChapter) {
        this.window = window;
        this._serviceChapter = _serviceChapter;
    }
    ExploreChapterComponent.prototype.ngOnInit = function () {
        this.getAllChapter();
    };
    ExploreChapterComponent.prototype.getAllChapter = function () {
        var _this = this;
        this._serviceChapter.getChapter().subscribe(function (data) { return _this.chapter = data.results; });
    };
    ExploreChapterComponent.prototype.scrollArticle = function () {
        this.window.scrollTo(0, 0);
    };
    return ExploreChapterComponent;
}());
exports.ExploreChapterComponent = ExploreChapterComponent;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/chapter-heart.module.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/chapter-heart.module.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./chapter-heart.module */ "./src/app/modules/chapter/chapter-heart/chapter-heart.module.ts");
var i2 = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./components/chapter-heart.component.ngfactory */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ngfactory */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ngfactory */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ngfactory.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ../../../common/pipes/share-module.module */ "./src/app/common/pipes/share-module.module.ts");
var i10 = __webpack_require__(/*! ./components/chapter-heart.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ts");
var i11 = __webpack_require__(/*! ./components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ts");
var i12 = __webpack_require__(/*! ./components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ts");
var ChapterHeartModuleNgFactory = i0.ɵcmf(i1.ChapterHeartModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.ChapterHeartComponentNgFactory, i4.ChapterHeartContentGridArticleComponentNgFactory, i5.ChapterHeartContentGridArticleSection1ComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID, [2, i6.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i7.FormBuilder, i7.FormBuilder, []), i0.ɵmpd(4608, i7.ɵangular_packages_forms_forms_i, i7.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(1073742336, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1073742336, i8.RouterModule, i8.RouterModule, [[2, i8.ɵangular_packages_router_router_a], [2, i8.Router]]), i0.ɵmpd(1073742336, i9.ShareModuleModule, i9.ShareModuleModule, []), i0.ɵmpd(1073742336, i7.ɵangular_packages_forms_forms_bb, i7.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i7.ReactiveFormsModule, i7.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i7.FormsModule, i7.FormsModule, []), i0.ɵmpd(1073742336, i1.ChapterHeartModule, i1.ChapterHeartModule, []), i0.ɵmpd(1024, i8.ROUTES, function () { return [[{ path: "", component: i10.ChapterHeartComponent, children: [{ path: "", component: i11.ChapterHeartContentGridArticleComponent }, { path: ":name", component: i12.ChapterHeartContentGridArticleSection1Component }] }]]; }, [])]); });
exports.ChapterHeartModuleNgFactory = ChapterHeartModuleNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/chapter-heart.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/chapter-heart.module.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var chapter_heart_component_1 = __webpack_require__(/*! ./components/chapter-heart.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ts");
var chapter_heart_content_grid_article_component_1 = __webpack_require__(/*! ./components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ts");
var chapter_heart_content_grid_article_section1_component_1 = __webpack_require__(/*! ./components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ts");
var routes = [
    {
        path: '',
        component: chapter_heart_component_1.ChapterHeartComponent,
        children: [
            {
                path: '',
                component: chapter_heart_content_grid_article_component_1.ChapterHeartContentGridArticleComponent
            },
            {
                path: ':name',
                component: chapter_heart_content_grid_article_section1_component_1.ChapterHeartContentGridArticleSection1Component
            }
        ]
    }
];
var ChapterHeartModule = /** @class */ (function () {
    function ChapterHeartModule() {
    }
    return ChapterHeartModule;
}());
exports.ChapterHeartModule = ChapterHeartModule;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.css.ngstyle.js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.css.ngstyle.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ngfactory.js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ngfactory.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chapter-heart-content-grid-article-section1.component.css.ngstyle */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.css.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../../../../../../../common/pipes/make-text-css.pipe */ "./src/app/common/pipes/make-text-css.pipe.ts");
var i4 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i5 = __webpack_require__(/*! ./chapter-heart-content-grid-article-section1.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ../../../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var styles_ChapterHeartContentGridArticleSection1Component = [i0.styles];
var RenderType_ChapterHeartContentGridArticleSection1Component = i1.ɵcrt({ encapsulation: 2, styles: styles_ChapterHeartContentGridArticleSection1Component, data: {} });
exports.RenderType_ChapterHeartContentGridArticleSection1Component = RenderType_ChapterHeartContentGridArticleSection1Component;
function View_ChapterHeartContentGridArticleSection1Component_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "two-row-inside-sub-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), i1.ɵppd(8, 1)], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.job; _ck(_v, 6, 0, currVal_2); var currVal_3 = i1.ɵunv(_v, 7, 0, _ck(_v, 8, 0, i1.ɵnov(_v.parent.parent.parent.parent, 0), _v.context.$implicit.content)); _ck(_v, 7, 0, currVal_3); }); }
function View_ChapterHeartContentGridArticleSection1Component_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "div", [["class", "story-custom"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "line-start-inside-sub-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "div", [["class", "line-start-inside-sub-2-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ENTREPRENEUR STORY"])), (_l()(), i1.ɵeld(5, 0, null, null, 0, "div", [["class", "line-start-inside-sub-2-2"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_4)), i1.ɵdid(7, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.story; _ck(_v, 7, 0, currVal_0); }, null); }
function View_ChapterHeartContentGridArticleSection1Component_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "div", [["class", "tiptrick-custom"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "background": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 10, "div", [["class", "line-start-inside-sub-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "line-start-inside-sub-2-1"]], null, null, null, null, null)), i1.ɵdid(5, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(6, { "background": 0 }), (_l()(), i1.ɵeld(7, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(8, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(9, { "color": 0 }), (_l()(), i1.ɵted(-1, null, ["TIP & TRICKS"])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "line-start-inside-sub-2-2"]], null, null, null, null, null)), i1.ɵdid(12, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(13, { "background": 0 }), (_l()(), i1.ɵeld(14, 0, null, null, 1, "div", [["class", "two-row-inside-sub-2"]], [[8, "innerHTML", 1]], null, null, null, null)), i1.ɵppd(15, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.colorRgbaChapter); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 6, 0, _co.chapter.color); _ck(_v, 5, 0, currVal_1); var currVal_2 = _ck(_v, 9, 0, _co.chapter.color); _ck(_v, 8, 0, currVal_2); var currVal_3 = _ck(_v, 13, 0, _co.chapter.color); _ck(_v, 12, 0, currVal_3); }, function (_ck, _v) { var currVal_4 = i1.ɵunv(_v, 14, 0, _ck(_v, 15, 0, i1.ɵnov(_v.parent.parent.parent, 0), _v.parent.context.$implicit.tips_tricks)); _ck(_v, 14, 0, currVal_4); }); }
function View_ChapterHeartContentGridArticleSection1Component_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 13, "div", [["class", "yourseft-custom"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "border-color": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(5, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(6, { "color": 0 }), (_l()(), i1.ɵted(-1, null, ["ASK YOURSELF"])), (_l()(), i1.ɵeld(8, 0, null, null, 3, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), i1.ɵdid(9, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(10, { "color": 0 }), i1.ɵppd(11, 1), (_l()(), i1.ɵeld(12, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/ask_yourseft.png"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.chapter.color); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 6, 0, _co.chapter.color); _ck(_v, 5, 0, currVal_1); var currVal_3 = _ck(_v, 10, 0, _co.chapter.color); _ck(_v, 9, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = i1.ɵunv(_v, 8, 0, _ck(_v, 11, 0, i1.ɵnov(_v.parent.parent.parent, 0), _v.parent.context.$implicit.ask_yourself)); _ck(_v, 8, 0, currVal_2); }); }
function View_ChapterHeartContentGridArticleSection1Component_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), i1.ɵppd(2, 1), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_3)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_5)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_6)), i1.ɵdid(8, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = (_v.context.$implicit.story.length != 0); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.tips_tricks; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.ask_yourself; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i1.ɵnov(_v.parent.parent, 0), _v.context.$implicit.content)); _ck(_v, 1, 0, currVal_0); }); }
function View_ChapterHeartContentGridArticleSection1Component_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "a", [["class", "button-next-chapter-heart"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventNextchapter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "display": 0, "border-top-color": 1 }), i1.ɵpod(3, { "display": 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(6, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(7, { "color": 0 }), (_l()(), i1.ɵted(8, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.displayNextChapter ? _ck(_v, 2, 0, "block", _co.chapterNext.color) : _ck(_v, 3, 0, "none")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 7, 0, _co.chapterNext.color); _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.chapterNext.chapter_name; _ck(_v, 8, 0, currVal_2); }); }
function View_ChapterHeartContentGridArticleSection1Component_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 28, "div", [["class", "grid-content-sub-1"], ["id", "content-in-chapter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "p", [], [[8, "id", 0]], null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(3, { "color": 0, "font-size": 1 }), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_2)), i1.ɵdid(6, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 21, "div", [["class", "group-btn-article"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 18, "div", [["class", "btn-last-sub-2"]], null, null, null, null, null)), i1.ɵdid(9, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(10, { "justify-content": 0 }), i1.ɵpod(11, { "justify-content": 0 }), (_l()(), i1.ɵeld(12, 0, null, null, 4, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventPrevious(_co.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(14, { "display": 0 }), i1.ɵpod(15, { "display": 0 }), (_l()(), i1.ɵted(-1, null, ["PREVIOUS"])), (_l()(), i1.ɵeld(17, 0, null, null, 4, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventNext(_co.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(18, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(19, { "display": 0 }), i1.ɵpod(20, { "display": 0 }), (_l()(), i1.ɵted(-1, null, ["NEXT"])), (_l()(), i1.ɵeld(22, 0, null, null, 4, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventNextchapter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(23, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(24, { "display": 0 }), i1.ɵpod(25, { "display": 0 }), (_l()(), i1.ɵted(-1, null, ["NEXT CHAPTER"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_7)), i1.ɵdid(28, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, _co.chapter.color, "23px"); _ck(_v, 2, 0, currVal_1); var currVal_3 = _co.paragraph; _ck(_v, 6, 0, currVal_3); var currVal_4 = (_co.displayPrevious ? _ck(_v, 10, 0, "space-between") : _ck(_v, 11, 0, "flex-end")); _ck(_v, 9, 0, currVal_4); var currVal_5 = (_co.displayPrevious ? _ck(_v, 14, 0, "block") : _ck(_v, 15, 0, "none")); _ck(_v, 13, 0, currVal_5); var currVal_6 = (_co.displayNext ? _ck(_v, 19, 0, "block") : _ck(_v, 20, 0, "none")); _ck(_v, 18, 0, currVal_6); var currVal_7 = (_co.displayNextChapter ? _ck(_v, 24, 0, "block") : _ck(_v, 25, 0, "none")); _ck(_v, 23, 0, currVal_7); var currVal_8 = _co.chapterNext; _ck(_v, 28, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.article.title, ""); _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.article.title; _ck(_v, 4, 0, currVal_2); }); }
function View_ChapterHeartContentGridArticleSection1Component_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "p", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventNextchapter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "display": 0, "border-top-color": 1 }), (_l()(), i1.ɵeld(3, 0, null, null, 3, "span", [], null, null, null, null, null)), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "color": 0 }), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 2, "i", [["class", "fas fa-chevron-right"]], null, null, null, null, null)), i1.ɵdid(8, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(9, { "color": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, "block", _co.chapterNext.color); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _co.chapterNext.color); _ck(_v, 4, 0, currVal_1); var currVal_3 = _ck(_v, 9, 0, _co.chapterNext.color); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.chapterNext.chapter_name; _ck(_v, 6, 0, currVal_2); }); }
function View_ChapterHeartContentGridArticleSection1Component_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 38, "div", [["class", "btn-last-sub-2-res"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "div", [["class", "next-chapter-res"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(3, { "display": 0 }), i1.ɵpod(4, { "display": 0 }), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["NEXT CHAPTER"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_9)), i1.ɵdid(8, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 14, "a", [["class", "next-res"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventNext(_co.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(11, { "display": 0, "background": 1 }), i1.ɵpod(12, { "display": 0 }), (_l()(), i1.ɵeld(13, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(14, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(15, { "color": 0 }), (_l()(), i1.ɵted(-1, null, ["NEXT"])), (_l()(), i1.ɵeld(17, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(18, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(19, { "color": 0 }), (_l()(), i1.ɵted(20, null, ["", ""])), (_l()(), i1.ɵeld(21, 0, null, null, 2, "i", [["class", "fas fa-chevron-right"]], null, null, null, null, null)), i1.ɵdid(22, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(23, { "color": 0 }), (_l()(), i1.ɵeld(24, 0, null, null, 14, "a", [["class", "previous-res"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickEventPrevious(_co.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(25, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(26, { "display": 0, "background": 1 }), i1.ɵpod(27, { "display": 0 }), (_l()(), i1.ɵeld(28, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(29, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(30, { "color": 0 }), (_l()(), i1.ɵted(-1, null, ["PREVIOUS"])), (_l()(), i1.ɵeld(32, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(33, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(34, { "color": 0 }), (_l()(), i1.ɵted(35, null, ["", ""])), (_l()(), i1.ɵeld(36, 0, null, null, 2, "i", [["class", "fas fa-chevron-left"]], null, null, null, null, null)), i1.ɵdid(37, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(38, { "color": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.displayNextChapter ? _ck(_v, 3, 0, "block") : _ck(_v, 4, 0, "none")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.chapterNext; _ck(_v, 8, 0, currVal_1); var currVal_2 = (_co.displayNext ? _ck(_v, 11, 0, "block", _co.chapter.third_color) : _ck(_v, 12, 0, "none")); _ck(_v, 10, 0, currVal_2); var currVal_3 = _ck(_v, 15, 0, _co.chapter.second_color); _ck(_v, 14, 0, currVal_3); var currVal_4 = _ck(_v, 19, 0, _co.chapter.second_color); _ck(_v, 18, 0, currVal_4); var currVal_6 = _ck(_v, 23, 0, _co.chapter.second_color); _ck(_v, 22, 0, currVal_6); var currVal_7 = (_co.displayPrevious ? _ck(_v, 26, 0, "block", _co.chapter.third_color) : _ck(_v, 27, 0, "none")); _ck(_v, 25, 0, currVal_7); var currVal_8 = _ck(_v, 30, 0, _co.chapter.second_color); _ck(_v, 29, 0, currVal_8); var currVal_9 = _ck(_v, 34, 0, _co.chapter.second_color); _ck(_v, 33, 0, currVal_9); var currVal_11 = _ck(_v, 38, 0, _co.chapter.second_color); _ck(_v, 37, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.titleNext; _ck(_v, 20, 0, currVal_5); var currVal_10 = _co.titlePreious; _ck(_v, 35, 0, currVal_10); }); }
function View_ChapterHeartContentGridArticleSection1Component_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.MakeTextCssPipe, [i4.DomSanitizer]), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_1)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleSection1Component_8)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.article; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.chapter; _ck(_v, 4, 0, currVal_1); }, null); }
exports.View_ChapterHeartContentGridArticleSection1Component_0 = View_ChapterHeartContentGridArticleSection1Component_0;
function View_ChapterHeartContentGridArticleSection1Component_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart-content-grid-article-section1", [], null, null, null, View_ChapterHeartContentGridArticleSection1Component_0, RenderType_ChapterHeartContentGridArticleSection1Component)), i1.ɵdid(1, 12697600, null, 0, i5.ChapterHeartContentGridArticleSection1Component, [i6.WINDOW, i7.ActivatedRoute, i8.ChapterService, i7.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChapterHeartContentGridArticleSection1Component_Host_0 = View_ChapterHeartContentGridArticleSection1Component_Host_0;
var ChapterHeartContentGridArticleSection1ComponentNgFactory = i1.ɵccf("app-chapter-heart-content-grid-article-section1", i5.ChapterHeartContentGridArticleSection1Component, View_ChapterHeartContentGridArticleSection1Component_Host_0, {}, {}, []);
exports.ChapterHeartContentGridArticleSection1ComponentNgFactory = ChapterHeartContentGridArticleSection1ComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ts":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article-section1/chapter-heart-content-grid-article-section1.component.ts ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var chapter_service_1 = __webpack_require__(/*! ./../../../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var ChapterHeartContentGridArticleSection1Component = /** @class */ (function () {
    function ChapterHeartContentGridArticleSection1Component(window, _activatedRoute, _serviceChapter, router) {
        this.window = window;
        this._activatedRoute = _activatedRoute;
        this._serviceChapter = _serviceChapter;
        this.router = router;
        this.stories = [];
        this.checkLink = false;
        this.listChapter = [];
        this.listArticleByIDChapter = [];
        this.displayNext = false;
        this.displayPrevious = false;
        this.displayNextChapter = false;
        this.scrollExecuted = false;
    }
    ChapterHeartContentGridArticleSection1Component.prototype.ngOnInit = function () {
        this.getAllChapter();
        this.getParentUrl();
    };
    ChapterHeartContentGridArticleSection1Component.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    ChapterHeartContentGridArticleSection1Component.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //setTimeout(()=>{
        if (!this.scrollExecuted) {
            var routeFragmentSubscription_1;
            // Automatic scroll
            routeFragmentSubscription_1 = this._activatedRoute.fragment.subscribe(function (fragment) {
                if (fragment) {
                    var element = document.getElementById(fragment);
                    //console.log(element);
                    if (element) {
                        //element.scrollIntoView();
                        var length_1 = $("#image-title").height();
                        //console.log(length);
                        $("html, body").animate({ scrollTop: $([element]).offset().top - (length_1 - 300) }, 1000);
                        _this.scrollExecuted = true;
                        // Free resources
                        setTimeout(function () {
                            //console.log('routeFragmentSubscription unsubscribe');
                            routeFragmentSubscription_1.unsubscribe();
                        }, 1000);
                    }
                }
            });
        }
        //},3000)
    };
    ChapterHeartContentGridArticleSection1Component.prototype.getParentUrl = function () {
        this.slugChapter = this._activatedRoute.parent.snapshot.pathFromRoot
            .map(function (s) { return s.url; }).reduce(function (a, e) { return a.concat(e); }).map(function (s) { return s.path; });
        this.getAriticleByChapter(this.slugChapter[0]);
    };
    ChapterHeartContentGridArticleSection1Component.prototype.getAriticleByChapter = function (slugChapter) {
        var _this = this;
        this._activatedRoute.params.subscribe(function (dataname) {
            _this._serviceChapter.getChapterByName(slugChapter).subscribe(function (data) {
                _this.listArticleByIDChapter = data.articles;
                _this.chapter = data;
                _this.convertHex(data.color, 10);
                data.articles.forEach(function (element, index) {
                    if (element.slug == dataname.name) {
                        _this.checkLink = true;
                        _this.article = element;
                        _this.get4CustomContent(element.paragraphs);
                        _this.index = index;
                        if (index == 0 && index == (data.articles.length - 1)) {
                            _this.displayNext = false;
                            _this.displayPrevious = false;
                            _this.displayNextChapter = true;
                        }
                        else if (index == 0) {
                            _this.displayNext = true;
                            _this.displayPrevious = false;
                            _this.displayNextChapter = false;
                            _this.titleNext = data.articles[index + 1].title;
                        }
                        else if (index == (data.articles.length - 1)) {
                            _this.displayNext = false;
                            _this.displayPrevious = true;
                            _this.displayNextChapter = true;
                            _this.titlePreious = data.articles[index - 1].title;
                            _this._serviceChapter.getChapter().subscribe(function (last) {
                                last.results.forEach(function (element, index) {
                                    if (index == (last.results.length - 1)) {
                                        if (_this.slugChapter[0] == element.slug) {
                                            _this.displayNextChapter = false;
                                        }
                                    }
                                });
                            });
                        }
                        else {
                            _this.displayNext = true;
                            _this.displayPrevious = true;
                            _this.displayNextChapter = false;
                            _this.titleNext = data.articles[index + 1].title;
                            _this.titlePreious = data.articles[index - 1].title;
                        }
                    }
                });
                if (_this.checkLink == false) {
                    _this.router.navigate(['/page-not-found']);
                }
            });
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.getAllChapter = function () {
        var _this = this;
        this._serviceChapter.getChapter().subscribe(function (data) {
            _this.listChapter = data.results;
            _this.getChapterNext();
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.clickEventNext = function (indexArticle) {
        var _this = this;
        this.listArticleByIDChapter.forEach(function (element, index) {
            if (index == (indexArticle + 1)) {
                _this.article = element;
                _this.index = index;
                _this.router.navigate(["/" + _this.slugChapter + "/" + element.slug]);
                $('html, body').animate({
                    scrollTop: $("#content-in-chapter").offset().top - 100
                }, 1000);
            }
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.clickEventPrevious = function (indexArticle) {
        var _this = this;
        this.listArticleByIDChapter.forEach(function (element, index) {
            if (index == (indexArticle - 1)) {
                _this.article = element;
                _this.index = index;
                _this.router.navigate(["/" + _this.slugChapter + "/" + element.slug]);
                $('html, body').animate({
                    scrollTop: $("#content-in-chapter").offset().top - 100
                }, 1000);
            }
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.getChapterNext = function () {
        var _this = this;
        var indextemp;
        this.listChapter.forEach(function (element, index) {
            if (element.slug == _this.slugChapter[0]) {
                indextemp = index;
            }
            ;
            if (index == (indextemp + 1)) {
                _this.chapterNext = element;
            }
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.clickEventNextchapter = function () {
        var _this = this;
        var indextemp;
        this.listChapter.forEach(function (element, index) {
            if (element.slug == _this.slugChapter[0]) {
                indextemp = index;
            }
            ;
            if (index == (indextemp + 1)) {
                _this.chapterNext = element;
                _this.router.navigate(["/" + _this.chapterNext.slug]);
                _this.window.scrollTo(0, 0);
            }
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.getSlugLastChapter = function (chapterList) {
        var _this = this;
        chapterList.forEach(function (element, index) {
            if (index == (chapterList.length - 1)) {
                _this.slugNameLastChapter = element.slug;
            }
        });
    };
    ChapterHeartContentGridArticleSection1Component.prototype.get4CustomContent = function (paragraph) {
        this.stories = [];
        //console.log(paragraph);
        this.paragraph = paragraph;
    };
    ChapterHeartContentGridArticleSection1Component.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        this.colorRgbaChapter = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    };
    return ChapterHeartContentGridArticleSection1Component;
}());
exports.ChapterHeartContentGridArticleSection1Component = ChapterHeartContentGridArticleSection1Component;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.css.shim.ngstyle.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.css.shim.ngstyle.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ngfactory.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ngfactory.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chapter-heart-content-grid-article.component.css.shim.ngstyle */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i4 = __webpack_require__(/*! ./chapter-heart-content-grid-article.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ts");
var i5 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! ../../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i8 = __webpack_require__(/*! ../../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i9 = __webpack_require__(/*! ../../../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var styles_ChapterHeartContentGridArticleComponent = [i0.styles];
var RenderType_ChapterHeartContentGridArticleComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChapterHeartContentGridArticleComponent, data: {} });
exports.RenderType_ChapterHeartContentGridArticleComponent = RenderType_ChapterHeartContentGridArticleComponent;
function View_ChapterHeartContentGridArticleComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "grid-content-child"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(3, { "color": 0 }), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.popUpNewsLetter(_v.context.$implicit.slug) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.color); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.summary; _ck(_v, 6, 0, currVal_2); }); }
function View_ChapterHeartContentGridArticleComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The name fied is required "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Min length 1 character "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct name format "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_ChapterHeartContentGridArticleComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "grid-content"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_1)), i1.ɵdid(2, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 49, "div", [["class", "popup"], ["id", "popup-newsletter"]], null, null, null, null, null)), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "display": 0 }), (_l()(), i1.ɵeld(6, 0, null, null, 46, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Please enter your e-mail address to keep reading: "])), (_l()(), i1.ɵeld(10, 0, null, null, 42, "div", [["class", "enter-email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 41, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormNews() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(12, 16384, null, 0, i3.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(13, 540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]), i1.ɵdid(15, 16384, null, 0, i3.NgControlStatusGroup, [[4, i3.ControlContainer]], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 31, "div", [["class", "container-form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 30, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(20, 0, null, null, 5, "input", [["formControlName", "name"], ["name", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 21)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 21).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 21)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 21)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(21, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(23, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(25, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_2)), i1.ɵdid(27, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_3)), i1.ɵdid(29, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_4)), i1.ɵdid(31, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_5)), i1.ɵdid(33, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-mail address"])), (_l()(), i1.ɵeld(36, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 37)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 37).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 37)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 37)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(37, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(39, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(41, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_6)), i1.ɵdid(43, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_7)), i1.ɵdid(45, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridArticleComponent_8)), i1.ɵdid(47, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(48, 0, null, null, 4, "div", [["class", "group-btn-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "button", [["id", "close-btn-download-news"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CANCEL"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.article; _ck(_v, 2, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, (_co.isDisplay ? "none" : "")); _ck(_v, 4, 0, currVal_1); var currVal_9 = _co.frmPopupNews; _ck(_v, 13, 0, currVal_9); var currVal_17 = "name"; _ck(_v, 23, 0, currVal_17); var currVal_18 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.required)); _ck(_v, 27, 0, currVal_18); var currVal_19 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.minlength)); _ck(_v, 29, 0, currVal_19); var currVal_20 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.maxlength)); _ck(_v, 31, 0, currVal_20); var currVal_21 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.pattern)); _ck(_v, 33, 0, currVal_21); var currVal_29 = "email"; _ck(_v, 39, 0, currVal_29); var currVal_30 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.required)); _ck(_v, 43, 0, currVal_30); var currVal_31 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.maxlength)); _ck(_v, 45, 0, currVal_31); var currVal_32 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.pattern)); _ck(_v, 47, 0, currVal_32); }, function (_ck, _v) { var currVal_2 = i1.ɵnov(_v, 15).ngClassUntouched; var currVal_3 = i1.ɵnov(_v, 15).ngClassTouched; var currVal_4 = i1.ɵnov(_v, 15).ngClassPristine; var currVal_5 = i1.ɵnov(_v, 15).ngClassDirty; var currVal_6 = i1.ɵnov(_v, 15).ngClassValid; var currVal_7 = i1.ɵnov(_v, 15).ngClassInvalid; var currVal_8 = i1.ɵnov(_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = i1.ɵnov(_v, 25).ngClassUntouched; var currVal_11 = i1.ɵnov(_v, 25).ngClassTouched; var currVal_12 = i1.ɵnov(_v, 25).ngClassPristine; var currVal_13 = i1.ɵnov(_v, 25).ngClassDirty; var currVal_14 = i1.ɵnov(_v, 25).ngClassValid; var currVal_15 = i1.ɵnov(_v, 25).ngClassInvalid; var currVal_16 = i1.ɵnov(_v, 25).ngClassPending; _ck(_v, 20, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_22 = i1.ɵnov(_v, 41).ngClassUntouched; var currVal_23 = i1.ɵnov(_v, 41).ngClassTouched; var currVal_24 = i1.ɵnov(_v, 41).ngClassPristine; var currVal_25 = i1.ɵnov(_v, 41).ngClassDirty; var currVal_26 = i1.ɵnov(_v, 41).ngClassValid; var currVal_27 = i1.ɵnov(_v, 41).ngClassInvalid; var currVal_28 = i1.ɵnov(_v, 41).ngClassPending; _ck(_v, 36, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); }); }
exports.View_ChapterHeartContentGridArticleComponent_0 = View_ChapterHeartContentGridArticleComponent_0;
function View_ChapterHeartContentGridArticleComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart-content-grid-article", [], null, null, null, View_ChapterHeartContentGridArticleComponent_0, RenderType_ChapterHeartContentGridArticleComponent)), i1.ɵdid(1, 4308992, null, 0, i4.ChapterHeartContentGridArticleComponent, [i5.WINDOW, i5.LOCAL_STORAGE, i6.ActivatedRoute, i7.ArticleService, i8.ChapterService, i9.NewLetterService, i3.FormBuilder, i6.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChapterHeartContentGridArticleComponent_Host_0 = View_ChapterHeartContentGridArticleComponent_Host_0;
var ChapterHeartContentGridArticleComponentNgFactory = i1.ɵccf("app-chapter-heart-content-grid-article", i4.ChapterHeartContentGridArticleComponent, View_ChapterHeartContentGridArticleComponent_Host_0, {}, {}, []);
exports.ChapterHeartContentGridArticleComponentNgFactory = ChapterHeartContentGridArticleComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-article/chapter-heart-content-grid-article.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var article_service_1 = __webpack_require__(/*! ./../../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var chapter_service_1 = __webpack_require__(/*! ./../../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var new_letter_service_1 = __webpack_require__(/*! ./../../../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
var ChapterHeartContentGridArticleComponent = /** @class */ (function () {
    function ChapterHeartContentGridArticleComponent(window, localStorage, _activatedRoute, _serviceAriticle, _serviceChapter, _serviceNewsLetter, _formBuilder, _router) {
        this.window = window;
        this.localStorage = localStorage;
        this._activatedRoute = _activatedRoute;
        this._serviceAriticle = _serviceAriticle;
        this._serviceChapter = _serviceChapter;
        this._serviceNewsLetter = _serviceNewsLetter;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.article = [];
        this.isDisplay = false;
    }
    ChapterHeartContentGridArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this._activatedRoute.params.subscribe(function (data) { return _this.getChapter(data.name); });
    };
    ChapterHeartContentGridArticleComponent.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    ChapterHeartContentGridArticleComponent.prototype.getAllArticle = function (id) {
        var _this = this;
        this.article = [];
        this._serviceAriticle.getArticle().subscribe(function (data) {
            data.results.forEach(function (element) {
                if (element.chapter_id == id) {
                    _this.article.push(element);
                }
            });
        });
    };
    ChapterHeartContentGridArticleComponent.prototype.getChapter = function (name) {
        var _this = this;
        this._serviceChapter.getChapterByName(name).subscribe(function (data) {
            _this.getAllArticle(data.id);
            _this.color = data.color;
        });
    };
    ChapterHeartContentGridArticleComponent.prototype.popUpNewsLetter = function (articlesSlug) {
        var _this = this;
        this.articlesSlug = articlesSlug;
        if (this.localStorage.getItem(this.key) != null) {
            // We have items key = email
            this._activatedRoute.params.subscribe(function (data) { return _this._router.navigate([data.name, articlesSlug]); });
        }
        else {
            // No items
            var modal = document.getElementById('popup-newsletter');
            var button = document.getElementById('close-btn-download-news');
            modal.style.display = "block";
            button.onclick = function () {
                modal.style.display = "none";
            };
            // When the user clicks anywhere outside of the modal, close it
            this.window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    };
    ChapterHeartContentGridArticleComponent.prototype.createForm = function () {
        this.frmPopupNews = this._formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50)
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]]
        });
    };
    ChapterHeartContentGridArticleComponent.prototype.onSubmitFormNews = function () {
        var _this = this;
        if (this.frmPopupNews.valid) {
            //console.log(this.frmPopupNews.value);
            this.localStorage.setItem(this.key, this.frmPopupNews.value.email);
            this._serviceNewsLetter.sendNewLetter(this.frmPopupNews.value).subscribe(function (data) { return data; });
            this.frmPopupNews.reset();
            sweetalert2_1.default({
                title: 'Subscribed',
                type: 'success',
                confirmButtonText: 'OK'
            }).then(function (results) {
                if (results.value) {
                    _this._activatedRoute.params.subscribe(function (data) {
                        _this._router.navigate([data.name, _this.articlesSlug], { fragment: 'content-in-chapter' });
                    });
                }
            });
            this.isDisplay = !this.isDisplay;
        }
        else {
            this.validateAllFormFields(this.frmPopupNews);
        }
    };
    ChapterHeartContentGridArticleComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof forms_1.FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    return ChapterHeartContentGridArticleComponent;
}());
exports.ChapterHeartContentGridArticleComponent = ChapterHeartContentGridArticleComponent;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.css.shim.ngstyle.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.css.shim.ngstyle.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ngfactory.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ngfactory.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chapter-heart-content-grid-menu.component.css.shim.ngstyle */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! ./chapter-heart-content-grid-menu.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! ../../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i8 = __webpack_require__(/*! ../../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i9 = __webpack_require__(/*! ../../../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var styles_ChapterHeartContentGridMenuComponent = [i0.styles];
var RenderType_ChapterHeartContentGridMenuComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChapterHeartContentGridMenuComponent, data: {} });
exports.RenderType_ChapterHeartContentGridMenuComponent = RenderType_ChapterHeartContentGridMenuComponent;
function View_ChapterHeartContentGridMenuComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "a", [["routerLinkActive", ""], ["style", "cursor: pointer"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.popUpNewsLetter(_v.context.$implicit.slug) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = ((_v.context.$implicit.id = false) !== false);
        ad = (pd_1 && ad);
    } if (("mouseleave" === en)) {
        var pd_2 = ((_v.context.$implicit.id = true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "color": 0, "background": 1 }), i1.ɵdid(3, 1720320, [["rla", 4]], 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵeld(6, 0, null, null, 9, "li", [], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(8, { "color": 0, "background": 1 }), (_l()(), i1.ɵeld(9, 0, null, null, 3, "span", [], null, null, null, null, null)), i1.ɵdid(10, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(11, { "color": 0 }), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵeld(13, 0, null, null, 2, "i", [["class", "fas fa-chevron-right"]], null, null, null, null, null)), i1.ɵdid(14, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(15, { "color": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (i1.ɵnov(_v, 3).isActive ? "#fff" : ""), (i1.ɵnov(_v, 3).isActive ? _co.chapter.second_color : "")); _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 3, 0, currVal_1); var currVal_2 = _ck(_v, 8, 0, (_v.context.$implicit.id ? _co.chapter.color : "#fff"), (_v.context.$implicit.id ? "" : _co.chapter.second_color)); _ck(_v, 7, 0, currVal_2); var currVal_3 = _ck(_v, 11, 0, (i1.ɵnov(_v, 3).isActive ? "#fff" : "")); _ck(_v, 10, 0, currVal_3); var currVal_5 = _ck(_v, 15, 0, (i1.ɵnov(_v, 3).isActive ? "#fff" : "")); _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var currVal_4 = _v.context.$implicit.title; _ck(_v, 12, 0, currVal_4); }); }
function View_ChapterHeartContentGridMenuComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "ul", [["class", ""], ["id", "menu-left-inchapter-fix"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "li", [], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(3, { "background": 0, "color": 1 }), (_l()(), i1.ɵted(-1, null, ["WHAT\u2019S IN THIS CHAPTER?"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_2)), i1.ɵdid(6, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.chapter.third_color, _co.chapter.second_color); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.article; _ck(_v, 6, 0, currVal_1); }, null); }
function View_ChapterHeartContentGridMenuComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The name fied is required "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Min length 1 character "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct name format "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_ChapterHeartContentGridMenuComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "grid-menu"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_1)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 49, "div", [["class", "popup"], ["id", "popup-newsletter"]], null, null, null, null, null)), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "display": 0 }), (_l()(), i1.ɵeld(6, 0, null, null, 46, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Please enter your e-mail address to keep reading: "])), (_l()(), i1.ɵeld(10, 0, null, null, 42, "div", [["class", "enter-email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 41, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormNews() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(12, 16384, null, 0, i4.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(13, 540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]), i1.ɵdid(15, 16384, null, 0, i4.NgControlStatusGroup, [[4, i4.ControlContainer]], null, null), (_l()(), i1.ɵeld(16, 0, null, null, 31, "div", [["class", "container-form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 30, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(20, 0, null, null, 5, "input", [["formControlName", "name"], ["name", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 21)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 21).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 21)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 21)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(21, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(23, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(25, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_3)), i1.ɵdid(27, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_4)), i1.ɵdid(29, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_5)), i1.ɵdid(31, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_6)), i1.ɵdid(33, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-mail address"])), (_l()(), i1.ɵeld(36, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 37)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 37).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 37)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 37)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(37, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(39, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(41, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_7)), i1.ɵdid(43, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_8)), i1.ɵdid(45, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartContentGridMenuComponent_9)), i1.ɵdid(47, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(48, 0, null, null, 4, "div", [["class", "group-btn-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "button", [["id", "close-btn-download-news"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CANCEL"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.chapter; _ck(_v, 2, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, (_co.isDisplay ? "none" : "")); _ck(_v, 4, 0, currVal_1); var currVal_9 = _co.frmPopupNews; _ck(_v, 13, 0, currVal_9); var currVal_17 = "name"; _ck(_v, 23, 0, currVal_17); var currVal_18 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.required)); _ck(_v, 27, 0, currVal_18); var currVal_19 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.minlength)); _ck(_v, 29, 0, currVal_19); var currVal_20 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.maxlength)); _ck(_v, 31, 0, currVal_20); var currVal_21 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.pattern)); _ck(_v, 33, 0, currVal_21); var currVal_29 = "email"; _ck(_v, 39, 0, currVal_29); var currVal_30 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.required)); _ck(_v, 43, 0, currVal_30); var currVal_31 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.maxlength)); _ck(_v, 45, 0, currVal_31); var currVal_32 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.pattern)); _ck(_v, 47, 0, currVal_32); }, function (_ck, _v) { var currVal_2 = i1.ɵnov(_v, 15).ngClassUntouched; var currVal_3 = i1.ɵnov(_v, 15).ngClassTouched; var currVal_4 = i1.ɵnov(_v, 15).ngClassPristine; var currVal_5 = i1.ɵnov(_v, 15).ngClassDirty; var currVal_6 = i1.ɵnov(_v, 15).ngClassValid; var currVal_7 = i1.ɵnov(_v, 15).ngClassInvalid; var currVal_8 = i1.ɵnov(_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = i1.ɵnov(_v, 25).ngClassUntouched; var currVal_11 = i1.ɵnov(_v, 25).ngClassTouched; var currVal_12 = i1.ɵnov(_v, 25).ngClassPristine; var currVal_13 = i1.ɵnov(_v, 25).ngClassDirty; var currVal_14 = i1.ɵnov(_v, 25).ngClassValid; var currVal_15 = i1.ɵnov(_v, 25).ngClassInvalid; var currVal_16 = i1.ɵnov(_v, 25).ngClassPending; _ck(_v, 20, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_22 = i1.ɵnov(_v, 41).ngClassUntouched; var currVal_23 = i1.ɵnov(_v, 41).ngClassTouched; var currVal_24 = i1.ɵnov(_v, 41).ngClassPristine; var currVal_25 = i1.ɵnov(_v, 41).ngClassDirty; var currVal_26 = i1.ɵnov(_v, 41).ngClassValid; var currVal_27 = i1.ɵnov(_v, 41).ngClassInvalid; var currVal_28 = i1.ɵnov(_v, 41).ngClassPending; _ck(_v, 36, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); }); }
exports.View_ChapterHeartContentGridMenuComponent_0 = View_ChapterHeartContentGridMenuComponent_0;
function View_ChapterHeartContentGridMenuComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart-content-grid-menu", [], null, null, null, View_ChapterHeartContentGridMenuComponent_0, RenderType_ChapterHeartContentGridMenuComponent)), i1.ɵdid(1, 4308992, null, 0, i5.ChapterHeartContentGridMenuComponent, [i6.WINDOW, i6.LOCAL_STORAGE, i3.ActivatedRoute, i7.ArticleService, i8.ChapterService, i9.NewLetterService, i4.FormBuilder, i3.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChapterHeartContentGridMenuComponent_Host_0 = View_ChapterHeartContentGridMenuComponent_Host_0;
var ChapterHeartContentGridMenuComponentNgFactory = i1.ɵccf("app-chapter-heart-content-grid-menu", i5.ChapterHeartContentGridMenuComponent, View_ChapterHeartContentGridMenuComponent_Host_0, {}, {}, []);
exports.ChapterHeartContentGridMenuComponentNgFactory = ChapterHeartContentGridMenuComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var article_service_1 = __webpack_require__(/*! ./../../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var chapter_service_1 = __webpack_require__(/*! ./../../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var new_letter_service_1 = __webpack_require__(/*! ./../../../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
var ChapterHeartContentGridMenuComponent = /** @class */ (function () {
    function ChapterHeartContentGridMenuComponent(window, localStorage, _activatedRoute, _serviceAriticle, _serviceChapter, _serviceNewsLetter, _formBuilder, _router) {
        this.window = window;
        this.localStorage = localStorage;
        this._activatedRoute = _activatedRoute;
        this._serviceAriticle = _serviceAriticle;
        this._serviceChapter = _serviceChapter;
        this._serviceNewsLetter = _serviceNewsLetter;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.article = [];
        this.isDisplay = false;
    }
    ChapterHeartContentGridMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.article = [];
        this._activatedRoute.params.subscribe(function (data) {
            _this.getChapter(data.name);
        });
    };
    ChapterHeartContentGridMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (data) {
            _this._serviceChapter.getChapter().subscribe(function (nameChapter) {
                nameChapter.results.forEach(function (element) {
                    if (data.name == element.slug) {
                        setTimeout(function () {
                            $(document).ready(function () {
                                var parentElement = $('.height-menu');
                                var stickyElement = $('.grid-menu');
                                var mediaBreakPoint = '(max-width: 980px)';
                                function scrollStickySidebar() {
                                    $(this.window).scroll(function () {
                                        var scroll = $(this).scrollTop();
                                        var length = parentElement.height() - stickyElement.height() + parentElement.offset().top - 140;
                                        if (!this.window.matchMedia(mediaBreakPoint).matches) {
                                            if (scroll < parentElement.offset().top - 140) {
                                                stickyElement.css({
                                                    'position': 'relative',
                                                    'top': '0',
                                                    'bottom': 'auto'
                                                });
                                            }
                                            else if (scroll > length) {
                                                stickyElement.css({
                                                    'position': 'absolute',
                                                    'top': 'auto',
                                                    'bottom': '0'
                                                });
                                            }
                                            else {
                                                stickyElement.css({
                                                    'position': 'fixed',
                                                    'top': '120px',
                                                    'bottom': 'auto'
                                                });
                                            }
                                        }
                                        else {
                                            //setStickyElementMobileDefaultStyles();
                                        }
                                    });
                                }
                                ;
                                // if($('.grid-container').hasClass('height-menu')){
                                scrollStickySidebar();
                                $(this.window).resize(scrollStickySidebar);
                            });
                        }, 1000);
                    }
                });
            });
        });
    };
    ChapterHeartContentGridMenuComponent.prototype.getAllArticle = function (id) {
        var _this = this;
        this.article = [];
        this._serviceAriticle.getArticle().subscribe(function (data) {
            data.results.forEach(function (element) {
                if (element.chapter_id == id) {
                    _this.article.push(element);
                }
            });
        });
    };
    ChapterHeartContentGridMenuComponent.prototype.getChapter = function (name) {
        var _this = this;
        this._serviceChapter.getChapterByName(name).subscribe(function (data) {
            _this.chapter = data;
            _this.getAllArticle(data.id);
        });
    };
    ChapterHeartContentGridMenuComponent.prototype.popUpNewsLetter = function (articlesSlug) {
        var _this = this;
        this.articlesSlug = articlesSlug;
        if (this.localStorage.getItem(this.key) != null) {
            // We have items key = email
            this._activatedRoute.params.subscribe(function (data) {
                _this._router.navigate([data.name, articlesSlug]);
                $('html, body').animate({
                    scrollTop: $("#content-in-chapter").offset().top - 100
                }, 1000);
            });
        }
        else {
            // No items
            var modal = document.getElementById('popup-newsletter');
            var button = document.getElementById('close-btn-download-news');
            modal.style.display = "block";
            button.onclick = function () {
                modal.style.display = "none";
            };
            // When the user clicks anywhere outside of the modal, close it
            this.window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    };
    ChapterHeartContentGridMenuComponent.prototype.createForm = function () {
        this.frmPopupNews = this._formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50)
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]]
        });
    };
    ChapterHeartContentGridMenuComponent.prototype.onSubmitFormNews = function () {
        var _this = this;
        if (this.frmPopupNews.valid) {
            //console.log(this.frmPopupNews.value);
            this.localStorage.setItem(this.key, this.frmPopupNews.value.email);
            this._serviceNewsLetter.sendNewLetter(this.frmPopupNews.value).subscribe(function (data) { return data; });
            this.frmPopupNews.reset();
            sweetalert2_1.default({
                title: 'Subscribed',
                type: 'success',
                confirmButtonText: 'OK'
            }).then(function (results) {
                if (results.value) {
                    _this._activatedRoute.params.subscribe(function (data) {
                        _this._router.navigate([data.name, _this.articlesSlug], { fragment: 'content-in-chapter' });
                    });
                }
            });
            this.isDisplay = !this.isDisplay;
        }
        else {
            this.validateAllFormFields(this.frmPopupNews);
        }
    };
    ChapterHeartContentGridMenuComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof forms_1.FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    return ChapterHeartContentGridMenuComponent;
}());
exports.ChapterHeartContentGridMenuComponent = ChapterHeartContentGridMenuComponent;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.css.shim.ngstyle.js":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.css.shim.ngstyle.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ngfactory.js":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ngfactory.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chapter-heart-content.component.css.shim.ngstyle */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ngfactory */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content-grid-menu/chapter-heart-content-grid-menu.component.ts");
var i4 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i7 = __webpack_require__(/*! ../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i8 = __webpack_require__(/*! ../../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var i9 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i10 = __webpack_require__(/*! ./chapter-heart-content.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ts");
var styles_ChapterHeartContentComponent = [i0.styles];
var RenderType_ChapterHeartContentComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChapterHeartContentComponent, data: {} });
exports.RenderType_ChapterHeartContentComponent = RenderType_ChapterHeartContentComponent;
function View_ChapterHeartContentComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "section", [["class", "body"], ["id", "content-child"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "app-chapter-heart-content-grid-menu", [["class", "height-menu"]], null, null, null, i2.View_ChapterHeartContentGridMenuComponent_0, i2.RenderType_ChapterHeartContentGridMenuComponent)), i1.ɵdid(3, 4308992, null, 0, i3.ChapterHeartContentGridMenuComponent, [i4.WINDOW, i4.LOCAL_STORAGE, i5.ActivatedRoute, i6.ArticleService, i7.ChapterService, i8.NewLetterService, i9.FormBuilder, i5.Router], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(6, 212992, null, 0, i5.RouterOutlet, [i5.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 3, 0); _ck(_v, 6, 0); }, null); }
exports.View_ChapterHeartContentComponent_0 = View_ChapterHeartContentComponent_0;
function View_ChapterHeartContentComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart-content", [], null, null, null, View_ChapterHeartContentComponent_0, RenderType_ChapterHeartContentComponent)), i1.ɵdid(1, 114688, null, 0, i10.ChapterHeartContentComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChapterHeartContentComponent_Host_0 = View_ChapterHeartContentComponent_Host_0;
var ChapterHeartContentComponentNgFactory = i1.ɵccf("app-chapter-heart-content", i10.ChapterHeartContentComponent, View_ChapterHeartContentComponent_Host_0, {}, {}, []);
exports.ChapterHeartContentComponentNgFactory = ChapterHeartContentComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ts ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ChapterHeartContentComponent = /** @class */ (function () {
    function ChapterHeartContentComponent() {
    }
    ChapterHeartContentComponent.prototype.ngOnInit = function () {
    };
    return ChapterHeartContentComponent;
}());
exports.ChapterHeartContentComponent = ChapterHeartContentComponent;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.css.shim.ngstyle.js":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.css.shim.ngstyle.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ngfactory.js":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ngfactory.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chapter-heart-image-title.component.css.shim.ngstyle */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./chapter-heart-image-title.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ts");
var i5 = __webpack_require__(/*! ../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i6 = __webpack_require__(/*! ../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var styles_ChapterHeartImageTitleComponent = [i0.styles];
var RenderType_ChapterHeartImageTitleComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChapterHeartImageTitleComponent, data: {} });
exports.RenderType_ChapterHeartImageTitleComponent = RenderType_ChapterHeartImageTitleComponent;
function View_ChapterHeartImageTitleComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "a", [["routerLinkActive", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "mouseover"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = ((_v.context.$implicit.id = false) !== false);
        ad = (pd_1 && ad);
    } if (("mouseleave" === en)) {
        var pd_2 = ((_v.context.$implicit.id = true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "color": 0, "background": 1 }), i1.ɵdid(3, 671744, [[2, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), i1.ɵdid(5, 1720320, [["rla", 4]], 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵeld(8, 0, null, null, 6, "li", [], null, null, null, null, null)), i1.ɵdid(9, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(10, { "color": 0, "background": 1 }), (_l()(), i1.ɵeld(11, 0, null, null, 3, "span", [], null, null, null, null, null)), i1.ɵdid(12, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(13, { "color": 0 }), (_l()(), i1.ɵted(14, null, ["", ""])), (_l()(), i1.ɵeld(15, 0, null, null, 2, "i", [["class", "fas fa-chevron-right"]], null, null, null, null, null)), i1.ɵdid(16, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(17, { "color": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, (i1.ɵnov(_v, 5).isActive ? "#fff" : ""), (i1.ɵnov(_v, 5).isActive ? _co.chapter.second_color : (_v.context.$implicit.id ? "" : _co.chapter.second_color))); _ck(_v, 1, 0, currVal_2); var currVal_3 = _ck(_v, 4, 0, "./", _v.context.$implicit.slug); _ck(_v, 3, 0, currVal_3); var currVal_4 = ""; _ck(_v, 5, 0, currVal_4); var currVal_5 = _ck(_v, 10, 0, (_v.context.$implicit.id ? _co.chapter.color : "#fff"), (_v.context.$implicit.id ? "" : _co.chapter.second_color)); _ck(_v, 9, 0, currVal_5); var currVal_6 = _ck(_v, 13, 0, (i1.ɵnov(_v, 5).isActive ? "#fff" : "")); _ck(_v, 12, 0, currVal_6); var currVal_8 = _ck(_v, 17, 0, (i1.ɵnov(_v, 5).isActive ? "#fff" : (_v.context.$implicit.id ? _co.chapter.color : ""))); _ck(_v, 16, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_7 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_7); }); }
function View_ChapterHeartImageTitleComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 28, "section", [["id", "image-title"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "background-image": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 25, "div", [["class", "title-img-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(6, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(7, { "color": 0 }), (_l()(), i1.ɵted(8, null, ["", ""])), (_l()(), i1.ɵeld(9, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(10, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(11, { "color": 0 }), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵeld(13, 0, null, null, 15, "div", [["id", "show-menu-in-chapter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 14, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 13, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 9, "div", [], null, null, null, null, null)), i1.ɵdid(17, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(18, { "background": 0 }), (_l()(), i1.ɵeld(19, 0, null, null, 3, "span", [], null, null, null, null, null)), i1.ɵdid(20, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(21, { "color": 0 }), (_l()(), i1.ɵted(-1, null, [" WHAT\u2019S IN THIS CHAPTER?"])), (_l()(), i1.ɵeld(23, 0, null, null, 2, "i", [["class", "fas fa-ellipsis-h"], ["id", "show-icon-menu-in-chapter"]], null, null, null, null, null)), i1.ɵdid(24, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(25, { "color": 0 }), (_l()(), i1.ɵeld(26, 0, null, null, 2, "ul", [["class", ""]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartImageTitleComponent_2)), i1.ɵdid(28, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (("url(" + _co.chapter.banner) + ")")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 7, 0, _co.chapter.color); _ck(_v, 6, 0, currVal_1); var currVal_3 = _ck(_v, 11, 0, _co.chapter.color); _ck(_v, 10, 0, currVal_3); var currVal_5 = _ck(_v, 18, 0, _co.chapter.third_color); _ck(_v, 17, 0, currVal_5); var currVal_6 = _ck(_v, 21, 0, _co.chapter.second_color); _ck(_v, 20, 0, currVal_6); var currVal_7 = _ck(_v, 25, 0, _co.chapter.second_color); _ck(_v, 24, 0, currVal_7); var currVal_8 = _co.article; _ck(_v, 28, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.chapter.chapter_name; _ck(_v, 8, 0, currVal_2); var currVal_4 = _co.chapter.chapter_info; _ck(_v, 12, 0, currVal_4); }); }
function View_ChapterHeartImageTitleComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChapterHeartImageTitleComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.chapter; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_ChapterHeartImageTitleComponent_0 = View_ChapterHeartImageTitleComponent_0;
function View_ChapterHeartImageTitleComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart-image-title", [], null, null, null, View_ChapterHeartImageTitleComponent_0, RenderType_ChapterHeartImageTitleComponent)), i1.ɵdid(1, 4308992, null, 0, i4.ChapterHeartImageTitleComponent, [i5.ChapterService, i3.ActivatedRoute, i6.ArticleService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChapterHeartImageTitleComponent_Host_0 = View_ChapterHeartImageTitleComponent_Host_0;
var ChapterHeartImageTitleComponentNgFactory = i1.ɵccf("app-chapter-heart-image-title", i4.ChapterHeartImageTitleComponent, View_ChapterHeartImageTitleComponent_Host_0, {}, {}, []);
exports.ChapterHeartImageTitleComponentNgFactory = ChapterHeartImageTitleComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ts ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var chapter_service_1 = __webpack_require__(/*! ./../../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var article_service_1 = __webpack_require__(/*! ./../../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var ChapterHeartImageTitleComponent = /** @class */ (function () {
    function ChapterHeartImageTitleComponent(_serviceChapter, _activatedRoute, _serviceAriticle) {
        this._serviceChapter = _serviceChapter;
        this._activatedRoute = _activatedRoute;
        this._serviceAriticle = _serviceAriticle;
        this.article = [];
    }
    ChapterHeartImageTitleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.doJquery();
        }, 1000);
    };
    ChapterHeartImageTitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = [];
        this._activatedRoute.params.subscribe(function (data) {
            _this.getChapter(data.name);
            jQuery('#show-menu-in-chapter > ul > li > ul').removeClass('add-display-flex');
        });
    };
    ChapterHeartImageTitleComponent.prototype.doJquery = function () {
        $(function () {
            jQuery(document).ready(function () {
                jQuery('#show-menu-in-chapter > ul > li > div > i').click(function () {
                    jQuery(this).closest('li').find('ul').toggleClass('add-display-flex');
                    jQuery("#show-menu-in-chapter > ul > li > div > i").toggleClass("fa-ellipsis-v fix-left-i");
                    jQuery('section#image-title').css('height', '100%');
                    jQuery('section#image-title').css('background-position', 'center top');
                    jQuery('#show-menu-in-chapter > ul > li > ul > a').click(function () {
                        jQuery('#show-menu-in-chapter > ul > li > div > i').closest('li').find('ul').removeClass('add-display-flex');
                        jQuery('section#image-title').css('height', '100%');
                        jQuery('section#image-title').css('background-position', 'center top');
                        jQuery('#show-menu-in-chapter').css('padding-bottom', '0px');
                    });
                });
            });
        });
    };
    ChapterHeartImageTitleComponent.prototype.getAllArticle = function (id) {
        var _this = this;
        this.article = [];
        this._serviceAriticle.getArticle().subscribe(function (data) {
            data.results.forEach(function (element) {
                if (element.chapter_id == id) {
                    _this.article.push(element);
                }
            });
        });
    };
    ChapterHeartImageTitleComponent.prototype.getChapter = function (name) {
        var _this = this;
        this._serviceChapter.getChapterByName(name).subscribe(function (data) {
            _this.chapter = data;
            _this.getAllArticle(data.id);
        });
    };
    return ChapterHeartImageTitleComponent;
}());
exports.ChapterHeartImageTitleComponent = ChapterHeartImageTitleComponent;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.css.shim.ngstyle.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.css.shim.ngstyle.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chapter-heart.component.css.shim.ngstyle */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./chapter-heart-image-title/chapter-heart-image-title.component.ngfactory */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./chapter-heart-image-title/chapter-heart-image-title.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-image-title/chapter-heart-image-title.component.ts");
var i4 = __webpack_require__(/*! ../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../../home/services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i7 = __webpack_require__(/*! ./chapter-heart-content/chapter-heart-content.component.ngfactory */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./chapter-heart-content/chapter-heart-content.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart-content/chapter-heart-content.component.ts");
var i9 = __webpack_require__(/*! ../../../../common/pipes/sharecomponent/explore-chapter.component.ngfactory */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ngfactory.js");
var i10 = __webpack_require__(/*! ../../../../common/pipes/sharecomponent/explore-chapter.component */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ts");
var i11 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i12 = __webpack_require__(/*! ./chapter-heart.component */ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ts");
var styles_ChapterHeartComponent = [i0.styles];
var RenderType_ChapterHeartComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChapterHeartComponent, data: {} });
exports.RenderType_ChapterHeartComponent = RenderType_ChapterHeartComponent;
function View_ChapterHeartComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart-image-title", [], null, null, null, i2.View_ChapterHeartImageTitleComponent_0, i2.RenderType_ChapterHeartImageTitleComponent)), i1.ɵdid(1, 4308992, null, 0, i3.ChapterHeartImageTitleComponent, [i4.ChapterService, i5.ActivatedRoute, i6.ArticleService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "app-chapter-heart-content", [], null, null, null, i7.View_ChapterHeartContentComponent_0, i7.RenderType_ChapterHeartContentComponent)), i1.ɵdid(3, 114688, null, 0, i8.ChapterHeartContentComponent, [], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-explore-chapter", [], null, null, null, i9.View_ExploreChapterComponent_0, i9.RenderType_ExploreChapterComponent)), i1.ɵdid(5, 114688, null, 0, i10.ExploreChapterComponent, [i11.WINDOW, i4.ChapterService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); }, null); }
exports.View_ChapterHeartComponent_0 = View_ChapterHeartComponent_0;
function View_ChapterHeartComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chapter-heart", [], null, null, null, View_ChapterHeartComponent_0, RenderType_ChapterHeartComponent)), i1.ɵdid(1, 4308992, null, 0, i12.ChapterHeartComponent, [i11.WINDOW, i5.ActivatedRoute, i4.ChapterService, i5.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChapterHeartComponent_Host_0 = View_ChapterHeartComponent_Host_0;
var ChapterHeartComponentNgFactory = i1.ɵccf("app-chapter-heart", i12.ChapterHeartComponent, View_ChapterHeartComponent_Host_0, {}, {}, []);
exports.ChapterHeartComponentNgFactory = ChapterHeartComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/chapter/chapter-heart/components/chapter-heart.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var chapter_service_1 = __webpack_require__(/*! ./../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var ChapterHeartComponent = /** @class */ (function () {
    function ChapterHeartComponent(window, activateRoute, serviceChapter, router) {
        this.window = window;
        this.activateRoute = activateRoute;
        this.serviceChapter = serviceChapter;
        this.router = router;
    }
    ChapterHeartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (data) {
            _this.serviceChapter.getChapter().subscribe(function (chapter) {
                chapter.results.forEach(function (element) {
                    if (element.chapter_name = data.name) {
                        _this.checkChapter = true;
                    }
                    else {
                        _this.checkChapter = false;
                    }
                });
            });
        });
        if (this.checkChapter == false) {
            this.router.navigate(['/page-not-found']);
        }
    };
    ChapterHeartComponent.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    return ChapterHeartComponent;
}());
exports.ChapterHeartComponent = ChapterHeartComponent;


/***/ }),

/***/ "./src/app/modules/contact/components/contact.component.css.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/contact/components/contact.component.css.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/contact/components/contact.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/modules/contact/components/contact.component.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contact.component.css.shim.ngstyle */ "./src/app/modules/contact/components/contact.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../../../common/pipes/sharecomponent/explore-chapter.component.ngfactory */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../../common/pipes/sharecomponent/explore-chapter.component */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! ../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i8 = __webpack_require__(/*! ./contact.component */ "./src/app/modules/contact/components/contact.component.ts");
var i9 = __webpack_require__(/*! ../services/contact.service */ "./src/app/modules/contact/services/contact.service.ts");
var i10 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_ContactComponent = [i0.styles];
var RenderType_ContactComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactComponent, data: {} });
exports.RenderType_ContactComponent = RenderType_ContactComponent;
function View_ContactComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Your Name fied is required "]))], null, null); }
function View_ContactComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Min length 5 character "]))], null, null); }
function View_ContactComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_ContactComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Special character "]))], null, null); }
function View_ContactComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_ContactComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_ContactComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, number format "]))], null, null); }
function View_ContactComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Required 10 number "]))], null, null); }
function View_ContactComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Required 10 number "]))], null, null); }
function View_ContactComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The comment fied is required "]))], null, null); }
function View_ContactComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Special character"]))], null, null); }
function View_ContactComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 109, "section", [["id", "contact"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 108, "div", [["class", "contact-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 33, "div", [["class", "contact-row__block1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 32, "div", [["class", "content-contact"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Us"])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "a", [["href", "http://www.hatchquarter.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [["alt", ""], ["class", "logo-contact-pc"], ["src", "./assets/images/images-home/logo2-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [["class", "contact-info"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["03 9078 0368"])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "p", [["class", "contact-info"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["reception@hatchquarter.com.au"])), (_l()(), i1.ɵeld(12, 0, null, null, 2, "p", [["class", "contact-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "a", [["href", "http://www.hatchquarter.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["www.hatchquarter.com.au"])), (_l()(), i1.ɵeld(15, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 5, "div", [["class", "action-socal"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/bg-icon-1.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 0, "i", [["class", "fab fa-facebook-f"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "a", [["href", "https://www.facebook.com/HatchQuarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 1, "span", [["class", "contact-socal"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["FACEBOOK"])), (_l()(), i1.ɵeld(22, 0, null, null, 5, "div", [["class", "action-socal"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/bg-icon-2.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "i", [["class", "fab fa-instagram"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 2, "a", [["href", "https://www.instagram.com/hatchquarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "span", [["class", "contact-socal"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["INSTAGRAM"])), (_l()(), i1.ɵeld(28, 0, null, null, 5, "div", [["class", "action-socal"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/bg-icon-3.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "i", [["class", "fab fa-twitter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 2, "a", [["href", "https://twitter.com/hatch_quarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 1, "span", [["class", "contact-socal"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TWITTER"])), (_l()(), i1.ɵeld(34, 0, null, null, 1, "a", [["class", "logo-contact-res"], ["href", "http://www.hatchquarter.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/logo2-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 73, "div", [["class", "contact-row__block2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 4, "div", [["class", "contact-row__block2__title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Questions? Comments? "])), (_l()(), i1.ɵeld(40, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Let us know your thoughts"])), (_l()(), i1.ɵeld(42, 0, null, null, 67, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 44).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 44).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitForm() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(43, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(44, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(46, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(47, 0, null, null, 60, "div", [["class", "contact-content-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your name "])), (_l()(), i1.ɵeld(50, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["*"])), (_l()(), i1.ɵeld(52, 0, null, null, 5, "input", [["formControlName", "name"], ["name", "your-name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 53)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 53).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 53)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 53)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(53, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(55, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(57, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_1)), i1.ɵdid(59, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_2)), i1.ɵdid(61, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_3)), i1.ɵdid(63, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_4)), i1.ɵdid(65, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(66, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your email "])), (_l()(), i1.ɵeld(68, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["*"])), (_l()(), i1.ɵeld(70, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "your-email"], ["placeholder", "john@email.com"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 71)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 71).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 71)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 71)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(71, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(73, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(75, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_5)), i1.ɵdid(77, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_6)), i1.ɵdid(79, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(80, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your phone number "])), (_l()(), i1.ɵeld(82, 0, null, null, 5, "input", [["formControlName", "phone_number"], ["name", "your-phone"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 83)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 83).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 83)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 83)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(83, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(85, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(87, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_7)), i1.ɵdid(89, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_8)), i1.ɵdid(91, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_9)), i1.ɵdid(93, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(94, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Let us know your comments below: "])), (_l()(), i1.ɵeld(96, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["*"])), (_l()(), i1.ɵeld(98, 0, null, null, 5, "textarea", [["formControlName", "comment"], ["name", "comment"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 99)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 99).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 99)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 99)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(99, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(101, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(103, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_10)), i1.ɵdid(105, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_11)), i1.ɵdid(107, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(108, 0, null, null, 1, "button", [["class", "button-contact-submit"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(110, 0, null, null, 1, "app-explore-chapter", [], null, null, null, i4.View_ExploreChapterComponent_0, i4.RenderType_ExploreChapterComponent)), i1.ɵdid(111, 114688, null, 0, i5.ExploreChapterComponent, [i6.WINDOW, i7.ChapterService], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.frmUser; _ck(_v, 44, 0, currVal_7); var currVal_15 = "name"; _ck(_v, 55, 0, currVal_15); var currVal_16 = (_co.frmUser.controls.name.dirty && ((_co.frmUser.controls.name.errors == null) ? null : _co.frmUser.controls.name.errors.required)); _ck(_v, 59, 0, currVal_16); var currVal_17 = (_co.frmUser.controls.name.dirty && ((_co.frmUser.controls.name.errors == null) ? null : _co.frmUser.controls.name.errors.minlength)); _ck(_v, 61, 0, currVal_17); var currVal_18 = (_co.frmUser.controls.name.dirty && ((_co.frmUser.controls.name.errors == null) ? null : _co.frmUser.controls.name.errors.maxlength)); _ck(_v, 63, 0, currVal_18); var currVal_19 = (_co.frmUser.controls.name.dirty && ((_co.frmUser.controls.name.errors == null) ? null : _co.frmUser.controls.name.errors.pattern)); _ck(_v, 65, 0, currVal_19); var currVal_27 = "email"; _ck(_v, 73, 0, currVal_27); var currVal_28 = (_co.frmUser.controls.email.dirty && ((_co.frmUser.controls.email.errors == null) ? null : _co.frmUser.controls.email.errors.required)); _ck(_v, 77, 0, currVal_28); var currVal_29 = (_co.frmUser.controls.email.dirty && ((_co.frmUser.controls.email.errors == null) ? null : _co.frmUser.controls.email.errors.pattern)); _ck(_v, 79, 0, currVal_29); var currVal_37 = "phone_number"; _ck(_v, 85, 0, currVal_37); var currVal_38 = (_co.frmUser.controls.phone_number.dirty && ((_co.frmUser.controls.phone_number.errors == null) ? null : _co.frmUser.controls.phone_number.errors.pattern)); _ck(_v, 89, 0, currVal_38); var currVal_39 = (_co.frmUser.controls.phone_number.dirty && ((_co.frmUser.controls.phone_number.errors == null) ? null : _co.frmUser.controls.phone_number.errors.minlength)); _ck(_v, 91, 0, currVal_39); var currVal_40 = (_co.frmUser.controls.phone_number.dirty && ((_co.frmUser.controls.phone_number.errors == null) ? null : _co.frmUser.controls.phone_number.errors.maxlength)); _ck(_v, 93, 0, currVal_40); var currVal_48 = "comment"; _ck(_v, 101, 0, currVal_48); var currVal_49 = (_co.frmUser.controls.comment.dirty && ((_co.frmUser.controls.comment.errors == null) ? null : _co.frmUser.controls.comment.errors.required)); _ck(_v, 105, 0, currVal_49); var currVal_50 = (_co.frmUser.controls.comment.dirty && ((_co.frmUser.controls.comment.errors == null) ? null : _co.frmUser.controls.comment.errors.pattern)); _ck(_v, 107, 0, currVal_50); _ck(_v, 111, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 46).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 46).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 46).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 46).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 46).ngClassValid; var currVal_5 = i1.ɵnov(_v, 46).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 46).ngClassPending; _ck(_v, 42, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 57).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 57).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 57).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 57).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 57).ngClassValid; var currVal_13 = i1.ɵnov(_v, 57).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 57).ngClassPending; _ck(_v, 52, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_20 = i1.ɵnov(_v, 75).ngClassUntouched; var currVal_21 = i1.ɵnov(_v, 75).ngClassTouched; var currVal_22 = i1.ɵnov(_v, 75).ngClassPristine; var currVal_23 = i1.ɵnov(_v, 75).ngClassDirty; var currVal_24 = i1.ɵnov(_v, 75).ngClassValid; var currVal_25 = i1.ɵnov(_v, 75).ngClassInvalid; var currVal_26 = i1.ɵnov(_v, 75).ngClassPending; _ck(_v, 70, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_30 = i1.ɵnov(_v, 87).ngClassUntouched; var currVal_31 = i1.ɵnov(_v, 87).ngClassTouched; var currVal_32 = i1.ɵnov(_v, 87).ngClassPristine; var currVal_33 = i1.ɵnov(_v, 87).ngClassDirty; var currVal_34 = i1.ɵnov(_v, 87).ngClassValid; var currVal_35 = i1.ɵnov(_v, 87).ngClassInvalid; var currVal_36 = i1.ɵnov(_v, 87).ngClassPending; _ck(_v, 82, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_41 = i1.ɵnov(_v, 103).ngClassUntouched; var currVal_42 = i1.ɵnov(_v, 103).ngClassTouched; var currVal_43 = i1.ɵnov(_v, 103).ngClassPristine; var currVal_44 = i1.ɵnov(_v, 103).ngClassDirty; var currVal_45 = i1.ɵnov(_v, 103).ngClassValid; var currVal_46 = i1.ɵnov(_v, 103).ngClassInvalid; var currVal_47 = i1.ɵnov(_v, 103).ngClassPending; _ck(_v, 98, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); }); }
exports.View_ContactComponent_0 = View_ContactComponent_0;
function View_ContactComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), i1.ɵdid(1, 4308992, null, 0, i8.ContactComponent, [i6.WINDOW, i2.FormBuilder, i9.ContactService, i10.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactComponent_Host_0 = View_ContactComponent_Host_0;
var ContactComponentNgFactory = i1.ɵccf("app-contact", i8.ContactComponent, View_ContactComponent_Host_0, {}, {}, []);
exports.ContactComponentNgFactory = ContactComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/contact/components/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/contact/components/contact.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var contact_service_1 = __webpack_require__(/*! ./../services/contact.service */ "./src/app/modules/contact/services/contact.service.ts");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(window, _formBuilder, _serviceContact, meta) {
        this.window = window;
        this._formBuilder = _formBuilder;
        this._serviceContact = _serviceContact;
        this.meta = meta;
        // const url = window.location.href;
        this.meta.updateTag({ property: 'og:title', content: 'Contact Us' });
        // this.meta.updateTag({ property: 'og:url', content: `${url}` });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        // this.meta.updateTag({ property: 'og:description', content: 'Let us know your thoughts...' });
        // this.meta.updateTag({ property: 'og:image', content: 'https://www.hatchquarter.com.au/assets/images/OG.jpg' });
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    ContactComponent.prototype.createForm = function () {
        this.frmUser = this._formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9 ]{1,}')
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]],
            phone_number: ['', [
                    forms_1.Validators.minLength(10),
                    forms_1.Validators.maxLength(10),
                    forms_1.Validators.pattern('[0-9]{1,}')
                ]],
            comment: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-z0-9 ]{1,}')
                ]],
        });
    };
    ContactComponent.prototype.onSubmitForm = function () {
        if (this.frmUser.valid) {
            this.contact = Object.assign({}, this.frmUser.value);
            //console.log(this.contact);
            this._serviceContact.addContact(this.contact).subscribe(function (data) { return data; });
            // console.log(this.contact)
            sweetalert2_1.default({
                title: 'Success',
                text: 'Contact Send !',
                type: 'success',
                confirmButtonText: 'OK'
            });
            this.frmUser.reset();
        }
        else {
            this.validateAllFormFields(this.frmUser);
        }
    };
    ContactComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof forms_1.FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/modules/contact/contact.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./contact.module */ "./src/app/modules/contact/contact.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./components/contact.component.ngfactory */ "./src/app/modules/contact/components/contact.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! ../../common/pipes/share-module.module */ "./src/app/common/pipes/share-module.module.ts");
var i8 = __webpack_require__(/*! ./components/contact.component */ "./src/app/modules/contact/components/contact.component.ts");
var ContactModuleNgFactory = i0.ɵcmf(i1.ContactModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.ContactComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.FormBuilder, i5.FormBuilder, []), i0.ɵmpd(4608, i5.ɵangular_packages_forms_forms_i, i5.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i6.RouterModule, i6.RouterModule, [[2, i6.ɵangular_packages_router_router_a], [2, i6.Router]]), i0.ɵmpd(1073742336, i5.ɵangular_packages_forms_forms_bb, i5.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i5.ReactiveFormsModule, i5.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i7.ShareModuleModule, i7.ShareModuleModule, []), i0.ɵmpd(1073742336, i1.ContactModule, i1.ContactModule, []), i0.ɵmpd(1024, i6.ROUTES, function () { return [[{ path: "", component: i8.ContactComponent, children: [] }]]; }, [])]); });
exports.ContactModuleNgFactory = ContactModuleNgFactory;


/***/ }),

/***/ "./src/app/modules/contact/contact.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var contact_component_1 = __webpack_require__(/*! ./components/contact.component */ "./src/app/modules/contact/components/contact.component.ts");
var routes = [
    {
        path: '',
        component: contact_component_1.ContactComponent,
        children: []
    }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
exports.ContactModule = ContactModule;


/***/ }),

/***/ "./src/app/modules/contact/services/contact.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/contact/services/contact.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var ContactService = /** @class */ (function () {
    function ContactService(_http) {
        this._http = _http;
        this.url = environment_1.environment.apiUrl;
        this.headers = this.setHeaders();
    }
    ContactService.prototype.setHeaders = function () {
        var header = new http_1.HttpHeaders();
        return header.set('Content-Type', 'application/json');
    };
    ContactService.prototype.addContact = function (contact) {
        var url = this.url + "/api/contact/";
        return this._http.post(url, contact, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return error; }));
    };
    ContactService.ngInjectableDef = i0.defineInjectable({ factory: function ContactService_Factory() { return new ContactService(i0.inject(i1.HttpClient)); }, token: ContactService, providedIn: "root" });
    return ContactService;
}());
exports.ContactService = ContactService;


/***/ }),

/***/ "./src/app/modules/footer/footer.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/modules/footer/footer.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/footer/footer.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./footer.component.css.shim.ngstyle */ "./src/app/modules/footer/footer.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./footer.component */ "./src/app/modules/footer/footer.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! ../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i8 = __webpack_require__(/*! ./services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var i9 = __webpack_require__(/*! ../navigation/services/send-mail.service */ "./src/app/modules/navigation/services/send-mail.service.ts");
var i10 = __webpack_require__(/*! @angular/http */ "@angular/http");
var styles_FooterComponent = [i0.styles];
var RenderType_FooterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FooterComponent, data: {} });
exports.RenderType_FooterComponent = RenderType_FooterComponent;
function View_FooterComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_FooterComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_FooterComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_FooterComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_FooterComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ENG"]))], null, null); }
function View_FooterComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ESP"]))], null, null); }
function View_FooterComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u4E2D\u6587"]))], null, null); }
function View_FooterComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u0939\u093F\u0902\u0926\u0940"]))], null, null); }
function View_FooterComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u0639\u0631\u0628\u0649"]))], null, null); }
function View_FooterComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "option", [], null, null, null, null, null)), i1.ɵdid(1, 147456, null, 0, i2.NgSelectOption, [i1.ElementRef, i1.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i1.ɵdid(2, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i1.ElementRef, i1.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_6)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_7)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_8)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_9)), i1.ɵdid(10, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_10)), i1.ɵdid(12, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.language, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.language, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = (_v.context.$implicit.language == "Eng"); _ck(_v, 4, 0, currVal_2); var currVal_3 = (_v.context.$implicit.language == "Esp"); _ck(_v, 6, 0, currVal_3); var currVal_4 = (_v.context.$implicit.language == "Chinese"); _ck(_v, 8, 0, currVal_4); var currVal_5 = (_v.context.$implicit.language == "Hindi"); _ck(_v, 10, 0, currVal_5); var currVal_6 = (_v.context.$implicit.language == "Arabic"); _ck(_v, 12, 0, currVal_6); }, null); }
function View_FooterComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The language fied is required "]))], null, null); }
function View_FooterComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The name fied is required "]))], null, null); }
function View_FooterComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Min length 1 character "]))], null, null); }
function View_FooterComponent_14(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_FooterComponent_15(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct name format "]))], null, null); }
function View_FooterComponent_16(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_FooterComponent_17(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_FooterComponent_18(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_FooterComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 154, "footer", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 24, "div", [["class", "container-footer-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 23, "div", [["class", " footer-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 20, "div", [["class", "footer-1__select-language"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dowload your FREE Startup Playbook now in your preferred language:"])), (_l()(), i1.ɵeld(6, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [["class", "click-language"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getValueLanguage("Eng") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["ENG"])), (_l()(), i1.ɵeld(10, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getValueLanguage("Esp") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["ESP"])), (_l()(), i1.ɵeld(13, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "p", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getValueLanguage("Chinese") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["\u4E2D\u6587"])), (_l()(), i1.ɵeld(16, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "p", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getValueLanguage("Hindi") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["\u0939\u093F\u0902\u0926\u0940"])), (_l()(), i1.ɵeld(19, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 1, "p", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getValueLanguage("Arabic") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["\u0639\u0631\u0628\u0649"])), (_l()(), i1.ɵeld(22, 0, null, null, 1, "a", [["onclick", "openModel();"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DOWNLOAD"])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "div", [["class", "footer-1__image-language"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/startup-quarter-download-playbook.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 125, "div", [["class", "container-footer-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 124, "div", [["class", "footer-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 123, "div", [["class", "footer-menu-email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 19, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 31).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 31).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormSendLetter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(30, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(31, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(33, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(34, 0, null, null, 14, "div", [["class", "email-footer-res"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sign up to receive Hatch Quarter\u2019s newsletter"])), (_l()(), i1.ɵeld(37, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["placeholder", "Your  Email  Address"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 38)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 38).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 38)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 38)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(38, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(40, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(42, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_1)), i1.ɵdid(44, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_2)), i1.ɵdid(46, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(47, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SIGN UP"])), (_l()(), i1.ɵeld(49, 0, null, null, 58, "div", [["class", "menu-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 24, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(53, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(54, 2), (_l()(), i1.ɵted(-1, null, ["THE PLAYBOOK"])), (_l()(), i1.ɵeld(56, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 2, "a", [["routerLink", "/get-to-know-victoria"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 58).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(58, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["GET TO KNOW VICTORIA"])), (_l()(), i1.ɵeld(60, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 62).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(62, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(63, 1), (_l()(), i1.ɵted(-1, null, ["ENTREPRENEURS STORIES"])), (_l()(), i1.ɵeld(65, 0, null, null, 2, "li", [["class", "menu-ft"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["HATCH QUARTER"])), (_l()(), i1.ɵeld(68, 0, null, null, 3, "li", [["class", "menu-ft"]], null, null, null, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 2, "a", [["routerLink", "/contact-us"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 70).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(70, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["CONTACT US"])), (_l()(), i1.ɵeld(72, 0, null, null, 2, "li", [["class", "menu-ft"]], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/terms"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TERMS & CONDITIONS"])), (_l()(), i1.ɵeld(75, 0, null, null, 10, "ul", [["class", "ul-2-ft"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["HATCH QUARTER"])), (_l()(), i1.ɵeld(79, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 2, "a", [["routerLink", "/contact-us"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 81).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(81, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["CONTACT US"])), (_l()(), i1.ɵeld(83, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/terms"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TERMS & CONDITIONS"])), (_l()(), i1.ɵeld(86, 0, null, null, 21, "ul", [["class", "ul-3-ft"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 5, "a", [["href", "https://www.facebook.com/HatchQuarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 4, "div", [["class", "icon-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/bg-icon-ft.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 0, "i", [["class", "fab fa-facebook-f"]], null, null, null, null, null)), (_l()(), i1.ɵeld(92, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["FACEBOOK"])), (_l()(), i1.ɵeld(94, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 5, "a", [["href", "https://www.instagram.com/hatchquarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(96, 0, null, null, 4, "div", [["class", "icon-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(97, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/bg-icon-ft.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 0, "i", [["class", "fab fa-instagram"]], null, null, null, null, null)), (_l()(), i1.ɵeld(99, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["INSTAGRAM"])), (_l()(), i1.ɵeld(101, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 5, "a", [["href", "https://twitter.com/hatch_quarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(103, 0, null, null, 4, "div", [["class", "icon-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(104, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/bg-icon-ft.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 0, "i", [["class", "fab fa-twitter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TWITTER"])), (_l()(), i1.ɵeld(108, 0, null, null, 43, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 110).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 110).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormSendLetter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(109, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(110, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(112, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(113, 0, null, null, 10, "div", [["class", "email-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sign up to receive Hatch Quarter\u2019s newsletter"])), (_l()(), i1.ɵeld(116, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["placeholder", "Your  Email  Address"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 117)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 117).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 117)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 117)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(117, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(119, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(121, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(122, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SIGN UP"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_3)), i1.ɵdid(125, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_4)), i1.ɵdid(127, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(128, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Follow us on social media"])), (_l()(), i1.ɵeld(130, 0, null, null, 21, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(131, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(132, 0, null, null, 5, "a", [["href", "https://www.facebook.com/HatchQuarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(133, 0, null, null, 4, "div", [["class", "icon-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/bg-icon-ft.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(135, 0, null, null, 0, "i", [["class", "fab fa-facebook-f"]], null, null, null, null, null)), (_l()(), i1.ɵeld(136, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Facebook"])), (_l()(), i1.ɵeld(138, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(139, 0, null, null, 5, "a", [["href", "https://www.instagram.com/hatchquarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(140, 0, null, null, 4, "div", [["class", "icon-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(141, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/bg-icon-ft.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, null, null, 0, "i", [["class", "fab fa-instagram"]], null, null, null, null, null)), (_l()(), i1.ɵeld(143, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Instagram"])), (_l()(), i1.ɵeld(145, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(146, 0, null, null, 5, "a", [["href", "https://twitter.com/hatch_quarter/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(147, 0, null, null, 4, "div", [["class", "icon-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(148, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/bg-icon-ft.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(149, 0, null, null, 0, "i", [["class", "fab fa-twitter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(150, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Twitter"])), (_l()(), i1.ɵeld(152, 0, null, null, 2, "div", [["class", "copy-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(153, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00A9 Copyright 2018 - Hatch Quarter"])), (_l()(), i1.ɵeld(155, 0, null, null, 63, "div", [["class", "modal"], ["id", "myModal"]], null, null, null, null, null)), i1.ɵdid(156, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(157, { "display": 0 }), (_l()(), i1.ɵeld(158, 0, null, null, 60, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(159, 0, null, null, 2, "div", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(160, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dowload your FREE Startup Playbook now in your preferred language: "])), (_l()(), i1.ɵeld(162, 0, null, null, 56, "div", [["class", "enter-email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 55, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 165).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 165).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormSendEmail() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(164, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(165, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]), i1.ɵdid(167, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(168, 0, null, null, 45, "div", [["class", "container-form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(169, 0, null, null, 43, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(170, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Select language version"])), (_l()(), i1.ɵeld(172, 0, null, null, 8, "label", [["class", "custom-select"], ["for", "styledSelect1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(173, 0, null, null, 7, "select", [["formControlName", "language"], ["id", "styledSelect1"], ["name", "language"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (i1.ɵnov(_v, 174).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 174).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedValue = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(174, 16384, null, 0, i2.SelectControlValueAccessor, [i1.Renderer2, i1.ElementRef], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SelectControlValueAccessor]), i1.ɵdid(176, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(178, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_5)), i1.ɵdid(180, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_11)), i1.ɵdid(182, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(183, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(185, 0, null, null, 5, "input", [["formControlName", "name"], ["name", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 186)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 186).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 186)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 186)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(186, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(188, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(190, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_12)), i1.ɵdid(192, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_13)), i1.ɵdid(194, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_14)), i1.ɵdid(196, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_15)), i1.ɵdid(198, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(199, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-mail address"])), (_l()(), i1.ɵeld(201, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 202)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 202).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 202)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 202)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(202, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(204, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR], [2, i2.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(206, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_16)), i1.ɵdid(208, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_17)), i1.ɵdid(210, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_18)), i1.ɵdid(212, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(213, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/download-popup-update.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(214, 0, null, null, 4, "div", [["class", "group-btn-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(215, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(217, 0, null, null, 1, "button", [["id", "close-btn-download"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CANCEL"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.frmSendEmail; _ck(_v, 31, 0, currVal_7); var currVal_15 = "email"; _ck(_v, 40, 0, currVal_15); var currVal_16 = (_co.frmSendEmail.controls.email.dirty && ((_co.frmSendEmail.controls.email.errors == null) ? null : _co.frmSendEmail.controls.email.errors.required)); _ck(_v, 44, 0, currVal_16); var currVal_17 = (_co.frmSendEmail.controls.email.dirty && ((_co.frmSendEmail.controls.email.errors == null) ? null : _co.frmSendEmail.controls.email.errors.pattern)); _ck(_v, 46, 0, currVal_17); var currVal_20 = _ck(_v, 54, 0, "/", _co.fristChapter); _ck(_v, 53, 0, currVal_20); var currVal_23 = "/get-to-know-victoria"; _ck(_v, 58, 0, currVal_23); var currVal_26 = _ck(_v, 63, 0, "/entrepreneurs-stories"); _ck(_v, 62, 0, currVal_26); var currVal_29 = "/contact-us"; _ck(_v, 70, 0, currVal_29); var currVal_32 = "/contact-us"; _ck(_v, 81, 0, currVal_32); var currVal_40 = _co.frmSendEmail; _ck(_v, 110, 0, currVal_40); var currVal_48 = "email"; _ck(_v, 119, 0, currVal_48); var currVal_49 = (_co.frmSendEmail.controls.email.dirty && ((_co.frmSendEmail.controls.email.errors == null) ? null : _co.frmSendEmail.controls.email.errors.required)); _ck(_v, 125, 0, currVal_49); var currVal_50 = (_co.frmSendEmail.controls.email.dirty && ((_co.frmSendEmail.controls.email.errors == null) ? null : _co.frmSendEmail.controls.email.errors.pattern)); _ck(_v, 127, 0, currVal_50); var currVal_51 = _ck(_v, 157, 0, (_co.displayE ? "none" : "")); _ck(_v, 156, 0, currVal_51); var currVal_59 = _co.frmSendEmailPopup; _ck(_v, 165, 0, currVal_59); var currVal_67 = "language"; var currVal_68 = _co.selectedValue; _ck(_v, 176, 0, currVal_67, currVal_68); var currVal_69 = _co.listLangage; _ck(_v, 180, 0, currVal_69); var currVal_70 = (_co.frmSendEmailPopup.controls.language.dirty && ((_co.frmSendEmailPopup.controls.language.errors == null) ? null : _co.frmSendEmailPopup.controls.language.errors.required)); _ck(_v, 182, 0, currVal_70); var currVal_78 = "name"; _ck(_v, 188, 0, currVal_78); var currVal_79 = (_co.frmSendEmailPopup.controls.name.dirty && ((_co.frmSendEmailPopup.controls.name.errors == null) ? null : _co.frmSendEmailPopup.controls.name.errors.required)); _ck(_v, 192, 0, currVal_79); var currVal_80 = (_co.frmSendEmailPopup.controls.name.dirty && ((_co.frmSendEmailPopup.controls.name.errors == null) ? null : _co.frmSendEmailPopup.controls.name.errors.minlength)); _ck(_v, 194, 0, currVal_80); var currVal_81 = (_co.frmSendEmailPopup.controls.name.dirty && ((_co.frmSendEmailPopup.controls.name.errors == null) ? null : _co.frmSendEmailPopup.controls.name.errors.maxlength)); _ck(_v, 196, 0, currVal_81); var currVal_82 = (_co.frmSendEmailPopup.controls.name.dirty && ((_co.frmSendEmailPopup.controls.name.errors == null) ? null : _co.frmSendEmailPopup.controls.name.errors.pattern)); _ck(_v, 198, 0, currVal_82); var currVal_90 = "email"; _ck(_v, 204, 0, currVal_90); var currVal_91 = (_co.frmSendEmailPopup.controls.email.dirty && ((_co.frmSendEmailPopup.controls.email.errors == null) ? null : _co.frmSendEmailPopup.controls.email.errors.required)); _ck(_v, 208, 0, currVal_91); var currVal_92 = (_co.frmSendEmailPopup.controls.email.dirty && ((_co.frmSendEmailPopup.controls.email.errors == null) ? null : _co.frmSendEmailPopup.controls.email.errors.maxlength)); _ck(_v, 210, 0, currVal_92); var currVal_93 = (_co.frmSendEmailPopup.controls.email.dirty && ((_co.frmSendEmailPopup.controls.email.errors == null) ? null : _co.frmSendEmailPopup.controls.email.errors.pattern)); _ck(_v, 212, 0, currVal_93); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 33).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 33).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 33).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 33).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 33).ngClassValid; var currVal_5 = i1.ɵnov(_v, 33).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 33).ngClassPending; _ck(_v, 29, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 42).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 42).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 42).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 42).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 42).ngClassValid; var currVal_13 = i1.ɵnov(_v, 42).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 42).ngClassPending; _ck(_v, 37, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = i1.ɵnov(_v, 53).target; var currVal_19 = i1.ɵnov(_v, 53).href; _ck(_v, 52, 0, currVal_18, currVal_19); var currVal_21 = i1.ɵnov(_v, 58).target; var currVal_22 = i1.ɵnov(_v, 58).href; _ck(_v, 57, 0, currVal_21, currVal_22); var currVal_24 = i1.ɵnov(_v, 62).target; var currVal_25 = i1.ɵnov(_v, 62).href; _ck(_v, 61, 0, currVal_24, currVal_25); var currVal_27 = i1.ɵnov(_v, 70).target; var currVal_28 = i1.ɵnov(_v, 70).href; _ck(_v, 69, 0, currVal_27, currVal_28); var currVal_30 = i1.ɵnov(_v, 81).target; var currVal_31 = i1.ɵnov(_v, 81).href; _ck(_v, 80, 0, currVal_30, currVal_31); var currVal_33 = i1.ɵnov(_v, 112).ngClassUntouched; var currVal_34 = i1.ɵnov(_v, 112).ngClassTouched; var currVal_35 = i1.ɵnov(_v, 112).ngClassPristine; var currVal_36 = i1.ɵnov(_v, 112).ngClassDirty; var currVal_37 = i1.ɵnov(_v, 112).ngClassValid; var currVal_38 = i1.ɵnov(_v, 112).ngClassInvalid; var currVal_39 = i1.ɵnov(_v, 112).ngClassPending; _ck(_v, 108, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_41 = i1.ɵnov(_v, 121).ngClassUntouched; var currVal_42 = i1.ɵnov(_v, 121).ngClassTouched; var currVal_43 = i1.ɵnov(_v, 121).ngClassPristine; var currVal_44 = i1.ɵnov(_v, 121).ngClassDirty; var currVal_45 = i1.ɵnov(_v, 121).ngClassValid; var currVal_46 = i1.ɵnov(_v, 121).ngClassInvalid; var currVal_47 = i1.ɵnov(_v, 121).ngClassPending; _ck(_v, 116, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_52 = i1.ɵnov(_v, 167).ngClassUntouched; var currVal_53 = i1.ɵnov(_v, 167).ngClassTouched; var currVal_54 = i1.ɵnov(_v, 167).ngClassPristine; var currVal_55 = i1.ɵnov(_v, 167).ngClassDirty; var currVal_56 = i1.ɵnov(_v, 167).ngClassValid; var currVal_57 = i1.ɵnov(_v, 167).ngClassInvalid; var currVal_58 = i1.ɵnov(_v, 167).ngClassPending; _ck(_v, 163, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58); var currVal_60 = i1.ɵnov(_v, 178).ngClassUntouched; var currVal_61 = i1.ɵnov(_v, 178).ngClassTouched; var currVal_62 = i1.ɵnov(_v, 178).ngClassPristine; var currVal_63 = i1.ɵnov(_v, 178).ngClassDirty; var currVal_64 = i1.ɵnov(_v, 178).ngClassValid; var currVal_65 = i1.ɵnov(_v, 178).ngClassInvalid; var currVal_66 = i1.ɵnov(_v, 178).ngClassPending; _ck(_v, 173, 0, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66); var currVal_71 = i1.ɵnov(_v, 190).ngClassUntouched; var currVal_72 = i1.ɵnov(_v, 190).ngClassTouched; var currVal_73 = i1.ɵnov(_v, 190).ngClassPristine; var currVal_74 = i1.ɵnov(_v, 190).ngClassDirty; var currVal_75 = i1.ɵnov(_v, 190).ngClassValid; var currVal_76 = i1.ɵnov(_v, 190).ngClassInvalid; var currVal_77 = i1.ɵnov(_v, 190).ngClassPending; _ck(_v, 185, 0, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77); var currVal_83 = i1.ɵnov(_v, 206).ngClassUntouched; var currVal_84 = i1.ɵnov(_v, 206).ngClassTouched; var currVal_85 = i1.ɵnov(_v, 206).ngClassPristine; var currVal_86 = i1.ɵnov(_v, 206).ngClassDirty; var currVal_87 = i1.ɵnov(_v, 206).ngClassValid; var currVal_88 = i1.ɵnov(_v, 206).ngClassInvalid; var currVal_89 = i1.ɵnov(_v, 206).ngClassPending; _ck(_v, 201, 0, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89); }); }
exports.View_FooterComponent_0 = View_FooterComponent_0;
function View_FooterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), i1.ɵdid(1, 114688, null, 0, i5.FooterComponent, [i6.WINDOW, i7.ChapterService, i8.NewLetterService, i9.SendMailService, i2.FormBuilder, i10.Http], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FooterComponent_Host_0 = View_FooterComponent_Host_0;
var FooterComponentNgFactory = i1.ɵccf("app-footer", i5.FooterComponent, View_FooterComponent_Host_0, {}, {}, []);
exports.FooterComponentNgFactory = FooterComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var chapter_service_1 = __webpack_require__(/*! ../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var new_letter_service_1 = __webpack_require__(/*! ./services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var send_mail_service_1 = __webpack_require__(/*! ./../navigation/services/send-mail.service */ "./src/app/modules/navigation/services/send-mail.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var FooterComponent = /** @class */ (function () {
    // languageOb : Object = [
    //   {
    //     language : 'Eng'
    //   }
    // ];
    function FooterComponent(window, _serviceChapter, _serviceNewLetter, _serviceSendMail, _formBuilder, http) {
        this.window = window;
        this._serviceChapter = _serviceChapter;
        this._serviceNewLetter = _serviceNewLetter;
        this._serviceSendMail = _serviceSendMail;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.chapter = [];
        this.listLangage = [];
        this.displayE = false;
        this.selectedValue = 'Eng';
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllChapter();
        this.createForm();
        this.createFormPopup();
        this._serviceSendMail.listLanguage().subscribe(function (data) {
            // console.log(data);
            _this.listLangage = data;
        });
        this.window.scrollTo(0, 0);
        this.hoverLanguage();
    };
    FooterComponent.prototype.getAllChapter = function () {
        var _this = this;
        this._serviceChapter.getChapter().subscribe(function (data) {
            _this.chapter = data.results;
            _this.fristChapter = data.results[0].slug;
            _this.fristArticle = data.results[0].articles[0].slug;
        });
    };
    FooterComponent.prototype.createForm = function () {
        this.frmSendEmail = this._formBuilder.group({
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]],
        });
    };
    FooterComponent.prototype.onSubmitFormSendLetter = function () {
        if (this.frmSendEmail.valid) {
            console.log(this.frmSendEmail.value);
            this._serviceNewLetter.sendNewLetter(this.frmSendEmail.value).subscribe(function (data) { return console.log(data); });
            this.frmSendEmail.reset();
            sweetalert2_1.default({
                title: 'Subscribed',
                type: 'success',
                confirmButtonText: 'OK'
            });
        }
        else {
            this.validateAllFormFields(this.frmSendEmail);
        }
    };
    FooterComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof forms_1.FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    FooterComponent.prototype.getValueLanguage = function (valueLang) {
        this.selectedValue = valueLang;
    };
    // downloadLanguage(){
    //   //console.log(this.languageOb[0]);
    //   this._serviceNewLetter.downloadNow(this.languageOb[0]).subscribe(
    //     data=>{
    //       //console.log(data.message);
    //       if (data.message != "NO_FILE") {
    //         this.downloadFile(data.message);
    //       } else {
    //         swal({
    //           title: 'Warning',
    //           text: 'No file available, please try again later !',
    //           type: 'warning',
    //           confirmButtonText: 'OK'
    //         })
    //       }
    //     });
    // }
    // downloadFile(urldownload: string) {
    //   return this.http
    //     .get(urldownload, {
    //       responseType: ResponseContentType.Blob
    //     })
    //     .pipe(
    //       map(res => {
    //         return {
    //           filename: 'playbook.pdf',
    //           data: res.blob()
    //         };
    //       })
    //     )
    //     .subscribe(res => {
    //       // console.log('start download:',res);
    //     }, error => {
    //       // console.log('download error:', JSON.stringify(error));
    //     }, () => {
    //       // console.log('Completed file download.')
    //     });
    // }
    FooterComponent.prototype.scrollArticle = function () {
        this.window.scrollTo(0, 0);
    };
    FooterComponent.prototype.hoverLanguage = function () {
        setTimeout(function () {
            $(document).ready(function () {
                $('.footer-1__select-language > ul > li > p').hover(function () {
                    $(this).addClass('hover-language');
                    $(this).click(function () {
                        $('.footer-1__select-language > ul > li > p').removeClass('click-language');
                        $(this).addClass('click-language');
                    });
                }, function () {
                    $(this).removeClass('hover-language');
                });
            });
        }, 1000);
    };
    //--------------------------DOWNLOAD
    FooterComponent.prototype.createFormPopup = function () {
        this.frmSendEmailPopup = this._formBuilder.group({
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]],
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z ]{1,}')
                ]],
            language: ['', [
                    forms_1.Validators.required
                ]],
        });
    };
    FooterComponent.prototype.onSubmitFormSendEmail = function () {
        var _this = this;
        if (this.frmSendEmailPopup.valid) {
            //console.log(this.frmSendEmail.value);
            this._serviceSendMail.sendMail(this.frmSendEmailPopup.value).subscribe(function (data) {
                //console.log(data.message);
                if (data.message != "NO_FILE") {
                    sweetalert2_1.default({
                        title: 'Success',
                        text: 'Please, check your email !',
                        type: 'success',
                        confirmButtonText: 'OK'
                    });
                    _this.downloadFilePopup(data.message);
                }
                else {
                    sweetalert2_1.default({
                        title: 'Warning',
                        text: 'No file available, please try again later !',
                        type: 'warning',
                        confirmButtonText: 'OK'
                    });
                }
            });
            this.displayE = !this.displayE;
            this.frmSendEmailPopup.reset();
        }
        else {
            this.validateAllFormFields(this.frmSendEmailPopup);
        }
    };
    FooterComponent.prototype.downloadFilePopup = function (urldownload) {
        return this.http
            .get(urldownload, {
            responseType: http_1.ResponseContentType.Blob
        })
            .pipe(operators_1.map(function (res) {
            return {
                filename: 'playbook.pdf',
                data: res.blob()
            };
        }))
            .subscribe(function (res) {
            // console.log('start download:',res);
        }, function (error) {
            // console.log('download error:', JSON.stringify(error));
        }, function () {
            // console.log('Completed file download.')
        });
    };
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/modules/footer/services/new-letter.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/footer/services/new-letter.service.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var NewLetterService = /** @class */ (function () {
    function NewLetterService(_http) {
        this._http = _http;
        this.url = environment_1.environment.apiUrl;
        this.headers = this.setHeaders();
    }
    NewLetterService.prototype.setHeaders = function () {
        var header = new http_1.HttpHeaders();
        return header.set('Content-Type', 'application/json');
    };
    NewLetterService.prototype.sendNewLetter = function (email) {
        var url = this.url + "/api/user/sign-up/";
        return this._http.post(url, email, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return error; }));
    };
    NewLetterService.prototype.downloadNow = function (language) {
        var url = this.url + "/api/user/download-file/";
        return this._http.post(url, language, { headers: this.headers });
    };
    NewLetterService.ngInjectableDef = i0.defineInjectable({ factory: function NewLetterService_Factory() { return new NewLetterService(i0.inject(i1.HttpClient)); }, token: NewLetterService, providedIn: "root" });
    return NewLetterService;
}());
exports.NewLetterService = NewLetterService;


/***/ }),

/***/ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.css.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.css.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./get-to-know-vic.component.css.shim.ngstyle */ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../common/pipes/sharecomponent/explore-chapter.component.ngfactory */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../../common/pipes/sharecomponent/explore-chapter.component */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ts");
var i4 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i5 = __webpack_require__(/*! ../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i6 = __webpack_require__(/*! ./get-to-know-vic.component */ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ts");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_GetToKnowVicComponent = [i0.styles];
var RenderType_GetToKnowVicComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_GetToKnowVicComponent, data: {} });
exports.RenderType_GetToKnowVicComponent = RenderType_GetToKnowVicComponent;
function View_GetToKnowVicComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 857, "section", [["id", "img-map"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "content-all"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [["class", "content-all__heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get to know Victoria"])), (_l()(), i1.ɵeld(4, 0, null, null, 3, "p", [["class", "content-all__sub-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Starting out as an international entrepreneur? "])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You\u2019re not as alone as you think"])), (_l()(), i1.ɵeld(8, 0, null, null, 24, "div", [["class", "body-government"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [["data-aos", "fade-down"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["GOVERNMENT BODIES TO KNOW ABOUT"])), (_l()(), i1.ɵeld(11, 0, null, null, 10, "div", [["class", "body-government-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 9, "div", [["class", "logo-3-body-government"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "a", [["href", "https://www.australia.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "./assets/images/images-home/au-go.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["href", "https://www.innovation.gov.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-left"], ["src", "./assets/images/images-home/inter-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "./assets/images/images-home/business-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 1, "a", [["href", "https://www.australiaunlimited.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-right"], ["src", "./assets/images/images-home/australia-unlimited.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 10, "div", [["class", "body-government-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 9, "div", [["class", "logo-3-body-government color-government-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 1, "a", [["href", "https://www.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "./assets/images/images-home/vic-gov.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "a", [["href", "http://www.invest.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-left"], ["src", "./assets/images/images-home/invest-vic.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "a", [["href", "http://www.business.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "./assets/images/images-home/small-buss.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "a", [["href", "https://launchvic.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-right"], ["src", "./assets/images/images-home/LaunchVic.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 65, "div", [["class", "content-menu-display"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 1, "p", [["data-aos", "fade-down"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["THE STARTUP ECOSYSTEM IN VICTORIA"])), (_l()(), i1.ɵeld(36, 0, null, null, 62, "div", [["class", "menu-display"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 30, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "a", [["href", "#Federal"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Federal Government"])), (_l()(), i1.ɵeld(41, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "a", [["href", "#Victorian"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Victorian State Government"])), (_l()(), i1.ɵeld(44, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 1, "a", [["href", "#Local"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Local Councils"])), (_l()(), i1.ɵeld(47, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 1, "a", [["href", "#Meetups"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Meetups"])), (_l()(), i1.ɵeld(50, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "a", [["href", "#StartupEvents"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Events"])), (_l()(), i1.ɵeld(53, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "a", [["href", "#OnlineForums"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Online Forums"])), (_l()(), i1.ɵeld(56, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "a", [["href", "#Coworkingspaces"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Coworking Spaces"])), (_l()(), i1.ɵeld(59, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 1, "a", [["href", "#Accelerators"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Accelerators & Incubators"])), (_l()(), i1.ɵeld(62, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 1, "a", [["href", "#AngelInvestors"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angel Investors Groups"])), (_l()(), i1.ɵeld(65, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 1, "a", [["href", "#VentureCapitals"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Venture Capitals"])), (_l()(), i1.ɵeld(68, 0, null, null, 30, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 1, "a", [["href", "#GrantSupport"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Grants Support Services"])), (_l()(), i1.ɵeld(72, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 1, "a", [["href", "#Crowdfunding"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Crowdfunding"])), (_l()(), i1.ɵeld(75, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 1, "a", [["href", "#AustralianBusiness"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Australian Business Laws"])), (_l()(), i1.ɵeld(78, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 1, "a", [["href", "#StartupReports"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Reports"])), (_l()(), i1.ɵeld(81, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 1, "a", [["href", "#LocalResearchTools"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Local Research Tools"])), (_l()(), i1.ɵeld(84, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 1, "a", [["href", "#OnlineTools"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Online Tools"])), (_l()(), i1.ɵeld(87, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 1, "a", [["href", "#ProfessionalServiceProviders"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Professional Service Providers"])), (_l()(), i1.ɵeld(90, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 1, "a", [["href", "#Newsletters"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Newsletters"])), (_l()(), i1.ɵeld(93, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 1, "a", [["href", "#InternshipExperience"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Internship & Experience"])), (_l()(), i1.ɵeld(96, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(97, 0, null, null, 1, "a", [["href", "#TrainingEducation"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Training & Education Courses"])), (_l()(), i1.ɵeld(99, 0, null, null, 62, "div", [["class", "menu-left-mini"]], null, null, null, null, null)), (_l()(), i1.ɵeld(100, 0, null, null, 0, "i", [["class", "fas fa-chevron-right"], ["id", "arrow-show-content-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 60, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(103, 0, null, null, 1, "a", [["href", "#Federal"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Federal Government"])), (_l()(), i1.ɵeld(105, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 1, "a", [["href", "#Victorian"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Victorian State Government"])), (_l()(), i1.ɵeld(108, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(109, 0, null, null, 1, "a", [["href", "#Local"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Local Councils"])), (_l()(), i1.ɵeld(111, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(112, 0, null, null, 1, "a", [["href", "#Meetups"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Meetups"])), (_l()(), i1.ɵeld(114, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(115, 0, null, null, 1, "a", [["href", "#StartupEvents"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Events"])), (_l()(), i1.ɵeld(117, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 1, "a", [["href", "#OnlineForums"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Online Forums"])), (_l()(), i1.ɵeld(120, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(121, 0, null, null, 1, "a", [["href", "#Coworkingspaces"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Coworking Spaces"])), (_l()(), i1.ɵeld(123, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(124, 0, null, null, 1, "a", [["href", "#Accelerators"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Accelerators & Incubators"])), (_l()(), i1.ɵeld(126, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(127, 0, null, null, 1, "a", [["href", "#AngelInvestors"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angel Investors Groups"])), (_l()(), i1.ɵeld(129, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(130, 0, null, null, 1, "a", [["href", "#VentureCapitals"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Venture Capitals"])), (_l()(), i1.ɵeld(132, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(133, 0, null, null, 1, "a", [["href", "#GrantSupport"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Grants Support Services"])), (_l()(), i1.ɵeld(135, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(136, 0, null, null, 1, "a", [["href", "#Crowdfunding"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Crowdfunding"])), (_l()(), i1.ɵeld(138, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(139, 0, null, null, 1, "a", [["href", "#AustralianBusiness"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Australian Business Laws"])), (_l()(), i1.ɵeld(141, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, null, null, 1, "a", [["href", "#StartupReports"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Reports"])), (_l()(), i1.ɵeld(144, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(145, 0, null, null, 1, "a", [["href", "#LocalResearchTools"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Local Research Tools"])), (_l()(), i1.ɵeld(147, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(148, 0, null, null, 1, "a", [["href", "#OnlineTools"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Online Tools"])), (_l()(), i1.ɵeld(150, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(151, 0, null, null, 1, "a", [["href", "#ProfessionalServiceProviders"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Professional Service Providers"])), (_l()(), i1.ɵeld(153, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(154, 0, null, null, 1, "a", [["href", "#Newsletters"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Newsletters"])), (_l()(), i1.ɵeld(156, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(157, 0, null, null, 1, "a", [["href", "#InternshipExperience"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Internship & Experience"])), (_l()(), i1.ɵeld(159, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(160, 0, null, null, 1, "a", [["href", "#TrainingEducation"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Training & Education Courses"])), (_l()(), i1.ɵeld(162, 0, null, null, 695, "div", [["class", "content-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 90, "div", [["class", "body-img"], ["id", "show-menu-mini"]], null, null, null, null, null)), (_l()(), i1.ɵeld(164, 0, null, null, 2, "div", [["class", "content-img-text img-bg-goverment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(165, 0, null, null, 1, "p", [["class", "btn-blur"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" GOVERNMENT "])), (_l()(), i1.ɵeld(167, 0, null, null, 28, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Federal"]], null, null, null, null, null)), (_l()(), i1.ɵeld(168, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(169, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Federal Government "])), (_l()(), i1.ɵeld(171, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(172, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Federal Government run a number of initiatives to encourage innovation and entrepreneurship in Australia. The following programs are all viable ways to attain some extra support for your business or startup."])), (_l()(), i1.ɵeld(174, 0, null, null, 19, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(175, 0, null, null, 18, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(176, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(177, 0, null, null, 1, "a", [["href", "https://www.austrade.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Austrade Landing Pad"])), (_l()(), i1.ɵeld(179, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(180, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/assistance/entrepreneurs-programme"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Entrepreneurs Programme"])), (_l()(), i1.ɵeld(182, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(183, 0, null, null, 1, "a", [["href", "https://www.australiaunlimited.com/LandingPads/apply-now"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Australia Unlimited"])), (_l()(), i1.ɵeld(185, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(186, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/assistance/research-and-development-tax-incentive"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Research & Development Tax Incentive"])), (_l()(), i1.ɵeld(188, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(189, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/Assistance/Entrepreneurs-Programme/Business-Growth-Grants"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Business Growth Grants"])), (_l()(), i1.ɵeld(191, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(192, 0, null, null, 1, "a", [["href", "https://www.innovation.gov.au/audience/startups-and-entrepreneurs"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startups and Entrepreneurs"])), (_l()(), i1.ɵeld(194, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(196, 0, null, null, 25, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Victorian"]], null, null, null, null, null)), (_l()(), i1.ɵeld(197, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(198, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Victorian Government "])), (_l()(), i1.ɵeld(200, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(201, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Victorian State Government also runs a range of programs that offer support to local startups and provide assistance where needed. Below is a list of grant opportunities that we believe can be considerably valuable to new businesses. "])), (_l()(), i1.ɵeld(203, 0, null, null, 16, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(204, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(205, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(206, 0, null, null, 1, "a", [["href", "http://www.business.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Business Victoria"])), (_l()(), i1.ɵeld(208, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(209, 0, null, null, 1, "a", [["href", "https://www.vic.gov.au/equality/initiatives.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Initiatives Victoria"])), (_l()(), i1.ɵeld(211, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(212, 0, null, null, 1, "a", [["href", "https://www.consumer.vic.gov.au/licensing-and-registration"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Consumer Affairs Victoria"])), (_l()(), i1.ɵeld(214, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(215, 0, null, null, 1, "a", [["href", "https://launchvic.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LaunchVic"])), (_l()(), i1.ɵeld(217, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(218, 0, null, null, 1, "a", [["href", "http://www.invest.vic.gov.au/how-we-can-help/planning/incentives-grants-and-programs"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Invest Victoria"])), (_l()(), i1.ɵeld(220, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(222, 0, null, null, 31, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Local"]], null, null, null, null, null)), (_l()(), i1.ɵeld(223, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(224, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Local Councils "])), (_l()(), i1.ɵeld(226, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(227, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Another option to receive additional support or funding for your startup is through your local council. Listed below is a number of council startup programs \u2014 if your local council is not listed here, head to their website to find out more details."])), (_l()(), i1.ɵeld(229, 0, null, null, 22, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(230, 0, null, null, 21, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(231, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(232, 0, null, null, 1, "a", [["href", "http://www.darebin.vic.gov.au/Building-and-Business/Business-in-Darebin/Business-Events-and-Support"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["City of Darebin"])), (_l()(), i1.ɵeld(234, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(235, 0, null, null, 1, "a", [["href", "http://greatershepparton.com.au/business/starting-a-business"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Greater Shepparton City Council"])), (_l()(), i1.ɵeld(237, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(238, 0, null, null, 1, "a", [["href", "https://www.hume.vic.gov.au/Business_amp_Major_Projects/Business_Events"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hume City Council"])), (_l()(), i1.ɵeld(240, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(241, 0, null, null, 1, "a", [["href", "http://www.kingston.vic.gov.au/Kingston-Business"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kingston City Council"])), (_l()(), i1.ɵeld(243, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(244, 0, null, null, 1, "a", [["href", "http://www.melbourne.vic.gov.au/SiteCollectionDocuments/startup-action-plan.pdf"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["City of Melbourne"])), (_l()(), i1.ɵeld(246, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(247, 0, null, null, 1, "a", [["href", "https://www.warrnambool.vic.gov.au/business-workshops"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Warrnambool City Council"])), (_l()(), i1.ɵeld(249, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(250, 0, null, null, 1, "a", [["href", "https://www.yarracity.vic.gov.au/about-us/grants"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Yarra City Council"])), (_l()(), i1.ɵeld(252, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(254, 0, null, null, 184, "div", [["class", "body-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(255, 0, null, null, 2, "div", [["class", "content-img-text img-bg-nextwork"]], null, null, null, null, null)), (_l()(), i1.ɵeld(256, 0, null, null, 1, "p", [["class", "btn-blur"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NETWORKS "])), (_l()(), i1.ɵeld(258, 0, null, null, 37, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Meetups"]], null, null, null, null, null)), (_l()(), i1.ɵeld(259, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(260, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Meetups "])), (_l()(), i1.ɵeld(262, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(263, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Meetup is an online space that believes in bringing people together and creating thriving communities. There\u2019s an extensive list of Meetups in Victoria that promote networking and shared support, and below are a few you might want to join."])), (_l()(), i1.ɵeld(265, 0, null, null, 28, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(266, 0, null, null, 27, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(267, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(268, 0, null, null, 1, "a", [["href", "https://www.meetup.com/The-Entrepreneur-Club-Melbourne/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Entrepreneur Club Melbourne"])), (_l()(), i1.ɵeld(270, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(271, 0, null, null, 1, "a", [["href", "https://www.meetup.com/Entrepreneurship-and-Innovation-Hub/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Entrepreneurship and Innovation Hub"])), (_l()(), i1.ɵeld(273, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(274, 0, null, null, 1, "a", [["href", "https://www.meetup.com/Free-Speed-Networking-Melbourne/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Free Speed Networking"])), (_l()(), i1.ɵeld(276, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(277, 0, null, null, 1, "a", [["href", "https://www.meetup.com/IEAgroup/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["International Entrepreneurs in Australia"])), (_l()(), i1.ɵeld(279, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(280, 0, null, null, 1, "a", [["href", "https://www.meetup.com/melbourne-entrepreneurs/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Melbourne Entrepreneurs"])), (_l()(), i1.ɵeld(282, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(283, 0, null, null, 1, "a", [["href", "https://www.meetup.com/Melbourne-FinTech-Startups-Meetup/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Melbourne FinTech Startups Meetup"])), (_l()(), i1.ɵeld(285, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(286, 0, null, null, 1, "a", [["href", "https://www.meetup.com/Melbourne-Silicon-Beach/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Melbourne Silicon Beach"])), (_l()(), i1.ɵeld(288, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(289, 0, null, null, 1, "a", [["href", "https://www.meetup.com/Melbourne-Startup-Founder-101/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Melbourne Startup Founder 101"])), (_l()(), i1.ɵeld(291, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(292, 0, null, null, 1, "a", [["href", "https://www.meetup.com/StartupVictoria/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Victoria's Meetup"])), (_l()(), i1.ɵeld(294, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(296, 0, null, null, 19, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "StartupEvents"]], null, null, null, null, null)), (_l()(), i1.ɵeld(297, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(298, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Startup Events "])), (_l()(), i1.ɵeld(300, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(301, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Victoria runs a number of leading creative business events where entrepreneurs from around the world come to share ideas and encourage innovation. We\u2019d recommend attending some of the following events, as they a great opportunities to meet like-minded people and develop your own ideas."])), (_l()(), i1.ɵeld(303, 0, null, null, 10, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(304, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(305, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(306, 0, null, null, 1, "a", [["href", "https://www.aboveallhuman.co"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Above All Human"])), (_l()(), i1.ɵeld(308, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(309, 0, null, null, 1, "a", [["href", "http://www.pausefest.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Pause Fest"])), (_l()(), i1.ɵeld(311, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(312, 0, null, null, 1, "a", [["href", "http://yeahnah.melbourne"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Yeah Nah"])), (_l()(), i1.ɵeld(314, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(316, 0, null, null, 16, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "OnlineForums"]], null, null, null, null, null)), (_l()(), i1.ɵeld(317, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(318, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Online Forums "])), (_l()(), i1.ɵeld(320, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(321, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["There\u2019s a range of forums that aim to bring like-minded innovators and entrepreneurs together in an online working environment. These platforms are a great opportunity to network and connect with others, and provide a constructive space to collaborate and develop your ideas."])), (_l()(), i1.ɵeld(323, 0, null, null, 7, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(324, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(325, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(326, 0, null, null, 1, "a", [["href", "https://startupvictoria.slack.com/messages/DBDLZSYF6/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LaunchVic slack"])), (_l()(), i1.ɵeld(328, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(329, 0, null, null, 1, "a", [["href", "https://startup-victoria.typeform.com/to/qo53Ly"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Victoria Slack "])), (_l()(), i1.ɵeld(331, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(333, 0, null, null, 105, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Coworkingspaces"]], null, null, null, null, null)), (_l()(), i1.ɵeld(334, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(335, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Co-working spaces "])), (_l()(), i1.ɵeld(337, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(338, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["There\u2019s a range of forums that aim to bring like-minded innovators and entrepreneurs together in an online working environment. These platforms are a great opportunity to network and connect with others, and provide a constructive space to collaborate and develop your ideas."])), (_l()(), i1.ɵeld(340, 0, null, null, 96, "div", [["class", "menu-list-hover-in-vic-for-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(341, 0, null, null, 74, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(342, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Metropolitan "])), (_l()(), i1.ɵeld(344, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(345, 0, null, null, 1, "a", [["href", "http://www.blankcanvascoworking.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Black Canvas Coworking"])), (_l()(), i1.ɵeld(347, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(348, 0, null, null, 1, "a", [["href", "http://www.blixspaces.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Blix Spaces"])), (_l()(), i1.ɵeld(350, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(351, 0, null, null, 1, "a", [["href", "http://www.cobrew.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CoBrew"])), (_l()(), i1.ɵeld(353, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(354, 0, null, null, 1, "a", [["href", "http://www.cobrew.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dimension 5"])), (_l()(), i1.ɵeld(356, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(357, 0, null, null, 1, "a", [["href", "http://exchangeworkspaces.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Exchange Workspace"])), (_l()(), i1.ɵeld(359, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(360, 0, null, null, 1, "a", [["href", "http://www.framework.melbourne"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Framework"])), (_l()(), i1.ɵeld(362, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(363, 0, null, null, 1, "a", [["href", "http://gravityworkspace.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Gravity"])), (_l()(), i1.ɵeld(365, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(366, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hatch Quarter"])), (_l()(), i1.ɵeld(368, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(369, 0, null, null, 1, "a", [["href", "https://hivestudio.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hive Studio"])), (_l()(), i1.ɵeld(371, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(372, 0, null, null, 1, "a", [["href", "http://www.honourablesociety.co"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Honourable Society"])), (_l()(), i1.ɵeld(374, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(375, 0, null, null, 1, "a", [["href", "https://www.hubaustralia.com/locations/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hub Southern Cross"])), (_l()(), i1.ɵeld(377, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(378, 0, null, null, 1, "a", [["href", "https://indepstudios.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Independent Studios"])), (_l()(), i1.ɵeld(380, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(381, 0, null, null, 1, "a", [["href", "https://inspire9.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Inspire9"])), (_l()(), i1.ɵeld(383, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(384, 0, null, null, 1, "a", [["href", "http://www.launchpadcentre.com/main/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Launch Pad"])), (_l()(), i1.ɵeld(386, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(387, 0, null, null, 1, "a", [["href", "http://myceliumstudios.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mycelium Studios"])), (_l()(), i1.ɵeld(389, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(390, 0, null, null, 1, "a", [["href", "https://officeours.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["OfficeOurs"])), (_l()(), i1.ɵeld(392, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(393, 0, null, null, 1, "a", [["href", "http://melbourne.oneroofwomen.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["One Roof Melbourne (Female-centric Coworking Space)"])), (_l()(), i1.ɵeld(395, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(396, 0, null, null, 1, "a", [["href", "https://www.spacesworks.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Spaces"])), (_l()(), i1.ɵeld(398, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(399, 0, null, null, 1, "a", [["href", "https://twitter.com/thearcademelb?lang=en"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Arcade"])), (_l()(), i1.ɵeld(401, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(402, 0, null, null, 1, "a", [["href", "https://www.thecluster.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Cluster"])), (_l()(), i1.ɵeld(404, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(405, 0, null, null, 1, "a", [["href", "https://thecommons.io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Commons"])), (_l()(), i1.ɵeld(407, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(408, 0, null, null, 1, "a", [["href", "https://twospace.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TwoSpace"])), (_l()(), i1.ɵeld(410, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(411, 0, null, null, 1, "a", [["href", "https://www.wework.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["WeWork"])), (_l()(), i1.ɵeld(413, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(414, 0, null, null, 1, "a", [["href", "http://yorkbutterfactory.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["York Butter Factory"])), (_l()(), i1.ɵeld(416, 0, null, null, 20, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(417, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Regional"])), (_l()(), i1.ɵeld(419, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(420, 0, null, null, 1, "a", [["href", "https://auspost.com.au/business/business-admin/work-from-small-business-hive"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["AusPost Small Business Hive"])), (_l()(), i1.ɵeld(422, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(423, 0, null, null, 1, "a", [["href", "http://www.cohoots.info"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Cohoots Coworking"])), (_l()(), i1.ɵeld(425, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(426, 0, null, null, 1, "a", [["href", "http://www.kynetonbusinesshub.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kyneton Business Hub"])), (_l()(), i1.ɵeld(428, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(429, 0, null, null, 1, "a", [["href", "http://www.creativespaces.net.au/find-a-space/mallee-rising-1"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mallee Rising"])), (_l()(), i1.ɵeld(431, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(432, 0, null, null, 1, "a", [["href", "https://www.impactworkshop.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Impact Workshop"])), (_l()(), i1.ɵeld(434, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(435, 0, null, null, 1, "a", [["href", "https://apply.frankstonfoundry.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Frankston Foundry"])), (_l()(), i1.ɵeld(437, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(439, 0, null, null, 139, "div", [["class", "body-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(440, 0, null, null, 2, "div", [["class", "content-img-text img-bg-funding"]], null, null, null, null, null)), (_l()(), i1.ɵeld(441, 0, null, null, 1, "p", [["class", "btn-blur"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" FUNDING "])), (_l()(), i1.ɵeld(443, 0, null, null, 43, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Accelerators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(444, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(445, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Accelerators and Incubators "])), (_l()(), i1.ɵeld(447, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(448, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Accelerator programs are often a great chance to build your startup knowledge and develop your own skillset. Incubators have a similar goal, although aim to help startups develop into sustainable projects that attract investment and growth. Incubators and accelerators come in different forms, values, and target audiences, such as finance, agriculture, food, and even the arts. Here are a list of startups and entrepreneurs to get to know your environment a little more. "])), (_l()(), i1.ɵeld(450, 0, null, null, 34, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(451, 0, null, null, 33, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(452, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(453, 0, null, null, 1, "a", [["href", "http://angelcube.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["AngelCube"])), (_l()(), i1.ɵeld(455, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(456, 0, null, null, 1, "a", [["href", "http://auspicious.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Auspicious Arts"])), (_l()(), i1.ɵeld(458, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(459, 0, null, null, 1, "a", [["href", "http://www.cultov8.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Cultov8 pre accelerator"])), (_l()(), i1.ɵeld(461, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(462, 0, null, null, 1, "a", [["href", "http://freetofeed.org.au/nowtolaunch/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Free to feed - Food accelerator"])), (_l()(), i1.ɵeld(464, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(465, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hatch Quarter"])), (_l()(), i1.ɵeld(467, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(468, 0, null, null, 1, "a", [["href", "http://themap.co"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Melbourne Accelerator Program (MAP)"])), (_l()(), i1.ɵeld(470, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(471, 0, null, null, 1, "a", [["href", "http://www.mktplaceventures.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mktplace Ventures"])), (_l()(), i1.ɵeld(473, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(474, 0, null, null, 1, "a", [["href", "https://www.sbcv.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Small Business Centres Victoria"])), (_l()(), i1.ɵeld(476, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(477, 0, null, null, 1, "a", [["href", "http://www.stcaustralia.org"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Small Technologies Cluster"])), (_l()(), i1.ɵeld(479, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(480, 0, null, null, 1, "a", [["href", "https://startmate.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startmate"])), (_l()(), i1.ɵeld(482, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(483, 0, null, null, 1, "a", [["href", "https://www.ygap-firstgens.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ygap first gens accelerator"])), (_l()(), i1.ɵeld(485, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(487, 0, null, null, 19, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "AngelInvestors"]], null, null, null, null, null)), (_l()(), i1.ɵeld(488, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(489, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Angel Investor Groups "])), (_l()(), i1.ɵeld(491, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(492, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Receiving support and funding from an Angel Investor can give your startup a powerful boost. Here\u2019s a list of prominent and reputable Angel Investors based in Australia."])), (_l()(), i1.ɵeld(494, 0, null, null, 10, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(495, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(496, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(497, 0, null, null, 1, "a", [["href", "https://www.australianinvestmentnetwork.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angel Investment Network"])), (_l()(), i1.ɵeld(499, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(500, 0, null, null, 1, "a", [["href", "https://angel.co/melbourne/investors"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["AngelList"])), (_l()(), i1.ɵeld(502, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(503, 0, null, null, 1, "a", [["href", "http://melbourneangels.net"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Melbourne Angels"])), (_l()(), i1.ɵeld(505, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(507, 0, null, null, 25, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "VentureCapitals"]], null, null, null, null, null)), (_l()(), i1.ɵeld(508, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(509, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Venture Capitals "])), (_l()(), i1.ɵeld(511, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(512, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["VC is a form of financing that is provided by firms to early-stage startups that are proven to have high growth potential. The typical venture capital investment occurs after an initial \u201Cseed funding\u201D round, and will invest between 2 - 15 million tickets. Here a list to get you started during the growth stage of your startup."])), (_l()(), i1.ɵeld(514, 0, null, null, 16, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(515, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(516, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(517, 0, null, null, 1, "a", [["href", "http://www.brandoncapital.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Brandon Capital Partners"])), (_l()(), i1.ɵeld(519, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(520, 0, null, null, 1, "a", [["href", "http://rampersand.vc"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Rampersand"])), (_l()(), i1.ɵeld(522, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(523, 0, null, null, 1, "a", [["href", "https://www.squarepegcap.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Square Peg Capital"])), (_l()(), i1.ɵeld(525, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(526, 0, null, null, 1, "a", [["href", "https://www.trimantium.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Trimantium"])), (_l()(), i1.ɵeld(528, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(529, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/Assistance/Venture-Capital/Venture-Capital-Limited-Partnerships"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Venture Capital Limited Partnerships (VCLP)"])), (_l()(), i1.ɵeld(531, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(533, 0, null, null, 22, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "GrantSupport"]], null, null, null, null, null)), (_l()(), i1.ɵeld(534, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(535, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Grant Support Services "])), (_l()(), i1.ɵeld(537, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(538, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The following websites provide comprehensive databases of available Australian grants, as well as support to help with the application process. With access to thousands of programs with billions of dollars available, they are an important tool to help your startup receive funding."])), (_l()(), i1.ɵeld(540, 0, null, null, 13, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(541, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(542, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(543, 0, null, null, 1, "a", [["href", "https://www.bulletpoint.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bulletpoint"])), (_l()(), i1.ɵeld(545, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(546, 0, null, null, 1, "a", [["href", "www.grantguru.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Grant Guru"])), (_l()(), i1.ɵeld(548, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(549, 0, null, null, 1, "a", [["href", "https://grantready.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Grant Ready"])), (_l()(), i1.ɵeld(551, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(552, 0, null, null, 1, "a", [["href", "https://www.vic.gov.au/grants/business.html?type=grants"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Grants Victoria"])), (_l()(), i1.ɵeld(554, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(556, 0, null, null, 22, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Crowdfunding"]], null, null, null, null, null)), (_l()(), i1.ɵeld(557, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(558, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Crowdfunding "])), (_l()(), i1.ɵeld(560, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(561, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Crowdfunding is a popular fundraising route for many aspiring startups, especially in the early stages of their startup journey. "])), (_l()(), i1.ɵeld(563, 0, null, null, 13, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(564, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(565, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(566, 0, null, null, 1, "a", [["href", "https://www.birchal.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Birchal"])), (_l()(), i1.ɵeld(568, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(569, 0, null, null, 1, "a", [["href", "https://au.gofundme.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Go Fund Me"])), (_l()(), i1.ɵeld(571, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(572, 0, null, null, 1, "a", [["href", "https://www.kickstarter.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kickstarter"])), (_l()(), i1.ɵeld(574, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(575, 0, null, null, 1, "a", [["href", "https://pozible.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Pozible"])), (_l()(), i1.ɵeld(577, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(579, 0, null, null, 213, "div", [["class", "body-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(580, 0, null, null, 2, "div", [["class", "content-img-text img-bg-resources"]], null, null, null, null, null)), (_l()(), i1.ɵeld(581, 0, null, null, 1, "p", [["class", "btn-blur"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" RESOURCES "])), (_l()(), i1.ɵeld(583, 0, null, null, 25, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "AustralianBusiness"]], null, null, null, null, null)), (_l()(), i1.ɵeld(584, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(585, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Australian Business Laws "])), (_l()(), i1.ɵeld(587, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(588, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["When starting your business venture, there are various fair trading laws that you would need to take note of, depending on the product or service you offer. Fair trading laws ensure your business operates fairly and competitively and that you inform and protect your customers. "])), (_l()(), i1.ɵeld(590, 0, null, null, 16, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(591, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(592, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(593, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/info/run/fair-trading/pricing-regulations"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Pricing Regulations"])), (_l()(), i1.ɵeld(595, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(596, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/info/run/goods-and-services/selling-goods-and-services/selling-goods/product-labelling"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Product Labelling"])), (_l()(), i1.ɵeld(598, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(599, 0, null, null, 1, "a", [["href", "https://www.oaic.gov.au/privacy-law/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Privacy Law"])), (_l()(), i1.ɵeld(601, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(602, 0, null, null, 1, "a", [["href", "http://www8.austlii.edu.au/cgi-bin/viewdb/au/legis/cth/consol_act/ca2001172/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Corporations Act"])), (_l()(), i1.ɵeld(604, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(605, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/info/run/intellectual-property"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Intellectual Property"])), (_l()(), i1.ɵeld(607, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(609, 0, null, null, 19, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "StartupReports"]], null, null, null, null, null)), (_l()(), i1.ɵeld(610, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(611, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Startup Reports "])), (_l()(), i1.ɵeld(613, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(614, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Not unlike our playbook, the following resources are guides to help new entrepreneurs develop their startup and ensure the Australian startup industry can flourish as a mecca for innovation."])), (_l()(), i1.ɵeld(616, 0, null, null, 10, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(617, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(618, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(619, 0, null, null, 1, "a", [["href", "https://launchvic.org/files/LV-StartupGuide.pdf"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LaunchVic x KPMG Startup Guide (includes startup checklist and investment & funding guide)"])), (_l()(), i1.ɵeld(621, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(622, 0, null, null, 1, "a", [["href", "https://startupaus.org"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["StartupAus"])), (_l()(), i1.ɵeld(624, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(625, 0, null, null, 1, "a", [["href", "https://www.startupmuster.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Muster"])), (_l()(), i1.ɵeld(627, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(629, 0, null, null, 16, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "LocalResearchTools"]], null, null, null, null, null)), (_l()(), i1.ɵeld(630, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(631, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Local Research Tools "])), (_l()(), i1.ɵeld(633, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(634, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The following resources provide in-depth summaries of the local startup industry and the growing market. "])), (_l()(), i1.ɵeld(636, 0, null, null, 7, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(637, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(638, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(639, 0, null, null, 1, "a", [["href", "http://www.abs.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Australian Bureau of Statistics"])), (_l()(), i1.ɵeld(641, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(642, 0, null, null, 1, "a", [["href", "https://www.innovation.gov.au/audience/startups-and-entrepreneurs"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["National Innovation and Science Agenda"])), (_l()(), i1.ɵeld(644, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(646, 0, null, null, 85, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "OnlineTools"]], null, null, null, null, null)), (_l()(), i1.ɵeld(647, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(648, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Online Tools "])), (_l()(), i1.ɵeld(650, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(651, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The following list is a collection of tools that can help you throughout your startup journey, from creating a resume, to managing your team through to setting up your own website\u2014and anything in between! "])), (_l()(), i1.ɵeld(653, 0, null, null, 76, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(654, 0, null, null, 75, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(655, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(656, 0, null, null, 1, "a", [["href", "https://99designs.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["99Designs"])), (_l()(), i1.ɵeld(658, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(659, 0, null, null, 1, "a", [["href", "https://surveys.enalyzer.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enalyzer"])), (_l()(), i1.ɵeld(661, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(662, 0, null, null, 1, "a", [["href", "https://evernote.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Evernote"])), (_l()(), i1.ɵeld(664, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(665, 0, null, null, 1, "a", [["href", "https://www.fiverr.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Fiverr"])), (_l()(), i1.ɵeld(667, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(668, 0, null, null, 1, "a", [["href", "https://www.godaddy.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["GoDaddy"])), (_l()(), i1.ɵeld(670, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(671, 0, null, null, 1, "a", [["href", "https://www.google.com.au/drive/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Google Drive"])), (_l()(), i1.ɵeld(673, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(674, 0, null, null, 1, "a", [["href", "https://hangouts.google.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Google Hangouts"])), (_l()(), i1.ɵeld(676, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(677, 0, null, null, 1, "a", [["href", "https://www.grammarly.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Grammarly"])), (_l()(), i1.ɵeld(679, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(680, 0, null, null, 1, "a", [["href", "https://www.hubspot.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hubspot"])), (_l()(), i1.ɵeld(682, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(683, 0, null, null, 1, "a", [["href", "https://marvelapp.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Marvel"])), (_l()(), i1.ɵeld(685, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(686, 0, null, null, 1, "a", [["href", "https://mockflow.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["MockFlow"])), (_l()(), i1.ɵeld(688, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(689, 0, null, null, 1, "a", [["href", "https://www.moo.com/au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Moo"])), (_l()(), i1.ɵeld(691, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(692, 0, null, null, 1, "a", [["href", "https://www.resumonk.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Resumonk"])), (_l()(), i1.ɵeld(694, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(695, 0, null, null, 1, "a", [["href", "https://www.skype.com/en/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Skype"])), (_l()(), i1.ɵeld(697, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(698, 0, null, null, 1, "a", [["href", "http://speedlancer.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Speedlancer"])), (_l()(), i1.ɵeld(700, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(701, 0, null, null, 1, "a", [["href", "https://www.squarespace.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SquareSpace"])), (_l()(), i1.ɵeld(703, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(704, 0, null, null, 1, "a", [["href", "https://www.strikingly.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Strikingly"])), (_l()(), i1.ɵeld(706, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(707, 0, null, null, 1, "a", [["href", "https://www.surveyhero.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Survey Hero"])), (_l()(), i1.ɵeld(709, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(710, 0, null, null, 1, "a", [["href", "https://www.surveymonkey.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Survey Monkey"])), (_l()(), i1.ɵeld(712, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(713, 0, null, null, 1, "a", [["href", "https://www.typeform.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Typeform"])), (_l()(), i1.ɵeld(715, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(716, 0, null, null, 1, "a", [["href", "https://www.upwork.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Upwork"])), (_l()(), i1.ɵeld(718, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(719, 0, null, null, 1, "a", [["href", "https://validately.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Validately"])), (_l()(), i1.ɵeld(721, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(722, 0, null, null, 1, "a", [["href", "https://www.vistaprint.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Vistaprint"])), (_l()(), i1.ɵeld(724, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(725, 0, null, null, 1, "a", [["href", "www.wix.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wix"])), (_l()(), i1.ɵeld(727, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(728, 0, null, null, 1, "a", [["href", "https://www.zoho.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Zoho"])), (_l()(), i1.ɵeld(730, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(732, 0, null, null, 31, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "ProfessionalServiceProviders"]], null, null, null, null, null)), (_l()(), i1.ɵeld(733, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(734, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Professional Service Providers "])), (_l()(), i1.ɵeld(736, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(737, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["As Victoria\u2019s startup community grows, there has also been a number of law and accounting firms popping up who\u2019s main service is to support new businesses. The following list highlights a number of local groups that offer professional services to support your startup."])), (_l()(), i1.ɵeld(739, 0, null, null, 22, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(740, 0, null, null, 21, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(741, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(742, 0, null, null, 1, "a", [["href", "http://burchcolawyers.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Burch and Co"])), (_l()(), i1.ɵeld(744, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(745, 0, null, null, 1, "a", [["href", "http://generalstandards.co"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["General Standards"])), (_l()(), i1.ɵeld(747, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(748, 0, null, null, 1, "a", [["href", "https://www.lawsquared.co"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Law Squared"])), (_l()(), i1.ɵeld(750, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(751, 0, null, null, 1, "a", [["href", "http://www.primefinancial.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Prime Financial"])), (_l()(), i1.ɵeld(753, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(754, 0, null, null, 1, "a", [["href", "https://standardledger.co"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Standard Ledger"])), (_l()(), i1.ɵeld(756, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(757, 0, null, null, 1, "a", [["href", "https://www.wrays.com.au/insights/a-guide-to-managing-intellectual-property/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wrays IP Protection Specialists "])), (_l()(), i1.ɵeld(759, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(760, 0, null, null, 1, "a", [["href", "https://thriverefugeeenterprise.org.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Thrive Refugee Enterprise"])), (_l()(), i1.ɵeld(762, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(764, 0, null, null, 28, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "Newsletters"]], null, null, null, null, null)), (_l()(), i1.ɵeld(765, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(766, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Newsletters "])), (_l()(), i1.ɵeld(768, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(769, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Keep up to date with all the latest startup news from Victoria and Australia by subscribing to these newsletters. "])), (_l()(), i1.ɵeld(771, 0, null, null, 19, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(772, 0, null, null, 18, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(773, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(774, 0, null, null, 1, "a", [["href", "http://www.business.vic.gov.au/subscribe-to-newsletters"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Business Victoria"])), (_l()(), i1.ɵeld(776, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(777, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/subscribe"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hatch Quarter"])), (_l()(), i1.ɵeld(779, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(780, 0, null, null, 1, "a", [["href", "https://us13.campaign-archive.com/home/?u=dd3e5c6121920a7b3aee8ad5b&id=babf0928cc"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Laneways by LaunchVic"])), (_l()(), i1.ɵeld(782, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(783, 0, null, null, 1, "a", [["href", "https://startupaus.org/our-research/newsletter-archive/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["StartupAus"])), (_l()(), i1.ɵeld(785, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(786, 0, null, null, 1, "a", [["href", "http://www.startupsoda.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Soda"])), (_l()(), i1.ɵeld(788, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(789, 0, null, null, 1, "a", [["href", "https://confirmsubscription.com/h/i/B8A88C0D883FE667"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Startup Victoria"])), (_l()(), i1.ɵeld(791, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(793, 0, null, null, 64, "div", [["class", "body-img"], ["id", "hidden-menu-mini"]], null, null, null, null, null)), (_l()(), i1.ɵeld(794, 0, null, null, 2, "div", [["class", "content-img-text img-bg-skill"]], null, null, null, null, null)), (_l()(), i1.ɵeld(795, 0, null, null, 1, "p", [["class", "btn-blur"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" SKILLS "])), (_l()(), i1.ɵeld(797, 0, null, null, 19, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "InternshipExperience"]], null, null, null, null, null)), (_l()(), i1.ɵeld(798, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(799, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Internship & Experience "])), (_l()(), i1.ɵeld(801, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(802, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["If you\u2019re looking for work experience, there are a couple of options you can consider. It\u2019s highly advisable to do an internship to develop your skills before taking on the startup industry on your own."])), (_l()(), i1.ɵeld(804, 0, null, null, 10, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(805, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(806, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(807, 0, null, null, 1, "a", [["href", "http://www.internships.com.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Australian Internships (AI)"])), (_l()(), i1.ɵeld(809, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(810, 0, null, null, 1, "a", [["href", "http://www.dreaminternship.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dream Internship"])), (_l()(), i1.ɵeld(812, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(813, 0, null, null, 1, "a", [["href", "https://outcome.life/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Outcome.life"])), (_l()(), i1.ɵeld(815, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(817, 0, null, null, 40, "div", [["class", "body-img__content-hover"], ["data-aos", "fade-up"], ["id", "TrainingEducation"]], null, null, null, null, null)), (_l()(), i1.ɵeld(818, 0, null, null, 2, "div", [["class", "row1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(819, 0, null, null, 1, "div", [["class", "row1__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Trainging & Education Groups "])), (_l()(), i1.ɵeld(821, 0, null, null, 2, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(822, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["If you\u2019re switching careers or heading into a different field of the same one, it\u2019s advisable to refresh your skills or look into creating some new ones. Have a look at this list of courses that include technical and skills-focused programs. "])), (_l()(), i1.ɵeld(824, 0, null, null, 25, "div", [["class", "menu-list-hover-in-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(825, 0, null, null, 24, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(826, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(827, 0, null, null, 1, "a", [["href", "https://www.61-bit.com/2018/02/05/get-hired-startup-tech-scene-free-cheap-courses/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["61 Bit"])), (_l()(), i1.ɵeld(829, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(830, 0, null, null, 1, "a", [["href", "https://academyxi.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Academy XI"])), (_l()(), i1.ɵeld(832, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(833, 0, null, null, 1, "a", [["href", "https://generalassemb.ly/findyourcourse"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["General Assembly"])), (_l()(), i1.ɵeld(835, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(836, 0, null, null, 1, "a", [["href", "https://hackernoon.com/10-free-courses-every-startup-founder-should-take-f1fcede4a937"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hackernoon"])), (_l()(), i1.ɵeld(838, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(839, 0, null, null, 1, "a", [["href", "https://www.codecademy.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Code Academy"])), (_l()(), i1.ɵeld(841, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(842, 0, null, null, 1, "a", [["href", "https://www.lewagon.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Le Wagon"])), (_l()(), i1.ɵeld(844, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(845, 0, null, null, 1, "a", [["href", "https://www.udacity.com/course/how-to-build-a-startup--ep245"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Udacity"])), (_l()(), i1.ɵeld(847, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(848, 0, null, null, 1, "a", [["href", "https://www.udemy.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Udemy"])), (_l()(), i1.ɵeld(850, 0, null, null, 5, "div", [["class", "row2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(851, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Also, for skills-focused programs, have a look at some of these programs "])), (_l()(), i1.ɵeld(853, 0, null, null, 1, "a", [["href", "https://launchvic.org/programs/courses"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["(https://launchvic.org/programs/courses)"])), (_l()(), i1.ɵted(-1, null, [" funded by LaunchVic."])), (_l()(), i1.ɵeld(856, 0, null, null, 1, "a", [["class", "btn-explore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE"])), (_l()(), i1.ɵeld(858, 0, null, null, 1, "app-explore-chapter", [], null, null, null, i2.View_ExploreChapterComponent_0, i2.RenderType_ExploreChapterComponent)), i1.ɵdid(859, 114688, null, 0, i3.ExploreChapterComponent, [i4.WINDOW, i5.ChapterService], null, null)], function (_ck, _v) { _ck(_v, 859, 0); }, null); }
exports.View_GetToKnowVicComponent_0 = View_GetToKnowVicComponent_0;
function View_GetToKnowVicComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-get-to-know-vic", [], null, null, null, View_GetToKnowVicComponent_0, RenderType_GetToKnowVicComponent)), i1.ɵdid(1, 4308992, null, 0, i6.GetToKnowVicComponent, [i4.WINDOW, i7.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GetToKnowVicComponent_Host_0 = View_GetToKnowVicComponent_Host_0;
var GetToKnowVicComponentNgFactory = i1.ɵccf("app-get-to-know-vic", i6.GetToKnowVicComponent, View_GetToKnowVicComponent_Host_0, {}, {}, []);
exports.GetToKnowVicComponentNgFactory = GetToKnowVicComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var GetToKnowVicComponent = /** @class */ (function () {
    function GetToKnowVicComponent(window, meta) {
        this.window = window;
        this.meta = meta;
        // const url = window.location.href;
        this.meta.updateTag({ property: 'og:title', content: 'Get To Know Victoria' });
        // this.meta.updateTag({ property: 'og:url', content: `${url}` });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        // this.meta.updateTag({ property: 'og:description', content: 'More about get to know victoria...' });
        // this.meta.updateTag({ property: 'og:image', content: 'https://www.hatchquarter.com.au/assets/images/OG.jpg' });
    }
    GetToKnowVicComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            //Click arrow in get to know victoria
            jQuery(document).ready(function () {
                jQuery('.body-img__content-hover').click(function (e) {
                    jQuery(this).find('div.menu-list-hover-in-vic').slideToggle('fast');
                    jQuery(this).find('div.menu-list-hover-in-vic-for-1').toggleClass('display-grid-show');
                    jQuery(this).toggleClass('body-img_content-hover-click');
                    jQuery(this).find('i').toggleClass('arrow-change-victoria');
                    //jQuery(this).closest('.body-img__content-hover').find('i.fa-angle-double-right').toggleClass('double-arrow');
                }).on('click', '.menu-list-hover-in-vic', function (e) {
                    // clicked on descendant div
                    e.stopPropagation();
                }).on('click', '.menu-list-hover-in-vic-for-1', function (e) {
                    // clicked on descendant div
                    e.stopPropagation();
                });
                // jQuery('.body-img__content-hover > i').click(function () {
                //   jQuery(this).closest('.body-img__content-hover').find('div.menu-list-hover-in-vic').slideToggle('fast');
                //   jQuery(this).closest('.body-img__content-hover').find('div.menu-list-hover-in-vic-for-1').toggleClass('display-grid-show');
                //   jQuery(this).closest('.body-img__content-hover').toggleClass('body-img_content-hover-click');
                //   jQuery(this).toggleClass('double-arrow'); 
                //   jQuery(this).closest('.body-img__content-hover').find('i.fa-chevron-right').toggleClass('arrow-change-victoria');
                // }); 
                AOS.init({
                    duration: 1200,
                });
                var showmenuH = $('#show-menu-mini').offset().top;
                var hiddenmenuH = $('#hidden-menu-mini').offset().top;
                // alert(hiddenmenuH);
                //Menu-mini
                // scroll show menu
                $(this.window).scroll(function () {
                    var height = $(this).scrollTop();
                    if (height > showmenuH) {
                        $('.menu-left-mini').css('display', 'block');
                        $('.menu-left-mini').fadeIn();
                        if (height > hiddenmenuH) {
                            $('.menu-left-mini').css('display', 'none');
                            $('.menu-left-mini-content').css('display', 'none');
                        }
                        else {
                            $('.menu-left-mini').css('display', 'block');
                        }
                    }
                    else {
                        $('.menu-left-mini').fadeOut();
                        $('.menu-left-mini-content').fadeOut();
                    }
                    // if ($(this).scrollTop()) {
                    //   
                    // } else {
                    //   
                    // }
                });
                //click event
                $('#arrow-show-content-menu').click(function () {
                    $(this).toggleClass('fa-times');
                    $('.menu-left-mini').toggleClass('add-content-menu-mini');
                    $('.menu-left-mini > ul').toggle();
                });
                // $('.menu-left-mini > ul > li:first-child').click(function(){
                //   $('.menu-left-mini > ul').css('display', 'none');
                //   $('.menu-left-mini').removeClass('add-content-menu-mini');
                //   $('#arrow-show-content-menu').show('fast');
                // });
                $('.menu-left-mini > ul > li').click(function () {
                    $('.menu-left-mini > ul').css('display', 'none');
                    $('.menu-left-mini').removeClass('add-content-menu-mini');
                    $('#arrow-show-content-menu').show('fast');
                });
            });
        }, 1000);
    };
    GetToKnowVicComponent.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    return GetToKnowVicComponent;
}());
exports.GetToKnowVicComponent = GetToKnowVicComponent;


/***/ }),

/***/ "./src/app/modules/get-to-know-vic/get-to-know-vic.module.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/get-to-know-vic/get-to-know-vic.module.ngfactory.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./get-to-know-vic.module */ "./src/app/modules/get-to-know-vic/get-to-know-vic.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./components/get-to-know-vic.component.ngfactory */ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../common/pipes/share-module.module */ "./src/app/common/pipes/share-module.module.ts");
var i7 = __webpack_require__(/*! ./components/get-to-know-vic.component */ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ts");
var GetToKnowVicModuleNgFactory = i0.ɵcmf(i1.GetToKnowVicModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.GetToKnowVicComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.ShareModuleModule, i6.ShareModuleModule, []), i0.ɵmpd(1073742336, i1.GetToKnowVicModule, i1.GetToKnowVicModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i7.GetToKnowVicComponent, children: [] }]]; }, [])]); });
exports.GetToKnowVicModuleNgFactory = GetToKnowVicModuleNgFactory;


/***/ }),

/***/ "./src/app/modules/get-to-know-vic/get-to-know-vic.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/get-to-know-vic/get-to-know-vic.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var get_to_know_vic_component_1 = __webpack_require__(/*! ./components/get-to-know-vic.component */ "./src/app/modules/get-to-know-vic/components/get-to-know-vic.component.ts");
var routes = [
    {
        path: '',
        component: get_to_know_vic_component_1.GetToKnowVicComponent,
        children: []
    }
];
var GetToKnowVicModule = /** @class */ (function () {
    function GetToKnowVicModule() {
    }
    return GetToKnowVicModule;
}());
exports.GetToKnowVicModule = GetToKnowVicModule;


/***/ }),

/***/ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.css.shim.ngstyle.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-anatomy/home-anatomy.component.css.shim.ngstyle.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-anatomy/home-anatomy.component.ngfactory.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-anatomy.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! ./home-anatomy.component */ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! ../../services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i8 = __webpack_require__(/*! ../../services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i9 = __webpack_require__(/*! ../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var styles_HomeAnatomyComponent = [i0.styles];
var RenderType_HomeAnatomyComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeAnatomyComponent, data: {} });
exports.RenderType_HomeAnatomyComponent = RenderType_HomeAnatomyComponent;
function View_HomeAnatomyComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "li", [], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "background": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ"]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, (_v.parent.context.$implicit.id ? "#fff" : _v.parent.parent.context.$implicit.color)); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.title; _ck(_v, 4, 0, currVal_1); }); }
function View_HomeAnatomyComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "a", [], null, [[null, "click"], [null, "mouseover"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClickRead(_v.parent.context.$implicit.slug, _v.context.$implicit.slug) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = ((_v.context.$implicit.id = false) !== false);
        ad = (pd_1 && ad);
    } if (("mouseleave" === en)) {
        var pd_2 = ((_v.context.$implicit.id = true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "color": 0, "cursor": 1 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_3)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.parent.context.$implicit.color, "pointer"); _ck(_v, 1, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.id == _v.context.$implicit.chapter_id); _ck(_v, 4, 0, currVal_1); }, null); }
function View_HomeAnatomyComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 25, "li", [["class", "item-1"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "border-top-color": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "color": 0 }), i1.ɵdid(6, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(7, 2), (_l()(), i1.ɵeld(8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""])), (_l()(), i1.ɵeld(10, 0, null, null, 3, "div", [["class", "item-full"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "i", [["class", "fas fa-chevron-right"]], null, null, null, null, null)), i1.ɵdid(12, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(13, { "color": 0 }), (_l()(), i1.ɵeld(14, 0, null, null, 11, "ul", [], null, null, null, null, null)), i1.ɵdid(15, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(16, { "bottom": 0 }), i1.ɵpod(17, { "top": 0 }), (_l()(), i1.ɵeld(18, 0, null, null, 2, "div", [], null, null, null, null, null)), i1.ɵdid(19, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(20, { "bottom": 0 }), (_l()(), i1.ɵeld(21, 0, null, null, 4, "div", [], null, null, null, null, null)), i1.ɵdid(22, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(23, { "border-top-color": 0 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_2)), i1.ɵdid(25, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _v.context.$implicit.color); _ck(_v, 1, 0, currVal_0); var currVal_3 = _ck(_v, 5, 0, _v.context.$implicit.color); _ck(_v, 4, 0, currVal_3); var currVal_4 = _ck(_v, 7, 0, "./", _v.context.$implicit.slug); _ck(_v, 6, 0, currVal_4); var currVal_6 = _ck(_v, 13, 0, _v.context.$implicit.color); _ck(_v, 12, 0, currVal_6); var currVal_7 = ((_v.context.index > 3) ? _ck(_v, 16, 0, "0px") : _ck(_v, 17, 0, "-8px")); _ck(_v, 15, 0, currVal_7); var currVal_8 = ((_v.context.index > 3) ? _ck(_v, 20, 0, "0px") : ""); _ck(_v, 19, 0, currVal_8); var currVal_9 = _ck(_v, 23, 0, _v.context.$implicit.color); _ck(_v, 22, 0, currVal_9); var currVal_10 = _co.article; _ck(_v, 25, 0, currVal_10); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 6).target; var currVal_2 = i1.ɵnov(_v, 6).href; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_5 = _v.context.$implicit.chapter_name; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeAnatomyComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "background": 0, "color": 1 }), (_l()(), i1.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, (_v.parent.context.$implicit.id ? "" : _v.parent.parent.context.$implicit.color), (_v.parent.context.$implicit.id ? _v.parent.parent.context.$implicit.color : "")); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.title; _ck(_v, 3, 0, currVal_1); }); }
function View_HomeAnatomyComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "mouseover"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = ((_v.context.$implicit.id = false) !== false);
        ad = (pd_1 && ad);
    } if (("mouseleave" === en)) {
        var pd_2 = ((_v.context.$implicit.id = true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "color": 0 }), i1.ɵdid(3, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 3), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_6)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, _v.parent.context.$implicit.color); _ck(_v, 1, 0, currVal_2); var currVal_3 = _ck(_v, 4, 0, "./", _v.parent.context.$implicit.slug, _v.context.$implicit.slug); _ck(_v, 3, 0, currVal_3); var currVal_4 = (_v.parent.context.$implicit.id == _v.context.$implicit.chapter_id); _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HomeAnatomyComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "div", [["class", "menu-vertical-respon__item"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "border-top-color": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 13, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 12, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 4, "a", [], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(8, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(9, { "color": 0 }), (_l()(), i1.ɵted(10, null, ["", ""])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "i", [["class", "fas fa-chevron-left"]], null, null, null, null, null)), i1.ɵdid(12, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(13, { "color": 0 }), (_l()(), i1.ɵeld(14, 0, null, null, 2, "ul", [["class", "sub-menu-vertical"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_5)), i1.ɵdid(16, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _v.context.$implicit.color); _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 9, 0, _v.context.$implicit.color); _ck(_v, 8, 0, currVal_1); var currVal_3 = _ck(_v, 13, 0, _v.context.$implicit.color); _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.article; _ck(_v, 16, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.chapter_name; _ck(_v, 10, 0, currVal_2); }); }
function View_HomeAnatomyComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The name fied is required "]))], null, null); }
function View_HomeAnatomyComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Min length 1 character "]))], null, null); }
function View_HomeAnatomyComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_HomeAnatomyComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct name format "]))], null, null); }
function View_HomeAnatomyComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_HomeAnatomyComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_HomeAnatomyComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_HomeAnatomyComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "section", [["id", "menu-vertical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 10, "div", [["class", "container-menu-ver"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [["class", "container-menu-ver__heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Anatomy of a Startup"])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [["class", "container-menu-ver__sub-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Take one step at a time, and you'll be on your way"])), (_l()(), i1.ɵeld(6, 0, null, null, 3, "div", [["class", "menu-flew-cl"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_1)), i1.ɵdid(9, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_4)), i1.ɵdid(11, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(12, 0, null, null, 49, "div", [["class", "popup"], ["id", "popup-newsletter"]], null, null, null, null, null)), i1.ɵdid(13, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(14, { "display": 0 }), (_l()(), i1.ɵeld(15, 0, null, null, 46, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 2, "div", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Please enter your e-mail address to keep reading: "])), (_l()(), i1.ɵeld(19, 0, null, null, 42, "div", [["class", "enter-email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 41, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 22).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 22).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormNews() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(21, 16384, null, 0, i4.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(22, 540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]), i1.ɵdid(24, 16384, null, 0, i4.NgControlStatusGroup, [[4, i4.ControlContainer]], null, null), (_l()(), i1.ɵeld(25, 0, null, null, 31, "div", [["class", "container-form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 30, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(29, 0, null, null, 5, "input", [["formControlName", "name"], ["name", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(30, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(32, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(34, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_7)), i1.ɵdid(36, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_8)), i1.ɵdid(38, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_9)), i1.ɵdid(40, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_10)), i1.ɵdid(42, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-mail address"])), (_l()(), i1.ɵeld(45, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 46)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 46).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 46)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 46)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(46, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(48, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(50, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_11)), i1.ɵdid(52, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_12)), i1.ɵdid(54, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeAnatomyComponent_13)), i1.ɵdid(56, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(57, 0, null, null, 4, "div", [["class", "group-btn-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(60, 0, null, null, 1, "button", [["id", "close-btn-download-news"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CANCEL"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.chapter; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.chapter; _ck(_v, 11, 0, currVal_1); var currVal_2 = _ck(_v, 14, 0, (_co.isDisplay ? "none" : "")); _ck(_v, 13, 0, currVal_2); var currVal_10 = _co.frmPopupNews; _ck(_v, 22, 0, currVal_10); var currVal_18 = "name"; _ck(_v, 32, 0, currVal_18); var currVal_19 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.required)); _ck(_v, 36, 0, currVal_19); var currVal_20 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.minlength)); _ck(_v, 38, 0, currVal_20); var currVal_21 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.maxlength)); _ck(_v, 40, 0, currVal_21); var currVal_22 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.pattern)); _ck(_v, 42, 0, currVal_22); var currVal_30 = "email"; _ck(_v, 48, 0, currVal_30); var currVal_31 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.required)); _ck(_v, 52, 0, currVal_31); var currVal_32 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.maxlength)); _ck(_v, 54, 0, currVal_32); var currVal_33 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.pattern)); _ck(_v, 56, 0, currVal_33); }, function (_ck, _v) { var currVal_3 = i1.ɵnov(_v, 24).ngClassUntouched; var currVal_4 = i1.ɵnov(_v, 24).ngClassTouched; var currVal_5 = i1.ɵnov(_v, 24).ngClassPristine; var currVal_6 = i1.ɵnov(_v, 24).ngClassDirty; var currVal_7 = i1.ɵnov(_v, 24).ngClassValid; var currVal_8 = i1.ɵnov(_v, 24).ngClassInvalid; var currVal_9 = i1.ɵnov(_v, 24).ngClassPending; _ck(_v, 20, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = i1.ɵnov(_v, 34).ngClassUntouched; var currVal_12 = i1.ɵnov(_v, 34).ngClassTouched; var currVal_13 = i1.ɵnov(_v, 34).ngClassPristine; var currVal_14 = i1.ɵnov(_v, 34).ngClassDirty; var currVal_15 = i1.ɵnov(_v, 34).ngClassValid; var currVal_16 = i1.ɵnov(_v, 34).ngClassInvalid; var currVal_17 = i1.ɵnov(_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_23 = i1.ɵnov(_v, 50).ngClassUntouched; var currVal_24 = i1.ɵnov(_v, 50).ngClassTouched; var currVal_25 = i1.ɵnov(_v, 50).ngClassPristine; var currVal_26 = i1.ɵnov(_v, 50).ngClassDirty; var currVal_27 = i1.ɵnov(_v, 50).ngClassValid; var currVal_28 = i1.ɵnov(_v, 50).ngClassInvalid; var currVal_29 = i1.ɵnov(_v, 50).ngClassPending; _ck(_v, 45, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); }); }
exports.View_HomeAnatomyComponent_0 = View_HomeAnatomyComponent_0;
function View_HomeAnatomyComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-anatomy", [], null, null, null, View_HomeAnatomyComponent_0, RenderType_HomeAnatomyComponent)), i1.ɵdid(1, 4308992, null, 0, i5.HomeAnatomyComponent, [i6.WINDOW, i6.LOCAL_STORAGE, i7.ChapterService, i8.ArticleService, i3.Router, i4.FormBuilder, i9.NewLetterService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeAnatomyComponent_Host_0 = View_HomeAnatomyComponent_Host_0;
var HomeAnatomyComponentNgFactory = i1.ɵccf("app-home-anatomy", i5.HomeAnatomyComponent, View_HomeAnatomyComponent_Host_0, {}, {}, []);
exports.HomeAnatomyComponentNgFactory = HomeAnatomyComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/home-anatomy/home-anatomy.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var chapter_service_1 = __webpack_require__(/*! ./../../services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var article_service_1 = __webpack_require__(/*! ./../../services/article.service */ "./src/app/modules/home/services/article.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var new_letter_service_1 = __webpack_require__(/*! ./../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
var HomeAnatomyComponent = /** @class */ (function () {
    function HomeAnatomyComponent(window, localStorage, _serviceChapter, _serviceArticle, _router, _formBuilder, _serviceNewsLetter) {
        this.window = window;
        this.localStorage = localStorage;
        this._serviceChapter = _serviceChapter;
        this._serviceArticle = _serviceArticle;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._serviceNewsLetter = _serviceNewsLetter;
        this.showHover = false;
        this.chapter = [];
        this.article = [];
        this.isDisplay = false;
        $(document).ready(function () {
            AOS.init({
                duration: 1200,
            });
        });
    }
    HomeAnatomyComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            $(document).ready(function () {
                $('div.menu-vertical-respon__item ul li div').click(function (e) {
                    e.preventDefault();
                    $('div.menu-vertical-respon__item ul ul').hide('fast');
                    $('div.menu-vertical-respon__item ul li i').removeClass('rotate-arrow');
                    if ($(this).closest('li').find('ul').css('display') == 'none') {
                        $(this).closest('li').find('ul').show('fast');
                        $(this).closest('li').find('i').addClass("rotate-arrow");
                    }
                    else {
                        $(this).closest('li').find('ul').hide('fast');
                        $('div.menu-vertical-respon__item ul li i').removeClass('rotate-arrow');
                    }
                });
            });
        }, 2000);
        setTimeout(function () {
            $(document).ready(function () {
                var timer;
                $('#menu-vertical .container-menu-ver .menu-flew-cl > ul > li:first-child').addClass('item-active');
                $('#menu-vertical .container-menu-ver .menu-flew-cl > ul > li').hover(function (e) {
                    e.preventDefault();
                    clearTimeout(timer);
                    $('#menu-vertical .container-menu-ver .menu-flew-cl > ul > li:first-child').removeClass('item-active');
                }, function () {
                    timer = setTimeout(function () { $('#menu-vertical .container-menu-ver .menu-flew-cl > ul > li:first-child').addClass('item-active'); }, 300);
                });
            });
        }, 2000);
    };
    HomeAnatomyComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getChapterList();
        this.getArticleList();
    };
    HomeAnatomyComponent.prototype.getChapterList = function () {
        var _this = this;
        this._serviceChapter.getChapter().subscribe(function (data) {
            _this.chapter = data.results;
        });
    };
    HomeAnatomyComponent.prototype.getArticleList = function () {
        var _this = this;
        this._serviceArticle.getArticle().subscribe(function (data) { return _this.article = data.results; });
    };
    //[routerLink]="['./', item.slug, artitle.slug]" 
    HomeAnatomyComponent.prototype.onClickRead = function (slugChapter, slugArticle) {
        this.slugChapter = slugChapter;
        this.slugArticle = slugArticle;
        if (this.localStorage.getItem(this.key) != null) {
            // We have items key = email
            this._router.navigate(["/" + slugChapter + "/" + slugArticle], { fragment: 'content-in-chapter' });
        }
        else {
            // No items
            var modal = document.getElementById('popup-newsletter');
            var button = document.getElementById('close-btn-download-news');
            modal.style.display = "block";
            button.onclick = function () {
                modal.style.display = "none";
            };
            // When the user clicks anywhere outside of the modal, close it
            this.window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    };
    HomeAnatomyComponent.prototype.createForm = function () {
        this.frmPopupNews = this._formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50)
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]]
        });
    };
    HomeAnatomyComponent.prototype.onSubmitFormNews = function () {
        var _this = this;
        if (this.frmPopupNews.valid) {
            //console.log(this.frmPopupNews.value);
            this.localStorage.setItem(this.key, this.frmPopupNews.value.email);
            this._serviceNewsLetter.sendNewLetter(this.frmPopupNews.value).subscribe(function (data) { return data; });
            this.frmPopupNews.reset();
            sweetalert2_1.default({
                title: 'Subscribed',
                type: 'success',
                confirmButtonText: 'OK'
            }).then(function (results) {
                if (results.value) {
                    _this._router.navigate(["/" + _this.slugChapter + "/" + _this.slugArticle], { fragment: 'content-in-chapter' });
                }
            });
            this.isDisplay = !this.isDisplay;
        }
        else {
            this.validateAllFormFields(this.frmPopupNews);
        }
    };
    HomeAnatomyComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof forms_1.FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    return HomeAnatomyComponent;
}());
exports.HomeAnatomyComponent = HomeAnatomyComponent;


/***/ }),

/***/ "./src/app/modules/home/components/home-banner/home-banner.component.css.shim.ngstyle.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-banner/home-banner.component.css.shim.ngstyle.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-banner/home-banner.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-banner/home-banner.component.ngfactory.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-banner.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-banner/home-banner.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./home-banner.component */ "./src/app/modules/home/components/home-banner/home-banner.component.ts");
var styles_HomeBannerComponent = [i0.styles];
var RenderType_HomeBannerComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeBannerComponent, data: {} });
exports.RenderType_HomeBannerComponent = RenderType_HomeBannerComponent;
function View_HomeBannerComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 38, "section", [["id", "img-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 22, "div", [["class", "text-img-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["WELCOME TO VICTORIA "])), (_l()(), i1.ɵeld(4, 0, null, null, 19, "div", [["class", "text-small"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Working on a new startup idea? This Startup Playbook is for you!"])), (_l()(), i1.ɵeld(7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You will learn useful techniques to get yourself established, find network directories, and hear from other international entrepreneurs like yourself, who have found success in Australia. "])), (_l()(), i1.ɵeld(9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["This book takes you through the process of assembling your team, testing your ideas, the fundamentals of communicating and selling your idea. "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We hope that this Playbook will not only help you excel in your startup journey here in Victoria but also to create valuable experiences with the community here."])), (_l()(), i1.ɵeld(13, 0, null, null, 8, "div", [["class", "respon-banner-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Working on a new startup idea? This Startup Playbook is for you!"])), (_l()(), i1.ɵeld(16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You will learn useful techniques to get yourself established, find network directories, and hear from other international entrepreneurs like yourself, who have found success in Australia. "])), (_l()(), i1.ɵeld(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["This book takes you through the process of assembling your team, testing your ideas, the fundamentals of communicating and selling your idea. "])), (_l()(), i1.ɵeld(20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We hope the Playbook will not only help you excel in your startup journey but also to create valuable experiences with the community here in Victoria."])), (_l()(), i1.ɵeld(22, 0, null, null, 1, "a", [["href", "javascript:void(0);"], ["onclick", "openModel();"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DOWNLOAD PLAYBOOK"])), (_l()(), i1.ɵeld(24, 0, null, null, 9, "div", [["class", "text-img-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 1, "p", [["data-aos", "fade-down"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["PROUDLY SUPPORTED BY"])), (_l()(), i1.ɵeld(27, 0, null, null, 6, "div", [["class", "logo-3-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 1, "a", [["href", "https://launchvic.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/logo1-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "a", [["href", "https://hatchquarter.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "assets/images/images-home/HQ-logo-white.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 1, "a", [["href", "https://www.moworks.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/logo3-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 0, "div", [["class", "div-black"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 0, "div", [["class", "div-black-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "assets/images/images-home/icon1-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-right"], ["src", "assets/images/images-home/icon2-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-left"], ["src", "assets/images/images-home/icon3-header.png"]], null, null, null, null, null))], null, null); }
exports.View_HomeBannerComponent_0 = View_HomeBannerComponent_0;
function View_HomeBannerComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-banner", [], null, null, null, View_HomeBannerComponent_0, RenderType_HomeBannerComponent)), i1.ɵdid(1, 114688, null, 0, i2.HomeBannerComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeBannerComponent_Host_0 = View_HomeBannerComponent_Host_0;
var HomeBannerComponentNgFactory = i1.ɵccf("app-home-banner", i2.HomeBannerComponent, View_HomeBannerComponent_Host_0, {}, {}, []);
exports.HomeBannerComponentNgFactory = HomeBannerComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-banner/home-banner.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/components/home-banner/home-banner.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HomeBannerComponent = /** @class */ (function () {
    function HomeBannerComponent() {
    }
    HomeBannerComponent.prototype.ngOnInit = function () {
    };
    return HomeBannerComponent;
}());
exports.HomeBannerComponent = HomeBannerComponent;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.css.shim.ngstyle.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.css.shim.ngstyle.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ngfactory.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ngfactory.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-get-to-know-vic-government.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./home-get-to-know-vic-government.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ts");
var styles_HomeGetToKnowVicGovernmentComponent = [i0.styles];
var RenderType_HomeGetToKnowVicGovernmentComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeGetToKnowVicGovernmentComponent, data: {} });
exports.RenderType_HomeGetToKnowVicGovernmentComponent = RenderType_HomeGetToKnowVicGovernmentComponent;
function View_HomeGetToKnowVicGovernmentComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 28, "div", [["class", "body-government"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["GOVERNMENT BODIES TO KNOW ABOUT"])), (_l()(), i1.ɵeld(3, 0, null, null, 10, "div", [["class", "body-government-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 9, "div", [["class", "logo-3-body-government"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "a", [["href", "https://www.australia.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "assets/images/images-home/au-go.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "a", [["href", "https://www.innovation.gov.au"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/inter-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "a", [["href", "https://www.business.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/business-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "a", [["href", "https://www.australiaunlimited.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/australia-unlimited.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 10, "div", [["class", "body-government-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 9, "div", [["class", "logo-3-body-government color-government-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "a", [["href", "https://www.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "assets/images/images-home/vic-gov.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "a", [["href", "http://www.invest.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/invest-vic.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["href", "http://www.business.vic.gov.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/small-buss.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "a", [["href", "https://launchvic.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-down"], ["src", "assets/images/images-home/LaunchVic.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 3, "a", [["data-aos", "fade-up"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(26, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(27, 1), (_l()(), i1.ɵted(-1, null, ["MORE ABOUT VICTORIA"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 27, 0, "/get-to-know-victoria"); _ck(_v, 26, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 26).target; var currVal_1 = i1.ɵnov(_v, 26).href; _ck(_v, 25, 0, currVal_0, currVal_1); }); }
exports.View_HomeGetToKnowVicGovernmentComponent_0 = View_HomeGetToKnowVicGovernmentComponent_0;
function View_HomeGetToKnowVicGovernmentComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-get-to-know-vic-government", [], null, null, null, View_HomeGetToKnowVicGovernmentComponent_0, RenderType_HomeGetToKnowVicGovernmentComponent)), i1.ɵdid(1, 114688, null, 0, i4.HomeGetToKnowVicGovernmentComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeGetToKnowVicGovernmentComponent_Host_0 = View_HomeGetToKnowVicGovernmentComponent_Host_0;
var HomeGetToKnowVicGovernmentComponentNgFactory = i1.ɵccf("app-home-get-to-know-vic-government", i4.HomeGetToKnowVicGovernmentComponent, View_HomeGetToKnowVicGovernmentComponent_Host_0, {}, {}, []);
exports.HomeGetToKnowVicGovernmentComponentNgFactory = HomeGetToKnowVicGovernmentComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HomeGetToKnowVicGovernmentComponent = /** @class */ (function () {
    function HomeGetToKnowVicGovernmentComponent() {
    }
    HomeGetToKnowVicGovernmentComponent.prototype.ngOnInit = function () {
    };
    return HomeGetToKnowVicGovernmentComponent;
}());
exports.HomeGetToKnowVicGovernmentComponent = HomeGetToKnowVicGovernmentComponent;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.css.shim.ngstyle.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.css.shim.ngstyle.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ngfactory.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ngfactory.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-get-to-know-vic-stats-x3.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./home-get-to-know-vic-stats-x3.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ts");
var styles_HomeGetToKnowVicStatsX3Component = [i0.styles];
var RenderType_HomeGetToKnowVicStatsX3Component = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeGetToKnowVicStatsX3Component, data: {} });
exports.RenderType_HomeGetToKnowVicStatsX3Component = RenderType_HomeGetToKnowVicStatsX3Component;
function View_HomeGetToKnowVicStatsX3Component_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "div", [["class", "image-man"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 25, "div", [["class", "image-map"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [["class", "image-map-heading"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get to know Victoria"])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [["class", "sub-heading"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Starting out as an international entrepreneur?"])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "p", [["class", "sub-heading"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You\u2019re not as alone as you think"])), (_l()(), i1.ɵeld(8, 0, null, null, 18, "div", [["class", "get-to-know-vic"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 5, "div", [["class", "item-get-to-know-vic"], ["data-aos", "fade-down"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/icon1-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1/3"])), (_l()(), i1.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["of Australian Small Businesses are owned by migrants"])), (_l()(), i1.ɵeld(15, 0, null, null, 5, "div", [["class", "item-get-to-know-vic"], ["data-aos", "fade-down"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/icon2-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["620k"])), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["businesses in Australia are owned by migrants"])), (_l()(), i1.ɵeld(21, 0, null, null, 5, "div", [["class", "item-get-to-know-vic"], ["data-aos", "fade-down"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/images-home/icon-inspi-sto.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "p", [["class", "fix-item-get-to-know-vic-last"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1.41M"])), (_l()(), i1.ɵeld(25, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["people are employed by migrant business owners in Australia "]))], null, null); }
exports.View_HomeGetToKnowVicStatsX3Component_0 = View_HomeGetToKnowVicStatsX3Component_0;
function View_HomeGetToKnowVicStatsX3Component_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-get-to-know-vic-stats-x3", [], null, null, null, View_HomeGetToKnowVicStatsX3Component_0, RenderType_HomeGetToKnowVicStatsX3Component)), i1.ɵdid(1, 114688, null, 0, i2.HomeGetToKnowVicStatsX3Component, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeGetToKnowVicStatsX3Component_Host_0 = View_HomeGetToKnowVicStatsX3Component_Host_0;
var HomeGetToKnowVicStatsX3ComponentNgFactory = i1.ɵccf("app-home-get-to-know-vic-stats-x3", i2.HomeGetToKnowVicStatsX3Component, View_HomeGetToKnowVicStatsX3Component_Host_0, {}, {}, []);
exports.HomeGetToKnowVicStatsX3ComponentNgFactory = HomeGetToKnowVicStatsX3ComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HomeGetToKnowVicStatsX3Component = /** @class */ (function () {
    function HomeGetToKnowVicStatsX3Component() {
    }
    HomeGetToKnowVicStatsX3Component.prototype.ngOnInit = function () {
    };
    return HomeGetToKnowVicStatsX3Component;
}());
exports.HomeGetToKnowVicStatsX3Component = HomeGetToKnowVicStatsX3Component;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.css.shim.ngstyle.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.css.shim.ngstyle.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ngfactory.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ngfactory.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-get-to-know-vic-why-the-playbook.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./home-get-to-know-vic-why-the-playbook.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ts");
var styles_HomeGetToKnowVicWhyThePlaybookComponent = [i0.styles];
var RenderType_HomeGetToKnowVicWhyThePlaybookComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeGetToKnowVicWhyThePlaybookComponent, data: {} });
exports.RenderType_HomeGetToKnowVicWhyThePlaybookComponent = RenderType_HomeGetToKnowVicWhyThePlaybookComponent;
function View_HomeGetToKnowVicWhyThePlaybookComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "home-community"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "div", [["class", "box-radient-com"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 22, "div", [["class", "home-community-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 21, "div", [["class", "container-com-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Why the Playbook?"])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-up"], ["src", "assets/images/images-home/icon1-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 4, "div", [["class", "com-content color-com-content-1"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We Know Startups"])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Based in Melbourne\u2019s Docklands, Hatch Quarter is on a mission to unlock the creativity and innovation of international entrepreneurs. Our team has a wealth of knowledge and experience to guide you as you take this step of entrepreneurship."])), (_l()(), i1.ɵeld(13, 0, null, null, 4, "div", [["class", "com-content color-com-content-2"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Growth is Key"])), (_l()(), i1.ɵeld(16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You will learn useful techniques to get yourself established, find directories of networks that may be beneficial to you, and hear from other international entrepreneurs like yourself, who have found success in Australia."])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "div", [["class", "com-content color-com-content-3"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Learn from the best"])), (_l()(), i1.ɵeld(21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["To be entrepreneurial, you must listen, learn and source valuable information from any avenue. Find out the tips and tricks shared by fellow entrepreneurs, be inspired by others, and get connected by joining our active community. "])), (_l()(), i1.ɵeld(23, 0, null, null, 1, "a", [["data-aos", "fade-up"], ["href", "https://hatchquarter.com.au/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["VISIT HATCH QUARTER WEBSITE"]))], null, null); }
exports.View_HomeGetToKnowVicWhyThePlaybookComponent_0 = View_HomeGetToKnowVicWhyThePlaybookComponent_0;
function View_HomeGetToKnowVicWhyThePlaybookComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-get-to-know-vic-why-the-playbook", [], null, null, null, View_HomeGetToKnowVicWhyThePlaybookComponent_0, RenderType_HomeGetToKnowVicWhyThePlaybookComponent)), i1.ɵdid(1, 114688, null, 0, i2.HomeGetToKnowVicWhyThePlaybookComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeGetToKnowVicWhyThePlaybookComponent_Host_0 = View_HomeGetToKnowVicWhyThePlaybookComponent_Host_0;
var HomeGetToKnowVicWhyThePlaybookComponentNgFactory = i1.ɵccf("app-home-get-to-know-vic-why-the-playbook", i2.HomeGetToKnowVicWhyThePlaybookComponent, View_HomeGetToKnowVicWhyThePlaybookComponent_Host_0, {}, {}, []);
exports.HomeGetToKnowVicWhyThePlaybookComponentNgFactory = HomeGetToKnowVicWhyThePlaybookComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HomeGetToKnowVicWhyThePlaybookComponent = /** @class */ (function () {
    function HomeGetToKnowVicWhyThePlaybookComponent() {
    }
    HomeGetToKnowVicWhyThePlaybookComponent.prototype.ngOnInit = function () {
    };
    return HomeGetToKnowVicWhyThePlaybookComponent;
}());
exports.HomeGetToKnowVicWhyThePlaybookComponent = HomeGetToKnowVicWhyThePlaybookComponent;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.css.shim.ngstyle.js":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.css.shim.ngstyle.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ngfactory.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ngfactory.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-get-to-know-vic.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ngfactory */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-stats-x3/home-get-to-know-vic-stats-x3.component.ts");
var i4 = __webpack_require__(/*! ./home-get-to-know-vic-government/home-get-to-know-vic-government.component.ngfactory */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./home-get-to-know-vic-government/home-get-to-know-vic-government.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-government/home-get-to-know-vic-government.component.ts");
var i6 = __webpack_require__(/*! ./home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ngfactory */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic-why-the-playbook/home-get-to-know-vic-why-the-playbook.component.ts");
var i8 = __webpack_require__(/*! ./home-get-to-know-vic.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ts");
var styles_HomeGetToKnowVicComponent = [i0.styles];
var RenderType_HomeGetToKnowVicComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeGetToKnowVicComponent, data: {} });
exports.RenderType_HomeGetToKnowVicComponent = RenderType_HomeGetToKnowVicComponent;
function View_HomeGetToKnowVicComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "section", [["id", "main-content-home"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "app-home-get-to-know-vic-stats-x3", [], null, null, null, i2.View_HomeGetToKnowVicStatsX3Component_0, i2.RenderType_HomeGetToKnowVicStatsX3Component)), i1.ɵdid(2, 114688, null, 0, i3.HomeGetToKnowVicStatsX3Component, [], null, null), (_l()(), i1.ɵeld(3, 0, null, null, 1, "app-home-get-to-know-vic-government", [], null, null, null, i4.View_HomeGetToKnowVicGovernmentComponent_0, i4.RenderType_HomeGetToKnowVicGovernmentComponent)), i1.ɵdid(4, 114688, null, 0, i5.HomeGetToKnowVicGovernmentComponent, [], null, null), (_l()(), i1.ɵeld(5, 0, null, null, 1, "app-home-get-to-know-vic-why-the-playbook", [], null, null, null, i6.View_HomeGetToKnowVicWhyThePlaybookComponent_0, i6.RenderType_HomeGetToKnowVicWhyThePlaybookComponent)), i1.ɵdid(6, 114688, null, 0, i7.HomeGetToKnowVicWhyThePlaybookComponent, [], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 4, 0); _ck(_v, 6, 0); }, null); }
exports.View_HomeGetToKnowVicComponent_0 = View_HomeGetToKnowVicComponent_0;
function View_HomeGetToKnowVicComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-get-to-know-vic", [], null, null, null, View_HomeGetToKnowVicComponent_0, RenderType_HomeGetToKnowVicComponent)), i1.ɵdid(1, 114688, null, 0, i8.HomeGetToKnowVicComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeGetToKnowVicComponent_Host_0 = View_HomeGetToKnowVicComponent_Host_0;
var HomeGetToKnowVicComponentNgFactory = i1.ɵccf("app-home-get-to-know-vic", i8.HomeGetToKnowVicComponent, View_HomeGetToKnowVicComponent_Host_0, {}, {}, []);
exports.HomeGetToKnowVicComponentNgFactory = HomeGetToKnowVicComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HomeGetToKnowVicComponent = /** @class */ (function () {
    function HomeGetToKnowVicComponent() {
    }
    HomeGetToKnowVicComponent.prototype.ngOnInit = function () {
    };
    return HomeGetToKnowVicComponent;
}());
exports.HomeGetToKnowVicComponent = HomeGetToKnowVicComponent;


/***/ }),

/***/ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.css.shim.ngstyle.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.css.shim.ngstyle.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ngfactory.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ngfactory.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home-inspiring-stories.component.css.shim.ngstyle */ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! ./home-inspiring-stories.component */ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! ../../../stories/services/stories.service */ "./src/app/modules/stories/services/stories.service.ts");
var i8 = __webpack_require__(/*! ../../services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i9 = __webpack_require__(/*! ../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var styles_HomeInspiringStoriesComponent = [i0.styles];
var RenderType_HomeInspiringStoriesComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeInspiringStoriesComponent, data: {} });
exports.RenderType_HomeInspiringStoriesComponent = RenderType_HomeInspiringStoriesComponent;
function View_HomeInspiringStoriesComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "inspi-stories-image"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "circle-inspi-stories-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClickStoriesId(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_1); }); }
function View_HomeInspiringStoriesComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.scrollArticle() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 6, "div", [["class", "menu-footer-item-1"]], null, null, null, null, null)), i1.ɵdid(4, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "border-top-color": 0 }), (_l()(), i1.ɵeld(6, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(8, { "color": 0 }), (_l()(), i1.ɵted(9, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "/", _v.context.$implicit.slug); _ck(_v, 1, 0, currVal_2); var currVal_3 = _ck(_v, 5, 0, _v.context.$implicit.color); _ck(_v, 4, 0, currVal_3); var currVal_4 = _ck(_v, 8, 0, _v.context.$implicit.color); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _v.context.$implicit.chapter_name; _ck(_v, 9, 0, currVal_5); }); }
function View_HomeInspiringStoriesComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The name fied is required "]))], null, null); }
function View_HomeInspiringStoriesComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Min length 1 character "]))], null, null); }
function View_HomeInspiringStoriesComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_HomeInspiringStoriesComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct name format "]))], null, null); }
function View_HomeInspiringStoriesComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The email fied is required "]))], null, null); }
function View_HomeInspiringStoriesComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Max length 50 character "]))], null, null); }
function View_HomeInspiringStoriesComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "red-tick"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please, correct email format "]))], null, null); }
function View_HomeInspiringStoriesComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 26, "section", [["id", "inspiring-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "container-inspi-stories-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Inspiring Stories"])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SOME OF THE AMAZING ENTREPRENEURS WE MET ALONG THE WAY"])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", ""], ["data-aos", "fade-right"], ["src", "assets/images/images-home/icon-inspi-sto.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "container-inspi-stories-image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_1)), i1.ɵdid(9, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 3, "a", [["class", "inspi-read-all"], ["data-aos", "fade-up"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(11, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(12, 1), (_l()(), i1.ɵted(-1, null, ["Read All Stories"])), (_l()(), i1.ɵeld(14, 0, null, null, 12, "div", [["class", "dive-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dive into it "])), (_l()(), i1.ɵeld(17, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/icon3-header.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Don't waste any more time and start your entrepreneurial journey right now."])), (_l()(), i1.ɵeld(21, 0, null, null, 3, "div", [["class", "container-menu-footer fix-width-100"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 2, "div", [["class", "menu-footer"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_2)), i1.ɵdid(24, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(25, 0, null, null, 1, "a", [["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onStartReading() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["START READING"])), (_l()(), i1.ɵeld(27, 0, null, null, 49, "div", [["class", "popup"], ["id", "popup-newsletters"]], null, null, null, null, null)), i1.ɵdid(28, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(29, { "display": 0 }), (_l()(), i1.ɵeld(30, 0, null, null, 46, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 2, "div", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Please enter your e-mail address to keep reading: "])), (_l()(), i1.ɵeld(34, 0, null, null, 42, "div", [["class", "enter-email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 41, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 37).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 37).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitFormNewss() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(36, 16384, null, 0, i4.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(37, 540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]), i1.ɵdid(39, 16384, null, 0, i4.NgControlStatusGroup, [[4, i4.ControlContainer]], null, null), (_l()(), i1.ɵeld(40, 0, null, null, 31, "div", [["class", "container-form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 30, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(44, 0, null, null, 5, "input", [["formControlName", "name"], ["name", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 45)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 45).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 45)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 45)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(45, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(47, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(49, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_3)), i1.ɵdid(51, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_4)), i1.ɵdid(53, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_5)), i1.ɵdid(55, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_6)), i1.ɵdid(57, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(58, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-mail address"])), (_l()(), i1.ɵeld(60, 0, null, null, 5, "input", [["formControlName", "email"], ["name", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 61)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 61).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 61)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 61)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(61, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(63, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(65, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_7)), i1.ɵdid(67, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_8)), i1.ɵdid(69, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeInspiringStoriesComponent_9)), i1.ɵdid(71, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(72, 0, null, null, 4, "div", [["class", "group-btn-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 1, "button", [["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(75, 0, null, null, 1, "button", [["id", "close-btn-download-newss"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CANCEL"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.stories; _ck(_v, 9, 0, currVal_0); var currVal_3 = _ck(_v, 12, 0, "/entrepreneurs-stories"); _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.chapter; _ck(_v, 24, 0, currVal_4); var currVal_5 = _ck(_v, 29, 0, (_co.isDisplay ? "none" : "")); _ck(_v, 28, 0, currVal_5); var currVal_13 = _co.frmPopupNews; _ck(_v, 37, 0, currVal_13); var currVal_21 = "name"; _ck(_v, 47, 0, currVal_21); var currVal_22 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.required)); _ck(_v, 51, 0, currVal_22); var currVal_23 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.minlength)); _ck(_v, 53, 0, currVal_23); var currVal_24 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.maxlength)); _ck(_v, 55, 0, currVal_24); var currVal_25 = (_co.frmPopupNews.controls.name.dirty && ((_co.frmPopupNews.controls.name.errors == null) ? null : _co.frmPopupNews.controls.name.errors.pattern)); _ck(_v, 57, 0, currVal_25); var currVal_33 = "email"; _ck(_v, 63, 0, currVal_33); var currVal_34 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.required)); _ck(_v, 67, 0, currVal_34); var currVal_35 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.maxlength)); _ck(_v, 69, 0, currVal_35); var currVal_36 = (_co.frmPopupNews.controls.email.dirty && ((_co.frmPopupNews.controls.email.errors == null) ? null : _co.frmPopupNews.controls.email.errors.pattern)); _ck(_v, 71, 0, currVal_36); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 11).target; var currVal_2 = i1.ɵnov(_v, 11).href; _ck(_v, 10, 0, currVal_1, currVal_2); var currVal_6 = i1.ɵnov(_v, 39).ngClassUntouched; var currVal_7 = i1.ɵnov(_v, 39).ngClassTouched; var currVal_8 = i1.ɵnov(_v, 39).ngClassPristine; var currVal_9 = i1.ɵnov(_v, 39).ngClassDirty; var currVal_10 = i1.ɵnov(_v, 39).ngClassValid; var currVal_11 = i1.ɵnov(_v, 39).ngClassInvalid; var currVal_12 = i1.ɵnov(_v, 39).ngClassPending; _ck(_v, 35, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_14 = i1.ɵnov(_v, 49).ngClassUntouched; var currVal_15 = i1.ɵnov(_v, 49).ngClassTouched; var currVal_16 = i1.ɵnov(_v, 49).ngClassPristine; var currVal_17 = i1.ɵnov(_v, 49).ngClassDirty; var currVal_18 = i1.ɵnov(_v, 49).ngClassValid; var currVal_19 = i1.ɵnov(_v, 49).ngClassInvalid; var currVal_20 = i1.ɵnov(_v, 49).ngClassPending; _ck(_v, 44, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_26 = i1.ɵnov(_v, 65).ngClassUntouched; var currVal_27 = i1.ɵnov(_v, 65).ngClassTouched; var currVal_28 = i1.ɵnov(_v, 65).ngClassPristine; var currVal_29 = i1.ɵnov(_v, 65).ngClassDirty; var currVal_30 = i1.ɵnov(_v, 65).ngClassValid; var currVal_31 = i1.ɵnov(_v, 65).ngClassInvalid; var currVal_32 = i1.ɵnov(_v, 65).ngClassPending; _ck(_v, 60, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); }); }
exports.View_HomeInspiringStoriesComponent_0 = View_HomeInspiringStoriesComponent_0;
function View_HomeInspiringStoriesComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-inspiring-stories", [], null, null, null, View_HomeInspiringStoriesComponent_0, RenderType_HomeInspiringStoriesComponent)), i1.ɵdid(1, 114688, null, 0, i5.HomeInspiringStoriesComponent, [i6.WINDOW, i6.LOCAL_STORAGE, i7.StoriesService, i8.ChapterService, i2.Router, i9.NewLetterService, i4.FormBuilder], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeInspiringStoriesComponent_Host_0 = View_HomeInspiringStoriesComponent_Host_0;
var HomeInspiringStoriesComponentNgFactory = i1.ɵccf("app-home-inspiring-stories", i5.HomeInspiringStoriesComponent, View_HomeInspiringStoriesComponent_Host_0, {}, {}, []);
exports.HomeInspiringStoriesComponentNgFactory = HomeInspiringStoriesComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var stories_service_1 = __webpack_require__(/*! ./../../../stories/services/stories.service */ "./src/app/modules/stories/services/stories.service.ts");
var chapter_service_1 = __webpack_require__(/*! ./../../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var new_letter_service_1 = __webpack_require__(/*! ./../../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
var HomeInspiringStoriesComponent = /** @class */ (function () {
    function HomeInspiringStoriesComponent(window, localStorage, _serviceStories, _serviceChapter, _router, _serviceNewsLetter, _formBuilder) {
        this.window = window;
        this.localStorage = localStorage;
        this._serviceStories = _serviceStories;
        this._serviceChapter = _serviceChapter;
        this._router = _router;
        this._serviceNewsLetter = _serviceNewsLetter;
        this._formBuilder = _formBuilder;
        this.stories = [];
        this.count = 0;
        this.limit = 8;
        this.isDisplay = false;
    }
    HomeInspiringStoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.getAllStories();
        this._serviceChapter.getChapter().subscribe(function (data) {
            _this.chapter = data.results;
            _this.fristChapter = data.results[0].slug;
            _this.fristArticle = data.results[0].articles[0].slug;
        });
    };
    HomeInspiringStoriesComponent.prototype.getAllStories = function () {
        var _this = this;
        this._serviceStories.getStories().subscribe(function (data) {
            data.results.forEach(function (element, index) {
                if (index < _this.limit) {
                    _this.stories.push(element);
                    _this.count++;
                }
            });
        });
    };
    HomeInspiringStoriesComponent.prototype.onClickStoriesId = function (id) {
        this._router.navigate(['/entrepreneurs-stories'], { fragment: id });
    };
    HomeInspiringStoriesComponent.prototype.onStartReading = function () {
        if (this.localStorage.getItem(this.key) != null) {
            // We have items key = email
            this._router.navigate(["/" + this.fristChapter + "/" + this.fristArticle], { fragment: 'content-in-chapter' });
        }
        else {
            // No items
            var modal = document.getElementById('popup-newsletters');
            var button = document.getElementById('close-btn-download-newss');
            modal.style.display = "block";
            button.onclick = function () {
                modal.style.display = "none";
            };
            // When the user clicks anywhere outside of the modal, close it
            this.window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    };
    HomeInspiringStoriesComponent.prototype.createForm = function () {
        this.frmPopupNews = this._formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50)
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
                ]]
        });
    };
    HomeInspiringStoriesComponent.prototype.onSubmitFormNewss = function () {
        var _this = this;
        if (this.frmPopupNews.valid) {
            //console.log(this.frmPopupNews.value);
            this.localStorage.setItem(this.key, this.frmPopupNews.value.email);
            this._serviceNewsLetter.sendNewLetter(this.frmPopupNews.value).subscribe(function (data) { return data; });
            this.frmPopupNews.reset();
            sweetalert2_1.default({
                title: 'Subscribed',
                type: 'success',
                confirmButtonText: 'OK'
            }).then(function (results) {
                if (results.value) {
                    _this._serviceChapter.getChapter().subscribe(function (data) {
                        _this._router.navigate(['/', data.results[0].slug, data.results[0].articles[0].slug], { fragment: 'content-in-chapter' });
                    });
                }
            });
            this.isDisplay = !this.isDisplay;
        }
        else {
            this.validateAllFormFields(this.frmPopupNews);
        }
    };
    HomeInspiringStoriesComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof forms_1.FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    return HomeInspiringStoriesComponent;
}());
exports.HomeInspiringStoriesComponent = HomeInspiringStoriesComponent;


/***/ }),

/***/ "./src/app/modules/home/components/home.component.css.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/home.component.css.shim.ngstyle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/home/components/home.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/components/home.component.ngfactory.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/modules/home/components/home.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./home-banner/home-banner.component.ngfactory */ "./src/app/modules/home/components/home-banner/home-banner.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./home-banner/home-banner.component */ "./src/app/modules/home/components/home-banner/home-banner.component.ts");
var i4 = __webpack_require__(/*! ./home-anatomy/home-anatomy.component.ngfactory */ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./home-anatomy/home-anatomy.component */ "./src/app/modules/home/components/home-anatomy/home-anatomy.component.ts");
var i6 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i7 = __webpack_require__(/*! ../services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i8 = __webpack_require__(/*! ../services/article.service */ "./src/app/modules/home/services/article.service.ts");
var i9 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i10 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i11 = __webpack_require__(/*! ../../footer/services/new-letter.service */ "./src/app/modules/footer/services/new-letter.service.ts");
var i12 = __webpack_require__(/*! ./home-get-to-know-vic/home-get-to-know-vic.component.ngfactory */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ngfactory.js");
var i13 = __webpack_require__(/*! ./home-get-to-know-vic/home-get-to-know-vic.component */ "./src/app/modules/home/components/home-get-to-know-vic/home-get-to-know-vic.component.ts");
var i14 = __webpack_require__(/*! ./home-inspiring-stories/home-inspiring-stories.component.ngfactory */ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ngfactory.js");
var i15 = __webpack_require__(/*! ./home-inspiring-stories/home-inspiring-stories.component */ "./src/app/modules/home/components/home-inspiring-stories/home-inspiring-stories.component.ts");
var i16 = __webpack_require__(/*! ../../stories/services/stories.service */ "./src/app/modules/stories/services/stories.service.ts");
var i17 = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/components/home.component.ts");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home-banner", [], null, null, null, i2.View_HomeBannerComponent_0, i2.RenderType_HomeBannerComponent)), i1.ɵdid(1, 114688, null, 0, i3.HomeBannerComponent, [], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "app-home-anatomy", [], null, null, null, i4.View_HomeAnatomyComponent_0, i4.RenderType_HomeAnatomyComponent)), i1.ɵdid(3, 4308992, null, 0, i5.HomeAnatomyComponent, [i6.WINDOW, i6.LOCAL_STORAGE, i7.ChapterService, i8.ArticleService, i9.Router, i10.FormBuilder, i11.NewLetterService], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-home-get-to-know-vic", [], null, null, null, i12.View_HomeGetToKnowVicComponent_0, i12.RenderType_HomeGetToKnowVicComponent)), i1.ɵdid(5, 114688, null, 0, i13.HomeGetToKnowVicComponent, [], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 1, "app-home-inspiring-stories", [], null, null, null, i14.View_HomeInspiringStoriesComponent_0, i14.RenderType_HomeInspiringStoriesComponent)), i1.ɵdid(7, 114688, null, 0, i15.HomeInspiringStoriesComponent, [i6.WINDOW, i6.LOCAL_STORAGE, i16.StoriesService, i7.ChapterService, i9.Router, i11.NewLetterService, i10.FormBuilder], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); }, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 4308992, null, 0, i17.HomeComponent, [i6.WINDOW], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("app-home", i17.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/home/components/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/components/home.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
// import { Meta} from '@angular/platform-browser';
// import { SeoService } from './../../../common/services/seo.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(window) {
        this.window = window;
        var url = window.location.href;
        // this._serviceSEO.setOgTitle('Home Page')
        // this.updateMeta('og:title','Home Page');
        // this.updateMeta('og:url',`${url}`);
        // this.updateMeta('og:type','website');
        // this.updateMeta('og:description','In this book, you will learn useful techniques to get yourself established, find directories of networks that may be beneficial to you...');
        // this.updateMeta('og:image','https://www.hatchquarter.com.au/assets/images/OG.jpg');
        // this.meta.updateTag({ property: 'og:title', content: 'Home Page' });
        // this.meta.updateTag({ property: 'og:url', content: `${url}`});
        // this.meta.updateTag({ property: 'og:type', content: 'website' });
        // this.meta.updateTag({ property: 'og:description', content: 'In this book, you will learn useful techniques to get yourself established, find directories of networks that may be beneficial to you...' });
        // this.meta.updateTag({ property: 'og:image', content: 'https://www.hatchquarter.com.au/assets/images/OG.jpg' });
        // this.meta.updateTag({ content: 'Angular 4 meta service'} , 'name="description"' );
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/modules/home/home.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/home.module.ngfactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./home.module */ "./src/app/modules/home/home.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./components/home.component.ngfactory */ "./src/app/modules/home/components/home.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! ./components/home.component */ "./src/app/modules/home/components/home.component.ts");
var HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.HomeComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.FormBuilder, i5.FormBuilder, []), i0.ɵmpd(4608, i5.ɵangular_packages_forms_forms_i, i5.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i6.RouterModule, i6.RouterModule, [[2, i6.ɵangular_packages_router_router_a], [2, i6.Router]]), i0.ɵmpd(1073742336, i5.ɵangular_packages_forms_forms_bb, i5.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i5.ReactiveFormsModule, i5.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i5.FormsModule, i5.FormsModule, []), i0.ɵmpd(1073742336, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i6.ROUTES, function () { return [[{ path: "", component: i7.HomeComponent, children: [] }]]; }, [])]); });
exports.HomeModuleNgFactory = HomeModuleNgFactory;


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var home_component_1 = __webpack_require__(/*! ./components/home.component */ "./src/app/modules/home/components/home.component.ts");
// import { AppModule } from './../../app.module';
// import { AppComponent } from './../../app.component';
// import { ServerModule } from '@angular/platform-server';
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: []
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/modules/home/services/article.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/home/services/article.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var router_1 = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/bundles/router.umd.js");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var ArticleService = /** @class */ (function () {
    function ArticleService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.url = environment_1.environment.apiUrl;
        this.headers = this.setHeaders();
    }
    ArticleService.prototype.setHeaders = function () {
        var header = new http_1.HttpHeaders();
        return header.set('Content-Type', 'application/json');
    };
    ArticleService.prototype.getArticle = function () {
        var url = this.url + "/api/article/";
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return error; }));
    };
    ArticleService.prototype.getArticleByName = function (id) {
        var _this = this;
        var url = this.url + "/api/article/" + id;
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return _this.errorHandler(error); }));
    };
    ArticleService.prototype.errorHandler = function (error) {
        if (error.status == 400) {
            this._router.navigate(['/page-not-found']);
        }
        return rxjs_1.throwError(error);
    };
    ArticleService.ngInjectableDef = i0.defineInjectable({ factory: function ArticleService_Factory() { return new ArticleService(i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: ArticleService, providedIn: "root" });
    return ArticleService;
}());
exports.ArticleService = ArticleService;


/***/ }),

/***/ "./src/app/modules/home/services/chapter.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/home/services/chapter.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var router_1 = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/bundles/router.umd.js");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var ChapterService = /** @class */ (function () {
    function ChapterService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.url = environment_1.environment.apiUrl;
        this.headers = this.setHeaders();
    }
    ChapterService.prototype.setHeaders = function () {
        var header = new http_1.HttpHeaders();
        return header.set('Content-Type', 'application/json');
    };
    ChapterService.prototype.getChapter = function () {
        var _this = this;
        var url = this.url + "/api/chapter/";
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return _this.errorHandler(error); }));
    };
    ChapterService.prototype.getChapterByName = function (name) {
        var _this = this;
        var url = this.url + "/api/chapter/" + name;
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return _this.errorHandler(error); }));
    };
    ChapterService.prototype.errorHandler = function (error) {
        if (error.status == 400 || error.status == 404) {
            this._router.navigate(['/page-not-found']);
        }
        return rxjs_1.throwError(error);
    };
    ChapterService.ngInjectableDef = i0.defineInjectable({ factory: function ChapterService_Factory() { return new ChapterService(i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: ChapterService, providedIn: "root" });
    return ChapterService;
}());
exports.ChapterService = ChapterService;


/***/ }),

/***/ "./src/app/modules/navigation/navigation.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/navigation/navigation.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/navigation/navigation.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/modules/navigation/navigation.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./navigation.component.css.shim.ngstyle */ "./src/app/modules/navigation/navigation.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./navigation.component */ "./src/app/modules/navigation/navigation.component.ts");
var i5 = __webpack_require__(/*! ./services/send-mail.service */ "./src/app/modules/navigation/services/send-mail.service.ts");
var i6 = __webpack_require__(/*! ../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i7 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i8 = __webpack_require__(/*! @angular/http */ "@angular/http");
var styles_NavigationComponent = [i0.styles];
var RenderType_NavigationComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NavigationComponent, data: {} });
exports.RenderType_NavigationComponent = RenderType_NavigationComponent;
function View_NavigationComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 6, "div", [], null, null, null, null, null)), i1.ɵdid(4, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "border-top-color": 0 }), (_l()(), i1.ɵeld(6, 0, null, null, 3, "p", [], null, null, null, null, null)), i1.ɵdid(7, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(8, { "color": 0 }), (_l()(), i1.ɵted(9, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "/", _v.context.$implicit.slug); _ck(_v, 1, 0, currVal_2); var currVal_3 = _ck(_v, 5, 0, _v.context.$implicit.color); _ck(_v, 4, 0, currVal_3); var currVal_4 = _ck(_v, 8, 0, _v.context.$implicit.color); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _v.context.$implicit.chapter_name; _ck(_v, 9, 0, currVal_5); }); }
function View_NavigationComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "anatomy-hidden"], ["id", "menu-anatomy-show"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXPLORE ALL CHAPTERS"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationComponent_2)), i1.ɵdid(4, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.chapter; _ck(_v, 4, 0, currVal_0); }, null); }
function View_NavigationComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 33, "section", [["class", "nava"], ["id", "menu-respon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["class", "fa-bars fas "], ["id", "menu-startup"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 3, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [["class", "logo-color-nav-res"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/HatchQuarter_Playbook_logo-colour-web.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 19, "ul", [["id", "menu-startup-show"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 3, "a", [["id", "menu-startup-show-click-on"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 2, "li", [["class", ""], ["id", "bg-anatomy"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Anatomy of a Startup "])), (_l()(), i1.ɵeld(11, 0, null, null, 0, "i", [["class", "fas fa-plus"], ["id", "menu-anatomy"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationComponent_1)), i1.ɵdid(13, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 3, "a", [["routerLink", "/get-to-know-victoria"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(15, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(16, 0, null, null, 1, "li", [["class", "bg-menu-res"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get to Know Victoria"])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "a", [["onclick", "openModel();"]], null, null, null, null, null)), i1.ɵdid(19, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(20, { "cursor": 0 }), (_l()(), i1.ɵeld(21, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Download Playbook"])), (_l()(), i1.ɵeld(23, 0, null, null, 3, "a", [["routerLink", "/contact-us"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(24, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(25, 0, null, null, 1, "li", [["class", "bg-menu-res"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Us"])), (_l()(), i1.ɵeld(27, 0, null, null, 6, "div", [["id", "hidden-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "i", [["class", "fas fa-times"], ["id", "close-download"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 4, "a", [["onclick", "openModel();"]], null, null, null, null, null)), i1.ɵdid(30, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(31, { "cursor": 0 }), (_l()(), i1.ɵeld(32, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DOWNLOAD PLAYBOOK"])), (_l()(), i1.ɵeld(34, 0, null, null, 28, "section", [["class", "nava"], ["id", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 36).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(36, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(37, 1), (_l()(), i1.ɵeld(38, 0, null, null, 1, "p", [["class", "logo-color-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/images-home/HatchQuarter_Playbook_logo-colour-web.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 22, "nav", [], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 21, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(44, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(45, 2), (_l()(), i1.ɵted(-1, null, ["The Playbook"])), (_l()(), i1.ɵeld(47, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 50).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(50, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(51, 1), (_l()(), i1.ɵted(-1, null, ["Get to Know Victoria"])), (_l()(), i1.ɵeld(53, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 56).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(56, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(57, 1), (_l()(), i1.ɵted(-1, null, ["Entrepreneurs Stories"])), (_l()(), i1.ɵeld(59, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "a", [["href", "javascript:void(0);"], ["onclick", "openModel();"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DOWNLOAD PLAYBOOK"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.chapter; _ck(_v, 13, 0, currVal_3); var currVal_6 = "/get-to-know-victoria"; _ck(_v, 15, 0, currVal_6); var currVal_7 = _ck(_v, 20, 0, "pointer"); _ck(_v, 19, 0, currVal_7); var currVal_10 = "/contact-us"; _ck(_v, 24, 0, currVal_10); var currVal_11 = _ck(_v, 31, 0, "pointer"); _ck(_v, 30, 0, currVal_11); var currVal_14 = _ck(_v, 37, 0, "/"); _ck(_v, 36, 0, currVal_14); var currVal_17 = _ck(_v, 45, 0, "/", _co.fristChapter); _ck(_v, 44, 0, currVal_17); var currVal_20 = _ck(_v, 51, 0, "/get-to-know-victoria"); _ck(_v, 50, 0, currVal_20); var currVal_23 = _ck(_v, 57, 0, "/entrepreneurs-stories"); _ck(_v, 56, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = i1.ɵnov(_v, 15).target; var currVal_5 = i1.ɵnov(_v, 15).href; _ck(_v, 14, 0, currVal_4, currVal_5); var currVal_8 = i1.ɵnov(_v, 24).target; var currVal_9 = i1.ɵnov(_v, 24).href; _ck(_v, 23, 0, currVal_8, currVal_9); var currVal_12 = i1.ɵnov(_v, 36).target; var currVal_13 = i1.ɵnov(_v, 36).href; _ck(_v, 35, 0, currVal_12, currVal_13); var currVal_15 = i1.ɵnov(_v, 44).target; var currVal_16 = i1.ɵnov(_v, 44).href; _ck(_v, 43, 0, currVal_15, currVal_16); var currVal_18 = i1.ɵnov(_v, 50).target; var currVal_19 = i1.ɵnov(_v, 50).href; _ck(_v, 49, 0, currVal_18, currVal_19); var currVal_21 = i1.ɵnov(_v, 56).target; var currVal_22 = i1.ɵnov(_v, 56).href; _ck(_v, 55, 0, currVal_21, currVal_22); }); }
exports.View_NavigationComponent_0 = View_NavigationComponent_0;
function View_NavigationComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-navigation", [], null, null, null, View_NavigationComponent_0, RenderType_NavigationComponent)), i1.ɵdid(1, 4308992, null, 0, i4.NavigationComponent, [i5.SendMailService, i6.ChapterService, i7.FormBuilder, i8.Http], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NavigationComponent_Host_0 = View_NavigationComponent_Host_0;
var NavigationComponentNgFactory = i1.ɵccf("app-navigation", i4.NavigationComponent, View_NavigationComponent_Host_0, {}, {}, []);
exports.NavigationComponentNgFactory = NavigationComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/navigation/navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/navigation/navigation.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var send_mail_service_1 = __webpack_require__(/*! ./services/send-mail.service */ "./src/app/modules/navigation/services/send-mail.service.ts");
var chapter_service_1 = __webpack_require__(/*! ../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_serviceSendMail, _serviceChapter, _formBuilder, http) {
        this._serviceSendMail = _serviceSendMail;
        this._serviceChapter = _serviceChapter;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.chapter = [];
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            // click navigation
            $(document).ready(function () {
                $('#menu-anatomy-show > a').click(function () {
                    $('#menu-anatomy-show').slideToggle('fast');
                    $('html, body').removeClass('noscroll');
                    // $("#menu-anatomy").toggleClass('fa-minus');
                    if ($('#menu-anatomy').hasClass('fa-plus')) {
                        $('#menu-anatomy').removeClass('fa-plus');
                        $('#menu-anatomy').addClass('fa-minus');
                    }
                    else {
                        $('#menu-anatomy').removeClass('fa-minus');
                        $('#menu-anatomy').addClass('fa-plus');
                    }
                    $('#bg-anatomy').toggleClass('bg-menu-anatomy');
                    $('#menu-startup-show').hide('fast');
                    $('#menu-startup-show').hide('fast');
                    if ($('#menu-startup').hasClass('fa-times')) {
                        $('#menu-startup').removeClass('fa-times');
                        $('#menu-startup').addClass('fa-bars');
                    }
                });
            });
        }, 1000);
    };
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._serviceChapter.getChapter().subscribe(function (data) {
            _this.chapter = data.results;
            _this.fristChapter = data.results[0].slug;
            _this.fristArticle = data.results[0].articles[0].slug;
        });
        // this._serviceSendMail.listLanguage().subscribe(
        //   data => {
        //     // console.log(data);
        //     this.listLangage = data;
        //   }
        // );
    };
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;


/***/ }),

/***/ "./src/app/modules/navigation/services/send-mail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/navigation/services/send-mail.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var SendMailService = /** @class */ (function () {
    function SendMailService(_http) {
        this._http = _http;
        this.url = environment_1.environment.apiUrl;
        this.headers = this.setHeaders();
    }
    SendMailService.prototype.setHeaders = function () {
        var header = new http_1.HttpHeaders();
        return header.set('Content-Type', 'application/json');
    };
    SendMailService.prototype.sendMail = function (email) {
        var url = this.url + "/api/user/send-file/";
        return this._http.post(url, email, { headers: this.headers });
    };
    SendMailService.prototype.listLanguage = function () {
        var url = this.url + "/api/file/listlanguage/";
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }));
    };
    SendMailService.ngInjectableDef = i0.defineInjectable({ factory: function SendMailService_Factory() { return new SendMailService(i0.inject(i1.HttpClient)); }, token: SendMailService, providedIn: "root" });
    return SendMailService;
}());
exports.SendMailService = SendMailService;


/***/ }),

/***/ "./src/app/modules/page-error/page-error.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/page-error/page-error.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/page-error/page-error.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/modules/page-error/page-error.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./page-error.component.css.shim.ngstyle */ "./src/app/modules/page-error/page-error.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./page-error.component */ "./src/app/modules/page-error/page-error.component.ts");
var styles_PageErrorComponent = [i0.styles];
var RenderType_PageErrorComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PageErrorComponent, data: {} });
exports.RenderType_PageErrorComponent = RenderType_PageErrorComponent;
function View_PageErrorComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "div", [["class", "height-menu"], ["style", "display:none"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "div", [["class", "grid-menu"], ["style", "display:none"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 31, "section", [["id", "background"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "background-404-black"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 20, "div", [["class", "row-all"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 4, "div", [["class", "row-one-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "block-background-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "div", [["class", "block-background-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "div", [["class", "block-background-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "block-background-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "row-one-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "div", [["class", "block-background-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "div", [["class", "block-background-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "div", [["class", "block-background-7"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "div", [["class", "block-background-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 4, "div", [["class", "row-one-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "div", [["class", "block-background-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "div", [["class", "block-background-10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 0, "div", [["class", "block-background-11"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 0, "div", [["class", "block-background-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 4, "div", [["class", "row-one-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 0, "div", [["class", "block-background-13"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "div", [["class", "block-background-14"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 0, "div", [["class", "block-background-15"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "div", [["class", "block-background-16"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 8, "div", [["class", "content-background"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 2, "div", [["class", "text-404"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["404"])), (_l()(), i1.ɵeld(29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Seems we have gotten lost."])), (_l()(), i1.ɵeld(31, 0, null, null, 2, "a", [["class", "btn-go-home"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(32, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["GO HOME"]))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 32, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 32).target; var currVal_1 = i1.ɵnov(_v, 32).href; _ck(_v, 31, 0, currVal_0, currVal_1); }); }
exports.View_PageErrorComponent_0 = View_PageErrorComponent_0;
function View_PageErrorComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-page-error", [], null, null, null, View_PageErrorComponent_0, RenderType_PageErrorComponent)), i1.ɵdid(1, 114688, null, 0, i4.PageErrorComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PageErrorComponent_Host_0 = View_PageErrorComponent_Host_0;
var PageErrorComponentNgFactory = i1.ɵccf("app-page-error", i4.PageErrorComponent, View_PageErrorComponent_Host_0, {}, {}, []);
exports.PageErrorComponentNgFactory = PageErrorComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/page-error/page-error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/page-error/page-error.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var PageErrorComponent = /** @class */ (function () {
    function PageErrorComponent() {
    }
    PageErrorComponent.prototype.ngOnInit = function () {
    };
    return PageErrorComponent;
}());
exports.PageErrorComponent = PageErrorComponent;


/***/ }),

/***/ "./src/app/modules/stories/components/stories.component.css.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/stories/components/stories.component.css.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/modules/stories/components/stories.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/modules/stories/components/stories.component.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./stories.component.css.shim.ngstyle */ "./src/app/modules/stories/components/stories.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../common/pipes/make-text-css.pipe */ "./src/app/common/pipes/make-text-css.pipe.ts");
var i3 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ../../../common/pipes/sharecomponent/explore-chapter.component.ngfactory */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ngfactory.js");
var i7 = __webpack_require__(/*! ../../../common/pipes/sharecomponent/explore-chapter.component */ "./src/app/common/pipes/sharecomponent/explore-chapter.component.ts");
var i8 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i9 = __webpack_require__(/*! ../../home/services/chapter.service */ "./src/app/modules/home/services/chapter.service.ts");
var i10 = __webpack_require__(/*! ./stories.component */ "./src/app/modules/stories/components/stories.component.ts");
var i11 = __webpack_require__(/*! ../services/stories.service */ "./src/app/modules/stories/services/stories.service.ts");
var styles_StoriesComponent = [i0.styles];
var RenderType_StoriesComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_StoriesComponent, data: {} });
exports.RenderType_StoriesComponent = RenderType_StoriesComponent;
function View_StoriesComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "content-body-stories"]], [[8, "id", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "div", [["class", "col1-body-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 6, "div", [["class", "text-body-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, ["", ""])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [["class", "col2-body-stories"]], [[8, "innerHTML", 1]], null, null, null, null)), i1.ɵppd(10, 1)], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.id, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.job; _ck(_v, 8, 0, currVal_3); var currVal_4 = i1.ɵunv(_v, 9, 0, _ck(_v, 10, 0, i1.ɵnov(_v.parent, 0), _v.context.$implicit.content)); _ck(_v, 9, 0, currVal_4); }); }
function View_StoriesComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.MakeTextCssPipe, [i3.DomSanitizer]), (_l()(), i1.ɵeld(1, 0, null, null, 39, "section", [["id", "stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 26, "div", [["class", "header-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "background-stories-black"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 17, "div", [["class", "col-header1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 16, "div", [["class", "content-header-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["International "])), (_l()(), i1.ɵeld(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Entrepreneur Stories"])), (_l()(), i1.ɵeld(10, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Along the way we have heard the inspiring stories of migrant and refugees entrepreneurs from different backgrounds and countries, all with one thing in common \u2013 they have all realised their dream in Australia. Hear from them, their stories of success and the obstacles they have faced during their journey to success in Australia."])), (_l()(), i1.ɵeld(12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" If you are an entrepreneur and would like to share your story, please do!"])), (_l()(), i1.ɵeld(15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The more we share about our experiences the more we can help other international entrepreneurs and the stronger our community will be."])), (_l()(), i1.ɵeld(18, 0, null, null, 3, "div", [["class", "btn-stories"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "a", [["routerLink", "/contact-us"], ["style", "cursor: pointer;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["SUBMIT YOUR STORY"])), (_l()(), i1.ɵeld(22, 0, null, null, 6, "div", [["class", "col-header2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 2, "div", [["class", "row1-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "img", [["src", "./assets/images/images-stories/people-1.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "img", [["src", "./assets/images/images-stories/people-2.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 2, "div", [["class", "row2-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 0, "img", [["src", "./assets/images/images-stories/people-3.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "img", [["src", "./assets/images/images-stories/people-4.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 11, "div", [["class", "body-stories"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StoriesComponent_1)), i1.ɵdid(31, 802816, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(32, 0, null, null, 8, "div", [["class", "footer-btn-stories"], ["id", "stories_1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 2, "a", [["class", "btn-submit-stories"], ["routerLink", "/contact-us"], ["style", "cursor: pointer;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 34).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(34, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["SUBMIT MY STORY"])), (_l()(), i1.ɵeld(36, 0, null, null, 4, "a", [["class", "btn-more-stories"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.btnLoadMore() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(37, 278528, null, 0, i5.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(38, { "pointer-events": 0, "cursor": 1, "opacity": 2 }), i1.ɵpod(39, { "display": 0 }), (_l()(), i1.ɵted(-1, null, ["LOAD MORE STORIES"])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "app-explore-chapter", [], null, null, null, i6.View_ExploreChapterComponent_0, i6.RenderType_ExploreChapterComponent)), i1.ɵdid(42, 114688, null, 0, i7.ExploreChapterComponent, [i8.WINDOW, i9.ChapterService], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/contact-us"; _ck(_v, 20, 0, currVal_2); var currVal_3 = _co.stories; _ck(_v, 31, 0, currVal_3); var currVal_6 = "/contact-us"; _ck(_v, 34, 0, currVal_6); var currVal_7 = (_co.check ? _ck(_v, 38, 0, "none", "default", "0.3") : _ck(_v, 39, 0, "block")); _ck(_v, 37, 0, currVal_7); _ck(_v, 42, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 20).target; var currVal_1 = i1.ɵnov(_v, 20).href; _ck(_v, 19, 0, currVal_0, currVal_1); var currVal_4 = i1.ɵnov(_v, 34).target; var currVal_5 = i1.ɵnov(_v, 34).href; _ck(_v, 33, 0, currVal_4, currVal_5); }); }
exports.View_StoriesComponent_0 = View_StoriesComponent_0;
function View_StoriesComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-stories", [], null, null, null, View_StoriesComponent_0, RenderType_StoriesComponent)), i1.ɵdid(1, 12697600, null, 0, i10.StoriesComponent, [i8.WINDOW, i11.StoriesService, i4.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_StoriesComponent_Host_0 = View_StoriesComponent_Host_0;
var StoriesComponentNgFactory = i1.ɵccf("app-stories", i10.StoriesComponent, View_StoriesComponent_Host_0, {}, {}, []);
exports.StoriesComponentNgFactory = StoriesComponentNgFactory;


/***/ }),

/***/ "./src/app/modules/stories/components/stories.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/stories/components/stories.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var stories_service_1 = __webpack_require__(/*! ./../services/stories.service */ "./src/app/modules/stories/services/stories.service.ts");
// import { Meta } from '@angular/platform-browser';
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var StoriesComponent = /** @class */ (function () {
    function StoriesComponent(window, _serviceStories, activatedRoute) {
        this.window = window;
        this._serviceStories = _serviceStories;
        this.activatedRoute = activatedRoute;
        this.stories = [];
        this.storiesload = [];
        this.limit = 8;
        this.check = false;
        this.scrollExecuted = false;
        this.count = 0;
        // const url = window.location.href;
        // this.meta.updateTag({ property: 'og:title', content: 'Stories' });
        // this.meta.updateTag({ property: 'og:url', content: `${url}` });
        // this.meta.updateTag({ property: 'og:type', content: 'website' });
        // this.meta.updateTag({ property: 'og:description', content: 'Along the way we have heard the inspiring stories of migrant and refugees entrepreneurs from different backgrounds and countries...' });
        // this.meta.updateTag({ property: 'og:image', content: 'https://www.hatchquarter.com.au/assets/images/OG.jpg' });
    }
    StoriesComponent.prototype.ngOnInit = function () {
        this.getAllStories();
    };
    StoriesComponent.prototype.ngAfterViewInit = function () {
        this.window.scrollTo(0, 0);
    };
    StoriesComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.scrollExecuted) {
            var routeFragmentSubscription_1;
            // Automatic scroll
            routeFragmentSubscription_1 = this.activatedRoute.fragment.subscribe(function (fragment) {
                if (fragment) {
                    var element = document.getElementById(fragment);
                    //console.log(element);
                    if (element) {
                        //element.scrollIntoView();
                        $("html, body").animate({ scrollTop: $([element]).offset().top - 100 }, 1000);
                        _this.scrollExecuted = true;
                        // Free resources
                        setTimeout(function () {
                            //console.log('routeFragmentSubscription unsubscribe');
                            routeFragmentSubscription_1.unsubscribe();
                        }, 1000);
                    }
                }
            });
        }
    };
    StoriesComponent.prototype.getAllStories = function () {
        var _this = this;
        this._serviceStories.getStories().subscribe(function (data) {
            _this.storiesload = data.results;
            _this.storiesload.forEach(function (element, index) {
                if (index < _this.limit) {
                    _this.stories.push(element);
                    _this.count++;
                }
            });
        });
    };
    StoriesComponent.prototype.btnLoadMore = function () {
        for (var i = this.count; i < this.storiesload.length; i++) {
            //if (i == (this.count + 4)) break;
            this.stories.push(this.storiesload[i]);
            this.count++;
        }
        //this.count += 4;
        if (this.count >= this.storiesload.length)
            this.check = true;
    };
    return StoriesComponent;
}());
exports.StoriesComponent = StoriesComponent;


/***/ }),

/***/ "./src/app/modules/stories/services/stories.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/stories/services/stories.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var StoriesService = /** @class */ (function () {
    function StoriesService(_http) {
        this._http = _http;
        this.url = environment_1.environment.apiUrl;
        this.headers = this.setHeaders();
    }
    StoriesService.prototype.setHeaders = function () {
        var header = new http_1.HttpHeaders();
        return header.set('Content-Type', 'application/json');
    };
    StoriesService.prototype.getStories = function () {
        var url = this.url + "/api/stories/";
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return error; }));
    };
    StoriesService.prototype.getDetailStories = function (id) {
        var url = this.url + "/api/stories/" + id + "/";
        return this._http.get(url, { headers: this.headers })
            .pipe(operators_1.map(function (data) { return data; }), operators_1.catchError(function (error) { return error; }));
    };
    StoriesService.ngInjectableDef = i0.defineInjectable({ factory: function StoriesService_Factory() { return new StoriesService(i0.inject(i1.HttpClient)); }, token: StoriesService, providedIn: "root" });
    return StoriesService;
}());
exports.StoriesService = StoriesService;


/***/ }),

/***/ "./src/app/modules/stories/stories.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/modules/stories/stories.module.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./stories.module */ "./src/app/modules/stories/stories.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./components/stories.component.ngfactory */ "./src/app/modules/stories/components/stories.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../common/pipes/share-module.module */ "./src/app/common/pipes/share-module.module.ts");
var i7 = __webpack_require__(/*! ./components/stories.component */ "./src/app/modules/stories/components/stories.component.ts");
var StoriesModuleNgFactory = i0.ɵcmf(i1.StoriesModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.StoriesComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.ShareModuleModule, i6.ShareModuleModule, []), i0.ɵmpd(1073742336, i1.StoriesModule, i1.StoriesModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i7.StoriesComponent, children: [] }]]; }, [])]); });
exports.StoriesModuleNgFactory = StoriesModuleNgFactory;


/***/ }),

/***/ "./src/app/modules/stories/stories.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/stories/stories.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
// import { HttpClientModule } from '@angular/common/http';
var stories_component_1 = __webpack_require__(/*! ./components/stories.component */ "./src/app/modules/stories/components/stories.component.ts");
var routes = [
    {
        path: '',
        component: stories_component_1.StoriesComponent,
        children: []
    }
];
var StoriesModule = /** @class */ (function () {
    function StoriesModule() {
    }
    return StoriesModule;
}());
exports.StoriesModule = StoriesModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiUrl: 'http://172.104.63.199:85',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/modules/home/home.module.ngfactory.js */ "./src/app/modules/home/home.module.ngfactory.js");
var __lazy_1__ = __webpack_require__(/*! ./app/modules/get-to-know-vic/get-to-know-vic.module.ngfactory.js */ "./src/app/modules/get-to-know-vic/get-to-know-vic.module.ngfactory.js");
var __lazy_2__ = __webpack_require__(/*! ./app/modules/contact/contact.module.ngfactory.js */ "./src/app/modules/contact/contact.module.ngfactory.js");
var __lazy_3__ = __webpack_require__(/*! ./app/modules/stories/stories.module.ngfactory.js */ "./src/app/modules/stories/stories.module.ngfactory.js");
var __lazy_4__ = __webpack_require__(/*! ./app/modules/chapter/chapter-heart/chapter-heart.module.ngfactory.js */ "./src/app/modules/chapter/chapter-heart/chapter-heart.module.ngfactory.js");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "./modules/home/home.module#HomeModule": __lazy_0__.HomeModuleNgFactory, "./modules/get-to-know-vic/get-to-know-vic.module#GetToKnowVicModule": __lazy_1__.GetToKnowVicModuleNgFactory, "./modules/contact/contact.module#ContactModule": __lazy_2__.ContactModuleNgFactory, "./modules/stories/stories.module#StoriesModule": __lazy_3__.StoriesModuleNgFactory, "./modules/chapter/chapter-heart/chapter-heart.module#ChapterHeartModule": __lazy_4__.ChapterHeartModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\APPCORE\Playbook\test-for-server\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-toolkit/universal":
/*!****************************************!*\
  !*** external "@ng-toolkit/universal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-toolkit/universal");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map