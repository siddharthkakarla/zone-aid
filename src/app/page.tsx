import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/landing/hero';
import Problem from '@/components/landing/problem';
import Solution from '@/components/landing/solution';
import WhyZone from '@/components/landing/why-zone';
import Partners from '@/components/landing/partners';
import BusinessModel from '@/components/landing/business-model';
import About from '@/components/landing/about';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <WhyZone />
        <Partners />
        <BusinessModel />
        <About />
      </main>
      <Footer />
    </div>
  );
}
