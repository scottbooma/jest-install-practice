exports.sumOfArray = function (someArray) {
    return someArray.reduce((sum, number) => {
        return sum + number
    }, 0)
}