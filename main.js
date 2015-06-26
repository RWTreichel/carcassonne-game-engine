var Tile = require('./Tile.js');
var TileSlot = require('./TileSlot.js');

// "Test Suite"
// NOTE: Assuming 3x3 feature tiles...
var tileA = new Tile( 'a' );
// console.log( tileA ); // Uninitialized Tile object of type 'A'

tileA.placeTile(0, 0);
// console.log( tileA.features ); // Matrix of TileSlot objects
// console.log( tileA.getNeighbor(0,0) ); // tileA

var tileD = new Tile('d');
tileD.placeTile(0, 1);
// console.log( tileA.getNeighbor(0,1) ); // tileD
// console.log( tileD.getNeighbor(0,-1) ); // tileA

var tileASlots = tileA.features;
// console.log(tileASlots[0][0].getNeighbor(0,0)); // tileA.features[0][0]
// console.log(tileASlots[0][0].getNeighbor(2,2)); // tileA.features[2][2]
// console.log(tileASlots[0][0].getNeighbor(0,3)); // tileD.features[0][0]
var tileDSlots = tileD.features;
// console.log(tileDSlots[1][1].getNeighbor(0,-2)); // tileA.features[1][2]
// console.log(tileDSlots[2][2].getNeighbor(0,3)); // "No tile slot at (2,8)!" / undefined

// console.log(tileA.identifyNeighbors()); // {n: undefined, e: tileD, s: undefined, w: undefined}
// console.log(tileD.identifyNeighbors()); // {n: undefined, e: undefined, s: undefined, w: tileA}

// console.log(tileASlots[1][1].identifyNeighbors()); // {n: tileASlots[0][1], e: [1][2], s: [2][1], w: [1][0]}
// console.log(tileDSlots[1][0].identifyNeighbors()); // {n: tileDSlots[0][0]}, e: [1][1], s: [2][0], w: tileASlots[1][2]

// tileA.printGrid(); // (0,0) (0,1) 
// tileASlots[0][0].printGrid(); // (0,0) (0,1) (0,2) (0,3) (0,4) (0,5) (1,0) (1,1) (1,2) (1,3) (1,4) (1,5) (2,0) (2,1) (2,2) (2,3) (2,4) (2,5) 

tileASlots[0][0].connect();