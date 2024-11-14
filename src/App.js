import React from 'react';
import './App.css';
import ListClientesComponent from './components/ListClientesComponent';
import AddClienteComponent from './components/AddClienteComponent';
import ListProductosComponent from './components/ListProductosComponent';
import AddProductoComponent from './components/AddProductoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            {/* Rutas para Clientes */}
            <Route exact path='/' element={<ListClientesComponent />} />
            <Route path='/clientes' element={<ListClientesComponent />} />
            <Route path='/add-cliente' element={<AddClienteComponent />} />
            <Route path='/edit-cliente/:id' element={<AddClienteComponent />} />

            {/* Rutas para Productos */}
            <Route path='/productos' element={<ListProductosComponent />} />
            <Route path='/add-producto' element={<AddProductoComponent />} />
            <Route path='/edit-producto/:id' element={<AddProductoComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
