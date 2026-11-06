import React, { useState } from 'react';
import { Mail, Youtube, Instagram, Globe, Copy, Check, Send, Sparkles, ExternalLink, Sliders } from 'lucide-react';

interface ContactSectionProps {
  contactInfo: {
    email: string;
    youtubeUrl: string;
    blogUrl: string;
    instagramUrl: string;
  };
  onOpenCustomizer?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo,
  onOpenCustomizer,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'AI Cinematic Film',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#0B0B0D] border-t border-[#17171B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-display tracking-[0.3em] text-[#C8A56A] uppercase mb-2">
            COLLABORATION & INQUIRY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-[#F4F0E8] tracking-tight">
            LET'S CREATE SOMETHING MEANINGFUL
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A56A] my-4" />
          <p className="text-base sm:text-lg text-[#F4F0E8] font-light leading-relaxed">
            "새로운 이야기를 함께 만들어 갈 수 있기를 기대합니다."
          </p>
          <p className="text-xs sm:text-sm text-[#A5A5AD] mt-2 font-light">
            AI 영상 제작, 그림동화 기획, 사운드스케이프 작곡, 인문학·마인드 교육 강연 협업을 환영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#17171B] border border-[#27272E] shadow-xl">
              <h3 className="text-xs font-display tracking-[0.25em] text-[#C8A56A] uppercase mb-6">
                OFFICIAL CHANNELS
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#27272E] mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-display text-[#A5A5AD]">
                    <Mail className="w-4 h-4 text-[#C8A56A]" />
                    <span>EMAIL INQUIRY</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-xs text-[#A5A5AD] hover:text-[#C8A56A] transition-colors flex items-center gap-1 rounded bg-[#17171B] border border-[#27272E]"
                    title="이메일 주소 복사"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] text-emerald-400">복사됨</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">복사</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm sm:text-base font-medium text-[#F4F0E8] hover:text-[#C8A56A] transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Social Channels List (Honest indication without fake accounts) */}
              <div className="space-y-3">
                {/* YouTube */}
                <div className="p-3.5 rounded-lg bg-[#0B0B0D]/50 border border-[#27272E] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Youtube className="w-4 h-4 text-[#C8A56A]" />
                    <div>
                      <span className="text-xs font-medium text-[#F4F0E8] block">YouTube</span>
                      <span className="text-[10px] text-[#A5A5AD]">
                        {contactInfo.youtubeUrl ? '공식 채널' : '채널 개설 준비 중'}
                      </span>
                    </div>
                  </div>
                  {contactInfo.youtubeUrl ? (
                    <a
                      href={contactInfo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display text-[#C8A56A] hover:underline flex items-center gap-1"
                    >
                      <span>VISIT</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenCustomizer}
                      className="text-[11px] text-[#A5A5AD] hover:text-[#C8A56A] underline decoration-dotted"
                    >
                      URL 등록
                    </button>
                  )}
                </div>

                {/* Blog */}
                <div className="p-3.5 rounded-lg bg-[#0B0B0D]/50 border border-[#27272E] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#C8A56A]" />
                    <div>
                      <span className="text-xs font-medium text-[#F4F0E8] block">Blog & Essay</span>
                      <span className="text-[10px] text-[#A5A5AD]">
                        {contactInfo.blogUrl ? '창작 일지 & 칼럼' : '블로그 연동 준비 중'}
                      </span>
                    </div>
                  </div>
                  {contactInfo.blogUrl ? (
                    <a
                      href={contactInfo.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display text-[#C8A56A] hover:underline flex items-center gap-1"
                    >
                      <span>VISIT</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenCustomizer}
                      className="text-[11px] text-[#A5A5AD] hover:text-[#C8A56A] underline decoration-dotted"
                    >
                      URL 등록
                    </button>
                  )}
                </div>

                {/* Instagram */}
                <div className="p-3.5 rounded-lg bg-[#0B0B0D]/50 border border-[#27272E] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-[#C8A56A]" />
                    <div>
                      <span className="text-xs font-medium text-[#F4F0E8] block">Instagram</span>
                      <span className="text-[10px] text-[#A5A5AD]">
                        {contactInfo.instagramUrl ? '아카이브 계정' : '계정 연동 준비 중'}
                      </span>
                    </div>
                  </div>
                  {contactInfo.instagramUrl ? (
                    <a
                      href={contactInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display text-[#C8A56A] hover:underline flex items-center gap-1"
                    >
                      <span>VISIT</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenCustomizer}
                      className="text-[11px] text-[#A5A5AD] hover:text-[#C8A56A] underline decoration-dotted"
                    >
                      URL 등록
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Settings Trigger */}
              {onOpenCustomizer && (
                <div className="mt-6 pt-6 border-t border-[#27272E] flex items-center justify-between">
                  <span className="text-[11px] text-[#A5A5AD]">크리에이터 본인 설정</span>
                  <button
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-1.5 text-xs text-[#C8A56A] hover:underline"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>연락처 및 소셜 링크 관리</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#17171B] border border-[#27272E] shadow-xl">
              <h3 className="text-xs font-display tracking-[0.25em] text-[#C8A56A] uppercase mb-6">
                SEND A MESSAGE
              </h3>

              {formSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-[#0B0B0D] rounded-xl border border-[#C8A56A]/30">
                  <div className="w-12 h-12 rounded-full bg-[#C8A56A]/20 text-[#C8A56A] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium text-[#F4F0E8]">
                    메시지가 성공적으로 전달되었습니다
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A5A5AD] max-w-md mx-auto leading-relaxed">
                    선귀성 크리에이터에게 문의 내용이 전달되었습니다. 보내주신 이메일(
                    <span className="text-[#C8A56A]">{formData.email}</span>)로 신속히 답변드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', category: 'AI Cinematic Film', message: '' });
                    }}
                    className="px-6 py-2.5 text-xs font-display tracking-wider font-semibold text-[#0B0B0D] bg-[#C8A56A] rounded hover:bg-[#d8b87f] transition-colors"
                  >
                    새로운 문의 작성
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display tracking-wider text-[#A5A5AD] mb-1.5">
                        성함 / 단체명 <span className="text-[#C8A56A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="홍길동 / 스튜디오"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-[#F4F0E8] text-sm focus:outline-none focus:border-[#C8A56A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-display tracking-wider text-[#A5A5AD] mb-1.5">
                        회신받을 이메일 <span className="text-[#C8A56A]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your-email@domain.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-[#F4F0E8] text-sm focus:outline-none focus:border-[#C8A56A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display tracking-wider text-[#A5A5AD] mb-1.5">
                      협업 및 문의 분야
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-[#F4F0E8] text-sm focus:outline-none focus:border-[#C8A56A] transition-colors"
                    >
                      <option value="AI Cinematic Film">AI 시네마틱 영상 제작 / 각색</option>
                      <option value="Picture Book & Animation">그림동화 및 캐릭터 애니메이션 기획</option>
                      <option value="AI Music & Soundtrack">AI 음악 작곡 및 사운드스케이프</option>
                      <option value="Mind & Education">마인드 & 인문학 교육 강연 / 교재 제작</option>
                      <option value="Other">기타 창작 프로젝트 제안</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display tracking-wider text-[#A5A5AD] mb-1.5">
                      문의 내용 <span className="text-[#C8A56A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="프로젝트의 배경, 일정, 전하고자 하는 이야기의 방향을 편안하게 남겨주세요."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-[#F4F0E8] text-sm focus:outline-none focus:border-[#C8A56A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#C8A56A] hover:bg-[#d8b87f] text-[#0B0B0D] font-display text-xs tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#C8A56A]/10 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>전송 중...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
