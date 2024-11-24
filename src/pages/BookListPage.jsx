import BookList from '../components/BookList/BookList';

function BookListPage({ books, deleteBook, editBook }) {
  return (
    <div>
      <h1>Lista de Livros</h1>
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
    </div>
  );
}

export default BookListPage;
