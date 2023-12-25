export interface ReviewInfo {
  name: string;
  rating: number;
  priceRange: number[];
  date: Date;
  location: string;
}

export const reviews: ReviewInfo[] = [
  {
    name: "Le Vieux St-Laurent",
    rating: 4.5,
    priceRange: [13, 25],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/Ffiy43gfTCTJ35pT9"
  },
  {
    name: "Lali's",
    rating: 5,
    priceRange: [13, 20],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/So6M3RJWysTgzgGZ9"
  },
];