import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-2 text-center text-xs font-medium tracking-wide sm:text-sm">
          Produkt przebadany · Dostawa 3–4 dni
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-sm font-medium tracking-wide text-foreground">
            {siteConfig.siteName}
          </span>
          <WhatsAppButton variant="icon" size="sm" />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.hero.description}
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton variant="full" />
          </div>
        </section>

        {/* Produkty */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Pozycje
            </h2>
            <span className="text-sm text-muted-foreground">
              {siteConfig.products.length} pozycje
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </section>

        {/* Sekcja końcowa */}
        <section className="border-t border-border/60">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.footer.note}
            </p>
            <div className="mt-8">
              <WhatsAppButton variant="icon" size="lg" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.siteName}
        </div>
      </footer>
    </div>
  );
};

export default Index;
