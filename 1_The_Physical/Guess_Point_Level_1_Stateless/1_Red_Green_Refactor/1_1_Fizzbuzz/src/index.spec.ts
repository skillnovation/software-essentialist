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

    it("should return fizz for 6", () => {
        expect(fizzBuzz(6)).toBe("fizz")
    })

    it("should return buzz for 10", () => {
        expect(fizzBuzz(10)).toBe("buzz")
    })

    it("should return fizzbuzz for 30", () => {
        expect(fizzBuzz(30)).toBe("fizzbuzz")
    })

    it("should return fizzbuzz for 1", () =>{
        expect(fizzBuzz(1)).toBe("fizzbuzz")
    })
});
