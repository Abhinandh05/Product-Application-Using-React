import React from 'react';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductForm from './components/AddProductForm';


const App = () => {
  return (
   <>
  <Navbar />

  <Routes>
    <Route
     path="/" element={<HomePage />} />
     <Route
     path="/add-product" element={<AddProductForm />} />
  </Routes>


   </>
  );
};

export default App;
