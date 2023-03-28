import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzBuzz(5)).toBe("string");
    })
});
