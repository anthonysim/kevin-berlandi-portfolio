import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [frameCount, setFrameCount] = useState(14);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle 24fps film timecode ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameCount((prev) => (prev + 1) % 24);
    }, 1000 / 8); // Gentle aesthetic tick
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Selected Works', href: '#works' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Credits', href: '#credits' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#09090B]/88 backdrop-blur-md border-b border-[#F2EFE9]/10 py-4'
          : 'bg-gradient-to-b from-[#09090B]/85 via-[#09090B]/35 to-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-12">
        {/* Brand / Director Name */}
        <a href="#top" className="group flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-medium tracking-[0.28em] text-[#F2EFE9] uppercase transition-colors group-hover:text-[#D4A56A]">
              Kevin Berlandi
            </span>
            <span className="font-mono-tech text-[10px] tracking-[0.18em] text-[#8E8B84] uppercase">
              Director · 24FPS · 00:01:{String(frameCount).padStart(2, '0')}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-[#F2EFE9]/75 transition-colors duration-300 hover:text-[#F2EFE9]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 text-[#F2EFE9]/80 hover:text-[#F2EFE9] cursor-pointer"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#F2EFE9]/10 bg-[#09090B]/98 backdrop-blur-xl px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif-display text-2xl tracking-wide text-[#F2EFE9]/90 hover:text-[#D4A56A]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
