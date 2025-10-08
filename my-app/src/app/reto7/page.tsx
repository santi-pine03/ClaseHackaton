"use client"; 

import { useState, useEffect } from 'react';
import quotesData from './quotes.json';

interface Quote {
  text: string;
  author: string;
}

export default function Reto7() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const getRandomQuote = (): Quote => {
    const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
    return quotesData.quotes[randomIndex];
  };

  const handleNextQuote = () => {
    let newQuote = getRandomQuote();
    while (currentQuote && newQuote.text === currentQuote.text && quotesData.quotes.length > 1) {
      newQuote = getRandomQuote();
    }
    setCurrentQuote(newQuote);
  };

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  if (!currentQuote) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Quotes</h1>
          <div className="w-full h-3 bg-orange-500 rounded"></div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
          <div className="text-6xl text-gray-400 mb-4">&ldquo;</div>
          
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {currentQuote.text}
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            - {currentQuote.author}
          </p>

          <div className="flex justify-between items-center">
            <button
              onClick={handleNextQuote}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            >
              &#8249;
            </button>
            
            <button
              onClick={handleNextQuote}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="w-full h-3 bg-orange-500 rounded mt-8"></div>
      </div>
    </div>
  );
}
