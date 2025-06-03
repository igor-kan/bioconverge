
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Biomarkers = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/biomarkers" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Biomarkers</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Track and analyze your key biomarkers for optimal health. This section will display your biomarker history and trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biomarkers;
