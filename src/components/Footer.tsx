import React from 'react';
import { BarChart3, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* <BarChart3 className="w-6 h-6 text-blue-400" /> */}
            {/* <span className="text-lg font-semibold">Mohamed Almatbaagy</span> */}
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            {/* <span>Made with</span> */}
            {/* <Heart className="w-4 h-4 text-red-400 fill-current" /> */}
            {/* <span>for data-driven decisions</span> */}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Mohamed Almatbaagy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;