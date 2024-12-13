import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-12 bg-blue-600">
      <div className="container mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Beyond The Sky</h1>
        <p className="text-xl mb-8">you got the cash, we got the plane</p>
        <Button variant="light">take a look</Button>
      </div>
    </section>
  );
};

export default Hero;
