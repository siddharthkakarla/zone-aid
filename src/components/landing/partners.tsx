import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Hospital, HeartHandshake, Ambulance, User } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'Hospitals', icon: Hospital },
    { name: 'NGOs', icon: HeartHandshake },
    { name: 'Ambulance Services', icon: Ambulance },
    { name: 'Individuals', icon: User },
  ];

  return (
    <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Our Reach</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Impacting Lives Across the Ecosystem
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are building a robust, interconnected network of hospitals, individuals, ambulance services, and NGOs to create a comprehensive support system for emergencies.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid w-full grid-cols-2 md:grid-cols-4 items-center justify-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center justify-center gap-4 p-6 sm:p-8">
                <div className="rounded-full border-2 border-primary/20 bg-primary/10 p-4 text-primary">
                  <partner.icon className="h-10 w-10" />
                </div>
                <p className="mt-2 font-semibold font-headline text-lg">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
