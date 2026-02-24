// constants/index.ts

export const NAV_LINKS = [
  { name: "Properties", href: "/properties" }, // Changed from #
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const PROPERTIES = [
  {
    id: 1,
    title: "The Obsidian Manor",
    location: "Banana Island, Lagos",
    price: "₦1,850,000,000",
    image: "/images/luxury1.jpg",
    specs: { beds: 5, baths: 6, sqft: 4500 },
    category: "Luxury",
  },
  {
    id: 2,
    title: "Ethereal Glass Tower",
    location: "Eko Atlantic City, Lagos",
    price: "₦950,000,000",
    image: "/images/residential1.jpg",
    specs: { beds: 3, baths: 3.5, sqft: 2800 },
    category: "Residential",
  },
  {
    id: 3,
    title: "Maitama Diplomatic Villa",
    location: "Maitama, Abuja",
    price: "₦1,200,000,000",
    image: "/images/commercial1.jpg",
    specs: { beds: 6, baths: 7, sqft: 5200 },
    category: "Commercial",
  },
  {
    id: 4,
    title: "The Lekki Loft",
    location: "Lekki Phase 1, Lagos",
    price: "₦320,000,000",
    image: "/images/luxury2.jpg",
    specs: { beds: 4, baths: 4, sqft: 2200 },
    category: "Luxury",
  },
  {
    id: 5,
    title: "Asokoro Heights",
    location: "Asokoro, Abuja",
    price: "₦750,000,000",
    image: "/images/residential2.jpg",
    specs: { beds: 5, baths: 5, sqft: 3800 },
    category: "Residential",
  },
  {
    id: 6,
    title: "Victory Garden Estate",
    location: "VGC, Lagos",
    price: "₦450,000,000",
    image: "/images/commercial2.jpg",
    specs: { beds: 4, baths: 4, sqft: 3100 },
    category: "Commercial",
  },
  {
    id: 7,
    title: "The Presidential Maisonette",
    location: "Victoria Island, Lagos",
    price: "₦680,000,000",
    image: "/images/luxury3.jpg",
    specs: { beds: 3, baths: 4, sqft: 2600 },
    category: "Luxury",
  },
  {
    id: 8,
    title: "Garden City Retreat",
    location: "GRA Phase 2, Port Harcourt",
    price: "₦280,000,000",
    image: "/images/residential3.jpg",
    specs: { beds: 5, baths: 5, sqft: 3400 },
    category: "Residential",
  },
];

export const STATS = [
  { label: "Properties Sold", value: "450+" },
  { label: "Happy Clients", value: "380" },
  { label: "Awards Won", value: "12" },
];
