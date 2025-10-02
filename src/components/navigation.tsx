'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  User, 
  FolderOpen, 
  Mail, 
  Menu, 
  X,
  Code2
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'About', href: '/about', icon: <User className="w-4 h-4" /> },
  { name: 'Projects', href: '/projects', icon: <FolderOpen className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                Gaurav
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`relative px-4 py-2 transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </span>
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-16 left-4 right-4 bg-white dark:bg-slate-900 rounded-lg shadow-xl z-40 md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-left transition-all duration-200 ${
                          pathname === item.href
                            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Navigation Dots (Alternative) */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-blue-600 border-blue-600 scale-125'
                    : 'bg-transparent border-gray-400 hover:border-blue-600 hover:scale-110'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={item.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
