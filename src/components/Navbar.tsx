import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">SkyFleet</div>
          <div className="hidden md:flex space-x-8">
            {['home', 'civilian', 'private', 'military'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-blue-600 cursor-pointer capitalize"
              >
                {section} Planes
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;