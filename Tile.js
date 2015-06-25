var _ = require("underscore");
var Grid = require('./Grid.js');
var TileSlot = require('./TileSlot.js');
var grid = new Grid();
var specs = require('./tileSpecs.js');

function Tile (id) {
  _.extend( this, specs[id] ); // Make this a tile of type 'id'
  this.size = this.features.length; // Assumes a square feature matrix
}
Tile.prototype.convertFeatureCodes = function() {
  // Cache the dimensions of the tile's feature matrix.
  var size = this.size;
  // Only field, monastery, road, and city feature codes are valid.
  var featureRegEx = /^[FMRC]/;

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {

      // If a feature code string has not been converted yet...
      if ( typeof this.features[i][j] === 'string' &&
           this.features[i][j].search( featureRegEx ) !== -1 ) {

        // ...convert the feature code to a corresponding TileSlot object
        this.features[i][j] = new TileSlot( this.features[i][j], i, j , this );
      }
    }

  }
};
Tile.prototype.placeTile = function(x, y) {
  // Set the (x,y) coordinates of the tile on its grid.
  this.x = x;
  this.y = y;

  // TEST: Only convert feature codes after we know x and y are set,
  // since TileSlot instantiation depends on tile.x and tile.y.
  this.convertFeatureCodes();

  // Place the tile on the grid at (x,y).
  grid.setTile(this, x, y);
};
// Does NOT check if tile's x and y coordinates have been set!
Tile.prototype.getNeighbor = function(x, y) {
  // Calculate the exact coordinates of the neighbor by adjusting
  // this tile's coordinates by the x and y displacement arguments.
  var lookupX = this.x + x;
  var lookupY = this.y + y;
  var neighbor = grid.getTile(lookupX, lookupY);
  // If there is no tile at (lookupX, lookupY) on the tile grid, return undefined.
  if ( !neighbor ) {
    console.log("No tile at (" + lookupX + "," + lookupY + ")!");
    return;
  }

  // Otherwise, return the tile object at that location.
  return neighbor;
};
Tile.prototype.identifyNeighbors = function() {
  return {
    // One row above, same column
    n: this.getNeighbor(-1, 0),
    // Same row, one column to the right
    e: this.getNeighbor(0, 1),
    // One row below, same column
    s: this.getNeighbor(1, 0),
    // Same row, one column to the left
    w: this.getNeighbor(0, -1)
  };
};

module.exports = Tile;
