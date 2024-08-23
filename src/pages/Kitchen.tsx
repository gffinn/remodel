// src/pages/Kitchen.tsx
import React from 'react';
import Header from '../components/Header';
import ProjectCostGraph from '../components/ProjectCostGraph';

const Kitchen: React.FC = () => {
  return (
    <><Header />
   
    <div>Kitchen</div>
    <ProjectCostGraph category="Kitchen"/></>
  
  );
};

export default Kitchen;
