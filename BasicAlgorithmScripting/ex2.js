function reverseString(str) {
    let temp = str.split('');
    temp.reverse();

    return temp.join('');
}

reverseString("hello");