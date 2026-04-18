// 🛠️ Edytuj poniższe wartości aby dostosować stronę
import iwermektyna12Front from "@/assets/produkt-1-przod.jpg";
import iwermektyna12Back from "@/assets/produkt-1-tyl.jpg";
import iwermektyna6Front from "@/assets/produkt-2-przod.jpg";
import iwermektyna6Back from "@/assets/produkt-2-tyl.jpg";
import fenbendazol222Front from "@/assets/produkt-3-przod.jpg";
import fenbendazol222Back from "@/assets/produkt-3-tyl.jpg";
import fenbendazol444Front from "@/assets/produkt-4-przod.jpg";
import fenbendazol444Back from "@/assets/produkt-4-tyl.jpg";

export const siteConfig = {
  // Nazwa strony (wyświetlana w nagłówku i hero)
  siteName: "Informacje",

  // Numer WhatsApp (z kodem kraju, bez znaku +, np. 48123456789)
  whatsappNumber: "48444444444",
  // Wyświetlany format numeru
  whatsappDisplay: "+48 444 444 444",

  // Hero
  hero: {
    title: "Iwermektyna i Fenbendazol",
    description:
      "Strona o charakterze informacyjnym przedstawiająca dwie substancje: iwermektynę oraz fenbendazol.",
  },

  // 4 produkty - wymień zdjęcia importując własne pliki z src/assets/
  products: [
    {
      name: "Iwermektyna 12 mg",
      description: "Substancja: iwermektyna.",
      imageFront: iwermektyna12Front,
      imageBack: iwermektyna12Back,
    },
    {
      name: "Iwermektyna 6 mg",
      description: "Substancja: iwermektyna.",
      imageFront: iwermektyna6Front,
      imageBack: iwermektyna6Back,
    },
    {
      name: "Fenbendazol 222 mg",
      description: "Substancja: fenbendazol.",
      imageFront: fenbendazol222Front,
      imageBack: fenbendazol222Back,
    },
    {
      name: "Fenbendazol 444 mg",
      description: "Substancja: fenbendazol.",
      imageFront: fenbendazol444Front,
      imageBack: fenbendazol444Back,
    },
  ],

  // Sekcja końcowa
  footer: {
    note: "Treści zamieszczone na tej stronie mają charakter wyłącznie informacyjny i dotyczą substancji iwermektyna oraz fenbendazol.",
  },
};

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}`;
