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
    title: "The Obsidian Villa",
    location: "Berlin, Germany",
    price: "$3,250,000",
    image: "/villa-1.jpg", // You can use placeholders for now
    specs: { beds: 4, baths: 3, sqft: 3200 },
    category: "Residential",
  },
  {
    id: 2,
    title: "Ethereal Penthouse",
    location: "New York, USA",
    price: "$5,800,000",
    image: "/penthouse-1.jpg",
    specs: { beds: 3, baths: 3.5, sqft: 2800 },
    category: "Luxury",
  },
  // Add 4-6 more to make the grid look full
];

export const STATS = [
  { label: "Properties Sold", value: "450+" },
  { label: "Happy Clients", value: "380" },
  { label: "Awards Won", value: "12" },
];
