import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, category, price: parseFloat(price) });
    setName('');
    setCategory('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 border border-primary" >
      <div className="form-group">
        <label className='fs-6 fw-bold' htmlFor="name">Nombre del Producto:</label>
        <input 
          type="text"
          id="name"
          className="form-control border border-black border-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group ">
        <label className='fs-6 fw-bold' htmlFor="category">Categoría:</label>
        <input 
          type="text"
          id="category"
          className="form-control border border-black border-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className='fs-6 fw-bold' htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          className="form-control border border-black border-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary ">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;

