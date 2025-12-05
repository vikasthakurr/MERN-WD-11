import React from "react";

const Card = ({ title, description, image, tags, author, date }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-400 to-purple-500 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-6xl">
            🎨
          </div>
        )}
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-xs font-semibold text-indigo-600">
            Featured
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
          {title || "Amazing Card Title"}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description ||
            "This is a beautiful card component built with Tailwind CSS. It includes hover effects, smooth transitions, and a modern design."}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
                CSS
              </span>
            </>
          )}
        </div>

        {/* Author & Date */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {author ? author.charAt(0).toUpperCase() : "A"}
            </div>
            <span className="text-sm text-gray-700 font-medium">
              {author || "John Doe"}
            </span>
          </div>
          <span className="text-xs text-gray-500">{date || "Dec 5, 2025"}</span>
        </div>

        {/* Action Button */}
        <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
