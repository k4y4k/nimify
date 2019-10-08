const reverse = require('./reverse');

describe('reverse', () => {
  it('should reverse a word', () => {
    expect(reverse('abc')).toEqual('cba');
  });

  it('should reverse a sentence', () => {
    expect(reverse('that is really woomy')).toEqual('ymoow yllaer si taht');
  });
});
