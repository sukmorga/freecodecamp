function findLongestWordLength(str) {
    let newArr = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > maxLength) {
            maxLength = newArr[i].length;
        }
    }
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");