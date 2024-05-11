//Java Script file for Library Project

/*Document and Media Queries for Library Project*/

//Variables for different widths of the window


const maxWidth600 = window.matchMedia('(max-width: 600px)');

//Buttons
const addBookButton = document.querySelector(".add-book");
const submitForm = document.querySelector("dialog button");
const deleteButton = document.querySelector(".delete-book");
const switchLabel = document.querySelector('switch');

//Divs
const bookShelfContainer = document.querySelector(".main-book-shelf");

//Dialogs
const dialog = document.querySelector("dialog");


/*Arrays and Variables for Library Project*/

//Array for Book constructor
const myLibrary = [];

//Variables
let totalShelvesInLibrary = 0;

/*Functions for Library Project*/

//Book constructor for holding Book info
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Book prototype function to change status of read
Book.prototype.changeStatus = function(readStatus){
    if (readStatus.checked == true)
    {
        this.read = true;
    }
    else if (readStatus.checked == false)
    {
        this.read = false;
    }
}

//Function to change status of read on click of the input checkbox slider
function changeReadStatus(index) {

    let readStatus = document.querySelector('#read-status' + index);

    myLibrary[index].changeStatus(readStatus);
    displayBooksInDocument(checkNumBooksOnShelf());
}

//Function to check if input checked in the modal for read status is true or false
// to display the slider in the correct position 
function checkReadStatus(checked, index)
{
    let switchInput = document.querySelector('#read-status' + index);
    
    if (checked == true)
    {
        switchInput.checked = true;
    }
    else
    {
        switchInput.checked = false;
    }
}

//Function to change number of books before adding or deleting shelves depending
// on the width of the screen
function checkNumBooksOnShelf()
{
    let windowWidth = window.innerWidth;

    let numBooksOnShelf;
    console.log(windowWidth);
    switch (true)
    {
        case (windowWidth > 499 && windowWidth < 600):
            numBooksOnShelf = 2;
            break;
        case (windowWidth > 599 && windowWidth < 735):
            numBooksOnShelf = 3;
            break;
        case (windowWidth > 734 && windowWidth < 870):
            numBooksOnShelf = 4;
            break;
        case (windowWidth > 869 && windowWidth < 990):
            numBooksOnShelf = 5;
            break;
        case (windowWidth > 989 && windowWidth < 1125):
            numBooksOnShelf = 6;
            break;
        case (windowWidth > 1124 && windowWidth < 1260):
            numBooksOnShelf = 7;
            break;
        case (windowWidth > 1259 && windowWidth < 1395):
            numBooksOnShelf = 8;
            break;
        case (windowWidth > 1394 && windowWidth < 1530):
            numBooksOnShelf = 9;
            break;
        case (windowWidth > 1529 && windowWidth < 1665):
            numBooksOnShelf = 10;
            break;
        case (windowWidth > 1664 && windowWidth < 1800):
            numBooksOnShelf = 11;
            break;
        case (windowWidth > 1799 && windowWidth < 1935):
            numBooksOnShelf = 12;
            break;
        case (windowWidth > 1934 && windowWidth < 2070):
            numBooksOnShelf = 13;
            break;
        case (windowWidth > 2069 && windowWidth < 2205):
            numBooksOnShelf = 14;
            break;
        case (windowWidth > 2204 && windowWidth < 2340):
            numBooksOnShelf = 15;
            break;
        case (windowWidth > 2339 && windowWidth < 2476):
            numBooksOnShelf = 16;
            break;
        case (windowWidth > 2475 && windowWidth < 2610):
            numBooksOnShelf = 17;
            break;
        default:
            numBooksOnShelf = 18;
    }
    console.log(numBooksOnShelf);
    return numBooksOnShelf;
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

//Function to delete the whole Library
function deleteAllOfLibrary()
{
    if (document.querySelector('.open-shelf-area') != null)
    {
        shelfClass = document.querySelector(".open-shelf-area");

        shelfClass.remove();
    }
}

//Function to delete book from library array and document
function deleteBookFromLibrary(bookid, shelfid)
{
    let warning = "Are you sure you want to Delete the Book from Your Library?";
    if (confirm(warning) == true)
    {
        myLibrary.splice(bookid, 1);
        if (myLibrary.length == 0 || myLibrary.length % checkNumBooksOnShelf() == 0)
        {
            const removeShelf = document.querySelector('#s' + shelfid);
            removeShelf.remove();

            totalShelvesInLibrary--;
        }

        displayAfterDeletion();       
    }
}

//Function to redisplay the library after deleting a book
function displayAfterDeletion()
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
        let readP = document.createElement('p');
        let readLabel = document.createElement('label');
        let readInput = document.createElement('input');
        let readSpan = document.createElement('span');
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

        newUl.appendChild(readLi);
        if (myLibrary[i].read == true)
        {
            readP.textContent = "Read";
        }
        else
        {
            readP.textContent = "Haven't Read";
        }
        readLi.appendChild(readP);
        readLabel.classList.add('switch');
        readLi.appendChild(readLabel);
        readInput.type = "checkbox";
        readInput.id = "read-status" + i;
        readInput.setAttribute('onclick', "changeReadStatus(" + i + ")");
        readLabel.appendChild(readInput);
        readSpan.classList.add('slider-round');
        readLabel.appendChild(readSpan);

        pagesLi.textContent = myLibrary[i].pages + ' pages';
        newUl.appendChild(pagesLi);

        newUl.appendChild(buttonLi);
        newDelButton.textContent = "Delete Book";
        buttonLi.appendChild(newDelButton);
        newDelButton.setAttribute('onclick', "deleteBookFromLibrary(" + i + ", " + totalShelvesInLibrary + ")");
        checkReadStatus(myLibrary[i].read, i);
    }
}

//Function to loop through myLibrary Array and display it in the DOM
function displayBooksInDocument(numBooks)
{
    deleteAllOfLibrary();

    if ((myLibrary.length - 1) % numBooks == 0)
    {
        totalShelvesInLibrary++;
    }

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
        let readP = document.createElement('p');
        let readLabel = document.createElement('label');
        let readInput = document.createElement('input');
        let readSpan = document.createElement('span');
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

        newUl.appendChild(readLi);
        if (myLibrary[i].read == true)
        {
            readP.textContent = "Read";
        }
        else
        {
            readP.textContent = "Haven't Read";
        }
        readLi.appendChild(readP);
        readLabel.classList.add('switch');
        readLi.appendChild(readLabel);
        readInput.type = "checkbox";
        readInput.id = "read-status" + i;
        readInput.setAttribute('onclick', "changeReadStatus(" + i + ")");
        readLabel.appendChild(readInput);
        readSpan.classList.add('slider-round');
        readLabel.appendChild(readSpan);

        pagesLi.textContent = myLibrary[i].pages + ' pages';
        newUl.appendChild(pagesLi);

        newUl.appendChild(buttonLi);
        newDelButton.textContent = "Delete Book";
        buttonLi.appendChild(newDelButton);
        newDelButton.setAttribute('onclick', "deleteBookFromLibrary(" + i + ", " + totalShelvesInLibrary + ")");
        checkReadStatus(myLibrary[i].read, i);
    }

    if (myLibrary.length == 0 || (myLibrary.length - 1) % numBooks == 0)
    {
        let lastBook = document.querySelector('#book' + (myLibrary.length - 1));
        console.log(myLibrary.length)
        let positionOfLastBook = lastBook.offsetTop;

        const newShelf = document.createElement('div');
        newShelf.classList.add('shelf');
        newShelf.id = "s" + totalShelvesInLibrary;
        
        bookShelfContainer.appendChild(newShelf);

        for(let j = 0; j < totalShelvesInLibrary; j++)
        {
            let nextShelf = document.querySelector('#s' + totalShelvesInLibrary);

            nextShelf.style.top = (positionOfLastBook + 661) + 'px';  
        }
    }
}


/*Event Listeners for Library Project*/

addBookButton.addEventListener("click", function() {
    dialog.showModal();
});

submitForm.addEventListener("click", function(event) {
    let title = document.querySelector("#title");
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');

    addBookToLibrary(title.value, author.value, pages.value, read.checked);

    displayBooksInDocument(checkNumBooksOnShelf());

    event.preventDefault();
    dialog.close()
});


maxWidth600.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }

});




