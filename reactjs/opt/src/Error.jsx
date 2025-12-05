
import React from 'react'

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center p-8 max-w-md">
        {/* Animated Spinner */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-20 h-20 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
          <div className="absolute w-20 h-20 border-4 border-transparent border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
          Loading...
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Please wait while we load the content
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Error;
