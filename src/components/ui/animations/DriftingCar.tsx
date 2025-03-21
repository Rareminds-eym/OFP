// import React from 'react';
// import { Car } from 'lucide-react';
// import SparkleEffect from './SparkleEffect';
// import TireTrack from './TireTrack';
// import DriftSmoke from './DriftSmoke';

// interface DriftingCarProps {
//   className?: string;
// }

// const DriftingCar: React.FC<DriftingCarProps> = ({ className = '' }) => {
//   return (
//     <div className={`relative ${className}`}>
//       {/* Ground Shadow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 
//         bg-black/10 blur-sm rounded-full" />
      
//       {/* Drift Smoke */}
//       <DriftSmoke />
      
//       {/* Tire Tracks */}
//       <TireTrack />
      
//       {/* Car Container */}
//       <div className="relative transform hover:scale-105 transition-all duration-500
//         animate-carDrift">
//         {/* Car Icon */}
//         <Car className="w-full h-full text-green-400 transform -scale-x-100
//           transition-colors duration-500 hover:text-emerald-400" />
        
//         {/* Wheel Effects */}
//         <div className="absolute left-1/4 bottom-0 w-2 h-2 
//           bg-green-400/30 rounded-full animate-wheelSpin" />
//         <div className="absolute right-1/4 bottom-0 w-2 h-2 
//           bg-green-400/30 rounded-full animate-wheelSpin" />
        
//         {/* Speed Effects */}
//         <SparkleEffect count={3} className="absolute -right-4 bottom-0" />
//       </div>
//     </div>
//   );
// }

// export default DriftingCar;

import React from 'react';
import { Sprout } from 'lucide-react';
import SparkleEffect from './SparkleEffect';

interface GrowingPlantProps {
  className?: string;
}

const GrowingPlant: React.FC<GrowingPlantProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Ground Shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 
        bg-black/10 blur-sm rounded-full" />
      
      {/* Plant Container */}
      <div className="relative transform hover:scale-105 transition-all duration-500
        animate-plantGrow">
        {/* Plant Icon */}
        <Sprout className="w-full h-full text-green-400 
          transition-colors duration-500 hover:text-emerald-400" />
        
        {/* Growth Effects */}
        <div className="absolute left-1/4 bottom-0 w-2 h-2 
          bg-green-400/30 rounded-full animate-leafSway" />
        <div className="absolute right-1/4 bottom-0 w-2 h-2 
          bg-green-400/30 rounded-full animate-leafSway delay-100" />
        
        {/* Sparkle Effects for Growth */}
        <SparkleEffect count={3} className="absolute -right-4 bottom-0" />
      </div>
    </div>
  );
}

export default GrowingPlant;