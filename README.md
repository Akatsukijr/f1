
# Reading Journal

## Descrição do Projeto

O **Reading Journal** é um sistema de inventário de livros lidos, desenvolvido como parte de um projeto acadêmico. Este sistema permite que o usuário registre, visualize, edite e exclua livros lidos. Ele foi construído utilizando React e implementa funcionalidades básicas de um CRUD (Create, Read, Update, Delete). O projeto está dividido em duas fases, sendo esta a fase 1, focada na construção da parte estática e funcional do frontend.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Utilizado para navegação entre as páginas.
- **CSS**: Para estilização básica do sistema.

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em sua máquina local:

### Pré-requisitos

- **Node.js** (versão >= 14.0.0) e **npm** instalados.

### Passos para Instalação

1. Acesse a pasta pelo vs code do projeto

Instale as dependências do projeto:

bash

npm install

Inicie a aplicação localmente:

bash
Copiar código
npm start
--
Acesse a aplicação no navegador:

arduino

http://localhost:3000

Estrutura do Projeto
O projeto é composto pelos seguintes componentes principais:

Componentes
NavBar: Componente de navegação que permite o usuário acessar as páginas principais (Home, Informações, Cadastro de Livro, Listagem de Livros).
BookForm: Formulário para adicionar novos livros, com validação básica para garantir que os campos "Título" e "Autor" sejam preenchidos.
BookList: Lista que exibe todos os livros cadastrados, com opções para editar e excluir livros.
Páginas
Home: Página inicial do sistema com uma breve introdução.
Info: Página com informações sobre o propósito do sistema.
AddBook: Página para cadastrar novos livros.
BookListPage: Página que exibe a lista de livros cadastrados, permitindo a edição e exclusão de livros.
Funcionalidades Implementadas
Cadastro de Livros: Adiciona um novo livro ao sistema através do formulário.
Listagem de Livros: Exibe todos os livros cadastrados.
Edição de Livros: Permite editar o título e autor de livros existentes.
Exclusão de Livros: Permite excluir livros cadastrados.
Página Inicial

Página de Cadastro de Livro

Página de Listagem de Livros

Autor
Nome do Aluno: Airton Simão dos Santos Junior
Disciplina: desenvolvimento de sistemas frontend
Data: Novembro de 2024

Este projeto é uma implementação básica de um CRUD de livros lidos. Ele foi desenvolvido com React e segue os princípios de componentização, permitindo fácil manutenção e extensão para fases futuras.