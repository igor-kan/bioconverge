
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader = ({ userName }: DashboardHeaderProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, {userName}</h1>
        <p className="text-muted-foreground">
          Track your health metrics and optimize your longevity
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-input pl-8 py-2 text-sm"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="flex items-center justify-between border-b p-4">
              <span className="text-sm font-medium">Notifications</span>
              <Button variant="ghost" size="sm" className="text-xs">
                Mark all as read
              </Button>
            </div>
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="cursor-pointer p-4 focus:bg-accent">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Supplement Reminder</span>
                  <span className="text-sm text-muted-foreground">
                    Time to take your vitamin D supplement
                  </span>
                  <span className="text-xs text-muted-foreground">2 minutes ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-4 focus:bg-accent">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Biomarker Alert</span>
                  <span className="text-sm text-muted-foreground">
                    Your CRP levels have decreased by 30%
                  </span>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-4 focus:bg-accent">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Habit Streak</span>
                  <span className="text-sm text-muted-foreground">
                    You've completed meditation for 7 days in a row!
                  </span>
                  <span className="text-xs text-muted-foreground">5 hours ago</span>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          {userName.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
