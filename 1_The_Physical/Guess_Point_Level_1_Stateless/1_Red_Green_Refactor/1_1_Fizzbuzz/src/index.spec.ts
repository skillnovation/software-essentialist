import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzBuzz(5)).toBe("string");
    })

    it("should return fizz for 3", () => {
        expect(fizzBuzz(3)).toBe("fizz");
    })

    it("should return fizz for 5", () => {
        expect(fizzBuzz(5)).toBe("buzz");
    })

    it("should return fizzbuzz for 15", () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    })
});
