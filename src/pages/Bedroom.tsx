// src/pages/Bedroom.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";

const Bedroom: React.FC = () => {
  return (
    <>
      <Header />
      <div>Bedroom</div>
      <ProjectCostGraph category="Bedroom" />
    </>
  );
};

export default Bedroom;
