import React from 'react';
import { ArrowDown, Database, TrendingUp } from 'lucide-react';



const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
            <img src={'/src/images/profile.jpg'} alt="Profile" className="w-full h-full object-[center_20%] object-cover rounded-full" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Mohamed Almatbaagy
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            Business Intelligence Analyst
          </p>

          {/* Description */}
          {/* <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming data into strategic decisions with an engineering mindset. 
            Passionate about financial modeling, supply chain optimization, and creating 
            data-driven stories that drive business success.
          </p> */}

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Business Analysis</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Database className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Data Visualization</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;