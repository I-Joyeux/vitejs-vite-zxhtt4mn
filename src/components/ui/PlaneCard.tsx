import React from 'react';
import { Plane } from '../../types';
import Button from './Button';

const PlaneCard: React.FC<Plane> = ({ name, image, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-2xl font-bold text-blue-600">{price}</div>
        
      </div>
    </div>
  );
};

export default PlaneCard;