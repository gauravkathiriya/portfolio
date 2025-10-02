'use client';

import { motion } from 'framer-motion';

interface Animated3DCharacterProps {
  type?: 'developer' | 'contact' | 'projects' | 'about';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Animated3DCharacter({ 
  type = 'developer', 
  size = 'lg',
  className = '' 
}: Animated3DCharacterProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64 lg:w-80 lg:h-80'
  };

  const characters = {
    developer: '🧑‍💻',
    contact: '📞',
    projects: '🚀',
    about: '👨‍🎓'
  };

  const gradients = {
    developer: 'from-blue-400 to-purple-400',
    contact: 'from-green-400 to-blue-400',
    projects: 'from-purple-400 to-pink-400',
    about: 'from-orange-400 to-red-400'
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className={`${sizeClasses[size]} bg-gradient-to-r ${gradients[type]} rounded-full flex items-center justify-center`}
        animate={{ 
          rotateY: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <motion.div 
          className={`${size === 'sm' ? 'text-4xl' : size === 'md' ? 'text-6xl' : 'text-8xl lg:text-9xl'}`}
          animate={{ 
            rotate: [0, 10, -10, 0],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {characters[type]}
        </motion.div>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div 
        className={`absolute ${size === 'sm' ? '-top-2 -left-2 w-6 h-6 text-sm' : size === 'md' ? '-top-4 -left-4 w-8 h-8 text-lg' : '-top-6 -left-6 w-12 h-12 text-2xl'} bg-yellow-400 rounded-full flex items-center justify-center shadow-lg`}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        ⚡
      </motion.div>
      
      <motion.div 
        className={`absolute ${size === 'sm' ? '-bottom-2 -right-2 w-6 h-6 text-sm' : size === 'md' ? '-bottom-4 -right-4 w-8 h-8 text-lg' : '-bottom-6 -right-6 w-12 h-12 text-2xl'} bg-pink-400 rounded-full flex items-center justify-center shadow-lg`}
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        💫
      </motion.div>
      
      {size !== 'sm' && (
        <motion.div 
          className={`absolute ${size === 'md' ? 'top-1/2 -right-6 w-6 h-6 text-base' : 'top-1/2 -right-8 w-10 h-10 text-xl'} bg-green-400 rounded-full flex items-center justify-center shadow-lg`}
          animate={{ 
            x: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🎯
        </motion.div>
      )}
    </div>
  );
}

// 3D SVG Character Component
export function SVG3DCharacter({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="drop-shadow-2xl"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Background circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          fill="url(#gradient1)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Character body */}
        <motion.ellipse
          cx="150"
          cy="180"
          rx="60"
          ry="80"
          fill="#4F46E5"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Character head */}
        <motion.circle
          cx="150"
          cy="120"
          r="40"
          fill="#FCD34D"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Eyes */}
        <circle cx="135" cy="115" r="5" fill="#1F2937" />
        <circle cx="165" cy="115" r="5" fill="#1F2937" />
        
        {/* Smile */}
        <motion.path
          d="M 130 130 Q 150 145 170 130"
          stroke="#1F2937"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={{ d: ["M 130 130 Q 150 145 170 130", "M 130 135 Q 150 150 170 135", "M 130 130 Q 150 145 170 130"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Arms */}
        <motion.ellipse
          cx="100"
          cy="160"
          rx="15"
          ry="40"
          fill="#4F46E5"
          transform="rotate(-30 100 160)"
          animate={{ rotate: [-30, -20, -30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="200"
          cy="160"
          rx="15"
          ry="40"
          fill="#4F46E5"
          transform="rotate(30 200 160)"
          animate={{ rotate: [30, 20, 30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Laptop */}
        <motion.rect
          x="120"
          y="200"
          width="60"
          height="40"
          rx="5"
          fill="#374151"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="125" y="205" width="50" height="30" rx="2" fill="#10B981" />
        
        {/* Floating code symbols */}
        <motion.text
          x="80"
          y="80"
          fontSize="20"
          fill="#EF4444"
          animate={{ y: [80, 70, 80], rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;/&gt;
        </motion.text>
        
        <motion.text
          x="220"
          y="100"
          fontSize="16"
          fill="#8B5CF6"
          animate={{ y: [100, 90, 100], rotate: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          { }
        </motion.text>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Floating particles */}
      <motion.div 
        className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        ⭐
      </motion.div>
    </div>
  );
}
