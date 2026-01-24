export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  width?: "sm" | "md" | "lg" | "xl";
};

export type Series = {
  slug: string;
  title: string;
  subtitle?: string;
  photos: Photo[];
};

export const seriesList: Series[] = [
  {
    slug: "coastal-mornings",
    title: "Coastal Mornings",
    subtitle: "Mist, salt air, and slow horizons.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "Sunlit cliff edge with ocean haze",
        caption: "Edge light",
        width: "lg"
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Foamy shoreline under pale sunrise",
        width: "md"
      },
      {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        alt: "Rocky inlet with drifting fog",
        width: "xl"
      },
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
        alt: "Sand path lined with grasses",
        width: "sm"
      },
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        alt: "Low tide patterns and ripples",
        caption: "Tidal lines",
        width: "md"
      },
      {
        src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
        alt: "Seaside cottages in morning light",
        width: "lg"
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        alt: "Cloud layers over open water",
        width: "xl"
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Pebbles and sea foam close-up",
        width: "sm"
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        alt: "Coastal road fading into mist",
        width: "md"
      }
    ]
  },
  {
    slug: "desert-studio",
    title: "Desert Studio",
    subtitle: "Warm light, long shadows, open air.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
        alt: "Sun-warmed dune ridge",
        width: "lg"
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        alt: "Quiet desert horizon under thin clouds",
        width: "md"
      },
      {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        alt: "Rock formations in layered light",
        caption: "Stone rhythm",
        width: "xl"
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        alt: "Desert road with soft heat haze",
        width: "sm"
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Sand textures and ridges in detail",
        width: "md"
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "High desert plateau under sun",
        width: "lg"
      },
      {
        src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
        alt: "Studio table with clay and shadows",
        width: "xl"
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Mirage-like light across flats",
        width: "sm"
      },
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        alt: "Sparse brush under wide sky",
        width: "md"
      }
    ]
  },
  {
    slug: "city-reveries",
    title: "City Reveries",
    subtitle: "Quiet corners and luminous evenings.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "Morning light through tall windows",
        width: "md"
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        alt: "Street reflections after rain",
        width: "lg"
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Commuters in soft blur",
        width: "xl"
      },
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
        alt: "Neon sign glow on stone wall",
        width: "sm"
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Quiet alley with warm light",
        caption: "After hours",
        width: "md"
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        alt: "Bridge lines over evening river",
        width: "lg"
      },
      {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        alt: "Streetcar wires against pale sky",
        width: "xl"
      },
      {
        src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
        alt: "Cafe table with morning shadows",
        width: "sm"
      },
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
        alt: "Open doorway with warm interior light",
        width: "md"
      }
    ]
  }
];
