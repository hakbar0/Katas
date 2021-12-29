import { number } from "yargs";
import { isSquare } from "./is-square";

describe("maths", () => {
  describe("checking for square number", () => {
    test.each([
      [1, true],
      [2, false],
      [3, false],
      [4, true],
      [5, false],
      [6, false],
      [7, false],
      [8, false],
      [9, true],
      [10, false],
      [11, false],
      [12, false],
      [13, false],
    ])(
      "should return a bool value stating if %i is a square",
      (num: number, isOutSquare: boolean) => {
        expect(isSquare(num)).toBe(isOutSquare);
      }
    );
  });
});
