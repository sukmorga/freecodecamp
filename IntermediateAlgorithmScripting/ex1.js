function sumAll(arr) {
    let count = 0;
    if (arr[0] > arr[1]) {
        arr.reverse();
    }
    for (let i = arr[0]; i <= arr[1]; i++) {
        count += i;
    }
    return count;
}

sumAll([1, 4]);