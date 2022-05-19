import './style.css';
import { loadBooks, addBookToFirestore } from './firestore';
import createBookCard from './bookcard';

const library = [];
loadBooks(library);

class Book {
    constructor(title, author, pages, status) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
    }

    static form = document.querySelector("#new-book-form").addEventListener("submit", function(event){
        if ((/^\d+$/.test(pagesInput.value)) && (document.querySelector('input[name="status"]:checked') != null)) {
        addBook(this);
        event.preventDefault();
        errorMessage.textContent = '';
        } else {
            displayError();
            event.preventDefault();
        }
    });

    static shelf = document.getElementById("shelf");

    addToShelf() {
        library.forEach(book => {
            createBookCard(book);
            })   
    }

}

function addBook(form) {
    let newBook = new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        document.querySelector("input[type=radio]:checked").value
    );

    addBookToFirestore(form);
    form.reset();
    library.push(newBook);
    while(shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
    };
    return newBook.addToShelf();
      
}

const formToggle = document.getElementById("new-book-form");
formToggle.style.display = "none";
const newBookButton = document.getElementById("new-book").addEventListener("click", () => {
    if(formToggle.style.display === "none"){
        formToggle.style.display = "grid";
    }else {
        formToggle.style.display = "none";
    }
})

const errorMessage = document.getElementById('error-message');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

function displayError() {
    if (titleInput.validity.valueMissing) {
        errorMessage.textContent = 'Please fill in the book title.';
    } else if (authorInput.validity.valueMissing) {
        errorMessage.textContent = 'Please fill in the author name.';
    } else if (pagesInput.validity.valueMissing) {
            errorMessage.textContent = 'Please fill in the number of pages.'
    } else if (/^\d+$/.test(pagesInput.value) === false) {
        errorMessage.textContent = 'Please fill in a valid number of pages.';
    } else if (document.querySelector('input[name="status"]:checked') === null) {
        errorMessage.textContent = 'Please select the reading status.'
    }
}