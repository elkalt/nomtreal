export interface ReviewInfo {
  name: string;
  rating: number;
  priceRange: number[];
  date: Date;
}

export const reviews: ReviewInfo[] = [
  {
    name: "Le Vieux St-Laurent",
    rating: 4.5,
    priceRange: [13, 25],
    date: new Date("2023-12-24")
  },
  {
    name: "Lali's",
    rating: 5,
    priceRange: [13, 20],
    date: new Date("2023-12-24")
  },
];