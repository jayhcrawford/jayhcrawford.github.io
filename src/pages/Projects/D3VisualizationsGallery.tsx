import { Blog } from "../../components/Blog/Blog";
import {
  BLOG_ACCENT_TEXT,
  Blog_ButtonCTA,
  Blog_Card,
  Blog_HeroQuote,
  Blog_Image,
  Blog_Label,
  Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

const galleryData = [
  {
    id: "1",
    title: "Global Temperature Story",
    description:
      "Line chart built with D3 that animates global surface temperatures from 1880 to present—hovering reveals contextual callouts.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-1",
    files: "Codepen_files/1",
  },
  {
    id: "2",
    title: "Solar vs Wind Adoption",
    description:
      "Responsive stacked area chart comparing utility-scale solar and wind generation from 2000–2030.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-2",
    files: "Codepen_files/2",
  },
  {
    id: "3",
    title: "Malibu Fire Explorer",
    description:
      "Interactive chloropleth overlaying historical fire perimeter data on top of a simplified California coastline map.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-3",
    files: "Codepen_files/3",
  },
  {
    id: "4",
    title: "Clock Tower B-sides",
    description:
      "Radial visualization that converts streaming counts into a kinetic dial—each spoke pulses based on play velocity.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-4",
    files: "Codepen_files/4",
  },
];

const placeholderImg = (id: string) =>
  `https://placehold.co/1200x675/0f172a/ffffff?text=D3+Visualization+${id}`;

const D3VisualizationsGallery = () => {
  const accentText = BLOG_ACCENT_TEXT;

  return (
    <Blog construction={false} title="D3 Visualizations">
      <div className="space-y-10 text-slate-100">
        <Blog_Card tone="glass" className="space-y-6 text-center">
          <Blog_Label>Codepen workbench</Blog_Label>
          <Blog_HeroQuote
            quote="Visualizing data keeps me honest about the story I'm telling."
            sizePreset="balanced"
          />
          <Blog_Paragraph>
            This page collects several D3 experiments originally published to Codepen. Each section will eventually
            embed the live visualization; for now I’m including placeholder frames, links out to the pens, and a note
            about where the source files live inside this repo.
          </Blog_Paragraph>
        </Blog_Card>

        {galleryData.map((viz) => (
          <Blog_Card key={viz.id} className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <Blog_Label align="left">{viz.title}</Blog_Label>
              <span className={`text-sm ${accentText}`}>{viz.tech}</span>
            </div>
            <Blog_Paragraph>{viz.description}</Blog_Paragraph>
            <Blog_Image
              variant="full"
              src={placeholderImg(viz.id)}
              alt={`${viz.title} preview`}
              figureCaption="Live embed coming soon"
              withMatte
              imgClassName="mx-auto w-full max-w-5xl aspect-video object-cover"
              figcaptionClassName={accentText}
            />
            <div className="flex flex-wrap gap-4">
              <Blog_ButtonCTA href={viz.pen} label="View Codepen" />
              <Blog_ButtonCTA href={`https://github.com/jayhcrawford/jayhcrawford.github.io/tree/main/${viz.files}`} label="Browse source files" />
            </div>
          </Blog_Card>
        ))}
      </div>
    </Blog>
  );
};

export default D3VisualizationsGallery;
