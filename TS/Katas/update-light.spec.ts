import { updateLight } from "./update-light";

describe("updating the traffic light", () => {
  test.each([
    ["green", "yellow"],
    ["yellow", "red"],
    ["red", "green"],
  ])(
    "should transiation from (%s) to (%s)",
    (curColour: string, nextColour: string) => {
      const newColour = updateLight(curColour);
      expect(nextColour).toEqual(newColour);
    }
  );
});
