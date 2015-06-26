// Represents a feature object on the grid, composed of tiles
// and (more accurately speaking) tile slots.
function Feature (featureCode) {
  this.featureCode = featureCode;
  this.tiles = []; // A list of tiles that this feature spans.
  this.tileSlots = []; // A list of the tile slot objects that make up this feature.
  this.meeples = []; // A list of meeples belonging to this feature.
}

Feature.prototype.size = function() {
  return this.tileSlots.length;
};
Feature.prototype.claimed = function() {
  // If length is 0, evaluates to false - no meeples have claimed this feature yet.
  // Evaluates to true otherwise (There is already at least one meeple on this feature).
  return !!this.meeples.length; 
};
Feature.prototype.adopt = function(tileSlot) {
  // TEMP: Validate tileSlot's feature type, just in case...?
  if (tileSlot.featureCode !== this.featureCode) {
    console.log("Trying to add a tile slot of the wrong type!", tileSlot.featureCode, this.featureCode);
    return;
  }

  // If tile slot has not already been adopted...
  if (this.tileSlots.indexOf( tileSlot ) === -1) {
    // Set a pointer from tile slot back to this feature.
    tileSlot.feature = this;

    // Add a pointer from this feature back to tile slot.
    this.tileSlots.push(tileSlot);

    // If the adopted tile slot belongs to a tile not 
    // spanned by this feature, push that tile to the 
    // list of tiles that this feature spans.
    if (this.tiles.indexOf( this.tileSlot.tile ) === -1) {
      this.tiles.push(this.tileSlot.tile);
    }
  }

};
Feature.prototype.mergeInto = function(feature) {

};

module.exports = Feature;
