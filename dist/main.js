/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


    takeTurn(){
      
        let randomTile = this.getRandomTile()
        console.log(this.opponent)
        let results = this.opponent.gameBoard.receiveAttack(randomTile)
        this.attemptedAttacks.add(`${randomTile[0]}_${randomTile[1]}`);
        return results

      
        



    }


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
    constructor(num){
        
        this.xy = num
        this.remaining = 0
        this.grid = []
        this.ships = []
        for(let i = 0; i < this.xy + 2; i++){ 

            let last = this.xy + 1

            if(i === 0 || (i === last))
            {
            let row = new Array(this.xy+2).fill({status: "null"})
            this.grid.push(row)
        }
            else{
            let row = new Array(this.xy+1).fill({status: "empty", attacked: false},1)
            row[0] = {status: "null"}
            row.push({status: "null"})
            this.grid.push(row)}
            }
            
    }

    createShip(model, size){
        let newShip = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](model, size)
        this.ships.push(newShip)
        this.remaining += this.remaining
    }

    
    placeShip(shipIndex, location, direction){
        let shipInfo = [this.ships[shipIndex]]
        if(!shipInfo) return console.error("No ship at that index");
        let size = shipInfo[0].size
        
        if(direction === "up"){
            let coordinates = this.createTileArrayStaticX(location,+1,size)
            let validate = this.validatePlacement(coordinates)
            
            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
        else if(direction === "down"){
            let coordinates = this.createTileArrayStaticX(location,-1,size)
            let validate = this.validatePlacement(coordinates)
            
            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
        else if(direction === "left"){
            let coordinates = this.createTileArrayStaticY(location,-1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(shipIndex,coordinates)

            return validate
        }
        else if(direction === "right"){
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
            this.grid[x][y] = {status: this.ships[shipIndex].status, attacked: "hasNot", ship:this.ships[shipIndex]}
        }
    }

    

    receiveAttack([x,y]){
        let missed = this.isTileEmpty([x,y])
        if(missed){
           // mark as miss
                
            return "Missed"
        }
        
        else if(!missed){ 
            ///might need redo
            let hitShip = this.grid[x][y].ship
            hitShip.hit()
            let isShipSunk = hitShip.isSunk
            if(isShipSunk){
                hitShip.sinkShip
                this.remaining -= this.remaining
               // if(this.remaining >= 0) Lost game
            } 
            
            return "Hit"
        }
        
    }

    isTileEmpty([x,y]){
        let gridCode = this.grid[x][y]
        if(gridCode.status === "empty") return true
        return false
    }

    areAllShipsSunk(){
        let remainingShips = this.remaining
        if(remainingShips >= 1) return false
        else return true
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
        console.log(this.player.gameBoard)
        this.computer.initializeGameBoard()
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

    initializeGameBoard(){
        this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10)
        
    }

    createFleet(){
       this.gameBoard.createShip("carrier", 5)
       this.gameBoard.createShip("battleship", 4)
       this.gameBoard.createShip("destroyer ", 3)
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gamemaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gamemaster */ "./src/modules/gamemaster.js");








const newGameButton = document.getElementById('newGameButton')

newGameButton.addEventListener("click", (e) => {
    let name = document.getElementById("name").value
    const newGame = new _modules_gamemaster__WEBPACK_IMPORTED_MODULE_0__["default"](name)
    console.log(newGame)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qzs7Ozs7Ozs7QUFRN0M7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwyREFBVTtBQUNsQztBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9nYW1lbWFzdGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vbW9kdWxlcy9wbGF5ZXJzXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVye1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ29tcHV0ZXJcIlxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbnVsbFxuICAgICAgICB0aGlzLmF0dGVtcHRlZEF0dGFja3MgPSBuZXcgU2V0KFtdKVxuICAgIH1cbiAgICBcbiAgICByYW5kb21OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XG4gICAgICB9XG5cbiAgICAvL0NhbGwgd2l0aCAodGhpcy5yYW5kb21OdW1iZXIsdGhpcy5yYW5kb21OdW1iZXIpXG4gICAgcGlja1RpbGUoY2FsbGJhY2tYLGNhbGxiYWNrWSl7XG4gICAgICAgIHJldHVybiBbY2FsbGJhY2tYKCksY2FsbGJhY2tZKCldXG4gICAgfVxuXG4gICAgdmFsaWRhdGVUaWxlKGFycil7XG5cbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5hdHRlbXB0ZWRBdHRhY2tzLmhhcyhgJHthcnJbMF19XyR7YXJyWzFdfWApXG4gICAgICAgIGlmKCFjaGVjaykgcmV0dXJuIHRydWUgIC8vL2lmIFwiYXR0YWNrZWQ6IGZhbHNlXCIgcmV0dXJuIGFzIFZhbGlkXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tVGlsZSgpe1xuICAgICAgICBsZXQgcmFuZG9tVGlsZSA9IHRoaXMucGlja1RpbGUodGhpcy5yYW5kb21OdW1iZXIsdGhpcy5yYW5kb21OdW1iZXIpXG4gICAgICAgIGxldCB2YWxpZCA9IHRoaXMudmFsaWRhdGVUaWxlKHJhbmRvbVRpbGUpXG4gICAgICAgIGlmKHZhbGlkKSByZXR1cm4gcmFuZG9tVGlsZVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmdldFJhbmRvbVRpbGUoKVxuXG4gICAgfVxuXG5cbiAgICB0YWtlVHVybigpe1xuICAgICAgXG4gICAgICAgIGxldCByYW5kb21UaWxlID0gdGhpcy5nZXRSYW5kb21UaWxlKClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHBvbmVudClcbiAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLm9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVRpbGUpXG4gICAgICAgIHRoaXMuYXR0ZW1wdGVkQXR0YWNrcy5hZGQoYCR7cmFuZG9tVGlsZVswXX1fJHtyYW5kb21UaWxlWzFdfWApO1xuICAgICAgICByZXR1cm4gcmVzdWx0c1xuXG4gICAgICBcbiAgICAgICAgXG5cblxuXG4gICAgfVxuXG5cbn1cblxuICAgXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwc1wiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IobnVtKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueHkgPSBudW1cbiAgICAgICAgdGhpcy5yZW1haW5pbmcgPSAwXG4gICAgICAgIHRoaXMuZ3JpZCA9IFtdXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy54eSArIDI7IGkrKyl7IFxuXG4gICAgICAgICAgICBsZXQgbGFzdCA9IHRoaXMueHkgKyAxXG5cbiAgICAgICAgICAgIGlmKGkgPT09IDAgfHwgKGkgPT09IGxhc3QpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSh0aGlzLnh5KzIpLmZpbGwoe3N0YXR1czogXCJudWxsXCJ9KVxuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2gocm93KVxuICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSh0aGlzLnh5KzEpLmZpbGwoe3N0YXR1czogXCJlbXB0eVwiLCBhdHRhY2tlZDogZmFsc2V9LDEpXG4gICAgICAgICAgICByb3dbMF0gPSB7c3RhdHVzOiBcIm51bGxcIn1cbiAgICAgICAgICAgIHJvdy5wdXNoKHtzdGF0dXM6IFwibnVsbFwifSlcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHJvdyl9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjcmVhdGVTaGlwKG1vZGVsLCBzaXplKXtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBuZXcgU2hpcChtb2RlbCwgc2l6ZSlcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApXG4gICAgICAgIHRoaXMucmVtYWluaW5nICs9IHRoaXMucmVtYWluaW5nXG4gICAgfVxuXG4gICAgXG4gICAgcGxhY2VTaGlwKHNoaXBJbmRleCwgbG9jYXRpb24sIGRpcmVjdGlvbil7XG4gICAgICAgIGxldCBzaGlwSW5mbyA9IFt0aGlzLnNoaXBzW3NoaXBJbmRleF1dXG4gICAgICAgIGlmKCFzaGlwSW5mbykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJObyBzaGlwIGF0IHRoYXQgaW5kZXhcIik7XG4gICAgICAgIGxldCBzaXplID0gc2hpcEluZm9bMF0uc2l6ZVxuICAgICAgICBcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSBcInVwXCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNYKGxvY2F0aW9uLCsxLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNYKGxvY2F0aW9uLC0xLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNZKGxvY2F0aW9uLC0xLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWShsb2NhdGlvbiwrMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcblxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVUaWxlQXJyYXlTdGF0aWNYKFt4LCB5XSwgZGlyZWN0aW9uLCBzaXplKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzaXplIC0gMTsgKytpKXtcbiAgICAgICAgeSArPSBkaXJlY3Rpb25cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG4gICAgY3JlYXRlVGlsZUFycmF5U3RhdGljWShbeCx5XSwgZGlyZWN0aW9uLCBzaXplKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzaXplIC0gMTsgKytpKXtcbiAgICAgICAgeCArPSBkaXJlY3Rpb25cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcyl7IFxuICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbaV1bMF1cbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1tpXVsxXVxuICAgICAgICBpZih4ID49IHRoaXMueHkgfHwgeSA+PSB0aGlzLnh5IHx8IHggPD0gMCB8fCB5IDw9IDApIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmKHguc3RhdHVzID09PSBudWxsIHx8IHkuc3RhdHVzID09PSBudWxsKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LHRpbGVzKXtcbiAgICAgICAvKiAgY29uc29sZS5sb2coc2hpcEluZGV4KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzW3NoaXBJbmRleF0pICovXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgeCA9IHRpbGVzW2ldWzBdXG4gICAgICAgICAgICBsZXQgeSA9ICB0aWxlc1tpXVsxXVxuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge3N0YXR1czogdGhpcy5zaGlwc1tzaGlwSW5kZXhdLnN0YXR1cywgYXR0YWNrZWQ6IFwiaGFzTm90XCIsIHNoaXA6dGhpcy5zaGlwc1tzaGlwSW5kZXhdfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICByZWNlaXZlQXR0YWNrKFt4LHldKXtcbiAgICAgICAgbGV0IG1pc3NlZCA9IHRoaXMuaXNUaWxlRW1wdHkoW3gseV0pXG4gICAgICAgIGlmKG1pc3NlZCl7XG4gICAgICAgICAgIC8vIG1hcmsgYXMgbWlzc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFwiTWlzc2VkXCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSBpZighbWlzc2VkKXsgXG4gICAgICAgICAgICAvLy9taWdodCBuZWVkIHJlZG9cbiAgICAgICAgICAgIGxldCBoaXRTaGlwID0gdGhpcy5ncmlkW3hdW3ldLnNoaXBcbiAgICAgICAgICAgIGhpdFNoaXAuaGl0KClcbiAgICAgICAgICAgIGxldCBpc1NoaXBTdW5rID0gaGl0U2hpcC5pc1N1bmtcbiAgICAgICAgICAgIGlmKGlzU2hpcFN1bmspe1xuICAgICAgICAgICAgICAgIGhpdFNoaXAuc2lua1NoaXBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFpbmluZyAtPSB0aGlzLnJlbWFpbmluZ1xuICAgICAgICAgICAgICAgLy8gaWYodGhpcy5yZW1haW5pbmcgPj0gMCkgTG9zdCBnYW1lXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gXCJIaXRcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlzVGlsZUVtcHR5KFt4LHldKXtcbiAgICAgICAgbGV0IGdyaWRDb2RlID0gdGhpcy5ncmlkW3hdW3ldXG4gICAgICAgIGlmKGdyaWRDb2RlLnN0YXR1cyA9PT0gXCJlbXB0eVwiKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBhcmVBbGxTaGlwc1N1bmsoKXtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1NoaXBzID0gdGhpcy5yZW1haW5pbmdcbiAgICAgICAgaWYocmVtYWluaW5nU2hpcHMgPj0gMSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWVcbiAgICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vY29tcHV0ZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hc3RlcntcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSlcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpXG5cbiAgICAgICAgLy9XaG8gaGFzIGFjdGl2ZSB0dXJuIFBsYXllciBpcyAxIENvbXAgaXMgMlxuICAgICAgICB0aGlzLmFjdGl2ZSA9IDFcblxuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVCb2FyZHMoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdGlhbGl6ZUdhbWVCb2FyZCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLmdhbWVCb2FyZClcbiAgICAgICAgdGhpcy5jb21wdXRlci5pbml0aWFsaXplR2FtZUJvYXJkKClcbiAgICB9XG5cbiAgICBsaW5rUGxheWVycygpe1xuICAgICAgICB0aGlzLnBsYXllci5vcHBvbmVudCA9IHRoaXMuY29tcHV0ZXJcbiAgICAgICAgdGhpcy5jb21wdXRlci5vcHBvbmVudCA9IHRoaXMucGxheWVyXG4gICAgfVxufSIsIlxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG51bGxcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG51bGxcbiAgICB9XG5cbiAgICBpbml0aWFsaXplR2FtZUJvYXJkKCl7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlRmxlZXQoKXtcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwiY2FycmllclwiLCA1KVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcImRlc3Ryb3llciBcIiwgMylcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwic3VibWFyaW5lXCIsIDMpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcInBhdHJvbC1ib2F0XCIsIDIpXG5cbiAgICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCBzaXplKXtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cyArPTFcbiAgICB9XG5cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYodGhpcy5oaXRzID49IHRoaXMuc2l6ZSkgcmV0dXJuIHRydWVcblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBzaW5rU2hpcCgpe1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lTWFzdGVyIGZyb20gXCIuL21vZHVsZXMvZ2FtZW1hc3RlclwiXG5cblxuXG5cblxuXG5cbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3R2FtZUJ1dHRvbicpXG5cbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWVcbiAgICBjb25zdCBuZXdHYW1lID0gbmV3IEdhbWVNYXN0ZXIobmFtZSlcbiAgICBjb25zb2xlLmxvZyhuZXdHYW1lKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=