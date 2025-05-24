import React from 'react';
import { motion } from 'framer-motion';

const FloatingStones: React.FC = () => {
  const stonePositions = [
    { top: '15%', left: '10%', delay: 0, scale: 0.6, rotation: 15 },
    { top: '25%', right: '8%', delay: 1, scale: 0.8, rotation: -10 },
    { top: '45%', left: '5%', delay: 0.5, scale: 0.5, rotation: 20 },
    { top: '65%', right: '12%', delay: 1.5, scale: 0.7, rotation: -5 },
    { top: '80%', left: '15%', delay: 0.8, scale: 0.4, rotation: 8 },
    { top: '40%', right: '5%', delay: 0.3, scale: 0.3, rotation: -15 },
  ];

  const renderStone = (index: number) => {
    const pos = stonePositions[index % stonePositions.length];
    const animationClass = index % 2 === 0 ? 'float-animation' : 'float-animation-reverse';
    const size = 80 * pos.scale;

    const style: React.CSSProperties = {
      position: 'fixed',
      width: `${size}px`,
      height: `${size}px`,
      zIndex: 1,
      opacity: 0.8,
      filter: 'drop-shadow(0 0 10px rgba(216, 103, 49, 0.3))',
      ...pos,
    };

    // Different asteroid paths for variety
    const paths = [
      "M37.5,4.4C43.3,8.2,44.7,18.1,42.2,27.6C39.7,37.2,33.2,46.3,24.6,47.8C16,49.3,5.3,43.2,1.7,33.9C-1.9,24.7,1.6,12.3,8.9,6.4C16.1,0.6,27.1,1.2,37.5,4.4Z",
      "M40.1,8.8C46.6,14.1,49.2,22.9,47.2,31.2C45.2,39.5,38.5,47.3,30.1,49.6C21.7,51.9,11.6,48.7,5.6,41.9C-0.5,35,-2.4,24.5,2.2,16.6C6.7,8.7,17.8,3.5,27.2,3.3C36.6,3.1,44.4,7.9,40.1,8.8Z",
      "M40.5,5.4C48.9,9.6,57.1,17.4,57.8,25.9C58.6,34.4,51.9,43.5,42.8,48.2C33.7,53,22.3,53.3,14.1,49C5.8,44.7,0.6,35.7,0.1,26C-0.3,16.3,3.9,5.9,11.8,2.5C19.7,-0.9,31.3,2.7,40.5,5.4Z"
    ];

    return (
      <motion.div
        key={index}
        style={style}
        className={animationClass}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1, rotate: pos.rotation }}
        transition={{ 
          duration: 0.8, 
          delay: pos.delay,
          opacity: { duration: 1.5 }
        }}
      >
        <svg 
          viewBox="0 0 60 60" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d={paths[index % paths.length]} 
            fill="url(#marsGradient)" 
          />
          <defs>
            <radialGradient id="marsGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#D86731" />
              <stop offset="70%" stopColor="#972D2D" />
              <stop offset="100%" stopColor="#541212" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 6 }).map((_, index) => renderStone(index))}
    </div>
  );
};

export default FloatingStones;