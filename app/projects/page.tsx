'use client';

import { useState } from 'react';
import { Typography, Row, Col, Card, Button, Tag, Tabs, Input } from 'antd';
import { GithubOutlined, LinkOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import AnimatedSection from '@/components/AnimatedSection';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.',
    image: '/placeholder.jpg',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    github: 'https://github.com/yourusername/ecommerce-project',
    liveDemo: 'https://your-vercel-project.vercel.app',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application that helps users organize tasks, set priorities, and track progress. Features include drag-and-drop interface, notifications, and team collaboration.',
    image: '/placeholder.jpg',
    tags: ['React', 'Redux', 'Firebase', 'Material UI'],
    category: 'web',
    github: 'https://github.com/yourusername/task-manager',
    liveDemo: 'https://your-netlify-project.netlify.app',
  },
  {
    id: 3,
    title: 'Portfolio Website Template',
    description: 'A customizable portfolio template for developers and designers, featuring smooth animations, responsive design, and easy content management.',
    image: '/placeholder.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'web',
    github: 'https://github.com/yourusername/portfolio-template',
    liveDemo: 'https://your-portfolio-template.vercel.app',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data, forecasts, and interactive maps. Uses geolocation and third-party weather APIs.',
    image: '/placeholder.jpg',
    tags: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
    category: 'app',
    github: 'https://github.com/yourusername/weather-app',
    liveDemo: 'https://your-weather-app.netlify.app',
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    description: 'A mobile-first application that helps users find recipes based on ingredients they have. Features include filtering by dietary restrictions and saving favorites.',
    image: '/placeholder.jpg',
    tags: ['React Native', 'API Integration', 'Firebase'],
    category: 'app',
    github: 'https://github.com/yourusername/recipe-finder',
    liveDemo: 'https://your-recipe-app.vercel.app',
  },
  {
    id: 6,
    title: 'Company Website Redesign',
    description: 'A complete redesign of a corporate website, focusing on improving user experience, accessibility, and conversion rates.',
    image: '/placeholder.jpg',
    tags: ['UI/UX', 'Figma', 'HTML', 'CSS', 'JavaScript'],
    category: 'design',
    github: 'https://github.com/yourusername/company-redesign',
    liveDemo: 'https://your-company-redesign.netlify.app',
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const tabItems = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web Development' },
    { key: 'app', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' },
  ];

  return (
    <PageLayout>
      <div className="space-y-8">
        <AnimatedSection>
          <section>
            <Title>My Projects</Title>
            <Paragraph className="text-lg">
              Here's a collection of my recent work. Each project represents different skills and challenges I've tackled.
            </Paragraph>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={2}>
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <Tabs 
                activeKey={activeCategory} 
                onChange={setActiveCategory}
                className="mb-4"
                items={tabItems}
              />

              <Input
                placeholder="Search projects..."
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ maxWidth: '300px' }}
              />
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <Title level={4}>No projects found matching your criteria</Title>
                <Button type="primary" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <Row gutter={[24, 24]}>
                {filteredProjects.map((project, index) => (
                  <Col xs={24} md={12} lg={8} key={project.id}>
                    <AnimatedSection delay={index + 3}>
                      <Card
                        hoverable
                        cover={
                          <div className="h-48 bg-gray-200 flex items-center justify-center">
                            {/* Replace with actual project image */}
                            <div className="text-2xl font-bold text-gray-400">{project.title}</div>
                          </div>
                        }
                        actions={[
                          <Link href={project.github} target="_blank" rel="noopener noreferrer" key="github">
                            <GithubOutlined key="github" /> Code
                          </Link>,
                          <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" key="demo">
                            <LinkOutlined key="link" /> Demo
                          </Link>,
                        ]}
                      >
                        <Card.Meta
                          title={project.title}
                          description={
                            <div>
                              <Paragraph ellipsis={{ rows: 3 }}>{project.description}</Paragraph>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                  <Tag color="blue" key={index}>{tag}</Tag>
                                ))}
                              </div>
                            </div>
                          }
                        />
                      </Card>
                    </AnimatedSection>
                  </Col>
                ))}
              </Row>
            )}
          </section>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
} 