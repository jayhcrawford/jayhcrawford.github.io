// TODO: Replace stub arrays with real painting filenames per period

export interface PaintingPeriod {
  slug: string;
  title: string;
  year_label: string;
  images: string[];
}

const paintings_2020 = [
  "pictures_of_then.webp",
  "alley.webp",
  "bright_lights_big_city.webp",
  "behind.webp",
  "G.webp",
  "business_card.webp",
  "blue_girl_1.webp",
  "connection.webp",
  "dips.webp",
  "street_corner.webp",
];

const paintings_2021 = [
  "alley.webp",
  "blue_girl_2.webp",
  "KP.webp",
  "hilltop_city.webp",
  "house.webp",
  "in_the_city.webp",
  "jacks.webp",
  "locked_away.webp",
  "one_way.webp",
  "time.webp",

];

const paintings_2022 = [
  "bada_bing.webp",
  "california_onlookers.webp",
  "eyes.webp",
  "following.webp",
  "hollywood_hills.webp",
  "rainy_sun.webp",
  "sunday.webp",
  "tornado.webp",
  "victorian.webp",
  "woah_dude.webp",
];


const paintings_2023 = [
  "bad_painting.webp",
  "bouquet.webp",
  "blinker.webp",
  "james.webp",
  "night.webp",
  "outlooker.webp",
  "transfer.webp",
  "what_do_you.webp",
];

const paintings_2024 = [
  "alien_invasion.webp",
  "funny_mustache_guy.webp",
  "jacks_2.webp",
  "online.webp",
  "perspective.webp",
  "portrait_copy.webp",
  "researchers.webp",
  "x.webp",

];

const paintings_2025 = [
  "worm.webp",
  "network.webp",
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
    images: paintings_2024,
  },
  {
    slug: "2023p",
    title: "2023",
    year_label: "2023",
    images: paintings_2023,
  },
  {
    slug: "2022p",
    title: "2022",
    year_label: "2022",
    images: paintings_2022,
  },
  {
    slug: "2021p",
    title: "2021",
    year_label: "2021",
    images: paintings_2021,
  },
  {
    slug: "2020p",
    title: "2020",
    year_label: "2020",
    images: paintings_2020,
  },
];

export const painting_periods_by_slug = painting_periods.reduce(
  (acc, period) => {
    acc[period.slug] = period;
    return acc;
  },
  {} as Record<string, PaintingPeriod>
);
