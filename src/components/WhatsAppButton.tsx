import { WhatsAppIcon } from "./WhatsAppIcon";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
}

export const WhatsAppButton = ({
  variant = "full",
  size = "md",
  className,
  ariaLabel = "Otwórz WhatsApp",
}: Props) => {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  if (variant === "icon") {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-105 active:scale-95 shadow-sm",
          sizeClasses[size],
          className
        )}
      >
        <WhatsAppIcon className="h-1/2 w-1/2" />
      </a>
    );
  }

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-whatsapp px-6 py-3.5 text-whatsapp-foreground font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm",
        className
      )}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{siteConfig.whatsappDisplay}</span>
    </a>
  );
};
