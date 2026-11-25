import { useEffect, useState } from 'react';
import { X, Film, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ScreeningModalProps {
  project: Project | null;
  onClose: () => void;
}

function buildVimeoEmbedSrc(rawUrl: string): string {
  const separator = rawUrl.includes('?') ? '&' : '?';
  return `${rawUrl}${separator}autoplay=1&title=0&byline=0&portrait=0&color=d4a56a&dnt=1`;
}

export function ScreeningModal({ project, onClose }: ScreeningModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const embedSrc = buildVimeoEmbedSrc(project.videoEmbedUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-[#050507]/95 backdrop-blur-xl p-0 sm:p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative sm:my-auto w-full max-w-6xl min-h-full sm:min-h-0 border-0 sm:border border-[#F2EFE9]/15 bg-[#0C0C0F] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Screening Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#F2EFE9]/10 bg-[#0C0C0F]/95 backdrop-blur-md px-4 py-3 sm:px-5 md:px-7">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4A56A] animate-pulse" />
            <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8E8B84] truncate">
              Screening Room · Reel {project.index} · {project.aspectRatio}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={project.videoEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#8E8B84] hover:text-[#D4A56A] transition-colors"
            >
              <span>Open Player</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close Screening Room"
              className="flex h-10 w-10 items-center justify-center -mr-2 text-[#8E8B84] transition-colors hover:text-[#F2EFE9] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Live Cinema Video Viewport */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-45 scale-[1.01]"
              />
              <div className="absolute inset-0 bg-[#050507]/55" />
              <div className="absolute flex flex-col items-center gap-3">
                <span className="h-9 w-9 rounded-full border-2 border-[#D4A56A]/25 border-t-[#D4A56A] animate-spin" />
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[#F2EFE9]/80">
                  Loading Screening
                </span>
              </div>
            </div>
          )}
          <iframe
            key={project.id}
            src={embedSrc}
            title={project.title}
            onLoad={() => setIsLoaded(true)}
            className={`relative z-20 h-full w-full border-0 transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
          />
        </div>

        {/* Director's Notes & Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 bg-[#0C0C0F]">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#D4A56A]">
                {project.discipline}
              </span>
              <span className="text-[#F2EFE9]/25">/</span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8E8B84]">
                {project.clientOrNetwork} · {project.year}
              </span>
              {project.recognition && (
                <>
                  <span className="text-[#F2EFE9]/25">/</span>
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#F2EFE9]/75">
                    {project.recognition}
                  </span>
                </>
              )}
            </div>

            <h3 className="font-serif-display text-3xl md:text-4xl font-light text-[#F2EFE9]">
              {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-[#F2EFE9]/75">{project.logline}</p>

            <div className="pt-2 border-t border-[#F2EFE9]/10">
              <div className="flex items-center gap-2 mb-2 text-[#D4A56A]">
                <Film className="h-3.5 w-3.5" />
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.24em]">
                  Director’s Approach
                </span>
              </div>
              <p className="font-serif-display italic text-lg md:text-xl leading-relaxed text-[#F2EFE9]/90">
                “{project.directorNote}”
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#F2EFE9]/10 pt-6 lg:pt-0 lg:pl-8 space-y-6">
            <div>
              <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[#8E8B84] mb-3">
                Visual Language
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.visualLanguage.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#F2EFE9]/15 bg-[#F2EFE9]/[0.03] px-3 py-1.5 text-[11px] tracking-wide text-[#F2EFE9]/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F2EFE9]/10 font-mono-tech text-[11px]">
              <div>
                <div className="text-[#8E8B84] uppercase tracking-[0.18em] text-[9px] mb-1">
                  Format
                </div>
                <div className="text-[#F2EFE9]/90">{project.format}</div>
              </div>
              <div>
                <div className="text-[#8E8B84] uppercase tracking-[0.18em] text-[9px] mb-1">
                  Aspect Ratio
                </div>
                <div className="text-[#F2EFE9]/90">{project.aspectRatio}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
