import { Blog } from "../../components/Blog/Blog";
import {
  BLOG_ACCENT_TEXT,
  Blog_ButtonCTA,
  Blog_Card,
  Blog_HeroQuote,
  Blog_Label,
  Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

import viz1Html from "../../../Codepen_files/1/html.html?raw";
import viz1Css from "../../../Codepen_files/1/css.css?raw";
import viz1Js from "../../../Codepen_files/1/js.js?raw";

import viz2Html from "../../../Codepen_files/2/html.html?raw";
import viz2Css from "../../../Codepen_files/2/css.css?raw";
import viz2Js from "../../../Codepen_files/2/js.js?raw";

import viz3Html from "../../../Codepen_files/3/html.html?raw";
import viz3Css from "../../../Codepen_files/3/css.css?raw";
import viz3Js from "../../../Codepen_files/3/js.js?raw";

import viz4Html from "../../../Codepen_files/4/html.html?raw";
import viz4Css from "../../../Codepen_files/4/css.css?raw";
import viz4Js from "../../../Codepen_files/4/js.js?raw";

const galleryData = [
  {
    id: "1",
    title: "Global Temperature Story",
    description:
      "Line chart built with D3 that animates global surface temperatures from 1880 to present—hovering reveals contextual callouts.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-1",
    files: "Codepen_files/1",
    html: viz1Html,
    css: viz1Css,
    js: viz1Js,
  },
  {
    id: "2",
    title: "Solar vs Wind Adoption",
    description:
      "Responsive stacked area chart comparing utility-scale solar and wind generation from 2000–2030.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-2",
    files: "Codepen_files/2",
    html: viz2Html,
    css: viz2Css,
    js: viz2Js,
  },
  {
    id: "3",
    title: "Malibu Fire Explorer",
    description:
      "Interactive choropleth overlaying historical fire perimeter data on top of a simplified California coastline map.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-3",
    files: "Codepen_files/3",
    html: viz3Html,
    css: viz3Css,
    js: viz3Js,
  },
  {
    id: "4",
    title: "Clock Tower B-sides",
    description:
      "Radial visualization that converts streaming counts into a kinetic dial—each spoke pulses based on play velocity.",
    tech: "HTML · CSS · D3.js",
    pen: "https://codepen.io/jayhcrawford/full/temp-4",
    files: "Codepen_files/4",
    html: viz4Html,
    css: viz4Css,
    js: viz4Js,
  },
];

const sanitizeJs = (js: string) => js.replace(/<\/script>/g, "<\\/script>");

const buildSrcDoc = (html: string, css: string, js: string) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { margin: 0; font-family: 'Inter', sans-serif; }
      ${css}
    </style>
  </head>
  <body>
    ${html}
    <script>
      ${sanitizeJs(js)}
    </script>
  </body>
</html>`;

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
            Each section below embeds the original D3 sketch inline (via <code>srcDoc</code>). For best performance
            these run in isolated iframes; swap them for dedicated React components later if we want tighter control.
          </Blog_Paragraph>
        </Blog_Card>

        {galleryData.map((viz) => (
          <Blog_Card key={viz.id} className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <Blog_Label align="left">{viz.title}</Blog_Label>
              <span className={`text-sm ${accentText}`}>{viz.tech}</span>
            </div>
            <Blog_Paragraph>{viz.description}</Blog_Paragraph>
            <div className="rounded-2xl border border-white/15 bg-black/30 p-2">
              <iframe
                title={viz.title}
                srcDoc={buildSrcDoc(viz.html, viz.css, viz.js)}
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
                className="w-full rounded-xl bg-white"
                style={{ minHeight: 520 }}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <Blog_ButtonCTA href={viz.pen} label="View on Codepen" />
              <Blog_ButtonCTA
                href={`https://github.com/jayhcrawford/jayhcrawford.github.io/tree/main/${viz.files}`}
                label="Browse source files"
              />
            </div>
          </Blog_Card>
        ))}
      </div>
    </Blog>
  );
};

export default D3VisualizationsGallery;
