function Grid () {
  this._grid = {};
}
// Assumes (x,y) is a valid placement for tile on the grid.
// Does NOT validate for you!
// Will OVERWRITE previously laid tiles!
// Will NOT check business logic of tile placement!
Grid.prototype.setTile = function(tile, x, y) {
  // If the row already exists on the grid...
  if ( this._grid[x] ) {
    // ...place the tile at the specified column.
    this._grid[x][y] = tile;
  } else {
    // If the row does not exist on the grid yet,
    // create a new row with the tile placed at the specified column.
    this._grid[x] = {};
    this._grid[x][y] = tile;
  }
};
Grid.prototype.getTile = function(x, y) {
  if (this._grid[x]) {
    return this._grid[x][y];
  }
};

module.exports = Grid;
