'use client';

import { Layout } from 'antd';
import { Header } from './Header';
import { Footer } from './Footer';

const { Content } = Layout;

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '24px', margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
        <div className="page-content">
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
} 