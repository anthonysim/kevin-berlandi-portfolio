import { useState, useEffect } from 'react';
import { X, Play, Pause, Maximize2, Grid, Film } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ScreeningModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ScreeningModal({ project, onClose }: ScreeningModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(18);
  const [showFrameGuides, setShowFrameGuides] = useState(true);

  useEffect(() => {
    if (!project) return;
    setIsPlaying(true);
    setProgress(12);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!project || !isPlaying || project.videoEmbedUrl) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.45));
    }, 100);
    return () => clearInterval(timer);
  }, [project, isPlaying]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-6xl border border-[#F2EFE9]/15 bg-[#0C0C0F] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Screening Bar */}
        <div className="flex items-center justify-between border-b border-[#F2EFE9]/10 px-5 py-3.5 md:px-7">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4A56A] animate-pulse" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#8E8B84]">
              Screening Room · Reel {project.index} · {project.aspectRatio}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFrameGuides(!showFrameGuides)}
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] border transition-colors cursor-pointer ${
                showFrameGuides
                  ? 'border-[#D4A56A]/60 text-[#D4A56A] bg-[#D4A56A]/10'
                  : 'border-[#F2EFE9]/15 text-[#8E8B84] hover:text-[#F2EFE9]'
              }`}
              title="Toggle Director's Frame Guides"
            >
              <Grid className="h-3 w-3" />
              <span>Frame Guides</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Screening Room"
              className="p-1.5 text-[#8E8B84] transition-colors hover:text-[#F2EFE9] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Cinema Viewport */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden select-none">
          {project.videoEmbedUrl ? (
            <iframe
              src={project.videoEmbedUrl}
              title={project.title}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={project.image}
                alt={project.title}
                className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-linear ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Subtle Letterbox Cinema Matte */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[8%] bg-black/90" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[8%] bg-black/90" />

              {/* Optional Director's Viewfinder Frame Guides */}
              {showFrameGuides && (
                <div className="pointer-events-none absolute inset-[9%] border border-[#F2EFE9]/18">
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#F2EFE9]/10" />
                  <div className="absolute left-2/3 top-0 bottom-0 w-px bg-[#F2EFE9]/10" />
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-[#F2EFE9]/10" />
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-[#F2EFE9]/10" />
                  {/* Center Crosshair */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#D4A56A]/60" />
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-[#D4A56A]/60" />
                  </div>
                  <span className="absolute top-2 left-2.5 font-mono-tech text-[9px] tracking-[0.2em] text-[#F2EFE9]/55 uppercase">
                    {project.aspectRatio} · 24.000 FPS
                  </span>
                  <span className="absolute bottom-2 right-2.5 font-mono-tech text-[9px] tracking-[0.2em] text-[#D4A56A]/75 uppercase">
                    REC · {project.format}
                  </span>
                </div>
              )}

              {/* Subtle Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Center Play/Pause Overlay when paused */}
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F2EFE9]/40 bg-[#09090B]/70 backdrop-blur-md text-[#F2EFE9]">
                    <Play className="h-6 w-6 fill-current ml-0.5" />
                  </span>
                </button>
              )}

              {/* Bottom Playback Controls */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 px-5 pb-4 pt-8 bg-gradient-to-t from-black/95 to-transparent">
                {/* Scrub Bar */}
                <div
                  className="group relative h-1 w-full bg-[#F2EFE9]/20 cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                    setProgress(pct);
                  }}
                >
                  <div
                    className="h-full bg-[#D4A56A] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#F2EFE9]/80">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying((p) => !p)}
                      className="flex items-center gap-2 uppercase tracking-[0.18em] hover:text-[#D4A56A] cursor-pointer"
                    >
                      {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                      <span>{isPlaying ? 'Playing Preview' : 'Paused'}</span>
                    </button>
                    <span className="text-[#8E8B84] hidden sm:inline">
                      {project.duration} · Ready for Vimeo / Private Screener Link
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8E8B84]">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </>
          )}
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

            <p className="text-sm leading-relaxed text-[#F2EFE9]/75">
              {project.logline}
            </p>

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
                <div className="text-[#8E8B84] uppercase tracking-[0.18em] text-[9px] mb-1">Format</div>
                <div className="text-[#F2EFE9]/90">{project.format}</div>
              </div>
              <div>
                <div className="text-[#8E8B84] uppercase tracking-[0.18em] text-[9px] mb-1">Aspect Ratio</div>
                <div className="text-[#F2EFE9]/90">{project.aspectRatio}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
