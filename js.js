const myLibrary = [];


// book constructor
function Book(id, title, author, pages, read) {
    if (!new.target) {
        throw Error("Use the 'new' operator!");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

// const book1 = new Book('mitsos', 'mitsopoulos', '332', 'yes');
// const book2 = new Book(crypto.randomUUID() ,'mitsoss', 'mitsopouloss', '3323', 'no');
// // const book3 = Book('mitsoss', 'mitsopouloss', '3323', 'no'); //throws error as expected
// // book1.reportBook();
// console.log(book2.reportBook());

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(crypto.randomUUID(), title, author, pages, read));
}

addBookToLibrary("mitsaki", "mitsoulaki", "322", "read");
addBookToLibrary("mitsakis", "mitsoulakis", "342", "notread");
console.log(myLibrary);

function displayLibrary() {
    for (const element of myLibrary) {
        console.log(element);
    }
}

displayLibrary();