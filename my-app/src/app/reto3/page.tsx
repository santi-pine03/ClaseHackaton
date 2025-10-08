"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Reto3() {
  const router = useRouter();
  const [board, setBoard] = useState(Array(9).fill(''));

  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleCellClick = (index: number) => {
    if (board[index] !== '') {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };


  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <button
        onClick={() => router.push('/')}
        className="absolute top-8 left-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        ← Volver
      </button>

      <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Tic Tac Toe
        </h1>

        <div className="text-center mb-6">
          <p className="text-lg font-medium text-gray-700">
            Turno de: <span className="font-bold text-blue-600">{currentPlayer}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-0 w-80 h-80 mx-auto mb-6 bg-white">
          {board.map((cell, index) => {
            const topBorder = index < 3 ? '' : 'border-t-4';
            const leftBorder = index % 3 === 0 ? '' : 'border-l-4';
            
            return (
              <button
                key={index}
                className={`w-full h-full flex items-center justify-center text-6xl font-bold border-blue-500 hover:bg-blue-50 transition-all duration-200 hover:scale-105 ${topBorder} ${leftBorder} ${
                  cell === 'X' ? 'text-blue-600' : 'text-red-500'
                }`}
                onClick={() => handleCellClick(index)}
              >
                {cell === 'O' ? '●' : cell}
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={resetGame}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Reiniciar Juego
          </button>
        </div>
      </div>
    </div>
  );
}