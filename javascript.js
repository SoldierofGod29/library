//Java Script file for Library Project

/*Document, Media Queries, and Arrays for Library Project*/

//Variables for different widths of the window
const maxWidth599 = window.matchMedia('(min-width: 499px) and (max-width: 599px)');
const maxWidth734 = window.matchMedia('(min-width: 600px) and (max-width: 734px)');
const maxWidth869 = window.matchMedia('(min-width: 735px) and (max-width: 869px)');
const maxWidth1004 = window.matchMedia('(min-width: 870px) and (max-width: 1004px)');
const maxWidth1139 = window.matchMedia('(min-width: 1005px) and (max-width: 1139px)');
const maxWidth1274 = window.matchMedia('(min-width: 1140px) and (max-width: 1274px)');
const maxWidth1409 = window.matchMedia('(min-width: 1275px) and (max-width: 1409px)');
const maxWidth1544 = window.matchMedia('(min-width: 1410px) and (max-width: 1544px)');
const maxWidth1679 = window.matchMedia('(min-width: 1545px) and (max-width: 1679px)');
const maxWidth1814 = window.matchMedia('(min-width: 1680px) and (max-width: 1814px)');
const maxWidth1949 = window.matchMedia('(min-width: 1815px) and (max-width: 1949px)');
const maxWidth2084 = window.matchMedia('(min-width: 1950px) and (max-width: 2084px)');
const maxWidth2219 = window.matchMedia('(min-width: 2085px) and (max-width: 2219px)');
const maxWidth2354 = window.matchMedia('(min-width: 2220px) and (max-width: 2354px)');
const maxWidth2489 = window.matchMedia('(min-width: 2355px) and (max-width: 2489px)');

//Buttons
const addBookButton = document.querySelector(".add-book");
const dialogForm = document.querySelector("dialog");
const deleteButton = document.querySelector(".delete-book");
const switchLabel = document.querySelector('switch');

//Divs
const bookShelfContainer = document.querySelector(".main-book-shelf");

//Dialogs
const dialog = document.querySelector("dialog");

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
        case (windowWidth > 869 && windowWidth < 1005):
            numBooksOnShelf = 5;
            break;
        case (windowWidth > 1004 && windowWidth < 1140):
            numBooksOnShelf = 6;
            break;
        case (windowWidth > 1139 && windowWidth < 1275):
            numBooksOnShelf = 7;
            break;
        case (windowWidth > 1274 && windowWidth < 1410):
            numBooksOnShelf = 8;
            break;
        case (windowWidth > 1409 && windowWidth < 1545):
            numBooksOnShelf = 9;
            break;
        case (windowWidth > 1544 && windowWidth < 1680):
            numBooksOnShelf = 10;
            break;
        case (windowWidth > 1679 && windowWidth < 1815):
            numBooksOnShelf = 11;
            break;
        case (windowWidth > 1814 && windowWidth < 1950):
            numBooksOnShelf = 12;
            break;
        case (windowWidth > 1949 && windowWidth < 2085):
            numBooksOnShelf = 13;
            break;
        case (windowWidth > 2084 && windowWidth < 2220):
            numBooksOnShelf = 14;
            break;
        case (windowWidth > 2219 && windowWidth < 2355):
            numBooksOnShelf = 15;
            break;
        case (windowWidth > 2354 && windowWidth < 2490):
            numBooksOnShelf = 16;
            break;
        case (windowWidth > 2489 && windowWidth < 2625):
            numBooksOnShelf = 17;
            break;
        default:
            numBooksOnShelf = 18;
    }
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
function deleteBookFromLibrary(bookid)
{
    let warning = "Are you sure you want to Delete the Book from Your Library?";
    if (confirm(warning) == true)
    {
        myLibrary.splice(bookid, 1);
        displayBooksInDocument(checkNumBooksOnShelf());     
    }
}

//Function to loop through myLibrary Array and display it in the DOM
function displayBooksInDocument(numBooks)
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
        newDelButton.setAttribute('onclick', "deleteBookFromLibrary(" + i + ")");
        checkReadStatus(myLibrary[i].read, i);
    }

    let allShelves = document.querySelectorAll('.shelf');

    allShelves.forEach(function(currentValue){
        currentValue.remove(); 
    });

    let book = document.querySelectorAll('.book');

    book.forEach(function(currentValue, index){
        let positionOfLastBook;

        const newShelf = document.createElement('div');

        if (index % numBooks == 0)
        {
            newShelf.classList.add('shelf');
            newShelf.id = "s" + index;
                                
            bookShelfContainer.appendChild(newShelf);
            
            positionOfLastBook = currentValue.offsetTop;
            
            newShelf.style.top = (positionOfLastBook + 661) + 'px';
        }
    });
}

/*Event Listeners for Library Project*/

//displays modal on click
addBookButton.addEventListener("click", function() {
    dialog.showModal();

    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

//Event Listener that puts the form into the Book object, then the myLibrary Array,
// then displays the library, and closes the modal 
dialogForm.addEventListener("close", function() {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');

    addBookToLibrary(title.value, author.value, pages.value, read.checked);

    displayBooksInDocument(checkNumBooksOnShelf());
});

// Event Listeners for when the user changes the screen width to redisplay the 
//  library from the smallest phone to a 4k tv
maxWidth599.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth734.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());  
    }
});

maxWidth869.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1004.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1139.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1274.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1409.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1544.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1679.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf()); 
    }
});

maxWidth1814.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth1949.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth2084.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth2219.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth2354.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf());
    }
});

maxWidth2489.addEventListener("change", function(){
    
    if(document.querySelector('.open-shelf-area') != null)
    {
        displayBooksInDocument(checkNumBooksOnShelf()); 
    }
});