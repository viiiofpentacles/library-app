import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc,deleteDoc } from "firebase/firestore";
import getConfig from './getconfig';
import createBookCard from "./bookcard";

const firebaseConfig = getConfig();
const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);

async function loadBooks () {
    const booksQuery = await getDocs(collection(db, 'books'));
    booksQuery.forEach((doc) => {
        const bookDetails = doc.data();
        createBookCard(bookDetails);
    });
}

async function deleteBook (book) {
    await deleteDoc(doc(db, 'books', book));
}

async function addBookToFirestore (form) {
    const title = form.title.value;

    try {
        await setDoc(doc(db, "books", title), {
            title: form.title.value,
            author: form.author.value,
            pages: form.pages.value,
            status: document.querySelector("input[type=radio]:checked").value
        })
    }
    catch(error) {
        console.error('Error adding book to Firebase Database', error);
      }
}

export { loadBooks, deleteBook, addBookToFirestore };