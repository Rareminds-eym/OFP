import React from 'react';

interface GlowingTitleProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingTitle: React.FC<GlowingTitleProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 
        animate-pulse relative z-10">
        {children}
      </h1>
      <div className="absolute inset-0 blur-xl bg-gradient-to-r 
        from-green-400/30 via-emerald-300/30 to-green-400/30 
        animate-pulse z-0" />
    </div>
  );
};

export default GlowingTitle;