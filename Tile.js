var _ = require("underscore");

function Tile (id) {
  this.x = null;
  this.y = null;
  _.extend( this, specs[id] );
}

Tile.prototype.init = function() {
  // Cache the number of rows in the features matrix
  var numRows = this.features.length;
  var numCols;
  var featureRegEx = /^[FMRC]/;

  for (var i = 0; i < numRows; i++) {
    // Cache the number of columns for the current row
    numCols = this.features[i].length;

    for (var j = 0; j < numCols; j++) {
      if (typeof this.features[i][j] === 'string' &&
          this.features[i][j].search( featureRegEx ) !== -1) {
        // Convert the feature code to a corresponding TileSlot object
        this.features[i][j] = new TileSlot( this.features[i][j] );
      }
    }
  }
};

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

function TileSlot (featureCode) {
  this.featureCode = featureCode;
  this.feature = null;
}

function Feature () {

}

var tileA = new Tile( 'a' );
console.log( tileA );
tileA.init();
console.log(tileA.features);