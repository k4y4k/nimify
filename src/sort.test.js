const reverse = require("./reverse");
const sort = require("./sort");

describe("sorting", () => {
  it("should sort the reversed words in a sentence", () => {
    const reversedString = reverse("that's so woomy");
    // ymoow os s'taht

    expect(sort(reversedString)).toEqual("os s'taht ymoow");
  });
  it('should not bother about sorting single words', () => {
    const reversedWord = reverse("woomy")
    // ymoow
    expect(sort(reversedWord)).toEqual("ymoow")
  })
  
});
