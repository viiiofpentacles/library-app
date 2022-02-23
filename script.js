let library = [];

function Book(title, author, pages, status) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
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
    while(shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
    };
    return addToShelf();
      
}

const shelf = document.getElementById("shelf");

function addToShelf() {
library.forEach(book => {
    const bookCard = document.createElement("div");
    
    for (const detail in book) {
    const divContent = document.createElement("div");
    divContent.innerText = `${detail}: ${book[detail]}`;
    
    bookCard.appendChild(divContent);
  
    shelf.appendChild(bookCard);
    }

    const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            const index = library.indexOf(book);
            library.splice(index, 1);
            
            while(shelf.firstChild) {
                shelf.removeChild(shelf.firstChild);
            };
            return addToShelf();
        });
    bookCard.appendChild(deleteButton);
    
});
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
