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

// addBookToLibrary("mitsaki", "mitsoulaki", "322", "read");
// addBookToLibrary("mitsakis", "mitsoulakis", "342", "notread");
// console.log(myLibrary);


const mainLib = document.querySelector(".mainLib");

function displayLibrary() {
    while (mainLib.hasChildNodes()) {
        mainLib.removeChild(mainLib.firstChild);
    }
    for (const element of myLibrary) {
        const newP = document.createElement("p");
        const newContent = document.createTextNode(`${element.title} by ${element.author}, ${element.pages} pages long.`);
        newP.appendChild(newContent);
        mainLib.appendChild(newP);
    }
}

// displayLibrary();

const showForm = document.querySelector("#showForm");
const bookDialog = document.querySelector("#bookDialog");
const confirmBtn = document.querySelector("#confirmBtn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const cancelBtn = document.querySelector("#cancelBtn");
const bookForm = document.querySelector("#bookForm");


showForm.addEventListener("click", () => {
  bookDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  
  const status = document.querySelector('input[name="status"]:checked')?.value;
  
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, status);

  bookDialog.close(); // Have to send the select box value here.
//   document.querySelector("#title").value = "";
//   document.querySelector("#author").value = "";
//   document.querySelector("#pages").value = "";
//   document.querySelector("#read").checked = true;
  bookForm.reset();
  displayLibrary();
});

cancelBtn.addEventListener("click", (event) => {
  
  bookDialog.close(); // Have to send the select box value here.
//   document.querySelector("#title").value = "";
//   document.querySelector("#author").value = "";
//   document.querySelector("#pages").value = "";
//   document.querySelector("#read").checked = true;
  bookForm.reset();
  displayLibrary();
});