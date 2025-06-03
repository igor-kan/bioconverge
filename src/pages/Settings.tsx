
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Settings = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/settings" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Configure your app preferences, notifications, and account settings. Customize your experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
