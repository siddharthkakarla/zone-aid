import { Zap, Link, ShieldCheck, TrendingUp, HeartPulse } from 'lucide-react';

export default function WhyZone() {
  const usps = [
    {
      icon: Zap,
      title: 'Unrivaled Speed',
      description: 'We guarantee 15-minute blood and 30-minute medicine deliveries, setting a new standard in emergency response time.',
    },
    {
      icon: Link,
      title: 'Deep Hospital Integration',
      description: 'Our unique exclusive logistics room model streamlines hospital operations, ensuring seamless and efficient supply management.',
    },
    {
      icon: ShieldCheck,
      title: 'Comprehensive Emergency Chain',
      description: 'From on-site first-aid to inter-hospital transfers, we cover the full spectrum of emergency needs with a holistic solution.',
    },
    {
      icon: TrendingUp,
      title: 'Pan-India Scalability',
      description: 'Our model is built for rapid expansion, with a clear vision to create a widespread impact across the nation.',
    },
  ];

  return (
    <section id="why-zone" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Why Zone</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Unmatched Value in Every Critical Moment
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the distinct advantages that make ZoneAid the leading choice for emergency logistics.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              {usps.map((usp, index) => (
                <li key={index}>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                       <usp.icon className="h-6 w-6 text-primary" />
                       <h3 className="font-headline text-xl font-bold">{usp.title}</h3>
                    </div>
                    <p className="text-foreground/80">{usp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex h-[300px] w-full items-center justify-center sm:h-[400px]">
            <div className="absolute z-10 flex h-48 w-48 items-center justify-center rounded-full bg-primary/20">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/30">
                <HeartPulse className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="absolute h-64 w-64 animate-pulse rounded-full border-2 border-dashed border-primary/50" />
            <div className="absolute h-80 w-80 animate-pulse rounded-full border-2 border-dashed border-primary/30" style={{animationDelay: '0.5s'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}
