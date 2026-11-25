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

  const getCount = (tab: Discipline) =>
    tab === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.discipline === tab).length;

  return (
    <section id="works" className="relative border-t border-[#F2EFE9]/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* SELECTED WORKS HEADER + CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A] mb-4">
              01 · Selected Works
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-[#F2EFE9]">
              Curated <span className="italic text-[#F2EFE9]/85">Filmography</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-3.5 sm:gap-5">
            {/* Discipline Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto border border-[#F2EFE9]/12 bg-[#0E0E12] p-1 max-w-full">
              {DISCIPLINES.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`shrink-0 whitespace-nowrap px-3.5 py-2 font-mono-tech text-[11px] uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer ${
                    filter === tab
                      ? 'bg-[#F2EFE9] text-[#09090B]'
                      : 'text-[#8E8B84] hover:text-[#F2EFE9]'
                  }`}
                >
                  {tab}{' '}
                  <span className="opacity-60">({getCount(tab)})</span>
                </button>
              ))}
            </div>

            {/* Gallery vs Index Toggle */}
            <div className="flex w-fit items-center border border-[#F2EFE9]/12 bg-[#0E0E12] p-1">
              <button
                onClick={() => setViewMode('gallery')}
                aria-label="Gallery View"
                className={`p-2 transition-colors cursor-pointer ${
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
                className={`p-2 transition-colors cursor-pointer ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {filtered.map((project, idx) => {
              const isHeroCard = filter === 'All' && idx === 0;
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer flex flex-col ${
                    isHeroCard ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Widescreen Frame */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#F2EFE9]/12 bg-[#111114]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-[#09090B]/15 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-60" />

                    {/* Top Technical Metadata */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.2em]">
                      <span className="bg-[#09090B]/70 backdrop-blur-md px-2.5 py-1 text-[#F2EFE9]/90 border border-[#F2EFE9]/12">
                        {project.index} · {project.discipline}
                      </span>
                      <span className="bg-[#09090B]/70 backdrop-blur-md px-2 py-1 text-[#D4A56A] border border-[#D4A56A]/25">
                        {project.aspectRatio}
                      </span>
                    </div>

                    {/* Center Play Reveal (always subtly visible on touch/mobile, hover reveal on desktop) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 transition-all duration-300 lg:group-hover:opacity-100">
                      <span className="flex items-center gap-2 border border-[#F2EFE9]/40 bg-[#09090B]/70 backdrop-blur-md px-3.5 py-2 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#F2EFE9] lg:transform lg:translate-y-2 transition-transform duration-300 lg:group-hover:translate-y-0">
                        <Play className="h-3 w-3 fill-current text-[#D4A56A]" />
                        <span>Watch Film</span>
                      </span>
                    </div>
                  </div>

                  {/* Caption Bar */}
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84]">
                        <span>{project.clientOrNetwork}</span>
                        {project.recognition && (
                          <>
                            <span>·</span>
                            <span className="text-[#D4A56A]/90">{project.recognition}</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-serif-display text-2xl font-light text-[#F2EFE9] transition-colors duration-300 group-hover:text-[#D4A56A]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#8E8B84] line-clamp-2">
                        {project.logline}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8E8B84] transition-all duration-300 group-hover:text-[#D4A56A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1" />
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
                  className="group w-full flex items-center justify-between gap-4 border-b border-[#F2EFE9]/10 py-4 text-left transition-colors hover:bg-[#F2EFE9]/[0.02] px-2 sm:px-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="lg:hidden h-11 w-16 shrink-0 object-cover border border-[#F2EFE9]/15 bg-[#111114]"
                    />
                    <span className="hidden sm:inline font-mono-tech text-xs text-[#D4A56A] shrink-0">
                      {project.index}
                    </span>
                    <div className="min-w-0">
                      <div className="font-serif-display text-xl sm:text-2xl font-light text-[#F2EFE9] group-hover:text-[#D4A56A] transition-colors truncate">
                        {project.title}
                      </div>
                      <div className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#8E8B84] mt-0.5 truncate">
                        {project.clientOrNetwork} · {project.discipline}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline font-mono-tech text-[11px] text-[#8E8B84]">
                      {project.aspectRatio}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#8E8B84] group-hover:text-[#D4A56A]" />
                  </div>
                </button>
              ))}
            </div>

            {/* Sticky Preview Frame (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
              <div
                onClick={() => onSelectProject(hoveredProject)}
                className="border border-[#F2EFE9]/12 bg-[#0E0E12] overflow-hidden cursor-pointer group"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={hoveredProject.image}
                    alt={hoveredProject.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F2EFE9]/50 bg-[#09090B]/70 text-[#D4A56A]">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#D4A56A]">
                    <span>{hoveredProject.format}</span>
                    <span>{hoveredProject.aspectRatio}</span>
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
