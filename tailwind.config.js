// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         'carDrift': 'carDrift 3s ease-in-out infinite',
//         'wheelSpin': 'wheelSpin 1s linear infinite',
//         'tireTrack': 'tireTrack 1s linear infinite',
//         'smokeRise': 'smokeRise 1.5s ease-out infinite',
//         'sparkle': 'sparkle 0.8s ease-out infinite',
//         'circuit-line': 'circuit-line 8s linear infinite',
//         'gradient': 'gradient 8s linear infinite',
//         'slideIn': 'slideIn 0.3s ease-out',
//         'energyPulse': 'energyPulse 2s ease-out infinite',
//         'energyLine': 'energyLine 1.5s ease-out infinite',
//       },
//       keyframes: {
//         'circuit-line': {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(100%)' }
//         },
//         energyLine: {
//           '0%': { 
//             opacity: 0,
//             transform: 'scaleY(0)'
//           },
//           '50%': { 
//             opacity: 1,
//             transform: 'scaleY(1)'
//           },
//           '100%': { 
//             opacity: 0,
//             transform: 'scaleY(0)'
//           }
//         },
//         energyPulse: {
//           '0%': { 
//             opacity: 0,
//             transform: 'scale(0.95)'
//           },
//           '50%': { 
//             opacity: 1,
//             transform: 'scale(1)'
//           },
//           '100%': { 
//             opacity: 0,
//             transform: 'scale(0.95)'
//           }
//         }
//       }
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'plantGrow': 'plantGrow 3s ease-in-out infinite',
        'leafSway': 'leafSway 2s ease-in-out infinite',
        'vineGrowth': 'vineGrowth 8s linear infinite',
        'leafGrow': 'leafGrow 1.5s ease-out infinite',
        'sparkle': 'sparkle 0.8s ease-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'slideIn': 'slideIn 0.3s ease-out',
        'energyPulse': 'energyPulse 2s ease-out infinite',
        'seedGerminate': 'seedGerminate 1.5s ease-out infinite',
      },
      keyframes: {
        'vineGrowth': {
          '0%': { transform: 'translateX(-100%) scaleX(0)' },
          '100%': { transform: 'translateX(100%) scaleX(1)' }
        },
        'leafGrow': {
          '0%': { 
            opacity: 0,
            transform: 'scale(0) rotate(0deg)'
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1) rotate(180deg)'
          },
          '100%': { 
            opacity: 0,
            transform: 'scale(0) rotate(360deg)'
          }
        },
        'plantGrow': {
          '0%': { 
            transform: 'translateY(10%) scale(0.95)'
          },
          '50%': { 
            transform: 'translateY(0%) scale(1)'
          },
          '100%': { 
            transform: 'translateY(10%) scale(0.95)'
          }
        },
        'leafSway': {
          '0%, 100%': { 
            transform: 'rotate(-5deg)'
          },
          '50%': { 
            transform: 'rotate(5deg)'
          }
        },
        'seedGerminate': {
          '0%': { 
            opacity: 0,
            transform: 'scale(0.5) translateY(0)'
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1.2) translateY(-10px)'
          },
          '100%': { 
            opacity: 0,
            transform: 'scale(1) translateY(-20px)'
          }
        }
      }
    },
  },
  plugins: [],
};