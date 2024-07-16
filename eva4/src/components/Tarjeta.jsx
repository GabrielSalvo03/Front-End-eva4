import React from 'react';

const ProductCard = ({ product, deleteProduct }) => (
  <div className="card product-card mx-auto" style={{ width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div className="card-body">
      <h5 className="card-title fs-4 fw-bold  ">{product.name}</h5>
      <p className="card-text ">Categoría: {product.category}</p>
      <p className="card-text">Precio: ${product.price.toFixed(0)}</p>
      <button onClick={() => deleteProduct(product.name)} className="btn btn-danger border border-white border-2">
        Eliminar
      </button>
    </div>
  </div>
);

export default ProductCard;







