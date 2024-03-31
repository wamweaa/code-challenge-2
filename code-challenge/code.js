function generatearrey(firstNum, lastNum) {
    if (firstNum > lastNum) {//determining the first number and the last number
        [firstNum, lastNum] = [lastNum, firstNum]
    }
    const arr = [];//array to store the numbers
    for (var x = firstNum; x <= lastNum; x++) {
        arr.push(x)
    }
    return arr//returns the array
}
// taste our code
console.log(generatearrey(-4, 7));
console.log(generatearrey(7, 4));