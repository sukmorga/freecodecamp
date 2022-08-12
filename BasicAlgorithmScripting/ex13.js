function bouncer(arr) {
    let temp = arr.filter(i => Boolean(i) === true)
    return (temp);
}

bouncer([7, "ate", "", false, 9]);