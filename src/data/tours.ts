export interface Tour {
  id: string;
  title: string;
  category: "sea" | "safari" | "cultural";
  duration: string;
  location: string;
  locationBadge: string;
  description: string;
  includes: string[];
  image: string;
  galleryImages: string[];
  imageFolderName: string;
  imagePrefix: string;
}

const getTourImages = (folderName: string, imagePrefix: string): string[] => {
  return [
    `/Images/${folderName}/${imagePrefix}1.jpg`,
    `/Images/${folderName}/${imagePrefix}2.jpg`,
    `/Images/${folderName}/${imagePrefix}3.jpg`,
    `/Images/${folderName}/${imagePrefix}4.jpg`,
    `/Images/${folderName}/${imagePrefix}5.jpg`,
  ];
};

export const tours: Tour[] = [
  {
    id: "orange-bay-island",
    title: "Orange Bay Island",
    category: "sea",
    duration: "Full Day (8 hours)",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Visit the stunning Orange Bay Island with its pristine white sand beaches and crystal-clear turquoise waters. A perfect full-day escape in the Red Sea.",
    includes: ["Boat trip", "Snorkeling", "Lunch", "Soft drinks"],
    imageFolderName: "Orange Bay Island Images",
    imagePrefix: "OrangeBay",
    image: "/src/assets/Orange Bay Island Images/OrangeBayImage1.jpg",
    galleryImages: getTourImages("orange-bay", "orangebay"),
  },
  {
    id: "paradise-island",
    title: "Paradise Island",
    category: "sea",
    duration: "Full Day",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Discover Paradise Island — a breathtaking destination with white sandy shores, ideal for swimming, sunbathing, and snorkeling in the Red Sea.",
    includes: ["Boat trip", "Snorkeling equipment", "Lunch"],
    imageFolderName: "Paradise Island Images",
    imagePrefix: "Paradise",
    image: "/src/assets/Paradise Island Images/ParadiseImage1.jpg",
    galleryImages: getTourImages("paradise-island", "paradise"),
  },
  {
    id: "dolphin-house",
    title: "Dolphin House",
    category: "sea",
    duration: "Full Day",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Swim alongside wild dolphins in their natural habitat at Dolphin House reef. An unforgettable marine encounter with professional guides.",
    includes: ["Dolphin area", "Snorkeling", "Lunch", "Professional guide"],
    imageFolderName: "Dolphin House Images",
    imagePrefix: "DolphinHouse",
    image: "/src/assets/Dolphin House Images/DolphinHouseImage1.jpg",
    galleryImages: getTourImages("dolphin-house", "dolphinhouse"),
  },
  {
    id: "scuba-diving-intro",
    title: "Scuba Diving Intro",
    category: "sea",
    duration: "Full Day",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Take your first breath underwater with a professional scuba diving introduction. No experience needed — explore the Red Sea's vibrant coral reefs.",
    includes: ["2 dives", "Instructor", "Equipment", "Lunch"],
    imageFolderName: "Scuba Diving Intro Images",
    imagePrefix: "ScubaDiving",
    image: "/src/assets/Scuba Diving Intro Images/ScubaDivingImage1.jpg",
    galleryImages: getTourImages("scuba-diving", "scubadiving"),
  },
  {
    id: "private-speedboat",
    title: "Private Speedboat",
    category: "sea",
    duration: "4 hours",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Enjoy an exclusive private speedboat experience along the Hurghada coast. Snorkel at pristine spots with your own captain and crew.",
    includes: ["Snorkeling", "Drinks", "Private captain"],
    imageFolderName: "Private Speedboat Images",
    imagePrefix: "PrivateSpeedboat",
    image: "/src/assets/Private Speedboat Images/PrivateSpeedboatImage1.jpg",
    galleryImages: getTourImages("private-speedboat", "privatespeedboat"),
  },
  {
    id: "glass-boat",
    title: "Glass Boat",
    category: "sea",
    duration: "2 hours",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "See the magical underwater world without getting wet! The yellow glass-bottom boat reveals stunning coral reefs and colorful fish beneath you.",
    includes: ["Underwater viewing experience"],
    imageFolderName: "Glass Boat Images",
    imagePrefix: "GlassBoat",
    image: "/src/assets/Glass Boat Images/GlassBoatImage1.jpg",
    galleryImages: getTourImages("glass-boat", "glassboat"),
  },
  {
    id: "submarine-trip",
    title: "Submarine Trip",
    category: "sea",
    duration: "2 hours",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Dive 20 meters below the Red Sea surface in a real submarine. Witness the spectacular underwater world of coral reefs and marine life.",
    includes: ["20-meter underwater experience"],
    imageFolderName: "Submarine Trip Images",
    imagePrefix: "Submarine",
    image: "/src/assets/Submarine Trip Images/SubmarineImage1.jpg",
    galleryImages: getTourImages("submarine-trip", "submarine"),
  },
  {
    id: "quad-bike-safari",
    title: "Quad Bike Safari",
    category: "safari",
    duration: "3 hours",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "Race across the golden sand dunes of the Sahara on powerful quad bikes. An adrenaline-filled desert adventure with Bedouin tea.",
    includes: ["Quad bike", "Guide", "Bedouin tea"],
    imageFolderName: "Quad Bike Safari Images",
    imagePrefix: "QuadBike",
    image: "/src/assets/Quad Bike Safari Images/QuadBikeImage1.jpg",
    galleryImages: getTourImages("quad-bike", "quanbike"),
  },
  {
    id: "super-safari",
    title: "Super Safari (Quad + Jeep + Camel)",
    category: "safari",
    duration: "5 hours",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "The ultimate desert experience combining quad biking, jeep safari, and camel riding. Includes a traditional Bedouin dinner and show.",
    includes: ["Dinner", "Show", "Desert activities", "Transfers"],
    imageFolderName: "Super Safari Images",
    imagePrefix: "SuperSafari",
    image: "/src/assets/Super Safari Images/SuperSafariImage1.jpg",
    galleryImages: getTourImages("super-safari", "supersafari"),
  },
  {
    id: "luxor-trip",
    title: "Luxor Trip (By Bus)",
    category: "cultural",
    duration: "Full Day",
    location: "From Hurghada",
    locationBadge: "From Hurghada",
    description: "Journey to the ancient city of Luxor and explore the world's greatest open-air museum. Visit temples, tombs, and legendary monuments.",
    includes: ["Professional guide", "Lunch", "Transfers"],
    imageFolderName: "Luxor Trip Images",
    imagePrefix: "Luxor",
    image: "/src/assets/Luxor Trip Images/LuxorImage1.jpg",
    galleryImages: getTourImages("luxor-trip", "luxor"),
  },
  {
    id: "cairo-trip",
    title: "Cairo Trip (By Plane)",
    category: "cultural",
    duration: "Full Day",
    location: "From Hurghada",
    locationBadge: "From Hurghada",
    description: "Fly from Hurghada to Cairo for an unforgettable day exploring the Pyramids of Giza, the Sphinx, and the Egyptian Museum.",
    includes: ["Flight", "Guide", "Sightseeing program"],
    imageFolderName: "Cairo Trip Images",
    imagePrefix: "Cairo",
    image: "/src/assets/Cairo Trip Images/CairoImage1.jpg",
    galleryImages: getTourImages("cairo-trip", "cairoimage"),
  },
];

export const seaTours = tours.filter((t) => t.category === "sea");
export const safariTours = tours.filter((t) => t.category === "safari");
export const culturalTours = tours.filter((t) => t.category === "cultural");
