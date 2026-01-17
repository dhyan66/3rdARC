import { MetadataRoute } from "next";
import { galleries } from "@/content/galleries";
import { workshops } from "@/content/workshops";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/galleries",
    "/film-set-stills",
    "/about",
    "/media",
    "/workshops",
    "/contact",
  ];

  const galleryRoutes = galleries.map((gallery) => `/galleries/${gallery.slug}`);
  const workshopRoutes = workshops.map(
    (workshop) => `/workshops/${workshop.slug}`,
  );

  return [...staticRoutes, ...galleryRoutes, ...workshopRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
