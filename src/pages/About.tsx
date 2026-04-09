import { Blog } from "../components/Blog/Blog";

const aboutHighlights = [
  { label: "Now", text: "Engineering student at LACC, BuildLACCD intern, UrFriends dev" },
  { label: "Roots", text: "BFA from SAIC, Lexington-born, multidisciplinary maker" },
  { label: "Range", text: "Construction ops, hospitality leadership, art direction, software" },
];

const curiosityList = [
  "Designing community-driven software",
  "Digitizing construction workflows",
  "Making data feel human (fitness, fabrication, finance)",
];

const About = () => {
  return (
    <Blog title="About" construction={false}>
      <div className="space-y-16 text-slate-100">
        {/* Hero */}
        <section className="grid gap-10 rounded-2xl bg-slate-900/50 p-8 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Designer · Builder · Storyteller</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Context-switching between construction sites, code editors, and sketchbooks is my normal.
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              I grew up in Kentucky, cut my teeth in art school at SAIC, and moved to Los Angeles to work across
              specialty construction, hospitality, and entertainment. Today I split my time between BuildLACCD
              project management, UrFriends full-stack development, and anything that requires sharp systems thinking.
            </p>
            <div className="flex flex-wrap gap-3">
              {curiosityList.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Portrait Placeholder</p>
              <p className="mt-3 text-xl font-semibold text-white">Drop a high-contrast photo here</p>
              <p className="mt-2 text-sm text-slate-300">Suggested: clean lighting, subtle gradient background, confident but relaxed posture.</p>
            </div>
          </div>
        </section>

        {/* Snapshot cards */}
        <section className="grid gap-6 lg:grid-cols-3">
          {aboutHighlights.map((card) => (
            <article key={card.label} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">{card.label}</p>
              <p className="mt-3 text-lg font-medium text-white">{card.text}</p>
            </article>
          ))}
        </section>

        {/* Narrative */}
        <section className="space-y-6 text-lg leading-relaxed text-slate-200">
          <p>
            I thrive where hands-on execution meets polished storytelling. I have managed multimillion-dollar campus
            upgrades, shipped SaaS products, led hospitality teams, fabricated sets, and still carve out time to paint,
            sketch, and cycle the Los Angeles river paths. Each lane teaches me to stay calm, design deliberately, and
            communicate with clarity.
          </p>
          <p>
            Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear;
            years in hospitality taught me to keep people seen and projects moving. Whether I am refining data pipelines
            for the RIP Sheet fitness system or mentoring volunteers at HackMESA, the through-line is meticulous prep
            and a bias for momentum.
          </p>
          <p>
            When I am off laptop duty, you will find me studying new fabrication techniques, trail running, roasting
            coffee, or restoring gear I picked up at a flea market. I still say yes to the weird gigs—they keep me humble
            and curious.
          </p>
        </section>

        {/* Contact hint */}
        <section className="flex flex-wrap items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-6 py-5 text-sm text-cyan-100">
          <span className="text-xs uppercase tracking-[0.4em]">Next steps</span>
          <p className="text-base text-slate-100">
            Want the deeper story? Ping me via the contact page or LinkedIn—I'm always down to compare build notes, swap
            training ideas, or co-design something ambitious.
          </p>
        </section>
      </div>
    </Blog>
  );
};

export default About;
