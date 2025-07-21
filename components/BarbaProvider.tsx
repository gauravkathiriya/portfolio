'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Create a simplified version without Barba.js for now
export const BarbaProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // We'll implement a simpler version without Barba.js for now
  // as it requires additional configuration to work with Next.js App Router
  return (
    <div className="page-transition-wrapper">
      <div className="page-content" key={pathname}>
        {children}
      </div>
    </div>
  );
}; 