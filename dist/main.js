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
    let start = startNewGame(name)
})


function startNewGame(name){
    const newGame = new _modules_gamemaster__WEBPACK_IMPORTED_MODULE_0__["default"](name)
    
    newGame.createGameBoards()
    newGame.linkPlayers()
    
    /////function to create board UI
    
    console.log(newGame)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qzs7Ozs7Ozs7QUFRN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSx3QkFBd0IsMkRBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYi8uL3NyYy9tb2R1bGVzL2dhbWVtYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViLy4vc3JjL21vZHVsZXMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvbW9kdWxlcy9zaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2R1bGVzL3BsYXllcnNcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXJ7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb21wdXRlclwiXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBudWxsXG4gICAgICAgIHRoaXMuYXR0ZW1wdGVkQXR0YWNrcyA9IG5ldyBTZXQoW10pXG4gICAgfVxuICAgIFxuICAgIHJhbmRvbU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcbiAgICAgIH1cblxuICAgIC8vQ2FsbCB3aXRoICh0aGlzLnJhbmRvbU51bWJlcix0aGlzLnJhbmRvbU51bWJlcilcbiAgICBwaWNrVGlsZShjYWxsYmFja1gsY2FsbGJhY2tZKXtcbiAgICAgICAgcmV0dXJuIFtjYWxsYmFja1goKSxjYWxsYmFja1koKV1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVRpbGUoYXJyKXtcblxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmF0dGVtcHRlZEF0dGFja3MuaGFzKGAke2FyclswXX1fJHthcnJbMV19YClcbiAgICAgICAgaWYoIWNoZWNrKSByZXR1cm4gdHJ1ZSAgLy8vaWYgXCJhdHRhY2tlZDogZmFsc2VcIiByZXR1cm4gYXMgVmFsaWRcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBnZXRSYW5kb21UaWxlKCl7XG4gICAgICAgIGxldCByYW5kb21UaWxlID0gdGhpcy5waWNrVGlsZSh0aGlzLnJhbmRvbU51bWJlcix0aGlzLnJhbmRvbU51bWJlcilcbiAgICAgICAgbGV0IHZhbGlkID0gdGhpcy52YWxpZGF0ZVRpbGUocmFuZG9tVGlsZSlcbiAgICAgICAgaWYodmFsaWQpIHJldHVybiByYW5kb21UaWxlXG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tVGlsZSgpXG5cbiAgICB9XG5cblxuICAgIHRha2VUdXJuKCl7XG4gICAgICBcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLmdldFJhbmRvbVRpbGUoKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9wcG9uZW50KVxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMub3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tVGlsZSlcbiAgICAgICAgdGhpcy5hdHRlbXB0ZWRBdHRhY2tzLmFkZChgJHtyYW5kb21UaWxlWzBdfV8ke3JhbmRvbVRpbGVbMV19YCk7XG4gICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgIFxuICAgICAgICBcblxuXG5cbiAgICB9XG5cblxufVxuXG4gICBcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3RvcihudW0pe1xuICAgICAgICBcbiAgICAgICAgdGhpcy54eSA9IG51bVxuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IDBcbiAgICAgICAgdGhpcy5ncmlkID0gW11cbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnh5ICsgMjsgaSsrKXsgXG5cbiAgICAgICAgICAgIGxldCBsYXN0ID0gdGhpcy54eSArIDFcblxuICAgICAgICAgICAgaWYoaSA9PT0gMCB8fCAoaSA9PT0gbGFzdCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcm93ID0gbmV3IEFycmF5KHRoaXMueHkrMikuZmlsbCh7c3RhdHVzOiBcIm51bGxcIn0pXG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgcm93ID0gbmV3IEFycmF5KHRoaXMueHkrMSkuZmlsbCh7c3RhdHVzOiBcImVtcHR5XCIsIGF0dGFja2VkOiBmYWxzZX0sMSlcbiAgICAgICAgICAgIHJvd1swXSA9IHtzdGF0dXM6IFwibnVsbFwifVxuICAgICAgICAgICAgcm93LnB1c2goe3N0YXR1czogXCJudWxsXCJ9KVxuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2gocm93KX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZVNoaXAobW9kZWwsIHNpemUpe1xuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKG1vZGVsLCBzaXplKVxuICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcClcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgKz0gdGhpcy5yZW1haW5pbmdcbiAgICB9XG5cbiAgICBcbiAgICBwbGFjZVNoaXAoc2hpcEluZGV4LCBsb2NhdGlvbiwgZGlyZWN0aW9uKXtcbiAgICAgICAgbGV0IHNoaXBJbmZvID0gW3RoaXMuc2hpcHNbc2hpcEluZGV4XV1cbiAgICAgICAgaWYoIXNoaXBJbmZvKSByZXR1cm4gY29uc29sZS5lcnJvcihcIk5vIHNoaXAgYXQgdGhhdCBpbmRleFwiKTtcbiAgICAgICAgbGV0IHNpemUgPSBzaGlwSW5mb1swXS5zaXplXG4gICAgICAgIFxuICAgICAgICBpZihkaXJlY3Rpb24gPT09IFwidXBcIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1gobG9jYXRpb24sKzEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBcImRvd25cIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1gobG9jYXRpb24sLTEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNyZWF0ZVRpbGVBcnJheVN0YXRpY1kobG9jYXRpb24sLTEsc2l6ZSlcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIGlmKHZhbGlkYXRlKXRoaXMucGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jcmVhdGVUaWxlQXJyYXlTdGF0aWNZKGxvY2F0aW9uLCsxLHNpemUpXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICBpZih2YWxpZGF0ZSl0aGlzLnBsYWNlU2hpcEF0VGlsZXMoc2hpcEluZGV4LGNvb3JkaW5hdGVzKVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVRpbGVBcnJheVN0YXRpY1goW3gsIHldLCBkaXJlY3Rpb24sIHNpemUpe1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXVxuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LHldKVxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IHNpemUgLSAxOyArK2kpe1xuICAgICAgICB5ICs9IGRpcmVjdGlvblxuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LHldKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgIH1cbiAgICBjcmVhdGVUaWxlQXJyYXlTdGF0aWNZKFt4LHldLCBkaXJlY3Rpb24sIHNpemUpe1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXVxuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LHldKVxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IHNpemUgLSAxOyArK2kpe1xuICAgICAgICB4ICs9IGRpcmVjdGlvblxuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LHldKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgIH1cblxuICAgIHZhbGlkYXRlUGxhY2VtZW50KGNvb3JkaW5hdGVzKXsgXG4gICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1tpXVswXVxuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVzW2ldWzFdXG4gICAgICAgIGlmKHggPj0gdGhpcy54eSB8fCB5ID49IHRoaXMueHkgfHwgeCA8PSAwIHx8IHkgPD0gMCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYoeC5zdGF0dXMgPT09IG51bGwgfHwgeS5zdGF0dXMgPT09IG51bGwpIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwQXRUaWxlcyhzaGlwSW5kZXgsdGlsZXMpe1xuICAgICAgIC8qICBjb25zb2xlLmxvZyhzaGlwSW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNbc2hpcEluZGV4XSkgKi9cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCB4ID0gdGlsZXNbaV1bMF1cbiAgICAgICAgICAgIGxldCB5ID0gIHRpbGVzW2ldWzFdXG4gICAgICAgICAgICB0aGlzLmdyaWRbeF1beV0gPSB7c3RhdHVzOiB0aGlzLnNoaXBzW3NoaXBJbmRleF0uc3RhdHVzLCBhdHRhY2tlZDogXCJoYXNOb3RcIiwgc2hpcDp0aGlzLnNoaXBzW3NoaXBJbmRleF19XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIHJlY2VpdmVBdHRhY2soW3gseV0pe1xuICAgICAgICBsZXQgbWlzc2VkID0gdGhpcy5pc1RpbGVFbXB0eShbeCx5XSlcbiAgICAgICAgaWYobWlzc2VkKXtcbiAgICAgICAgICAgLy8gbWFyayBhcyBtaXNzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gXCJNaXNzZWRcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmKCFtaXNzZWQpeyBcbiAgICAgICAgICAgIC8vL21pZ2h0IG5lZWQgcmVkb1xuICAgICAgICAgICAgbGV0IGhpdFNoaXAgPSB0aGlzLmdyaWRbeF1beV0uc2hpcFxuICAgICAgICAgICAgaGl0U2hpcC5oaXQoKVxuICAgICAgICAgICAgbGV0IGlzU2hpcFN1bmsgPSBoaXRTaGlwLmlzU3Vua1xuICAgICAgICAgICAgaWYoaXNTaGlwU3Vuayl7XG4gICAgICAgICAgICAgICAgaGl0U2hpcC5zaW5rU2hpcFxuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluaW5nIC09IHRoaXMucmVtYWluaW5nXG4gICAgICAgICAgICAgICAvLyBpZih0aGlzLnJlbWFpbmluZyA+PSAwKSBMb3N0IGdhbWVcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaXNUaWxlRW1wdHkoW3gseV0pe1xuICAgICAgICBsZXQgZ3JpZENvZGUgPSB0aGlzLmdyaWRbeF1beV1cbiAgICAgICAgaWYoZ3JpZENvZGUuc3RhdHVzID09PSBcImVtcHR5XCIpIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGFyZUFsbFNoaXBzU3Vuaygpe1xuICAgICAgICBsZXQgcmVtYWluaW5nU2hpcHMgPSB0aGlzLnJlbWFpbmluZ1xuICAgICAgICBpZihyZW1haW5pbmdTaGlwcyA+PSAxKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZVxuICAgICB9XG5cbn1cbiIsImltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9jb21wdXRlclwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFzdGVye1xuXG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihuYW1lKVxuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IENvbXB1dGVyKClcblxuICAgICAgICAvL1dobyBoYXMgYWN0aXZlIHR1cm4gUGxheWVyIGlzIDEgQ29tcCBpcyAyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gMVxuXG4gICAgfVxuXG4gICAgY3JlYXRlR2FtZUJvYXJkcygpe1xuICAgICAgICB0aGlzLnBsYXllci5pbml0aWFsaXplR2FtZUJvYXJkKClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIuZ2FtZUJvYXJkKVxuICAgICAgICB0aGlzLmNvbXB1dGVyLmluaXRpYWxpemVHYW1lQm9hcmQoKVxuICAgIH1cblxuICAgIGxpbmtQbGF5ZXJzKCl7XG4gICAgICAgIHRoaXMucGxheWVyLm9wcG9uZW50ID0gdGhpcy5jb21wdXRlclxuICAgICAgICB0aGlzLmNvbXB1dGVyLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXJcbiAgICB9XG59IiwiXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbnVsbFxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbnVsbFxuICAgIH1cblxuICAgIGluaXRpYWxpemVHYW1lQm9hcmQoKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjcmVhdGVGbGVldCgpe1xuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJjYXJyaWVyXCIsIDUpXG4gICAgICAgdGhpcy5nYW1lQm9hcmQuY3JlYXRlU2hpcChcImJhdHRsZXNoaXBcIiwgNClcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwiZGVzdHJveWVyIFwiLCAzKVxuICAgICAgIHRoaXMuZ2FtZUJvYXJkLmNyZWF0ZVNoaXAoXCJzdWJtYXJpbmVcIiwgMylcbiAgICAgICB0aGlzLmdhbWVCb2FyZC5jcmVhdGVTaGlwKFwicGF0cm9sLWJvYXRcIiwgMilcblxuICAgIH1cbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHNpemUpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG1vZGVsO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzICs9MVxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLmhpdHMgPj0gdGhpcy5zaXplKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHNpbmtTaGlwKCl7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVNYXN0ZXIgZnJvbSBcIi4vbW9kdWxlcy9nYW1lbWFzdGVyXCJcblxuXG5cblxuXG5cblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdHYW1lQnV0dG9uJylcblxubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZVxuICAgIGxldCBzdGFydCA9IHN0YXJ0TmV3R2FtZShuYW1lKVxufSlcblxuXG5mdW5jdGlvbiBzdGFydE5ld0dhbWUobmFtZSl7XG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lTWFzdGVyKG5hbWUpXG4gICAgXG4gICAgbmV3R2FtZS5jcmVhdGVHYW1lQm9hcmRzKClcbiAgICBuZXdHYW1lLmxpbmtQbGF5ZXJzKClcbiAgICBcbiAgICAvLy8vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBib2FyZCBVSVxuICAgIFxuICAgIGNvbnNvbGUubG9nKG5ld0dhbWUpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9