
import React from 'react';

const Hobbies = () => {
  return (
    <section id="hobbies" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white hover:bg-gray-50">
          <h3 className="font-semibold text-xl mb-3">Gaming</h3>
          <p className="text-gray-600">
            I enjoy exploring virtual worlds and strategic gameplay. My favorite genres include RPGs and strategy games.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white hover:bg-gray-50">
          <h3 className="font-semibold text-xl mb-3">Drawing</h3>
          <p className="text-gray-600">
            I enjoy sketching and creating digital art during free time. It helps me express creativity in a different medium.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white hover:bg-gray-50">
          <h3 className="font-semibold text-xl mb-3">Working Out</h3>
          <p className="text-gray-600">
            I'm passionate about fitness and maintaining a healthy lifestyle through regular exercise and strength training.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white hover:bg-gray-50">
          <h3 className="font-semibold text-xl mb-3">Music Addict</h3>
          <p className="text-gray-600">
            I'm constantly listening to music and exploring different genres. Music helps me focus and enhances my creativity.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white hover:bg-gray-50">
          <h3 className="font-semibold text-xl mb-3">Loves Food</h3>
          <p className="text-gray-600">
            I'm passionate about trying new cuisines and discovering hidden food spots. Food exploration is one of my favorite weekend activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
