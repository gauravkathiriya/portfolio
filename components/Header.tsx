'use client';

import { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;

const navItems = [
  { key: '/', label: <Link href="/">Home</Link> },
  { key: '/about', label: <Link href="/about">About</Link> },
  { key: '/projects', label: <Link href="/projects">Projects</Link> },
  { key: '/contact', label: <Link href="/contact">Contact</Link> },
];

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '0 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <Link href="/" style={{ color: '#1677ff' }}>
          Portfolio
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          style={{ border: 'none' }}
          items={navItems}
        />
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button 
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>
      
      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={navItems.map(item => ({
            key: item.key,
            label: (
              <Link href={item.key} onClick={() => setMobileMenuOpen(false)}>
                {item.key === '/' ? 'Home' : 
                 item.key === '/about' ? 'About' : 
                 item.key === '/projects' ? 'Projects' : 'Contact'}
              </Link>
            )
          }))}
        />
      </Drawer>
    </AntHeader>
  );
}; 