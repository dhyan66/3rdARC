export type FilmSetStill = {
  title: string;
  year: number;
  role: string;
  responsibilities: string[];
  cover: string;
  stills: { src: string; alt: string; width: number; height: number }[];
};

export const filmSetStills: FilmSetStill[] = [
  {
    title: "Glasshouse Diaries",
    year: 2024,
    role: "Unit Photographer",
    responsibilities: [
      "Stills coverage for key cast scenes",
      "Atmosphere captures between takes",
      "Daily selects delivered on set",
    ],
    cover: "/placeholders/stills/glasshouse-diaries/cover.svg",
    stills: Array.from({ length: 8 }).map((_, index) => ({
      src: `/placeholders/stills/glasshouse-diaries/${index + 1}.svg`,
      alt: `Glasshouse Diaries still ${index + 1}`,
      width: index % 2 === 0 ? 1600 : 1400,
      height: index % 2 === 0 ? 1100 : 1700,
    })),
  },
  {
    title: "Soft Machinery",
    year: 2023,
    role: "Lead Stills Photographer",
    responsibilities: [
      "Continuity stills for production",
      "Mood captures for publicity",
      "Night exterior coverage",
    ],
    cover: "/placeholders/stills/soft-machinery/cover.svg",
    stills: Array.from({ length: 8 }).map((_, index) => ({
      src: `/placeholders/stills/soft-machinery/${index + 1}.svg`,
      alt: `Soft Machinery still ${index + 1}`,
      width: index % 3 === 0 ? 1500 : 1600,
      height: index % 3 === 0 ? 1900 : 1100,
    })),
  },
  {
    title: "A Quiet Orbit",
    year: 2022,
    role: "Production Photographer",
    responsibilities: [
      "Portraits for marketing",
      "Behind-the-scenes coverage",
      "Unit stills during rehearsals",
    ],
    cover: "/placeholders/stills/a-quiet-orbit/cover.svg",
    stills: Array.from({ length: 8 }).map((_, index) => ({
      src: `/placeholders/stills/a-quiet-orbit/${index + 1}.svg`,
      alt: `A Quiet Orbit still ${index + 1}`,
      width: index % 2 === 0 ? 1600 : 1400,
      height: index % 2 === 0 ? 1200 : 1700,
    })),
  },
];
