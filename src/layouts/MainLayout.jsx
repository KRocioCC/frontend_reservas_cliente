import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/components_inicio/Home';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 p-8">
        {children}
      </main>
      <Home />
    </div>
  );
};

export default MainLayout;
