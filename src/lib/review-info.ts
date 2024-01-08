export interface ReviewInfo {
  name: string;
  rating: number;
  priceRange: number[];
  date: Date;
  location: string;
  tags: string[];
}

export enum Tags {
  BREAKFAST = "Breakfast",
  BRUNCH = "Brunch",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  AMERICAN = "American",
}

export const TagColors: Record<Tags, string> =  {
  [Tags.BREAKFAST]: "yellow",
  [Tags.BRUNCH]: "orange",
  [Tags.LUNCH]: "light-blue",
  [Tags.DINNER]: "dark-blue",
  [Tags.AMERICAN]: "red",
}

export const Reviews: ReviewInfo[] = [
  {
    name: "Le Vieux St-Laurent",
    rating: 4.5,
    priceRange: [13, 25],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/Ffiy43gfTCTJ35pT9",
    tags: [Tags.BREAKFAST, Tags.BRUNCH]
  },
  {
    name: "Lali's",
    rating: 5,
    priceRange: [13, 20],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/So6M3RJWysTgzgGZ9",
    tags: [Tags.LUNCH, Tags.DINNER, Tags.AMERICAN]
  },
];