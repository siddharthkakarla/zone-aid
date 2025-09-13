import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock, Hospital, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Tragic Delays',
      description: 'Over 40,000 road accident deaths annually in India are linked to delays in receiving timely blood or critical medical aid.',
    },
    {
      icon: Clock,
      title: 'Lack of Immediate Access',
      description: 'Blood and first-aid supplies are often unavailable on-site or in transit, severely impacting survival rates during the "golden hour".',
    },
    {
      icon: Hospital,
      title: 'Hospital Bottlenecks',
      description: 'Inefficient inter-facility logistics cause critical delays in transferring vital supplies between hospitals, wasting precious time.',
    },
    {
      icon: Users,
      title: 'Family Distress',
      description: 'Families face immense stress and inefficiency while trying to arrange help due to a lack of integrated support systems.',
    },
  ];

  return (
    <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">The Problem</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              The Urgent Need: Bridging the 'Golden Hour' Gap
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              India's emergency response system faces critical challenges, especially within the "golden hour" where timely medical intervention can be the difference between life and death.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {problems.map((problem, index) => (
            <Card key={index} className="h-full bg-card">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <problem.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-lg font-bold">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
