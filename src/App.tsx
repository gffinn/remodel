import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // Import the About component
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Bathroom from './pages/Bathroom';
import Livingroom from './pages/Livingroom';
import Bedroom from './pages/Bedroom';
import Kitchen from './pages/Kitchen';
import MasterBath from './pages/MasterBath';
import MasterBedroom from './pages/MasterBedroom';
import Office from './pages/Office';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/livingroom" element={<Livingroom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/masterBath" element={<MasterBath />} />
        <Route path="/masterBedroom" element={<MasterBedroom />} />
        <Route path="/office" element={<Office />} />
      </Routes>
    </Router>
    </RecoilRoot>
  );
};

export default App;
