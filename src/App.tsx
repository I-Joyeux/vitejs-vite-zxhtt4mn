import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import PlaneSection from './components/sections/PlaneSection';
import { civilianPlanes, privatePlanes, militaryPlanes } from './data/planes';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <PlaneSection
        id="civilian"
        title="Civilian Aircraft"
        planes={civilianPlanes}
      />
      
      <PlaneSection
        id="private"
        title="Private Jets"
        planes={privatePlanes}
        bgColor="bg-gray-100"
      />
      
      <PlaneSection
        id="military"
        title="Military Aircraft"
        planes={militaryPlanes}
      />

      <Footer />
    </div>
  );
}

export default App;