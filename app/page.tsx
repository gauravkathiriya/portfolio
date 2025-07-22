'use client';

import { Typography, Button, Space, Card, Row, Col } from 'antd';
import { UserOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <PageLayout>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <Title>
              Hi, I'm <span className="text-blue-500">Your Name</span>
            </Title>
            <Title level={3} className="font-normal">
              Frontend Developer & UI/UX Designer
            </Title>
            <Paragraph className="text-lg">
              I build modern, responsive web applications with a focus on user experience and clean code.
              Specialized in React, Next.js, and modern frontend technologies.
            </Paragraph>
            <Space size="middle">
              <Button type="primary" size="large" icon={<UserOutlined />}>
                <Link href="/about">About Me</Link>
              </Button>
              <Button size="large" icon={<ProjectOutlined />}>
                <Link href="/projects">View Projects</Link>
              </Button>
            </Space>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
              {/* Add your actual image here */}
              <Image
                src="/profile-image.jpg"
                alt="Your Profile"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8">
          <Title level={2} className="text-center mb-8">My Skills</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card title="Frontend Development" className="h-full">
                <ul className="list-disc pl-5">
                  <li>React & Next.js</li>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript & TypeScript</li>
                  <li>Responsive Design</li>
                  <li>Tailwind CSS</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card title="UI/UX Design" className="h-full">
                <ul className="list-disc pl-5">
                  <li>Figma & Adobe XD</li>
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Interaction Design</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card title="Other Skills" className="h-full">
                <ul className="list-disc pl-5">
                  <li>Git & Version Control</li>
                  <li>API Integration</li>
                  <li>Performance Optimization</li>
                  <li>Accessibility (WCAG)</li>
                  <li>Testing (Jest, Cypress)</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Featured Projects */}
        <section className="py-8">
          <div className="flex justify-between items-center mb-8">
            <Title level={2}>Featured Projects</Title>
            <Button type="primary">
              <Link href="/projects">View All</Link>
            </Button>
          </div>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <ProjectOutlined style={{ fontSize: '3rem', color: '#1677ff' }} />
                  </div>
                }
              >
                <Card.Meta
                  title="Vercel Project"
                  description="A project deployed on Vercel with modern web technologies."
                />
                <div className="mt-4">
                  <Button type="link" className="p-0">
                    <Link href="https://your-vercel-project.vercel.app" target="_blank">View Project</Link>
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <ProjectOutlined style={{ fontSize: '3rem', color: '#1677ff' }} />
                  </div>
                }
              >
                <Card.Meta
                  title="Netlify Project"
                  description="A project deployed on Netlify showcasing frontend skills."
                />
                <div className="mt-4">
                  <Button type="link" className="p-0">
                    <Link href="https://your-netlify-project.netlify.app" target="_blank">View Project</Link>
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <ProjectOutlined style={{ fontSize: '3rem', color: '#1677ff' }} />
                  </div>
                }
              >
                <Card.Meta
                  title="GitHub Project"
                  description="An open-source project available on GitHub."
                />
                <div className="mt-4">
                  <Button type="link" className="p-0">
                    <Link href="https://github.com/yourusername/project-name" target="_blank">View Project</Link>
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Contact CTA */}
        <section className="py-8 text-center bg-gray-50 rounded-lg p-8">
          <Title level={2}>Let's Work Together</Title>
          <Paragraph className="text-lg max-w-2xl mx-auto mb-6">
            I'm currently available for freelance work or full-time opportunities.
            If you're interested in working together, feel free to reach out!
          </Paragraph>
          <Button type="primary" size="large" icon={<MailOutlined />}>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
