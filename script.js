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
        document.querySelector("input[type=radio]:checked").value
    );

    form.reset();
    library.push(newBook);
    return addToShelf();
      
}

const shelf = document.getElementById("shelf");

function addToShelf() {
library.forEach(book => {
    const bookCard = document.createElement("div");
    for (const detail in book) {
    const divContent = document.createElement("div")
    divContent.innerText = `${detail}: ${book[detail]}`;    
    bookCard.appendChild(divContent);
    }
    shelf.appendChild(bookCard);
});
}
