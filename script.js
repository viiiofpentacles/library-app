let library = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


const form = document.querySelector("#new-book-form").addEventListener("submit", function(event){
    addBook(this);
    event.preventDefault();
});


function addBook(form) {
    let newBook = new Book(
        this.title.value,
        this.author.value,
        this.pages.value,
        this.status.value
    );

    console.log(newBook);
    library.push(newBook);
    console.log(...library);
}