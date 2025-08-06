import React from 'react';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to the AI Website</h1>
        <p className="text-center">This is a simple website with basic CRUD operations.</p>
      </div>
    </div>
  );
};

export default HomePage;