// 🛠️ Edytuj poniższe wartości aby dostosować stronę
import iwermektyna12Front from "@/assets/iwermektyna-12-front.jpg";
import iwermektyna12Back from "@/assets/iwermektyna-12-back.jpg";
import iwermektyna6Front from "@/assets/iwermektyna-6-front.jpg";
import iwermektyna6Back from "@/assets/iwermektyna-6-back.jpg";
import fenbendazol222Front from "@/assets/fenbendazol-222-front.jpg";
import fenbendazol222Back from "@/assets/fenbendazol-222-back.jpg";
import fenbendazol444Front from "@/assets/fenbendazol-444-front.jpg";
import fenbendazol444Back from "@/assets/fenbendazol-444-back.jpg";

export const siteConfig = {
  // Nazwa strony (wyświetlana w nagłówku i hero)
  siteName: "Informacje",

  // Numer WhatsApp (z kodem kraju, bez znaku +, np. 48123456789)
  whatsappNumber: "48123456789",
  // Wyświetlany format numeru
  whatsappDisplay: "+48 123 456 789",

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
