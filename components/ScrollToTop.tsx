'use client';

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          type="primary"
          shape="circle"
          icon={<UpOutlined />}
          size="large"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 shadow-lg"
          style={{ 
            width: '50px', 
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
        />
      )}
    </>
  );
} 