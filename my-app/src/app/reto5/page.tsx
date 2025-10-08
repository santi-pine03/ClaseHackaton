import Navbar from "./componentes/navBar";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8">
      </div>
      <Navbar mirrored={true} placeholder="Buscar" />
    </div>
  );
}
