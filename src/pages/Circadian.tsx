
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Circadian = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/circadian" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Circadian Rhythm</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Optimize your daily rhythms for better sleep, energy, and recovery. Track your circadian patterns and timing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circadian;
