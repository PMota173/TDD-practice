function analyzeArray(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let average = sum / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return {
        average: average,
        min: min,
        max: max,
        length: arr.length
    };
}
module.exports = analyzeArray;