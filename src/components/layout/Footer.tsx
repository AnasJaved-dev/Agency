import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="content-wrapper">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between gap-8 py-12">
          {/* Agency Info */}
          <section className="w-[22%] min-w-[200px] space-y-4">
            <Link href="/" className="text-heading-3 text-foreground">
              Agency
            </Link>
            <p className="text-body text-muted-foreground">
              Transforming digital presence through innovative solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Quick Links */}
          <nav className="w-[22%] min-w-[200px] space-y-4" aria-label="Quick Links">
            <h3 className="text-heading-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="w-[22%] min-w-[200px] space-y-4" aria-label="Services">
            <h3 className="text-heading-4 font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/youtube-growth" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  YouTube Growth
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/content-creation" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  Social Media
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="w-[22%] min-w-[200px] not-italic space-y-4">
            <h3 className="text-heading-4 font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="text-body text-muted-foreground">
                Email:{' '}
                <a href="mailto:info@agency.com" className="hover:text-primary transition-colors">
                  info@agency.com
                </a>
              </li>
              <li className="text-body text-muted-foreground">
                Phone:{' '}
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-body text-muted-foreground">
                Address: 123 Digital Street, Tech City
              </li>
            </ul>
          </address>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6">
          <p className="text-body-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
