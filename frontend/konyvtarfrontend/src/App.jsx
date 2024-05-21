import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BookCard from './assets/components/BookCard';
import BookForm from './assets/components/BookForm';


function App() {
  const [book, setBook] = useState([]);
  const url = "http://localhost:8000/api/books";
  const getAllBook = async () => {
    const response = await fetch(url);
    const data = await response.json();
      setBook(data);
  }
  useEffect(() => { getAllBook(); }, []);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#newbook">Új könyv felvétel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://petrik.hu">Petrik honlap</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1>Petrik könyv nyilvántartó</h1>
        </div>
      </header>
      <main className="container">
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
          {book.map(book => <BookCard key={book.id} book={book} />)}
        </div>
        <div className="mt-3" id="newbook">
          <BookForm onSuccess={getAllBook} />
        </div>
      </main>
      <footer>
        <p>Készítette: Cser Hajnalka</p>
      </footer>
    </>
  );
}
export default App;
