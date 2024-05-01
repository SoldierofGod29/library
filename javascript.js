//Java Script file for Library Project

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

myLibrary[0] = new Book("Finally Free", "Heath Lambert", 176, "read");
myLibrary[1] = new Book("Abiding in Christ", "Paul Chappel", 153, "not read");
myLibrary[2] = new Book("The Suffering of Man & The Sovereignty of God", "C. H. Spurgeon", 378, "not read");
myLibrary[3] = new Book("The Legend of Zelda: Majora's Mask and A Link to the Past", "Akira Himekawa", 402, "read");


for(var i = 0; i < myLibrary.length; i++)
{
    console.log(myLibrary[i])
}
    