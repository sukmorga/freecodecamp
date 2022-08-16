// Only change code below this line
function urlSlug(title) {
    let newStr = title
        .split(' ')
        .filter(el => el !== '')
        .map(i => i.toLowerCase())
        .join('-');

    return newStr;

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

console.log(urlSlug("Winter Is Coming"))