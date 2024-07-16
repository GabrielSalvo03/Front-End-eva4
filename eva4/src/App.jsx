import React, { useState, useEffect } from 'react';
import ProductForm from './components/Formulario';
import ProductList from './components/Lista';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
    setAlertMessage('Producto agregado exitosamente');
    setAlertType('success');
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  const deleteProduct = (productName) => {
    const newProducts = products.filter(product => product.name !== productName);
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
    setAlertMessage('Producto eliminado exitosamente');
    setAlertType('danger');
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Catálogo de Productos📝📦</h1>
      <ProductForm addProduct={addProduct} />
      {alertMessage && (
        <div className={`alert alert-${alertType} mt-3`} role="alert">
          {alertMessage}
        </div>
      )}
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;