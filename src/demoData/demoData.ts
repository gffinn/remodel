// src/recoil/atoms/demoDataAtom.ts
import { atom } from 'recoil';

const demoDataAtom = atom({
  key: 'demoDataAtom', // unique ID (with respect to other atoms/selectors)
  default: {
    projectName: "Home Renovation",
    totalCost: 15000,
    breakdown: [
      {
        category: "Kitchen",
        cost: 5000,
        subcategories: [
          { item: "Flooring", cost: 1200 },
          { item: "Paint", cost: 400 },
          { item: "Drywall", cost: 600 },
          { item: "Electrical", cost: 1000 },
          { item: "Cabinets", cost: 1800 },
        ],
      },
      {
        category: "Bathroom",
        cost: 3000,
        subcategories: [
          { item: "Flooring", cost: 800 },
          { item: "Paint", cost: 200 },
          { item: "Drywall", cost: 500 },
          { item: "Plumbing", cost: 1200 },
          { item: "Fixtures", cost: 300 },
        ],
      },
      {
        category: "Living Room",
        cost: 2000,
        subcategories: [
          { item: "Flooring", cost: 1000 },
          { item: "Paint", cost: 300 },
          { item: "Electrical", cost: 400 },
          { item: "Window Treatments", cost: 300 },
        ],
      },
      {
        category: "Bedroom",
        cost: 4000,
        subcategories: [
          { item: "Flooring", cost: 1500 },
          { item: "Paint", cost: 500 },
          { item: "Drywall", cost: 700 },
          { item: "Electrical", cost: 600 },
          { item: "Closet", cost: 700 },
        ],
      },
    ],
  },
});

export default demoDataAtom;
