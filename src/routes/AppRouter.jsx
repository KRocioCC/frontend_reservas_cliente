import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";

// Componente para manejar la redirección a la ruta por defecto
const RedirectToDefault = () => <Navigate to="/cliente/canchas_disciplinas" replace />;

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Grupo de rutas para cliente */}
        <Route path="/cliente" element={<MainLayout />}>
          <Route index element={<RedirectToDefault />} />
          <Route path="canchas_disciplinas" element={<div>Página de canchas y disciplinas (En desarrollo)</div>} />
          <Route path="historial" element={<div>Página de historial (En desarrollo)</div>} />
          <Route path="notificaciones" element={<div>Página de notificaciones (En desarrollo)</div>} />
        </Route>

        {/* Logout */}
        <Route path="/logout" element={<Navigate to="/" replace />} />

        {/* Ruta por defecto al cargar "/" */}
        <Route path="/" element={<Navigate to="/cliente" replace />} />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">404 - Página no encontrada</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
