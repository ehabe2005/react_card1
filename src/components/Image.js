import React from 'react';
import Product from './Product';


const Image = () => {
    return <img src={Product.imageUrl} alt={Product.name} className="product-image" />;
  };
  

export default Image;