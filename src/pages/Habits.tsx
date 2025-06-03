
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Habits = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/habits" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Habits</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Build and track healthy habits to improve your longevity and well-being. Monitor your streaks and consistency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habits;
