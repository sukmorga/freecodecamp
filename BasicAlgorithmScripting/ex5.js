function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let elem = 0;
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j + 1] > arr[i][j] && arr[i][j + 1] > elem) {
                elem = arr[i][j + 1];
            }
            console.log(elem)
        }
        newArr.push(elem)
    }
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);