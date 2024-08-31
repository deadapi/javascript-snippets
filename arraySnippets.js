
function getPositiveTemperatures(temperatures) {
    return temperatures.filter(ele => ele >= 0);
}

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
// Explanation how it works
/*
    Here’s what the line return temperatures.filter(ele => ele >= 0); does:

    temperatures: This is your array of numbers.
    filter: This goes through each number in the temperatures array.
    ele => ele >= 0: This checks if each number (ele) is greater than or equal to 0.
    Return: It returns a new array with only the positive numbers (including zero).
 */

// Same other type examples

function getOddYears(years) {
    return years.filter(year => year % 2 !== 0);
}

console.log(getOddYears([2000, 2001, 2002, 2003])); // [2001, 2003]
console.log(getOddYears([1900, 1901, 1902, 1903])); // [1901, 1903]

function getStringSizes(strings) {
    return strings.map(ele=>ele.length)
}

console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]
