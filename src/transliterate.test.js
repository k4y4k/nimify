const transliterate = require('./transliterate');

describe('transliterate', () => {
  it('g', () => {
    expect(transliterate('g')).toEqual('⅖');
  });

  it('should transliterate `lmao`', () => {
    expect(transliterate('lmao')).toEqual('Yǌmރ');
  });

  it('should transliterate `the sea`', () => {
    expect(transliterate('the sea')).toEqual('8ѸѾ ǌ8s');
  });
});
