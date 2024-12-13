import React from 'react';
import PlaneCard from '../ui/PlaneCard';
import { SectionProps } from '../../types';

const PlaneSection: React.FC<SectionProps> = ({ title, planes, bgColor = 'bg-white' }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planes.map((plane) => (
            <PlaneCard key={plane.id} {...plane} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaneSection;