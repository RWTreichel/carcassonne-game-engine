var _ = require('underscore');
var Grid = require('./Grid.js');
var Feature = require('./Feature.js');
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
    // console.log("No tile slot at (" + lookupX + "," + lookupY + ")!");
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

  // Find all neighbors that (1) exist, (2) match this tile slot's type,
  // and (3) already belong to a feature.
  var candidates = _.filter(this.identifyNeighbors(), function(neighbor) {
    return neighbor && (this.featureCode === neighbor.featureCode) && neighbor.feature;
  }, this);

  // If there are no valid neighbors to try and connect with,
  // promote self into a new feature and return.
  if (candidates.length === 0) {
    this.feature = new Feature(this.featureCode);
    this.feature.adopt(this);
    console.log("I'm a new feature!", this.gridX, this.gridY);
    return;
  }

  _.each(candidates, function(neighbor) {
    if (!this.feature) {
      // If this tile slot does not belong to a feature yet, 
      // connect it to the neighbor's feature.
      console.log("I'm being adopted! Yay.");
      neighbor.feature.adopt(this);

    } else if (this.feature !== neighbor.feature) {
      console.log("We're merging here!");
      // If this tile slot and the neighbor belong to different
      // features already, determine which feature is smaller
      //  and merge it into the larger feature.
      if (this.feature.size() >= neighbor.feature.size()) {
        // I am bigger. I eat the neighbor's feature.
        neighbor.feature.mergeInto(this.feature);
      } else if (this.feature.size() < neighbor.feature.size()) {
        // I am smaller. The neighbor eats my feature.
        this.feature.mergeInto(neighbor.feature);
      }

    }
    //console.log(neighbor.feature);
  }, this);
};
TileSlot.prototype.printGrid = function() {
  // Sample function using grid.reduce
  var print = grid.reduce(function(memo, cell, index) {
    return memo + "(" + cell.gridX + "," + cell.gridY + ") "; 
  }, '');

  console.log(print);
}

module.exports = TileSlot;
