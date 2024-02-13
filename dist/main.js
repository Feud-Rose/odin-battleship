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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
    border: black solid 3px;
    margin-top: 8px;
    display: flex;

}

.player-border, .computer-border {
    background-color: blue;
    border-color: black;
    border-style: solid;
    padding: 5px;
    margin-top: 8px;
}

.player-grid, .computer-grid {
    background-color: pink;
    border-color: black;
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
    background-color: black;
}

.empty{
    background-color: aqua;
}


.carrier,
.battleship,
.destroyer,
.submarine,
.patrol-boat{
    background-color: silver;
}

.fog-of-war{
    background-color: darkgray;
}

.missed{
    background-color: rgb(116, 16, 16); 
}

.hit{
    background-color: cadetblue;
}`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":";;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;IACf,aAAa;;AAEjB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,oCAAoC;IACpC,uCAAuC;IACvC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;;;;;IAKI,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["\n\n\n.game {\n    display: flex;\n}\n\n.log {\n    min-width: 400px;\n    min-height: 30px;\n    max-width: 400px;\n    max-height: 30px;\n    border: black solid 3px;\n    margin-top: 8px;\n    display: flex;\n\n}\n\n.player-border, .computer-border {\n    background-color: blue;\n    border-color: black;\n    border-style: solid;\n    padding: 5px;\n    margin-top: 8px;\n}\n\n.player-grid, .computer-grid {\n    background-color: pink;\n    border-color: black;\n    border-style: solid;\n    display: grid;\n    grid-template-rows: repeat(12, 40px);\n    grid-template-columns: repeat(12, 40px);\n    gap: 2px;\n}\n\n.tile{\n    border: black;\n    border-style: solid;\n    min-width: 40px;\n    max-width: 40px;\n    min-height: 40px;\n    max-height: 40px;\n    font-size: 10px;\n}\n\n.null{\n    background-color: black;\n}\n\n.empty{\n    background-color: aqua;\n}\n\n\n.carrier,\n.battleship,\n.destroyer,\n.submarine,\n.patrol-boat{\n    background-color: silver;\n}\n\n.fog-of-war{\n    background-color: darkgray;\n}\n\n.missed{\n    background-color: rgb(116, 16, 16); \n}\n\n.hit{\n    background-color: cadetblue;\n}"],"sourceRoot":""}]);
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
        console.log(this.attackTargets)
        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
                let status = col.status
                console.log(status)
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
        console.log(sliceTarget)
        this.attackTargets = cloneArr
        console.log(this.attackTargets.length)
        return [sliceTarget[0][0],sliceTarget[0][1]]

    }


    takeTurn(game){
        let randomTile = this.getRandomTile()
        console.log(randomTile)
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
               
                ///Output hit/miss too div.log
                let attackResults = game.computer.gameBoard.receiveAttack(array)
                logBox.textContent = attackResults
                ///set turn too computer
                game.active += 1

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


               

                game.active -= 1   

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
            let row = new Array(this.xy+1).fill({status: "empty", attacked: false,fog: this.fogOfWar})
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
            this.grid[x][y] = {status: this.ships[shipIndex].status, attacked: false, ship:this.ships[shipIndex], fog:this.fogOfWar}
        }
    }

    

    receiveAttack([x,y]){
        let missed = this.isTileEmpty([x,y])
        if(missed){
           // mark as miss
                
            return "missed"
        }
        
        else if(!missed){ 
            ///might need redo
            let hitShip = this.grid[x][y].ship
            hitShip.hit()
            let isShipSunk = hitShip.isSunk()
            console.log(isShipSunk)
            if(isShipSunk){
                this.remaining -= 1
                let areAllSunk = this.areAllShipsSunk()
                if(areAllSunk) console.log("lost")
                return "gameover"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVtcGxhdGUtd2ViLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9kcmF3Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2dhbWVtYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9zaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuXG5cbi5nYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9nIHtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogYmxhY2sgc29saWQgM3B4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5wbGF5ZXItYm9yZGVyLCAuY29tcHV0ZXItYm9yZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ucGxheWVyLWdyaWQsIC5jb21wdXRlci1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCA0MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgNDBweCk7XG4gICAgZ2FwOiAycHg7XG59XG5cbi50aWxle1xuICAgIGJvcmRlcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5udWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZW1wdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuXG4uY2Fycmllcixcbi5iYXR0bGVzaGlwLFxuLmRlc3Ryb3llcixcbi5zdWJtYXJpbmUsXG4ucGF0cm9sLWJvYXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xufVxuXG4uZm9nLW9mLXdhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLm1pc3NlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAxNiwgMTYpOyBcbn1cblxuLmhpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBOzs7OztJQUtJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG4uZ2FtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sb2cge1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDNweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4ucGxheWVyLWJvcmRlciwgLmNvbXB1dGVyLWJvcmRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ucGxheWVyLWdyaWQsIC5jb21wdXRlci1ncmlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDQwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgNDBweCk7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4udGlsZXtcXG4gICAgYm9yZGVyOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLm51bGx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZW1wdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5kZXN0cm95ZXIsXFxuLnN1Ym1hcmluZSxcXG4ucGF0cm9sLWJvYXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG59XFxuXFxuLmZvZy1vZi13YXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4ubWlzc2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAxNiwgMTYpOyBcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL21vZHVsZXMvcGxheWVyc1wiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllcntcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNvbXB1dGVyXCJcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG51bGxcbiAgICAgICAgdGhpcy5hdHRhY2tUYXJnZXRzID0gW11cbiAgICB9XG4gICAgXG4gICAgcmFuZG9tTnVtYmVyKG1heCxtaW49MCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heC0yKSArIG1pbik7XG4gICAgICB9XG5cbiAgICBmaWxsQXR0YWNrVGFyZ2V0cygpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja1RhcmdldHMpXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdyaWQuZm9yRWFjaCgocm93LGluZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLHlJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBjb2wuc3RhdHVzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKVxuICAgICAgICAgICAgICAgIGlmKHN0YXR1cyA9PT0gXCJlbXB0eVwiKXtcbiAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1RhcmdldHMucHVzaChbaW5kZXgseUluZGV4XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgXG4gICAgfSlcbiAgICB9XG5cblxuICAgIC8vQ2FsbCB3aXRoICh0aGlzLnJhbmRvbU51bWJlcix0aGlzLnJhbmRvbU51bWJlcilcbiAgICBwaWNrVGlsZShjYWxsYmFja1gsY2FsbGJhY2tZKXtcbiAgICAgICAgcmV0dXJuIFtjYWxsYmFja1goKSxjYWxsYmFja1koKV1cbiAgICB9XG5cbiAgICAvLy9Ub0RvIHJlZmFjdG9yIHRvIGJlIG1vcmUgZWZmaWNpZW50XG4gICAgZ2V0UmFuZG9tVGlsZSgpe1xuICAgICAgICBsZXQgbWF4ID0gdGhpcy5hdHRhY2tUYXJnZXRzLmxlbmd0aFxuICAgICAgICBsZXQgbmV3UmFuZG9tID0gdGhpcy5yYW5kb21OdW1iZXIobWF4KVxuICAgICAgICBsZXQgY2xvbmVBcnIgPSB0aGlzLmF0dGFja1RhcmdldHNcblxuICAgIC8qICAgICBsZXQgdmFsaWQgPSB0aGlzLnZhbGlkYXRlVGlsZShyYW5kb21UaWxlKVxuICAgICAgICBpZih2YWxpZCkgcmV0dXJuIHJhbmRvbVRpbGUgKi9cblxuICAgICAgICBsZXQgc2xpY2VUYXJnZXQgPSBjbG9uZUFyci5zcGxpY2UobmV3UmFuZG9tLDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHNsaWNlVGFyZ2V0KVxuICAgICAgICB0aGlzLmF0dGFja1RhcmdldHMgPSBjbG9uZUFyclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja1RhcmdldHMubGVuZ3RoKVxuICAgICAgICByZXR1cm4gW3NsaWNlVGFyZ2V0WzBdWzBdLHNsaWNlVGFyZ2V0WzBdWzFdXVxuXG4gICAgfVxuXG5cbiAgICB0YWtlVHVybihnYW1lKXtcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLmdldFJhbmRvbVRpbGUoKVxuICAgICAgICBjb25zb2xlLmxvZyhyYW5kb21UaWxlKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMub3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tVGlsZSlcbiAgICAgICAgXG4gICAgICAgIC8vL3JldHVybiBhbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0dXJuXG5cbiAgICAgICAgbGV0IG9iaiA9IHtyZXN1bHRzOiByZXN1bHRzLCBhdHRhY2tlZFRpbGU6IHJhbmRvbVRpbGUgfVxuXG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cblxufVxuXG4gICBcbmNsYXNzIHRlc3R7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdhbWVCb2FyZFxuICAgICAgICB0aGlzLmF0dGFja1RhcmdldHMgPSBuZXcgU2V0KFtdKVxuXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdyaWQuZm9yRWFjaCgocm93LGluZGV4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLHlJbmRleCkgPT4ge1xuICAgIH0pXG4gICAgfSlcbiAgICB9XG4gICAgZmlsbEF0dGFja1RhcmdldHMoKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuZ3JpZC5mb3JFYWNoKChyb3csaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wseUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUYXJnZXRzLnB1c2goYCR7aW5kZXh9XyR7eUluZGV4fWApXG4gICAgfSlcbiAgICB9KVxuICAgIH1cblxuICAgIHJhbmRvbU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdmFsaWRhdGVUaWxlKGFycil7XG5cbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5hdHRlbXB0ZWRBdHRhY2tzLmhhcyhgJHthcnJbMF19XyR7YXJyWzFdfWApXG4gICAgICAgIGlmKCFjaGVjaykgcmV0dXJuIHRydWUgIC8vL2lmIFwiYXR0YWNrZWQ6IGZhbHNlXCIgcmV0dXJuIGFzIFZhbGlkXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vQ2FsbCB3aXRoICh0aGlzLnJhbmRvbU51bWJlcix0aGlzLnJhbmRvbU51bWJlcilcbiAgICBwaWNrVGlsZShjYWxsYmFja1gsY2FsbGJhY2tZKXtcbiAgICAgICAgcmV0dXJuIFtjYWxsYmFja1goKSxjYWxsYmFja1koKV1cbiAgICB9XG5cblxuICAgIGdldFJhbmRvbVRpbGUoKXtcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLnBpY2tUaWxlKHRoaXMucmFuZG9tTnVtYmVyLHRoaXMucmFuZG9tTnVtYmVyKVxuICAgICAgICBsZXQgdmFsaWQgPSB0aGlzLnZhbGlkYXRlVGlsZShyYW5kb21UaWxlKVxuICAgICAgICBpZih2YWxpZCkgcmV0dXJuIHJhbmRvbVRpbGVcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5nZXRSYW5kb21UaWxlKClcblxuICAgIH1cblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3Qm9hcmQodGFyZ2V0LGdhbWUpe1xuICAgIGxldCBuZXdCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldH0tZ3JpZGApXG4gICAgbGV0IGdyaWQgPSBnYW1lW3RhcmdldF0uZ2FtZUJvYXJkLmdyaWRcbiAgICBjb25zdCBsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ1wiKVxuICAgIGNvbnNvbGUubG9nKGdhbWUpXG4gICAgY29uc29sZS5sb2coZ3JpZClcbiAgICBncmlkLmZvckVhY2goKHJvdyxpbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY29sLHlJbmRleCkgPT4ge1xuICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgndGlsZScsY29sLnN0YXR1cylcbiAgICAgICAgbmV3RGl2LmlkID0gYCR7aW5kZXh9XyR7eUluZGV4fWBcbiAgICAgICAgXG4gICAgICAgIC8vL0FkZCBldmVudCBsaXN0ZW5lciB0b28gY29tcHV0ZXIgc3F1YXJlcyB0aGF0IGFsbG93IHBsYXllciB0b28gYXR0YWNrIG9uIGNsaWNrXG4gICAgICAgIGlmKGNvbC5mb2cgPT09IHRydWUpIHsgXG4gICAgICAgICAgICBuZXdEaXYuaWQgPSBgJHtpbmRleH1fJHt5SW5kZXh9YFxuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2ZvZy1vZi13YXInKVxuICAgICAgICAgICAgbGV0IGFycmF5ID0gW2luZGV4LHlJbmRleF1cbiAgICAgICAgICAgIGxldCBmaXJzdExldHRlciA9IGNvbC5zdGF0dXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZ2FtZS5hY3RpdmVcbiAgICAgICAgICAgIGlmKGFjdGl2ZSA9PT0gMSl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLy9PdXRwdXQgaGl0L21pc3MgdG9vIGRpdi5sb2dcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0cyA9IGdhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soYXJyYXkpXG4gICAgICAgICAgICAgICAgbG9nQm94LnRleHRDb250ZW50ID0gYXR0YWNrUmVzdWx0c1xuICAgICAgICAgICAgICAgIC8vL3NldCB0dXJuIHRvbyBjb21wdXRlclxuICAgICAgICAgICAgICAgIGdhbWUuYWN0aXZlICs9IDFcblxuICAgICAgICAgICAgICAgIC8vcmVwYWludCB0aWxlXG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvZy1vZi13YXInKVxuICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGF0dGFja1Jlc3VsdHNbMF0pXG5cbiAgICAgICAgICAgICAgICAvLy9sZXQgQ29tcHV0ZXIgdGFrZSBhIHR1cm5cbiAgICAgICAgICAgICAgICBsZXQgY29tcFR1cm5EYXRhID0gZ2FtZS5jb21wdXRlci50YWtlVHVybigpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcFR1cm5EYXRhKSBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBjb21wVHVybkRhdGEucmVzdWx0c1xuICAgICAgICAgICAgICAgIC8vLyB0b0RvIGlmKHJlc3VsdHMgPT09IFwiZ2FtZW92ZXJcIikgcmV0dXJuIGdhbWUuZmluaXNoKFwiQ29tcHV0ZXJcIilcblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLy9lbHNlXG4gICAgICAgICAgICAgICAgbGV0IHJlcGFpbnRQbGF5ZXJUaWxlID0gcmVwYWludFRpbGUoY29tcFR1cm5EYXRhLnJlc3VsdHMsIGNvbXBUdXJuRGF0YS5hdHRhY2tlZFRpbGUpXG5cblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBnYW1lLmFjdGl2ZSAtPSAxICAgXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8vQWRkIGNsYXNzIHRvbyBwbGF5ZXIgdGlsZXMgdG8gZmluZCB3aGVuIHRoZXkgYXJlIGF0dGFja2VkXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RGl2LmlkID0gYHBsYXllci0ke2luZGV4fV8ke3lJbmRleH1gXG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBgJHtpbmRleH1fJHt5SW5kZXh9YFxuICAgICAgICBuZXdCb2FyZC5hcHBlbmRDaGlsZChuZXdEaXYpXG5cbiAgICAgICAgfSlcblxuICAgIH0pXG5cbn0gXG5cbmZ1bmN0aW9uIHJlcGFpbnRUaWxlKHJlc3VsdHMsIGFycil7XG4gICAgY29uc29sZS5sb2coYXJyWzBdKVxuICAgIGNvbnNvbGUubG9nKGFyclsxXSlcbiAgICBjb25zb2xlLmxvZyhgcGxheWVyLSR7YXJyWzBdfV8ke2FyclsxXX1gKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyLSR7YXJyWzBdfV8ke2FyclsxXX1gKVxuICAgIGNvbnNvbGUubG9nKGRpdilcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChyZXN1bHRzKVxuXG59IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcHNcIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJke1xuICAgIGNvbnN0cnVjdG9yKG51bSwgZm9nPSBmYWxzZSl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnh5ID0gbnVtXG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gMFxuICAgICAgICB0aGlzLmdyaWQgPSBbXVxuICAgICAgICB0aGlzLnNoaXBzID0gW11cbiAgICAgICAgdGhpcy5mb2dPZldhciA9IGZvZ1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy54eSArIDI7IGkrKyl7IFxuXG5cbiAgICAgICAgICAgIC8vL0NyZWF0ZSBhIGJvcmRlciBvZiBudWxsIHRpbGVzIGFyb3VuZCB0aGUgZmllbGQgdG8gbWFyayBlZGdlc1xuICAgICAgICAgICAgbGV0IGxhc3QgPSB0aGlzLnh5ICsgMVxuICAgICAgICAgICAgaWYoaSA9PT0gMCB8fCAoaSA9PT0gbGFzdCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcm93ID0gbmV3IEFycmF5KHRoaXMueHkrMikuZmlsbCh7c3RhdHVzOiBcIm51bGxcIn0pXG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgcm93ID0gbmV3IEFycmF5KHRoaXMueHkrMSkuZmlsbCh7c3RhdHVzOiBcImVtcHR5XCIsIGF0dGFja2VkOiBmYWxzZSxmb2c6IHRoaXMuZm9nT2ZXYXJ9KVxuICAgICAgICAgICAgcm93WzBdID0ge3N0YXR1czogXCJudWxsXCJ9XG4gICAgICAgICAgICByb3cucHVzaCh7c3RhdHVzOiBcIm51bGxcIn0pXG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaChyb3cpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlU2hpcChtb2RlbCwgc2l6ZSl7XG4gICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAobW9kZWwsIHNpemUpXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKVxuICAgICAgICB0aGlzLnJlbWFpbmluZyArPSAxXG4gICAgfVxuXG4gICAgXG4gICAgcGxhY2VTaGlwKHNoaXBJbmRleCwgbG9jYXRpb24sIGRpcmVjdGlvbil7XG4gICAgICAgIGxldCBzaGlwSW5mbyA9IFt0aGlzLnNoaXBzW3NoaXBJbmRleF1dXG4gICAgICAgIGlmKCFzaGlwSW5mbykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJObyBzaGlwIGF0IHRoYXQgaW5kZXhcIik7XG4gICAgICAgIGxldCBzaXplID0gc2hpcEluZm9bMF0uc2l6ZVxuICAgICAgICBcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNYKGxvY2F0aW9uLCsxLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNYKGxvY2F0aW9uLC0xLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWShsb2NhdGlvbiwtMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcblxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IFwiZG93blwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWShsb2NhdGlvbiwrMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcblxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVUaWxlQXJyYXlTdGF0aWNYKFt4LCB5XSwgZGlyZWN0aW9uLCBzaXplKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzaXplIC0gMTsgKytpKXtcbiAgICAgICAgeSArPSBkaXJlY3Rpb25cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG4gICAgY3JlYXRlVGlsZUFycmF5U3RhdGljWShbeCx5XSwgZGlyZWN0aW9uLCBzaXplKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzaXplIC0gMTsgKytpKXtcbiAgICAgICAgeCArPSBkaXJlY3Rpb25cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcyl7IFxuICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbaV1bMF1cbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1tpXVsxXVxuICAgICAgICBpZih4ID49IHRoaXMueHkgfHwgeSA+PSB0aGlzLnh5IHx8IHggPD0gMCB8fCB5IDw9IDApIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmKHguc3RhdHVzID09PSBudWxsIHx8IHkuc3RhdHVzID09PSBudWxsKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LHRpbGVzKXtcbiAgICAgICAvKiAgY29uc29sZS5sb2coc2hpcEluZGV4KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzW3NoaXBJbmRleF0pICovXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgeCA9IHRpbGVzW2ldWzBdXG4gICAgICAgICAgICBsZXQgeSA9ICB0aWxlc1tpXVsxXVxuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge3N0YXR1czogdGhpcy5zaGlwc1tzaGlwSW5kZXhdLnN0YXR1cywgYXR0YWNrZWQ6IGZhbHNlLCBzaGlwOnRoaXMuc2hpcHNbc2hpcEluZGV4XSwgZm9nOnRoaXMuZm9nT2ZXYXJ9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIHJlY2VpdmVBdHRhY2soW3gseV0pe1xuICAgICAgICBsZXQgbWlzc2VkID0gdGhpcy5pc1RpbGVFbXB0eShbeCx5XSlcbiAgICAgICAgaWYobWlzc2VkKXtcbiAgICAgICAgICAgLy8gbWFyayBhcyBtaXNzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gXCJtaXNzZWRcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmKCFtaXNzZWQpeyBcbiAgICAgICAgICAgIC8vL21pZ2h0IG5lZWQgcmVkb1xuICAgICAgICAgICAgbGV0IGhpdFNoaXAgPSB0aGlzLmdyaWRbeF1beV0uc2hpcFxuICAgICAgICAgICAgaGl0U2hpcC5oaXQoKVxuICAgICAgICAgICAgbGV0IGlzU2hpcFN1bmsgPSBoaXRTaGlwLmlzU3VuaygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpc1NoaXBTdW5rKVxuICAgICAgICAgICAgaWYoaXNTaGlwU3Vuayl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gMVxuICAgICAgICAgICAgICAgIGxldCBhcmVBbGxTdW5rID0gdGhpcy5hcmVBbGxTaGlwc1N1bmsoKVxuICAgICAgICAgICAgICAgIGlmKGFyZUFsbFN1bmspIGNvbnNvbGUubG9nKFwibG9zdFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImdhbWVvdmVyXCJcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBcImhpdFwiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaXNUaWxlRW1wdHkoW3gseV0pe1xuICAgICAgICBsZXQgZ3JpZENvZGUgPSB0aGlzLmdyaWRbeF1beV1cbiAgICAgICAgaWYoZ3JpZENvZGUuc3RhdHVzID09PSBcImVtcHR5XCIpIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGFyZUFsbFNoaXBzU3VuayhyZW1haW5pbmcgPSB0aGlzLnJlbWFpbmluZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlbWFpbmluZylcbiAgICAgICAgaWYocmVtYWluaW5nID49IDEpIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIHJldHVybiB0cnVlXG4gICAgIH1cblxuICAgIC8vL1BsYWNlIHNoaXBzIGluIHByZWRldGVybWluZWQgc3BvdHNcbiAgICBkZWZhdWx0UGxhY2VTaGlwKCl7XG4gICAgICAgdGhpcy5wbGFjZVNoaXAoMCwgWzUsN10sIFwiZG93blwiKVxuICAgICAgIHRoaXMucGxhY2VTaGlwKDEsIFs0LDRdLCBcInVwXCIpXG4gICAgICAgdGhpcy5wbGFjZVNoaXAoMiwgWzEsN10sIFwiZG93blwiKVxuICAgICAgIHRoaXMucGxhY2VTaGlwKDMsIFs5LDVdLCBcImxlZnRcIilcbiAgICAgICB0aGlzLnBsYWNlU2hpcCg0LCBbMiwyXSwgXCJsZWZ0XCIpXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vY29tcHV0ZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hc3RlcntcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSlcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpXG5cbiAgICAgICAgLy9XaG8gaGFzIGFjdGl2ZSB0dXJuIFBsYXllciBpcyAxIENvbXAgaXMgMlxuICAgICAgICB0aGlzLmFjdGl2ZSA9IDFcblxuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVCb2FyZHMoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdGlhbGl6ZUdhbWVCb2FyZCgpXG4gICAgICAgIC8vL1Bhc3MgdHJ1ZSB0b28gZW5hYmxlIEZvZyBvZiBXYXJcbiAgICAgICAgdGhpcy5jb21wdXRlci5pbml0aWFsaXplR2FtZUJvYXJkKHRydWUpIFxuICAgIH1cblxuICAgIGxpbmtQbGF5ZXJzKCl7XG4gICAgICAgIHRoaXMucGxheWVyLm9wcG9uZW50ID0gdGhpcy5jb21wdXRlclxuICAgICAgICB0aGlzLmNvbXB1dGVyLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXJcbiAgICB9XG59IiwiXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbnVsbFxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbnVsbFxuICAgIH1cblxuICAgIGluaXRpYWxpemVHYW1lQm9hcmQoZm9nPWZhbHNlKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwLGZvZylcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlRmxlZXQoKXtcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwiY2FycmllclwiLCA1KVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcImRlc3Ryb3llclwiLCAzKVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJzdWJtYXJpbmVcIiwgMylcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwicGF0cm9sLWJvYXRcIiwgMilcblxuICAgIH1cbiAgICBcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHNpemUpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG1vZGVsO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzICs9MVxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLmhpdHMgPj0gdGhpcy5zaXplKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHNpbmtTaGlwKCl7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lTWFzdGVyIGZyb20gXCIuL21vZHVsZXMvZ2FtZW1hc3RlclwiXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5jc3MnXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL21vZHVsZXMvZ2FtZWJvYXJkXCJcbmltcG9ydCBkcmF3Qm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9kcmF3Ym9hcmQuanNcIlxuXG5cblxuXG5jb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0dhbWVCdXR0b24nKVxuXG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlXG4gICAgbGV0IHN0YXJ0ID0gc3RhcnROZXdHYW1lKG5hbWUpXG59KVxuXG5mdW5jdGlvbiBzdGFydE5ld0dhbWUobmFtZSl7XG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lTWFzdGVyKG5hbWUpXG4gICAgXG4gICAgXG4gICAgbmV3R2FtZS5jcmVhdGVHYW1lQm9hcmRzKClcbiAgICBuZXdHYW1lLmxpbmtQbGF5ZXJzKClcbiAgICBuZXdHYW1lLmNvbXB1dGVyLmZpbGxBdHRhY2tUYXJnZXRzKClcblxuICAgIC8vUnVuIEZsZWV0IENyZWF0aW9uXG4gICAgbmV3R2FtZS5wbGF5ZXIuY3JlYXRlRmxlZXQoKVxuICAgIG5ld0dhbWUuY29tcHV0ZXIuY3JlYXRlRmxlZXQoKVxuXG4gICAgLy8vcmVtb3ZlIGRlZmF1bHQgcGxhY2VtZW50IGxhdGVyXG4gICAgbmV3R2FtZS5wbGF5ZXIuZ2FtZUJvYXJkLmRlZmF1bHRQbGFjZVNoaXAoKVxuICAgIG5ld0dhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLmRlZmF1bHRQbGFjZVNoaXAoKVxuICAgIFxuICAgIC8vLy8vZnVuY3Rpb24gdG8gY3JlYXRlIGJvYXJkIFVJXG4gICAgbGV0IHBsYXllckRyYXcgPSBkcmF3Qm9hcmQoXCJwbGF5ZXJcIixuZXdHYW1lKVxuICAgIGxldCBjb21wdXRlckRyYXcgPSBkcmF3Qm9hcmQoXCJjb21wdXRlclwiLG5ld0dhbWUpXG4gXG5cblxuXG5cblxuICAgIGNvbnNvbGUubG9nKG5ld0dhbWUpXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==