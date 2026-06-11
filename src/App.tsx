import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage.tsx";

function normalizePathname(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, "");
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

  if (pathname === "/projetos") return <ServicesPage />;
  return <Index />;
};

export default App;
