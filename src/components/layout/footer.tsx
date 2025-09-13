import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeartPulse, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold font-headline">ZoneAid</span>
            </Link>
            <p className="text-sm text-foreground/80 max-w-xs">
              Join Us in Saving Lives. Let's Build India's Fastest Emergency Support System.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#problem" className="text-sm text-foreground/80 hover:text-foreground">The Problem</Link></li>
              <li><Link href="#solution" className="text-sm text-foreground/80 hover:text-foreground">Our Solution</Link></li>
              <li><Link href="#why-zone" className="text-sm text-foreground/80 hover:text-foreground">Why Zone</Link></li>
              <li><Link href="/dashboard" className="text-sm text-foreground/80 hover:text-foreground">Dashboard</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Contact Us</h4>
            <p className="text-sm text-foreground/80">
              For inquiries, email us at: <a href="mailto:contact@zoneaid.com" className="underline">contact@zoneaid.com</a>
            </p>
            <div className="flex space-x-2 pt-2">
                <Link href="#"><Twitter className="h-5 w-5 text-foreground/80 hover:text-foreground" /></Link>
                <Link href="#"><Linkedin className="h-5 w-5 text-foreground/80 hover:text-foreground" /></Link>
                <Link href="#"><Facebook className="h-5 w-5 text-foreground/80 hover:text-foreground" /></Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Stay Updated</h4>
            <p className="text-sm text-foreground/80">Subscribe to our newsletter for updates.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Zone Adventure Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
