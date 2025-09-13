'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Truck, Map, Activity, Ambulance, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function Dashboard() {
  const activeAmbulances = [
    { id: 'AMB-001', status: 'En-route', location: 'City Center', destination: 'General Hospital', eta: '12 mins' },
    { id: 'AMB-002', status: 'Idle', location: 'Northside Station', destination: '-', eta: '-' },
    { id: 'AMB-003', status: 'En-route', location: 'West Bridge', destination: 'South Clinic', eta: '8 mins' },
    { id: 'AMB-004', status: 'Servicing', location: 'East Suburbs', destination: '-', eta: '-' },
  ];

  const patientData = [
      { status: 'Critical', count: 3 },
      { status: 'Urgent', count: 5 },
      { status: 'Stable', count: 12 },
      { status: 'Monitoring', count: 8 },
  ]
  const activePatients = patientData.reduce((acc, curr) => acc + curr.count, 0);
  const totalPatients = 58;

  const ambulanceStatusData = activeAmbulances.reduce((acc, ambulance) => {
    const status = ambulance.status;
    const existing = acc.find(item => item.status === status);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ status: status, count: 1 });
    }
    return acc;
  }, [] as { status: string; count: number }[]);

  const patientChartConfig = {
    count: {
      label: 'Patients',
    },
    Critical: {
      label: 'Critical',
      color: 'hsl(var(--destructive))',
    },
    Urgent: {
      label: 'Urgent',
      color: 'hsl(var(--chart-1))',
    },
    Stable: {
      label: 'Stable',
      color: 'hsl(var(--chart-2))',
    },
    Monitoring: {
      label: 'Monitoring',
      color: 'hsl(var(--chart-4))',
    },
  };
  
  const ambulanceChartConfig = {
    count: {
      label: "Ambulances",
    },
    'En-route': {
      label: "En-route",
      color: "hsl(var(--chart-2))",
    },
    Idle: {
      label: "Idle",
      color: "hsl(var(--chart-4))",
    },
    Servicing: {
      label: "Servicing",
      color: "hsl(var(--chart-5))",
    },
  };

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{activePatients}</div>
                  <p className="text-xs text-muted-foreground">out of {totalPatients} total</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Ambulances</CardTitle>
                  <Ambulance className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{activeAmbulances.filter(a => a.status === 'En-route').length}</div>
                  <p className="text-xs text-muted-foreground">out of {activeAmbulances.length} total</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Coverage Areas</CardTitle>
                  <Map className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">12 Cities</div>
                  <p className="text-xs text-muted-foreground">Expanding to 3 more next month</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">System Status</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold text-green-400">Operational</div>
                  <p className="text-xs text-muted-foreground">All systems are running smoothly</p>
              </CardContent>
          </Card>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Patient Status Overview</CardTitle>
                    <CardDescription>Distribution of active patient conditions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={patientChartConfig} className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={patientData} accessibilityLayer>
                                <XAxis
                                    dataKey="status"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />
                                <Bar dataKey="count" radius={4}>
                                    {patientData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={patientChartConfig[entry.status as keyof typeof patientChartConfig]?.color} />
                                    ))}
                                 </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ambulance Fleet</CardTitle>
                    <CardDescription>Live status of all ambulances.</CardDescription>
                </CardHeader>
                <CardContent>
                     <ChartContainer config={ambulanceChartConfig} className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent nameKey="status" hideLabel />} />
                                <Pie data={ambulanceStatusData} dataKey="count" nameKey="status" innerRadius={50} outerRadius={80} strokeWidth={5}>
                                    {ambulanceStatusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={ambulanceChartConfig[entry.status as keyof typeof ambulanceChartConfig]?.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
      
       <Card>
          <CardHeader>
              <CardTitle>Ambulance Fleet Status</CardTitle>
              <CardDescription>
                  Live overview of all ambulances in the fleet.
              </CardDescription>
          </CardHeader>
          <CardContent>
              <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                      <thead className="text-xs text-muted-foreground uppercase">
                          <tr>
                              <th scope="col" className="px-6 py-3">ID</th>
                              <th scope="col" className="px-6 py-3">Status</th>
                              <th scope="col" className="px-6 py-3">Current Location</th>
                              <th scope="col" className="px-6 py-3">Destination</th>
                              <th scope="col" className="px-6 py-3">ETA</th>
                          </tr>
                      </thead>
                      <tbody>
                          {activeAmbulances.map(ambulance => (
                              <tr key={ambulance.id} className="border-b">
                                  <td className="px-6 py-4 font-medium">{ambulance.id}</td>
                                  <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${ambulance.status === 'En-route' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                                      {ambulance.status}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4">{ambulance.location}</td>
                                  <td className="px-6 py-4">{ambulance.destination}</td>
                                  <td className="px-6 py-4">{ambulance.eta}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              <div className="flex justify-end pt-4">
                <Button asChild>
                    <Link href="/dashboard/map">
                        View Live Map
                    </Link>
                </Button>
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
