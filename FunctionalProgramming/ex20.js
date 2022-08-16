function sentensify(str) {
    // Only change code below this line
    let newStr = str
        .split(/\W/)
        .join(' ')
    return newStr;
    // Only change code above this line
}

sentensify("May-the-force-be-with-you");