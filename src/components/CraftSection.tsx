import { useState } from 'react';
import { CRAFT_PILLARS } from '../data/portfolio';

type AspectStudy = '2.39:1' | '1.85:1' | '1.33:1';

const ASPECT_NOTES: Record<
  AspectStudy,
  { label: string; subtitle: string; note: string; matteClass: string }
> = {
  '2.39:1': {
    label: '2.39:1 Anamorphic',
    subtitle: 'Epic Scope & Horizontal Isolation',
    note: 'Expansive widescreen architecture lets environment and character share equal psychological weight—ideal for cinema and luxury automotive motion.',
    matteClass: 'inset-y-[14%] inset-x-0',
  },
  '1.85:1': {
    label: '1.85:1 Theatrical',
    subtitle: 'Natural Human Presence',
    note: 'Balanced vertical breathing room brings the audience closer to human posture, eye-lines, and subtle interplay inside episodic drama.',
    matteClass: 'inset-y-[4%] inset-x-0',
  },
  '1.33:1': {
    label: '1.33:1 Academy',
    subtitle: 'Intimate Portrait & Psychological Tension',
    note: 'Closing the sides concentrates attention entirely on the face and stillness—transforming a single glance into a dramatic turning point.',
    matteClass: 'inset-y-0 inset-x-[15%]',
  },
};

export function CraftSection() {
  const [activeRatio, setActiveRatio] = useState<AspectStudy>('2.39:1');
  const current = ASPECT_NOTES[activeRatio];

  return (
    <section id="craft" className="relative border-t border-[#F2EFE9]/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A] mb-4">
              02 · The Craft of Directing
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.06] text-[#F2EFE9]">
              Directing is the art of{' '}
              <span className="italic text-[#D4A56A]/95">choosing what to leave in shadow.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base leading-relaxed text-[#8E8B84]">
              Every discipline—whether a festival short film, a primetime network episode, or a
              sixty-second global spot—demands the same artistic devotion: sculpting light, space,
              and human rhythm into an image that lingers long after the cut to black.
            </p>
          </div>
        </div>

        {/* Interactive Framing & Aspect Ratio Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#F2EFE9]/12">
              <img
                src="/images/director-craft.jpg"
                alt="Anamorphic cinema lens on soundstage"
                className="h-full w-full object-cover"
              />
              {/* Dynamic Viewfinder Matte Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/55 transition-all duration-700" />
              <div
                className={`pointer-events-none absolute transition-all duration-700 ease-out overflow-hidden border border-[#D4A56A]/75 shadow-[0_0_0_9999px_rgba(5,5,7,0.72)] ${current.matteClass}`}
              >
                {/* Rule of Thirds subtle hairlines */}
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#F2EFE9]/15" />
                <div className="absolute left-2/3 top-0 bottom-0 w-px bg-[#F2EFE9]/15" />
                <div className="absolute top-1/3 left-0 right-0 h-px bg-[#F2EFE9]/15" />
                <div className="absolute top-2/3 left-0 right-0 h-px bg-[#F2EFE9]/15" />
                <span className="absolute top-2.5 left-3 font-mono-tech text-[10px] tracking-[0.22em] text-[#F2EFE9]/85 uppercase bg-black/45 px-2 py-0.5 backdrop-blur-sm">
                  {activeRatio}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-[#8E8B84]">
              Interactive Frame Study
            </span>
            <div className="flex flex-wrap gap-2.5">
              {(Object.keys(ASPECT_NOTES) as AspectStudy[]).map((ratio) => (
                <button
                  key={ratio}
                  type="button"
                  onClick={() => setActiveRatio(ratio)}
                  className={`px-4 py-2 font-mono-tech text-xs tracking-[0.18em] uppercase border transition-colors duration-300 cursor-pointer ${
                    activeRatio === ratio
                      ? 'border-[#D4A56A] bg-[#D4A56A]/15 text-[#D4A56A]'
                      : 'border-[#F2EFE9]/15 text-[#8E8B84] hover:border-[#F2EFE9]/40 hover:text-[#F2EFE9]'
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>

            <div className="pt-2 grid">
              {(Object.keys(ASPECT_NOTES) as AspectStudy[]).map((ratio) => {
                const item = ASPECT_NOTES[ratio];
                const isActive = ratio === activeRatio;
                return (
                  <div
                    key={ratio}
                    aria-hidden={!isActive}
                    className={`col-start-1 row-start-1 space-y-3 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 invisible pointer-events-none select-none'
                    }`}
                  >
                    <h3 className="font-serif-display text-3xl font-light text-[#F2EFE9]">
                      {item.subtitle}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#F2EFE9]/75">{item.note}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#F2EFE9]/10 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84]">
              Toggle aspect ratios to see how framing reshapes tension
            </div>
          </div>
        </div>

        {/* Three Artistic Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#F2EFE9]/10 border border-[#F2EFE9]/10">
          {CRAFT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group bg-[#09090B] p-8 md:p-10 transition-colors duration-500 hover:bg-[#0F0F13]"
            >
              <div className="font-mono-tech text-xs tracking-[0.25em] text-[#D4A56A] mb-6">
                {pillar.number}
              </div>
              <h3 className="font-serif-display text-3xl font-light text-[#F2EFE9] mb-1">
                {pillar.title}
              </h3>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84] mb-5">
                {pillar.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-[#F2EFE9]/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
