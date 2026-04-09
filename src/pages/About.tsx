import { Blog } from "../components/Blog/Blog";
import { Blog_ButtonCTA } from "../components/Blog/Blog_Pieces";

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

const softwareShowcasePlaceholder = [
  { name: "Photoshop", logo: "/path/to/logo" },
  { name: "Illustrator", logo: "/path/to/logo" },
  { name: "Autodesk Maya", logo: "/path/to/logo" },
  { name: "AWS", logo: "/path/to/logo" },
  { name: "Blender", logo: "/path/to/logo" },
  { name: "Fusion 360", logo: "/path/to/logo" },
  { name: "SOLIDWORKS", logo: "/path/to/logo" },
  { name: "Next.js", logo: "/path/to/logo" },
  { name: "Firebase", logo: "/path/to/logo" },
  { name: "Bluebeam", logo: "/path/to/logo" },
];

// TODO: Build out qualities list


const About = () => {
  return (
    <Blog title="About" construction={false}>
      <div className="relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Portrait Placeholder</p>
          <p className="mt-3 text-xl font-semibold text-white">Drop a high-contrast photo here</p>
          <p className="mt-2 text-sm text-slate-300">Suggested: clean lighting, subtle gradient background, confident but relaxed posture.</p>
        </div>
      </div>
      <div className="space-y-16 text-slate-100">
        {/* Hero */}
        <section className="grid gap-10 rounded-2xl bg-slate-900/50 p-8 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Designer · Builder · Storyteller</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl mt-10 mb-10">
              Context-switching between <strong>construction sites</strong>, <strong>code editors</strong>, and <strong>sketchbooks</strong> is my normal.
            </h1>
            <p className="text-lg leading-relaxed text-slate-200 mt-5">
              I grew up in Kentucky, cut my teeth in art school at SAIC, and moved to Los Angeles to work across
              specialty construction, hospitality, and entertainment. Today I split my time between <strong>BuildLACCD
                project management</strong>, <strong>UrFriends full-stack development</strong>, my passion for the fitness & the outdoors, and anything that requires sharp systems thinking.
            </p>
            <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5/20 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-200 p-5">Qualities</p>
              <div className="flex flex-wrap gap-3">
                {curiosityList.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot cards */}
        <section className="grid gap-6 lg:grid-cols-3">
          {aboutHighlights.map((card) => (
            <article key={card.label} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">{card.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{card.text}</p>
            </article>
          ))}
        </section>

        {/* Narrative */}
        <section className="space-y-6 text-lg leading-relaxed text-slate-200">
          <p>
            I thrive where <strong>hands-on execution</strong> meets <strong>polished storytelling</strong>. I have managed multimillion-dollar campus
            upgrades, shipped SaaS products, led hospitality teams, fabricated sets, and still carve out time to paint,
            sketch, and cycle the Los Angeles river paths. Each lane teaches me to stay calm, design deliberately, and
            communicate with clarity.
          </p>
          <p>
            Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear;
            years in hospitality taught me to keep people seen and projects moving. Whether I am refining <strong>RIP Sheet data pipelines</strong>
            or mentoring volunteers at <strong>HackMESA</strong>, the through-line is meticulous prep and a bias for momentum.
          </p>
          <p>
            When I am off laptop duty, you will find me studying new fabrication techniques, trail running, roasting
            coffee, or restoring gear I picked up at a flea market. I still say yes to the weird gigs—they keep me humble
            and curious.
          </p>
        </section>

        {/* // TODO: Build out software list */}
        <section className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-white">Software Skills</h2>
          </div>
          <p className="text-sm text-slate-300"></p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {softwareShowcasePlaceholder.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-slate-800/60 text-xs uppercase tracking-wide text-slate-400">
                  Logo
                </div>
                <p className="text-sm font-medium text-white">{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact hint */}
        <section className="flex flex-wrap items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-6 py-5 text-sm text-cyan-100">
          <span className="text-xs uppercase tracking-[0.4em]">Next steps</span>
          <div className="flex flex-col gap-3 text-base text-slate-100">
            <p>Want the deeper story? Reach out and I'll send the long-form version.</p>
            <Blog_ButtonCTA href="/contact" label="Open contact page" newTab={false} />
          </div>
        </section>
      </div>
    </Blog>
  );
};

export default About;
