import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="border-t border-[#F2EFE9]/10 bg-[#070709] pt-24 pb-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 pb-20 border-b border-[#F2EFE9]/10">
          {/* Representation & Direct Details */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[#D4A56A] mb-4">
                05 · Representation & Inquiries
              </p>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-[#F2EFE9] leading-[1.06]">
                Let’s make something <span className="italic text-[#D4A56A]">unforgettable.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              <div className="border-t border-[#F2EFE9]/15 pt-5">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[#8E8B84] mb-2">
                  Representation
                </div>
                <div className="font-serif-display text-2xl text-[#F2EFE9]">
                  Independent Artist Group (IAG)
                </div>
                <div className="text-sm text-[#F2EFE9]/75 mt-1">Jack Leighton</div>
                <div className="font-mono-tech text-[11px] text-[#8E8B84] mt-2">
                  Film · Television · Commercials
                </div>
              </div>

              <div className="border-t border-[#F2EFE9]/15 pt-5">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[#8E8B84] mb-2">
                  Production Studio
                </div>
                <div className="font-serif-display text-2xl text-[#F2EFE9]">
                  Berlandi Productions
                </div>
                <div className="text-sm text-[#F2EFE9]/75 mt-1">Los Angeles, California</div>
                <a
                  href="mailto:info@berlandi.co"
                  className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] text-[#D4A56A] mt-2 hover:underline"
                >
                  <span>info@berlandi.co</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Project / Screener Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="border border-[#F2EFE9]/12 bg-[#0C0C0F] p-7 md:p-9">
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[#8E8B84] mb-6">
                Request Private Screener / Direct Inquiry
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="h-8 w-8 text-[#D4A56A] mx-auto" />
                  <h3 className="font-serif-display text-3xl text-[#F2EFE9]">Inquiry Received</h3>
                  <p className="text-sm text-[#8E8B84] max-w-md mx-auto">
                    Thank you for reaching out. Berlandi Productions or IAG representation will
                    respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#D4A56A] hover:underline cursor-pointer"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border border-[#F2EFE9]/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-[#F2EFE9] placeholder:text-[#8E8B84]/50 focus:border-[#D4A56A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@studio.com"
                        className="w-full border border-[#F2EFE9]/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-[#F2EFE9] placeholder:text-[#8E8B84]/50 focus:border-[#D4A56A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84] mb-2">
                      Discipline
                    </label>
                    <select className="w-full border border-[#F2EFE9]/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-[#F2EFE9] focus:border-[#D4A56A] focus:outline-none">
                      <option>Episodic Television</option>
                      <option>Feature / Narrative Film</option>
                      <option>Commercial / Brand Film</option>
                      <option>Private Screener Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8E8B84] mb-2">
                      Project Notes
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Script, campaign brief, dates, or screener request..."
                      className="w-full border border-[#F2EFE9]/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-[#F2EFE9] placeholder:text-[#8E8B84]/50 focus:border-[#D4A56A] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full border border-[#D4A56A] bg-[#D4A56A]/15 py-3 font-mono-tech text-xs uppercase tracking-[0.24em] text-[#D4A56A] transition-all duration-300 hover:bg-[#D4A56A] hover:text-[#09090B] cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-[#8E8B84]">
          <div>© {new Date().getFullYear()} Kevin Berlandi · Berlandi Productions</div>
          <div className="flex items-center gap-6">
            <span>Los Angeles, CA</span>
            <span>·</span>
            <span>DGA</span>
            <span>·</span>
            <span>Television Academy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
