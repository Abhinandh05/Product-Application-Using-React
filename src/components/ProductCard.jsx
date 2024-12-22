import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Category: <span className="text-gray-900">{product.category}</span>
        </p>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4">
          <span className="text-xl font-bold text-primary">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
