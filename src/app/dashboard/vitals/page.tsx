'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Droplets, Weight, PlusCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const bpData = [
  { name: 'Jan', value: 120 }, { name: 'Feb', value: 122 }, { name: 'Mar', value: 118 },
  { name: 'Apr', value: 125 }, { name: 'May', value: 121 }, { name: 'Jun', value: 123 },
];

const sugarData = [
  { name: 'Jan', value: 90 }, { name: 'Feb', value: 95 }, { name: 'Mar', value: 88 },
  { name: 'Apr', value: 105 }, { name: 'May', value: 92 }, { name: 'Jun', value: 98 },
];

const weightData = [
  { name: 'Jan', value: 78 }, { name: 'Feb', value: 77.5 }, { name: 'Mar', value: 77 },
  { name: 'Apr', value: 76 }, { name: 'May', value: 75.5 }, { name: 'Jun', value: 75 },
];

const chartConfig = {
  value: { label: "Value" },
  bp: { label: "Blood Pressure", color: "hsl(var(--chart-1))" },
  sugar: { label: "Blood Sugar", color: "hsl(var(--chart-2))" },
  weight: { label: "Weight", color: "hsl(var(--chart-3))" },
};

export default function VitalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-2xl font-bold">Health Vitals</h1>
          <p className="text-muted-foreground">Track your key health metrics over time.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Log New Vitals
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Activity className="h-5 w-5 text-primary" />
                Blood Pressure (Systolic)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">123 <span className="text-base font-normal text-muted-foreground">mmHg</span></p>
              <p className="text-xs text-muted-foreground mt-1">Last Log: Today</p>
              <ChartContainer config={chartConfig} className="h-[150px] w-full mt-4">
                <LineChart data={bpData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                  <Tooltip content={<ChartTooltipContent hideIndicator hideLabel />} />
                  <Line type="monotone" dataKey="value" stroke="var(--color-bp)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Droplets className="h-5 w-5 text-primary" />
                Blood Sugar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">98 <span className="text-base font-normal text-muted-foreground">mg/dL</span></p>
              <p className="text-xs text-muted-foreground mt-1">Last Log: Today (Fasting)</p>
               <ChartContainer config={chartConfig} className="h-[150px] w-full mt-4">
                <LineChart data={sugarData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                  <Tooltip content={<ChartTooltipContent hideIndicator hideLabel />} />
                  <Line type="monotone" dataKey="value" stroke="var(--color-sugar)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Weight className="h-5 w-5 text-primary" />
                Weight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">75 <span className="text-base font-normal text-muted-foreground">kg</span></p>
              <p className="text-xs text-muted-foreground mt-1">Goal: 72 kg</p>
               <ChartContainer config={chartConfig} className="h-[150px] w-full mt-4">
                <LineChart data={weightData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                  <Tooltip content={<ChartTooltipContent hideIndicator hideLabel />} />
                  <Line type="monotone" dataKey="value" stroke="var(--color-weight)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
