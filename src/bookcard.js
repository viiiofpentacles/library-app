import { loadBooks, deleteBook, updateStatus } from './firestore';

function createBookCard (book) {
    const bookCard = document.createElement("div");

            bookCard.appendChild(generateContentDivs("Title", book.title));
            bookCard.appendChild(generateContentDivs("Author", book.author));
            bookCard.appendChild(generateContentDivs("Pages", book.pages));
            bookCard.appendChild(generateContentDivs("Status", book.status));
    
            shelf.appendChild(bookCard);
           
            const updateStatusButton = document.createElement("button");
                updateStatusButton.textContent = "Update Status";
                updateStatusButton.addEventListener("click", () => {
                    updateDOMStatus(book);
                })
                bookCard.appendChild(updateStatusButton);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", async function () {
                await deleteBook(book.title);
                const shelf = document.getElementById("shelf");
                while (shelf.firstChild) {
                    shelf.removeChild(shelf.lastChild);
                }
                loadBooks();
                });
                            
            bookCard.appendChild(deleteButton);         
}

async function updateDOMStatus (book) {
        if(book.status === "read"){
            book.status = "unread";
        } else if(book.status === "unread"){
            book.status = "reading";
        } else if (book.status === "reading"){
            book.status = "read";
        }

    await updateStatus(book.title, book.status); 
    
    const shelf = document.getElementById("shelf");
        while (shelf.firstChild) {
            shelf.removeChild(shelf.lastChild);
        }
    loadBooks();
}

function generateContentDivs (item, content) {
    const divContent = document.createElement("div");
    divContent.textContent = item + ": " + content;
    return divContent;
}

export default createBookCard;