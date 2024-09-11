// src/recoil/atoms/demoDataAtom.ts
import { atom } from "recoil";

const demoDataAtom = atom({
  key: "demoDataAtom", // unique ID (with respect to other atoms/selectors)
  default: {
    projectName: "Home Renovation",
    totalCost: 15000,
    breakdown: [
      {
        category: "Kitchen",
        cost: 5000,
        subcategories: [
          { item: "Planning", cost: 0, time: 12 },
          { item: "Demolition", cost: 300, time: 2 },
          { item: "Framing", cost: 400, time: 2 },
          { item: "Electrical", cost: 1500, time: 2 },
          { item: "Drywall", cost: 600, time: 6 },
          { item: "Flooring", cost: 1678, time: 0 },
          { item: "Paint", cost: 400, time: 1 },
          { item: "Tools", cost: 150, time: 0 },
          { item: "Insulation", cost: 400, time: 1 },
          { item: "Gas Line", cost: 600, time: 1 },
          { item: "Hood Vent", cost: 200, time: 1 },
        ],
      },
      {
        category: "Bathroom",
        cost: 3000,
        subcategories: [
          { item: "Flooring", cost: 800, time: 9 },
          { item: "Paint", cost: 200, time: 9 },
          { item: "Drywall", cost: 500, time: 9 },
          { item: "Plumbing", cost: 1200, time: 9 },
          { item: "Fixtures", cost: 300, time: 9 },
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
      {
        category: "MasterBedroom",
        cost: 4000,
        subcategories: [
          { item: "Flooring", cost: 1500 },
          { item: "Paint", cost: 500 },
          { item: "Drywall", cost: 700 },
          { item: "Electrical", cost: 600 },
          { item: "Closet", cost: 700 },
          { item: "Demolition", cost: 70 },
        ],
      },
      {
        category: "MasterBedroom",
        cost: 4000,
        subcategories: [
          { item: "Flooring", cost: 1500 },
          { item: "Paint", cost: 500 },
          { item: "Drywall", cost: 700 },
          { item: "Electrical", cost: 600 },
          { item: "Closet", cost: 700 },
          { item: "Demolition", cost: 70 },
        ],
      },
      {
        category: "Livingroom",
        cost: 4000,
        subcategories: [
          { item: "Flooring", cost: 1500 },
          { item: "Paint", cost: 500 },
          { item: "Drywall", cost: 700 },
          { item: "Electrical", cost: 600 },
          { item: "Closet", cost: 700 },
          { item: "Demolition", cost: 70 },
        ],
      },
      {
        category: "Office",
        cost: 4000,
        subcategories: [
          { item: "Flooring", cost: 1500 },
          { item: "Paint", cost: 500 },
          { item: "Drywall", cost: 700 },
          { item: "Electrical", cost: 600 },
          { item: "Closet", cost: 700 },
          { item: "Demolition", cost: 70 },
        ],
      },
      {
        category: "MasterBath",
        cost: 4000,
        subcategories: [
          { item: "Flooring", cost: 1500 },
          { item: "Paint", cost: 500 },
          { item: "Drywall", cost: 700 },
          { item: "Electrical", cost: 600 },
          { item: "Closet", cost: 700 },
          { item: "Demolition", cost: 70 },
        ],
      },
    ],
  },
});

export default demoDataAtom;
