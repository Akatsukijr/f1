import BookForm from '../components/BookForm/BookForm';

function AddBook({ addBook }) {
  return (
    <div>
      <h1>Adicionar Livro</h1>
      <BookForm addBook={addBook} />
    </div>
  );
}

export default AddBook;
