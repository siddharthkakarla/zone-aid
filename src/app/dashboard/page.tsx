'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Droplets, Clock, ArrowRight, Ambulance, Activity, CheckCircle, AlertTriangle, Pill } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function Dashboard() {

  const quickAccessLinks = [
    { title: "Request Blood", description: "Order emergency blood supplies", icon: Droplets, href: "/dashboard/blood-delivery" },
    { title: "Request Medicine", description: "Order critical medicines", icon: Pill, href: "/dashboard/medicine-delivery" },
    { title: "Track Ambulance", description: "Live tracking of ambulances", icon: Ambulance, href: "/dashboard/ambulance-live-tracking" },
    { title: "Optimize Path", description: "AI-powered route optimization", icon: Activity, href: "/dashboard/optimize" },
  ];

  const deliveryData = [
    { type: "Blood", delivered: 120, failed: 5, avgTime: 12.5 },
    { type: "Medicine", delivered: 80, failed: 2, avgTime: 25.2 },
    { type: "Equipment", delivered: 45, failed: 1, avgTime: 45.0 },
    { type: "Organs", delivered: 5, failed: 0, avgTime: 60.0 },
  ];

  const ambulanceStatusData = [
    { name: 'Available', value: 15, fill: 'var(--color-available)' },
    { name: 'On-call', value: 8, fill: 'var(--color-oncall)' },
    { name: 'Servicing', value: 2, fill: 'var(--color-servicing)' },
  ];

  const deliveryChartConfig = {
    delivered: { label: "Delivered", color: "hsl(var(--chart-1))" },
  }
  
  const ambulanceChartConfig = {
      value: { label: "Ambulances" },
      available: { label: "Available", color: "hsl(var(--chart-2))" },
      oncall: { label: "On Call", color: "hsl(var(--chart-1))" },
      servicing: { label: "Servicing", color: "hsl(var(--chart-3))" },
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Blood Delivery</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12m 30s</div>
            <p className="text-xs text-muted-foreground">Within 15 min target</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">All deliveries</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">2</div>
            <p className="text-xs text-muted-foreground">High-traffic zones</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Deliveries Overview</CardTitle>
            <CardDescription>A summary of deliveries by type for this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={deliveryChartConfig} className="h-[250px] w-full">
              <BarChart data={deliveryData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <XAxis dataKey="type" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="delivered" fill="var(--color-delivered)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Ambulance Status</CardTitle>
                 <CardDescription>Live status of the ambulance fleet.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={ambulanceChartConfig} className="h-[250px] w-full">
                   <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={ambulanceStatusData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} strokeWidth={5}>
                             {ambulanceStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>
      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
              <CardHeader>
                  <CardTitle>Quick Access</CardTitle>
                  <CardDescription>
                      Shortcuts to common actions.
                  </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {quickAccessLinks.map((link) => (
                    <Link
                    key={link.title}
                    href={link.href}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-background rounded-md">
                        <link.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                        <p className="font-semibold">{link.title}</p>
                        </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
                ))}
            </CardContent>
          </Card>
           <Card>
              <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>
                      Current operational status of all systems.
                  </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-4 p-3 rounded-lg bg-green-100/50 dark:bg-green-900/20">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <div>
                          <p className="font-medium text-green-700 dark:text-green-300">All Systems Operational</p>
                          <p className="text-sm text-muted-foreground">Logistics, tracking, and communication are online.</p>
                      </div>
                  </div>
                   <Button asChild variant="outline">
                      <Link href="#">
                          View Status Page
                      </Link>
                  </Button>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
