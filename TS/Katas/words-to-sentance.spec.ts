import { wordsToSentence } from "./words-to-sentance";

describe("words to a setnece", () => {
  it("Shoulld return a non-empty string", () => {
    const words = ["hello", "world"];
    expect(wordsToSentence(words)).not.toBe("");
  });

  it("Should return a correct setance for a give input", () => {
    const words = ["100", "world"];
    expect(wordsToSentence(words)).toBe("100 world");
  });

  it("should return an empty array when the given input is empty", () => {
    const words: string[] = [];
    expect(wordsToSentence(words)).toBe("");
  });
});
