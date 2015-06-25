var tileSpecs = {
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

module.exports = tileSpecs;
