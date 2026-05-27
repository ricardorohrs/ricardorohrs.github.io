import { useEffect } from "react";

type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
  ldJson?: unknown;
};

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertLdJson(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

export function useSeo(config: SeoConfig) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.getAttribute("href") ?? null;
    const prevDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.getAttribute("content") ?? null;
    const prevRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.getAttribute("content") ?? null;

    document.title = config.title;
    upsertMetaByName("description", config.description);
    if (config.robots) upsertMetaByName("robots", config.robots);
    upsertLink("canonical", config.canonical);

    const ogTitle = config.ogTitle ?? config.title;
    const ogDescription = config.ogDescription ?? config.description;

    upsertMetaByProperty("og:title", ogTitle);
    upsertMetaByProperty("og:description", ogDescription);
    upsertMetaByProperty("og:url", config.canonical);
    if (config.ogImage) upsertMetaByProperty("og:image", config.ogImage);

    upsertMetaByName("twitter:title", ogTitle);
    upsertMetaByName("twitter:description", ogDescription);
    if (config.ogImage) upsertMetaByName("twitter:image", config.ogImage);

    const ldId = "ld-json-page";
    if (config.ldJson) upsertLdJson(ldId, config.ldJson);

    return () => {
      document.title = prevTitle;
      if (prevDescription) upsertMetaByName("description", prevDescription);
      if (prevRobots) upsertMetaByName("robots", prevRobots);
      if (prevCanonical) upsertLink("canonical", prevCanonical);
      const ld = document.getElementById(ldId);
      if (ld) ld.remove();
    };
  }, [
    config.title,
    config.description,
    config.canonical,
    config.ogTitle,
    config.ogDescription,
    config.ogImage,
    config.robots,
    // stable dependency for structured data
    config.ldJson ? JSON.stringify(config.ldJson) : "",
  ]);
}

