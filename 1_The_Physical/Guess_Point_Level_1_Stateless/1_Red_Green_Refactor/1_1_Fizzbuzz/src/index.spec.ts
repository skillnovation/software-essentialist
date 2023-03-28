import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzBuzz(5)).toBe("string");
    })

    it("should return fizz for 3", () => {
        expect(fizzBuzz(3)).toBe("3");
    })
});
