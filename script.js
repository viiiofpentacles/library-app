let library = [];

class Book {
    constructor(title, author, pages, status) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
    }

    static form = document.querySelector("#new-book-form").addEventListener("submit", function(event){
        addBook(this);
        event.preventDefault();
    });


    static shelf = document.getElementById("shelf");

    static updateStatus = () => {
        document.createElement("button");
        updateStatus.textContent = "Update Status";
        updateStatus.addEventListener("click", () => {
        const index = library.indexOf(book);
        
        if(library[index].Status === "read"){
        library[index].Status = "unread";
        } else if(library[index].Status === "unread"){
            library[index].Status = "reading";
        } else if (library[index].Status === "reading"){
            library[index].Status = "read";
        }

        while(shelf.firstChild) {
            shelf.removeChild(shelf.firstChild);
        };
        return addToShelf();
        })
    }

    static deleteButton = () => {
    document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        const index = library.indexOf(book);
        library.splice(index, 1);

        while(shelf.firstChild) {
            shelf.removeChild(shelf.firstChild);
        };
        return addToShelf();
        });
    }

    addToShelf() {
        library.forEach(book => {
            const bookCard = document.createElement("div");
    
            for (const detail in book) {
            const divContent = document.createElement("div");
            divContent.innerText = `${detail}: ${book[detail]}`;
            bookCard.appendChild(divContent);
            bookCard.appendChild(updateStatus());
            bookCard.appendChild(deleteButton());
            }
        
        shelf.appendChild(bookCard);
        })   
        }
 
}





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
