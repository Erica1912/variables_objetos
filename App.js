import React from 'react';
import logo from './logo.svg';
import './App.css';

import Saludar from './componente/Saludar'

function App() {

  const user={
    nombre: "Erica Ruiz",
    edad: 36,
    color: "Amarillo"

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} />
      </header>
    </div>
  );
}



export default App;
