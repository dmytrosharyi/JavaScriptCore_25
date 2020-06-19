var arrayOfValues = _.range(-50, 30, 4);
var shuffledArray = _.shuffle(arrayOfValues);
var maxValue = _.max(shuffledArray);
var minValue = _.min(shuffledArray);
var maxIndex = _.findIndex(shuffledArray, function (value) {
    return value == maxValue
});
var minIndex = _.findIndex(shuffledArray, function (value) {
    return value == minValue
});
console.log(shuffledArray);
console.log(maxIndex);
console.log(minIndex);
