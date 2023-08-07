let myLibrary = [];

function Book(author,title,pages,read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.info = function() {
        return title+" by "+author+", "+pages+" pages, "+(read?"read":"not yet read");
    }
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

let Book1= new Book("JK Rowling", "Harry Potter 1", 449, true);
addBookToLibrary(Book1);

let Book2 = new Book("Dictee", "Theresa Hak Kyung Cha", 179, false)
addBookToLibrary(Book2);

const library = document.querySelector('.library');

function refreshLibrary() {
    while (myLibrary.hasChildNodes) {
        myLibrary.removeChild();
    }
    myLibrary.forEach((book) => {
        const bookNode = document.createTextNode(book.info());
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.appendChild(bookNode);
        library.appendChild(newCard);
    })
}

refreshLibrary();

const bookForm = document.getElementById("bookForm");
bookForm.style.display = "none";

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    bookForm.style.display = "none";
    let formAuthor = document.getElementById("author");
    let formTitle = document.getElementById("title");
    let formPages = document.getElementById("pages");
    let formRead = document.getElementById("read");

    myLibrary.push(Book(formAuthor, formTitle, formPages, formRead))
    
    refreshLibrary();
})

const popupButton = document.getElementById("popupButton");
popupButton.addEventListener("click", function(){
    bookForm.style.display = "block";
    // alert("pog");
})