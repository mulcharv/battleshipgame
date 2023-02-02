/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./BebasNeue-Regular.ttf */ "./src/BebasNeue-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'mainFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    min-width: 300px;\n    min-height: 300px;\n    background-color: #fbeb94;\n}\n\n#title {\n    font-family: 'titleFont';\n    font-size: 48px;\n}\n\n#axisButton {\n    font-family: 'mainFont';\n    height: 30px;\n    width: 100px;\n    background-color: #f16d06;\n    border-radius: 6px;\n    border: #414e51 3px solid;\n    cursor: pointer;\n    opacity: 0.9;\n}\n\n#commandPlace {\n    font-family: 'mainFont';\n    font-size: large;\n}\n\n\n\n#plGraph, #cpuGraph {\n    width: 30vw;\n    min-width: 200px;\n    height: 30vw;\n    min-height: 200px;\n\n    display: grid;\n    grid-template-rows: repeat(10, 3vw);\n    grid-template-columns: repeat(10, 3vw);\n    grid-auto-flow: row;\n    background-color: #a3d4f3;\n    border: #414e51 thick solid;\n}\n\n\n.cell {\n    width: 2.9vw;\n    height: 2.9vw;\n    border-width: 0.05vw;\n    border-color: black;\n    border-style: solid;\n}\n\n.docked {\n    background-color: #414e51;\n}\n\n#gameContainer {\n    display: grid;\n    gap: 5vw;\n    grid-template-columns: 30vw;\n    justify-content: center;\n}\n \n#plGraph {\n    grid-column: 1/2;\n}\n\n#cpuGraph {\n    grid-column: 2/3;\n}\n\n#headBlock {\n    display: grid;\n    gap: 5px;\n    grid-auto-flow: row;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#axisContainer {\n    justify-self: center;\n}\n\n#commandPlace {\n    justify-self: center;\n}\n\n#gameResult {\n    justify-self: center;\n    font-size: large;\n    font-weight: bold;\n    font-family: 'mainFont';\n}\n\n#restartContainer {\n    justify-self: center;\n}\n\n#restart {\n    background-color: #f16d06;\n    opacity: 0.9;\n    height: 40px;\n    width: 100px;\n    font-family: 'mainFont';\n    border-radius: 6px;\n    border: #414e51 3px solid;\n    cursor: pointer;\n\n}\n\n.canhov:hover {\n    cursor: pointer;\n    background-color: #f16d06;\n}\n\n#axisButton:active, #restart:active {\n    transform: translate(0px, 5px);\n    box-shadow: 0px 1px 0px 0px;\n}\n\n#axisButton:hover, #restart:hover {\n    opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,0DAAiD;IACjD,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;;;AAIA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,mBAAmB;IACnB,yBAAyB;IACzB,2BAA2B;AAC/B;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;;AAEnB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,UAAU;AACd","sourcesContent":["@font-face {\n    font-family: 'mainFont';\n    src: url('./BebasNeue-Regular.ttf') format('ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    min-width: 300px;\n    min-height: 300px;\n    background-color: #fbeb94;\n}\n\n#title {\n    font-family: 'titleFont';\n    font-size: 48px;\n}\n\n#axisButton {\n    font-family: 'mainFont';\n    height: 30px;\n    width: 100px;\n    background-color: #f16d06;\n    border-radius: 6px;\n    border: #414e51 3px solid;\n    cursor: pointer;\n    opacity: 0.9;\n}\n\n#commandPlace {\n    font-family: 'mainFont';\n    font-size: large;\n}\n\n\n\n#plGraph, #cpuGraph {\n    width: 30vw;\n    min-width: 200px;\n    height: 30vw;\n    min-height: 200px;\n\n    display: grid;\n    grid-template-rows: repeat(10, 3vw);\n    grid-template-columns: repeat(10, 3vw);\n    grid-auto-flow: row;\n    background-color: #a3d4f3;\n    border: #414e51 thick solid;\n}\n\n\n.cell {\n    width: 2.9vw;\n    height: 2.9vw;\n    border-width: 0.05vw;\n    border-color: black;\n    border-style: solid;\n}\n\n.docked {\n    background-color: #414e51;\n}\n\n#gameContainer {\n    display: grid;\n    gap: 5vw;\n    grid-template-columns: 30vw;\n    justify-content: center;\n}\n \n#plGraph {\n    grid-column: 1/2;\n}\n\n#cpuGraph {\n    grid-column: 2/3;\n}\n\n#headBlock {\n    display: grid;\n    gap: 5px;\n    grid-auto-flow: row;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#axisContainer {\n    justify-self: center;\n}\n\n#commandPlace {\n    justify-self: center;\n}\n\n#gameResult {\n    justify-self: center;\n    font-size: large;\n    font-weight: bold;\n    font-family: 'mainFont';\n}\n\n#restartContainer {\n    justify-self: center;\n}\n\n#restart {\n    background-color: #f16d06;\n    opacity: 0.9;\n    height: 40px;\n    width: 100px;\n    font-family: 'mainFont';\n    border-radius: 6px;\n    border: #414e51 3px solid;\n    cursor: pointer;\n\n}\n\n.canhov:hover {\n    cursor: pointer;\n    background-color: #f16d06;\n}\n\n#axisButton:active, #restart:active {\n    transform: translate(0px, 5px);\n    box-shadow: 0px 1px 0px 0px;\n}\n\n#axisButton:hover, #restart:hover {\n    opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/placemodule.js":
/*!****************************!*\
  !*** ./src/placemodule.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeLoop": () => (/* binding */ placeLoop),
/* harmony export */   "placePage": () => (/* binding */ placePage)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/script.js");




function placePage() {
    const placeMain = document.createElement('div');
    placeMain.setAttribute('id', 'placeMain');

    const headBlock = document.createElement('div');
    headBlock.setAttribute('id', 'headBlock');
    placeMain.appendChild(headBlock);

    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'BATTLESHIP';
    headBlock.appendChild(title);

    const commandPlace = document.createElement('div');
    commandPlace.setAttribute('id', 'commandPlace');
    commandPlace.textContent = 'Place your Carrier';
    headBlock.appendChild(commandPlace);

    const axisContainer = document.createElement('div');
    axisContainer.setAttribute('id', 'axisContainer');
    headBlock.appendChild(axisContainer);

    const axisButton = document.createElement('button');
    axisButton.setAttribute('id', 'axisButton');
    axisButton.textContent = `Axis: X`;
    axisContainer.appendChild(axisButton);

    axisButton.addEventListener('click', function() {
        if (axisButton.textContent.includes('X')) {
            axisButton.textContent = 'Axis: Y';
        }
        else if (axisButton.textContent.includes('Y')) {
            axisButton.textContent = 'Axis: X';
        }
    })

    const gameContainer = document.createElement('div');
    gameContainer.setAttribute('id', 'gameContainer');
    placeMain.appendChild(gameContainer);

    const plGraph = document.createElement('div');
    plGraph.setAttribute('id', 'plGraph');
    gameContainer.appendChild(plGraph);

    for (let j=9; j>-1; --j) {
        for (let i=0; i<10; ++i) {
            let cell = document.createElement('div');
            cell.setAttribute('id', `${i}p,${j}p`);
            cell.className = 'cell canhov';
            plGraph.appendChild(cell);
        }
    }

    return placeMain;
    
}


function placeLoop () {
    document.addEventListener('DOMContentLoaded', function() {
        let playerBoard = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();
        let axisButton = document.getElementById('axisButton');

        let boats = [{Carrier: 5}, {Battleship: 4}, {Cruiser: 3}, {Submarine: 3}, {Destroyer: 2}];
        let commandNames = ['Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
        let bigcont = document.getElementById('plGraph');
        let commandPlace = document.getElementById('commandPlace');
        let queue = [];
        queue.push(boats[0]);

            bigcont.addEventListener('click', function eventHandler(e) {
                console.log(playerBoard.shipsSet.length);
                let boatName = Object.keys(queue[0])[0];
                let boatLength = Object.values(queue[0])[0];
                let begCoord = e.target.id;
                let interim = begCoord.replace(/\[|\]/g,'');
                let interim2 = interim.replace(/\p/g,'').split(',');
                let begCoordNum = [];
                for (const coord of interim2) {
                    let coordNum = Number(coord);
                    begCoordNum.push(coordNum);
                }

                let direction; 

                if (axisButton.textContent.includes('X')) {
                    direction = 'X';
                }

                else if (axisButton.textContent.includes('Y')) {
                    direction = 'Y';
                }


                let placedShip = playerBoard.place(boatLength, begCoordNum, boatName, direction);


                if (!placedShip == false) {
                    let start = placedShip.begCoord;
                    let end = placedShip.endCoord;

                    if (placedShip.direc == 'Y') {
                        let x = start[0];
                        for (let i=start[1]; i>(end[1]-1); --i) {
                            let tile = document.getElementById(`${x}p,${i}p`);
                            tile.classList.add('docked');
                            tile.classList.remove('canhov');
                        }
                        boats.shift();
                        queue.push(boats[0]);
                        queue.shift();
                        commandPlace.textContent = `Place your ${commandNames[0]}`;
                        commandNames.shift();
                        console.log(queue);
                        if (playerBoard.shipsSet.length == 5) {
                            this.removeEventListener('click', eventHandler);
                            return playPage(playerBoard);
                        }
                    }

                    if (placedShip.direc == 'X') {
                        let y = start[1];
                        for (let i=start[0]; i<(end[0]+1); ++i) {
                            let tile = document.getElementById(`${i}p,${y}p`);
                            tile.classList.add('docked');
                            tile.classList.remove('canhov');

                        }
                        boats.shift();
                        queue.push(boats[0]);
                        queue.shift();
                        commandPlace.textContent = `Place your ${commandNames[0]}`;
                        commandNames.shift();
                        console.log(queue);
                        if (playerBoard.shipsSet.length == 5) {
                            this.removeEventListener('click', eventHandler);
                            return playPage(playerBoard);
                        }
                    }
                }
            })
            })
        }


function playPage(playerBoard) {
    let plGraph = document.getElementById('plGraph');
    for (let j=9; j>-1; --j) {
        for (let i=0; i<10; ++i) {
            let cell = document.getElementById(`${i}p,${j}p`);
            cell.classList.remove('canhov')
            ;
        }
    }
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.style.gridTemplateColumns = "30vw 30vw"

    let cpuBoard = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();

    let axisContainer = document.getElementById('axisContainer');
    let commandPlace = document.getElementById('commandPlace');

    axisContainer.innerHTML = '';
    commandPlace.innerHTML = '';

    const cpuGraph = document.createElement('div');
    cpuGraph.setAttribute('id', 'cpuGraph');
    gameContainer.appendChild(cpuGraph);

    for (let j=9; j>-1; --j) {
        for (let i=0; i<10; ++i) {
            let cell = document.createElement('div');
            cell.setAttribute('id', `${i}c,${j}c`);
            cell.className = 'cell canhov';
            cpuGraph.appendChild(cell);
        }
    }

    let boats = [{Carrier: 5}, {Battleship: 4}, {Cruiser: 3}, {Submarine: 3}, {Destroyer: 2}];
    let queue = [];
    queue.push(boats[0]);


    while (cpuBoard.shipsSet.length < 5) {
        let maxcoord = 9;
        let num1 = Math.floor(Math.random()*(maxcoord+1));
        let num2 = Math.floor(Math.random()*(maxcoord+1));
        let begCoord = [num1, num2];
        console.log(begCoord);

        let dirArr = ['X','Y'];
        let maxdir = 1;
        let dirnum = Math.floor(Math.random()*(maxdir+1));
        console.log(dirnum);

        let direc = dirArr[dirnum].replace(/\[|\]/g,'');
        console.log(direc);

        let boatName = Object.keys(queue[0])[0];
        let boatLength = Object.values(queue[0])[0];

        let placedShip = cpuBoard.place(boatLength, begCoord, boatName, direc);

        if (!placedShip == false) {

                    boats.shift();
                    queue.push(boats[0]);
                    queue.shift();
                    console.log(queue);
        }

            
        }

        return playLoop(playerBoard, cpuBoard)
    }

    function playLoop(playerBoard, cpuBoard) {
        let p1 = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer)('human', playerBoard);
        let p2 = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer)('computer', cpuBoard);

        let headBlock = document.getElementById('headBlock');

        let gameResult = document.createElement('div');
        gameResult.setAttribute('id', 'gameResult');
        headBlock.appendChild(gameResult);

        let restartContainer = document.createElement('div');
        restartContainer.setAttribute('id', 'restartContainer');
        headBlock.appendChild(restartContainer);
        

        let cpuGraph = document.getElementById('cpuGraph');
        cpuGraph.addEventListener('click', function graphHandler(e) {
            let rawcoord = e.target.id;
            let interim = rawcoord.replace(/\D/g,'').split('');
            let actcoord = [];
            for (const coord of interim) {
                let coordNum = Number(coord);
                actcoord.push(coordNum);
            }

            if (cpuBoard[actcoord].marked == null) {
            let loopResult = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.gameLoop)(actcoord, p1, p2);

            if (loopResult == 'sunk') {
                let pSunk = p1.board.status;
                let cSunk = p2.board.status;
                this.removeEventListener('click', graphHandler);

                if (pSunk == 'sunk') {
                    gameResult.textContent = 'The enemy has won!'
                }
                if (cSunk == 'sunk') {
                    gameResult.textContent = 'You have won!'
                }                

                let restart = document.createElement('button');
                restart.setAttribute('id', 'restart');
                restart.textContent = 'Play Again';
                restartContainer.appendChild(restart);

                restart.addEventListener('click', function() {
                    location.reload();
                })
                return;
            }
            }

            
        })
   
    }






/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardActions": () => (/* binding */ boardActions),
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer),
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard),
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop),
/* harmony export */   "ship": () => (/* binding */ ship),
/* harmony export */   "shipActions": () => (/* binding */ shipActions)
/* harmony export */ });

let shipActions = {
    hit() {
        if (this.marks < this.length) {
        return this.marks += 1;
        }
    },
    isSunk() {
        if (this.marks == this.length) {
            this.sunk = true;
        }
        else if (this.marks < this.length) {
            this.sunk  = false;
        }
        return this.sunk;
    }
 }

function ship(length, begCo, type, direc) {
    let realShip = Object.create(shipActions);
    realShip.length = length;
    realShip.sunk = false;
    realShip.marks = 0;
    realShip.begCoord = begCo;
    realShip.type = type;
    realShip.direc = direc;

    if (realShip.direc == 'Y') {
    realShip.endCoord = [realShip.begCoord[0],realShip.begCoord[1]-length+1];
    }
    else if (realShip.direc == 'X') {
    realShip.endCoord = [realShip.begCoord[0]+length-1,realShip.begCoord[1]];
    }
  
    return realShip;
}

let boardActions = {
    build() {
        let boardSize = 10;
        for (let i=0; i<boardSize; ++i) {
            for (let j=0; j<boardSize; ++j) {
                let square = [i,j];
                this[square] = {};
                let properties = this[square];
                properties.marked = null;
                properties.docked = false;
                properties.shipID = null;
            }
        }
        return this;
    }
}

function gameBoard() {
    let board = Object.create(boardActions);
    board.build();
    board.shipsSet = [];
    board.status = 'floating';
    board.plType = null;

    board.place = function(length, begCo, type, direc) {
        let newShip = ship(length, begCo, type, direc);
        
        if ((newShip.endCoord[0]>9) || (newShip.endCoord[1]>9)) {
            return false;
        }

        if ((newShip.endCoord[0]<0) || (newShip.endCoord[1]<0)) {
            return false;
        }


        let start = newShip.begCoord;
        let end = newShip.endCoord;

        if (newShip.direc == 'Y') {
            let x = start[0];

            for (let i=start[1]; i>(end[1]-1); --i) {
                let square = [x,i];
                let tile = this[square];
                if (tile.docked == true) {
                    return false;
                }
            }

            for (let i=start[1]; i>(end[1]-1); --i) {
                let square = [x,i]
                let tile = this[square];
                tile.docked = true;
                tile.shipID = newShip.type;
            }
        }
        
        if (newShip.direc == 'X') {
            let y = start[1];

            for (let i=start[0]; i<(end[0]+1); ++i) {
                let square = [i,y];
                let tile = this[square];
                console.log(this);
                if (tile.docked == true) {
                    return false;
                }
            }

            for (let i=start[0]; i<(end[0]+1); ++i) {
                let square = [i,y]
                let tile = this[square];
                tile.docked = true;
                tile.shipID = newShip.type;
            }
        }

        this.shipsSet.push(newShip);

        return newShip;
    }

    board.receiveAttack = function(coord) {
        let target = this[coord];
        if (target.docked == true) {
            target.marked = 'hit';
            let name = target.shipID;
            let fleet = this.shipsSet;

            for (let i=0; i< fleet.length; ++i) {
                if (fleet[i].type == name) {
                    fleet[i].hit();
                    fleet[i].isSunk();
                }
            }
        }

        if (target.docked == false) {
            target.marked = 'miss';
        }

        return target.marked;
    }

    board.setSunk = function() {
        let count = 0;
        let fleet = this.shipsSet;
        for (let i=0; i< fleet.length; ++i) {
            if (fleet[i].sunk == true) {
                count += 1;
            }
        }
        if (count == 5) {
            this.status = 'sunk';
        }

        return this.status;
    }

    return board;
}

function createPlayer(type, board) {
    let player = {};
    player.type = type;
    player.board = board;
    player.moves = [];
    let possMoves = [[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]];


    player.compAttack = function(gameBoard) {
        if (this.moves.length > 0) {
            let lastMove = this.moves[this.moves.length-1];
            let lastcoord = Object.keys(lastMove)[0];
            let coordarr = lastcoord.split(',');
            let coordnum = [];
            for (const coord of coordarr) {
                let coordfilt = Number(coord);
                coordnum.push(coordfilt);
            }
            let lastStatus = Object.values(lastMove)[0];
            if (lastStatus == 'hit') {
                let adjMoves = [];
                for (const poss of possMoves) {
                    let newMove = [];
                    let newX = coordnum[0] + poss[0];
                    let newY = coordnum[1] + poss[1];
                    newMove.push(newX);
                    newMove.push(newY);
                    adjMoves.push(newMove);
                }
                let legalMoves = [];
                for (const adj of adjMoves) {
                    if ((0 <= adj[0] && adj[0] <= 9) && (0 <= adj[1] && adj[1] <= 9)) {
                        if (gameBoard[adj].marked == null) {
                            legalMoves.push(adj);
                        }
                    }
                }
                if (legalMoves.length > 0) {
                let chosInd = Math.floor(Math.random()*(legalMoves.length));
                let chosFin = legalMoves[chosInd];
                let smartMove = gameBoard.receiveAttack(chosFin);
                let pubSmart = {[chosFin]:smartMove};
                this.moves.push(pubSmart);
                return smartMove;
                }
            }
        }

        let boardSize = 10;
        let unMarked = [];
        for (let i=0; i<boardSize; ++i) {
            for (let j=0; j<boardSize; ++j) {
                let square = [i,j];
                let tile = gameBoard[square];
                if (tile.marked == null) {
                    unMarked.push(square);
                }
            }
        }
        let length = unMarked.length;
        let index = Math.floor(Math.random()*length);
        let chosen = unMarked[index];
        let status = gameBoard.receiveAttack(chosen);
        let pubStat = {[chosen]:status};
        this.moves.push(pubStat);
        return status;
    }

    return player;
}

function gameLoop (coord, p1, p2) {

    let cAtStat = p2.board.receiveAttack(coord);

    let targetid = `${coord[0]}c,${coord[1]}c`;
    let targetcell = document.getElementById(targetid);

    if (cAtStat == 'hit') {
        targetcell.style.backgroundColor = '#ff6961';
        targetcell.classList.remove('canhov');
        let sunkStatus = p2.board.setSunk();
        if (sunkStatus == 'sunk') {
            return sunkStatus;
        }
    }

    if (cAtStat == 'miss') {
        targetcell.style.backgroundColor = '#77DD77';
        targetcell.classList.remove('canhov');
    }

    let pAtStat = p2.compAttack(p1.board);
    let latestMove = p2.moves[p2.moves.length-1];
    let latestcoord = Object.keys(latestMove)[0];
    let coordarr = latestcoord.split(',');
    let coordnum = [];
    for (const coord of coordarr) {
        let coordfilt = Number(coord);
        coordnum.push(coordfilt);
    }
    let latestid = `${coordnum[0]}p,${coordnum[1]}p`;
    let latestCell = document.getElementById(latestid);

    if (pAtStat == 'hit') {
        latestCell.style.backgroundColor = '#ff6961';
        let sunkStatus = p1.board.setSunk();
        if (sunkStatus == 'sunk') {
            return sunkStatus;
        }
    }

    if (pAtStat == 'miss') {
        latestCell.style.backgroundColor = '#77DD77';
    }

    return 'floating';
}




/***/ }),

/***/ "./src/BebasNeue-Regular.ttf":
/*!***********************************!*\
  !*** ./src/BebasNeue-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placemodule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placemodule.js */ "./src/placemodule.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function component() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');


    const page = document.createElement('div');
    page.setAttribute('id', 'page');
    main.appendChild(page);

    page.appendChild((0,_placemodule_js__WEBPACK_IMPORTED_MODULE_0__.placePage)());
    (0,_placemodule_js__WEBPACK_IMPORTED_MODULE_0__.placeLoop)()

    return main;
}

document.body.appendChild(component())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsOEJBQThCLHlFQUF5RSx1QkFBdUIseUJBQXlCLEdBQUcsWUFBWSxrQkFBa0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLEdBQUcsWUFBWSwrQkFBK0Isc0JBQXNCLEdBQUcsaUJBQWlCLDhCQUE4QixtQkFBbUIsbUJBQW1CLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLHNCQUFzQixtQkFBbUIsR0FBRyxtQkFBbUIsOEJBQThCLHVCQUF1QixHQUFHLDZCQUE2QixrQkFBa0IsdUJBQXVCLG1CQUFtQix3QkFBd0Isc0JBQXNCLDBDQUEwQyw2Q0FBNkMsMEJBQTBCLGdDQUFnQyxrQ0FBa0MsR0FBRyxhQUFhLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQiwwQkFBMEIsR0FBRyxhQUFhLGdDQUFnQyxHQUFHLG9CQUFvQixvQkFBb0IsZUFBZSxrQ0FBa0MsOEJBQThCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxlQUFlLHVCQUF1QixHQUFHLGdCQUFnQixvQkFBb0IsZUFBZSwwQkFBMEIsOEJBQThCLDBCQUEwQixHQUFHLG9CQUFvQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsaUJBQWlCLDJCQUEyQix1QkFBdUIsd0JBQXdCLDhCQUE4QixHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxjQUFjLGdDQUFnQyxtQkFBbUIsbUJBQW1CLG1CQUFtQiw4QkFBOEIseUJBQXlCLGdDQUFnQyxzQkFBc0IsS0FBSyxtQkFBbUIsc0JBQXNCLGdDQUFnQyxHQUFHLHlDQUF5QyxxQ0FBcUMsa0NBQWtDLEdBQUcsdUNBQXVDLGlCQUFpQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUscUNBQXFDLDhCQUE4Qix3REFBd0QsdUJBQXVCLHlCQUF5QixHQUFHLFlBQVksa0JBQWtCLG1CQUFtQix1QkFBdUIsd0JBQXdCLGdDQUFnQyxHQUFHLFlBQVksK0JBQStCLHNCQUFzQixHQUFHLGlCQUFpQiw4QkFBOEIsbUJBQW1CLG1CQUFtQixnQ0FBZ0MseUJBQXlCLGdDQUFnQyxzQkFBc0IsbUJBQW1CLEdBQUcsbUJBQW1CLDhCQUE4Qix1QkFBdUIsR0FBRyw2QkFBNkIsa0JBQWtCLHVCQUF1QixtQkFBbUIsd0JBQXdCLHNCQUFzQiwwQ0FBMEMsNkNBQTZDLDBCQUEwQixnQ0FBZ0Msa0NBQWtDLEdBQUcsYUFBYSxtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIsMEJBQTBCLEdBQUcsYUFBYSxnQ0FBZ0MsR0FBRyxvQkFBb0Isb0JBQW9CLGVBQWUsa0NBQWtDLDhCQUE4QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxnQkFBZ0Isb0JBQW9CLGVBQWUsMEJBQTBCLDhCQUE4QiwwQkFBMEIsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsbUJBQW1CLDJCQUEyQixHQUFHLGlCQUFpQiwyQkFBMkIsdUJBQXVCLHdCQUF3Qiw4QkFBOEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsY0FBYyxnQ0FBZ0MsbUJBQW1CLG1CQUFtQixtQkFBbUIsOEJBQThCLHlCQUF5QixnQ0FBZ0Msc0JBQXNCLEtBQUssbUJBQW1CLHNCQUFzQixnQ0FBZ0MsR0FBRyx5Q0FBeUMscUNBQXFDLGtDQUFrQyxHQUFHLHVDQUF1QyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDeGlMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZitGOzs7O0FBSS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixNQUFNO0FBQ3hCLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0EsdUNBQXVDLEVBQUUsSUFBSSxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDBCQUEwQixxREFBUztBQUNuQzs7QUFFQSxzQkFBc0IsV0FBVyxHQUFHLGNBQWMsR0FBRyxXQUFXLEdBQUcsYUFBYSxHQUFHLGFBQWE7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Qsa0VBQWtFLEVBQUUsSUFBSSxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxnQkFBZ0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNELGtFQUFrRSxFQUFFLElBQUksRUFBRTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdCQUFnQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCLHNCQUFzQixNQUFNO0FBQzVCLGtEQUFrRCxFQUFFLElBQUksRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFEQUFTOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixNQUFNO0FBQ3hCLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0EsdUNBQXVDLEVBQUUsSUFBSSxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixXQUFXLEdBQUcsY0FBYyxHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsYUFBYTtBQUM1RjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHdEQUFZO0FBQzdCLGlCQUFpQix3REFBWTs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixvREFBUTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQywwQkFBMEIsYUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkMsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQkFBc0IsU0FBUyxJQUFJLFNBQVM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWSxJQUFJLFlBQVk7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNEO0FBQ2pDOzs7QUFHckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDBEQUFTO0FBQzlCLElBQUksMERBQVM7O0FBRWI7QUFDQTs7QUFFQSxzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBnYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwZ2FtZS8uL3NyYy9wbGFjZW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwZ2FtZS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBnYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWI5NDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0aXRsZUZvbnQnO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbiNheGlzQnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2ZDA2O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogIzQxNGU1MSAzcHggc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4jY29tbWFuZFBsYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcblxcblxcbiNwbEdyYXBoLCAjY3B1R3JhcGgge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDN2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkNGYzO1xcbiAgICBib3JkZXI6ICM0MTRlNTEgdGhpY2sgc29saWQ7XFxufVxcblxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDIuOXZ3O1xcbiAgICBoZWlnaHQ6IDIuOXZ3O1xcbiAgICBib3JkZXItd2lkdGg6IDAuMDV2dztcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmRvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRlNTE7XFxufVxcblxcbiNnYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiBcXG4jcGxHcmFwaCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbiNjcHVHcmFwaCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNoZWFkQmxvY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNheGlzQ29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb21tYW5kUGxhY2Uge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVSZXN1bHQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbkZvbnQnO1xcbn1cXG5cXG4jcmVzdGFydENvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGFydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTZkMDY7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbkZvbnQnO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogIzQxNGU1MSAzcHggc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLmNhbmhvdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNmQwNjtcXG59XFxuXFxuI2F4aXNCdXR0b246YWN0aXZlLCAjcmVzdGFydDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDVweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDBweDtcXG59XFxuXFxuI2F4aXNCdXR0b246aG92ZXIsICNyZXN0YXJ0OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwwREFBaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL0JlYmFzTmV1ZS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlYjk0O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ3RpdGxlRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuI2F4aXNCdXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ21haW5Gb250JztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTZkMDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAjNDE0ZTUxIDNweCBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbiNjb21tYW5kUGxhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ21haW5Gb250JztcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuXFxuXFxuI3BsR3JhcGgsICNjcHVHcmFwaCB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDMwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgM3Z3KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDN2dyk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2Q0ZjM7XFxuICAgIGJvcmRlcjogIzQxNGU1MSB0aGljayBzb2xpZDtcXG59XFxuXFxuXFxuLmNlbGwge1xcbiAgICB3aWR0aDogMi45dnc7XFxuICAgIGhlaWdodDogMi45dnc7XFxuICAgIGJvcmRlci13aWR0aDogMC4wNXZ3O1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4uZG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGU1MTtcXG59XFxuXFxuI2dhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDV2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuIFxcbiNwbEdyYXBoIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuI2NwdUdyYXBoIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuI2hlYWRCbG9jayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2F4aXNDb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbW1hbmRQbGFjZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZVJlc3VsdCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxufVxcblxcbiNyZXN0YXJ0Q29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNmQwNjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAjNDE0ZTUxIDNweCBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4uY2FuaG92OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2ZDA2O1xcbn1cXG5cXG4jYXhpc0J1dHRvbjphY3RpdmUsICNyZXN0YXJ0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNXB4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4O1xcbn1cXG5cXG4jYXhpc0J1dHRvbjpob3ZlciwgI3Jlc3RhcnQ6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtib2FyZEFjdGlvbnMsIGdhbWVCb2FyZCwgc2hpcEFjdGlvbnMsIHNoaXAsIGNyZWF0ZVBsYXllciwgZ2FtZUxvb3B9IGZyb20gJy4vc2NyaXB0LmpzJztcblxuXG5cbmZ1bmN0aW9uIHBsYWNlUGFnZSgpIHtcbiAgICBjb25zdCBwbGFjZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGFjZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZU1haW4nKTtcblxuICAgIGNvbnN0IGhlYWRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRCbG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRCbG9jaycpO1xuICAgIHBsYWNlTWFpbi5hcHBlbmRDaGlsZChoZWFkQmxvY2spO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgaGVhZEJsb2NrLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGNvbW1hbmRQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbW1hbmRQbGFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1hbmRQbGFjZScpO1xuICAgIGNvbW1hbmRQbGFjZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIENhcnJpZXInO1xuICAgIGhlYWRCbG9jay5hcHBlbmRDaGlsZChjb21tYW5kUGxhY2UpO1xuXG4gICAgY29uc3QgYXhpc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGF4aXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdheGlzQ29udGFpbmVyJyk7XG4gICAgaGVhZEJsb2NrLmFwcGVuZENoaWxkKGF4aXNDb250YWluZXIpO1xuXG4gICAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdheGlzQnV0dG9uJyk7XG4gICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IGBBeGlzOiBYYDtcbiAgICBheGlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGF4aXNCdXR0b24pO1xuXG4gICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYXhpc0J1dHRvbi50ZXh0Q29udGVudC5pbmNsdWRlcygnWCcpKSB7XG4gICAgICAgICAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gJ0F4aXM6IFknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXNCdXR0b24udGV4dENvbnRlbnQuaW5jbHVkZXMoJ1knKSkge1xuICAgICAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9ICdBeGlzOiBYJztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbWVDb250YWluZXInKTtcbiAgICBwbGFjZU1haW4uYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwbEdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxHcmFwaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsR3JhcGgnKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsR3JhcGgpO1xuXG4gICAgZm9yIChsZXQgaj05OyBqPi0xOyAtLWopIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfXAsJHtqfXBgKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwgY2FuaG92JztcbiAgICAgICAgICAgIHBsR3JhcGguYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VNYWluO1xuICAgIFxufVxuXG5cbmZ1bmN0aW9uIHBsYWNlTG9vcCAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgICAgICAgbGV0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpc0J1dHRvbicpO1xuXG4gICAgICAgIGxldCBib2F0cyA9IFt7Q2FycmllcjogNX0sIHtCYXR0bGVzaGlwOiA0fSwge0NydWlzZXI6IDN9LCB7U3VibWFyaW5lOiAzfSwge0Rlc3Ryb3llcjogMn1dO1xuICAgICAgICBsZXQgY29tbWFuZE5hbWVzID0gWydCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llciddO1xuICAgICAgICBsZXQgYmlnY29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbEdyYXBoJyk7XG4gICAgICAgIGxldCBjb21tYW5kUGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWFuZFBsYWNlJyk7XG4gICAgICAgIGxldCBxdWV1ZSA9IFtdO1xuICAgICAgICBxdWV1ZS5wdXNoKGJvYXRzWzBdKTtcblxuICAgICAgICAgICAgYmlnY29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGV2ZW50SGFuZGxlcihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyQm9hcmQuc2hpcHNTZXQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsZXQgYm9hdE5hbWUgPSBPYmplY3Qua2V5cyhxdWV1ZVswXSlbMF07XG4gICAgICAgICAgICAgICAgbGV0IGJvYXRMZW5ndGggPSBPYmplY3QudmFsdWVzKHF1ZXVlWzBdKVswXTtcbiAgICAgICAgICAgICAgICBsZXQgYmVnQ29vcmQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJpbSA9IGJlZ0Nvb3JkLnJlcGxhY2UoL1xcW3xcXF0vZywnJyk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVyaW0yID0gaW50ZXJpbS5yZXBsYWNlKC9cXHAvZywnJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBsZXQgYmVnQ29vcmROdW0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIGludGVyaW0yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZE51bSA9IE51bWJlcihjb29yZCk7XG4gICAgICAgICAgICAgICAgICAgIGJlZ0Nvb3JkTnVtLnB1c2goY29vcmROdW0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb247IFxuXG4gICAgICAgICAgICAgICAgaWYgKGF4aXNCdXR0b24udGV4dENvbnRlbnQuaW5jbHVkZXMoJ1gnKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnWCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXhpc0J1dHRvbi50ZXh0Q29udGVudC5pbmNsdWRlcygnWScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdZJztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGxldCBwbGFjZWRTaGlwID0gcGxheWVyQm9hcmQucGxhY2UoYm9hdExlbmd0aCwgYmVnQ29vcmROdW0sIGJvYXROYW1lLCBkaXJlY3Rpb24pO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoIXBsYWNlZFNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGxhY2VkU2hpcC5iZWdDb29yZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IHBsYWNlZFNoaXAuZW5kQ29vcmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlZFNoaXAuZGlyZWMgPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IHN0YXJ0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT1zdGFydFsxXTsgaT4oZW5kWzFdLTEpOyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9cCwke2l9cGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZG9ja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdjYW5ob3YnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXRzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGJvYXRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kUGxhY2UudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke2NvbW1hbmROYW1lc1swXX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZE5hbWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWV1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuc2hpcHNTZXQubGVuZ3RoID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGxheVBhZ2UocGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlZFNoaXAuZGlyZWMgPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHN0YXJ0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT1zdGFydFswXTsgaTwoZW5kWzBdKzEpOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9cCwke3l9cGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZG9ja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdjYW5ob3YnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hdHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goYm9hdHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRQbGFjZS50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7Y29tbWFuZE5hbWVzWzBdfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kTmFtZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5zaGlwc1NldC5sZW5ndGggPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwbGF5UGFnZShwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG5cbmZ1bmN0aW9uIHBsYXlQYWdlKHBsYXllckJvYXJkKSB7XG4gICAgbGV0IHBsR3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxHcmFwaCcpO1xuICAgIGZvciAobGV0IGo9OTsgaj4tMTsgLS1qKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9cCwke2p9cGApO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW5ob3YnKVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVDb250YWluZXInKTtcbiAgICBnYW1lQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjMwdncgMzB2d1wiXG5cbiAgICBsZXQgY3B1Qm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICAgIGxldCBheGlzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXNDb250YWluZXInKTtcbiAgICBsZXQgY29tbWFuZFBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1hbmRQbGFjZScpO1xuXG4gICAgYXhpc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tYW5kUGxhY2UuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjcHVHcmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNwdUdyYXBoLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3B1R3JhcGgnKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNwdUdyYXBoKTtcblxuICAgIGZvciAobGV0IGo9OTsgaj4tMTsgLS1qKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1jLCR7an1jYCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsIGNhbmhvdic7XG4gICAgICAgICAgICBjcHVHcmFwaC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBib2F0cyA9IFt7Q2FycmllcjogNX0sIHtCYXR0bGVzaGlwOiA0fSwge0NydWlzZXI6IDN9LCB7U3VibWFyaW5lOiAzfSwge0Rlc3Ryb3llcjogMn1dO1xuICAgIGxldCBxdWV1ZSA9IFtdO1xuICAgIHF1ZXVlLnB1c2goYm9hdHNbMF0pO1xuXG5cbiAgICB3aGlsZSAoY3B1Qm9hcmQuc2hpcHNTZXQubGVuZ3RoIDwgNSkge1xuICAgICAgICBsZXQgbWF4Y29vcmQgPSA5O1xuICAgICAgICBsZXQgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4Y29vcmQrMSkpO1xuICAgICAgICBsZXQgbnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4Y29vcmQrMSkpO1xuICAgICAgICBsZXQgYmVnQ29vcmQgPSBbbnVtMSwgbnVtMl07XG4gICAgICAgIGNvbnNvbGUubG9nKGJlZ0Nvb3JkKTtcblxuICAgICAgICBsZXQgZGlyQXJyID0gWydYJywnWSddO1xuICAgICAgICBsZXQgbWF4ZGlyID0gMTtcbiAgICAgICAgbGV0IGRpcm51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4ZGlyKzEpKTtcbiAgICAgICAgY29uc29sZS5sb2coZGlybnVtKTtcblxuICAgICAgICBsZXQgZGlyZWMgPSBkaXJBcnJbZGlybnVtXS5yZXBsYWNlKC9cXFt8XFxdL2csJycpO1xuICAgICAgICBjb25zb2xlLmxvZyhkaXJlYyk7XG5cbiAgICAgICAgbGV0IGJvYXROYW1lID0gT2JqZWN0LmtleXMocXVldWVbMF0pWzBdO1xuICAgICAgICBsZXQgYm9hdExlbmd0aCA9IE9iamVjdC52YWx1ZXMocXVldWVbMF0pWzBdO1xuXG4gICAgICAgIGxldCBwbGFjZWRTaGlwID0gY3B1Qm9hcmQucGxhY2UoYm9hdExlbmd0aCwgYmVnQ29vcmQsIGJvYXROYW1lLCBkaXJlYyk7XG5cbiAgICAgICAgaWYgKCFwbGFjZWRTaGlwID09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9hdHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChib2F0c1swXSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbGF5TG9vcChwbGF5ZXJCb2FyZCwgY3B1Qm9hcmQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheUxvb3AocGxheWVyQm9hcmQsIGNwdUJvYXJkKSB7XG4gICAgICAgIGxldCBwMSA9IGNyZWF0ZVBsYXllcignaHVtYW4nLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGxldCBwMiA9IGNyZWF0ZVBsYXllcignY29tcHV0ZXInLCBjcHVCb2FyZCk7XG5cbiAgICAgICAgbGV0IGhlYWRCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkQmxvY2snKTtcblxuICAgICAgICBsZXQgZ2FtZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lUmVzdWx0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZVJlc3VsdCcpO1xuICAgICAgICBoZWFkQmxvY2suYXBwZW5kQ2hpbGQoZ2FtZVJlc3VsdCk7XG5cbiAgICAgICAgbGV0IHJlc3RhcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVzdGFydENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhcnRDb250YWluZXInKTtcbiAgICAgICAgaGVhZEJsb2NrLmFwcGVuZENoaWxkKHJlc3RhcnRDb250YWluZXIpO1xuICAgICAgICBcblxuICAgICAgICBsZXQgY3B1R3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3B1R3JhcGgnKTtcbiAgICAgICAgY3B1R3JhcGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBncmFwaEhhbmRsZXIoZSkge1xuICAgICAgICAgICAgbGV0IHJhd2Nvb3JkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgICAgICBsZXQgaW50ZXJpbSA9IHJhd2Nvb3JkLnJlcGxhY2UoL1xcRC9nLCcnKS5zcGxpdCgnJyk7XG4gICAgICAgICAgICBsZXQgYWN0Y29vcmQgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29vcmQgb2YgaW50ZXJpbSkge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZE51bSA9IE51bWJlcihjb29yZCk7XG4gICAgICAgICAgICAgICAgYWN0Y29vcmQucHVzaChjb29yZE51bSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjcHVCb2FyZFthY3Rjb29yZF0ubWFya2VkID09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBsb29wUmVzdWx0ID0gZ2FtZUxvb3AoYWN0Y29vcmQsIHAxLCBwMik7XG5cbiAgICAgICAgICAgIGlmIChsb29wUmVzdWx0ID09ICdzdW5rJykge1xuICAgICAgICAgICAgICAgIGxldCBwU3VuayA9IHAxLmJvYXJkLnN0YXR1cztcbiAgICAgICAgICAgICAgICBsZXQgY1N1bmsgPSBwMi5ib2FyZC5zdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdyYXBoSGFuZGxlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAocFN1bmsgPT0gJ3N1bmsnKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSAnVGhlIGVuZW15IGhhcyB3b24hJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY1N1bmsgPT0gJ3N1bmsnKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgd29uISdcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZXN0YXJ0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGFydCcpO1xuICAgICAgICAgICAgICAgIHJlc3RhcnQudGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbic7XG4gICAgICAgICAgICAgICAgcmVzdGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgXG4gICAgfVxuXG5cblxuXG5leHBvcnQge3BsYWNlUGFnZSwgcGxhY2VMb29wfSIsIlxubGV0IHNoaXBBY3Rpb25zID0ge1xuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya3MgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXJrcyArPSAxO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtzID09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWFya3MgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rICA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN1bms7XG4gICAgfVxuIH1cblxuZnVuY3Rpb24gc2hpcChsZW5ndGgsIGJlZ0NvLCB0eXBlLCBkaXJlYykge1xuICAgIGxldCByZWFsU2hpcCA9IE9iamVjdC5jcmVhdGUoc2hpcEFjdGlvbnMpO1xuICAgIHJlYWxTaGlwLmxlbmd0aCA9IGxlbmd0aDtcbiAgICByZWFsU2hpcC5zdW5rID0gZmFsc2U7XG4gICAgcmVhbFNoaXAubWFya3MgPSAwO1xuICAgIHJlYWxTaGlwLmJlZ0Nvb3JkID0gYmVnQ287XG4gICAgcmVhbFNoaXAudHlwZSA9IHR5cGU7XG4gICAgcmVhbFNoaXAuZGlyZWMgPSBkaXJlYztcblxuICAgIGlmIChyZWFsU2hpcC5kaXJlYyA9PSAnWScpIHtcbiAgICByZWFsU2hpcC5lbmRDb29yZCA9IFtyZWFsU2hpcC5iZWdDb29yZFswXSxyZWFsU2hpcC5iZWdDb29yZFsxXS1sZW5ndGgrMV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlYWxTaGlwLmRpcmVjID09ICdYJykge1xuICAgIHJlYWxTaGlwLmVuZENvb3JkID0gW3JlYWxTaGlwLmJlZ0Nvb3JkWzBdK2xlbmd0aC0xLHJlYWxTaGlwLmJlZ0Nvb3JkWzFdXTtcbiAgICB9XG4gIFxuICAgIHJldHVybiByZWFsU2hpcDtcbn1cblxubGV0IGJvYXJkQWN0aW9ucyA9IHtcbiAgICBidWlsZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkU2l6ZSA9IDEwO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmRTaXplOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFNpemU7ICsraikge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBbaSxqXTtcbiAgICAgICAgICAgICAgICB0aGlzW3NxdWFyZV0gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXNbc3F1YXJlXTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLm1hcmtlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5kb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnNoaXBJRCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gT2JqZWN0LmNyZWF0ZShib2FyZEFjdGlvbnMpO1xuICAgIGJvYXJkLmJ1aWxkKCk7XG4gICAgYm9hcmQuc2hpcHNTZXQgPSBbXTtcbiAgICBib2FyZC5zdGF0dXMgPSAnZmxvYXRpbmcnO1xuICAgIGJvYXJkLnBsVHlwZSA9IG51bGw7XG5cbiAgICBib2FyZC5wbGFjZSA9IGZ1bmN0aW9uKGxlbmd0aCwgYmVnQ28sIHR5cGUsIGRpcmVjKSB7XG4gICAgICAgIGxldCBuZXdTaGlwID0gc2hpcChsZW5ndGgsIGJlZ0NvLCB0eXBlLCBkaXJlYyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoKG5ld1NoaXAuZW5kQ29vcmRbMF0+OSkgfHwgKG5ld1NoaXAuZW5kQ29vcmRbMV0+OSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgobmV3U2hpcC5lbmRDb29yZFswXTwwKSB8fCAobmV3U2hpcC5lbmRDb29yZFsxXTwwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgc3RhcnQgPSBuZXdTaGlwLmJlZ0Nvb3JkO1xuICAgICAgICBsZXQgZW5kID0gbmV3U2hpcC5lbmRDb29yZDtcblxuICAgICAgICBpZiAobmV3U2hpcC5kaXJlYyA9PSAnWScpIHtcbiAgICAgICAgICAgIGxldCB4ID0gc3RhcnRbMF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9c3RhcnRbMV07IGk+KGVuZFsxXS0xKTsgLS1pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IFt4LGldO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpc1tzcXVhcmVdO1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLmRvY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9c3RhcnRbMV07IGk+KGVuZFsxXS0xKTsgLS1pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IFt4LGldXG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzW3NxdWFyZV07XG4gICAgICAgICAgICAgICAgdGlsZS5kb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRpbGUuc2hpcElEID0gbmV3U2hpcC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobmV3U2hpcC5kaXJlYyA9PSAnWCcpIHtcbiAgICAgICAgICAgIGxldCB5ID0gc3RhcnRbMV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9c3RhcnRbMF07IGk8KGVuZFswXSsxKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IFtpLHldO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpc1tzcXVhcmVdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLmRvY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9c3RhcnRbMF07IGk8KGVuZFswXSsxKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IFtpLHldXG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzW3NxdWFyZV07XG4gICAgICAgICAgICAgICAgdGlsZS5kb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRpbGUuc2hpcElEID0gbmV3U2hpcC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaGlwc1NldC5wdXNoKG5ld1NoaXApO1xuXG4gICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgIH1cblxuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihjb29yZCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpc1tjb29yZF07XG4gICAgICAgIGlmICh0YXJnZXQuZG9ja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldC5tYXJrZWQgPSAnaGl0JztcbiAgICAgICAgICAgIGxldCBuYW1lID0gdGFyZ2V0LnNoaXBJRDtcbiAgICAgICAgICAgIGxldCBmbGVldCA9IHRoaXMuc2hpcHNTZXQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgZmxlZXQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxlZXRbaV0udHlwZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZWV0W2ldLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbGVldFtpXS5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmRvY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0Lm1hcmtlZCA9ICdtaXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubWFya2VkO1xuICAgIH1cblxuICAgIGJvYXJkLnNldFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGZsZWV0ID0gdGhpcy5zaGlwc1NldDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBmbGVldC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGZsZWV0W2ldLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ3N1bmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHR5cGUsIGJvYXJkKSB7XG4gICAgbGV0IHBsYXllciA9IHt9O1xuICAgIHBsYXllci50eXBlID0gdHlwZTtcbiAgICBwbGF5ZXIuYm9hcmQgPSBib2FyZDtcbiAgICBwbGF5ZXIubW92ZXMgPSBbXTtcbiAgICBsZXQgcG9zc01vdmVzID0gW1stMSwtMV0sWy0xLDBdLFstMSwxXSxbMSwtMV0sWzEsMF0sWzEsMV1dO1xuXG5cbiAgICBwbGF5ZXIuY29tcEF0dGFjayA9IGZ1bmN0aW9uKGdhbWVCb2FyZCkge1xuICAgICAgICBpZiAodGhpcy5tb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGFzdE1vdmUgPSB0aGlzLm1vdmVzW3RoaXMubW92ZXMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgbGV0IGxhc3Rjb29yZCA9IE9iamVjdC5rZXlzKGxhc3RNb3ZlKVswXTtcbiAgICAgICAgICAgIGxldCBjb29yZGFyciA9IGxhc3Rjb29yZC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGNvb3JkbnVtID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIGNvb3JkYXJyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkZmlsdCA9IE51bWJlcihjb29yZCk7XG4gICAgICAgICAgICAgICAgY29vcmRudW0ucHVzaChjb29yZGZpbHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGxhc3RTdGF0dXMgPSBPYmplY3QudmFsdWVzKGxhc3RNb3ZlKVswXTtcbiAgICAgICAgICAgIGlmIChsYXN0U3RhdHVzID09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkak1vdmVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwb3NzIG9mIHBvc3NNb3Zlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TW92ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IGNvb3JkbnVtWzBdICsgcG9zc1swXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1kgPSBjb29yZG51bVsxXSArIHBvc3NbMV07XG4gICAgICAgICAgICAgICAgICAgIG5ld01vdmUucHVzaChuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3TW92ZS5wdXNoKG5ld1kpO1xuICAgICAgICAgICAgICAgICAgICBhZGpNb3Zlcy5wdXNoKG5ld01vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbGVnYWxNb3ZlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWRqIG9mIGFkak1vdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoMCA8PSBhZGpbMF0gJiYgYWRqWzBdIDw9IDkpICYmICgwIDw9IGFkalsxXSAmJiBhZGpbMV0gPD0gOSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lQm9hcmRbYWRqXS5tYXJrZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChhZGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZWdhbE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hvc0luZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobGVnYWxNb3Zlcy5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hvc0ZpbiA9IGxlZ2FsTW92ZXNbY2hvc0luZF07XG4gICAgICAgICAgICAgICAgbGV0IHNtYXJ0TW92ZSA9IGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNob3NGaW4pO1xuICAgICAgICAgICAgICAgIGxldCBwdWJTbWFydCA9IHtbY2hvc0Zpbl06c21hcnRNb3ZlfTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVzLnB1c2gocHViU21hcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzbWFydE1vdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJvYXJkU2l6ZSA9IDEwO1xuICAgICAgICBsZXQgdW5NYXJrZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkU2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRTaXplOyArK2opIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gW2ksal07XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBnYW1lQm9hcmRbc3F1YXJlXTtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5tYXJrZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1bk1hcmtlZC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBsZW5ndGggPSB1bk1hcmtlZC5sZW5ndGg7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsZW5ndGgpO1xuICAgICAgICBsZXQgY2hvc2VuID0gdW5NYXJrZWRbaW5kZXhdO1xuICAgICAgICBsZXQgc3RhdHVzID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY2hvc2VuKTtcbiAgICAgICAgbGV0IHB1YlN0YXQgPSB7W2Nob3Nlbl06c3RhdHVzfTtcbiAgICAgICAgdGhpcy5tb3Zlcy5wdXNoKHB1YlN0YXQpO1xuICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIHJldHVybiBwbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wIChjb29yZCwgcDEsIHAyKSB7XG5cbiAgICBsZXQgY0F0U3RhdCA9IHAyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgbGV0IHRhcmdldGlkID0gYCR7Y29vcmRbMF19Yywke2Nvb3JkWzFdfWNgO1xuICAgIGxldCB0YXJnZXRjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0aWQpO1xuXG4gICAgaWYgKGNBdFN0YXQgPT0gJ2hpdCcpIHtcbiAgICAgICAgdGFyZ2V0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNjk2MSc7XG4gICAgICAgIHRhcmdldGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY2FuaG92Jyk7XG4gICAgICAgIGxldCBzdW5rU3RhdHVzID0gcDIuYm9hcmQuc2V0U3VuaygpO1xuICAgICAgICBpZiAoc3Vua1N0YXR1cyA9PSAnc3VuaycpIHtcbiAgICAgICAgICAgIHJldHVybiBzdW5rU3RhdHVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNBdFN0YXQgPT0gJ21pc3MnKSB7XG4gICAgICAgIHRhcmdldGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM3N0RENzcnO1xuICAgICAgICB0YXJnZXRjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbmhvdicpO1xuICAgIH1cblxuICAgIGxldCBwQXRTdGF0ID0gcDIuY29tcEF0dGFjayhwMS5ib2FyZCk7XG4gICAgbGV0IGxhdGVzdE1vdmUgPSBwMi5tb3Zlc1twMi5tb3Zlcy5sZW5ndGgtMV07XG4gICAgbGV0IGxhdGVzdGNvb3JkID0gT2JqZWN0LmtleXMobGF0ZXN0TW92ZSlbMF07XG4gICAgbGV0IGNvb3JkYXJyID0gbGF0ZXN0Y29vcmQuc3BsaXQoJywnKTtcbiAgICBsZXQgY29vcmRudW0gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIGNvb3JkYXJyKSB7XG4gICAgICAgIGxldCBjb29yZGZpbHQgPSBOdW1iZXIoY29vcmQpO1xuICAgICAgICBjb29yZG51bS5wdXNoKGNvb3JkZmlsdCk7XG4gICAgfVxuICAgIGxldCBsYXRlc3RpZCA9IGAke2Nvb3JkbnVtWzBdfXAsJHtjb29yZG51bVsxXX1wYDtcbiAgICBsZXQgbGF0ZXN0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhdGVzdGlkKTtcblxuICAgIGlmIChwQXRTdGF0ID09ICdoaXQnKSB7XG4gICAgICAgIGxhdGVzdENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjY5NjEnO1xuICAgICAgICBsZXQgc3Vua1N0YXR1cyA9IHAxLmJvYXJkLnNldFN1bmsoKTtcbiAgICAgICAgaWYgKHN1bmtTdGF0dXMgPT0gJ3N1bmsnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vua1N0YXR1cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwQXRTdGF0ID09ICdtaXNzJykge1xuICAgICAgICBsYXRlc3RDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNzdERDc3JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2Zsb2F0aW5nJztcbn1cblxuXG5leHBvcnR7c2hpcEFjdGlvbnMsIHNoaXAsIGJvYXJkQWN0aW9ucywgZ2FtZUJvYXJkLCBjcmVhdGVQbGF5ZXIsIGdhbWVMb29wfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3BsYWNlTG9vcCwgcGxhY2VQYWdlfSBmcm9tICcuL3BsYWNlbW9kdWxlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwYWdlKTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocGxhY2VQYWdlKCkpO1xuICAgIHBsYWNlTG9vcCgpXG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=