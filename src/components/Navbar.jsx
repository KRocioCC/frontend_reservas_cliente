import React from "react";
import { NavLink } from "react-router-dom";
import { UserIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-naranja flex items-center justify-between px-8 shadow z-10 text-hueso">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 border border-hueso rounded-full flex items-center justify-center bg-hueso text-hueso">
          <span className="text-sm font-bold">O</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg">LOGUITO</span>
          <span className="text-sm text-hueso">
            Los mejores polideportivos BOLIVIA
          </span>
        </div>
      </div>

      {/* Menú */}
      <div className="flex space-x-8 text-lg font-bold">
        <NavLink
          to="/cliente"
          className={({ isActive }) =>
            isActive
              ? "text-turquesa underline"
              : "hover:text-turquesa transition"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/cliente/canchas_disciplinas"
          className={({ isActive }) =>
            isActive
              ? "text-turquesa underline"
              : "hover:text-turquesa transition"
          }
        >
          Canchas y Disciplinas
        </NavLink>
        <NavLink
          to="/cliente/historial"
          className={({ isActive }) =>
            isActive
              ? "text-turquesa underline"
              : "hover:text-turquesa transition"
          }
        >
          Historial
        </NavLink>
        <NavLink
          to="/cliente/notificaciones"
          className={({ isActive }) =>
            isActive
              ? "text-turquesa underline"
              : "hover:text-turquesa transition"
          }
        >
          Notificaciones
        </NavLink>
      </div>

      {/* Usuario */}
      <button className="flex items-center space-x-2 bg-turquesa px-4 py-2 rounded-full hover:bg-rojo transition text-lg font-bold">
        <UserIcon className="w-5 h-5" />
        <span>Valura Cerezo</span>
      </button>
    </div>
  );
};

export default Navbar;
