import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const founderRishitha = PlaceHolderImages.find((img) => img.id === 'founder-rishitha');
  const founderAmarnadh = PlaceHolderImages.find((img) => img.id === 'founder-amarnadh');
  
  const founders = [
    {
      ...founderRishitha,
      name: 'Rishitha Karipe',
      title: 'Co-Founder',
    },
    {
      ...founderAmarnadh,
      name: 'Amarnadh Reddy',
      title: 'Co-Founder',
    },
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">About Us</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Zone Adventure Technologies
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to revolutionize emergency response in India by building a robust, technology-driven logistics network. We are committed to saving lives by ensuring that critical medical supplies reach those in need with unparalleled speed and reliability.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
             <h3 className="font-headline text-2xl font-bold tracking-tighter text-center">Our Founders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {founders.map((founder) => (
                <div key={founder.name} className="flex flex-col items-center text-center gap-2">
                  {founder.imageUrl && (
                     <Image
                      src={founder.imageUrl}
                      alt={`Portrait of ${founder.name}`}
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                      data-ai-hint={founder.imageHint}
                    />
                  )}
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">{founder.name}</h4>
                    <p className="text-sm text-muted-foreground">{founder.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
