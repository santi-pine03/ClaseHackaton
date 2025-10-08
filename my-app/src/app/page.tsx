"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Retos de Programación - Grupo AndesHub
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7].map((retoNumber) => (
            <button
              key={retoNumber}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 p-6 text-center group"
              onClick={() => router.push(`/reto${retoNumber}`)}
            >
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Reto {retoNumber}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Haz clic para empezar
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
