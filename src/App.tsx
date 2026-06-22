import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage.tsx";

const SERVICES_PAGE_PATH = "/projetos";

function normalizePathname(pathname: string) {
  let trimmed = pathname.replace(/\/+$/, "");
  if (trimmed.endsWith("/index.html")) {
    trimmed = trimmed.slice(0, -"/index.html".length);
  }
  return trimmed.length ? trimmed : "/";
}

function consumeRedirectParam() {
  const url = new URL(window.location.href);
  const redirect = url.searchParams.get("redirect");
  if (!redirect) return;

  window.history.replaceState({}, "", redirect);
}

const App = () => {
  consumeRedirectParam();

  const pathname = normalizePathname(window.location.pathname);

  if (pathname === SERVICES_PAGE_PATH) return <ServicesPage />;
  return <Index />;
};

export default App;
