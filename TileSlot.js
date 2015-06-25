var Grid = require('./Grid.js');
var grid = new Grid();

function TileSlot (featureCode, x, y, tile) {
  this.featureCode = featureCode;
  this.x = x;
  this.y = y;
  this.tile = tile;
  this.gridX = ( this.tile.x * this.tile.size ) + x;
  this.gridY = ( this.tile.y * this.tile.size ) + y;
  this.feature = null;
  grid.setTile( this, this.gridX, this.gridY );
}
TileSlot.prototype.getNeighbor = function(x, y) {
  // Calculate the exact coordinates of the neighbor by adjusting
  // this tile slot's coordinates by the x and y displacement arguments.
  var lookupX = this.gridX + x;
  var lookupY = this.gridY + y;
  var neighbor = grid.getTile(lookupX, lookupY);

  // If there is no tile slot at (lookupX, lookupY) on the tile slot grid, return undefined.
  if ( !neighbor ) {
    console.log("No tile slot at (" + lookupX + "," + lookupY + ")!");
    return;
  }

  // Otherwise, return the tile slot object at that location.
  return neighbor;
};
TileSlot.prototype.identifyNeighbors = function() {
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
TileSlot.prototype.connect = function() {
  // Intelligently connect to a nearby feature, initiating feature merges
  // if necessary. If there are no features nearby to connect to, instantiate
  // and register a new feature with the FeatureManager.
};

module.exports = TileSlot;
