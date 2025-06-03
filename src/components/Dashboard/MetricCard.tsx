
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeText?: string;
  icon: React.ReactNode;
  className?: string;
}

const MetricCard = ({
  title,
  value,
  change,
  changeText,
  icon,
  className,
}: MetricCardProps) => {
  return (
    <Card
      className={cn(
        'transition-all hover:shadow-md overflow-hidden',
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
            {(change !== undefined || changeText) && (
              <div className="flex items-center mt-2 text-sm">
                {change !== undefined && (
                  <>
                    {change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={cn(
                        change > 0 ? 'text-green-500' : 'text-red-500',
                        'mr-1'
                      )}
                    >
                      {Math.abs(change)}%
                    </span>
                  </>
                )}
                {changeText && (
                  <span className="text-muted-foreground">{changeText}</span>
                )}
              </div>
            )}
          </div>
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
