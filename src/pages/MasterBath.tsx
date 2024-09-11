// src/pages/MasterBath.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";

const MasterBath: React.FC = () => {
  return (
    <>
      <Header />
      <div>MasterBath</div>
      <ProjectCostGraph category="MasterBath" />
    </>
  );
};

export default MasterBath;
