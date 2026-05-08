import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">&lt;</span>RR
          <span className="text-primary">/&gt;</span>{" "}
          © {new Date().getFullYear()}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {t("footer.madeIn")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
