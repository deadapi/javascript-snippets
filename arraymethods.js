
function getPositiveTemperatures(temperatures) {
    return temperatures.filter(ele => ele >= 0);
}

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
/*
    Here’s what the line return temperatures.filter(ele => ele >= 0); does:

    temperatures: This is your array of numbers.
    filter: This goes through each number in the temperatures array.
    ele => ele >= 0: This checks if each number (ele) is greater than or equal to 0.
    Return: It returns a new array with only the positive numbers (including zero).
 */