import React from 'react';
import { ArrowDown, Film, Play, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  customMediaUrl?: string;
  isVideo?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  customMediaUrl,
  isVideo = false,
}) => {
  const defaultHeroImage = '/src/assets/images/hero_cinematic_atmosphere_1793930227102.jpg';
  const backgroundMedia = customMediaUrl || defaultHeroImage;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center text-center px-6 pt-28 pb-12 overflow-hidden bg-[#0B0B0D]">
      {/* Background Media Container with Cinematic Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isVideo && customMediaUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
            src={customMediaUrl}
          />
        ) : (
          <img
            src={backgroundMedia}
            alt="Cinematic Studio Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-1000"
          />
        )}

        {/* Cinematic Multi-layered Vignettes & Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B0D_85%)]" />
        <div className="absolute inset-0 cinematic-grain opacity-60" />

        {/* Ambient subtle light glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8A56A]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Top spacer */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between text-xs tracking-widest text-[#A5A5AD] z-10 pt-4 opacity-75">
        <span className="font-display">SEOUL, KR</span>
        <span className="font-display">PORTFOLIO ARCHIVE</span>
      </div>

      {/* Main Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto flex flex-col items-center">
        {/* Brand Kicker */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C8A56A]/60" />
          <h2 className="text-xs md:text-sm font-display tracking-[0.35em] text-[#C8A56A] uppercase font-medium">
            SEON CREATIVE STUDIO
          </h2>
          <span className="h-px w-8 bg-[#C8A56A]/60" />
        </div>

        {/* Main Korean Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F4F0E8] leading-[1.3] md:leading-[1.25] tracking-tight mb-8">
          <span className="block font-normal">상상을 이야기로,</span>
          <span className="block font-medium text-[#F4F0E8] mt-1">이야기를 작품으로.</span>
        </h1>

        {/* Sub-tagline */}
        <p className="text-xs sm:text-sm md:text-base font-display tracking-[0.25em] text-[#A5A5AD] uppercase max-w-xl mx-auto mb-10 leading-relaxed font-light">
          AI FILM · MUSIC · STORYTELLING · DESIGN
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C8A56A] text-[#0B0B0D] font-display text-xs tracking-widest font-semibold hover:bg-[#d8b87f] transition-all duration-300 rounded shadow-lg shadow-[#C8A56A]/10 whitespace-nowrap"
          >
            EXPLORE WORKS
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#17171B]/80 hover:bg-[#17171B] border border-[#27272E] text-[#F4F0E8] font-display text-xs tracking-widest hover:border-[#C8A56A]/50 transition-all duration-300 rounded whitespace-nowrap"
          >
            THE PERSON BEHIND
          </a>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-6">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-[#A5A5AD] hover:text-[#C8A56A] transition-colors"
          aria-label="아래로 스크롤하여 더 알아보기"
        >
          <span className="text-[10px] font-display tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            SCROLL TO DISCOVER
          </span>
          <div className="w-5 h-8 rounded-full border border-[#A5A5AD]/40 flex items-start justify-center p-1 group-hover:border-[#C8A56A]/70 transition-colors">
            <div className="w-1 h-2 bg-[#C8A56A] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
