const { sumOfArray } = require("./index")

test("sumOfArray provides the sum of an array of integers", () => {
    expect(sumOfArray([1, 2, 3, 4])).toEqual(10)
})