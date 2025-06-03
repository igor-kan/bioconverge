
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Brain,
  Heart,
  Clock,
  Scale,
  Calendar,
  Pill,
  User,
  Settings,
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all',
        active
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-secondary/50 text-muted-foreground hover:text-secondary-foreground'
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

interface SidebarProps {
  className?: string;
  activePath: string;
}

const Sidebar = ({ className, activePath }: SidebarProps) => {
  const routes = [
    {
      icon: <Brain className="h-5 w-5" />,
      label: 'Dashboard',
      href: '/',
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: 'Biomarkers',
      href: '/biomarkers',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Circadian',
      href: '/circadian',
    },
    {
      icon: <Scale className="h-5 w-5" />,
      label: 'Habits',
      href: '/habits',
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: 'Routines',
      href: '/routines',
    },
    {
      icon: <Pill className="h-5 w-5" />,
      label: 'Supplements',
      href: '/supplements',
    },
    {
      icon: <User className="h-5 w-5" />,
      label: 'Profile',
      href: '/profile',
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: 'Settings',
      href: '/settings',
    },
  ];

  return (
    <div
      className={cn(
        'flex h-full w-60 flex-col border-r bg-sidebar p-4',
        className
      )}
    >
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="rounded-md bg-primary p-2 text-primary-foreground">
          <Brain className="h-5 w-5" />
        </div>
        <h2 className="font-semibold text-lg">BioPrime</h2>
      </div>
      <nav className="flex flex-col gap-1 mt-8">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
            active={activePath === route.href}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
