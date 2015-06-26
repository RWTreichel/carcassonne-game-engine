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
      ['F','F','F','F'],
      ['F','M','M','F'],
      ['F','M','M','F'],
      ['F','R','R','F']
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
      ['F','C','C','F'],
      ['F','F','F','F'],
      ['R','R','R','R'],
      ['F','F','F','F']
    ],
    pennant: false
  }
};

module.exports = tileSpecs;
