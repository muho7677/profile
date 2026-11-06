import React, { useState, useEffect } from 'react';
import { Sliders, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenCustomizer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCustomizer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORKS', href: '#portfolio' },
    { label: 'PROCESS', href: '#process' },
    { label: 'WORKFLOW', href: '#workflow' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#17171B]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-display font-bold tracking-wider text-[#F4F0E8] hover:text-[#C8A56A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>SEON CREATIVE STUDIO</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-display tracking-widest text-[#A5A5AD]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F4F0E8] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                className="p-2 text-[#A5A5AD] hover:text-[#C8A56A] hover:bg-[#17171B] rounded transition-colors"
                title="스튜디오 미디어 & 정보 설정"
                aria-label="스튜디오 설정 열기"
              >
                <Sliders className="w-4 h-4" />
              </button>
            )}

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-display tracking-wider font-semibold text-[#0B0B0D] bg-[#C8A56A] hover:bg-[#d8b87f] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F4F0E8] hover:text-[#C8A56A] transition-colors"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0B0B0D]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium tracking-wider text-[#F4F0E8] hover:text-[#C8A56A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#17171B] flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-display tracking-widest font-semibold text-[#0B0B0D] bg-[#C8A56A] rounded"
            >
              CONNECT WITH SEON
            </a>
            <p className="text-xs text-[#A5A5AD] text-center">
              상상을 이야기로, 이야기를 작품으로.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
