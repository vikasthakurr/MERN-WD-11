import React from "react";
import { Star, ShoppingCart, Package } from "lucide-react";

const Card = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/50 hover:border-cyan-200 hover:-translate-y-1">
      {/* Discount Badge */}
      {product.discountPercentage > 0 && (
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-100 text-fuchsia-600">
          -{product.discountPercentage.toFixed(0)}%
        </div>
      )}

      {/* Stock Badge */}
      <div className="absolute top-3 left-3 z-10">
        <div
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm ${
            product.stock > 50
              ? "bg-green-50 text-green-700 border border-green-200"
              : product.stock > 0
              ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          <Package className="h-3 w-3" />
          <span>
            {product.stock > 0 ? `${product.stock} left` : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-50 p-6 flex items-center justify-center group-hover:bg-gray-100/50 transition-colors duration-300">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between text-xs">
          <span className="px-2.5 py-1 bg-cyan-50 text-cyan-700 rounded-md border border-cyan-100 font-medium">
            {product.category}
          </span>
          <span className="text-gray-400 font-medium tracking-wide uppercase text-[10px]">
            {product.brand}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-cyan-600 transition-colors duration-300 min-h-[3rem]">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="space-y-1">
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-bold text-gray-900">
                ${discountedPrice}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <button
            className="group/btn relative px-3 py-2 bg-gray-900 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-cyan-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
