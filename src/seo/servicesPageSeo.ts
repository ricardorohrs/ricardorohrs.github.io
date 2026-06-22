import type { Locale } from "../i18n/translations";
import { translations } from "../i18n/translations";
import type { SeoConfig } from "./useSeo";

export const BASE_URL = "https://ricardorohrs.github.io";
export const SERVICES_PAGE_PATH = "/projetos";
export const SERVICES_PAGE_CANONICAL = `${BASE_URL}${SERVICES_PAGE_PATH}`;

function tr(key: keyof typeof translations, locale: Locale): string {
  return translations[key][locale] ?? translations[key]["pt-BR"];
}

const FAQ_KEYS = ["q1", "q2", "q3", "q4"] as const;

function buildServicesLdJson(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: tr("landing.websites.ld.name", locale),
        serviceType: tr("landing.websites.ld.serviceType", locale),
        areaServed: "BR",
        provider: {
          "@type": "Person",
          name: "Ricardo Röhrs",
          url: BASE_URL,
        },
        url: SERVICES_PAGE_CANONICAL,
        description: tr("landing.websites.seo.description", locale),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${SERVICES_PAGE_CANONICAL}#contato`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_KEYS.map((key) => ({
          "@type": "Question",
          name: tr(`landing.websites.faq.${key}.q`, locale),
          acceptedAnswer: {
            "@type": "Answer",
            text: tr(`landing.websites.faq.${key}.a`, locale),
          },
        })),
      },
    ],
  };
}

export function buildServicesPageSeoConfig(locale: Locale): SeoConfig {
  return {
    title: tr("landing.websites.seo.title", locale),
    description: tr("landing.websites.seo.description", locale),
    canonical: SERVICES_PAGE_CANONICAL,
    ogTitle: tr("landing.websites.seo.ogTitle", locale),
    ogDescription: tr("landing.websites.seo.ogDescription", locale),
    ogImage: `${BASE_URL}/favicon.svg`,
    ogType: "website",
    ogLocale: locale === "pt-BR" ? "pt_BR" : "en_US",
    ogLocaleAlternate: locale === "pt-BR" ? ["en_US"] : ["pt_BR"],
    twitterCard: "summary_large_image",
    keywords: tr("landing.websites.seo.keywords", locale),
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ldJson: buildServicesLdJson(locale),
  };
}

export function buildServicesPageStaticHtml(locale: Locale = "pt-BR") {
  const seo = buildServicesPageSeoConfig(locale);

  return {
    seo,
    hreflang: [
      { lang: "pt-BR", href: SERVICES_PAGE_CANONICAL },
      { lang: "en", href: `${SERVICES_PAGE_CANONICAL}?lang=en` },
      { lang: "x-default", href: SERVICES_PAGE_CANONICAL },
    ],
    noscript: {
      title: tr("landing.websites.seo.title", locale),
      description: tr("landing.websites.seo.description", locale),
      cta: tr("landing.websites.cta.primary", locale),
    },
  };
}
