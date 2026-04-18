import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

interface Product {
  name: string;
  description?: string;
  imageFront: string;
  imageBack: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  const [hover, setHover] = useState(false);

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/20">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover((s) => !s)}
        className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary"
      >
        <img
          src={product.imageFront}
          alt={`${product.name} – przód opakowania`}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            hover ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={product.imageBack}
          alt={`${product.name} – tył opakowania`}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            hover ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight text-foreground">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1.5 text-sm text-muted-foreground">
              {product.description}
            </p>
          )}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Więcej informacji – WhatsApp ${siteConfig.whatsappDisplay}`}
          className="mt-auto flex w-full items-center gap-3 rounded-xl bg-whatsapp px-4 py-3 text-whatsapp-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
            <WhatsAppIcon className="h-7 w-7" />
          </span>
          <span className="flex min-w-0 flex-col items-start leading-tight">
            <span className="text-xs font-medium uppercase tracking-wide opacity-90">
              Więcej informacji
            </span>
            <span className="truncate text-sm font-semibold">
              WhatsApp: {siteConfig.whatsappDisplay}
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};
