/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/x-symbol.svg */ "./src/imgs/x-symbol.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `


.game {
    display: flex;
}

.log {
    min-width: 400px;
    min-height: 30px;
    max-width: 400px;
    max-height: 30px;
    border: #000000 solid 3px;
    margin-top: 8px;
    display: flex;

}

.player-border, .computer-border {
    background-color: #0000ff;
    border-color: #000000;
    border-style: solid;
    padding: 5px;
    margin-top: 8px;
}

.player-grid, .computer-grid {
    background-color: #ffc0cb;
    border-color: #000000;
    border-style: solid;
    display: grid;
    grid-template-rows: repeat(12, 40px);
    grid-template-columns: repeat(12, 40px);
    gap: 2px;
}

.tile{
    border: black;
    border-style: solid;
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    font-size: 10px;
}

.null{
    background-color: #000000;
}

.empty{
    background-color: #00ffff;
}


.carrier,
.battleship,
.destroyer,
.submarine,
.patrol-boat{
    background-color: #bfbfbf;
}

.fog-of-war{
    background-color: #7ca9b8;
}

.missed{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.hit{
    background-color: #5f9ea0;
}`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":";;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,aAAa;;AAEjB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,oCAAoC;IACpC,uCAAuC;IACvC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;;;;;IAKI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yDAA6C;AACjD;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["\n\n\n.game {\n    display: flex;\n}\n\n.log {\n    min-width: 400px;\n    min-height: 30px;\n    max-width: 400px;\n    max-height: 30px;\n    border: #000000 solid 3px;\n    margin-top: 8px;\n    display: flex;\n\n}\n\n.player-border, .computer-border {\n    background-color: #0000ff;\n    border-color: #000000;\n    border-style: solid;\n    padding: 5px;\n    margin-top: 8px;\n}\n\n.player-grid, .computer-grid {\n    background-color: #ffc0cb;\n    border-color: #000000;\n    border-style: solid;\n    display: grid;\n    grid-template-rows: repeat(12, 40px);\n    grid-template-columns: repeat(12, 40px);\n    gap: 2px;\n}\n\n.tile{\n    border: black;\n    border-style: solid;\n    min-width: 40px;\n    max-width: 40px;\n    min-height: 40px;\n    max-height: 40px;\n    font-size: 10px;\n}\n\n.null{\n    background-color: #000000;\n}\n\n.empty{\n    background-color: #00ffff;\n}\n\n\n.carrier,\n.battleship,\n.destroyer,\n.submarine,\n.patrol-boat{\n    background-color: #bfbfbf;\n}\n\n.fog-of-war{\n    background-color: #7ca9b8;\n}\n\n.missed{\n    background-image: url(\"../imgs/x-symbol.svg\");\n}\n\n.hit{\n    background-color: #5f9ea0;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _modules_players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/players */ "./src/modules/players.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");





class Computer extends _modules_players__WEBPACK_IMPORTED_MODULE_0__["default"]{
    
    constructor(name){
        super()
        this.name = "Computer"
        this.opponent = null
        this.attackTargets = []
    }
    
    randomNumber(max,min=0) {
        return Math.round(Math.random() * (max-2) + min);
      }

    fillAttackTargets(){
        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
                let status = col.status
                if(status === "empty"){
                   this.attackTargets.push([index,yIndex])
                }
            })
               
    })
    }


    //Call with (this.randomNumber,this.randomNumber)
    pickTile(callbackX,callbackY){
        return [callbackX(),callbackY()]
    }

    ///ToDo refactor to be more efficient
    getRandomTile(){
        let max = this.attackTargets.length
        let newRandom = this.randomNumber(max)
        let cloneArr = this.attackTargets

    /*     let valid = this.validateTile(randomTile)
        if(valid) return randomTile */

        let sliceTarget = cloneArr.splice(newRandom,1)
        
        this.attackTargets = cloneArr
        return [sliceTarget[0][0],sliceTarget[0][1]]

    }


    takeTurn(game){
        let randomTile = this.getRandomTile()
        let results = this.opponent.gameBoard.receiveAttack(randomTile)
        
        ///return an object with information about turn

        let obj = {results: results, attackedTile: randomTile }

        return obj
    }


}

   
class test{

    constructor(){
        this.gameBoard
        this.attackTargets = new Set([])

        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
    })
    })
    }
    fillAttackTargets(){
        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
                this.attackTargets.push(`${index}_${yIndex}`)
    })
    })
    }

    randomNumber() {
        return Math.round(Math.random() * 9 + 1);
      }

      validateTile(arr){

        let check = this.attemptedAttacks.has(`${arr[0]}_${arr[1]}`)
        if(!check) return true  ///if "attacked: false" return as Valid
        else return false
    }
    //Call with (this.randomNumber,this.randomNumber)
    pickTile(callbackX,callbackY){
        return [callbackX(),callbackY()]
    }


    getRandomTile(){
        let randomTile = this.pickTile(this.randomNumber,this.randomNumber)
        let valid = this.validateTile(randomTile)
        if(valid) return randomTile
        else return this.getRandomTile()

    }



}

/***/ }),

/***/ "./src/modules/drawboard.js":
/*!**********************************!*\
  !*** ./src/modules/drawboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawBoard)
/* harmony export */ });
function drawBoard(target,game){
    let newBoard = document.querySelector(`.${target}-grid`)
    newBoard.textContent = ""
    let grid = game[target].gameBoard.grid
    const logBox = document.querySelector(".log")
    console.log(game)
    console.log(grid)
    grid.forEach((row,index) => {
        row.forEach((col,yIndex) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add('tile',col.status)
        newDiv.id = `${index}_${yIndex}`
        
        ///Add event listener too computer squares that allow player too attack on click
        if(col.fog === true) { 
            newDiv.id = `${index}_${yIndex}`
            newDiv.classList.add('fog-of-war')
            let array = [index,yIndex]
            let firstLetter = col.status.charAt(0).toUpperCase()
            newDiv.addEventListener('click', (e) => {
            let active = game.active
            if(active === 1){

                ///tile not attacked
          
                    if(game.computer.gameBoard.grid[array[0]][array[1]].unAttacked === true){ 
                        console.log("but its false bro")     
                    ///Output hit/miss too div.log
                    let attackResults = game.computer.gameBoard.receiveAttack(array)
                    console.log(attackResults)
                    logBox.textContent = attackResults
                    ///set turn too computer
                    game.active += 1
                    let passTurn = true
                        console.log(passTurn)
                    if(passTurn){
                        //repaint tile
                        newDiv.classList.remove('fog-of-war')
                        newDiv.classList.add(attackResults[0])
        
                        ///let Computer take a turn
                        let compTurnData = game.computer.takeTurn()
                        console.log(compTurnData) 
                        
                        let results = compTurnData.results
                        /// toDo if(results === "gameover") return game.finish("Computer")
        
                    
        
                        ///else
                        let repaintPlayerTile = repaintTile(compTurnData.results, compTurnData.attackedTile)
        
        
                
                        game.active -= 1   }
                
                }
        }
            })
        }
        ///Add class too player tiles to find when they are attacked
        else {
            newDiv.id = `player-${index}_${yIndex}`

        }



        newDiv.textContent = `${index}_${yIndex}`
        
        newBoard.appendChild(newDiv)

        })

    })

} 

function repaintTile(results, arr){
    console.log(arr[0])
    console.log(arr[1])
    console.log(`player-${arr[0]}_${arr[1]}`)
    let div = document.getElementById(`player-${arr[0]}_${arr[1]}`)
    console.log(div)
    div.classList.add(results)

}

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/modules/ships.js");




class Gameboard{
    constructor(num, fog= false){
        
        this.xy = num
        this.remaining = 0
        this.grid = []
        this.ships = []
        this.fogOfWar = fog
        for(let i = 0; i < this.xy + 2; i++){ 


            ///Create a border of null tiles around the field to mark edges
            let last = this.xy + 1
            if(i === 0 || (i === last))
            {
            let row = new Array(this.xy+2).fill({status: "null"})
            this.grid.push(row)
        }
            else{
            let row = new Array(this.xy+1).fill({status: "empty", unAttacked: true,fog: this.fogOfWar})
            row[0] = {status: "null"}
            row.push({status: "null"})
            this.grid.push(row)}
            }
            
    }

    createShip(model, size){
        let newShip = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](model, size)
        this.ships.push(newShip)
        this.remaining += 1
    }

    
    placeShip(shipIndex, location, direction){
        let shipInfo = [this.ships[shipIndex]]
        if(!shipInfo) return console.error("No ship at that index");
        let size = shipInfo[0].size
        
        if(direction === "right"){
            let coordinates = this.createTileArrayStaticX(location,+1,size)
            let validate = this.validatePlacement(coordinates)
            
            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
        else if(direction === "left"){
            let coordinates = this.createTileArrayStaticX(location,-1,size)
            let validate = this.validatePlacement(coordinates)
            
            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
        else if(direction === "up"){
            let coordinates = this.createTileArrayStaticY(location,-1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
        else if(direction === "down"){
            let coordinates = this.createTileArrayStaticY(location,+1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
    }

    createTileArrayStaticX([x, y], direction, size){
        let coordinates = []
        coordinates.push([x,y])
        for(let i=0; i < size - 1; ++i){
        y += direction
        coordinates.push([x,y])
        }
        return coordinates
    }
    createTileArrayStaticY([x,y], direction, size){
        let coordinates = []
        coordinates.push([x,y])
        for(let i=0; i < size - 1; ++i){
        x += direction
        coordinates.push([x,y])
        }
        return coordinates
    }

    validatePlacement(coordinates){ 
       for(let i = 0; i < coordinates.length; i++){
        let x = coordinates[i][0]
        let y = coordinates[i][1]
        if(x >= this.xy || y >= this.xy || x <= 0 || y <= 0) return false
        else if(x.status === null || y.status === null) return false
        }
        return true
    }

    placeShipAtTiles(shipIndex,tiles){
       /*  console.log(shipIndex)
        console.log(this.ships[shipIndex]) */
        for(let i = 0; i < tiles.length; i++){
            let x = tiles[i][0]
            let y =  tiles[i][1]
            this.grid[x][y] = {status: this.ships[shipIndex].status, unAttacked: true, ship:this.ships[shipIndex], fog:this.fogOfWar}
        }
    }

    

    receiveAttack([x,y]){
        let missed = this.isTileEmpty([x,y])
        this.grid[x][y].unAttacked = false
        if(missed){
           
           
           return "missed"
        }
        
        else if(!missed){ 
            
            let hitShip = this.grid[x][y].ship
            hitShip.hit()
            let isShipSunk = hitShip.isSunk()
            if(isShipSunk){
                console.log(this.remaining)
                this.remaining -= 1
                let areAllSunk = this.areAllShipsSunk()
                if(areAllSunk) return "gameover"
                
            } 
            
            return "hit"
        }
        
    }

    isTileEmpty([x,y]){
        let gridCode = this.grid[x][y]
        if(gridCode.status === "empty") return true
        return false
    }

    areAllShipsSunk(remaining = this.remaining){
        console.log(remaining)
        if(remaining >= 1) return false
        else return true
     }

    ///Place ships in predetermined spots
    defaultPlaceShip(){
       this.placeShip(0, [5,7], "down")
       this.placeShip(1, [4,4], "up")
       this.placeShip(2, [1,7], "down")
       this.placeShip(3, [9,5], "left")
       this.placeShip(4, [2,2], "left")
    }

}


/***/ }),

/***/ "./src/modules/gamemaster.js":
/*!***********************************!*\
  !*** ./src/modules/gamemaster.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameMaster)
/* harmony export */ });
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer */ "./src/modules/computer.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");





class GameMaster{

    constructor(name){
        this.player = new _players__WEBPACK_IMPORTED_MODULE_1__["default"](name)
        this.computer = new _computer__WEBPACK_IMPORTED_MODULE_0__["default"]()

        //Who has active turn Player is 1 Comp is 2
        this.active = 1

    }

    createGameBoards(){
        this.player.initializeGameBoard()
        ///Pass true too enable Fog of War
        this.computer.initializeGameBoard(true) 
    }

    linkPlayers(){
        this.player.opponent = this.computer
        this.computer.opponent = this.player
    }
}

/***/ }),

/***/ "./src/modules/players.js":
/*!********************************!*\
  !*** ./src/modules/players.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");




class Player{
    constructor(name){
        this.name = name
        this.gameBoard = null
        this.opponent = null
    }

    initializeGameBoard(fog=false){
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10,fog)
        
    }

    createFleet(){
       this.gameBoard.createShip("carrier", 5)
       this.gameBoard.createShip("battleship", 4)
       this.gameBoard.createShip("destroyer", 3)
       this.gameBoard.createShip("submarine", 3)
       this.gameBoard.createShip("patrol-boat", 2)

    }
    
}

/***/ }),

/***/ "./src/modules/ships.js":
/*!******************************!*\
  !*** ./src/modules/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });

class Ship{
    constructor(model, size){
        this.status = model;
        this.size = size;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits +=1
    }

    isSunk(){
        if(this.hits >= this.size) return true

        return false
    }

    sinkShip(){
        this.sunk = true;
    }
}

/***/ }),

/***/ "./src/imgs/x-symbol.svg":
/*!*******************************!*\
  !*** ./src/imgs/x-symbol.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8f8b7cd2aa077f7c10d.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _modules_gamemaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gamemaster */ "./src/modules/gamemaster.js");
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/gameboard.css */ "./src/styles/gameboard.css");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_drawboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/drawboard.js */ "./src/modules/drawboard.js");








const newGameButton = document.getElementById('newGameButton')

newGameButton.addEventListener("click", (e) => {
    let name = document.getElementById("name").value
    let start = startNewGame(name)
})

function startNewGame(name){
    const newGame = new _modules_gamemaster__WEBPACK_IMPORTED_MODULE_0__["default"](name)
    
    
    newGame.createGameBoards()
    newGame.linkPlayers()
    newGame.computer.fillAttackTargets()

    //Run Fleet Creation
    newGame.player.createFleet()
    newGame.computer.createFleet()

    ///remove default placement later
    newGame.player.gameBoard.defaultPlaceShip()
    newGame.computer.gameBoard.defaultPlaceShip()
    
    /////function to create board UI
    let playerDraw = (0,_modules_drawboard_js__WEBPACK_IMPORTED_MODULE_3__["default"])("player",newGame)
    let computerDraw = (0,_modules_drawboard_js__WEBPACK_IMPORTED_MODULE_3__["default"])("computer",newGame)
 





    console.log(newGame)
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDZDtBQUNZO0FBQ0c7Ozs7O0FBSzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx3QkFBd0IsMkRBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRUFBUztBQUM5Qix1QkFBdUIsaUVBQVM7QUFDaEM7Ozs7OztBQU1BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvZHJhd2JvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9nYW1lbWFzdGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MveC1zeW1ib2wuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcblxuXG4uZ2FtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZyB7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgICBib3JkZXI6ICMwMDAwMDAgc29saWQgM3B4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5wbGF5ZXItYm9yZGVyLCAuY29tcHV0ZXItYm9yZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGZmO1xuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wbGF5ZXItZ3JpZCwgLmNvbXB1dGVyLWdyaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMwY2I7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgNDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDQwcHgpO1xuICAgIGdhcDogMnB4O1xufVxuXG4udGlsZXtcbiAgICBib3JkZXI6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubnVsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZW1wdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjtcbn1cblxuXG4uY2Fycmllcixcbi5iYXR0bGVzaGlwLFxuLmRlc3Ryb3llcixcbi5zdWJtYXJpbmUsXG4ucGF0cm9sLWJvYXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbn1cblxuLmZvZy1vZi13YXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTliODtcbn1cblxuLm1pc3NlZHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBR0E7Ozs7O0lBS0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseURBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcbi5nYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxvZyB7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogIzAwMDAwMCBzb2xpZCAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLnBsYXllci1ib3JkZXIsIC5jb21wdXRlci1ib3JkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ucGxheWVyLWdyaWQsIC5jb21wdXRlci1ncmlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzBjYjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCA0MHB4KTtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi50aWxle1xcbiAgICBib3JkZXI6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubnVsbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLmVtcHR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmO1xcbn1cXG5cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uZGVzdHJveWVyLFxcbi5zdWJtYXJpbmUsXFxuLnBhdHJvbC1ib2F0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xcbn1cXG5cXG4uZm9nLW9mLXdhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTliODtcXG59XFxuXFxuLm1pc3NlZHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWdzL3gtc3ltYm9sLnN2Z1xcXCIpO1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2R1bGVzL3BsYXllcnNcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXJ7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb21wdXRlclwiXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBudWxsXG4gICAgICAgIHRoaXMuYXR0YWNrVGFyZ2V0cyA9IFtdXG4gICAgfVxuICAgIFxuICAgIHJhbmRvbU51bWJlcihtYXgsbWluPTApIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXgtMikgKyBtaW4pO1xuICAgICAgfVxuXG4gICAgZmlsbEF0dGFja1RhcmdldHMoKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuZ3JpZC5mb3JFYWNoKChyb3csaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wseUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGNvbC5zdGF0dXNcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT09IFwiZW1wdHlcIil7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUYXJnZXRzLnB1c2goW2luZGV4LHlJbmRleF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIFxuICAgIH0pXG4gICAgfVxuXG5cbiAgICAvL0NhbGwgd2l0aCAodGhpcy5yYW5kb21OdW1iZXIsdGhpcy5yYW5kb21OdW1iZXIpXG4gICAgcGlja1RpbGUoY2FsbGJhY2tYLGNhbGxiYWNrWSl7XG4gICAgICAgIHJldHVybiBbY2FsbGJhY2tYKCksY2FsbGJhY2tZKCldXG4gICAgfVxuXG4gICAgLy8vVG9EbyByZWZhY3RvciB0byBiZSBtb3JlIGVmZmljaWVudFxuICAgIGdldFJhbmRvbVRpbGUoKXtcbiAgICAgICAgbGV0IG1heCA9IHRoaXMuYXR0YWNrVGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgbGV0IG5ld1JhbmRvbSA9IHRoaXMucmFuZG9tTnVtYmVyKG1heClcbiAgICAgICAgbGV0IGNsb25lQXJyID0gdGhpcy5hdHRhY2tUYXJnZXRzXG5cbiAgICAvKiAgICAgbGV0IHZhbGlkID0gdGhpcy52YWxpZGF0ZVRpbGUocmFuZG9tVGlsZSlcbiAgICAgICAgaWYodmFsaWQpIHJldHVybiByYW5kb21UaWxlICovXG5cbiAgICAgICAgbGV0IHNsaWNlVGFyZ2V0ID0gY2xvbmVBcnIuc3BsaWNlKG5ld1JhbmRvbSwxKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5hdHRhY2tUYXJnZXRzID0gY2xvbmVBcnJcbiAgICAgICAgcmV0dXJuIFtzbGljZVRhcmdldFswXVswXSxzbGljZVRhcmdldFswXVsxXV1cblxuICAgIH1cblxuXG4gICAgdGFrZVR1cm4oZ2FtZSl7XG4gICAgICAgIGxldCByYW5kb21UaWxlID0gdGhpcy5nZXRSYW5kb21UaWxlKClcbiAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLm9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVRpbGUpXG4gICAgICAgIFxuICAgICAgICAvLy9yZXR1cm4gYW4gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdHVyblxuXG4gICAgICAgIGxldCBvYmogPSB7cmVzdWx0czogcmVzdWx0cywgYXR0YWNrZWRUaWxlOiByYW5kb21UaWxlIH1cblxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG5cbn1cblxuICAgXG5jbGFzcyB0ZXN0e1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRcbiAgICAgICAgdGhpcy5hdHRhY2tUYXJnZXRzID0gbmV3IFNldChbXSlcblxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5ncmlkLmZvckVhY2goKHJvdyxpbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCx5SW5kZXgpID0+IHtcbiAgICB9KVxuICAgIH0pXG4gICAgfVxuICAgIGZpbGxBdHRhY2tUYXJnZXRzKCl7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdyaWQuZm9yRWFjaCgocm93LGluZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLHlJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGFyZ2V0cy5wdXNoKGAke2luZGV4fV8ke3lJbmRleH1gKVxuICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbiAgICByYW5kb21OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhbGlkYXRlVGlsZShhcnIpe1xuXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuYXR0ZW1wdGVkQXR0YWNrcy5oYXMoYCR7YXJyWzBdfV8ke2FyclsxXX1gKVxuICAgICAgICBpZighY2hlY2spIHJldHVybiB0cnVlICAvLy9pZiBcImF0dGFja2VkOiBmYWxzZVwiIHJldHVybiBhcyBWYWxpZFxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvL0NhbGwgd2l0aCAodGhpcy5yYW5kb21OdW1iZXIsdGhpcy5yYW5kb21OdW1iZXIpXG4gICAgcGlja1RpbGUoY2FsbGJhY2tYLGNhbGxiYWNrWSl7XG4gICAgICAgIHJldHVybiBbY2FsbGJhY2tYKCksY2FsbGJhY2tZKCldXG4gICAgfVxuXG5cbiAgICBnZXRSYW5kb21UaWxlKCl7XG4gICAgICAgIGxldCByYW5kb21UaWxlID0gdGhpcy5waWNrVGlsZSh0aGlzLnJhbmRvbU51bWJlcix0aGlzLnJhbmRvbU51bWJlcilcbiAgICAgICAgbGV0IHZhbGlkID0gdGhpcy52YWxpZGF0ZVRpbGUocmFuZG9tVGlsZSlcbiAgICAgICAgaWYodmFsaWQpIHJldHVybiByYW5kb21UaWxlXG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tVGlsZSgpXG5cbiAgICB9XG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0JvYXJkKHRhcmdldCxnYW1lKXtcbiAgICBsZXQgbmV3Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXR9LWdyaWRgKVxuICAgIG5ld0JvYXJkLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGxldCBncmlkID0gZ2FtZVt0YXJnZXRdLmdhbWVCb2FyZC5ncmlkXG4gICAgY29uc3QgbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dcIilcbiAgICBjb25zb2xlLmxvZyhnYW1lKVxuICAgIGNvbnNvbGUubG9nKGdyaWQpXG4gICAgZ3JpZC5mb3JFYWNoKChyb3csaW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCx5SW5kZXgpID0+IHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3RpbGUnLGNvbC5zdGF0dXMpXG4gICAgICAgIG5ld0Rpdi5pZCA9IGAke2luZGV4fV8ke3lJbmRleH1gXG4gICAgICAgIFxuICAgICAgICAvLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG9vIGNvbXB1dGVyIHNxdWFyZXMgdGhhdCBhbGxvdyBwbGF5ZXIgdG9vIGF0dGFjayBvbiBjbGlja1xuICAgICAgICBpZihjb2wuZm9nID09PSB0cnVlKSB7IFxuICAgICAgICAgICAgbmV3RGl2LmlkID0gYCR7aW5kZXh9XyR7eUluZGV4fWBcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdmb2ctb2Ytd2FyJylcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtpbmRleCx5SW5kZXhdXG4gICAgICAgICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBjb2wuc3RhdHVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGdhbWUuYWN0aXZlXG4gICAgICAgICAgICBpZihhY3RpdmUgPT09IDEpe1xuXG4gICAgICAgICAgICAgICAgLy8vdGlsZSBub3QgYXR0YWNrZWRcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQuZ3JpZFthcnJheVswXV1bYXJyYXlbMV1dLnVuQXR0YWNrZWQgPT09IHRydWUpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnV0IGl0cyBmYWxzZSBicm9cIikgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLy9PdXRwdXQgaGl0L21pc3MgdG9vIGRpdi5sb2dcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdHMgPSBnYW1lLmNvbXB1dGVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGFycmF5KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdHRhY2tSZXN1bHRzKVxuICAgICAgICAgICAgICAgICAgICBsb2dCb3gudGV4dENvbnRlbnQgPSBhdHRhY2tSZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgIC8vL3NldCB0dXJuIHRvbyBjb21wdXRlclxuICAgICAgICAgICAgICAgICAgICBnYW1lLmFjdGl2ZSArPSAxXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXNzVHVybiA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhc3NUdXJuKVxuICAgICAgICAgICAgICAgICAgICBpZihwYXNzVHVybil7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JlcGFpbnQgdGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvZy1vZi13YXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYXR0YWNrUmVzdWx0c1swXSlcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy9sZXQgQ29tcHV0ZXIgdGFrZSBhIHR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wVHVybkRhdGEgPSBnYW1lLmNvbXB1dGVyLnRha2VUdXJuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBUdXJuRGF0YSkgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gY29tcFR1cm5EYXRhLnJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLyB0b0RvIGlmKHJlc3VsdHMgPT09IFwiZ2FtZW92ZXJcIikgcmV0dXJuIGdhbWUuZmluaXNoKFwiQ29tcHV0ZXJcIilcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vL2Vsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXBhaW50UGxheWVyVGlsZSA9IHJlcGFpbnRUaWxlKGNvbXBUdXJuRGF0YS5yZXN1bHRzLCBjb21wVHVybkRhdGEuYXR0YWNrZWRUaWxlKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmFjdGl2ZSAtPSAxICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLy9BZGQgY2xhc3MgdG9vIHBsYXllciB0aWxlcyB0byBmaW5kIHdoZW4gdGhleSBhcmUgYXR0YWNrZWRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdEaXYuaWQgPSBgcGxheWVyLSR7aW5kZXh9XyR7eUluZGV4fWBcblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGAke2luZGV4fV8ke3lJbmRleH1gXG4gICAgICAgIFxuICAgICAgICBuZXdCb2FyZC5hcHBlbmRDaGlsZChuZXdEaXYpXG5cbiAgICAgICAgfSlcblxuICAgIH0pXG5cbn0gXG5cbmZ1bmN0aW9uIHJlcGFpbnRUaWxlKHJlc3VsdHMsIGFycil7XG4gICAgY29uc29sZS5sb2coYXJyWzBdKVxuICAgIGNvbnNvbGUubG9nKGFyclsxXSlcbiAgICBjb25zb2xlLmxvZyhgcGxheWVyLSR7YXJyWzBdfV8ke2FyclsxXX1gKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyLSR7YXJyWzBdfV8ke2FyclsxXX1gKVxuICAgIGNvbnNvbGUubG9nKGRpdilcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChyZXN1bHRzKVxuXG59IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcHNcIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJke1xuICAgIGNvbnN0cnVjdG9yKG51bSwgZm9nPSBmYWxzZSl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnh5ID0gbnVtXG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gMFxuICAgICAgICB0aGlzLmdyaWQgPSBbXVxuICAgICAgICB0aGlzLnNoaXBzID0gW11cbiAgICAgICAgdGhpcy5mb2dPZldhciA9IGZvZ1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy54eSArIDI7IGkrKyl7IFxuXG5cbiAgICAgICAgICAgIC8vL0NyZWF0ZSBhIGJvcmRlciBvZiBudWxsIHRpbGVzIGFyb3VuZCB0aGUgZmllbGQgdG8gbWFyayBlZGdlc1xuICAgICAgICAgICAgbGV0IGxhc3QgPSB0aGlzLnh5ICsgMVxuICAgICAgICAgICAgaWYoaSA9PT0gMCB8fCAoaSA9PT0gbGFzdCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcm93ID0gbmV3IEFycmF5KHRoaXMueHkrMikuZmlsbCh7c3RhdHVzOiBcIm51bGxcIn0pXG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgcm93ID0gbmV3IEFycmF5KHRoaXMueHkrMSkuZmlsbCh7c3RhdHVzOiBcImVtcHR5XCIsIHVuQXR0YWNrZWQ6IHRydWUsZm9nOiB0aGlzLmZvZ09mV2FyfSlcbiAgICAgICAgICAgIHJvd1swXSA9IHtzdGF0dXM6IFwibnVsbFwifVxuICAgICAgICAgICAgcm93LnB1c2goe3N0YXR1czogXCJudWxsXCJ9KVxuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2gocm93KX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZVNoaXAobW9kZWwsIHNpemUpe1xuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKG1vZGVsLCBzaXplKVxuICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcClcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgKz0gMVxuICAgIH1cblxuICAgIFxuICAgIHBsYWNlU2hpcChzaGlwSW5kZXgsIGxvY2F0aW9uLCBkaXJlY3Rpb24pe1xuICAgICAgICBsZXQgc2hpcEluZm8gPSBbdGhpcy5zaGlwc1tzaGlwSW5kZXhdXVxuICAgICAgICBpZighc2hpcEluZm8pIHJldHVybiBjb25zb2xlLmVycm9yKFwiTm8gc2hpcCBhdCB0aGF0IGluZGV4XCIpO1xuICAgICAgICBsZXQgc2l6ZSA9IHNoaXBJbmZvWzBdLnNpemVcbiAgICAgICAgXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWChsb2NhdGlvbiwrMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWChsb2NhdGlvbiwtMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IFwidXBcIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1kobG9jYXRpb24sLTEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBcImRvd25cIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1kobG9jYXRpb24sKzEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlVGlsZUFycmF5U3RhdGljWChbeCwgeV0sIGRpcmVjdGlvbiwgc2l6ZSl7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgc2l6ZSAtIDE7ICsraSl7XG4gICAgICAgIHkgKz0gZGlyZWN0aW9uXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzXG4gICAgfVxuICAgIGNyZWF0ZVRpbGVBcnJheVN0YXRpY1koW3gseV0sIGRpcmVjdGlvbiwgc2l6ZSl7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgc2l6ZSAtIDE7ICsraSl7XG4gICAgICAgIHggKz0gZGlyZWN0aW9uXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgdmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpeyBcbiAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzW2ldWzBdXG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZXNbaV1bMV1cbiAgICAgICAgaWYoeCA+PSB0aGlzLnh5IHx8IHkgPj0gdGhpcy54eSB8fCB4IDw9IDAgfHwgeSA8PSAwKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZih4LnN0YXR1cyA9PT0gbnVsbCB8fCB5LnN0YXR1cyA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCx0aWxlcyl7XG4gICAgICAgLyogIGNvbnNvbGUubG9nKHNoaXBJbmRleClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc1tzaGlwSW5kZXhdKSAqL1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHggPSB0aWxlc1tpXVswXVxuICAgICAgICAgICAgbGV0IHkgPSAgdGlsZXNbaV1bMV1cbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHtzdGF0dXM6IHRoaXMuc2hpcHNbc2hpcEluZGV4XS5zdGF0dXMsIHVuQXR0YWNrZWQ6IHRydWUsIHNoaXA6dGhpcy5zaGlwc1tzaGlwSW5kZXhdLCBmb2c6dGhpcy5mb2dPZldhcn1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgcmVjZWl2ZUF0dGFjayhbeCx5XSl7XG4gICAgICAgIGxldCBtaXNzZWQgPSB0aGlzLmlzVGlsZUVtcHR5KFt4LHldKVxuICAgICAgICB0aGlzLmdyaWRbeF1beV0udW5BdHRhY2tlZCA9IGZhbHNlXG4gICAgICAgIGlmKG1pc3NlZCl7XG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgcmV0dXJuIFwibWlzc2VkXCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSBpZighbWlzc2VkKXsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBoaXRTaGlwID0gdGhpcy5ncmlkW3hdW3ldLnNoaXBcbiAgICAgICAgICAgIGhpdFNoaXAuaGl0KClcbiAgICAgICAgICAgIGxldCBpc1NoaXBTdW5rID0gaGl0U2hpcC5pc1N1bmsoKVxuICAgICAgICAgICAgaWYoaXNTaGlwU3Vuayl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZW1haW5pbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gMVxuICAgICAgICAgICAgICAgIGxldCBhcmVBbGxTdW5rID0gdGhpcy5hcmVBbGxTaGlwc1N1bmsoKVxuICAgICAgICAgICAgICAgIGlmKGFyZUFsbFN1bmspIHJldHVybiBcImdhbWVvdmVyXCJcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBcImhpdFwiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaXNUaWxlRW1wdHkoW3gseV0pe1xuICAgICAgICBsZXQgZ3JpZENvZGUgPSB0aGlzLmdyaWRbeF1beV1cbiAgICAgICAgaWYoZ3JpZENvZGUuc3RhdHVzID09PSBcImVtcHR5XCIpIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGFyZUFsbFNoaXBzU3VuayhyZW1haW5pbmcgPSB0aGlzLnJlbWFpbmluZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlbWFpbmluZylcbiAgICAgICAgaWYocmVtYWluaW5nID49IDEpIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIHJldHVybiB0cnVlXG4gICAgIH1cblxuICAgIC8vL1BsYWNlIHNoaXBzIGluIHByZWRldGVybWluZWQgc3BvdHNcbiAgICBkZWZhdWx0UGxhY2VTaGlwKCl7XG4gICAgICAgdGhpcy5wbGFjZVNoaXAoMCwgWzUsN10sIFwiZG93blwiKVxuICAgICAgIHRoaXMucGxhY2VTaGlwKDEsIFs0LDRdLCBcInVwXCIpXG4gICAgICAgdGhpcy5wbGFjZVNoaXAoMiwgWzEsN10sIFwiZG93blwiKVxuICAgICAgIHRoaXMucGxhY2VTaGlwKDMsIFs5LDVdLCBcImxlZnRcIilcbiAgICAgICB0aGlzLnBsYWNlU2hpcCg0LCBbMiwyXSwgXCJsZWZ0XCIpXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vY29tcHV0ZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hc3RlcntcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSlcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpXG5cbiAgICAgICAgLy9XaG8gaGFzIGFjdGl2ZSB0dXJuIFBsYXllciBpcyAxIENvbXAgaXMgMlxuICAgICAgICB0aGlzLmFjdGl2ZSA9IDFcblxuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVCb2FyZHMoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdGlhbGl6ZUdhbWVCb2FyZCgpXG4gICAgICAgIC8vL1Bhc3MgdHJ1ZSB0b28gZW5hYmxlIEZvZyBvZiBXYXJcbiAgICAgICAgdGhpcy5jb21wdXRlci5pbml0aWFsaXplR2FtZUJvYXJkKHRydWUpIFxuICAgIH1cblxuICAgIGxpbmtQbGF5ZXJzKCl7XG4gICAgICAgIHRoaXMucGxheWVyLm9wcG9uZW50ID0gdGhpcy5jb21wdXRlclxuICAgICAgICB0aGlzLmNvbXB1dGVyLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXJcbiAgICB9XG59IiwiXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbnVsbFxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbnVsbFxuICAgIH1cblxuICAgIGluaXRpYWxpemVHYW1lQm9hcmQoZm9nPWZhbHNlKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwLGZvZylcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlRmxlZXQoKXtcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwiY2FycmllclwiLCA1KVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcImRlc3Ryb3llclwiLCAzKVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJzdWJtYXJpbmVcIiwgMylcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwicGF0cm9sLWJvYXRcIiwgMilcblxuICAgIH1cbiAgICBcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHNpemUpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG1vZGVsO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzICs9MVxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLmhpdHMgPj0gdGhpcy5zaXplKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHNpbmtTaGlwKCl7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVNYXN0ZXIgZnJvbSBcIi4vbW9kdWxlcy9nYW1lbWFzdGVyXCJcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLmNzcydcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmRcIlxuaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9tb2R1bGVzL2RyYXdib2FyZC5qc1wiXG5cblxuXG5cbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3R2FtZUJ1dHRvbicpXG5cbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWVcbiAgICBsZXQgc3RhcnQgPSBzdGFydE5ld0dhbWUobmFtZSlcbn0pXG5cbmZ1bmN0aW9uIHN0YXJ0TmV3R2FtZShuYW1lKXtcbiAgICBjb25zdCBuZXdHYW1lID0gbmV3IEdhbWVNYXN0ZXIobmFtZSlcbiAgICBcbiAgICBcbiAgICBuZXdHYW1lLmNyZWF0ZUdhbWVCb2FyZHMoKVxuICAgIG5ld0dhbWUubGlua1BsYXllcnMoKVxuICAgIG5ld0dhbWUuY29tcHV0ZXIuZmlsbEF0dGFja1RhcmdldHMoKVxuXG4gICAgLy9SdW4gRmxlZXQgQ3JlYXRpb25cbiAgICBuZXdHYW1lLnBsYXllci5jcmVhdGVGbGVldCgpXG4gICAgbmV3R2FtZS5jb21wdXRlci5jcmVhdGVGbGVldCgpXG5cbiAgICAvLy9yZW1vdmUgZGVmYXVsdCBwbGFjZW1lbnQgbGF0ZXJcbiAgICBuZXdHYW1lLnBsYXllci5nYW1lQm9hcmQuZGVmYXVsdFBsYWNlU2hpcCgpXG4gICAgbmV3R2FtZS5jb21wdXRlci5nYW1lQm9hcmQuZGVmYXVsdFBsYWNlU2hpcCgpXG4gICAgXG4gICAgLy8vLy9mdW5jdGlvbiB0byBjcmVhdGUgYm9hcmQgVUlcbiAgICBsZXQgcGxheWVyRHJhdyA9IGRyYXdCb2FyZChcInBsYXllclwiLG5ld0dhbWUpXG4gICAgbGV0IGNvbXB1dGVyRHJhdyA9IGRyYXdCb2FyZChcImNvbXB1dGVyXCIsbmV3R2FtZSlcbiBcblxuXG5cblxuXG4gICAgY29uc29sZS5sb2cobmV3R2FtZSlcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9