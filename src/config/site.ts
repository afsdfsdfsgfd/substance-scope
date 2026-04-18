// 🛠️ Edytuj poniższe wartości aby dostosować stronę
import product1Front from "@/assets/product-1-front.jpg";
import product1Back from "@/assets/product-1-back.jpg";

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
      imageFront: product1Front,
      imageBack: product1Back,
    },
    {
      name: "Iwermektyna 6 mg",
      description: "Substancja: iwermektyna.",
      imageFront: product1Front,
      imageBack: product1Back,
    },
    {
      name: "Fenbendazol 222 mg",
      description: "Substancja: fenbendazol.",
      imageFront: product1Front,
      imageBack: product1Back,
    },
    {
      name: "Fenbendazol 444 mg",
      description: "Substancja: fenbendazol.",
      imageFront: product1Front,
      imageBack: product1Back,
    },
  ],

  // Sekcja końcowa
  footer: {
    note: "Treści zamieszczone na tej stronie mają charakter wyłącznie informacyjny i dotyczą substancji iwermektyna oraz fenbendazol.",
  },
};

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}`;
