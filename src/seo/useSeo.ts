import { useEffect } from "react";

type OgType = "website" | "profile";
type TwitterCardType = "summary" | "summary_large_image";

export type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: OgType;
  ogLocale?: string;
  ogLocaleAlternate?: string[];
  twitterCard?: TwitterCardType;
  robots?: string;
  keywords?: string;
  ldJson?: unknown;
};

function readMetaName(name: string): string | null {
  return document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.getAttribute("content") ?? null;
}

function readMetaProperty(property: string): string | null {
  return document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)?.getAttribute("content") ?? null;
}

function readAllMetaProperty(property: string): string[] {
  return Array.from(document.querySelectorAll<HTMLMetaElement>(`meta[property="${property}"]`))
    .map((el) => el.getAttribute("content"))
    .filter((value): value is string => Boolean(value));
}

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

function removeAllMetaProperty(property: string) {
  document.querySelectorAll<HTMLMetaElement>(`meta[property="${property}"]`).forEach((el) => {
    el.remove();
  });
}

function setOgLocaleAlternates(locales: string[]) {
  removeAllMetaProperty("og:locale:alternate");
  locales.forEach((locale) => upsertMetaByProperty("og:locale:alternate", locale));
}

type MetaSnapshot = {
  title: string;
  description: string | null;
  robots: string | null;
  keywords: string | null;
  canonical: string | null;
  ogType: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogUrl: string | null;
  ogLocale: string | null;
  ogImage: string | null;
  ogLocaleAlternates: string[];
  twitterCard: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
};

function snapshotMeta(): MetaSnapshot {
  return {
    title: document.title,
    description: readMetaName("description"),
    robots: readMetaName("robots"),
    keywords: readMetaName("keywords"),
    canonical: document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.getAttribute("href") ?? null,
    ogType: readMetaProperty("og:type"),
    ogTitle: readMetaProperty("og:title"),
    ogDescription: readMetaProperty("og:description"),
    ogUrl: readMetaProperty("og:url"),
    ogLocale: readMetaProperty("og:locale"),
    ogImage: readMetaProperty("og:image"),
    ogLocaleAlternates: readAllMetaProperty("og:locale:alternate"),
    twitterCard: readMetaName("twitter:card"),
    twitterTitle: readMetaName("twitter:title"),
    twitterDescription: readMetaName("twitter:description"),
    twitterImage: readMetaName("twitter:image"),
  };
}

function restoreMeta(prev: MetaSnapshot) {
  document.title = prev.title;
  if (prev.description) upsertMetaByName("description", prev.description);
  if (prev.robots) upsertMetaByName("robots", prev.robots);
  if (prev.keywords) upsertMetaByName("keywords", prev.keywords);
  if (prev.canonical) upsertLink("canonical", prev.canonical);

  if (prev.ogType) upsertMetaByProperty("og:type", prev.ogType);
  if (prev.ogTitle) upsertMetaByProperty("og:title", prev.ogTitle);
  if (prev.ogDescription) upsertMetaByProperty("og:description", prev.ogDescription);
  if (prev.ogUrl) upsertMetaByProperty("og:url", prev.ogUrl);
  if (prev.ogLocale) upsertMetaByProperty("og:locale", prev.ogLocale);
  if (prev.ogImage) upsertMetaByProperty("og:image", prev.ogImage);
  setOgLocaleAlternates(prev.ogLocaleAlternates);

  if (prev.twitterCard) upsertMetaByName("twitter:card", prev.twitterCard);
  if (prev.twitterTitle) upsertMetaByName("twitter:title", prev.twitterTitle);
  if (prev.twitterDescription) upsertMetaByName("twitter:description", prev.twitterDescription);
  if (prev.twitterImage) upsertMetaByName("twitter:image", prev.twitterImage);
}

export function useSeo(config: SeoConfig) {
  useEffect(() => {
    const prev = snapshotMeta();
    const ldId = "ld-json-page";

    document.title = config.title;
    upsertMetaByName("description", config.description);
    if (config.robots) upsertMetaByName("robots", config.robots);
    if (config.keywords) upsertMetaByName("keywords", config.keywords);
    upsertLink("canonical", config.canonical);

    const ogTitle = config.ogTitle ?? config.title;
    const ogDescription = config.ogDescription ?? config.description;
    const ogType = config.ogType ?? "website";
    const ogLocale = config.ogLocale ?? "pt_BR";

    upsertMetaByProperty("og:type", ogType);
    upsertMetaByProperty("og:title", ogTitle);
    upsertMetaByProperty("og:description", ogDescription);
    upsertMetaByProperty("og:url", config.canonical);
    upsertMetaByProperty("og:locale", ogLocale);
    if (config.ogImage) upsertMetaByProperty("og:image", config.ogImage);
    setOgLocaleAlternates(config.ogLocaleAlternate ?? []);

    const twitterCard = config.twitterCard ?? "summary";
    upsertMetaByName("twitter:card", twitterCard);
    upsertMetaByName("twitter:title", ogTitle);
    upsertMetaByName("twitter:description", ogDescription);
    if (config.ogImage) upsertMetaByName("twitter:image", config.ogImage);

    if (config.ldJson) upsertLdJson(ldId, config.ldJson);

    return () => {
      restoreMeta(prev);
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
    config.ogType,
    config.ogLocale,
    config.robots,
    config.keywords,
    config.twitterCard,
    config.ldJson ? JSON.stringify(config.ldJson) : "",
    config.ogLocaleAlternate ? JSON.stringify(config.ogLocaleAlternate) : "",
  ]);
}
