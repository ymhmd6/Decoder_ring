// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution.js");

describe("invalid alphabet value", () => {
  it("should return false if alphabet value is missing", () => {
    const actual = substitution("Encode this message", null);
    expect(actual).to.be.false;
  });
  it("should return false if alphabet value is not exactly 26 characters", () => {
    const actual = substitution("Encode this message", "abc");
    expect(actual).to.be.false;
  });
  it("should return false if alphabet value does not contain unique characters", () => {
    const actual = substitution(
      "Encode this message",
      "aaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    expect(actual).to.be.false;
  });
});

describe("encoding", () => {
  it("should encode a message with substitute alphabet", () => {
    const expected = "io, nxxfol!";
    const actual = substitution("Hi, Yuunis!", "qwertyuiopasdfghjklzxcvbnm");
    expect(actual).to.eql(expected);
  });
  it("should work with any unique characters", () => {
    const expected = "ui, bzzdik!";
    const actual = substitution("Hi, Yuunis!", ".qwertyuiopasdfghjklzxcvbn");
    expect(actual).to.eql(expected);
  });
  it("should include spaces", () => {
    const actual = substitution("Hi, Yuunis!", ".qwertyuiopasdfghjklzxcvbn");
    expect(actual).to.include(" ");
  });
});

describe("decoding", () => {
  it("should decode a message with substitute alphabet", () => {
    const expected = "hi, yuunis!";
    const actual = substitution(
      "io, nxxfol!",
      "qwertyuiopasdfghjklzxcvbnm",
      false
    );
    expect(actual).to.eql(expected);
  });
  it("should work with any unique characters", () => {
    const expected = "hi, yuunis!";
    const actual = substitution(
      "ui, bzzdik!",
      ".qwertyuiopasdfghjklzxcvbn",
      false
    );
    expect(actual).to.eql(expected);
  });
  it("should include spaces", () => {
    const actual = substitution(
      "ui, bzzdik!",
      ".qwertyuiopasdfghjklzxcvbn",
      false
    );
    expect(actual).to.include(" ");
  });
});