function quickSort(item, left, right) {
    var index;
    if (item.length > 1) {
        index = partition(item, left, right);
        console.log('privotIndex', index)
        if(left < index - 1){
            quickSort(item, left, index - 1);
        }
        if(index < right){
            quickSort(item, index, right);
        }
    }
    return item;
}
function partition(item, left, right) {
    var provit = item[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while(i <= j){
        while(item[i] < provit){
            i++;
        }
        while(item[j] > provit){
            j--;
        }
        if(i <= j){

            [item[i], item[j]] = [item[j], item[i]];
            console.log(item[i],item[j], item)
            i++;
            j--;

        }
    }
    console.log(i,j)
    return i;
}
var arr = [1,4,5,3,2];
quickSort(arr, 0, arr.length-1);
console.log(arr);


function quicksort(arr, left, right) {
    var len = arr.length;
    if (len > 1) {
        var index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
function partition(arr, left, right) {
    var priovt = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < priovt) {
            i++;
        }
        while (arr[j] > priovt) {
            j--
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;
        }
    }
    return i;
}