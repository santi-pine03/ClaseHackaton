"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Reto1() {
  const [percentage, setPercentage] = useState(10);
  const [inputValue, setInputValue] = useState('10');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Convert to number and clamp between 0 and 100
    const numValue = Math.max(0, Math.min(100, parseInt(value) || 0));
    setPercentage(numValue);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">

      <div className="bg-white rounded-lg shadow-lg p-12 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Progress bar
        </h1>

 
        <div className="mb-8 relative">
          <div className="relative w-full h-8 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-red-400 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div
            className="absolute top-0 h-8 flex items-center transition-all duration-300 ease-out"
            style={{ 
              left: `${Math.max(0, Math.min(percentage - 8, 92))}%`,
              transform: percentage < 8 ? 'translateX(0)' : percentage > 92 ? 'translateX(-100%)' : 'translateX(-50%)'
            }}
          >
            <span className="text-white font-bold text-sm bg-red-500 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
              {percentage}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <label className="text-lg font-medium text-gray-700">
            Input Percentage:
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={inputValue}
            onChange={handleInputChange}
            className="border-2 border-gray-800 rounded-full px-4 py-2 w-20 text-center focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}