/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*global window, global*/\nvar util = __webpack_require__(/*! util */ \"util\")\nvar assert = __webpack_require__(/*! assert */ \"assert\")\nfunction now() { return new Date().getTime() }\n\nvar slice = Array.prototype.slice\nvar console\nvar times = {}\n\nif (typeof global !== \"undefined\" && global.console) {\n    console = global.console\n} else if (typeof window !== \"undefined\" && window.console) {\n    console = window.console\n} else {\n    console = {}\n}\n\nvar functions = [\n    [log, \"log\"],\n    [info, \"info\"],\n    [warn, \"warn\"],\n    [error, \"error\"],\n    [time, \"time\"],\n    [timeEnd, \"timeEnd\"],\n    [trace, \"trace\"],\n    [dir, \"dir\"],\n    [consoleAssert, \"assert\"]\n]\n\nfor (var i = 0; i < functions.length; i++) {\n    var tuple = functions[i]\n    var f = tuple[0]\n    var name = tuple[1]\n\n    if (!console[name]) {\n        console[name] = f\n    }\n}\n\nmodule.exports = console\n\nfunction log() {}\n\nfunction info() {\n    console.log.apply(console, arguments)\n}\n\nfunction warn() {\n    console.log.apply(console, arguments)\n}\n\nfunction error() {\n    console.warn.apply(console, arguments)\n}\n\nfunction time(label) {\n    times[label] = now()\n}\n\nfunction timeEnd(label) {\n    var time = times[label]\n    if (!time) {\n        throw new Error(\"No such label: \" + label)\n    }\n\n    delete times[label]\n    var duration = now() - time\n    console.log(label + \": \" + duration + \"ms\")\n}\n\nfunction trace() {\n    var err = new Error()\n    err.name = \"Trace\"\n    err.message = util.format.apply(null, arguments)\n    console.error(err.stack)\n}\n\nfunction dir(object) {\n    console.log(util.inspect(object) + \"\\n\")\n}\n\nfunction consoleAssert(expression) {\n    if (!expression) {\n        var arr = slice.call(arguments, 1)\n        assert.ok(false, util.format.apply(null, arr))\n    }\n}\n\n\n//# sourceURL=webpack://Apache-Arrow-TS/./node_modules/console-browserify/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar server_1 = __importDefault(__webpack_require__(/*! ./server */ \"./src/server.ts\"));\n(0, server_1.default)();\n\n\n//# sourceURL=webpack://Apache-Arrow-TS/./src/index.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar app = (0, express_1.default)();\napp.use(express_1.default.json());\napp.get(\"/\", function (_, res) {\n    console.log('Hello');\n});\nvar start = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        try {\n            app.listen(3000, function () {\n                console.log(\"Server started on port 3000\");\n            });\n        }\n        catch (error) {\n            console.error(error);\n        }\n        return [2];\n    });\n}); };\nexports[\"default\"] = start;\n\n\n//# sourceURL=webpack://Apache-Arrow-TS/./src/server.ts?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;