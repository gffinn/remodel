// src/pages/Bathroom.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";

const Bathroom: React.FC = () => {
  return (
    <>
      <Header />
      <div>Bathroom</div>
      <ProjectCostGraph category="Bathroom" />
    </>
  );
};

export default Bathroom;
