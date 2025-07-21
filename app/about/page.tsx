'use client';

import { Typography, Row, Col, Timeline, Card, Divider, Tag } from 'antd';
import { UserOutlined, TrophyOutlined, BookOutlined, ToolOutlined } from '@ant-design/icons';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <PageLayout>
      <div className="space-y-16">
        <section>
          <Title>About Me</Title>
          <Row gutter={[32, 32]} className="mt-8">
            <Col xs={24} md={12}>
              <div className="space-y-6">
                <Paragraph className="text-lg">
                  Hello! I'm <strong>Your Name</strong>, a passionate frontend developer and UI/UX designer with over 5 years of experience building web applications.
                </Paragraph>
                <Paragraph className="text-lg">
                  I specialize in creating responsive, user-friendly interfaces that deliver exceptional user experiences. My approach combines clean code practices with modern design principles to build applications that are both beautiful and functional.
                </Paragraph>
                <Paragraph className="text-lg">
                  When I'm not coding, you can find me exploring new design trends, contributing to open source projects, or enjoying outdoor activities.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden">
                    {/* Add your actual image here */}
                    <Image 
                      src="/your-profile-image.jpg" 
                      alt="Your Profile" 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <Title level={3}>Your Name</Title>
                    <Paragraph className="text-lg">Frontend Developer & UI/UX Designer</Paragraph>
                    <div className="flex gap-2 flex-wrap justify-center mt-4">
                      <Tag color="blue">React</Tag>
                      <Tag color="blue">Next.js</Tag>
                      <Tag color="blue">TypeScript</Tag>
                      <Tag color="blue">UI/UX</Tag>
                      <Tag color="blue">Tailwind CSS</Tag>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider />

        <section>
          <Title level={2} className="flex items-center gap-2">
            <TrophyOutlined /> Experience
          </Title>
          <Timeline
            className="mt-8"
            items={[
              {
                color: 'blue',
                children: (
                  <div className="mb-6">
                    <Title level={4}>Senior Frontend Developer</Title>
                    <Paragraph className="text-lg font-medium">Company Name • 2021 - Present</Paragraph>
                    <Paragraph>
                      Led the frontend development of multiple web applications, implementing modern React patterns and optimizing performance. Collaborated with designers and backend developers to deliver high-quality products.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: 'blue',
                children: (
                  <div className="mb-6">
                    <Title level={4}>Frontend Developer</Title>
                    <Paragraph className="text-lg font-medium">Another Company • 2018 - 2021</Paragraph>
                    <Paragraph>
                      Developed responsive web applications using React and Next.js. Implemented UI/UX designs and worked on improving application performance and accessibility.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: 'blue',
                children: (
                  <div>
                    <Title level={4}>Junior Web Developer</Title>
                    <Paragraph className="text-lg font-medium">First Company • 2016 - 2018</Paragraph>
                    <Paragraph>
                      Started my career building websites with HTML, CSS, and JavaScript. Gradually moved to React development and modern frontend frameworks.
                    </Paragraph>
                  </div>
                ),
              },
            ]}
          />
        </section>

        <Divider />

        <section>
          <Title level={2} className="flex items-center gap-2">
            <BookOutlined /> Education
          </Title>
          <Row gutter={[24, 24]} className="mt-8">
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={4}>Bachelor of Computer Science</Title>
                <Paragraph className="text-lg font-medium">University Name • 2012 - 2016</Paragraph>
                <Paragraph>
                  Studied computer science with a focus on software development and user interface design. Graduated with honors.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={4}>UI/UX Design Certification</Title>
                <Paragraph className="text-lg font-medium">Design Institute • 2017</Paragraph>
                <Paragraph>
                  Completed an intensive program focused on user experience research, wireframing, prototyping, and modern design principles.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider />

        <section>
          <Title level={2} className="flex items-center gap-2">
            <ToolOutlined /> Skills
          </Title>
          <Row gutter={[24, 24]} className="mt-8">
            <Col xs={24} md={8}>
              <Card title="Languages" className="h-full">
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between">
                      <span>JavaScript</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>TypeScript</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>HTML/CSS</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Python</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Frameworks & Libraries" className="h-full">
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between">
                      <span>React</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Next.js</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Tailwind CSS</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Redux</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Tools & Others" className="h-full">
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between">
                      <span>Git</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Figma</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Jest/Testing</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>CI/CD</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
      </div>
    </PageLayout>
  );
} 