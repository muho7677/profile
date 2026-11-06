import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-[#08080A] border-t border-[#17171B] text-[#A5A5AD]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-base font-display font-semibold tracking-wider text-[#F4F0E8]">
            SEON CREATIVE STUDIO
          </span>
          <p className="text-xs text-[#A5A5AD] mt-1">
            상상을 이야기로, 이야기를 작품으로.
          </p>
          <span className="text-[11px] text-[#A5A5AD]/60 mt-2 font-display">
            CREATOR SEON GWI-SEONG · ALL RIGHTS RESERVED
          </span>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-display tracking-widest text-[#A5A5AD]">
          <a href="#about" className="hover:text-[#F4F0E8] transition-colors">
            ABOUT
          </a>
          <a href="#portfolio" className="hover:text-[#F4F0E8] transition-colors">
            WORKS
          </a>
          <a href="#process" className="hover:text-[#F4F0E8] transition-colors">
            PROCESS
          </a>
          <a href="#workflow" className="hover:text-[#F4F0E8] transition-colors">
            WORKFLOW
          </a>
          <a href="#contact" className="hover:text-[#F4F0E8] transition-colors">
            CONTACT
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#17171B] hover:bg-[#C8A56A] text-[#A5A5AD] hover:text-[#0B0B0D] border border-[#27272E] transition-all"
          aria-label="맨 위로 이동"
          title="페이지 최상단으로 이동"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
