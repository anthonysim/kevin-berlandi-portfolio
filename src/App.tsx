import { useState } from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { WorksSection } from './components/WorksSection';
import { CraftSection } from './components/CraftSection';
import { CreditsAndAbout } from './components/CreditsAndAbout';
import { ContactFooter } from './components/ContactFooter';
import { ScreeningModal } from './components/ScreeningModal';
import { DIRECTOR_REEL, type Project } from './data/portfolio';

export function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div id="top" className="relative min-h-screen bg-[#09090B] text-[#F2EFE9]">
      {/* Subtle 35mm film grain overlay */}
      <div className="film-grain" aria-hidden="true" />

      <Navbar />

      {/* HERO — THE SCREENING ROOM */}
      <section className="relative flex min-h-screen w-full items-end overflow-hidden pt-28 pb-16 md:pb-24">
        {/* Background Widescreen Still with Slow Ken Burns Drift */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-cinema.jpg"
            alt="Cinematic anamorphic frame directed by Kevin Berlandi"
            className="h-full w-full object-cover animate-ken-burns"
          />
          {/* Cinematic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/45 to-[#09090B]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/85 via-[#09090B]/25 to-transparent" />
        </div>

        {/* Subtle Viewfinder Corner Marks */}
        <div className="pointer-events-none absolute inset-x-6 md:inset-x-12 top-24 bottom-8 z-10 hidden md:block">
          <div className="absolute top-0 left-0 h-5 w-5 border-t border-l border-[#F2EFE9]/25" />
          <div className="absolute top-0 right-0 h-5 w-5 border-t border-r border-[#F2EFE9]/25" />
          <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[#F2EFE9]/25" />
          <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[#F2EFE9]/25" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 md:px-12">
          <div className="max-w-4xl space-y-7 animate-fade-up">
            <div className="flex flex-wrap items-center gap-3 font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A]">
              <span>Film</span>
              <span className="text-[#F2EFE9]/30">/</span>
              <span>Television</span>
              <span className="text-[#F2EFE9]/30">/</span>
              <span>Commercials</span>
              <span className="hidden sm:inline text-[#F2EFE9]/30">·</span>
              <span className="hidden sm:inline text-[#F2EFE9]/65">Los Angeles</span>
            </div>

            <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-[5.5rem] font-light leading-[0.98] tracking-[-0.01em] text-[#F2EFE9]">
              Light, Rhythm &amp;{' '}
              <span className="italic text-[#D4A56A]/95">Human Tension.</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg font-light leading-relaxed text-[#F2EFE9]/78">
              Kevin Berlandi is a director crafting visceral, emotionally resonant storytelling
              across prestige episodic television, Cannes-premiered narrative cinema, and global
              commercials.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => setActiveProject(DIRECTOR_REEL)}
                className="group inline-flex items-center gap-3 bg-[#F2EFE9] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#09090B] transition-all duration-300 hover:bg-[#D4A56A] cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" />
                <span>Play General Reel</span>
              </button>

              <a
                href="#works"
                className="inline-flex items-center gap-2.5 border border-[#F2EFE9]/25 bg-[#09090B]/40 backdrop-blur-sm px-6 py-3.5 text-xs uppercase tracking-[0.22em] text-[#F2EFE9] transition-all duration-300 hover:border-[#D4A56A] hover:text-[#D4A56A]"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom Technical Strip */}
          <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#F2EFE9]/15 pt-6 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[#8E8B84]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>Festival de Cannes</span>
              <span className="text-[#F2EFE9]/25">·</span>
              <span>FOX · NBC · CBS · Netflix</span>
              <span className="text-[#F2EFE9]/25">·</span>
              <span>Audi · Porsche · Toyota</span>
            </div>
            <div className="text-[#F2EFE9]/60">Rep: IAG · Durable Goods · Rain Management</div>
          </div>
        </div>
      </section>

      <main>
        <WorksSection onSelectProject={setActiveProject} />
        <CraftSection />
        <CreditsAndAbout />
      </main>

      <ContactFooter />

      <ScreeningModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}

export default App;
