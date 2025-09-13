import Hero from '@/components/landing/hero';
import Problem from '@/components/landing/problem';
import Solution from '@/components/landing/solution';
import WhyZone from '@/components/landing/why-zone';
import BusinessModel from '@/components/landing/business-model';
import Partners from '@/components/landing/partners';
import About from '@/components/landing/about';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <WhyZone />
        <BusinessModel />
        <Partners />
        <About />
      </main>
      <Footer />
    </div>
  );
}
