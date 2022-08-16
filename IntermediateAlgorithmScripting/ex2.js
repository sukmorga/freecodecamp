function diffArray(arr1, arr2) {
    let newArr1 = [];
    let newArr2 = [];

    newArr1 = arr1.filter(el => !arr2.includes(el));
    newArr2 = arr2.filter(el => !arr1.includes(el));


    return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);