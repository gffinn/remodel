// src/pages/MasterBedroom.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";

const MasterBedroom: React.FC = () => {
  return (
    <>
      <Header />
      <div>MasterBedroom</div>
      <ProjectCostGraph category="MasterBedroom" />
    </>
  );
};

export default MasterBedroom;
