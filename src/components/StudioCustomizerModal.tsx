import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, Video, Image as ImageIcon, Link as LinkIcon, User } from 'lucide-react';

interface StudioCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: {
    heroMediaUrl: string;
    isHeroVideo: boolean;
    profileImageUrl: string;
    email: string;
    youtubeUrl: string;
    blogUrl: string;
    instagramUrl: string;
  };
  onSave: (newConfig: {
    heroMediaUrl: string;
    isHeroVideo: boolean;
    profileImageUrl: string;
    email: string;
    youtubeUrl: string;
    blogUrl: string;
    instagramUrl: string;
  }) => void;
  onReset: () => void;
}

export const StudioCustomizerModal: React.FC<StudioCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [form, setForm] = useState(config);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  const copyConfigJson = () => {
    const jsonStr = JSON.stringify(form, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0D]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#17171B] border border-[#27272E] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#F4F0E8] my-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#27272E]">
          <div>
            <span className="text-[10px] font-display tracking-widest text-[#C8A56A] uppercase block">
              STUDIO PREFERENCE
            </span>
            <h3 className="text-xl font-display font-medium text-[#F4F0E8]">
              스튜디오 미디어 & 채널 설정
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#27272E] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hero Section Background Settings */}
          <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#27272E] space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-display tracking-wider text-[#C8A56A] flex items-center gap-1.5 uppercase">
                <Video className="w-4 h-4" />
                <span>메인 히어로 배경 미디어</span>
              </label>
              <div className="flex items-center gap-2">
                <label className="text-xs text-[#A5A5AD] flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.isHeroVideo}
                    onChange={(e) => setForm({ ...form, isHeroVideo: e.target.checked })}
                    className="accent-[#C8A56A]"
                  />
                  <span>비디오 파일 (MP4)</span>
                </label>
              </div>
            </div>
            <input
              type="text"
              value={form.heroMediaUrl}
              onChange={(e) => setForm({ ...form, heroMediaUrl: e.target.value })}
              placeholder="예: https://example.com/showreel.mp4 또는 이미지 URL (비워두면 기본 시네마틱 배경)"
              className="w-full px-3.5 py-2 rounded bg-[#17171B] border border-[#27272E] text-xs text-[#F4F0E8] focus:outline-none focus:border-[#C8A56A]"
            />
            <p className="text-[11px] text-[#A5A5AD]">
              * 영상 또는 이미지 주소를 입력하시면 메인 첫 화면 배경으로 즉시 적용됩니다.
            </p>
          </div>

          {/* Profile Photo */}
          <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#27272E] space-y-2">
            <label className="text-xs font-display tracking-wider text-[#C8A56A] flex items-center gap-1.5 uppercase">
              <User className="w-4 h-4" />
              <span>크리에이터 프로필 사진 URL</span>
            </label>
            <input
              type="text"
              value={form.profileImageUrl}
              onChange={(e) => setForm({ ...form, profileImageUrl: e.target.value })}
              placeholder="프로필 사진 이미지 URL (비워두면 기본 시네마틱 포트레이트)"
              className="w-full px-3.5 py-2 rounded bg-[#17171B] border border-[#27272E] text-xs text-[#F4F0E8] focus:outline-none focus:border-[#C8A56A]"
            />
          </div>

          {/* Contact & Social Links */}
          <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#27272E] space-y-3">
            <label className="text-xs font-display tracking-wider text-[#C8A56A] flex items-center gap-1.5 uppercase">
              <LinkIcon className="w-4 h-4" />
              <span>연락처 및 소셜 채널 링크</span>
            </label>

            <div>
              <span className="text-[11px] text-[#A5A5AD] block mb-1">이메일 주소</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="contact@yourdomain.com"
                className="w-full px-3.5 py-2 rounded bg-[#17171B] border border-[#27272E] text-xs text-[#F4F0E8] focus:outline-none focus:border-[#C8A56A]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-[11px] text-[#A5A5AD] block mb-1">YouTube URL</span>
                <input
                  type="text"
                  value={form.youtubeUrl}
                  onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
                  placeholder="https://youtube.com/@..."
                  className="w-full px-3 py-1.5 rounded bg-[#17171B] border border-[#27272E] text-xs text-[#F4F0E8] focus:outline-none focus:border-[#C8A56A]"
                />
              </div>
              <div>
                <span className="text-[11px] text-[#A5A5AD] block mb-1">Blog URL</span>
                <input
                  type="text"
                  value={form.blogUrl}
                  onChange={(e) => setForm({ ...form, blogUrl: e.target.value })}
                  placeholder="https://blog.naver.com/..."
                  className="w-full px-3 py-1.5 rounded bg-[#17171B] border border-[#27272E] text-xs text-[#F4F0E8] focus:outline-none focus:border-[#C8A56A]"
                />
              </div>
              <div>
                <span className="text-[11px] text-[#A5A5AD] block mb-1">Instagram URL</span>
                <input
                  type="text"
                  value={form.instagramUrl}
                  onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })}
                  placeholder="https://instagram.com/..."
                  className="w-full px-3 py-1.5 rounded bg-[#17171B] border border-[#27272E] text-xs text-[#F4F0E8] focus:outline-none focus:border-[#C8A56A]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#27272E]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onReset}
                className="px-3 py-2 text-xs text-[#A5A5AD] hover:text-[#F4F0E8] hover:bg-[#27272E] rounded transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>기본값 초기화</span>
              </button>
              <button
                type="button"
                onClick={copyConfigJson}
                className="px-3 py-2 text-xs text-[#A5A5AD] hover:text-[#C8A56A] hover:bg-[#27272E] rounded transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'JSON 복사됨' : '설정 JSON 복사'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-[#A5A5AD] hover:text-[#F4F0E8] rounded"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-display tracking-wider font-semibold text-[#0B0B0D] bg-[#C8A56A] hover:bg-[#d8b87f] rounded transition-colors flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>설정 적용</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
