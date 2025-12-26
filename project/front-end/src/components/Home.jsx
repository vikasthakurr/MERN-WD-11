import React, { useState } from "react";
import Card from "./Card";
import products from "../product-api/product";
import { Filter, Grid3x3, LayoutGrid } from "lucide-react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [gridColumns, setGridColumns] = useState(3);

  // Get unique categories
  const categories = [
    "all",
    ...new Set(products.map((products) => products.category)),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((products) => products.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-fuchsia-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent tracking-tight">
              Premium Collection
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Discover our curated selection of high-quality products defined by
              elegance.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                {filteredProducts.length} Current Products
              </span>
              <div className="h-px w-16 bg-linear-to-r from-fuchsia-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Grid Controls */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="h-5 w-5 text-gray-400 shrink-0" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap border ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white border-gray-900 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-cyan-400 hover:text-cyan-600"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Layout Controls */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 border border-gray-200">
              <button
                onClick={() => setGridColumns(2)}
                className={`p-1.5 rounded-md transition-all duration-300 ${
                  gridColumns === 2
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                title="2 Columns"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded-md transition-all duration-300 ${
                  gridColumns === 3
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                title="3 Columns"
              >
                <Grid3x3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded-md transition-all duration-300 ${
                  gridColumns === 4
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                title="4 Columns"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length > 0 ? (
          <div
            className={`grid gap-8 ${
              gridColumns === 2
                ? "grid-cols-1 md:grid-cols-2"
                : gridColumns === 3
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {filteredProducts.map((product) => (
              <Card key={product.id} productObj={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-gray-400 text-xl font-light">
              No products found in this category
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
