export type Workshop = {
  slug: string;
  title: string;
  dates: string;
  location: string;
  price: number;
  capacity: number;
  status: "Available" | "Sold Out";
  depositAmount: number;
  payInFullUrl: string;
  depositUrl: string;
  overview: string;
  inclusions: string[];
  itinerarySections: { title: string; details: string }[];
  faq: { question: string; answer: string }[];
};

export const workshops: Workshop[] = [
  {
    slug: "coastal-light-lab",
    title: "Coastal Light Lab",
    dates: "May 14–18, 2025",
    location: "Ericeira, Portugal",
    price: 2400,
    capacity: 10,
    status: "Available",
    depositAmount: 600,
    payInFullUrl: "#",
    depositUrl: "#",
    overview:
      "A five-day immersion into coastal light, editorial portraits, and narrative still life with daily critiques and sunrise sessions.",
    inclusions: [
      "Daily shooting briefs and concept decks",
      "Two 1:1 portfolio reviews",
      "Group dinners and on-location transport",
    ],
    itinerarySections: [
      {
        title: "Day 1 · Arrival + Visual Foundations",
        details:
          "Studio introductions, mood-building exercises, and an evening blue-hour shoot along the cliffs.",
      },
      {
        title: "Day 2 · Portrait Studies",
        details:
          "Directional light workshops, model sessions, and in-field editing.",
      },
      {
        title: "Day 3 · Editorial Still Life",
        details:
          "Tabletop builds, texture exploration, and sunset narrative shoots.",
      },
      {
        title: "Day 4 · Personal Project Day",
        details:
          "Guided production time with instructor feedback and optional mini-lectures.",
      },
      {
        title: "Day 5 · Portfolio Assembly",
        details:
          "Sequencing, critique, and next-step mentoring.",
      },
    ],
    faq: [
      {
        question: "What level is this workshop?",
        answer:
          "Designed for intermediate to advanced photographers who are building cohesive bodies of work.",
      },
      {
        question: "Are accommodations included?",
        answer:
          "Accommodations are not included, but we provide curated lodging recommendations.",
      },
    ],
  },
  {
    slug: "nocturne-portrait-studio",
    title: "Nocturne Portrait Studio",
    dates: "September 3–6, 2025",
    location: "Berlin, Germany",
    price: 1800,
    capacity: 8,
    status: "Available",
    depositAmount: 450,
    payInFullUrl: "#",
    depositUrl: "#",
    overview:
      "A four-night intensive with cinematic lighting, color sculpting, and portrait sequencing inside a controlled studio environment.",
    inclusions: [
      "Lighting diagrams and take-home notes",
      "Studio access with crew support",
      "Two post-session critiques",
    ],
    itinerarySections: [
      {
        title: "Night 1 · Light Rituals",
        details:
          "Intro to practicals, gels, and layered lighting for portraiture.",
      },
      {
        title: "Night 2 · Character Studies",
        details:
          "Working with talent, directing gesture, and building quiet tension.",
      },
      {
        title: "Night 3 · Editorial Pacing",
        details:
          "Sequencing, pacing, and building a narrative arc from still portraits.",
      },
      {
        title: "Night 4 · Portfolio Review",
        details:
          "Final critiques and editing workflows.",
      },
    ],
    faq: [
      {
        question: "Is this a low-light workshop?",
        answer:
          "Yes. We focus on cinematic and nocturnal setups with minimal ambient light.",
      },
    ],
  },
  {
    slug: "arctic-stillness",
    title: "Arctic Stillness",
    dates: "February 8–13, 2026",
    location: "Reykjavik + South Coast",
    price: 3200,
    capacity: 12,
    status: "Sold Out",
    depositAmount: 800,
    payInFullUrl: "#",
    depositUrl: "#",
    overview:
      "An expedition-style workshop through Icelandic winter light, with glacier walks and interior scenes captured in deep snow silence.",
    inclusions: [
      "Transport between locations",
      "Two location scouts per day",
      "Group editing sessions",
    ],
    itinerarySections: [
      {
        title: "Day 1 · Arrival",
        details:
          "Orientation, kit checks, and a twilight harbor session.",
      },
      {
        title: "Day 2 · Glacial Light",
        details:
          "Daylight exploration with led guides and field critiques.",
      },
      {
        title: "Day 3 · Interior Narratives",
        details:
          "Capturing winter interiors, warmth, and quiet portraiture.",
      },
      {
        title: "Day 4 · South Coast",
        details:
          "Black sand beaches, waterfall studies, and fog layering.",
      },
      {
        title: "Day 5 · Edit + Critique",
        details:
          "Sequencing and final group review.",
      },
    ],
    faq: [
      {
        question: "Is there a waitlist?",
        answer:
          "Yes. We will notify waitlisted photographers if spaces reopen.",
      },
    ],
  },
];

export function getWorkshopBySlug(slug: string) {
  return workshops.find((workshop) => workshop.slug === slug);
}
