'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={sectionRef} className={`${className}`} data-scroll-section>
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, delay: delay / 10 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
} 