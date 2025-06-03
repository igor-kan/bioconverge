
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BiomarkerDataPoint {
  date: string;
  crp: number;
  glucose: number;
  homocysteine: number;
}

const data: BiomarkerDataPoint[] = [
  {
    date: 'Jan',
    crp: 3.8,
    glucose: 110,
    homocysteine: 15.2,
  },
  {
    date: 'Feb',
    crp: 3.2,
    glucose: 105,
    homocysteine: 14.8,
  },
  {
    date: 'Mar',
    crp: 2.8,
    glucose: 102,
    homocysteine: 13.5,
  },
  {
    date: 'Apr',
    crp: 2.3,
    glucose: 96,
    homocysteine: 12.9,
  },
  {
    date: 'May',
    crp: 2.0,
    glucose: 92,
    homocysteine: 11.8,
  },
  {
    date: 'Jun',
    crp: 1.3,
    glucose: 90,
    homocysteine: 10.5,
  },
];

interface BiomarkerChartProps {
  className?: string;
}

const BiomarkerChart = ({ className }: BiomarkerChartProps) => {
  const [activeMarkers, setActiveMarkers] = React.useState({
    crp: true,
    glucose: true,
    homocysteine: true,
  });

  const toggleMarker = (marker: keyof typeof activeMarkers) => {
    setActiveMarkers((prev) => ({
      ...prev,
      [marker]: !prev[marker],
    }));
  };

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Biomarker Trends</CardTitle>
        <Activity className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Button
            size="sm"
            variant={activeMarkers.crp ? "default" : "outline"}
            onClick={() => toggleMarker('crp')}
            className="text-xs h-7 rounded-full"
          >
            CRP
          </Button>
          <Button
            size="sm"
            variant={activeMarkers.glucose ? "default" : "outline"}
            onClick={() => toggleMarker('glucose')}
            className="text-xs h-7 rounded-full"
          >
            Glucose
          </Button>
          <Button
            size="sm"
            variant={activeMarkers.homocysteine ? "default" : "outline"}
            onClick={() => toggleMarker('homocysteine')}
            className="text-xs h-7 rounded-full"
          >
            Homocysteine
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              opacity={0.6}
              domain={[0, 5]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              opacity={0.6}
              domain={[60, 140]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                borderColor: '#eee',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            {activeMarkers.crp && (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="crp"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="CRP"
                unit=" mg/L"
              />
            )}
            {activeMarkers.glucose && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="glucose"
                stroke="#7E69AB"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Glucose"
                unit=" mg/dL"
              />
            )}
            {activeMarkers.homocysteine && (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="homocysteine"
                stroke="#6E59A5"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Homocysteine"
                unit=" μmol/L"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BiomarkerChart;
