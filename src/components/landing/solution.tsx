import { Droplets, Stethoscope, Ambulance, Hospital, Activity } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Droplets,
      title: '15-Minute Blood Delivery',
      description: 'Rapid transport of blood from banks directly to homes or hospitals, ensuring critical supplies arrive when they are needed most.',
    },
    {
      icon: Stethoscope,
      title: '30-Minute Emergency Medicine',
      description: 'Guaranteed delivery of critical emergency drugs within half an hour, bridging the gap in urgent pharmaceutical needs.',
    },
    {
      icon: Ambulance,
      title: 'Ambulance Live Tracking',
      description: 'Real-time GPS tracking and updates for ambulance movements, providing reassurance and transparency to patients and their families.',
    },
    {
      icon: Hospital,
      title: 'Dedicated Hospital Logistics Rooms',
      description: 'Exclusive Zone logistics rooms within partnered hospitals for seamless, on-demand supply management and coordination.',
    },
    {
      icon: Activity,
      title: 'Seamless Inter-Hospital Transport',
      description: 'Secure and efficient transfer of critical supplies like organs, blood, and equipment between different hospital facilities.',
    },
  ];

  return (
    <section id="solution" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Our Solution</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Precision &amp; Speed When It Matters Most
          </h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ZoneAid offers a comprehensive, integrated approach to emergency medical logistics, ensuring that help arrives faster.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6 text-center transition-all hover:shadow-lg">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <feature.icon className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
