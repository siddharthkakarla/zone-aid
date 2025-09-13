'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeartPulse } from 'lucide-react';

export default function SplashScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      router.push('/landing');
    }, 2000); 
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={`flex h-screen w-full items-center justify-center bg-background transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center gap-4">
        <HeartPulse className="h-16 w-16 animate-pulse text-primary" />
        <h1 className="font-headline text-4xl font-bold">ZoneAid</h1>
        <p className="text-muted-foreground">Transforming Emergency Logistics</p>
      </div>
    </div>
  );
}
