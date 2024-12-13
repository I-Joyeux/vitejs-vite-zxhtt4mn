import React from 'react';

interface PlaneCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
}

const PlaneCard: React.FC<PlaneCardProps> = ({ name, image, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-2xl font-bold text-blue-600">{price}</div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PlaneCard;