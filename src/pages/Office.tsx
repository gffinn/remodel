// src/pages/Office.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";

const Office: React.FC = () => {
  return (
    <>
      <Header />
      <div>Office</div>
      <ProjectCostGraph category="Office" />
    </>
  );
};

export default Office;
