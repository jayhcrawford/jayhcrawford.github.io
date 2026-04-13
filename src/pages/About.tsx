import { linkedin } from "../../linkbase";
import { Blog } from "../components/Blog/Blog";
import { Blog_ButtonCTA, Blog_Paragraph } from "../components/Blog/Blog_Pieces";

const aboutHighlights = [
  { label: "Now", items: ["Engineering student at LACC", "BuildLACCD intern", "UrFriends dev"] },
  { label: "Roots", items: ["BFA from SAIC", "Lexington-born", "multidisciplinary maker"] },
  { label: "Range", items: ["Construction ops", "hospitality leadership", "art direction", "software"] },
];

const curiosityList = [
  "Designing community-driven software",
  "Digitizing construction workflows",
  "Making data feel human (fitness, fabrication, finance)",
];

const softwareStacks = [
  {
    title: "Creative Tools",
    tools: ["Photoshop", "Illustrator", "Maya", "Blender", "Fusion 360", "SOLIDWORKS"],
  },
  {
    title: "Coding / Languages",
    tools: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    title: "Web Dev & Platforms",
    tools: ["Next.js", "Firebase", "Stripe", "Vercel", "Render", "Tailwind"],
  },
];

const accentText = "text-[#CCCFD9]";

// TODO: Build out qualities list


const About = () => {
  return (
    <Blog title="About" construction={false}>
      <style>

        {`
        /* Custom scrollbar styles */
        `}
        {/* p {
         margin-bottom: 1.5em;
        } */}
        `
      </style>
      <div className="relative flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-800/40 p-6 text-center">
        <div>
          <p className={`text-sm uppercase tracking-[0.3em] ${accentText}`}>
            Portrait Placeholder
          </p>
          <p className="mt-3 text-xl font-semibold text-white">Drop a high-contrast photo here</p>
          <p className="mt-2 text-sm text-slate-300">Suggested: clean lighting, subtle gradient background, confident but relaxed posture.</p>
        </div>
      </div>
      <div className="space-y-16 text-slate-100">
        {/* Hero */}
        <section className="grid gap-10 rounded-2xl p-8 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-6">
            <p className={`text-center text-sm uppercase tracking-[0.3em] ${accentText}`}>
              Designer · Builder · Storyteller
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl mt-10 mb-10">
              Context-switching between <strong>construction sites</strong>, <strong>code editors</strong>, and <strong>sketchbooks</strong> is my normal.
            </h1>
            <Blog_Paragraph>
              I grew up in Kentucky, cut my teeth in <strong>art school</strong> at SAIC, and moved to Los Angeles in 2017 to pursue dreams; <i>LA has become home now. </i>The city's beauty, its diversity, the weather, the culture, I love what it has to offer here  — here I've worked across
              specialty construction, hospitality, and entertainment. Today I split my time between BuildLACCD <strong>
                project management</strong>, UrFriends<strong> full-stack development</strong>, <strong>engineering school</strong>, my passion for the fitness & creativity.
            </Blog_Paragraph>
            <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5/20 mt-5 pt-1 p-6">
              <p className={`text-xs uppercase tracking-[0.4em] pb-5 pt-5 ${accentText}`}>What Drives Me</p>
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
              <p className={`text-xs uppercase tracking-[0.4em] ${accentText}`}>
                {card.label}
              </p>
              <ul className="mt-3 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="text-lg font-semibold text-white flex items-start">
                    <span className="mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Narrative */}
        <section className="space-y-6 text-lg leading-relaxed text-slate-200">
          {/* TODO: spin up a dedicated fitness/brag section that frames consistent training as a leadership habit. */}
          <Blog_Paragraph>
            I thrive where <strong>hands-on execution</strong> meets <strong>polished storytelling</strong>. I have <strong><a href={linkedin} target='_blank' className="hover:text-white/80 transition-colors"><u>managed multimillion-dollar campus upgrades</u></a></strong>, <strong><a href="/projects/urfriends" className="hover:text-white/80 transition-colors"><u>shipped SaaS products</u></a></strong>, led hospitality teams, fabricated sets, and still carve out time to paint,
            sketch, and cycle the Los Angeles river paths. Fitness is a huge passion of mine, especially running and cycling. As a runner, I love the distance and concentration, and as a cyclist I love the freedom. Each lane teaches me to stay calm, design deliberately, and
            communicate with clarity — and in every world thoughts of finding cross-pollination drive my imagination wild! I'm always looking for new ways to learn.
          </Blog_Paragraph>
          <Blog_Paragraph>
            Engineering school sharpened my math and systems thinking; art school wired me to experiment without fear;
            years in hospitality taught me to keep people seen and to communicate <i>thoroughly</i>. School in STEM has been extremely rewarding — it has exposed me to tools that I've used for refining and analyzing
            <strong><a href="/projects/ripsheet" className="hover:text-white/80 transition-colors"> <u>personal fitness systems</u></a></strong>, allowed me to tutor fellow students at MESA; I've celebrated and philosophized in the Human Computer Interaction Club, helped organize a hackathon, I've gone from 'self-taught' programmer to someone who understands computer science paradigms, and become <i>actually</i> kind of fascinated by math.
          </Blog_Paragraph>
          <Blog_Paragraph>
            When I am not laboring (with love ofc), you will find me studying new fabrication techniques, spelunking the wiki of my latest fascination, long-distnace or trail running, homecanning beans (they're SO good), riding my bike around LA, going to an art museum, or tinkering creatively. I'm big on "hippie" type stuff, get way into reading about future green-tech, and resonate with preserving the environment — you can absolutely find me using a bicycle and public transit.
          </Blog_Paragraph>
          <Blog_Paragraph>
            I still say yes to the weird gigs — they keep me humble
            and curious.
          </Blog_Paragraph>
        </section>

        {/* Software showcase placeholder */}
        <section className="space-y-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-white">Digital skills</h2>
            <span className={`text-xs uppercase tracking-[0.4em] ${accentText}`}>TODO: ADD GRAPHIC</span>
          </div>
          <div className="space-y-6">
            {softwareStacks.map((stack) => (
              <div key={stack.title} className="space-y-3">
                <p className={`text-s uppercase tracking-[0.4em]  p-5 text-center font-bold ${accentText}`}>{stack.title}</p>
                {/* <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 lg:grid-cols-5 xl:grid-cols-6">
                 */}
                 <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {stack.tools.map((tool) => (
                    <div key={tool} className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-slate-800/60 text-xs uppercase tracking-wide text-slate-400">
                        Logo
                      </div>
                      <p className="text-sm font-medium text-white">{tool}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact hint */}
        <section
          className={`flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-slate-800/40 px-6 py-5 text-sm ${accentText}`}
        >
          <p className="text-xs uppercase tracking-[0.4em]">Next steps</p>
          <div className="flex flex-col gap-3 text-base text-slate-100">
            <p className="text-center">I love <strong>building</strong> and <strong>creating</strong>, and if you can use my help, <strong>please reach out!</strong></p>
            <Blog_ButtonCTA href="/contact" label="Open Contact Page" newTab={false} />
          </div>
        </section>
      </div>
    </Blog>
  );
};

export default About;
