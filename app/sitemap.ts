import { siteConfig } from "@/data/site";

export default function sitemap() {
  const routes = [
    "",
    "/services",
    "/portfolio",
    "/pricing",
    "/about",
    "/contact",
    "/request",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}