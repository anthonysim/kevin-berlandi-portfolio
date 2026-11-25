import {
  TELEVISION_CREDITS,
  FILM_BACKGROUND_CREDITS,
  COMMERCIAL_BRANDS,
} from '../data/portfolio';

export function CreditsAndAbout() {
  return (
    <>
      {/* CREDITS ARCHIVE */}
      <section id="credits" className="border-t border-[#F2EFE9]/10 py-24 md:py-32 bg-[#0B0B0E]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A] mb-4">
              03 · Credits & Brand Roster
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-light text-[#F2EFE9]">
              Selected <span className="italic">Credits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Episodic Television */}
            <div className="lg:col-span-5">
              <h3 className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-[#8E8B84] pb-4 border-b border-[#F2EFE9]/15 mb-4">
                Episodic Television
              </h3>
              <ul className="divide-y divide-[#F2EFE9]/10">
                {TELEVISION_CREDITS.map((credit) => (
                  <li
                    key={credit.title}
                    className="flex items-baseline justify-between py-3.5 group"
                  >
                    <span className="font-serif-display text-2xl font-light text-[#F2EFE9] group-hover:text-[#D4A56A] transition-colors">
                      {credit.title}
                    </span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#8E8B84]">
                      {credit.network}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Film & Studio Pedigree */}
            <div className="lg:col-span-4">
              <h3 className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-[#8E8B84] pb-4 border-b border-[#F2EFE9]/15 mb-4">
                Narrative Film & Studio Pedigree
              </h3>
              <ul className="divide-y divide-[#F2EFE9]/10">
                {FILM_BACKGROUND_CREDITS.map((item) => (
                  <li key={item.title} className="py-3.5">
                    <div className="font-serif-display text-xl text-[#F2EFE9]">{item.title}</div>
                    <div className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#8E8B84] mt-0.5">
                      {item.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Clients */}
            <div className="lg:col-span-3">
              <h3 className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-[#8E8B84] pb-4 border-b border-[#F2EFE9]/15 mb-6">
                Commercial Partners
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {COMMERCIAL_BRANDS.map((brand) => (
                  <div
                    key={brand}
                    className="border border-[#F2EFE9]/12 bg-[#09090B] px-4 py-3 text-center font-serif-display text-lg tracking-wide text-[#F2EFE9]/85 transition-colors hover:border-[#D4A56A]/50 hover:text-[#D4A56A]"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / BIOGRAPHY */}
      <section id="about" className="border-t border-[#F2EFE9]/10 py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Director Portrait Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A] mb-4">
                  04 · The Director
                </p>
                <h2 className="font-serif-display text-4xl sm:text-5xl font-light leading-[1.08] text-[#F2EFE9]">
                  Born between <span className="italic">independent cinema</span> and studio
                  spectacle.
                </h2>
              </div>

              {/* Archival Director Portrait */}
              <figure className="group relative border border-[#F2EFE9]/15 bg-[#0E0E12] p-3">
                <div className="relative aspect-square w-full overflow-hidden bg-[#F2EFE9]">
                  <img
                    src="/images/kevin-berlandi.webp"
                    alt="Kevin Berlandi — Film, Television & Commercial Director"
                    className="h-full w-full object-cover object-top grayscale contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle archival darkroom vignette */}
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_48px_rgba(9,9,11,0.18)]" />
                </div>
                <figcaption className="mt-3 flex items-center justify-between px-1 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8E8B84]">
                  <span>Kevin Berlandi</span>
                  <span className="text-[#D4A56A]/85">Director · Los Angeles</span>
                </figcaption>
              </figure>

              <blockquote className="border-l border-[#D4A56A] pl-5 font-serif-display italic text-xl md:text-2xl text-[#F2EFE9]/85 leading-relaxed">
                “Scale only matters when it amplifies the human heartbeat at the center of the
                frame.”
              </blockquote>
            </div>

            <div className="lg:col-span-7 lg:pt-12 space-y-6 text-base leading-relaxed text-[#F2EFE9]/75">
              <p>
                <strong className="font-medium text-[#F2EFE9]">Kevin Berlandi</strong> is a Los
                Angeles-based film, television, and commercial director whose visual sensibility was
                forged at the intersection of intimate independent storytelling and monumental
                studio filmmaking.
              </p>
              <p>
                After earning his degree in Marketing Advertising with a concentration in Film
                Production from <span className="text-[#F2EFE9]">Emerson College</span>, Kevin
                spent his formative years on the sets of major motion pictures—working as an
                Assistant Director on global franchises including <em>Transformers</em>,{' '}
                <em>The Avengers</em>, and <em>The Bourne Legacy</em>, as well as collaborating on
                acclaimed features such as Mike Nichols’ <em>Charlie Wilson’s War</em>.
              </p>
              <p>
                Stepping into the director’s chair, his narrative short film{' '}
                <em className="text-[#F2EFE9]">Hana Sasaki’s Tail</em> (adapted from{' '}
                <em>Three Scenarios</em>) premiered at the{' '}
                <span className="text-[#D4A56A]">Festival de Cannes</span>. Selected for the DGA’s
                Director Development Initiative, Sony’s Television Directing Program, and the CBS
                Directing Program, he has gone on to direct primetime episodes of{' '}
                <em>Rescue: HI-Surf</em>, <em>Found</em>, <em>Partner Track</em>,{' '}
                <em>NCIS: Hawaiʻi</em>, <em>NCIS: Los Angeles</em>, <em>The Blacklist</em>,{' '}
                <em>Criminal Minds</em>, and <em>Bull</em>, alongside global commercial campaigns
                for Audi, Porsche, Jeep, GMC, Toyota, and Nissan.
              </p>

              {/* Leadership & Affiliations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#F2EFE9]/10">
                <div>
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#D4A56A] mb-1.5">
                    Guild Leadership
                  </div>
                  <div className="text-sm text-[#F2EFE9]/90">
                    Directors Guild of America (DGA) · Former Co-Chair, Asian American Committee
                  </div>
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#D4A56A] mb-1.5">
                    Academy
                  </div>
                  <div className="text-sm text-[#F2EFE9]/90">
                    Voting Member, Television Academy · DGA, Sony & CBS Directing Programs
                  </div>
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#D4A56A] mb-1.5">
                    Mentorship
                  </div>
                  <div className="text-sm text-[#F2EFE9]/90">
                    Lecturer, Chapman University Dodge College of Film and Media Arts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
