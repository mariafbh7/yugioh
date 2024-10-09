export interface Card {
    id: number;
    name: string;
    desc: string; 
      atk?: number;      // Opcional si no todas las cartas tienen ATK
    def?: number;      // Opcional si no todas las cartas tienen DEF
    level?: number;    // Opcional si no todas las cartas tienen Nivel
    type?: string;   // Descripción de la carta
    card_images: {
      image_url: string;          // URL de la imagen
      image_url_small: string;    // URL de la imagen pequeña
    }[];
  }
  