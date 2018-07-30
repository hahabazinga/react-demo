const maxSum = function (arr) {
    let sum = -Infinity, tmp = 0;
    for (let el of arr) {
        if (tmp > 0) {
            tmp += el;
        } else {
            tmp = el;
        }
        if (tmp > sum) {
            sum = tmp;
        }
    }
    return sum;
}
let arr = [-2,-11,-4,-13,-5,-2]
console.log(maxSum(arr))