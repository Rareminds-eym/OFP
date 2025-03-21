import React, { useEffect, useState } from "react";
import CircuitLines from "../ui/animations/CircuitLines";
import GlowingTitle from "../ui/GlowingTitle";
import BatteryLoader from "./BatteryLoader";

interface LoaderScreenProps {
  onComplete: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100));
      } else {
        onComplete();
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-green-950 to-stone-900 
      flex flex-col items-center justify-center relative overflow-hidden"
    >
      <CircuitLines />

      <div className="relative z-10 flex flex-col items-center">
        <div className="-ml-[20px]">
          <img
            src="/images/RareMinds-Logo.png"
            alt="RareMinds Logo"
            className="w-[250px]"
          />
        </div>
        <div className="w-48 h-48 mb-12">
          <BatteryLoader imageSrc="/src/assets/loader.png" progress={progress} />
        </div>

    
      {/* <div className="flex items-center justify-center h-screen">
      <BatteryLoader 
        imageSrc="/src/assets/loader.png" // Replace with your image path 
        progress={50} // You can pass any progress value
      />
      </div> */}

        <GlowingTitle className="mb-16 text-center">
          {/* EV Battery Fault Diagnosis System */}
          Organic Food Production
        </GlowingTitle>

        <div className="text-green-400 font-medium">
          System Loading... {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;
