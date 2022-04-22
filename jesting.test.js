const { expect } = require("@jest/globals")

const add = require("./index")

test("add sums two numbers", () => {
    expect(add(4, 8)).toEqual(12)
})