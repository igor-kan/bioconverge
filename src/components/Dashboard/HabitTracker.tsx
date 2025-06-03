
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HabitDay {
  date: string;
  completed: boolean;
}

interface HabitEntryProps {
  name: string;
  days: HabitDay[];
  streak: number;
  goal: string;
}

const HabitEntry = ({ name, days, streak, goal }: HabitEntryProps) => {
  return (
    <div className="py-3">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="font-medium">{name}</span>
          <p className="text-xs text-muted-foreground">{goal}</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            <Check className="h-3 w-3 mr-1" />
            {streak} days
          </span>
        </div>
      </div>
      <div className="flex gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={cn(
              'h-6 w-6 rounded-sm flex items-center justify-center text-xs',
              day.completed
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            )}
            title={day.date}
          >
            {day.completed ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
          </div>
        ))}
      </div>
    </div>
  );
};

interface HabitTrackerProps {
  className?: string;
}

const HabitTracker = ({ className }: HabitTrackerProps) => {
  const habits: HabitEntryProps[] = [
    {
      name: 'Meditation',
      goal: 'Daily 20 min',
      streak: 7,
      days: [
        { date: '2025-05-08', completed: true },
        { date: '2025-05-09', completed: true },
        { date: '2025-05-10', completed: true },
        { date: '2025-05-11', completed: true },
        { date: '2025-05-12', completed: true },
        { date: '2025-05-13', completed: true },
        { date: '2025-05-14', completed: true },
      ],
    },
    {
      name: 'Zone 2 Cardio',
      goal: '30 min 3x weekly',
      streak: 3,
      days: [
        { date: '2025-05-08', completed: false },
        { date: '2025-05-09', completed: true },
        { date: '2025-05-10', completed: false },
        { date: '2025-05-11', completed: true },
        { date: '2025-05-12', completed: false },
        { date: '2025-05-13', completed: true },
        { date: '2025-05-14', completed: false },
      ],
    },
    {
      name: 'Cold Exposure',
      goal: '5 min daily shower',
      streak: 5,
      days: [
        { date: '2025-05-08', completed: true },
        { date: '2025-05-09', completed: true },
        { date: '2025-05-10', completed: true },
        { date: '2025-05-11', completed: true },
        { date: '2025-05-12', completed: true },
        { date: '2025-05-13', completed: false },
        { date: '2025-05-14', completed: false },
      ],
    },
    {
      name: 'Intermittent Fasting',
      goal: '16:8 window',
      streak: 14,
      days: [
        { date: '2025-05-08', completed: true },
        { date: '2025-05-09', completed: true },
        { date: '2025-05-10', completed: true },
        { date: '2025-05-11', completed: true },
        { date: '2025-05-12', completed: true },
        { date: '2025-05-13', completed: true },
        { date: '2025-05-14', completed: true },
      ],
    },
  ];

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Habit Tracking</CardTitle>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="px-6">
        <div className="flex justify-between items-center mb-2 text-xs text-muted-foreground">
          <span>Habit</span>
          <div className="flex gap-1 pr-1">
            <span>Last 7 days</span>
          </div>
        </div>
        <div className="divide-y">
          {habits.map((habit, index) => (
            <HabitEntry
              key={index}
              name={habit.name}
              goal={habit.goal}
              days={habit.days}
              streak={habit.streak}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitTracker;
