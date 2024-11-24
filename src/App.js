import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Info from './pages/Info';
import AddBook from './pages/AddBook';
import BookListPage from './pages/BookListPage';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => setBooks([...books, book]);
  const deleteBook = (index) => setBooks(books.filter((_, i) => i !== index));
  const editBook = (index) => {
    const title = prompt('Novo título:', books[index].title);
    const author = prompt('Novo autor:', books[index].author);
    if (title && author) {
      const updatedBooks = books.slice();
      updatedBooks[index] = { title, author };
      setBooks(updatedBooks);
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
        <Route path="/book-list" element={<BookListPage books={books} deleteBook={deleteBook} editBook={editBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
