import React, { useState } from 'react';
import { CREATIVE_TOOLS_DATA } from '../data/portfolioData';
import { Sparkles, Film, Music, Palette, BookOpen, Layers } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'ALL TOOLS' },
    { key: 'AI Engine', label: 'AI & NARRATIVE' },
    { key: 'Video & Motion', label: 'VIDEO & MOTION' },
    { key: 'Music & Sound', label: 'MUSIC & SOUND' },
    { key: 'Design & Art', label: 'DESIGN & ART' },
    { key: 'Publishing', label: 'PUBLISHING' },
  ];

  const filteredTools =
    selectedCategory === 'all'
      ? CREATIVE_TOOLS_DATA
      : CREATIVE_TOOLS_DATA.filter((tool) => tool.category === selectedCategory);

  const getToolIcon = (category: string) => {
    switch (category) {
      case 'AI Engine':
        return <Sparkles className="w-4 h-4 text-[#C8A56A]" />;
      case 'Video & Motion':
        return <Film className="w-4 h-4 text-[#C8A56A]" />;
      case 'Music & Sound':
        return <Music className="w-4 h-4 text-[#C8A56A]" />;
      case 'Design & Art':
        return <Palette className="w-4 h-4 text-[#C8A56A]" />;
      case 'Publishing':
        return <BookOpen className="w-4 h-4 text-[#C8A56A]" />;
      default:
        return <Layers className="w-4 h-4 text-[#C8A56A]" />;
    }
  };

  return (
    <section id="workflow" className="relative py-28 px-6 bg-[#0B0B0D] border-t border-[#17171B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-display tracking-[0.3em] text-[#C8A56A] uppercase mb-2 block">
              TECH STACK & PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-[#F4F0E8] tracking-tight">
              TOOLS & CREATIVE WORKFLOW
            </h2>
            <div className="w-12 h-0.5 bg-[#C8A56A] mt-4" />
          </div>

          <p className="text-xs sm:text-sm text-[#A5A5AD] max-w-md font-light">
            최신 생성형 AI 모델과 전문 디자인·영상 소프트웨어를 융합하여, 기획부터 마스터링까지 독립적으로 완성하는 크리에이티브 워크플로우입니다.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs font-display tracking-wider rounded transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-[#C8A56A] text-[#0B0B0D] font-semibold shadow-md'
                  : 'bg-[#17171B] text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#202026] border border-[#27272E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid (3-columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-xl bg-[#17171B] border border-[#27272E] hover:border-[#C8A56A]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-[#0B0B0D] border border-[#27272E] group-hover:border-[#C8A56A]/30 transition-colors">
                    {getToolIcon(tool.category)}
                  </div>
                  <span className="text-[10px] font-display tracking-widest text-[#A5A5AD] uppercase px-2 py-0.5 bg-[#0B0B0D] rounded border border-[#27272E]">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-lg font-display font-medium text-[#F4F0E8] mb-1 group-hover:text-[#C8A56A] transition-colors">
                  {tool.name}
                </h3>

                <p className="text-xs font-medium text-[#C8A56A] mb-3">
                  {tool.role}
                </p>
              </div>

              <p className="text-xs text-[#A5A5AD] leading-relaxed pt-3 border-t border-[#27272E]/60 font-light">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ethical / Transparency Note */}
        <div className="mt-12 p-5 rounded-lg bg-[#17171B]/50 border border-[#27272E] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#A5A5AD] leading-relaxed">
            ※ 안내: 표기된 도구들은 실제 작품 창작 과정에서 활용되는 소프트웨어이며, 특정 기업과의 공인 인증 또는 공식 제휴 관계를 의미하지 않습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
