
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Clock } from 'lucide-react';

interface ChartDataPoint {
  time: string;
  temperature: number;
  melatonin: number;
  cortisol: number;
}

const data: ChartDataPoint[] = [
  { time: '12am', temperature: 36.5, melatonin: 80, cortisol: 5 },
  { time: '3am', temperature: 36.2, melatonin: 95, cortisol: 2 },
  { time: '6am', temperature: 36.4, melatonin: 70, cortisol: 25 },
  { time: '9am', temperature: 36.7, melatonin: 20, cortisol: 90 },
  { time: '12pm', temperature: 37.0, melatonin: 5, cortisol: 65 },
  { time: '3pm', temperature: 37.1, melatonin: 2, cortisol: 45 },
  { time: '6pm', temperature: 36.9, melatonin: 8, cortisol: 30 },
  { time: '9pm', temperature: 36.6, melatonin: 50, cortisol: 8 },
];

const CircadianChart = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          Circadian Rhythm Analysis
        </CardTitle>
        <Clock className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          The harmony between your body temperature, melatonin, and cortisol levels over a 24-hour cycle
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorMelatonin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorCortisol" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6E59A5" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              opacity={0.6}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                borderColor: '#eee',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#9b87f5"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTemperature)"
              name="Body Temperature"
              unit="°C"
            />
            <Area
              type="monotone"
              dataKey="melatonin"
              stroke="#7E69AB"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMelatonin)"
              name="Melatonin"
              unit="%"
            />
            <Area
              type="monotone"
              dataKey="cortisol"
              stroke="#6E59A5"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCortisol)"
              name="Cortisol"
              unit="%"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex justify-center mt-4 gap-4">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#9b87f5] mr-2"></div>
            <span className="text-xs text-muted-foreground">Temperature</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#7E69AB] mr-2"></div>
            <span className="text-xs text-muted-foreground">Melatonin</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#6E59A5] mr-2"></div>
            <span className="text-xs text-muted-foreground">Cortisol</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CircadianChart;
