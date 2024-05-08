//Java Script file for Library Project

/*Document and Media Queries for Library Project*/

//Variables for different widths of the window
const maxWidth1440px = window.matchMedia("(max-width: 1440px)");

//Buttons
const addBookButton = document.querySelector(".add-book");
const submitForm = document.querySelector("dialog button");
const deleteButton = document.querySelector(".delete-book");

//Divs
const bookShelfContainer = document.querySelector(".main-book-shelf");

//Dialogs
const dialog = document.querySelector("dialog");


/*Arrays and Variables for Library Project*/

//Array for Book constructor
const myLibrary = [];

//Variables
let totalBooksInLibrary = 0;
let totalShelvesInLibrary = 0;

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

function deleteAllOfLibrary()
{
    if (document.querySelector('.open-shelf-area') != null)
    {
        shelfClass = document.querySelector(".open-shelf-area");

        shelfClass.remove();
    }
}

function deleteBookFromLibrary(bookid, shelfid)
{
    let warning = "Are you sure you want to Delete the Book from Your Library?";
    if (confirm(warning) == true)
    {
       myLibrary.splice(bookid, 1);

       displayBooksInDocument();

       totalBooksInLibrary--;

       if (myLibrary.length == 0)
       {
            const removeShelf = document.querySelector('.shelf');
            removeShelf.remove();

            totalShelvesInLibrary--;
       }
    }
}

//Function to loop through myLibrary Array and display it in the DOM
function displayBooksInDocument()
{
    deleteAllOfLibrary();

    const newShelfArea = document.createElement('div');
    newShelfArea.classList.add('open-shelf-area');
    bookShelfContainer.appendChild(newShelfArea);

    for (let i = 0; i < myLibrary.length; i++)
    {
        let newBook = document.createElement('div');
        let newUl = document.createElement('ul');
        let titleLi = document.createElement('li');
        let authorLi = document.createElement('li');
        let readLi = document.createElement('li');
        let pagesLi = document.createElement('li');
        let buttonLi = document.createElement('li');
        const newDelButton = document.createElement('button');
            
        newBook.classList.add('book');
        newBook.id = "book" + i;
        newShelfArea.appendChild(newBook);

        newBook.appendChild(newUl);

        titleLi.textContent = myLibrary[i].title;
        newUl.appendChild(titleLi);

        authorLi.textContent = myLibrary[i].author;
        newUl.appendChild(authorLi);

        readLi.textContent = myLibrary[i].read;
        newUl.appendChild(readLi);

        pagesLi.textContent = myLibrary[i].pages + ' pages';
        newUl.appendChild(pagesLi);

        newUl.appendChild(buttonLi);
        newDelButton.textContent = "Delete Book";
        buttonLi.appendChild(newDelButton);
        newDelButton.setAttribute('onclick', "deleteBookFromLibrary(" + i + ")");
    }

    if (totalBooksInLibrary == 0 || totalBooksInLibrary % 9 == 0)
    {
        const newShelf = document.createElement('div');
        newShelf.classList.add('shelf');
        newShelf.id = "s" + totalShelvesInLibrary;
        bookShelfContainer.appendChild(newShelf);

        for(let j = 0; j < totalShelvesInLibrary; j++)
        {
            let nextShelf = document.querySelector('#s' + totalShelvesInLibrary);

            nextShelf.style.top = 82.4 + 'rem';  
        }

        totalShelvesInLibrary++;
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

    totalBooksInLibrary++;

    event.preventDefault();
    dialog.close()
});

