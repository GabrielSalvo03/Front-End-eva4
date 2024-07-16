import React from 'react';
import ProductCard from './Tarjeta';

const ProductList = ({ products, deleteProduct }) => (
  <div className="container">
    <div className="row justify-content-center">
      {products.map(product => (
        <div key={product.name} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
          <ProductCard product={product} deleteProduct={deleteProduct} />
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;





