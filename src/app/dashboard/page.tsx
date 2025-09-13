'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, FileText, MessageSquare, ArrowRight, Activity, Droplets, Wind, Weight, Bell, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function Dashboard() {

  const quickAccessLinks = [
    { title: "Book an Appointment", description: "Find a doctor and schedule a visit", icon: Stethoscope, href: "/dashboard/appointments" },
    { title: "View Prescriptions", description: "Access your recent prescriptions", icon: FileText, href: "/dashboard/prescriptions" },
    { title: "Check Symptoms", description: "Use the AI checker for insights", icon: Activity, href: "/dashboard/symptom-checker" },
    { title: "Contact Support", description: "Get help with your account", icon: MessageSquare, href: "#" },
  ];

  const vitalData = [
    { date: "Mon", bp: 120, sugar: 90 },
    { date: "Tue", bp: 122, sugar: 95 },
    { date: "Wed", bp: 118, sugar: 88 },
    { date: "Thu", bp: 125, sugar: 105 },
    { date: "Fri", bp: 121, sugar: 92 },
    { date: "Sat", bp: 119, sugar: 94 },
    { date: "Sun", bp: 120, sugar: 91 },
  ];

  const chartConfig = {
    bp: { label: "Blood Pressure", color: "hsl(var(--chart-1))" },
    sugar: { label: "Blood Sugar", color: "hsl(var(--chart-2))" },
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120/80 <span className="text-sm font-normal text-muted-foreground">mmHg</span></div>
            <p className="text-xs text-muted-foreground">Last updated: 1h ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blood Sugar</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94 <span className="text-sm font-normal text-muted-foreground">mg/dL</span></div>
            <p className="text-xs text-muted-foreground">Fasting, 2h ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 <span className="text-sm font-normal text-muted-foreground">bpm</span></div>
            <p className="text-xs text-muted-foreground">Normal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Weight</CardTitle>
            <Weight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75 <span className="text-sm font-normal text-muted-foreground">kg</span></div>
            <p className="text-xs text-muted-foreground">+0.5 kg from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Health Summary</CardTitle>
            <CardDescription>A summary of your key health vitals over the last week.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <LineChart data={vitalData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Line
                  dataKey="bp"
                  type="monotone"
                  stroke="var(--color-bp)"
                  strokeWidth={2}
                  dot={true}
                />
                <Line
                  dataKey="sugar"
                  type="monotone"
                  stroke="var(--color-sugar)"
                  strokeWidth={2}
                  dot={true}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
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
        </div>
      </div>
      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
              <CardHeader>
                  <CardTitle>Upcoming Reminders</CardTitle>
                  <CardDescription>
                      Medication and appointment reminders.
                  </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                      <Bell className="h-5 w-5 text-primary mt-1" />
                      <div>
                          <p className="font-medium">Appointment with Dr. Smith</p>
                          <p className="text-sm text-muted-foreground">Tomorrow at 10:30 AM - Cardiology</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                      <Bell className="h-5 w-5 text-primary mt-1" />
                      <div>
                          <p className="font-medium">Take Metformin</p>
                          <p className="text-sm text-muted-foreground">Today at 9:00 PM</p>
                      </div>
                  </div>
              </CardContent>
          </Card>
           <Card>
              <CardHeader>
                  <CardTitle>Data & Privacy</CardTitle>
                  <CardDescription>
                      Your information is secure and encrypted.
                  </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-4 p-3 rounded-lg bg-green-100/50 dark:bg-green-900/20">
                      <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <div>
                          <p className="font-medium text-green-700 dark:text-green-300">HIPAA & GDPR Compliant</p>
                          <p className="text-sm text-muted-foreground">We follow strict data privacy regulations.</p>
                      </div>
                  </div>
                  <Button asChild variant="outline">
                      <Link href="/dashboard/privacy">
                          Manage Privacy Settings
                      </Link>
                  </Button>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}