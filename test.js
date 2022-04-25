const { test, expect } = require("@jest/globals")
const { subtract } = require("./index")

test("subtract subtracts two numbers", () => {
    expect(subtract(8, 4)).toEqual(4)
})