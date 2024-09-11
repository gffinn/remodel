// src/pages/Livingroom.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";

const Livingroom: React.FC = () => {
  return (
    <>
      <Header />
      <div>Livingroom</div>
      <ProjectCostGraph category="Livingroom" />
    </>
  );
};

export default Livingroom;
