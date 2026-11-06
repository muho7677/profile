import React, { useState, useEffect } from 'react';
import { ProjectDetail } from '../data/portfolioData';
import {
  X,
  Play,
  Pause,
  Volume2,
  Film,
  BookOpen,
  Music,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Info,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'intention' | 'pipeline'>(
    'overview'
  );

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const categoryIcons = {
    film: <Film className="w-4 h-4 text-[#C8A56A]" />,
    storybook: <BookOpen className="w-4 h-4 text-[#C8A56A]" />,
    music: <Music className="w-4 h-4 text-[#C8A56A]" />,
    education: <GraduationCap className="w-4 h-4 text-[#C8A56A]" />,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0D]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#17171B] border border-[#27272E] rounded-2xl shadow-2xl overflow-hidden my-auto text-[#F4F0E8] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272E] bg-[#121215]">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-[#0B0B0D] rounded border border-[#27272E]">
              {categoryIcons[project.category]}
            </span>
            <div>
              <span className="text-[11px] font-display tracking-widest text-[#C8A56A] uppercase block">
                {project.categoryEnglish}
              </span>
              <span className="text-xs text-[#A5A5AD]">{project.categoryLabel}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#27272E] rounded-full transition-colors"
            aria-label="닫기 (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Visual Banner */}
          <div className="relative rounded-xl overflow-hidden border border-[#27272E] aspect-[16/9] sm:aspect-[21/9] bg-[#0B0B0D]">
            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
              <span className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase font-semibold mb-1">
                {project.badge}
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-medium text-[#F4F0E8]">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A5A5AD] mt-1 line-clamp-2">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Transparent Development Disclaimer */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#0B0B0D]/70 border border-[#C8A56A]/20 text-xs text-[#A5A5AD] leading-relaxed">
            <Info className="w-4 h-4 text-[#C8A56A] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-[#F4F0E8] mb-0.5">창작 및 개발 아카이브 안내</p>
              <p>{project.sampleNotes}</p>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#27272E] pb-2 text-xs font-display tracking-wider">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[#C8A56A] text-[#0B0B0D] font-semibold'
                  : 'text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#27272E]'
              }`}
            >
              PROJECT OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab('intention')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'intention'
                  ? 'bg-[#C8A56A] text-[#0B0B0D] font-semibold'
                  : 'text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#27272E]'
              }`}
            >
              CREATIVE INTENTION (기획 의도)
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'pipeline'
                  ? 'bg-[#C8A56A] text-[#0B0B0D] font-semibold'
                  : 'text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#27272E]'
              }`}
            >
              PIPELINE & TOOLS (제작 과정)
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase mb-2">
                  SUMMARY
                </h4>
                <p className="text-sm sm:text-base text-[#F4F0E8] leading-relaxed font-light">
                  {project.summary}
                </p>
              </div>

              {/* Sub-episodes if available (Bible films or Education modules) */}
              {project.subEpisodes && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase mb-2">
                    KEY EPISODES & MODULES
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.subEpisodes.map((ep) => (
                      <div
                        key={ep.name}
                        className="p-4 rounded-lg bg-[#0B0B0D]/50 border border-[#27272E] hover:border-[#C8A56A]/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="text-sm font-medium text-[#F4F0E8]">{ep.name}</h5>
                          <span className="text-[11px] font-display text-[#C8A56A]">{ep.subtitle}</span>
                        </div>
                        <p className="text-xs text-[#A5A5AD] leading-relaxed">{ep.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Audio Track Interactive Player if Music category */}
              {project.audioTrack && (
                <div className="p-5 rounded-xl bg-[#0B0B0D] border border-[#27272E] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-display tracking-widest text-[#C8A56A] uppercase">
                        AUDIO CONCEPT SHOWCASE
                      </span>
                      <h5 className="text-base font-medium text-[#F4F0E8]">
                        {project.audioTrack.title}
                      </h5>
                    </div>
                    <span className="text-xs font-mono text-[#A5A5AD]">
                      {project.audioTrack.duration}
                    </span>
                  </div>

                  {/* Interactive Waveform & Play toggle */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="w-10 h-10 rounded-full bg-[#C8A56A] text-[#0B0B0D] flex items-center justify-center hover:bg-[#d8b87f] transition-transform active:scale-95 shrink-0"
                        aria-label={isPlayingAudio ? '오디오 일시정지' : '오디오 미리듣기'}
                      >
                        {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>

                      {/* Animated audio bar visualizer */}
                      <div className="flex-1 h-8 flex items-center gap-1 px-3 bg-[#17171B] rounded border border-[#27272E] overflow-hidden">
                        {[40, 65, 20, 85, 95, 30, 70, 50, 90, 45, 60, 35, 80, 55, 75, 90, 40, 60, 85, 30, 70, 45, 65, 80, 30, 50, 75, 40].map(
                          (val, idx) => (
                            <span
                              key={idx}
                              className={`flex-1 bg-[#C8A56A] rounded-full transition-all duration-300 ${
                                isPlayingAudio ? 'opacity-90 animate-pulse' : 'opacity-40'
                              }`}
                              style={{
                                height: `${isPlayingAudio ? Math.max(15, (val + idx * 7) % 100) : val * 0.4}%`,
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <p className="text-[11px] text-[#A5A5AD]">
                      {isPlayingAudio
                        ? '♪ 앰비언트 사운드스케이프 오디오가 시뮬레이션 재생 중입니다.'
                        : '※ 재생 버튼을 눌러 서사적 사운드스케이프를 체험해보세요.'}
                    </p>
                  </div>

                  {/* Lyrics snippet */}
                  <div className="p-4 rounded-lg bg-[#17171B]/60 border border-[#27272E]">
                    <span className="text-[10px] font-display tracking-widest text-[#A5A5AD] uppercase block mb-2">
                      NARRATIVE LYRICS SNIPPET
                    </span>
                    <div className="space-y-1.5 text-xs text-[#F4F0E8]/90 font-light italic leading-relaxed">
                      {project.audioTrack.lyricsSnippet.map((line, i) => (
                        <p key={i}>"{line}"</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Themes & Keywords */}
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase mb-2">
                  THEMATIC KEYWORDS
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A5A5AD]">
                  {project.themes.map((theme, i) => (
                    <React.Fragment key={theme}>
                      <span className="text-[#F4F0E8]">{theme}</span>
                      {i < project.themes.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Creative Intention */}
          {activeTab === 'intention' && (
            <div className="space-y-4">
              <h4 className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase mb-2">
                CREATIVE INTENTION & PHILOSOPHY
              </h4>
              <div className="space-y-3">
                {project.intention.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#0B0B0D]/40 border border-[#27272E]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C8A56A] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#F4F0E8] leading-relaxed font-light">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Pipeline & Tools */}
          {activeTab === 'pipeline' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase mb-3">
                  PRODUCTION STEPS
                </h4>
                <div className="space-y-3">
                  {project.processSteps.map((step, idx) => (
                    <div
                      key={step.title}
                      className="p-4 rounded-lg bg-[#0B0B0D]/50 border border-[#27272E] flex items-start gap-4"
                    >
                      <span className="text-xs font-mono font-semibold text-[#C8A56A] bg-[#17171B] px-2 py-1 rounded border border-[#27272E] shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <h5 className="text-sm font-medium text-[#F4F0E8] mb-1">
                          {step.title}
                        </h5>
                        <p className="text-xs text-[#A5A5AD] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-[#C8A56A] uppercase mb-2">
                  TOOLS USED IN THIS PROJECT
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-[#0B0B0D] border border-[#27272E] text-[#F4F0E8] rounded font-display"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#27272E] bg-[#121215] flex items-center justify-between">
          <p className="text-xs text-[#A5A5AD]">
            SEON CREATIVE STUDIO ARCHIVE
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-display tracking-wider font-semibold text-[#0B0B0D] bg-[#C8A56A] hover:bg-[#d8b87f] rounded transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
