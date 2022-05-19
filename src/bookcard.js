import { deleteBook } from './firestore';

function createBookCard (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add(book.title);
        
            for (const detail in book) {
                const divContent = document.createElement("div");
                divContent.innerText = `${detail}: ${book[detail]}`;
                bookCard.appendChild(divContent);
            }
            
            shelf.appendChild(bookCard);
           
            const updateStatusButton = document.createElement("button");
                updateStatusButton.textContent = "Update Status";
                updateStatusButton.addEventListener("click", () => {

                if(library[index].Status === "read"){
                library[index].Status = "unread";
                } else if(library[index].Status === "unread"){
                library[index].Status = "reading";
                } else if (library[index].Status === "reading"){
                library[index].Status = "read";
                }
                })
            bookCard.appendChild(updateStatusButton);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteBook(book.title);
                document.querySelector(`.${book.title}`).remove();
                });
                            
            bookCard.appendChild(deleteButton);         
}

export default createBookCard;