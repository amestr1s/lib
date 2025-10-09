//initialize library array
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

//function to add book objects in myLibrary array
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(crypto.randomUUID(), title, author, pages, read));
}

//function to show and refresh the library and also to add status buttons and delete buttons
const mainLib = document.querySelector(".mainLib");
function displayLibrary() {
    while (mainLib.hasChildNodes()) {
        mainLib.removeChild(mainLib.firstChild); //remove children to avoid duplication
    }
    for (const element of myLibrary) {
        const newP = document.createElement("p");
        const delBtn = document.createElement("button");
        delBtn.setAttribute("class", "delBtn");
        const delButtonContent = document.createTextNode(`Delete Book`);
        delBtn.appendChild(delButtonContent);
        const statusBtn = document.createElement("button");
        statusBtn.setAttribute("class", "statusBtn");
        const statusButtonContent = document.createTextNode(`Change Status`);
        statusBtn.appendChild(statusButtonContent);
        const bookId = element.id;
        newP.setAttribute("id", bookId);
        
        statusBtn.addEventListener("click", (event) => {
        
            if (element.read == "Read") {
                Object.defineProperty(element, "read", {
                    value: "Not Read"
                }); 
                newContent.remove();
                newContent = document.createTextNode(`${element.title} by ${element.author}, ${element.pages} pages long. Status = ${element.read}`);
                newP.appendChild(newContent);
                console.log(myLibrary);
            } else if (element.read == "Not Read") {
                Object.defineProperty(element, "read", {
                    value: "Read"
                }); 
                newContent.remove();
                newContent = document.createTextNode(`${element.title} by ${element.author}, ${element.pages} pages long. Status = ${element.read}`);
                newP.appendChild(newContent);
                console.log(myLibrary);
            }
        });

        delBtn.addEventListener("click", (event) => {
            
            document.getElementById(bookId).remove();
            delBtn.remove();
            statusBtn.remove();
            const index = myLibrary.findIndex(element => element.id === bookId);
            
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
                console.log(myLibrary);
        });
        
        let newContent = document.createTextNode(`${element.title} by ${element.author}, ${element.pages} pages long. Status = ${element.read}`);
        newP.appendChild(newContent);
        mainLib.appendChild(newP);
        mainLib.appendChild(delBtn);
        mainLib.appendChild(statusBtn);
        console.log(myLibrary);
    }
}



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

  bookDialog.close(); 
  bookForm.reset();
  displayLibrary();
});

cancelBtn.addEventListener("click", (event) => {
  
  bookDialog.close();
  bookForm.reset();
  displayLibrary();
});