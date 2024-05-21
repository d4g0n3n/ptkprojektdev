import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from 'react';
import CarForm from './assets/components/CarForm';
import CarCard from './assets/components/CarCard';


function App() {

const url="http://localhost:8000/api/cars";
const[car, setCar]=useState([]);
const getAllCar= async ()=> {
  const response =await fetch(url);
  const data = await response.json();
  setCar(data);
}
useEffect(()=> {getAllCar(); },[]);

  return (<>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#newcar">Új felvétel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://petrik.hu/">Petrik holnap</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>Petrik Autókölcsönző</h1>
      </div>
    </header>
    <main className="container">
      <div className="row row-cols-1 row-cols-md-2 row cols-lg-3">
        {car.map(car=> <CarCard key={car.id} car={car}/>)}
      </div>
      <div className="mt-3" id="newcar">
        <CarForm onSuccess={getAllCar}/>
      </div>
    </main>
    <footer>
      <p>Készítette: Cser Hajnalka</p>
    </footer>
  </>);
}
export default App;