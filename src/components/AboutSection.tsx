import React from 'react';
import { STUDIO_CONFIG } from '../data/portfolioData';
import { Camera, Sparkles, Quote, Heart, Lightbulb, Compass } from 'lucide-react';

interface AboutSectionProps {
  customProfileImage?: string;
  onOpenCustomizer?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  customProfileImage,
  onOpenCustomizer,
}) => {
  const defaultProfile = '/src/assets/images/creator_director_profile_1793930228392.jpg';
  const profileImage = customProfileImage || defaultProfile;

  const philosophyIcons = [
    <Heart className="w-5 h-5 text-[#C8A56A]" />,
    <Lightbulb className="w-5 h-5 text-[#C8A56A]" />,
    <Compass className="w-5 h-5 text-[#C8A56A]" />,
  ];

  return (
    <section id="about" className="relative py-28 px-6 bg-[#0B0B0D] border-t border-[#17171B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-display tracking-[0.3em] text-[#C8A56A] uppercase mb-2">
            CREATOR PROFILE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-[#F4F0E8] tracking-tight">
            THE PERSON BEHIND THE STORIES
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A56A] mt-4" />
        </div>

        {/* 2-Column Split: Portrait & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Studio Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-xl overflow-hidden bg-[#17171B] border border-[#27272E] aspect-[3/4] shadow-2xl">
              <img
                src={profileImage}
                alt="크리에이터 선귀성 프로필 사진"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />

              {/* Overlay Metadata */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs font-display tracking-widest text-[#C8A56A] uppercase">
                    AI CREATOR & DIRECTOR
                  </p>
                  <h3 className="text-2xl font-medium text-[#F4F0E8]">선귀성</h3>
                  <p className="text-xs text-[#A5A5AD] font-display mt-0.5">Seon Gwi-seong</p>
                </div>

                {onOpenCustomizer && (
                  <button
                    onClick={onOpenCustomizer}
                    className="p-2.5 bg-[#0B0B0D]/80 hover:bg-[#C8A56A] text-[#F4F0E8] hover:text-[#0B0B0D] rounded-full border border-[#27272E] transition-all backdrop-blur-sm"
                    title="프로필 사진 및 정보 교체"
                    aria-label="프로필 사진 교체"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Note about photo replacement */}
            <p className="text-[11px] text-[#A5A5AD]/80 leading-relaxed px-1">
              ※ 프로필 사진은 설정 버튼을 통해 언제든지 원하시는 이미지 URL로 직접 교체하실 수 있습니다.
            </p>
          </div>

          {/* Right Column: Bio Narrative & Creative Philosophy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Direct Bio Statement from Prompt */}
            <div className="space-y-6 text-[#F4F0E8] leading-relaxed text-base sm:text-lg font-light">
              <div className="p-6 sm:p-8 rounded-xl bg-[#17171B]/60 border border-[#27272E] relative">
                <Quote className="w-8 h-8 text-[#C8A56A]/30 absolute top-5 right-5" />
                
                <p className="text-lg sm:text-xl font-normal text-[#F4F0E8] mb-4">
                  "안녕하세요. 이야기를 만드는 크리에이터 선귀성입니다."
                </p>

                <p className="text-[#A5A5AD] mb-4 text-base sm:text-lg">
                  저는 AI를 활용해 상상을 실제 작품으로 만드는 과정을 즐깁니다.
                </p>

                <p className="text-[#A5A5AD] mb-4 text-base sm:text-lg">
                  성경 속 인물들의 이야기, 가족과 아이들의 성장, 인간의 마음과 삶에 관한 이야기를 영상과 음악, 그림으로 표현합니다.
                </p>

                <p className="text-[#F4F0E8] font-normal mb-4 text-base sm:text-lg bg-[#C8A56A]/10 p-3.5 rounded border border-[#C8A56A]/20">
                  저에게 AI는 사람을 대신하는 기술이 아니라, 사람의 상상력과 감성을 확장하는 창작의 도구입니다.
                </p>

                <p className="text-[#C8A56A] font-medium text-lg sm:text-xl">
                  "기술은 변하지만, 사람의 마음에 남는 이야기는 오래갑니다."
                </p>
              </div>
            </div>

            {/* 3 Creative Philosophies */}
            <div className="mt-10">
              <h4 className="text-xs font-display tracking-[0.25em] text-[#C8A56A] uppercase mb-6">
                CREATIVE PILLARS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STUDIO_CONFIG.creativePhilosophy.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-lg bg-[#17171B]/40 border border-[#27272E] hover:border-[#C8A56A]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-3">{philosophyIcons[idx]}</div>
                      <span className="text-[11px] font-display tracking-wider text-[#C8A56A] block">
                        {item.title}
                      </span>
                      <h5 className="text-sm font-semibold text-[#F4F0E8] mt-1 mb-2">
                        {item.koreanTitle}
                      </h5>
                    </div>
                    <p className="text-xs text-[#A5A5AD] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
