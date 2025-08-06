import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg">AI Website</div>
        <div className="flex space-x-4">
          <Link className="text-white" to="/">Home</Link>
          <Link className="text-white" to="/create">Create</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;