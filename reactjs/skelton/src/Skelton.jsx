import React from "react";

const Skelton = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
        {/* Badge Skeleton */}
        <div className="absolute top-4 right-4 bg-gray-300 px-8 py-3 rounded-full animate-pulse"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Title Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-gray-300 rounded animate-pulse w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded animate-pulse w-1/2"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-12"></div>
        </div>

        {/* Author & Date Skeleton */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-20"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-10 bg-gray-300 rounded-lg animate-pulse w-full"></div>
      </div>
    </div>
  );
};

export default Skelton;
