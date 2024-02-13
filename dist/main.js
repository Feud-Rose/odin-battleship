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
        this.attemptedAttacks = new Set([])
    }
    
    randomNumber() {
        return Math.round(Math.random() * 9 + 1);
      }

    //Call with (this.randomNumber,this.randomNumber)
    pickTile(callbackX,callbackY){
        return [callbackX(),callbackY()]
    }

    validateTile(arr){

        let check = this.attemptedAttacks.has(`${arr[0]}_${arr[1]}`)
        if(!check) return true  ///if "attacked: false" return as Valid
        else return false
    }

    getRandomTile(){
        let randomTile = this.pickTile(this.randomNumber,this.randomNumber)
        let valid = this.validateTile(randomTile)
        if(valid) return randomTile
        else return this.getRandomTile()

    }


    takeTurn(game){
        let randomTile = this.getRandomTile()
        let results = this.opponent.gameBoard.receiveAttack(randomTile)
        this.attemptedAttacks.add(`${randomTile[0]}_${randomTile[1]}`);
        ///return an object with information about turn

        let obj = {results: results, attackedTile:[randomTile[0], randomTile[1]]}

        return obj
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOzs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QztBQUNkO0FBQ1k7QUFDRzs7Ozs7QUFLOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHdCQUF3QiwyREFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRUFBUztBQUM5Qix1QkFBdUIsaUVBQVM7QUFDaEM7Ozs7OztBQU1BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2RyYXdib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvZ2FtZW1hc3Rlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL3NoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cblxuLmdhbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2cge1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAzcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuLnBsYXllci1ib3JkZXIsIC5jb21wdXRlci1ib3JkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wbGF5ZXItZ3JpZCwgLmNvbXB1dGVyLWdyaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDQwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCA0MHB4KTtcbiAgICBnYXA6IDJweDtcbn1cblxuLnRpbGV7XG4gICAgYm9yZGVyOiBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIG1pbi13aWR0aDogNDBweDtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm51bGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5lbXB0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG5cbi5jYXJyaWVyLFxuLmJhdHRsZXNoaXAsXG4uZGVzdHJveWVyLFxuLnN1Ym1hcmluZSxcbi5wYXRyb2wtYm9hdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG59XG5cbi5mb2ctb2Ytd2Fye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4ubWlzc2Vke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDE2LCAxNik7IFxufVxuXG4uaGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7Ozs7O0lBS0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcbi5nYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxvZyB7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgM3B4O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5wbGF5ZXItYm9yZGVyLCAuY29tcHV0ZXItYm9yZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCwgLmNvbXB1dGVyLWdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCA0MHB4KTtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi50aWxle1xcbiAgICBib3JkZXI6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubnVsbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5lbXB0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuXFxuLmNhcnJpZXIsXFxuLmJhdHRsZXNoaXAsXFxuLmRlc3Ryb3llcixcXG4uc3VibWFyaW5lLFxcbi5wYXRyb2wtYm9hdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG4uZm9nLW9mLXdhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5taXNzZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDE2LCAxNik7IFxcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vbW9kdWxlcy9wbGF5ZXJzXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVye1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ29tcHV0ZXJcIlxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbnVsbFxuICAgICAgICB0aGlzLmF0dGVtcHRlZEF0dGFja3MgPSBuZXcgU2V0KFtdKVxuICAgIH1cbiAgICBcbiAgICByYW5kb21OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XG4gICAgICB9XG5cbiAgICAvL0NhbGwgd2l0aCAodGhpcy5yYW5kb21OdW1iZXIsdGhpcy5yYW5kb21OdW1iZXIpXG4gICAgcGlja1RpbGUoY2FsbGJhY2tYLGNhbGxiYWNrWSl7XG4gICAgICAgIHJldHVybiBbY2FsbGJhY2tYKCksY2FsbGJhY2tZKCldXG4gICAgfVxuXG4gICAgdmFsaWRhdGVUaWxlKGFycil7XG5cbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5hdHRlbXB0ZWRBdHRhY2tzLmhhcyhgJHthcnJbMF19XyR7YXJyWzFdfWApXG4gICAgICAgIGlmKCFjaGVjaykgcmV0dXJuIHRydWUgIC8vL2lmIFwiYXR0YWNrZWQ6IGZhbHNlXCIgcmV0dXJuIGFzIFZhbGlkXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tVGlsZSgpe1xuICAgICAgICBsZXQgcmFuZG9tVGlsZSA9IHRoaXMucGlja1RpbGUodGhpcy5yYW5kb21OdW1iZXIsdGhpcy5yYW5kb21OdW1iZXIpXG4gICAgICAgIGxldCB2YWxpZCA9IHRoaXMudmFsaWRhdGVUaWxlKHJhbmRvbVRpbGUpXG4gICAgICAgIGlmKHZhbGlkKSByZXR1cm4gcmFuZG9tVGlsZVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmdldFJhbmRvbVRpbGUoKVxuXG4gICAgfVxuXG5cbiAgICB0YWtlVHVybihnYW1lKXtcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLmdldFJhbmRvbVRpbGUoKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMub3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tVGlsZSlcbiAgICAgICAgdGhpcy5hdHRlbXB0ZWRBdHRhY2tzLmFkZChgJHtyYW5kb21UaWxlWzBdfV8ke3JhbmRvbVRpbGVbMV19YCk7XG4gICAgICAgIC8vL3JldHVybiBhbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0dXJuXG5cbiAgICAgICAgbGV0IG9iaiA9IHtyZXN1bHRzOiByZXN1bHRzLCBhdHRhY2tlZFRpbGU6W3JhbmRvbVRpbGVbMF0sIHJhbmRvbVRpbGVbMV1dfVxuXG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cblxufVxuXG4gICBcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdCb2FyZCh0YXJnZXQsZ2FtZSl7XG4gICAgbGV0IG5ld0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0fS1ncmlkYClcbiAgICBsZXQgZ3JpZCA9IGdhbWVbdGFyZ2V0XS5nYW1lQm9hcmQuZ3JpZFxuICAgIGNvbnN0IGxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nXCIpXG4gICAgY29uc29sZS5sb2coZ2FtZSlcbiAgICBjb25zb2xlLmxvZyhncmlkKVxuICAgIGdyaWQuZm9yRWFjaCgocm93LGluZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wseUluZGV4KSA9PiB7XG4gICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCd0aWxlJyxjb2wuc3RhdHVzKVxuICAgICAgICBuZXdEaXYuaWQgPSBgJHtpbmRleH1fJHt5SW5kZXh9YFxuICAgICAgICBcbiAgICAgICAgLy8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvbyBjb21wdXRlciBzcXVhcmVzIHRoYXQgYWxsb3cgcGxheWVyIHRvbyBhdHRhY2sgb24gY2xpY2tcbiAgICAgICAgaWYoY29sLmZvZyA9PT0gdHJ1ZSkgeyBcbiAgICAgICAgICAgIG5ld0Rpdi5pZCA9IGAke2luZGV4fV8ke3lJbmRleH1gXG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnZm9nLW9mLXdhcicpXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbaW5kZXgseUluZGV4XVxuICAgICAgICAgICAgbGV0IGZpcnN0TGV0dGVyID0gY29sLnN0YXR1cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBnYW1lLmFjdGl2ZVxuICAgICAgICAgICAgaWYoYWN0aXZlID09PSAxKXtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vL091dHB1dCBoaXQvbWlzcyB0b28gZGl2LmxvZ1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHRzID0gZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhhcnJheSlcbiAgICAgICAgICAgICAgICBsb2dCb3gudGV4dENvbnRlbnQgPSBhdHRhY2tSZXN1bHRzXG4gICAgICAgICAgICAgICAgLy8vc2V0IHR1cm4gdG9vIGNvbXB1dGVyXG4gICAgICAgICAgICAgICAgZ2FtZS5hY3RpdmUgKz0gMVxuXG4gICAgICAgICAgICAgICAgLy9yZXBhaW50IHRpbGVcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZm9nLW9mLXdhcicpXG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYXR0YWNrUmVzdWx0c1swXSlcblxuICAgICAgICAgICAgICAgIC8vL2xldCBDb21wdXRlciB0YWtlIGEgdHVyblxuICAgICAgICAgICAgICAgIGxldCBjb21wVHVybkRhdGEgPSBnYW1lLmNvbXB1dGVyLnRha2VUdXJuKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wVHVybkRhdGEpIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGNvbXBUdXJuRGF0YS5yZXN1bHRzXG4gICAgICAgICAgICAgICAgLy8vIHRvRG8gaWYocmVzdWx0cyA9PT0gXCJnYW1lb3ZlclwiKSByZXR1cm4gZ2FtZS5maW5pc2goXCJDb21wdXRlclwiKVxuXG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vL2Vsc2VcbiAgICAgICAgICAgICAgICBsZXQgcmVwYWludFBsYXllclRpbGUgPSByZXBhaW50VGlsZShjb21wVHVybkRhdGEucmVzdWx0cywgY29tcFR1cm5EYXRhLmF0dGFja2VkVGlsZSlcblxuXG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGdhbWUuYWN0aXZlIC09IDEgICBcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLy9BZGQgY2xhc3MgdG9vIHBsYXllciB0aWxlcyB0byBmaW5kIHdoZW4gdGhleSBhcmUgYXR0YWNrZWRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdEaXYuaWQgPSBgcGxheWVyLSR7aW5kZXh9XyR7eUluZGV4fWBcblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGAke2luZGV4fV8ke3lJbmRleH1gXG4gICAgICAgIG5ld0JvYXJkLmFwcGVuZENoaWxkKG5ld0RpdilcblxuICAgICAgICB9KVxuXG4gICAgfSlcblxufSBcblxuZnVuY3Rpb24gcmVwYWludFRpbGUocmVzdWx0cywgYXJyKXtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXllci0ke2FyclswXX1fJHthcnJbMV19YClcbiAgICBjb25zb2xlLmxvZyhkaXYpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQocmVzdWx0cylcblxufSIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3RvcihudW0sIGZvZz0gZmFsc2Upe1xuICAgICAgICBcbiAgICAgICAgdGhpcy54eSA9IG51bVxuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IDBcbiAgICAgICAgdGhpcy5ncmlkID0gW11cbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdXG4gICAgICAgIHRoaXMuZm9nT2ZXYXIgPSBmb2dcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMueHkgKyAyOyBpKyspeyBcblxuXG4gICAgICAgICAgICAvLy9DcmVhdGUgYSBib3JkZXIgb2YgbnVsbCB0aWxlcyBhcm91bmQgdGhlIGZpZWxkIHRvIG1hcmsgZWRnZXNcbiAgICAgICAgICAgIGxldCBsYXN0ID0gdGhpcy54eSArIDFcbiAgICAgICAgICAgIGlmKGkgPT09IDAgfHwgKGkgPT09IGxhc3QpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSh0aGlzLnh5KzIpLmZpbGwoe3N0YXR1czogXCJudWxsXCJ9KVxuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2gocm93KVxuICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSh0aGlzLnh5KzEpLmZpbGwoe3N0YXR1czogXCJlbXB0eVwiLCBhdHRhY2tlZDogZmFsc2UsZm9nOiB0aGlzLmZvZ09mV2FyfSlcbiAgICAgICAgICAgIHJvd1swXSA9IHtzdGF0dXM6IFwibnVsbFwifVxuICAgICAgICAgICAgcm93LnB1c2goe3N0YXR1czogXCJudWxsXCJ9KVxuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2gocm93KX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZVNoaXAobW9kZWwsIHNpemUpe1xuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKG1vZGVsLCBzaXplKVxuICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcClcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgKz0gMVxuICAgIH1cblxuICAgIFxuICAgIHBsYWNlU2hpcChzaGlwSW5kZXgsIGxvY2F0aW9uLCBkaXJlY3Rpb24pe1xuICAgICAgICBsZXQgc2hpcEluZm8gPSBbdGhpcy5zaGlwc1tzaGlwSW5kZXhdXVxuICAgICAgICBpZighc2hpcEluZm8pIHJldHVybiBjb25zb2xlLmVycm9yKFwiTm8gc2hpcCBhdCB0aGF0IGluZGV4XCIpO1xuICAgICAgICBsZXQgc2l6ZSA9IHNoaXBJbmZvWzBdLnNpemVcbiAgICAgICAgXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWChsb2NhdGlvbiwrMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWChsb2NhdGlvbiwtMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IFwidXBcIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1kobG9jYXRpb24sLTEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBcImRvd25cIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1kobG9jYXRpb24sKzEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlVGlsZUFycmF5U3RhdGljWChbeCwgeV0sIGRpcmVjdGlvbiwgc2l6ZSl7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgc2l6ZSAtIDE7ICsraSl7XG4gICAgICAgIHkgKz0gZGlyZWN0aW9uXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzXG4gICAgfVxuICAgIGNyZWF0ZVRpbGVBcnJheVN0YXRpY1koW3gseV0sIGRpcmVjdGlvbiwgc2l6ZSl7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgc2l6ZSAtIDE7ICsraSl7XG4gICAgICAgIHggKz0gZGlyZWN0aW9uXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gseV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgdmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpeyBcbiAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzW2ldWzBdXG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZXNbaV1bMV1cbiAgICAgICAgaWYoeCA+PSB0aGlzLnh5IHx8IHkgPj0gdGhpcy54eSB8fCB4IDw9IDAgfHwgeSA8PSAwKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZih4LnN0YXR1cyA9PT0gbnVsbCB8fCB5LnN0YXR1cyA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCx0aWxlcyl7XG4gICAgICAgLyogIGNvbnNvbGUubG9nKHNoaXBJbmRleClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc1tzaGlwSW5kZXhdKSAqL1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHggPSB0aWxlc1tpXVswXVxuICAgICAgICAgICAgbGV0IHkgPSAgdGlsZXNbaV1bMV1cbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHtzdGF0dXM6IHRoaXMuc2hpcHNbc2hpcEluZGV4XS5zdGF0dXMsIGF0dGFja2VkOiBmYWxzZSwgc2hpcDp0aGlzLnNoaXBzW3NoaXBJbmRleF0sIGZvZzp0aGlzLmZvZ09mV2FyfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICByZWNlaXZlQXR0YWNrKFt4LHldKXtcbiAgICAgICAgbGV0IG1pc3NlZCA9IHRoaXMuaXNUaWxlRW1wdHkoW3gseV0pXG4gICAgICAgIGlmKG1pc3NlZCl7XG4gICAgICAgICAgIC8vIG1hcmsgYXMgbWlzc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFwibWlzc2VkXCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSBpZighbWlzc2VkKXsgXG4gICAgICAgICAgICAvLy9taWdodCBuZWVkIHJlZG9cbiAgICAgICAgICAgIGxldCBoaXRTaGlwID0gdGhpcy5ncmlkW3hdW3ldLnNoaXBcbiAgICAgICAgICAgIGhpdFNoaXAuaGl0KClcbiAgICAgICAgICAgIGxldCBpc1NoaXBTdW5rID0gaGl0U2hpcC5pc1N1bmsoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaXNTaGlwU3VuaylcbiAgICAgICAgICAgIGlmKGlzU2hpcFN1bmspe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluaW5nIC09IDFcbiAgICAgICAgICAgICAgICBsZXQgYXJlQWxsU3VuayA9IHRoaXMuYXJlQWxsU2hpcHNTdW5rKClcbiAgICAgICAgICAgICAgICBpZihhcmVBbGxTdW5rKSBjb25zb2xlLmxvZyhcImxvc3RcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJnYW1lb3ZlclwiXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gXCJoaXRcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlzVGlsZUVtcHR5KFt4LHldKXtcbiAgICAgICAgbGV0IGdyaWRDb2RlID0gdGhpcy5ncmlkW3hdW3ldXG4gICAgICAgIGlmKGdyaWRDb2RlLnN0YXR1cyA9PT0gXCJlbXB0eVwiKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBhcmVBbGxTaGlwc1N1bmsocmVtYWluaW5nID0gdGhpcy5yZW1haW5pbmcpe1xuICAgICAgICBjb25zb2xlLmxvZyhyZW1haW5pbmcpXG4gICAgICAgIGlmKHJlbWFpbmluZyA+PSAxKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZVxuICAgICB9XG5cbiAgICAvLy9QbGFjZSBzaGlwcyBpbiBwcmVkZXRlcm1pbmVkIHNwb3RzXG4gICAgZGVmYXVsdFBsYWNlU2hpcCgpe1xuICAgICAgIHRoaXMucGxhY2VTaGlwKDAsIFs1LDddLCBcImRvd25cIilcbiAgICAgICB0aGlzLnBsYWNlU2hpcCgxLCBbNCw0XSwgXCJ1cFwiKVxuICAgICAgIHRoaXMucGxhY2VTaGlwKDIsIFsxLDddLCBcImRvd25cIilcbiAgICAgICB0aGlzLnBsYWNlU2hpcCgzLCBbOSw1XSwgXCJsZWZ0XCIpXG4gICAgICAgdGhpcy5wbGFjZVNoaXAoNCwgWzIsMl0sIFwibGVmdFwiKVxuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuL2NvbXB1dGVyXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllcnNcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYXN0ZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUpXG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKVxuXG4gICAgICAgIC8vV2hvIGhhcyBhY3RpdmUgdHVybiBQbGF5ZXIgaXMgMSBDb21wIGlzIDJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAxXG5cbiAgICB9XG5cbiAgICBjcmVhdGVHYW1lQm9hcmRzKCl7XG4gICAgICAgIHRoaXMucGxheWVyLmluaXRpYWxpemVHYW1lQm9hcmQoKVxuICAgICAgICAvLy9QYXNzIHRydWUgdG9vIGVuYWJsZSBGb2cgb2YgV2FyXG4gICAgICAgIHRoaXMuY29tcHV0ZXIuaW5pdGlhbGl6ZUdhbWVCb2FyZCh0cnVlKSBcbiAgICB9XG5cbiAgICBsaW5rUGxheWVycygpe1xuICAgICAgICB0aGlzLnBsYXllci5vcHBvbmVudCA9IHRoaXMuY29tcHV0ZXJcbiAgICAgICAgdGhpcy5jb21wdXRlci5vcHBvbmVudCA9IHRoaXMucGxheWVyXG4gICAgfVxufSIsIlxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG51bGxcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG51bGxcbiAgICB9XG5cbiAgICBpbml0aWFsaXplR2FtZUJvYXJkKGZvZz1mYWxzZSl7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCxmb2cpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZUZsZWV0KCl7XG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcImNhcnJpZXJcIiwgNSlcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJkZXN0cm95ZXJcIiwgMylcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwic3VibWFyaW5lXCIsIDMpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcInBhdHJvbC1ib2F0XCIsIDIpXG5cbiAgICB9XG4gICAgXG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCBzaXplKXtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cyArPTFcbiAgICB9XG5cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYodGhpcy5oaXRzID49IHRoaXMuc2l6ZSkgcmV0dXJuIHRydWVcblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBzaW5rU2hpcCgpe1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZU1hc3RlciBmcm9tIFwiLi9tb2R1bGVzL2dhbWVtYXN0ZXJcIlxuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJ1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZFwiXG5pbXBvcnQgZHJhd0JvYXJkIGZyb20gXCIuL21vZHVsZXMvZHJhd2JvYXJkLmpzXCJcblxuXG5cblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdHYW1lQnV0dG9uJylcblxubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZVxuICAgIGxldCBzdGFydCA9IHN0YXJ0TmV3R2FtZShuYW1lKVxufSlcblxuZnVuY3Rpb24gc3RhcnROZXdHYW1lKG5hbWUpe1xuICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZU1hc3RlcihuYW1lKVxuICAgIFxuICAgIFxuICAgIG5ld0dhbWUuY3JlYXRlR2FtZUJvYXJkcygpXG4gICAgbmV3R2FtZS5saW5rUGxheWVycygpXG5cbiAgICAvL1J1biBGbGVldCBDcmVhdGlvblxuICAgIG5ld0dhbWUucGxheWVyLmNyZWF0ZUZsZWV0KClcbiAgICBuZXdHYW1lLmNvbXB1dGVyLmNyZWF0ZUZsZWV0KClcblxuICAgIC8vL3JlbW92ZSBkZWZhdWx0IHBsYWNlbWVudCBsYXRlclxuICAgIG5ld0dhbWUucGxheWVyLmdhbWVCb2FyZC5kZWZhdWx0UGxhY2VTaGlwKClcbiAgICBuZXdHYW1lLmNvbXB1dGVyLmdhbWVCb2FyZC5kZWZhdWx0UGxhY2VTaGlwKClcbiAgICBcbiAgICAvLy8vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBib2FyZCBVSVxuICAgIGxldCBwbGF5ZXJEcmF3ID0gZHJhd0JvYXJkKFwicGxheWVyXCIsbmV3R2FtZSlcbiAgICBsZXQgY29tcHV0ZXJEcmF3ID0gZHJhd0JvYXJkKFwiY29tcHV0ZXJcIixuZXdHYW1lKVxuIFxuXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZyhuZXdHYW1lKVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=