import GalleryPage, { GalleryFrame } from "./GalleryPage";

const intro = [
  "3D Me is a stylized self-portrait built to practice topology, UV discipline, and rigging. I kept everything lightweight so it could move between Blender, Maya, and game engines without drama.",
  "The character is fully rigged with facial blendshapes, so I can drop it into motion tests or AR try-ons whenever I need a quick avatar.",
];

const frames: GalleryFrame[] = [
  {
    id: "Figure 1",
    caption: "Topology callouts",
    description: "Wireframe showing loop flow around the eyes and mouth. Clean edges make weight painting painless.",
  },
  {
    id: "Figure 2",
    caption: "Rig testing",
    description: "Pose library snapshots plus viewport captures from the weight-paint cleanup pass.",
  },
  {
    id: "Figure 3",
    caption: "Look dev",
    description: "Eevee render with toon ramps, subtle SSS, and a rim light pass for flair.",
  },
];

const ThreeDMeGallery = () => (
  <GalleryPage title="3D Me" slug="3d-me" discipline="Blender · Rigging" intro={intro} frames={frames} />
);

export default ThreeDMeGallery;
