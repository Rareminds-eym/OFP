// // import React from 'react';
// // import { Battery } from 'lucide-react';
// // import EnergyPulse from './EnergyPulse';

// // interface BatteryLoaderProps {
// //   progress: number;
// // }

// // const BatteryLoader: React.FC<BatteryLoaderProps> = ({ progress }) => {
// //   return (
// //     <div className="relative group">
// //       {/* Battery Container */}
// //       <div className="relative transform group-hover:scale-105 transition-all duration-500">
// //         <Battery className="w-full h-full text-green-400" strokeWidth={1.5} />
        
// //         {/* Energy Pulses */}
// //         <EnergyPulse />
// //       </div>

// //       {/* Glow Effect */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20
// //         rounded-full blur-xl opacity-50 animate-pulse" />
      
// //       {/* Connection Points */}
// //       <div className="absolute -left-4 top-1/2 w-3 h-3 bg-green-400 rounded-full
// //         animate-pulse shadow-lg shadow-green-400/50" />
// //       <div className="absolute -right-4 top-1/2 w-3 h-3 bg-emerald-400 rounded-full
// //         animate-pulse shadow-lg shadow-emerald-400/50" />
// //     </div>
// //   );
// // };

// // export default BatteryLoader;


// import React from 'react';
// import { Leaf } from 'lucide-react'; // Assuming you have a Leaf icon
// import GrowthPulse from './EnergyPulse'; // A component that represents growth pulses

// interface OrganicLoaderProps {
//   imageSrc: string;
//   progress: number;
// }

// const OrganicLoader: React.FC<OrganicLoaderProps> = ({ progress }) => {
//   return (
//     <div className="relative group">
//       {/* Organic Food Container */}
//       <div className="relative transform group-hover:scale-105 transition-all duration-500">
//         <Leaf className="w-full h-full text-green-600" strokeWidth={1.5} />
        
//         {/* Growth Pulses */}
//         <GrowthPulse />
//       </div>

//       {/* Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-green-500/20
//         rounded-full blur-xl opacity-50 animate-pulse" />
      
//       {/* Connection Points */}
//       <div className="absolute -left-4 top-1/2 w-3 h-3 bg-green-600 rounded-full
//         animate-pulse shadow-lg shadow-green-600/50" />
//       <div className="absolute -right-4 top-1/2 w-3 h-3 bg-green-500 rounded-full
//         animate-pulse shadow-lg shadow-green-500/50" />
//     </div>
//   );
// };

// export default OrganicLoader;

import React from 'react';

interface OrganicLoaderProps {
  imageSrc: string; // URL or path to the plant image
  progress: number; // You can use this prop for any progress-related functionality
}

const OrganicLoader: React.FC<OrganicLoaderProps> = ({ imageSrc, progress }) => {
  return (
    <div className="relative group">
      {/* Organic Food Container */}
      <div className="relative transform group-hover:scale-105 transition-all duration-500">
        {/* Image of the Plant */}
        <img 
          src={imageSrc} 
          alt="Plant" 
          className="w-full h-full object-cover text-green-600" 
          style={{ borderRadius: '8px' }} // Optional: Add some border radius
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-green-500/20
        rounded-full blur-xl opacity-50 animate-pulse" />
      
      {/* Connection Points */}
      <div className="absolute -left-4 top-1/2 w-3 h-3 bg-green-600 rounded-full
        animate-pulse shadow-lg shadow-green-600/50" />
      <div className="absolute -right-4 top-1/2 w-3 h-3 bg-green-500 rounded-full
        animate-pulse shadow-lg shadow-green-500/50" />
    </div>
  );
};

export default OrganicLoader;