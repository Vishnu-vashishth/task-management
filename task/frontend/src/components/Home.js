import React from 'react';
const logo =  'https://www.superceuticals.in/src/img/logo.png';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <img src={logo} alt="Logo" className="w-48 h-auto" />
      <h1 className="mt-8 text-3xl font-bold text-center">
        This App is a Task Management App for Superceuticals
      </h1>
    </div>
  );
};

export default HomePage;
