'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
} 