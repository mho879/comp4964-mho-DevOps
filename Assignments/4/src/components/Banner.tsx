import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Marco Ho
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            AWS Cloud and Backend Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;