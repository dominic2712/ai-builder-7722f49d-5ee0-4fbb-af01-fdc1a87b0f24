import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const CreatePage: React.FC = () => {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle create logic
    console.log('Creating:', name);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Create New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;