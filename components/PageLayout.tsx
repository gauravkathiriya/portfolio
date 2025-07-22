'use client';

import { Layout } from 'antd';
import { Header } from './Header';
import { Footer } from './Footer';
import SmoothScrollProvider from './BarbaProvider';
import PageTransition from './PageTransition';
import ScrollToTop from './ScrollToTop';

const { Content } = Layout;

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '0', margin: '0 auto', width: '100%', maxWidth: '100%' }}>
        <SmoothScrollProvider>
          <div className="page-content" data-scroll-section>
            <div className="container mx-auto px-4 max-w-7xl">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </div>
        </SmoothScrollProvider>
      </Content>
      <Footer />
      <ScrollToTop />
    </Layout>
  );
} 