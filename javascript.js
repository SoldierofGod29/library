//Java Script file for Library Project

/*Document and Media Queries for Library Project*/

//Variables for different widths of the window
const maxWidth1440px = window.matchMedia("(max-width: 1440px)");

//Buttons
const addBookButton = document.querySelector(".add-book");
const submitForm = document.querySelector("dialog button")

//main-book-shelf class variables
const bookShelfContainer = document.querySelector(".main-book-shelf");

//Dialogs
const dialog = document.querySelector("dialog");

/*Arrays for Library Project*/

//Array for Book constructor
const myLibrary = [];

/*Functions for Library Project*/

//Book constructor for holding Book info
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Function to add a book to the myLibrary Array
function addBookToLibrary(title, author, pages, read) 
{
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

//Function to loop through myLibrary Array and display it in the DOM
function displayBooksInDocument()
{
    if (document.querySelector('.open-shelf-area') == null)
    {
        const newShelf = document.createElement("div");
        const newBook = document.createElement("div");
        const newUnorderedList = document.createElement("ul");
        const newTitleListItem = document.createElement("li");
        const newAuthorListItem = document.createElement("li");
        const newReadListItem = document.createElement("li");
        const newPagesListItem = document.createElement("li");

        newShelf.classList.add("open-shelf-area");

        bookShelfContainer.appendChild(newShelf);

        for (let i = 0; i < myLibrary.length; i++)
        {
            newBook.classList.add("book");
            newShelf.appendChild(newBook);

            newBook.appendChild(newUnorderedList);

            newTitleListItem.textContent = myLibrary[i].title;
            newUnorderedList.appendChild(newTitleListItem);

            newAuthorListItem.textContent = myLibrary[i].author;
            newUnorderedList.appendChild(newAuthorListItem);

            newReadListItem.textContent = myLibrary[i].read;
            newUnorderedList.appendChild(newReadListItem);

            newPagesListItem.textContent = myLibrary[i].pages + " pages";
            newUnorderedList.appendChild(newPagesListItem);
        } 
    }
    else
    {
        const existingShelf = document.querySelector('.open-shelf-area');
        const newBook = document.createElement("div");
        const newUnorderedList = document.createElement("ul");
        const newTitleListItem = document.createElement("li");
        const newAuthorListItem = document.createElement("li");
        const newReadListItem = document.createElement("li");
        const newPagesListItem = document.createElement("li");

        for (let i = 0; i < myLibrary.length; i++)
        {
            newBook.classList.add("book");
            existingShelf.appendChild(newBook);

            newBook.appendChild(newUnorderedList);

            newTitleListItem.textContent = myLibrary[i].title;
            newUnorderedList.appendChild(newTitleListItem);

            newAuthorListItem.textContent = myLibrary[i].author;
            newUnorderedList.appendChild(newAuthorListItem);

            newReadListItem.textContent = myLibrary[i].read;
            newUnorderedList.appendChild(newReadListItem);

            newPagesListItem.textContent = myLibrary[i].pages + " pages";
            newUnorderedList.appendChild(newPagesListItem);
        } 
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

    displayBooksInDocument();

    event.preventDefault();
    dialog.close()
});
