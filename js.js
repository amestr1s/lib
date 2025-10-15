//initialize library array
const myLibrary = [];


// book constructor
// function Book(id, title, author, pages, read) {
//     if (!new.target) {
//         throw Error("Use the 'new' operator!");
//     }
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
    
// }

// book class
class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "cardBook");
        const newH3 = document.createElement("h3");
        const newPBy = document.createElement("p");
        const newH4 = document.createElement("h4");
        const newPPages = document.createElement("p");
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
        newDiv.setAttribute("id", bookId);
        let h3Content = document.createTextNode(`${element.title}`);
        newH3.appendChild(h3Content);
        let pByContent = document.createTextNode(`by`);
        newPBy.appendChild(pByContent);
        let h4Content = document.createTextNode(`${element.author}`);
        newH4.appendChild(h4Content);
        let pPagesContent = document.createTextNode(`No of pages: ${element.pages}`);
        newPPages.appendChild(pPagesContent);
        let newPContent = document.createTextNode(`Status: ${element.read}`);
        newP.appendChild(newPContent);

        statusBtn.addEventListener("click", (event) => {
        
            if (element.read == "Read") {
                Object.defineProperty(element, "read", {
                    value: "Not Read"
                }); 
                newPContent.remove();
                newPContent = document.createTextNode(`Status: ${element.read}`);
                newP.appendChild(newPContent);
                console.log(myLibrary);
            } else if (element.read == "Not Read") {
                Object.defineProperty(element, "read", {
                    value: "Read"
                }); 
                newPContent.remove();
                newPContent = document.createTextNode(`Status: ${element.read}`);
                newP.appendChild(newPContent);
                console.log(myLibrary);
            }
        });

        delBtn.addEventListener("click", (event) => {
            
            document.getElementById(bookId).remove();
            
            const index = myLibrary.findIndex(element => element.id === bookId);
            
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
                console.log(myLibrary);
        });
        
        newDiv.appendChild(newH3);
        newDiv.appendChild(newPBy);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newPPages);
        newDiv.appendChild(newP);
        newDiv.appendChild(statusBtn);
        newDiv.appendChild(delBtn);
        mainLib.appendChild(newDiv);
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


//LLM's one liner
//b=[],m=document.querySelector(".mainLib"),d=document.querySelector("#bookDialog"),f=document.querySelector("#bookForm"),s=document.querySelector("#showForm"),c=document.querySelector("#confirmBtn"),x=document.querySelector("#cancelBtn"),r=()=>{m.innerHTML=b.map((a,i)=>`<div id="${a.id}"><h3>${a.title}</h3><p>by</p><h4>${a.author}</h4><p>Pages:${a.pages}</p><p>Status:${a.read}</p><button class="t">Change</button><button class="del">Delete</button></div>`).join("");[...m.querySelectorAll(".t")].forEach((a,i)=>a.onclick=_=>{b[i].read=b[i].read=="Read"?"Not Read":"Read";r();});[...m.querySelectorAll(".del")].forEach((a,i)=>a.onclick=_=>{b.splice(i,1);r();});},a=(t,u,p,v)=>b.push({id:crypto.randomUUID(),title:t,author:u,pages:p,read:v});s.onclick=_=>d.showModal();c.onclick=e=>{e.preventDefault();a(document.querySelector("#title").value,document.querySelector("#author").value,document.querySelector("#pages").value,document.querySelector('input[name="status"]:checked').value);d.close();f.reset();r();};x.onclick=_=>{d.close();f.reset();r();};
