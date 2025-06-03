
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Routines = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/routines" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Routines</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Design and follow daily routines that optimize your health and longevity. Schedule your activities for maximum benefit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routines;
