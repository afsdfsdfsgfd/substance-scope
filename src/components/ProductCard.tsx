import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

interface Product {
  name: string;
  description?: string;
  imageFront: string;
  imageBack: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  const [showBack, setShowBack] = useState(false);

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/20">
      <button
        type="button"
        onClick={() => setShowBack((s) => !s)}
        aria-label={`Pokaż ${showBack ? "przód" : "tył"} opakowania ${product.name}`}
        className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary"
      >
        <img
          src={product.imageFront}
          alt={`${product.name} – przód opakowania`}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            showBack ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={product.imageBack}
          alt={`${product.name} – tył opakowania`}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            showBack ? "opacity-100" : "opacity-0"
          )}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          {showBack ? "Tył" : "Przód"}
        </span>
      </button>

      <div className="mt-5 flex flex-1 items-start justify-between gap-4">
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
        <WhatsAppButton
          variant="icon"
          size="sm"
          ariaLabel={`WhatsApp – ${product.name}`}
          className="shrink-0"
        />
      </div>
    </article>
  );
};
