// See the 's' tile, you probably need a 5x5 feature matrix :(
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
      ['F','F','F','F','F'],
      ['F','M','M','M','F'],
      ['F','M','M','M','F'],
      ['F','M','M','M','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  b: {
    id: 'b',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'field',
      s: 'field',
      w: 'field'
    },
    features: [
      ['F','F','F','F','F'],
      ['F','M','M','M','F'],
      ['F','M','M','M','F'],
      ['F','M','M','M','F'],
      ['F','F','F','F','F']
    ],
    pennant: false
  },
  c: {
    id: 'c',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'city',
      s: 'city',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C']
    ],
    pennant: true
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
      ['C','C','C','C','C'],
      ['F','F','F','F','F'],
      ['R','R','R','R','R'],
      ['F','F','F','F','F'],
      ['F','F','F','F','F']
    ],
    pennant: false
  },
  e: {
    id: 'e',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'field',
      s: 'field',
      w: 'field'
    },
    features: [
      ['C','C','C','C','C'],
      ['F','F','F','F','F'],
      ['F','F','F','F','F'],
      ['F','F','F','F','F'],
      ['F','F','F','F','F']
    ],
    pennant: false
  },
  f: {
    id: 'f',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'city',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','F','F','F','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','F','F','F','C']
    ],
    pennant: true
  },
  g: {
    id: 'g',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'city',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','F','F','F','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','F','F','F','C']
    ],
    pennant: false
  },
  h: {
    id: 'h',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'city',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','F','F','F','C'],
      ['C','F','F','F','C'],
      ['C','F','F','F','C'],
      ['C','F','F','F','C'],
      ['C','F','F','F','C']
    ],
    pennant: false
  },
  i: {
    id: 'i',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'city',
      s: 'field',
      w: 'field'
    },
    features: [
      ['C','C','C','C','C'],
      ['F','F','F','F','C'],
      ['F','F','F','F','C'],
      ['F','F','F','F','C'],
      ['F','F','F','F','C']
    ],
    pennant: false
  },
  j: {
    id: 'j',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'road',
      s: 'road',
      w: 'field'
    },
    features: [
      ['C','C','C','C','C'],
      ['F','F','F','F','F'],
      ['F','F','R','R','R'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  k: {
    id: 'k',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'field',
      s: 'road',
      w: 'road'
    },
    features: [
      ['C','C','C','C','C'],
      ['F','F','F','F','F'],
      ['R','R','R','F','F'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  l: {
    id: 'l',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'road',
      s: 'road',
      w: 'road'
    },
    features: [
      ['C','C','C','C','C'],
      ['F','F','F','F','F'],
      ['R','R','F','R','R'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  m: {
    id: 'm',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'field',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','F','F','F','F'],
      ['C','F','F','F','F'],
      ['C','F','F','F','F'],
      ['C','F','F','F','F']
    ],
    pennant: true
  },
  n: {
    id: 'n',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'field',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','F','F','F','F'],
      ['C','F','F','F','F'],
      ['C','F','F','F','F'],
      ['C','F','F','F','F']
    ],
    pennant: false
  },
  o: {
    id: 'o',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'road',
      s: 'road',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','F','F','F','F'],
      ['C','F','R','R','R'],
      ['C','F','R','F','F'],
      ['C','F','R','F','F']
    ],
    pennant: true
  },
  p: {
    id: 'p',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'road',
      s: 'road',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','F','F','F','F'],
      ['C','F','R','R','R'],
      ['C','F','R','F','F'],
      ['C','F','R','F','F']
    ],
    pennant: false
  },
  q: {
    id: 'q',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'city',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','F','F','F','C'],
      ['C','F','F','F','C']
    ],
    pennant: true
  },
  r: {
    id: 'r',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'city',
      s: 'field',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','F','F','F','C'],
      ['C','F','F','F','C']
    ],
    pennant: false
  },
  s: {
    id: 's',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'city',
      s: 'road',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','F','R','F','C'],
      ['C','F','R','F','C']
    ],
    pennant: true
  },
  t: {
    id: 't',
    orientation: 0,
    sides: {
      n: 'city',
      e: 'city',
      s: 'road',
      w: 'city'
    },
    features: [
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','C','C','C','C'],
      ['C','F','R','F','C'],
      ['C','F','R','F','C']
    ],
    pennant: false
  },
  u: {
    id: 'u',
    orientation: 0,
    sides: {
      n: 'road',
      e: 'field',
      s: 'road',
      w: 'field'
    },
    features: [
      ['F','F','R','F','F'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  v: {
    id: 'v',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'field',
      s: 'road',
      w: 'road'
    },
    features: [
      ['F','F','F','F','F'],
      ['F','F','F','F','F'],
      ['R','R','R','F','F'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  w: {
    id: 'w',
    orientation: 0,
    sides: {
      n: 'field',
      e: 'road',
      s: 'road',
      w: 'road'
    },
    features: [
      ['F','F','F','F','F'],
      ['F','F','F','F','F'],
      ['R','R','F','R','R'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  },
  x: {
    id: 'x',
    orientation: 0,
    sides: {
      n: 'road',
      e: 'road',
      s: 'road',
      w: 'road'
    },
    features: [
      ['F','F','R','F','F'],
      ['F','F','R','F','F'],
      ['R','R','F','R','R'],
      ['F','F','R','F','F'],
      ['F','F','R','F','F']
    ],
    pennant: false
  }
};

module.exports = tileSpecs;
