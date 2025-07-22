'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScrollProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      const scroll = new LocomotiveScroll({
        el: containerRef.current as HTMLElement,
        smooth: true,
        smoothMobile: false,
        inertia: 0.3,
      });

      // Update scroll on window resize
      window.addEventListener('resize', () => scroll.update());

      // Cleanup
      return () => {
        scroll.destroy();
        window.removeEventListener('resize', () => scroll.update());
      };
    };

    initLocomotiveScroll();
  }, [pathname]); // Re-initialize on route change

  return (
    <div 
      ref={containerRef} 
      data-scroll-container 
      className="smooth-scroll-container"
    >
      {children}
    </div>
  );
} 