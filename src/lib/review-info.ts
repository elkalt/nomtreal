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
  AMERICAN = "North American",
  LEBANESE = "Lebanese",
}

export const TagColors: Record<Tags, string> =  {
  [Tags.BREAKFAST]: "yellow",
  [Tags.BRUNCH]: "orange",
  [Tags.LUNCH]: "light-blue",
  [Tags.DINNER]: "dark-blue",
  [Tags.AMERICAN]: "red",
  [Tags.LEBANESE]: "light-green",
}

export function getTagColor(tag: string): string {
  if (tag in TagColors) {
    return "var(--t-" + TagColors[tag as keyof typeof TagColors] + ")";
  } else {
    return "var(--t-default)";
  }
}

export function getNameURL(name: string): string {
  return name.replace(/\s/g, '-').toLowerCase();
}

export const Reviews: ReviewInfo[] = [
  {
    name: "Le Vieux St-Laurent",
    rating: 4.5,
    priceRange: [13, 25],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/Ffiy43gfTCTJ35pT9",
    tags: [Tags.BREAKFAST, Tags.BRUNCH, Tags.AMERICAN]
  },
  {
    name: "Lali's",
    rating: 5,
    priceRange: [13, 20],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/So6M3RJWysTgzgGZ9",
    tags: [Tags.LUNCH, Tags.DINNER, Tags.AMERICAN]
  },
  {
    name: "ÔFour",
    rating: 4,
    priceRange: [10, 15],
    date: new Date("2023-12-24"),
    location: "https://maps.app.goo.gl/i7E7kxwLvebPHdUN9",
    tags: [Tags.LUNCH, Tags.DINNER, Tags.LEBANESE]
  }
];