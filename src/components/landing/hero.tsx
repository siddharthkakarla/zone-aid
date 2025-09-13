import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative w-full overflow-hidden bg-card pt-16 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transforming Emergency Logistics to Save Lives, One Rapid Delivery at a Time.
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                Building India's #1 emergency logistics platform, focused on saving lives with unmatched speed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#solution">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/dashboard">Get Help Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] w-full sm:h-[400px] lg:h-auto">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="rounded-xl object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-16 h-20 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
