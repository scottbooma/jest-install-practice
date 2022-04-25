const { exportAllDeclaration } = require("@babel/types")
const { doubleArray } = require("./index")

test("doubleArray takes an array of integers and doubles each value", () => {
    expect(doubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8])
})