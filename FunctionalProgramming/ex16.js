const squareList = arr => {
    // Only change code below this line
    let newArr = arr
        .filter(i => i > 0 && i % parseInt(i) === 0)
        .map(elem => Math.pow(elem, 2))
    return newArr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);