import { useState } from 'react';
import { Play, LayoutGrid, List, ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Discipline, type Project } from '../data/portfolio';

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

const DISCIPLINES: Discipline[] = ['All', 'Film', 'Television', 'Commercials'];

export function WorksSection({ onSelectProject }: WorksSectionProps) {
  const [filter, setFilter] = useState<Discipline>('All');
  const [viewMode, setViewMode] = useState<'gallery' | 'index'>('gallery');
  const [hoveredProject, setHoveredProject] = useState<Project>(PROJECTS[0]);

  const filtered =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.discipline === filter);

  return (
    <section id="works" className="relative border-t border-[#F2EFE9]/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Header + Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A] mb-4">
              01 · Selected Works
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-[#F2EFE9]">
              Curated <span className="italic text-[#F2EFE9]/85">Filmography</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4 sm:gap-6">
            {/* Discipline Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 border border-[#F2EFE9]/12 bg-[#0E0E12] p-1">
              {DISCIPLINES.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 font-mono-tech text-[11px] uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                    filter === tab
                      ? 'bg-[#F2EFE9] text-[#09090B]'
                      : 'text-[#8E8B84] hover:text-[#F2EFE9]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Gallery vs Index Toggle */}
            <div className="flex items-center border border-[#F2EFE9]/12 bg-[#0E0E12] p-1">
              <button
                onClick={() => setViewMode('gallery')}
                aria-label="Gallery View"
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'gallery'
                    ? 'bg-[#D4A56A]/20 text-[#D4A56A]'
                    : 'text-[#8E8B84] hover:text-[#F2EFE9]'
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('index')}
                aria-label="Archive Index View"
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'index'
                    ? 'bg-[#D4A56A]/20 text-[#D4A56A]'
                    : 'text-[#8E8B84] hover:text-[#F2EFE9]'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* GALLERY VIEW */}
        {viewMode === 'gallery' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {filtered.map((project, idx) => {
              const isWide = filter === 'All' && idx === 0;
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer flex flex-col ${
                    isWide ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Widescreen Frame */}
                  <div
                    className={`relative w-full overflow-hidden border border-[#F2EFE9]/12 bg-[#111114] ${
                      isWide ? 'aspect-[21/9]' : 'aspect-[16/9]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-[#09090B]/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-65" />

                    {/* Top Technical Metadata */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.22em]">
                      <span className="bg-[#09090B]/65 backdrop-blur-md px-2.5 py-1 text-[#F2EFE9]/85 border border-[#F2EFE9]/12">
                        {project.index} · {project.discipline}
                      </span>
                      <span className="bg-[#09090B]/65 backdrop-blur-md px-2.5 py-1 text-[#D4A56A] border border-[#D4A56A]/25">
                        {project.aspectRatio}
                      </span>
                    </div>

                    {/* Center Play Reveal */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-400 group-hover:opacity-100">
                      <span className="flex items-center gap-2.5 border border-[#F2EFE9]/40 bg-[#09090B]/75 backdrop-blur-md px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#F2EFE9] transform translate-y-2 transition-transform duration-400 group-hover:translate-y-0">
                        <Play className="h-3.5 w-3.5 fill-current text-[#D4A56A]" />
                        <span>Enter Screening Room</span>
                      </span>
                    </div>

                    {/* Bottom Director's Note Peek */}
                    <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-end justify-between gap-6">
                      <p className="max-w-xl font-serif-display italic text-base md:text-lg text-[#F2EFE9]/85 line-clamp-1 opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        “{project.directorNote}”
                      </p>
                      <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#F2EFE9]/60 shrink-0">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Caption Bar */}
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8E8B84]">
                        <span>{project.clientOrNetwork}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                        {project.recognition && (
                          <>
                            <span>·</span>
                            <span className="text-[#D4A56A]/90">{project.recognition}</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#F2EFE9] transition-colors duration-300 group-hover:text-[#D4A56A]">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-[#8E8B84] max-w-2xl line-clamp-2">
                        {project.logline}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8E8B84] transition-all duration-300 group-hover:text-[#D4A56A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1" />
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* ARCHIVE INDEX / CONTACT SHEET VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 border-t border-[#F2EFE9]/15">
              {filtered.map((project) => (
                <button
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project)}
                  onFocus={() => setHoveredProject(project)}
                  onClick={() => onSelectProject(project)}
                  className="group w-full flex items-center justify-between gap-4 border-b border-[#F2EFE9]/10 py-5 text-left transition-colors hover:bg-[#F2EFE9]/[0.02] px-3 cursor-pointer"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono-tech text-xs text-[#D4A56A]">{project.index}</span>
                    <div>
                      <div className="font-serif-display text-2xl sm:text-3xl font-light text-[#F2EFE9] group-hover:text-[#D4A56A] transition-colors">
                        {project.title}
                      </div>
                      <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84] mt-0.5">
                        {project.clientOrNetwork} · {project.discipline}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline font-mono-tech text-[11px] text-[#8E8B84]">
                      {project.aspectRatio}
                    </span>
                    <span className="font-mono-tech text-[11px] text-[#F2EFE9]/70">
                      {project.year}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#8E8B84] group-hover:text-[#D4A56A]" />
                  </div>
                </button>
              ))}
            </div>

            {/* Sticky Preview Frame */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="border border-[#F2EFE9]/12 bg-[#0E0E12] overflow-hidden">
                <div className="aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={hoveredProject.image}
                    alt={hoveredProject.title}
                    className="h-full w-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#D4A56A]">
                    <span>{hoveredProject.format}</span>
                    <span>{hoveredProject.duration}</span>
                  </div>
                  <h4 className="font-serif-display text-2xl text-[#F2EFE9]">
                    {hoveredProject.title}
                  </h4>
                  <p className="font-serif-display italic text-base text-[#F2EFE9]/80">
                    “{hoveredProject.directorNote}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
