import GalleryPage, { GalleryFrame } from "./GalleryPage";

const intro = [
  "My Place is a calm, overstim-proof loft visualization. Modeled in Maya, textured with Substance assets, and rendered with Arnold on my local workstation.",
  "The brief was simple: design a space that feels like a quiet escape after high-energy shoots and events, with lighting that still makes hardware and sculpture pop.",
];

const frames: GalleryFrame[] = [
  {
    id: "Figure 1",
    caption: "Orthographic overview",
    description:
      "Wide shot showing the seating platform, cantilevered desk, and layered shelving. Matte charcoal finishes wrap the room while hidden LED channels keep the contrast high.",
  },
  {
    id: "Figure 2",
    caption: "Material block + lighting passes",
    description:
      "Arnold test render with roughness maps dialed in on the microcement walls plus warm bounce lighting from the perimeter cove.",
  },
  {
    id: "Figure 3",
    caption: "Hero angle",
    description:
      "Final render featuring the custom chaise, wall sculpture, and the 15-foot sliding glass panel that opens to a private balcony.",
  },
];

const MyPlaceGallery = () => (
  <GalleryPage
    title="My Place"
    slug="my-place"
    discipline="Autodesk Maya · Arnold"
    intro={intro}
    frames={frames}
  />
);

export default MyPlaceGallery;
