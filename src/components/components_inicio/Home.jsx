import React from "react";
import { Search, MapPin, Grid } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-hueso mt-16 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-negro mb-4">
          Encuentra y reserva tu cancha deportiva en segundos
        </h1>
        <p className="text-lg text-slate-700">
          Explora polideportivos en tu zona, compara precios y asegura tu espacio con un clic
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="mt-10 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row bg-white rounded-full shadow-lg overflow-hidden">
          
          {/* Macro distrito */}
          <div className="flex items-center px-4 py-3 flex-1 border-b md:border-b-0 md:border-r">
            <Search className="w-5 h-5 text-slate-500 mr-2" />
            <input
              type="text"
              placeholder="¿Qué macrodistrito estás buscando?"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Zona */}
          <div className="flex items-center px-4 py-3 flex-1 border-b md:border-b-0 md:border-r">
            <MapPin className="w-5 h-5 text-slate-500 mr-2" />
            <input
              type="text"
              placeholder="¿En qué zona quieres jugar?"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Disciplina */}
          <div className="flex items-center px-4 py-3 flex-1 border-b md:border-b-0 md:border-r">
            <Grid className="w-5 h-5 text-slate-500 mr-2" />
            <select className="w-full outline-none text-sm bg-transparent">
              <option value="">¿Qué área deportiva prefieres?</option>
              <option value="futbol">Fútbol</option>
              <option value="basquet">Básquet</option>
              <option value="voley">Vóley</option>
              <option value="tenis">Tenis</option>
            </select>
          </div>

          {/* Botón buscar */}
          <button className="bg-turquesa text-white px-6 py-3 font-bold hover:bg-naranja transition">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
