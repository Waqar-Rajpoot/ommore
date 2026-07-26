'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the drawer on route change. Adjusted during render (React's
  // recommended pattern) rather than in an effect, to avoid an extra
  // cascading render on every navigation.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] border-b transition-colors duration-300 ${
        scrolled
          ? 'border-border-glass bg-glass shadow-glass backdrop-blur-nav backdrop-saturate-[180%]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="flex h-[72px] items-center justify-between px-20 max-md:h-16 max-md:px-5">
        <Link href="/" className="font-display text-lg font-semibold text-text-primary">
          Ommore
        </Link>

        <nav className="flex items-center gap-8 max-lg:hidden" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 max-lg:hidden">
          <Link
            href="/test-our-agent"
            className="rounded-lg border-[1.5px] border-border-glow px-5 py-2.5 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary-muted"
          >
            Test Our Agent
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-5 py-2.5 font-display text-sm font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="hidden items-center justify-center rounded-lg p-2 text-text-primary max-lg:flex"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 top-16 z-[999] lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
          className={`absolute inset-0 bg-base/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`relative ml-auto flex h-full w-full max-w-xs flex-col gap-1 border-l border-border-glass bg-surface p-6 shadow-glass transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-primary-muted text-primary'
                  : 'text-text-secondary hover:bg-glass hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3 border-t border-border-glass pt-4">
            <Link
              href="/test-our-agent"
              className="rounded-lg border-[1.5px] border-border-glow px-5 py-2.5 text-center font-display text-sm font-semibold text-primary transition-colors hover:bg-primary-muted"
            >
              Test Our Agent
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-5 py-2.5 text-center font-display text-sm font-semibold text-white shadow-glow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}