var _ = require("underscore");

var specs = {
  a: {
    id: 'a',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'field',
      s: 'road',
      w: 'field'
    },
    features: [
      ['F','F','F'],
      ['F','M','F'],
      ['F','R','F']
    ],
    pennant: false
  },
  d: {
    id: 'd',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'road',
      s: 'field',
      w: 'road'
    },
    features: [
      ['F','C','F'],
      ['R','R','R'],
      ['F','F','F']
    ],
    pennant: false
  }
};

// Grid
function Grid () {
  this.tileGrid = {};
  this.slotGrid = {};
}
Grid.prototype.setTile = function(tile) {
  // If the row already exists on the grid...
  if ( this.tileGrid[ tile.x ] ) {
    // ...place the tile at the specified column.
    this.tileGrid[ tile.x ][ tile.y ] = tile;
  } else {
    // If the row does not exist on the grid yet,
    // create a new row with the tile placed at the specified column.
    this.tileGrid[ tile.x ] = {};
    this.tileGrid[ tile.x ][ tile.y ] = tile;
  }
};
Grid.prototype.setTileSlot = function(tileSlot) {
  // If the row already exists on the grid...
  if ( this.slotGrid[ tileSlot.gridX ] ) {
    // ...place the tile slot at the specified column.
    this.slotGrid[ tileSlot.gridX ][ tileSlot.gridY ] = tileSlot;
  } else {
    // If the row does not exist on the grid yet,
    // create a new row with the tile slot placed at the specified column.
    this.slotGrid[ tileSlot.gridX ] = {};
    this.slotGrid[ tileSlot.gridX ][ tileSlot.gridY ] = tileSlot;
  }
};

var grid = new Grid();

// Tile
function Tile (id) {
  this.x = null;
  this.y = null;
  _.extend( this, specs[id] );
  this.size = this.features.length; // Assumes a square feature matrix
}
Tile.prototype.init = function() {
  this.convertFeatureCodes();
  // grid.setTile( this ); Maybe...?
};
Tile.prototype.convertFeatureCodes = function() {
  // Cache the number of rows in the features matrix
  var numRows = this.features.length;
  var numCols;
  var featureRegEx = /^[FMRC]/;

  for (var i = 0; i < numRows; i++) {
    // Cache the number of columns for the current row
    numCols = this.features[i].length;

    for (var j = 0; j < numCols; j++) {
      // If a feature code string has not been converted yet...
      if (typeof this.features[i][j] === 'string' &&
          this.features[i][j].search( featureRegEx ) !== -1) {
        // ...convert the feature code to a corresponding TileSlot object
        this.features[i][j] = new TileSlot( this.features[i][j], i, j , this);
      }
    }
  }
};
Tile.prototype.identifyNeighbors = function() {
  return {
    // One row above, same column
    n: this.getNeighbor(this.x-1, this.y),
    // Same row, one column to the right
    e: this.getNeighbor(this.x, this.y+1),
    // One row below, same column
    s: this.getNeighbor(this.x+1, this.y),
    // Same row, one column to the left
    w: this.getNeighbor(this.x, this.y-1)
  };
}
Tile.prototype.getNeighbor = function(x, y) {
  // Calculate the exact coordinates of the neighbor by adjusting
  // this tile's coordinates by the x and y displacement arguments.
  var lookupX = this.x + x;
  var lookupY = this.y + y;

  // If there is no tile at (lookupX, lookupY) on the tile grid, return undefined.
  if ( !grid.tileGrid[ lookupX ] || !grid.tileGrid[ lookupX ][ lookupY ] ) {
    console.log("No tile at (" + lookupX + "," + lookupY + ")!");
    return;
  }

  // Otherwise, return the tile object at that location.
  return grid.tileGrid[ lookupX ][ lookupY ];
};
Tile.prototype.placeTile = function(x, y) {
  this.x = x;
  this.y = y;
  grid.setTile(this);
}

// TileSlot
function TileSlot (featureCode, x, y, tile) {
  this.featureCode = featureCode;
  this.x = x;
  this.y = y;
  this.tile = tile;

  (function setGridCoordinates (tileSlot) {
    tileSlot.gridX = ( tileSlot.tile.x * tileSlot.tile.size ) + tileSlot.x;
    tileSlot.gridY = ( tileSlot.tile.y * tileSlot.tile.size ) + tileSlot.y;
  })(this);

  this.feature = null;
}
TileSlot.prototype.identifyNeighbors = function() {
  return {
    // One row above, same column
    n: this.getNeighbor(this.x-1, this.y),
    // Same row, one column to the right
    e: this.getNeighbor(this.x, this.y+1),
    // One row below, same column
    s: this.getNeighbor(this.x+1, this.y),
    // Same row, one column to the left
    w: this.getNeighbor(this.x, this.y-1)
  };
};
TileSlot.prototype.getNeighbor = function(x, y) {
  // Calculate the exact coordinates of the neighbor by adjusting
  // this tile slot's coordinates by the x and y displacement arguments.
  var lookupX = this.gridX + x;
  var lookupY = this.gridY + y;

  // If there is no tile slot at (lookupX, lookupY) on the tile slot grid, return undefined.
  if ( !grid.slotGrid[ lookupX ] || !grid.slotGrid[ lookupX ][ lookupY ] ) {
    console.log("No tile slot at (" + lookupX + "," + lookupY + ")!");
    return;
  }

  // Otherwise, return the tile slot object at that location.
  return grid.slotGrid[ lookupX ][ lookupY ];
};
TileSlot.prototype.connect = function() {
  // Intelligently connect to a nearby feature, initiating feature merges
  // if necessary. If there are no features nearby to connect to, instantiate
  // and register a new feature with the FeatureManager.
};

function Feature () {
  // Represents a feature object on the grid, composed of tiles
  // and (more accurately speaking) tile slots.
}

var tileA = new Tile( 'a' );
//console.log( tileA ); // Uninitialized Tile object of type 'A'
tileA.init();
tileA.placeTile(0, 0);
//console.log(tileA.features); // Matrix of TileSlot objects
//console.log( tileA.getNeighbor(0,0) ); // tileA
var tileD = new Tile('d');
tileD.init();
tileD.placeTile(0, 1);
console.log( tileA.getNeighbor(0,1) ); // tileD
console.log( tileD.getNeighbor(0,-1) ); // tileA
