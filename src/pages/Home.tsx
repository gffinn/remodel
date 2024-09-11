// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import FloorPlanComponent from "../components/FloorPlanComponent";
import TotalProjectOverview from "../components/TotalProjectOverview";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TotalProjectOverview />
      <FloorPlanComponent />
    </>
  );
};

export default Home;
