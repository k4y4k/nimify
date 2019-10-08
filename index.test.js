// wakeUp from "./index";
const wakeUp = require("./index");

describe("Wake up!!", () => {
  it("should be awake", () => {
    expect(wakeUp()).toEqual("I am awake");
  });
});
