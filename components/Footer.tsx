'use client';

import { Layout, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  return (
    <AntFooter style={{ 
      textAlign: 'center',
      background: '#f0f2f5',
      padding: '24px'
    }}>
      <div className="flex flex-col items-center gap-4">
        <Space size="large">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <GithubOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
          </Link>
          <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
          </Link>
        </Space>
        <Text>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</Text>
      </div>
    </AntFooter>
  );
}; 