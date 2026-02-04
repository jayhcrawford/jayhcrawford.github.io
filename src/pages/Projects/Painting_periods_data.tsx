// TODO: Replace stub arrays with real painting filenames per period

export interface PaintingPeriod {
  slug: string;
  title: string;
  year_label: string;
  images: string[];
}

const placeholder_images = [
  "KP.webp",
  "G.webp",
  "alien_invasion.webp",
  "alley.webp",
  "bad_painting.webp",
  "bada_bing.webp",
  "behind.webp",
  "blinker.webp",
];

export const painting_periods: PaintingPeriod[] = [
  {
    slug: "2025p",
    title: "2025",
    year_label: "2025",
    images: placeholder_images.slice(0, 6),
  },
  {
    slug: "2024p",
    title: "2024",
    year_label: "2024",
    images: placeholder_images.slice(0, 6),
  },
  {
    slug: "2023p",
    title: "2023",
    year_label: "2023",
    images: placeholder_images.slice(0, 6),
  },
  {
    slug: "2022p",
    title: "2022",
    year_label: "2022",
    images: placeholder_images.slice(0, 6),
  },
  {
    slug: "2021p",
    title: "2021",
    year_label: "2021",
    images: placeholder_images.slice(0, 6),
  },
  {
    slug: "2020p",
    title: "2020",
    year_label: "2020",
    images: placeholder_images.slice(0, 8),
  },
];

export const painting_periods_by_slug = painting_periods.reduce(
  (acc, period) => {
    acc[period.slug] = period;
    return acc;
  },
  {} as Record<string, PaintingPeriod>
);
