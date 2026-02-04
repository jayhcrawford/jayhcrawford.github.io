import { artist_name, heroFont, tertiaryFont } from '../styles';
import { github, instagram, linkedin } from '../../linkbase';

const Contact = () => {
  return (
    <div className="text-white" style={{ fontFamily: tertiaryFont }}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm opacity-70">Contact</p>
            <h1 style={{ fontFamily: heroFont }} className="text-4xl md:text-6xl font-bold mt-4">
              Let&#39;s build something bold.
            </h1>
            <p className="mt-4 text-lg opacity-80 max-w-xl">
              Reach out for collaborations, commissions, or just to say hello. I&#39;m based in
              Los Angeles and always open to new ideas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:jayhcrawford@gmail.com"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10"
              >
                Email Me
              </a>
              <a
                href={linkedin}
                target="new"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-white hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] opacity-70">Direct</p>
            <h2 style={{ fontFamily: heroFont }} className="text-3xl font-semibold mt-3">
              {artist_name}
            </h2>
            <p className="opacity-80 mt-2">Los Angeles, CA</p>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.3em] opacity-70">Email</p>
              <a className="text-lg font-semibold hover:underline" href="mailto:jayhcrawford@gmail.com">
                jayhcrawford@gmail.com
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.3em] opacity-70">Social</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <a className="hover:underline" href={linkedin} target="new">LinkedIn</a>
                <a className="hover:underline" href={instagram} target="new">Instagram</a>
                <a className="hover:underline" href={github} target="new">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
