import { Briefcase, Users, Handshake } from 'lucide-react';

export default function BusinessModel() {
  const revenueStreams = [
    {
      icon: Briefcase,
      title: 'B2B Hospital Subscriptions',
      description: 'Hospitals subscribe to our platform for dedicated logistics rooms and seamless supply chain management.',
    },
    {
      icon: Users,
      title: 'B2C Pay-Per-Use',
      description: 'Individuals can request emergency deliveries of blood and medicine on a pay-per-use basis.',
    },
    {
      icon: Handshake,
      title: 'Partnerships',
      description: 'Collaborations with NGOs, ambulance services, and other organizations to expand our reach and impact.',
    },
  ];

  return (
    <section id="business-model" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Business Model</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Sustainable Growth: A Dual-Revenue Model
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our dual-revenue model ensures long-term sustainability and scalability, allowing us to continuously expand our life-saving services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="grid gap-2 text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-4 text-primary">
                <stream.icon className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-lg font-bold">{stream.title}</h3>
              <p className="text-sm text-foreground/80">{stream.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
