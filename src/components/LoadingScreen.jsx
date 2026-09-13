import React, { useEffect, useState } from 'react';
import Logo from './Logo';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(45), 250);
    const timer2 = setTimeout(() => setProgress(80), 550);
    const timer3 = setTimeout(() => setProgress(100), 850);
    const timer4 = setTimeout(() => setFadeOut(true), 1100);
    const timer5 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05080D] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Subtle orange aura */}
        <div className="absolute w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Company Logo in loading screen */}
        <div className="mb-6 transform hover:scale-105 transition-transform">
          <Logo variant="dark" size="lg" showTagline={true} />
        </div>

        {/* Progress bar container */}
        <div className="w-56 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3 border border-slate-700/50">
          <div 
            className="h-full bg-gradient-to-r from-[#F26522] via-[#ff8244] to-[#F26522] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-56 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <span>Initializing 3D Engine</span>
          <span className="text-[#F26522] font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
