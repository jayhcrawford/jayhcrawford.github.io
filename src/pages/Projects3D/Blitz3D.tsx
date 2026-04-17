import GalleryPage, { GalleryFrame } from "./GalleryPage";

const intro = [
  "Blitz3D was my first taste of shipping a playable experience. I set out to recreate the neon-lit arenas of early-2000s shooters with lightweight C-style scripting and old-school BSP tricks.",
  "I’m rebuilding a few of those arenas now with better lighting, post effects, and upscaled textures so I can document the workflow properly.",
];

const frames: GalleryFrame[] = [
  {
    id: "Figure 1",
    caption: "Arena blockout",
    description: "Greyboxed layout blocked in with basic lighting volumes. Gameplay pathing + spawn locations are annotated for future scripting.",
  },
  {
    id: "Figure 2",
    caption: "Shader doodles",
    description: "Blitz3D doesn’t have PBR, so I faked bloom + glow by stacking mesh shells with additive materials. These stills show the process.",
  },
  {
    id: "Figure 3",
    caption: "Target render",
    description: "Final look goal mocked up in Photoshop before porting assets. Gives me a north star for the remaster pass.",
  },
];

const Blitz3DGallery = () => (
  <GalleryPage title="Blitz3D" slug="blitz3d" discipline="Blitz3D · Milkshape" intro={intro} frames={frames} />
);

export default Blitz3DGallery;
