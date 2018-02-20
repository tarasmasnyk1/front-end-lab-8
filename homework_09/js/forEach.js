function forEach(arr, innerFunction) {
    for (let index = 0; index < arr.length; index++) {
        innerFunction(arr[index]);
    }
}