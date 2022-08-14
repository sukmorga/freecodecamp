// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    let bookArr = [...bookList];
    bookArr.push(bookName);
    return bookArr;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    let bookArr = [...bookList];
    const book_index = bookArr.indexOf(bookName);
    if (book_index >= 0) {

        bookArr.splice(book_index, 1);
        return bookArr;

        // Change code above this line
    }
}

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);