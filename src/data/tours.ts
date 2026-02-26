export interface Tour {
  id: string;
  title: string;
  titleKey?: string;
  category: "sea" | "safari" | "leisure" | "cultural" | "service";
  duration: string;
  durationKey?: string;
  location: string;
  locationKey?: string;
  locationBadge: string;
  locationBadgeKey?: string;
  locationBadges?: string[];
  locationBadgesKeys?: string[];
  description: string;
  descriptionKey?: string;
  includes: string[];
  image: string;
  galleryImages: string[];
  imageFolderName: string;
  imagePrefix: string;
  transportOptions?: string[];
  transportOptionsKeys?: string[];
  price?: number;
  priceHurghada?: number;
  priceElGouna?: number;
  transportPrices?: { [key: string]: number };
  transportPricesKeys?: { [key: string]: string };
  priceAdults?: number;
  priceChildren?: number;
  cruiseOptions?: Array<{
    name: string;
    nameKey?: string;
    duration: string;
    durationKey?: string;
    includes: string[];
    price: number;
  }>;
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
    titleKey: "tours.orangeBayIsland.title",
    category: "sea",
    duration: "Full Day (8 hours)",
    durationKey: "tours.orangeBayIsland.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.orangeBayIsland.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.orangeBayIsland.locationBadge",
    description: "Visit the stunning Orange Bay Island with its pristine white sand beaches and crystal-clear turquoise waters. A perfect full-day escape in the Red Sea.",
    descriptionKey: "tours.orangeBayIsland.description",
    includes: ["tourIncludes.boatTrip", "tourIncludes.snorkeling", "tourIncludes.lunch", "tourIncludes.softDrinks"],
    imageFolderName: "Orange Bay Island Images",
    imagePrefix: "OrangeBay",
    image: "/Images/orange-bay/orangebay1.jpg",
    galleryImages: getTourImages("orange-bay", "orangebay"),
    price: 30,
  },
  {
    id: "paradise-island",
    title: "Paradise Island",
    titleKey: "tours.paradiseIsland.title",
    category: "sea",
    duration: "Full Day",
    durationKey: "tours.paradiseIsland.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.paradiseIsland.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.paradiseIsland.locationBadge",
    description: "Discover Paradise Island — a breathtaking destination with white sandy shores, ideal for swimming, sunbathing, and snorkeling in the Red Sea.",
    descriptionKey: "tours.paradiseIsland.description",
    includes: [
  "tourIncludes.boatTrip",
  "tourIncludes.snorkelingEquipment",
  "tourIncludes.lunch",
],
    imageFolderName: "Paradise Island Images",
    imagePrefix: "Paradise",
    image: "/Images/paradise-island/paradise1.jpg",
    galleryImages: getTourImages("paradise-island", "paradise"),
    price: 30,
  },
  {
    id: "dolphin-house",
    title: "Dolphin House",
    titleKey: "tours.dolphinHouse.title",
    category: "sea",
    duration: "Full Day",
    durationKey: "tours.dolphinHouse.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.dolphinHouse.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.dolphinHouse.locationBadge",
    description: "Swim alongside wild dolphins in their natural habitat at Dolphin House reef. An unforgettable marine encounter with professional guides.",
    descriptionKey: "tours.dolphinHouse.description",
    includes: [
  "tourIncludes.dolphinArea",
  "tourIncludes.snorkeling",
  "tourIncludes.lunch",
  "tourIncludes.professionalGuide",
],
    imageFolderName: "Dolphin House Images",
    imagePrefix: "DolphinHouse",
    image: "/Images/dolphin-house/dolphinhouse1.jpg",
    galleryImages: getTourImages("dolphin-house", "dolphinhouse"),
    price: 35,
  },
  {
    id: "scuba-diving-intro",
    title: "Scuba Diving Intro",
    titleKey: "tours.scubaDivingIntro.title",
    category: "sea",
    duration: "Full Day",
    durationKey: "tours.scubaDivingIntro.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.scubaDivingIntro.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.scubaDivingIntro.locationBadge",
    description: "Take your first breath underwater with a professional scuba diving introduction. No experience needed — explore the Red Sea's vibrant coral reefs.",
    descriptionKey: "tours.scubaDivingIntro.description",
    includes: [
  "tourIncludes.twoVesselsDives",
  "tourIncludes.instructor",
  "tourIncludes.equipment",
  "tourIncludes.lunch",
],
    imageFolderName: "Scuba Diving Intro Images",
    imagePrefix: "ScubaDiving",
    image: "/Images/scuba-diving/scubadiving1.jpg",
    galleryImages: getTourImages("scuba-diving", "scubadiving"),
    price: 50,
  },
  {
    id: "private-speedboat",
    title: "Private Speedboat",
    titleKey: "tours.privateSpeedboat.title",
    category: "sea",
    duration: "4 hours",
    durationKey: "tours.privateSpeedboat.duration",
    location: "El Gouna / Hurghada, Egypt",
    locationKey: "tours.privateSpeedboat.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.privateSpeedboat.locationBadges",
    locationBadges: ["Hurghada Trip", "El Gouna Trip"],
    locationBadgesKeys: ["tours.privateSpeedboat.locationBadges"],
    description: "Enjoy an exclusive private speedboat experience along the coast. Snorkel at pristine spots with your own captain and crew. This tour is available in both Hurghada and El Gouna.",
    descriptionKey: "tours.privateSpeedboat.description",
    includes: [
  "tourIncludes.snorkeling",
  "tourIncludes.drinks",
  "tourIncludes.privateCapitain",
],
    imageFolderName: "Private Speedboat Images",
    imagePrefix: "PrivateSpeedboat",
    image: "/Images/private-speedboat/privatespeedboat1.jpg",
    galleryImages: getTourImages("private-speedboat", "privatespeedboat"),
    priceHurghada: 120,
    priceElGouna: 130,
  },
  {
    id: "glass-boat",
    title: "Glass Boat",
    titleKey: "tours.glassBoat.title",
    category: "sea",
    duration: "2 hours",
    durationKey: "tours.glassBoat.duration",
    location: "El Gouna / Hurghada, Egypt",
    locationKey: "tours.glassBoat.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.glassBoat.locationBadges",
    locationBadges: ["Hurghada Trip", "El Gouna Trip"],
    locationBadgesKeys: ["tours.glassBoat.locationBadges"],
    description: "See the magical underwater world without getting wet! The yellow glass-bottom boat reveals stunning coral reefs and colorful fish beneath you. This tour is available in both Hurghada and El Gouna.",
    descriptionKey: "tours.glassBoat.description",
    includes: [
  "tourIncludes.underwaterViewingExperience"
],
    imageFolderName: "Glass Boat Images",
    imagePrefix: "GlassBoat",
    image: "/Images/glass-boat/glassboat1.jpg",
    galleryImages: getTourImages("glass-boat", "glassboat"),
    priceHurghada: 7,
    priceElGouna: 17,
  },
  {
    id: "catamaran-trip",
    title: "Catamaran Trip",
    titleKey: "tours.catamaranTrip.title",
    category: "sea",
    duration: "3–5 Hours (Flexible)",
    durationKey: "tours.catamaranTrip.duration",
    location: "El Gouna, Egypt",
    locationKey: "tours.catamaranTrip.location",
    locationBadge: "El Gouna Trip",
    locationBadgeKey: "tours.catamaranTrip.locationBadge",
    description: "Catamaran trips are relaxing sea experiences in El Gouna, suitable for individuals, couples, and groups.",
    descriptionKey: "tours.catamaranTrip.description",
    includes: ["Meet at El Gouna Marina", "Sailing in El Gouna sea", "Swimming & snorkeling stop", "Relaxing time on deck", "Soft drinks & water included", "Return to marina"],
    imageFolderName: "Catamaran Images",
    imagePrefix: "Catamaran",
    image: "/Images/catamaran/catamaran1.jpg",
    galleryImages: getTourImages("catamaran", "catamaran"),
    price: 40,
  },
  {
    id: "quad-bike-safari",
    title: "Quad Bike Safari",
    titleKey: "tours.quadBikeSafari.title",
    category: "safari",
    duration: "3 hours",
    durationKey: "tours.quadBikeSafari.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.quadBikeSafari.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.quadBikeSafari.locationBadge",
    description: "Race across the golden sand dunes of the Sahara on powerful quad bikes. An adrenaline-filled desert adventure with Bedouin tea.",
    descriptionKey: "tours.quadBikeSafari.description",
    includes: ["Quad bike", "Guide", "Bedouin tea"],
    imageFolderName: "Quad Bike Safari Images",
    imagePrefix: "QuadBike",
    image: "/Images/quad-bike/quanbike1.jpg",
    galleryImages: getTourImages("quad-bike", "quanbike"),
    price: 20,
  },
  {
    id: "super-safari",
    title: "Super Safari (Quad + Jeep + Camel)",
    titleKey: "tours.superSafari.title",
    category: "safari",
    duration: "5 hours",
    durationKey: "tours.superSafari.duration",
    location: "El Gouna / Hurghada, Egypt",
    locationKey: "tours.superSafari.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.superSafari.locationBadges",
    locationBadges: ["Hurghada Trip", "El Gouna Trip"],
    locationBadgesKeys: ["tours.superSafari.locationBadges"],
    description: "The ultimate desert experience combining quad biking, jeep safari, and camel riding. Includes a traditional Bedouin dinner and show. This tour is available in both Hurghada and El Gouna.",
    descriptionKey: "tours.superSafari.description",
    includes: ["Dinner", "Show", "Desert activities", "Transfers"],
    imageFolderName: "Super Safari Images",
    imagePrefix: "SuperSafari",
    image: "/Images/super-safari/supersafari1.jpg",
    galleryImages: getTourImages("super-safari", "supersafari"),
    priceHurghada: 30,
    priceElGouna: 40,
  },
  {
    id: "city-tour-hurghada",
    title: "City Tour – Hurghada",
    titleKey: "tours.cityTourHurghada.title",
    category: "leisure",
    duration: "Flexible Duration",
    durationKey: "tours.cityTourHurghada.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.cityTourHurghada.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.cityTourHurghada.locationBadge",
    description: "A city sightseeing tour around Hurghada that allows visitors to explore the local lifestyle and main attractions.",
    descriptionKey: "tours.cityTourHurghada.description",
    includes: ["El Mina Mosque", "Hurghada Marina", "Local bazaars", "Walking through Hurghada streets", "Discovering local life and culture"],
    imageFolderName: "City Tour Images",
    imagePrefix: "CityTour",
    image: "/Images/city-tour/citytour1.jpg",
    galleryImages: getTourImages("city-tour", "citytour"),
    price: 6,
  },
  {
    id: "grand-aquarium-hurghada",
    title: "Grand Aquarium – Hurghada",
    titleKey: "tours.grandAquariumHurghada.title",
    category: "leisure",
    duration: "Flexible Duration",
    durationKey: "tours.grandAquariumHurghada.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.grandAquariumHurghada.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.grandAquariumHurghada.locationBadge",
    description: "The Aquarium Tour is one of the best family-friendly entertainment experiences in Hurghada, combining marine life observation with educational and interactive attractions.",
    descriptionKey: "tours.grandAquariumHurghada.description",
    includes: ["More than 1,200 marine animals representing around 100 species", "Nearly 1 million gallons of water", "24 different marine life exhibitions", "Underwater tunnel walking experience", "Aquarium entry", "Rainforest area", "Small zoo"],
    imageFolderName: "Aquarium Images",
    imagePrefix: "Aquarium",
    image: "/Images/aquarium/aquarium1.jpg",
    galleryImages: getTourImages("aquarium", "aquarium"),
    price: 20,
  },
  {
    id: "horse-riding-hurghada",
    title: "Horse Riding Tour – Hurghada",
    titleKey: "tours.horseRidingHurghada.title",
    category: "leisure",
    duration: "1–2 Hours",
    durationKey: "tours.horseRidingHurghada.duration",
    location: "Hurghada, Egypt",
    locationKey: "tours.horseRidingHurghada.location",
    locationBadge: "Hurghada Trip",
    locationBadgeKey: "tours.horseRidingHurghada.locationBadge",
    description: "Horse riding tours in Hurghada are suitable for all ages and offer a unique mix of natural scenery and enjoyable physical activity.",
    descriptionKey: "tours.horseRidingHurghada.description",
    includes: ["Tours along sandy beaches or nearby desert areas", "Suitable for beginners and experienced riders", "Professional trainers provided", "Basic horse riding training and guidance", "Riding pace adjusted to participant skill level"],
    imageFolderName: "Horse Riding Images",
    imagePrefix: "HorseRiding",
    image: "/Images/horse-riding/horseriding1.jpg",
    galleryImages: getTourImages("horse-riding", "horseriding"),
    price: 25,
  },
  {
    id: "luxor-trip",
    title: "Luxor Trip",
    titleKey: "tours.luxorTrip.title",
    category: "cultural",
    duration: "Full Day",
    durationKey: "tours.luxorTrip.duration",
    location: "From Hurghada",
    locationKey: "tours.luxorTrip.location",
    locationBadge: "From Hurghada",
    locationBadgeKey: "tours.luxorTrip.locationBadge",
    description: "Journey to the ancient city of Luxor and explore the world's greatest open-air museum. Visit temples, tombs, and legendary monuments.",
    descriptionKey: "tours.luxorTrip.description",
    includes: ["Professional guide", "Lunch", "Transfers"],
    transportOptions: ["By Bus", "Private"],
    transportOptionsKeys: ["transport.byBus", "transport.private"],
    transportPrices: {
      "By Bus": 65,
      "Private": 150,
    },
    transportPricesKeys: {
      "By Bus": "transport.byBus",
      "Private": "transport.private",
    },
    imageFolderName: "Luxor Trip Images",
    imagePrefix: "Luxor",
    image: "/Images/luxor-trip/luxor1.jpg",
    galleryImages: getTourImages("luxor-trip", "luxor"),
  },
  {
    id: "cairo-trip",
    title: "Cairo Trip",
    titleKey: "tours.cairoTrip.title",
    category: "cultural",
    duration: "Full Day",
    durationKey: "tours.cairoTrip.duration",
    location: "From Hurghada",
    locationKey: "tours.cairoTrip.location",
    locationBadge: "From Hurghada",
    locationBadgeKey: "tours.cairoTrip.locationBadge",
    description: "Explore the iconic Pyramids of Giza, the Sphinx, and the Egyptian Museum on an unforgettable day trip to Cairo from Hurghada.",
    descriptionKey: "tours.cairoTrip.description",
    includes: ["Professional guide", "Sightseeing program", "Transfers"],
    transportOptions: ["By Bus", "By Plane", "Private"],
    transportOptionsKeys: ["transport.byBus", "transport.byPlane", "transport.private"],
    transportPrices: {
      "By Bus": 70,
      "By Plane": 195,
      "Private": 160,
    },
    transportPricesKeys: {
      "By Bus": "transport.byBus",
      "By Plane": "transport.byPlane",
      "Private": "transport.private",
    },
    imageFolderName: "Cairo Trip Images",
    imagePrefix: "Cairo",
    image: "/Images/cairo-trip/cairoimage1.jpg",
    galleryImages: getTourImages("cairo-trip", "cairoimage"),
  },
  {
    id: "airport-transfer-hurghada",
    title: "Airport Transfer – Hurghada",
    titleKey: "tours.airportTransfer.title",
    category: "service",
    duration: "As Needed",
    durationKey: "tours.airportTransfer.duration",
    location: "Hurghada International Airport",
    locationKey: "tours.airportTransfer.location",
    locationBadge: "Transfer Service",
    locationBadgeKey: "tours.airportTransfer.locationBadge",
    description: "Private and shared transfer services from Hurghada International Airport to hotels, resorts, El Gouna, Makadi Bay, Sahl Hasheesh, and other nearby destinations.",
    descriptionKey: "tours.airportTransfer.description",
    includes: ["Pickup from Hurghada International Airport", "Drop-off at hotels & resorts", "El Gouna transfers", "Makadi Bay transfers", "Sahl Hasheesh transfers", "Comfortable private or shared vehicles"],
    imageFolderName: "Airport Transfer Images",
    imagePrefix: "Transfer",
    image: "/Images/airport-transfer/transfer1.jpg",
    galleryImages: getTourImages("airport-transfer", "transfer"),
    priceAdults: 15,
    priceChildren: 0,
  },
  {
    id: "nile-cruise",
    title: "Nile Cruise",
    titleKey: "tours.nileCruise.title",
    category: "cultural",
    duration: "Multiple Options",
    durationKey: "tours.nileCruise.duration",
    location: "Luxor ⇄ Aswan, Egypt",
    locationKey: "tours.nileCruise.location",
    locationBadge: "Nile Cruise",
    locationBadgeKey: "tours.nileCruise.locationBadge",
    description: "Experience unforgettable Nile River cruise adventures with multiple options to suit your schedule. Choose from dinner cruises, lunch cruises, pharaonic shows, or multi-day journeys along Egypt's legendary river.",
    descriptionKey: "tours.nileCruise.description",
    includes: [
      "Various cruise options available",
      "Professional service",
      "Entertainment included (selected options)",
      "Meals included (selected options)",
    ],
    imageFolderName: "Nile Cruise Images",
    imagePrefix: "NileCruise",
    image: "/Images/nile-cruise/nilecruise1.jpg",
    galleryImages: getTourImages("nile-cruise", "nilecruise"),
    cruiseOptions: [
      {
        name: "Dinner Cruise",
        nameKey: "cruiseOptions.dinnerCruise",
        duration: "3 Hours",
        durationKey: "cruiseOptions.dinnerCruiseDuration",
        includes: [
          "Buffet dinner",
          "Live music / entertainment show"
        ],
        price: 16
      },
      {
        name: "Lunch Cruise",
        nameKey: "cruiseOptions.lunchCruise",
        duration: "2–3 Hours",
        durationKey: "cruiseOptions.lunchCruiseDuration",
        includes: [
          "Buffet lunch"
        ],
        price: 13
      },
      {
        name: "Pharaonic Dinner Cruise",
        nameKey: "cruiseOptions.pharaonicDinnerCruise",
        duration: "3 Hours",
        durationKey: "cruiseOptions.pharaonicDinnerCruiseDuration",
        includes: [
          "Dinner",
          "Traditional artistic shows"
        ],
        price: 50
      },
      {
        name: "Day Use",
        nameKey: "cruiseOptions.dayUse",
        duration: "Until Evening",
        durationKey: "cruiseOptions.dayUseDuration",
        includes: [
          "Cabin / room access",
          "Meals"
        ],
        price: 70
      },
      {
        name: "Multi-Day Nile Cruise",
        nameKey: "cruiseOptions.multiDayNileCruise",
        duration: "3–4 Nights",
        durationKey: "cruiseOptions.multiDayNileCruiseDuration",
        includes: [
          "Accommodation",
          "Full board meals",
          "Sightseeing tours"
        ],
        price: 85
      }
    ]
  },
];

export const seaTours = tours.filter((t) => t.category === "sea");
export const safariTours = tours.filter((t) => t.category === "safari");
export const leisureTours = tours.filter((t) => t.category === "leisure");
export const culturalTours = tours.filter((t) => t.category === "cultural");
export const serviceTours = tours.filter((t) => t.category === "service");
