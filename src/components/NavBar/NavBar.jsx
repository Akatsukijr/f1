import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Informações</Link></li>
        <li><Link to="/add-book">Cadastro de Livro</Link></li>
        <li><Link to="/book-list">Listagem de Livros</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
