const reverse = require('./reverse');
const sort = require('./sort');

// you know how you can sort of express English in, say, Japanese via katakana?
// Or French in English via anglicisation (dent-de-lion => dandelion)?

// that's sort of what I'm doing here. I don't have the time to write a full
// blown English => Nimish translator machine...but I can transliterate :)

const replaceWith = {
  a: 'ǌ',
  b: '˟',
  c: 'Δ',
  d: 'd',
  e: '8',
  f: ',',
  g: '⅖',
  h: 'Ѹ',
  i: 'Ӽ',
  j: 'ժ',
  k: 'X',
  l: 'ރ',
  m: 'm',
  n: 'ঔ',
  o: 'Y',
  p: 'இ',
  q: 'ᆹ',
  r: 'ኻ',
  s: 's',
  t: 'Ѿ',
  u: '.0',
  v: 'F',
  w: 'g',
  x: '7',
  y: '*',
  z: 'H',

  A: 'Ȭ',
  B: '5',
  C: '-',
  D: 'Ќ}',
  E: '0.',
  F: 'Yy',
  G: 'p¡',
  H: 'e<',
  I: '&w',
  J: 'r|',
  K: '+.',
  L: 'لg',
  M: 'ؿ̉u',
  N: '*Y',
  O: 'xՈ',
  P: 'ǹ].9',
  Q: 'иg',
  R: 'Mߡ2',
  S: 'ʈj',
  T: 'R൝',
  U: 'ڬf٤',
  V: 'ℰ{',
  W: 'bǅ',
  X: '%ƒ',
  Y: 'ӳծN',
  Z: '១B',

  0: '0',
  1: 'ߴT',
  2: '2',
  3: '3',
  4: '4',
  5: '{{',
  6: '@',
  7: '7',
  8: 'S',
  9: 'Ɛ',

  '!': '!',
  '?': '?',
};

const transliterate = (string) => {
  const sortAllWordsInString = sort(string);

  const substituteString = sortAllWordsInString.split('');

  substituteString.forEach((letter, i) => {
    if (replaceWith[letter]) {
      // eslint-disable-next-line no-return-assign
      return (substituteString[i] = replaceWith[letter]);
    }
    return letter;
  });

  const reversedString = reverse(substituteString.join(''));

  return reversedString;
};

module.exports = transliterate;
