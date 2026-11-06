import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectDetail } from '../data/portfolioData';
import { ArrowUpRight, Film, BookOpen, Music, GraduationCap } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'ALL WORKS' },
    { key: 'film', label: 'AI CINEMATIC FILMS' },
    { key: 'storybook', label: 'PICTURE BOOK & ANIMATION' },
    { key: 'music', label: 'AI MUSIC' },
    { key: 'education', label: 'MIND & EDUCATION' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'film':
        return <Film className="w-3.5 h-3.5 text-[#C8A56A]" />;
      case 'storybook':
        return <BookOpen className="w-3.5 h-3.5 text-[#C8A56A]" />;
      case 'music':
        return <Music className="w-3.5 h-3.5 text-[#C8A56A]" />;
      case 'education':
        return <GraduationCap className="w-3.5 h-3.5 text-[#C8A56A]" />;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="relative py-28 px-6 bg-[#0B0B0D] border-t border-[#17171B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-display tracking-[0.3em] text-[#C8A56A] uppercase mb-2 block">
              SELECTED WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-[#F4F0E8] tracking-tight">
              PORTFOLIO & CREATIVE ARCHIVE
            </h2>
            <div className="w-12 h-0.5 bg-[#C8A56A] mt-4" />
          </div>

          <p className="text-xs sm:text-sm text-[#A5A5AD] max-w-md font-light">
            AI 영상, 음악, 동화책, 교육 프레젠테이션까지—사람의 감성과 깊은 서사를 중심으로 완성해가는 창작 포트폴리오입니다.
          </p>
        </div>

        {/* Category Filter Bar (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs font-display tracking-wider rounded transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#C8A56A] text-[#0B0B0D] font-semibold shadow-md'
                  : 'bg-[#17171B] text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#202026] border border-[#27272E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Poster Card Grid: 2x2 or 4-columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-xl overflow-hidden bg-[#17171B] border border-[#27272E] hover:border-[#C8A56A]/60 transition-all duration-500 cursor-pointer shadow-xl flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              aria-label={`${project.title} 상세 보기`}
            >
              {/* Media Poster Frame (4:3 aspect) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0B0D]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17171B] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Corner Category Label */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded bg-[#0B0B0D]/80 backdrop-blur-md border border-[#27272E] text-[11px] font-display tracking-widest text-[#F4F0E8]">
                  {getCategoryIcon(project.category)}
                  <span>{project.categoryLabel}</span>
                </div>

                {/* Top Corner Action Indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0B0D]/80 backdrop-blur-md border border-[#27272E] flex items-center justify-center text-[#A5A5AD] group-hover:text-[#0B0B0D] group-hover:bg-[#C8A56A] group-hover:border-[#C8A56A] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#17171B]">
                <div>
                  <span className="text-[11px] font-display tracking-widest text-[#C8A56A] uppercase font-semibold block mb-1">
                    {project.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F4F0E8] group-hover:text-[#C8A56A] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A5AD] font-light leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Metadata Row: Themes */}
                <div className="pt-4 border-t border-[#27272E]/60 flex items-center justify-between text-xs text-[#A5A5AD]">
                  <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    <span>{project.themes.slice(0, 3).join(' · ')}</span>
                  </div>
                  <span className="font-display text-[11px] text-[#C8A56A] group-hover:translate-x-0.5 transition-transform shrink-0">
                    DETAILS →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honesty & Transparency Footer Note */}
        <div className="mt-12 p-4 rounded-lg bg-[#17171B]/40 border border-[#27272E] text-center">
          <p className="text-xs text-[#A5A5AD] leading-relaxed">
            ※ 각 프로젝트는 현재 콘셉트 보드 및 파일럿 단계이며, 카드를 클릭하시면 상세 기획 의도와 제작 파이프라인을 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
