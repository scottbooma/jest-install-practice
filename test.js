const { exportAllDeclaration } = require("@babel/types")
const multiply = require("./index")

test("multiply gives the product of two numbers", () => {
    expect(functions.multiply(4, 8)).toEqual(32)
})

test("add gives the sum of two numbers", () => {
    expect(functions.add(4, 8)).toEqual(12)
})