import { deleteBook, updateStatus } from './firestore';

function createBookCard (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add(book.title);
        
            for (const detail in book) {
                const divContent = document.createElement("div");
                divContent.classList.add(`${book.title}${detail}`);
                divContent.innerText = `${detail}: ${book[detail]}`;
                bookCard.appendChild(divContent);
            }
            
            shelf.appendChild(bookCard);
           
            const updateStatusButton = document.createElement("button");
                updateStatusButton.textContent = "Update Status";
                updateStatusButton.addEventListener("click", () => {
                    updateDOMStatus(book);
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

async function updateDOMStatus (book) {
    let statusText = document.querySelector(`.${book.title}status`);
        if(statusText.textContent === "status: read"){
            statusText.textContent = "status: unread";
        } else if(statusText.textContent === "status: unread"){
            statusText.textContent = "status: reading";
        } else if (statusText.textContent === "status: reading"){
            statusText.textContent = "status: read";
        }
    let status = statusText.textContent.split(' ');
    updateStatus(book.title, status[1]); 
}

export default createBookCard;