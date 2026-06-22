import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { buildServicesPageStaticHtml } from "./src/seo/servicesPageSeo";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function upsertMetaName(html: string, name: string, content: string) {
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"\\s*/?>`, "i");

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setMetaProperties(html: string, property: string, values: string[]) {
  const pattern = new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*/?>\\s*`, "gi");
  let next = html.replace(pattern, "");
  const tags = values
    .map((value) => `    <meta property="${property}" content="${escapeHtml(value)}" />\n`)
    .join("");
  return next.replace("</head>", `${tags}  </head>`);
}

function upsertMetaProperty(html: string, property: string, content: string) {
  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*/?>`, "i");

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertCanonical(html: string, href: string) {
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  const pattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function replaceHreflangBlock(html: string, links: Array<{ lang: string; href: string }>) {
  const block = links
    .map(
      (link) =>
        `    <link rel="alternate" hreflang="${escapeHtml(link.lang)}" href="${escapeHtml(link.href)}" />`,
    )
    .join("\n");

  const pattern =
    /<!-- Alternate language links -->[\s\S]*?(?=<!-- Alternate theme links -->|<\/head>)/;

  if (pattern.test(html)) {
    return html.replace(pattern, `<!-- Alternate language links -->\n${block}\n\n    `);
  }

  return html.replace("</head>", `${block}\n  </head>`);
}

function replaceLdJson(html: string, data: unknown) {
  const withoutLdJson = html.replace(
    /    <!-- Schema\.org:.*?-->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g,
    "",
  );

  const script = `    <script type="application/ld+json">\n${JSON.stringify(data, null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n")}\n    </script>\n`;

  return withoutLdJson.replace("</head>", `${script}  </head>`);
}

function injectNoscript(html: string, title: string, description: string, cta: string) {
  const block = `    <noscript>
      <article style="max-width:42rem;margin:2rem auto;padding:0 1.5rem;font-family:system-ui,sans-serif;line-height:1.6;">
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
        <p><a href="#contato">${escapeHtml(cta)}</a> · <a href="/">Portfólio</a></p>
      </article>
    </noscript>`;

  return html.replace('<div id="root"></div>', `<div id="root"></div>\n${block}`);
}

function patchHtmlForServicesPage(html: string) {
  const { seo, hreflang, noscript } = buildServicesPageStaticHtml("pt-BR");
  const ogTitle = seo.ogTitle ?? seo.title;
  const ogDescription = seo.ogDescription ?? seo.description;

  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  next = upsertMetaName(next, "description", seo.description);
  next = upsertMetaName(next, "keywords", seo.keywords ?? "");
  next = upsertMetaName(next, "robots", seo.robots ?? "index, follow");
  next = upsertCanonical(next, seo.canonical);
  next = replaceHreflangBlock(next, hreflang);
  next = upsertMetaProperty(next, "og:site_name", "Ricardo Röhrs | Desenvolvimento Web");
  next = upsertMetaProperty(next, "og:title", ogTitle);
  next = upsertMetaProperty(next, "og:description", ogDescription);
  next = upsertMetaProperty(next, "og:type", seo.ogType ?? "website");
  next = upsertMetaProperty(next, "og:url", seo.canonical);
  next = upsertMetaProperty(next, "og:locale", seo.ogLocale ?? "pt_BR");
  next = upsertMetaProperty(next, "og:image", seo.ogImage ?? "");
  next = setMetaProperties(next, "og:locale:alternate", seo.ogLocaleAlternate ?? []);
  next = upsertMetaName(next, "twitter:card", seo.twitterCard ?? "summary_large_image");
  next = upsertMetaName(next, "twitter:title", ogTitle);
  next = upsertMetaName(next, "twitter:description", ogDescription);
  next = upsertMetaName(next, "twitter:image", seo.ogImage ?? "");
  next = replaceLdJson(next, seo.ldJson);
  next = injectNoscript(next, noscript.title, noscript.description, noscript.cta);

  return next;
}

export function seoPagesPlugin(): Plugin {
  return {
    name: "seo-pages",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(process.cwd(), "dist");
      const indexPath = path.join(outDir, "index.html");

      if (!fs.existsSync(indexPath)) {
        this.warn("dist/index.html not found; skipping SEO page generation.");
        return;
      }

      const indexHtml = fs.readFileSync(indexPath, "utf8");
      const servicesHtml = patchHtmlForServicesPage(indexHtml);
      const servicesDir = path.join(outDir, "projetos");

      fs.mkdirSync(servicesDir, { recursive: true });
      fs.writeFileSync(path.join(servicesDir, "index.html"), servicesHtml, "utf8");
    },
  };
}
