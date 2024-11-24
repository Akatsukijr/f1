function BookList({ books, deleteBook, editBook }) {
  return (
    <div>
      {books.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <p><strong>Título:</strong> {book.title}</p>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Gênero:</strong> {book.genre}</p>
              <p><strong>Data:</strong> {book.date}</p>
              <button onClick={() => editBook(index)}>Editar</button>
              <button onClick={() => deleteBook(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
