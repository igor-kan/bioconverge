
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import MetricCard from '@/components/Dashboard/MetricCard';
import CircadianChart from '@/components/Dashboard/CircadianChart';
import BiomarkerChart from '@/components/Dashboard/BiomarkerChart';
import HabitTracker from '@/components/Dashboard/HabitTracker';
import { Activity, Brain, Heart, Scale } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePath="/" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <DashboardHeader userName="Alex" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <MetricCard
              title="Biological Age"
              value="34.2 years"
              change={-3.8}
              changeText="vs. chronological"
              icon={<Brain className="h-5 w-5" />}
            />
            <MetricCard
              title="HRV Score"
              value="72"
              change={5}
              changeText="vs. last week"
              icon={<Heart className="h-5 w-5" />}
            />
            <MetricCard
              title="VO2 Max"
              value="42.6"
              change={1.2}
              changeText="vs. last month"
              icon={<Activity className="h-5 w-5" />}
            />
            <MetricCard
              title="Body Fat %"
              value="14.3%"
              change={-0.8}
              changeText="vs. last month"
              icon={<Scale className="h-5 w-5" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <CircadianChart />
            <BiomarkerChart />
          </div>

          <div className="mt-6">
            <HabitTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
