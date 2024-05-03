//Java Script file for Library Project

/*Document and Media Queries for Library Project*/
const maxWidth1440px = window.matchMedia("(max-width: 1440px)");

const addBookButton = document.querySelector(".add-book");
const submitForm = document.querySelector("dialog button")

const newShelf = document.createElement("div");

const dialog = document.querySelector("dialog");

/*Arrays for Library Project*/

const myLibrary = [];

/*Functions for Library Project*/

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
   let numberOfBooks = myLibrary.length;

   if (numberOfBooks == 0)
   {
        myLibrary[0] = new Book(title, author, pages, read);
   }
   else
   {
        myLibrary[numberOfBooks] = new Book(title, author, pages, read);
   }
}



/*Event Listeners for Library Project*/

maxWidth1440px.addEventListener("change", function() {
    
});

addBookButton.addEventListener("click", function() {
    dialog.showModal();
});

submitForm.addEventListener("click", function(event) {
    let title = document.querySelector("#title");
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');

    let readStatus = "";

    if (read.checked == true)
    {
        readStatus = "Read"
    }
    else
    {
        readStatus = "Haven't Read Yet"
    }

    addBookToLibrary(title.value, author.value, pages.value, readStatus);
    console.log(myLibrary);
    event.preventDefault();
    dialog.close()
});