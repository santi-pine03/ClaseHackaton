import Navbar from "./componentes/navBar";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Barra normal */}
      <Navbar
        onSearch={(q) => console.log("Buscar (normal):", q)}
      />

      <div className="h-10" />

      {/* Barra invertida (como en la segunda imagen) */}
      <Navbar
        reversed
        onSearch={(q) => console.log("Buscar (invertida):", q)}
        placeholder="Buscar"
      />
    </div>
  );
}
