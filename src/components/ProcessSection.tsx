import React, { useState } from 'react';
import { CREATIVE_PROCESS_STEPS } from '../data/portfolioData';
import {
  Sparkles,
  PenTool,
  Image as ImageIcon,
  Volume2,
  Film,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = CREATIVE_PROCESS_STEPS[activeStepIndex];

  const stepIcons = [
    <Sparkles className="w-4 h-4" />,
    <PenTool className="w-4 h-4" />,
    <ImageIcon className="w-4 h-4" />,
    <Volume2 className="w-4 h-4" />,
    <Film className="w-4 h-4" />,
  ];

  return (
    <section id="process" className="relative py-28 px-6 bg-[#0B0B0D] border-t border-[#17171B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-display tracking-[0.3em] text-[#C8A56A] uppercase mb-2">
            CREATIVE METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-[#F4F0E8] tracking-tight">
            FROM IDEA TO CREATION
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A56A] mt-4" />
          <p className="text-xs sm:text-sm text-[#A5A5AD] mt-4 max-w-xl font-light">
            상상이 하나의 완성된 영상, 음악, 동화로 태어나기까지의 체계적이고 진정성 있는 5단계 창작 파이프라인입니다.
          </p>
        </div>

        {/* 5-Step Progress Bar / Timeline Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-[#17171B] rounded-xl border border-[#27272E] mb-12">
          {CREATIVE_PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`py-3 px-3 rounded-lg text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0B0B0D] border border-[#C8A56A]/60 shadow-lg'
                    : 'hover:bg-[#202026] text-[#A5A5AD]'
                }`}
                aria-label={`단계 ${step.stepNumber} ${step.titleEn}`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isActive ? 'text-[#C8A56A]' : 'text-[#A5A5AD]'
                    }`}
                  >
                    STEP {step.stepNumber}
                  </span>
                  <span
                    className={`transition-colors ${
                      isActive ? 'text-[#C8A56A]' : 'text-[#A5A5AD]'
                    }`}
                  >
                    {stepIcons[idx]}
                  </span>
                </div>
                <span
                  className={`text-xs font-display tracking-wider font-semibold truncate ${
                    isActive ? 'text-[#F4F0E8]' : 'text-[#A5A5AD]'
                  }`}
                >
                  {step.titleEn}
                </span>
                <span className="text-[11px] text-[#A5A5AD] truncate mt-0.5 hidden sm:block">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display Panel */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#17171B] border border-[#27272E] shadow-2xl relative overflow-hidden">
          {/* Subtle Stage Number Watermark Accent in Corner */}
          <div className="absolute top-6 right-8 text-7xl sm:text-9xl font-display font-bold text-[#F4F0E8]/5 select-none pointer-events-none">
            {currentStep.stepNumber}
          </div>

          <div className="max-w-3xl relative z-10">
            {/* Stage Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-[#C8A56A] text-[#0B0B0D] rounded">
                STAGE {currentStep.stepNumber}
              </span>
              <span className="text-xs font-display tracking-[0.25em] text-[#C8A56A] uppercase">
                {currentStep.titleEn}
              </span>
            </div>

            {/* Stage Title */}
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F4F0E8] mb-3">
              {currentStep.title}
            </h3>

            {/* Lead Short Desc */}
            <p className="text-base sm:text-lg text-[#C8A56A] font-light mb-6">
              "{currentStep.shortDesc}"
            </p>

            {/* In-depth Detail Paragraph */}
            <p className="text-sm sm:text-base text-[#F4F0E8]/90 leading-relaxed font-light mb-8">
              {currentStep.detail}
            </p>

            {/* Key Activities & Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#27272E]">
              {/* Key Activities */}
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-[#A5A5AD] uppercase mb-3">
                  KEY ACTIVITIES
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#F4F0E8]">
                  {currentStep.keyActivities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#C8A56A] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Involved in this Step */}
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-[#A5A5AD] uppercase mb-3">
                  TOOLS & ENGINES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentStep.toolsInvolved.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-[#0B0B0D] border border-[#27272E] text-xs font-display text-[#F4F0E8] rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#27272E]/50">
              <button
                onClick={() =>
                  setActiveStepIndex((prev) =>
                    prev > 0 ? prev - 1 : CREATIVE_PROCESS_STEPS.length - 1
                  )
                }
                className="flex items-center gap-2 text-xs font-display tracking-wider text-[#A5A5AD] hover:text-[#F4F0E8] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREVIOUS STAGE</span>
              </button>

              <button
                onClick={() =>
                  setActiveStepIndex((prev) =>
                    prev < CREATIVE_PROCESS_STEPS.length - 1 ? prev + 1 : 0
                  )
                }
                className="flex items-center gap-2 px-4 py-2 bg-[#C8A56A] text-[#0B0B0D] hover:bg-[#d8b87f] text-xs font-display tracking-wider font-semibold rounded transition-colors"
              >
                <span>NEXT STAGE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
