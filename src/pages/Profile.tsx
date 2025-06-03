
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';

const Profile = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/profile" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Profile</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700">
              Manage your personal information and preferences. Update your health goals and settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
