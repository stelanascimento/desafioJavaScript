class Book {
    constructor(title, description, author) {
      this.id = Math.random().toString(36).substr(2, 9); // Gera um ID único
      this.title = title;
      this.description = description;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Adicionar um livro
    addBook(bookInfo) {
      const newBook = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
      this.books.push(newBook);
      return newBook;
    }
  
    // Listar todos os livros
    getBooks() {
      return this.books;
    }
  
    // Remover um livro pelo ID
    removeBookById(id) {
      this.books = this.books.filter(book => book.id !== id);
    }
  
    // Buscar um livro pelo ID
    getBookById(id) {
      return this.books.find(book => book.id === id) || null;
    }
  
    // Atualizar um livro pelo ID
    updateBookById(id, info) {
      const book = this.getBookById(id);
      if (!book) return null;
      
      book.title = info.title || book.title;
      book.description = info.description || book.description;
      book.author = info.author || book.author;
      
      return book;
    }
  }
  
  // Exemplo de uso
  const myLibrary = new Library();
  const book1 = myLibrary.addBook({ title: "JavaScript Essencial", description: "Livro sobre JS", author: "John Doe" });
  const book2 = myLibrary.addBook({ title: "Node.js Avançado", description: "Livro sobre Node.js", author: "Jane Smith" });
  const book3 = myLibrary.addBook({ title: "Stela Life", description: "2001", author: "Jane Smith" });
  const book4 = myLibrary.addBook({ title: "Evelly and Volleybal", description: "Inteligence", author: "Jojo Smith" });
  const book5 = myLibrary.addBook({ title: "My John", description: "Space", author: "James Arthur" });
  


  
//Mostrar na tela
const showBook = document.querySelector('#book-list'); // Seleciona o parágrafo correto

function showBooks() {
    const books = myLibrary.getBooks();
    
    if (books.length === 0) {
        showBook.innerHTML = "Nenhum livro na biblioteca.";
        return;
    }

    showBook.innerHTML = books.map(book => `
        <strong>${book.title}</strong> - ${book.author}<br>
    `).join('');
}

if(books.length !== 0){
    
  console.log(myLibrary.getBooks()); // Lista todos os livros
  console.log(myLibrary.getBookById(book1.id)); // Mostra um livro específico
  myLibrary.updateBookById(book2.id, { title: "Node.js para Iniciantes" }); // Edita um livro
  myLibrary.removeBookById(book1.id); // Remove um livro
  
  console.log(myLibrary.getBooks());

}
