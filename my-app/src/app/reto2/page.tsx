"use client"; 

import { useEffect, useState } from "react";

export default function ClickCounterTimer() {
  const DURACION = 10; 
  const [clicks, setClicks] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(DURACION);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    if (!activo) return;

    if (tiempoRestante === 0) {
      setActivo(false);
      return;
    }

    const intervalo = setInterval(() => {
      setTiempoRestante((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante, activo]);

  const handleClick = () => {
    if (activo) setClicks((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-300">
      <h2 className="text-2xl font-bold mb-4">
        No of Clicks until timer expires
      </h2>

      <div className="text-6xl font-bold">{clicks}</div>

      <p className="mt-4 text-xl font-semibold">
        Time left: {tiempoRestante} seconds
      </p>

      <button
        onClick={handleClick}
        disabled={!activo}
        className={`mt-6 text-3xl px-4 py-2 rounded border 
        ${activo ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
      >
        +
      </button>

      {!activo && (
        <p className="mt-4 text-lg font-semibold text-red-700">
         Se acabo el tiempo
        </p>
      )}
    </div>
  );
}
