/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { StudioCustomizerModal } from './components/StudioCustomizerModal';
import { PROJECTS_DATA, STUDIO_CONFIG, ProjectDetail } from './data/portfolioData';

const LOCAL_STORAGE_KEY = 'seon_studio_config_v1';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Studio customizable preferences
  const [studioConfig, setStudioConfig] = useState({
    heroMediaUrl: '',
    isHeroVideo: false,
    profileImageUrl: '',
    email: STUDIO_CONFIG.contactChannels.email,
    youtubeUrl: STUDIO_CONFIG.contactChannels.youtubeUrl,
    blogUrl: STUDIO_CONFIG.contactChannels.blogUrl,
    instagramUrl: STUDIO_CONFIG.contactChannels.instagramUrl,
  });

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setStudioConfig((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  // Handle URL hash changes for deep linking to projects (#project=legends-of-the-bible)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project=')) {
        const projectId = hash.replace('#project=', '');
        const found = PROJECTS_DATA.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProject = (project: ProjectDetail) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#project=${project.id}`);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project=')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleSaveConfig = (newConfig: typeof studioConfig) => {
    setStudioConfig(newConfig);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleResetConfig = () => {
    const defaultConfig = {
      heroMediaUrl: '',
      isHeroVideo: false,
      profileImageUrl: '',
      email: STUDIO_CONFIG.contactChannels.email,
      youtubeUrl: STUDIO_CONFIG.contactChannels.youtubeUrl,
      blogUrl: STUDIO_CONFIG.contactChannels.blogUrl,
      instagramUrl: STUDIO_CONFIG.contactChannels.instagramUrl,
    };
    setStudioConfig(defaultConfig);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F4F0E8] flex flex-col font-sans selection:bg-[#C8A56A]/30 selection:text-[#F4F0E8]">
      {/* Top Bar Header */}
      <Header onOpenCustomizer={() => setCustomizerOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <HeroSection
          customMediaUrl={studioConfig.heroMediaUrl}
          isVideo={studioConfig.isHeroVideo}
        />

        {/* 2. The Person Behind The Stories (About Section) */}
        <AboutSection
          customProfileImage={studioConfig.profileImageUrl}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />

        {/* 3. Portfolio & Creative Archive (Selected Works) */}
        <PortfolioSection onSelectProject={handleSelectProject} />

        {/* 4. From Idea to Creation (5-Step Creative Process) */}
        <ProcessSection />

        {/* 5. Tools & Creative Workflow */}
        <ToolsSection />

        {/* 6. Collaboration & Contact */}
        <ContactSection
          contactInfo={{
            email: studioConfig.email,
            youtubeUrl: studioConfig.youtubeUrl,
            blogUrl: studioConfig.blogUrl,
            instagramUrl: studioConfig.instagramUrl,
          }}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />

      {/* Studio Media & Channel Customizer Modal */}
      <StudioCustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={studioConfig}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
