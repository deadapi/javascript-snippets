
function getPositiveTemperatures(temperatures) {
    return temperatures.filter(ele => ele >= 0);
}

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
