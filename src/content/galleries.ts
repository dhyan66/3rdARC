export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Gallery = {
  slug: string;
  title: string;
  year: number;
  location: string;
  tags: string[];
  cover: string;
  story: string;
  featured?: boolean;
  photos: GalleryPhoto[];
};

export const galleries: Gallery[] = [
  {
    slug: "still-water-high-light",
    title: "Still Water, High Light",
    year: 2023,
    location: "Lisbon + Cascais",
    tags: ["coast", "architecture", "still life"],
    cover: "/placeholders/galleries/still-water-high-light/cover.svg",
    story:
      "Soft horizons, saline air, and quiet architectural studies along the Portuguese coast. This series follows a slow rhythm of light across stone, glass, and water.",
    featured: true,
    photos: Array.from({ length: 12 }).map((_, index) => ({
      src: `/placeholders/galleries/still-water-high-light/${index + 1}.svg`,
      alt: `Still Water, High Light photo ${index + 1}`,
      width: index % 3 === 0 ? 1400 : 1600,
      height: index % 3 === 0 ? 1800 : 1200,
    })),
  },
  {
    slug: "desert-lines",
    title: "Desert Lines",
    year: 2022,
    location: "Marfa, Texas",
    tags: ["desert", "portraits", "studio"],
    cover: "/placeholders/galleries/desert-lines/cover.svg",
    story:
      "A visual essay in warm terracotta and cobalt shadows. Portraits and landscape fragments chart the crisp geometry of high desert light.",
    featured: true,
    photos: Array.from({ length: 12 }).map((_, index) => ({
      src: `/placeholders/galleries/desert-lines/${index + 1}.svg`,
      alt: `Desert Lines photo ${index + 1}`,
      width: index % 2 === 0 ? 1600 : 1300,
      height: index % 2 === 0 ? 1200 : 1700,
    })),
  },
  {
    slug: "nocturne-studio",
    title: "Nocturne Studio",
    year: 2024,
    location: "Berlin",
    tags: ["studio", "night", "portraits"],
    cover: "/placeholders/galleries/nocturne-studio/cover.svg",
    story:
      "A midnight set built with velvet backdrops, spill light, and a quiet pulse. The portraits invite stillness and the feeling of a long night unfolding.",
    photos: Array.from({ length: 12 }).map((_, index) => ({
      src: `/placeholders/galleries/nocturne-studio/${index + 1}.svg`,
      alt: `Nocturne Studio photo ${index + 1}`,
      width: index % 4 === 0 ? 1500 : 1600,
      height: index % 4 === 0 ? 1900 : 1200,
    })),
  },
  {
    slug: "northbound",
    title: "Northbound",
    year: 2021,
    location: "Iceland",
    tags: ["travel", "landscape", "winter"],
    cover: "/placeholders/galleries/northbound/cover.svg",
    story:
      "Long stretches of volcanic sand, glacial light, and dusk-blue interiors. Northbound is a study in tonal restraint and expansive weather.",
    photos: Array.from({ length: 12 }).map((_, index) => ({
      src: `/placeholders/galleries/northbound/${index + 1}.svg`,
      alt: `Northbound photo ${index + 1}`,
      width: index % 3 === 1 ? 1500 : 1600,
      height: index % 3 === 1 ? 1900 : 1200,
    })),
  },
];

export const galleryTags = Array.from(
  new Set(galleries.flatMap((gallery) => gallery.tags)),
);

export function getGalleryBySlug(slug: string) {
  return galleries.find((gallery) => gallery.slug === slug);
}
