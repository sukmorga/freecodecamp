function repeatStringNumTimes(str, num) {
    let temp = ''
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            temp += str;
        }
    }
    return temp;
}

repeatStringNumTimes("abc", 3);