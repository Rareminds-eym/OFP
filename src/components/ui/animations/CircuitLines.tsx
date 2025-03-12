// import React from 'react';
// import { ANIMATION_DELAYS } from '../../../utils/animation';

// interface CircuitLinesProps {
//   count?: number;
//   className?: string;
// }

// const CircuitLines: React.FC<CircuitLinesProps> = ({ 
//   count = 5,
//   className = ''
// }) => {
//   return (
//     <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
//       {[...Array(count)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent
//             animate-circuit-line"
//           style={{
//             top: `${20 + i * 15}%`,
//             left: '0',
//             width: '100%',
//             animationDelay: `${i * ANIMATION_DELAYS.CIRCUIT_LINE}s`,
//             transform: `rotate(${i % 2 ? 2 : -2}deg)`
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CircuitLines;

import React from 'react';
import { ANIMATION_DELAYS } from '../../../utils/animation';

interface VineGrowthProps {
  count?: number;
  className?: string;
}

const VineGrowth: React.FC<VineGrowthProps> = ({ 
  count = 5,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent
            animate-vineGrowth"
          style={{
            top: `${20 + i * 15}%`,
            left: '0',
            width: '100%',
            animationDelay: `${i * ANIMATION_DELAYS.VINE_GROWTH}s`,
            transform: `rotate(${i % 2 ? 2 : -2}deg)`
          }}
        />
      ))}
      
      {/* Leaf decorations */}
      {[...Array(count)].map((_, i) => (
        <div
          key={`leaf-${i}`}
          className="absolute w-2 h-2 bg-green-400/20 rounded-full
            animate-leafGrow"
          style={{
            top: `${25 + i * 15}%`,
            left: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * ANIMATION_DELAYS.LEAF_GROW}s`
          }}
        />
      ))}
    </div>
  );
};

export default VineGrowth;