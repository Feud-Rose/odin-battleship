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
        this.remaining += 1
        console.log(this.remaining)
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
            this.grid[x][y] = {status: this.ships[shipIndex].status, attacked: false, ship:this.ships[shipIndex]}
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
                if(this.remaining <= 0) console.log("lost")
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

    ///Place ships in predetermined spots
    defaultPlaceShip(){
       this.placeShip(0, [5,7], "down")
       this.placeShip(1, [4,3], "up")
       this.placeShip(2, [1,7], "down")
       this.placeShip(3, [4,4], "left")
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
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ "./src/modules/gameboard.js");








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
    
  console.log(newGame)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZDOztBQUVGOzs7Ozs7QUFNM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSx3QkFBd0IsMkRBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvZ2FtZW1hc3Rlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL3NoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL21vZHVsZXMvcGxheWVyc1wiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllcntcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNvbXB1dGVyXCJcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG51bGxcbiAgICAgICAgdGhpcy5hdHRlbXB0ZWRBdHRhY2tzID0gbmV3IFNldChbXSlcbiAgICB9XG4gICAgXG4gICAgcmFuZG9tTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpO1xuICAgICAgfVxuXG4gICAgLy9DYWxsIHdpdGggKHRoaXMucmFuZG9tTnVtYmVyLHRoaXMucmFuZG9tTnVtYmVyKVxuICAgIHBpY2tUaWxlKGNhbGxiYWNrWCxjYWxsYmFja1kpe1xuICAgICAgICByZXR1cm4gW2NhbGxiYWNrWCgpLGNhbGxiYWNrWSgpXVxuICAgIH1cblxuICAgIHZhbGlkYXRlVGlsZShhcnIpe1xuXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuYXR0ZW1wdGVkQXR0YWNrcy5oYXMoYCR7YXJyWzBdfV8ke2FyclsxXX1gKVxuICAgICAgICBpZighY2hlY2spIHJldHVybiB0cnVlICAvLy9pZiBcImF0dGFja2VkOiBmYWxzZVwiIHJldHVybiBhcyBWYWxpZFxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGdldFJhbmRvbVRpbGUoKXtcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLnBpY2tUaWxlKHRoaXMucmFuZG9tTnVtYmVyLHRoaXMucmFuZG9tTnVtYmVyKVxuICAgICAgICBsZXQgdmFsaWQgPSB0aGlzLnZhbGlkYXRlVGlsZShyYW5kb21UaWxlKVxuICAgICAgICBpZih2YWxpZCkgcmV0dXJuIHJhbmRvbVRpbGVcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5nZXRSYW5kb21UaWxlKClcblxuICAgIH1cblxuXG4gICAgdGFrZVR1cm4oKXtcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLmdldFJhbmRvbVRpbGUoKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMub3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tVGlsZSlcbiAgICAgICAgdGhpcy5hdHRlbXB0ZWRBdHRhY2tzLmFkZChgJHtyYW5kb21UaWxlWzBdfV8ke3JhbmRvbVRpbGVbMV19YCk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXG4gICAgfVxuXG5cbn1cblxuICAgXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwc1wiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IobnVtKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueHkgPSBudW1cbiAgICAgICAgdGhpcy5yZW1haW5pbmcgPSAwXG4gICAgICAgIHRoaXMuZ3JpZCA9IFtdXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy54eSArIDI7IGkrKyl7IFxuXG4gICAgICAgICAgICBsZXQgbGFzdCA9IHRoaXMueHkgKyAxXG5cbiAgICAgICAgICAgIGlmKGkgPT09IDAgfHwgKGkgPT09IGxhc3QpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSh0aGlzLnh5KzIpLmZpbGwoe3N0YXR1czogXCJudWxsXCJ9KVxuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2gocm93KVxuICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSh0aGlzLnh5KzEpLmZpbGwoe3N0YXR1czogXCJlbXB0eVwiLCBhdHRhY2tlZDogZmFsc2V9LDEpXG4gICAgICAgICAgICByb3dbMF0gPSB7c3RhdHVzOiBcIm51bGxcIn1cbiAgICAgICAgICAgIHJvdy5wdXNoKHtzdGF0dXM6IFwibnVsbFwifSlcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHJvdyl9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjcmVhdGVTaGlwKG1vZGVsLCBzaXplKXtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBuZXcgU2hpcChtb2RlbCwgc2l6ZSlcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApXG4gICAgICAgIHRoaXMucmVtYWluaW5nICs9IDFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZW1haW5pbmcpXG4gICAgfVxuXG4gICAgXG4gICAgcGxhY2VTaGlwKHNoaXBJbmRleCwgbG9jYXRpb24sIGRpcmVjdGlvbil7XG4gICAgICAgIGxldCBzaGlwSW5mbyA9IFt0aGlzLnNoaXBzW3NoaXBJbmRleF1dXG4gICAgICAgIGlmKCFzaGlwSW5mbykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJObyBzaGlwIGF0IHRoYXQgaW5kZXhcIik7XG4gICAgICAgIGxldCBzaXplID0gc2hpcEluZm9bMF0uc2l6ZVxuICAgICAgICBcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSBcInVwXCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNYKGxvY2F0aW9uLCsxLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNYKGxvY2F0aW9uLC0xLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNZKGxvY2F0aW9uLC0xLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRoaXMuY3JlYXRlVGlsZUFycmF5U3RhdGljWShsb2NhdGlvbiwrMSxzaXplKVxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcylcblxuICAgICAgICAgICAgaWYodmFsaWRhdGUpdGhpcy5wbGFjZVNoaXBBdFRpbGVzKHNoaXBJbmRleCxjb29yZGluYXRlcylcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVUaWxlQXJyYXlTdGF0aWNYKFt4LCB5XSwgZGlyZWN0aW9uLCBzaXplKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzaXplIC0gMTsgKytpKXtcbiAgICAgICAgeSArPSBkaXJlY3Rpb25cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG4gICAgY3JlYXRlVGlsZUFycmF5U3RhdGljWShbeCx5XSwgZGlyZWN0aW9uLCBzaXplKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzaXplIC0gMTsgKytpKXtcbiAgICAgICAgeCArPSBkaXJlY3Rpb25cbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVBsYWNlbWVudChjb29yZGluYXRlcyl7IFxuICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbaV1bMF1cbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1tpXVsxXVxuICAgICAgICBpZih4ID49IHRoaXMueHkgfHwgeSA+PSB0aGlzLnh5IHx8IHggPD0gMCB8fCB5IDw9IDApIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmKHguc3RhdHVzID09PSBudWxsIHx8IHkuc3RhdHVzID09PSBudWxsKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LHRpbGVzKXtcbiAgICAgICAvKiAgY29uc29sZS5sb2coc2hpcEluZGV4KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzW3NoaXBJbmRleF0pICovXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgeCA9IHRpbGVzW2ldWzBdXG4gICAgICAgICAgICBsZXQgeSA9ICB0aWxlc1tpXVsxXVxuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0ge3N0YXR1czogdGhpcy5zaGlwc1tzaGlwSW5kZXhdLnN0YXR1cywgYXR0YWNrZWQ6IGZhbHNlLCBzaGlwOnRoaXMuc2hpcHNbc2hpcEluZGV4XX1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgcmVjZWl2ZUF0dGFjayhbeCx5XSl7XG4gICAgICAgIGxldCBtaXNzZWQgPSB0aGlzLmlzVGlsZUVtcHR5KFt4LHldKVxuICAgICAgICBpZihtaXNzZWQpe1xuICAgICAgICAgICAvLyBtYXJrIGFzIG1pc3NcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBcIk1pc3NlZFwiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYoIW1pc3NlZCl7IFxuICAgICAgICAgICAgLy8vbWlnaHQgbmVlZCByZWRvXG4gICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHRoaXMuZ3JpZFt4XVt5XS5zaGlwXG4gICAgICAgICAgICBoaXRTaGlwLmhpdCgpXG4gICAgICAgICAgICBsZXQgaXNTaGlwU3VuayA9IGhpdFNoaXAuaXNTdW5rXG4gICAgICAgICAgICBpZihpc1NoaXBTdW5rKXtcbiAgICAgICAgICAgICAgICBoaXRTaGlwLnNpbmtTaGlwXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gdGhpcy5yZW1haW5pbmdcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJlbWFpbmluZyA8PSAwKSBjb25zb2xlLmxvZyhcImxvc3RcIilcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaXNUaWxlRW1wdHkoW3gseV0pe1xuICAgICAgICBsZXQgZ3JpZENvZGUgPSB0aGlzLmdyaWRbeF1beV1cbiAgICAgICAgaWYoZ3JpZENvZGUuc3RhdHVzID09PSBcImVtcHR5XCIpIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGFyZUFsbFNoaXBzU3Vuaygpe1xuICAgICAgICBsZXQgcmVtYWluaW5nU2hpcHMgPSB0aGlzLnJlbWFpbmluZ1xuICAgICAgICBpZihyZW1haW5pbmdTaGlwcyA+PSAxKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZVxuICAgICB9XG5cbiAgICAvLy9QbGFjZSBzaGlwcyBpbiBwcmVkZXRlcm1pbmVkIHNwb3RzXG4gICAgZGVmYXVsdFBsYWNlU2hpcCgpe1xuICAgICAgIHRoaXMucGxhY2VTaGlwKDAsIFs1LDddLCBcImRvd25cIilcbiAgICAgICB0aGlzLnBsYWNlU2hpcCgxLCBbNCwzXSwgXCJ1cFwiKVxuICAgICAgIHRoaXMucGxhY2VTaGlwKDIsIFsxLDddLCBcImRvd25cIilcbiAgICAgICB0aGlzLnBsYWNlU2hpcCgzLCBbNCw0XSwgXCJsZWZ0XCIpXG4gICAgICAgdGhpcy5wbGFjZVNoaXAoNCwgWzIsMl0sIFwibGVmdFwiKVxuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuL2NvbXB1dGVyXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllcnNcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYXN0ZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUpXG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKVxuXG4gICAgICAgIC8vV2hvIGhhcyBhY3RpdmUgdHVybiBQbGF5ZXIgaXMgMSBDb21wIGlzIDJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAxXG5cbiAgICB9XG5cbiAgICBjcmVhdGVHYW1lQm9hcmRzKCl7XG4gICAgICAgIHRoaXMucGxheWVyLmluaXRpYWxpemVHYW1lQm9hcmQoKVxuICAgICAgICB0aGlzLmNvbXB1dGVyLmluaXRpYWxpemVHYW1lQm9hcmQoKVxuICAgIH1cblxuICAgIGxpbmtQbGF5ZXJzKCl7XG4gICAgICAgIHRoaXMucGxheWVyLm9wcG9uZW50ID0gdGhpcy5jb21wdXRlclxuICAgICAgICB0aGlzLmNvbXB1dGVyLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXJcbiAgICB9XG59IiwiXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbnVsbFxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbnVsbFxuICAgIH1cblxuICAgIGluaXRpYWxpemVHYW1lQm9hcmQoKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjcmVhdGVGbGVldCgpe1xuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJjYXJyaWVyXCIsIDUpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcImJhdHRsZXNoaXBcIiwgNClcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwiZGVzdHJveWVyIFwiLCAzKVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJzdWJtYXJpbmVcIiwgMylcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwicGF0cm9sLWJvYXRcIiwgMilcblxuICAgIH1cbiAgICBcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHNpemUpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG1vZGVsO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzICs9MVxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLmhpdHMgPj0gdGhpcy5zaXplKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHNpbmtTaGlwKCl7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVNYXN0ZXIgZnJvbSBcIi4vbW9kdWxlcy9nYW1lbWFzdGVyXCJcblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZFwiXG5cblxuXG5cblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdHYW1lQnV0dG9uJylcblxubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZVxuICAgIGxldCBzdGFydCA9IHN0YXJ0TmV3R2FtZShuYW1lKVxufSlcblxuXG5mdW5jdGlvbiBzdGFydE5ld0dhbWUobmFtZSl7XG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lTWFzdGVyKG5hbWUpXG4gICAgXG4gICAgXG4gICAgbmV3R2FtZS5jcmVhdGVHYW1lQm9hcmRzKClcbiAgICBuZXdHYW1lLmxpbmtQbGF5ZXJzKClcblxuICAgIC8vUnVuIEZsZWV0IENyZWF0aW9uXG4gICAgbmV3R2FtZS5wbGF5ZXIuY3JlYXRlRmxlZXQoKVxuICAgIG5ld0dhbWUuY29tcHV0ZXIuY3JlYXRlRmxlZXQoKVxuXG4gICAgLy8vcmVtb3ZlIGRlZmF1bHQgcGxhY2VtZW50IGxhdGVyXG4gICAgbmV3R2FtZS5wbGF5ZXIuZ2FtZUJvYXJkLmRlZmF1bHRQbGFjZVNoaXAoKVxuICAgIG5ld0dhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLmRlZmF1bHRQbGFjZVNoaXAoKVxuICAgIFxuICAgIFxuICAgIFxuICAgIC8vLy8vZnVuY3Rpb24gdG8gY3JlYXRlIGJvYXJkIFVJXG4gICAgXG4gIGNvbnNvbGUubG9nKG5ld0dhbWUpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9