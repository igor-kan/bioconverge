
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Supplements = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/supplements" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Supplements</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Track your supplement regimen and monitor their effects. Organize your stack for optimal results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplements;
