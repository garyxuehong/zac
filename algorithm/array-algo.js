//Array: ar = [true, false, false], ==> ar.length === 3
function append(arr, ele) {
    arr[arr.length] = ele;
}

function prepend(arr, ele) {
    for (var index=arr.length ; index>0 ; index = index - 1 ){
        arr[index] = arr[index-1]
    }
    arr[0]=ele
}

// [1,2,3,4] --> insert([1,2,3,4], 5, 2) ==> ar: [1, 2, 5, 3, 4]
function insert(arr, ele, atIndex) {
    for (var index=arr.length ; index>atIndex ;index=index-1){
        arr[index]=arr[index-1]
    }
    arr[atIndex]=ele
}

var arr1 = [3,4,5];
prepend(arr1, 6);
console.log("After calling append, arr should be [6,3,4,5], and it is actually", arr1);
var arr2 = ['1', '2', '3', '4'];
insert(arr2, '5', 100);
console.log("After calling insert, arr should be ['1', '2', '5', '3', '4'], and it is actually", arr2);
