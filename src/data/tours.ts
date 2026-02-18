import orangeBayImg from "@/assets/orange-bay.jpg";
import paradiseIslandImg from "@/assets/paradise-island.jpg";
import dolphinHouseImg from "@/assets/dolphin-house.jpg";
import scubaDivingImg from "@/assets/scuba-diving.jpg";
import speedboatImg from "@/assets/speedboat.jpg";
import glassBoatImg from "@/assets/glass-boat.jpg";
import submarineImg from "@/assets/submarine.jpg";
import quadBikeImg from "@/assets/quad-bike.jpg";
import superSafariImg from "@/assets/super-safari.jpg";
import luxorImg from "@/assets/luxor-temple.jpg";
import cairoImg from "@/assets/cairo-pyramids.jpg";
import snorkelingImg from "@/assets/snorkeling.jpg";
import coralReefImg from "@/assets/coral-reef.jpg";
import boatTripImg from "@/assets/boat-trip.jpg";
import divingImg from "@/assets/diving.jpg";
import jeepSafariImg from "@/assets/jeep-safari.jpg";
import camelRideImg from "@/assets/camel-ride.jpg";
import islandImg from "@/assets/island.jpg";

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
}

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
    image: orangeBayImg,
    galleryImages: [orangeBayImg, snorkelingImg, boatTripImg, islandImg],
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
    image: paradiseIslandImg,
    galleryImages: [paradiseIslandImg, boatTripImg, coralReefImg, snorkelingImg],
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
    image: dolphinHouseImg,
    galleryImages: [dolphinHouseImg, snorkelingImg, coralReefImg, boatTripImg],
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
    image: scubaDivingImg,
    galleryImages: [scubaDivingImg, divingImg, coralReefImg, snorkelingImg],
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
    image: speedboatImg,
    galleryImages: [speedboatImg, snorkelingImg, orangeBayImg, boatTripImg],
  },
  {
    id: "glass-boat",
    title: "Glass Boat",
    category: "sea",
    duration: "2 hours",
    location: "Hurghada, Egypt",
    locationBadge: "Hurghada Trip",
    description: "See the magical underwater world without getting wet! The glass-bottom boat reveals stunning coral reefs and colorful fish beneath you.",
    includes: ["Underwater viewing experience"],
    image: glassBoatImg,
    galleryImages: [glassBoatImg, coralReefImg, boatTripImg],
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
    image: submarineImg,
    galleryImages: [submarineImg, coralReefImg, divingImg],
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
    image: quadBikeImg,
    galleryImages: [quadBikeImg, jeepSafariImg, camelRideImg, superSafariImg],
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
    image: superSafariImg,
    galleryImages: [superSafariImg, quadBikeImg, jeepSafariImg, camelRideImg],
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
    image: luxorImg,
    galleryImages: [luxorImg, cairoImg],
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
    image: cairoImg,
    galleryImages: [cairoImg, luxorImg],
  },
];

export const seaTours = tours.filter((t) => t.category === "sea");
export const safariTours = tours.filter((t) => t.category === "safari");
export const culturalTours = tours.filter((t) => t.category === "cultural");
