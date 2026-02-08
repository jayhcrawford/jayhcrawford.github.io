// TODO: Replace stub arrays with real painting filenames per period

export interface PaintingPeriod {
  slug: string;
  title: string;
  year_label: string;
  images: string[];
}

const placeholder_images = [




  "behind.webp",
  "blinker.webp",
  "blue_girl_1.webp",
  "blue_girl_2.webp",
  "bouquet.webp",
  "bright_lights_big_city.webp",
  "business_card.webp",
  "california_onlookers.webp",
  "connection.webp",
  "dips.webp",
  "eyes.webp",
  "following.webp",
  "funny_mustache_guy.webp",
  "G.webp",
  "hilltop_city.webp",
  "hollywood_hills.webp",
  "house.webp",
  "in_the_city.webp",
  "jacks_2.webp",
  "jacks.webp",
  "james.webp",
  "KP.webp",
  "locked_away.webp",
  "network.webp",
  "night.webp",
  "one_way.webp",
  "online.webp",
  "outlooker.webp",
  "perspective.webp",
  "pictures_of_then.webp",
  "portrait_copy.webp",
  "rainy_sun.webp",
  "researchers.webp",
  "street_corner.webp",
  "sunday.webp",
  "time.webp",
  "tornado.webp",
  "transfer.webp",
  "victorian.webp",
  "what_do_you.webp",
  "woah_dude.webp",
  "worm.webp",
  "x.webp"
];



const paintings_2021 = [
      "alley.webp",
];

const paintings_2022 = [
      "bada_bing.webp",
];


const paintings_2023 = [
      "bad_painting.webp",
];

const paintings_2024 = [
    "alien_invasion.webp",
];

const paintings_2025 = [
  "what_do_you.webp",
  "woah_dude.webp",
  "worm.webp",
  "x.webp"
];

export const painting_periods: PaintingPeriod[] = [
  {
    slug: "2025p",
    title: "2025",
    year_label: "2025",
    images: paintings_2025,
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
